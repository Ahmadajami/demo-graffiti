<!-- Main Content -->

<div class="w-full min-w-[1024px]">
	<div class=" relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
		<!-- Left/Main Section -->
		<div class="lg:col-span-2">
			<h2 class="mb-4 text-sm text-gray-600">HOME / BLOG</h2>

			<div class="mb-8 h-96 w-full">
				<img src="../art/art.jpg" alt="art gallarey" />
			</div>

			<!-- Recent Posts -->
			<h3 class="mb-6 text-2xl font-bold">Recent Posts</h3>

			<div class="space-y-8">
				<!-- Single Post -->
				{#each Array(20) as _, i}
					<div class="hover: flex space-x-4">
						<div class="h-24 w-32 flex-shrink-0 bg-black"></div>
						<div>
							<h4 class="font-semibold">
								{i + 1} Cookbooks From Chefs That Can Make Us Better Cooks
							</h4>
							<p class="mb-2 line-clamp-3 text-lg text-gray-500">
								12 Cookbooks From Chefs That Can Make Us Better That Can Make Us Better That Can
								Make Us Better Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias
								ipsam est voluptate, rem qui ullam! Excepturi voluptas illo fugiat quae! Veniam
								pariatur ipsum hic sed perferendis incidunt totam quam?
							</p>
							<button class="text-sm text-blue-500">Share</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<!-- Sidebar -->
		<aside class="space-y-8">
			<!-- Logo and About -->

			<div class="text-center">
				<img src="../Logo.png" alt="Graffiti Resin Logo" class="mx-auto mb-4 h-auto w-40" />
				<div class="mx-auto my-4 h-32 w-32 rounded-full bg-black"></div>
				<p class="text-sm text-gray-600">
					12 Cookbooks From Chefs That Can Make Us Better That Can Make Us Better That Can Make Us
					Better
				</p>
			</div>
			<!-- Follow Us -->
			<div>
				<h3 class="mb-2 font-semibold">Follow Us</h3>
				<ul class="space-y-2">
					<li>
						<a href="#" class="flex items-center space-x-2 text-sm text-gray-700 hover:underline"
							><span>🔵</span> <span>Facebook</span></a
						>
					</li>
					<li>
						<a href="#" class="flex items-center space-x-2 text-sm text-gray-700 hover:underline"
							><span>🔵</span> <span>Twitter</span></a
						>
					</li>
					<li>
						<a href="#" class="flex items-center space-x-2 text-sm text-gray-700 hover:underline"
							><span>🔵</span> <span>Instagram</span></a
						>
					</li>
				</ul>
			</div>

			<!-- Widgets -->
			<div>
				<h3 class="mb-2 font-semibold">Recent Posts</h3>
				<div class="h-24 w-full bg-gray-300"></div>
			</div>

			<div>
				<h3 class="mb-2 font-semibold">Facebook</h3>
				<div class="h-24 w-full bg-gray-300"></div>
			</div>

			<div>
				<h3 class="mb-2 font-semibold">Popular</h3>
				<div class="h-24 w-full bg-gray-300"></div>
			</div>
		</aside>
	</div>
</div>
