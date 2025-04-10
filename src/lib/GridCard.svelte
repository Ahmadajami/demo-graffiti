<script>
	import { m } from './paraglide/messages';
</script>

<div class="card">
	<div class="header mx-3">
		<!-- Text Container -->
		<div class="title-container">
			<h1 class="title">
				<span class="main-title">
					{m.title_card()}
				</span>
				<hr class="  my-3 h-1 w-full rounded-sm border-0 bg-[#a71580b2]" />
			</h1>
		</div>

		<!-- Image Container -->
		<div class="image-container rounded-lg bg-black">
			<img src="art/gridcard.jpg" alt="Epoxy flooring illustration" class="header-image" />
		</div>
	</div>

	<ul class="features">
		<li>
			{m.card_list()}
		</li>
		<li>
			{m.card_list_second()}
		</li>
	</ul>
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 12px;
		padding: 1.5rem;
		max-width: 700px;
		margin: 1rem auto;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.header {
		display: flex;
		gap: 1.5rem;
	}

	.title-container,
	.image-container {
		flex: 0 0 50%;
		box-sizing: border-box;
		height: 100%;
	}

	.title-container {
		min-width: 0;
		padding-left: 1rem;
	}

	.main-title {
		display: block;
		color: #2d3748;
		font-size: 1.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: right;
		white-space: wrap;
	}

	.image-container {
		height: 100px;
		position: relative;
	}

	.header-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}
	.features {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.features li {
		white-space: wrap;
		min-width: 0;
		position: relative;
		padding-right: 0.9rem;
		margin-bottom: 1rem;
		color: #4a5568;
		line-height: 1.6;
		font-size: 0.9rem;
		text-align: start;
		text-overflow: ellipsis;
	}

	.features li:before {
		content: '•';
		color: #a71580;
		position: absolute;
		right: 0;
		padding-left: 4px;
		font-size: 22px;
		right: 0.2rem;
		top: 50%;
		transform: Scale(1.5) translateY(-50%);
		line-height: 1;
	}

	@media (max-width: 640px) {
		.header {
			flex-direction: column;
		}

		.title-container,
		.image-container {
			flex: 0 0 100%;
			width: 100%;
		}

		.image-container {
			height: 200px;
		}

		.title-container {
			padding-left: 0;
		}
	}
</style>
