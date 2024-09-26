<script lang="ts">
	import { AnimalDataSource } from '$lib/dataSources/AnimalDataSource';

	export let dataSource: AnimalDataSource;
	export let onPrevPage: () => void;
	export let onNextPage: () => void;
</script>

<div class="imagesContainer">
	<button class="prevButton" on:click={onPrevPage} disabled={!dataSource?.canPrev}></button>

	{#if dataSource?.loaded}
		{#each dataSource.results as animal (animal.id)}
			<img src={animal.images} alt={animal.type} class="image" />
		{/each}
	{:else}
		<p>Загрузка...</p>
	{/if}

	<button class="nextButton" on:click={onNextPage} disabled={!dataSource?.canNext}></button>
</div>

<style lang="scss">
	.imagesContainer {
		display: flex;
		width: 100%;

		align-items: center;
		justify-content: center;
	}

	.image {
		width: 125px;

		margin: 0 16px;

		aspect-ratio: 1 / 1;

		object-fit: cover;

		border-radius: 50%;

		transition: all 0.3s ease;

		&:hover {
			cursor: pointer;
			scale: 1.1;
		}
	}

	.prevButton,
	.nextButton {
		width: 30px;
		height: 40px;

		background-color: inherit;
		background-position: center;
		background-repeat: no-repeat;

		border: none;

		cursor: pointer;

		&:disabled {
			visibility: hidden;
		}
	}

	.prevButton {
		margin-right: 80px;
		background-image: url('../assets/images/prev-btn.png');
	}

	.nextButton {
		margin-left: 80px;
		background-image: url('../assets/images/next-btn.png');
	}
</style>
