<script lang="ts">
	import { writable } from 'svelte/store';
	import type { Animal } from '../../types/index';
	import Filter from './Filter.svelte';
	import ImageGallery from './ImageGallery.svelte';

	const animals = writable<Animal[]>([]);
	const filteredAnimals = writable<Animal[]>([]);
	const animalsPerPage = 8;
</script>

<section class="filter">
	<div class="filterWrapper">
		<Filter animals={$animals} />

		<p class="text">Воспользуйтесь фильтром, чтобы найти идеального друга!</p>

		<ImageGallery {animalsPerPage} {filteredAnimals} />
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
