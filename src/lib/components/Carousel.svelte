<script lang="ts">
	let imgContainer: HTMLElement;

	function stopImageRotation(intervalId: any) {
		if (intervalId) {
			clearInterval(intervalId);
		}
	}

	$effect(() => {
		if (!imgContainer) return;
		const intervalId = setInterval(() => {
			let last = imgContainer!.firstElementChild;
			last!.remove();
			imgContainer!.appendChild(last!);
		}, 2000);
		return () => {
			stopImageRotation(intervalId);
		};
	});
</script>

<section class="soso">
	<div id="img-container" bind:this={imgContainer}>
		<div class="box">
			<img src="gallery/resin_gallery.png" alt="Resin Gallery  " />
		</div>
		<div class="box">
			<img src="gallery/resin_gallery_second.png" alt="Resin Gallery" />
		</div>
		<div class="box">
			<img src="gallery/resin_gallery_third.png" alt="Resin Gallery" />
		</div>
	</div>
</section>

<style>
	.soso {
		position: relative;
		z-index: -1;
		padding: clamp(3em, 6vw, 5em);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column-reverse;
		gap: 2em;
		background: radial-gradient(var(--body-bg), #000);
	}

	@media (width>768px) {
		.soso {
			flex-direction: row;
		}
	}
	#img-container {
		height: 230px;
		width: 230px;
		perspective: 500px;
		transform-style: preserve-3d;
		/* Added for context if needed */
		position: relative;
	}
	.box {
		height: 300px; /* Note: Larger than container on small screens */
		width: 300px; /* Note: Larger than container on small screens */
		position: absolute;
		top: 50%;
		border: 1px solid #bbb;
		border-radius: 50%;
		box-shadow: 0 0 8px hsla(0deg, 0%, 0%, 75%);
		transition: 800ms ease-in-out;
		overflow: hidden; /* This clips the oversized image */
	}

	/* --- NEW RULE ADDED HERE --- */
	.box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	/* --- END OF NEW RULE --- */

	.box:first-of-type {
		right: 15%;
		opacity: 0;
		z-index: 5;
		transform: translate(50%, -50%) rotateY(10deg);
	}
	.box:nth-of-type(2) {
		right: 20%;
		opacity: 1;
		z-index: 5;
		transform: translate(50%, -50%) rotateY(10deg);
	}
	.box:nth-of-type(3) {
		right: 25%;
		opacity: 0.75;
		z-index: 10;
		transform: scale3d(0.5, 0.5, 0.5) translate(50%, -50%) rotateY(10deg) translateZ(-40px);
	}
	.box:nth-of-type(4) {
		right: 30%;
		opacity: 0.5;
		z-index: 5;
		transform: scale3d(0.5, 0.5, 0.5) translate(50%, -50%) rotateY(10deg) translateZ(-100px);
	}

	@media (width>768px) {
		#img-container {
			/* Adjust container size too if needed */
			height: 400px;
			width: 400px;
		}
		.soso {
			flex-direction: row;
		}
		.box {
			height: 400px;
			width: 400px;
		}
	}
</style>
