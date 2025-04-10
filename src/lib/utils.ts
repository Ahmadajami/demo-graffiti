import { type Icon as IconType } from '@lucide/svelte';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type BentoGridItem = {
	id: number;
	icon: IconType;
	href: string;
	backgroundImageUrl: string;
};

export type BentoGridItems = [
	BentoGridItem,
	BentoGridItem,
	BentoGridItem,
	BentoGridItem,
	BentoGridItem,
	BentoGridItem,
	BentoGridItem,
	BentoGridItem,
	BentoGridItem
];
