import type { PageServerLoad, Actions } from './$types';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

// Initialize DOMPurify with JSDOM window context
const { window } = new JSDOM('');
const purify = DOMPurify(window);

// Utility function to sanitize input and check for unsafe content
const sanitize = (dirty: string): string => {
	const sanitized = purify.sanitize(dirty, {
		ALLOWED_TAGS: [],
		FORBID_ATTR: ['style', 'script', 'img']
	});

	// Check for unsafe content (JavaScript code, inline event handlers, etc.)
	const unsafePattern = /(javascript:|console\.log\(|<script|on\w+=|<iframe)/i;

	// If sanitized content is empty or contains unsafe patterns, return an empty string
	if (dirty !== sanitized || sanitized === '' || unsafePattern.test(sanitized)) {
		return ''; // Signal invalid content (sanitize harm detected)
	}

	return sanitized.trim();
};

export const load: PageServerLoad = async () => {
	return {};
};

// Validation schema for contact us form
const contactUsSchema = z
	.object({
		email: z.string().email({ message: 'Email is  Required' }),
		subject: z.string().min(2, { message: 'Subject is  Required ' }).transform(sanitize),
		message: z.string().min(2, { message: 'Message is  Required ' }).transform(sanitize)
	})
	.strict();

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		console.log(data);
		// Sanitizing the fields before validating the schema
		const sanitizedSubject = sanitize(data.subject as string);
		const sanitizedMessage = sanitize(data.message as string);

		// If sanitization fails (empty string), return a validation error
		if (sanitizedSubject === '' || sanitizedMessage === '') {
			return fail(400, { success: false, message: ' Invalid input detected' });
		}

		// Update sanitized fields in the form data
		data.subject = sanitizedSubject;
		data.message = sanitizedMessage;

		// Validate incoming data using the schema
		const result = contactUsSchema.safeParse(data);

		if (!result.success) {
			const validationErrors = result.error.flatten().fieldErrors;
			const errorResponse = Object.fromEntries(
				Object.entries(validationErrors)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					.filter(([_, errors]) => errors.length > 0)
					.map(([field, errors]) => [field, errors[0]])
			);

			return fail(400, { success: false, validation: errorResponse });
		}

		return { success: true, message: 'Message sent successfully!' };
	}
} satisfies Actions;
