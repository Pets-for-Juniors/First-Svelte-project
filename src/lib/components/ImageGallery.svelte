<script lang="ts">
	import { AnimalDataSource } from '$lib/dataSources/AnimalDataSource';

	export let dataSource: AnimalDataSource;
	export let onPrevPage: () => void = () => {};
	export let onNextPage: () => void = () => {};

	const onNext = () => {
		loaded = false;
		onNextPage();
	};

	const onPrev = () => {
		loaded = false;
		onPrevPage();
	};

	$: loaded = dataSource?.loaded;
</script>

<div class="imagesContainer">
	<button class="prevButton" on:click={onPrev} disabled={!dataSource?.canPrev || !loaded}></button>

	{#if loaded}
		{#if dataSource.results.length === 0}
			<p class="text">Ничего не найдено</p>
		{/if}
		{#each dataSource.results as animal (animal.id)}
			<img src={animal.images} alt={animal.type} class="image" />
		{/each}
	{:else}
		<p class="text">Загрузка...</p>
	{/if}

	<button class="nextButton" on:click={onNext} disabled={!dataSource?.canNext || !loaded}></button>
</div>

<style lang="scss">
	.imagesContainer {
		display: flex;
		width: 100%;
		height: 100%;
		min-height: 125px;

		align-items: center;
		justify-content: center;
	}

	.image {
		background-color: var(--dark-blue);
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

	.text {
		font-family: Inter-Regular, sans-serif;
		font-size: var(--large-text);
		letter-spacing: var(--large-text-letter-spacing);
		color: var(--white);
	}
</style>
