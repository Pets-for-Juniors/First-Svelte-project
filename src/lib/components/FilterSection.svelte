<script lang="ts">
	import type { AnimalFilter } from '../../types/animals';

	import { AnimalDataSource } from '$lib/dataSources/AnimalDataSource';
	import { onMount } from 'svelte';
	import Filter from './Filter.svelte';
	import ImageGallery from './ImageGallery.svelte';

	let animalsDataSource: AnimalDataSource;

	onMount(async () => {
		const ds = new AnimalDataSource();
		await ds.load();
		animalsDataSource = ds;
	});

	async function onFilterChange(filters?: AnimalFilter | undefined) {
		const ds = new AnimalDataSource(filters);
		animalsDataSource = await ds.load();
	}

	async function onPrevPage() {
		animalsDataSource = await animalsDataSource.loadPrev();
	}

	async function onNextPage() {
		animalsDataSource = await animalsDataSource.loadNext();
	}
</script>

<section class="filter">
	<div class="filterWrapper">
		<Filter {onFilterChange} />

		<p class="text">Воспользуйтесь фильтром, чтобы найти идеального друга!</p>

		<ImageGallery dataSource={animalsDataSource} {onPrevPage} {onNextPage} />
	</div>
</section>

<style lang="scss">
	.filter {
		width: 100%;
		height: 100%;
		min-height: 370px;
		padding: 30px 0 70px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--amber);
	}

	.filterWrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--section-max-width);
		gap: 26px;
	}

	.text {
		font-family: Inter-LightItalic, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);
	}
</style>
