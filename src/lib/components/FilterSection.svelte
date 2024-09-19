<script lang="ts">
	import { writable } from 'svelte/store';
	import { API_BASE_URL } from '../../constants/externalLinks';

	import type { Animal } from '../../types/index';

	import Filter from './Filter.svelte';
	import ImageGallery from './ImageGallery.svelte';

	const filteredAnimals = writable<Animal[]>([]);
	const animalsPerPage = 8;

	async function onFilterChange(
		filters?: {
			type: string;
			sex: string;
			age: { minAge: number; maxAge: number };
			breed: string;
		} | null
	) {
		let query = [];
		if (filters) {
			if (filters.type) query.push(`type=${filters.type}`);
			if (filters.sex) query.push(`sex=${filters.sex}`);
			if (filters.age) query.push(`age__gte=${filters.age.minAge}&age__lte=${filters.age.maxAge}`);
			if (filters.breed) query.push(`breed=${filters.breed}`);
		}

		const queryString = query.length ? `?${query.join('&')}` : '';

		try {
			const response = await fetch(`${API_BASE_URL}/api/pets/${queryString}`);
			const data = await response.json();
			filteredAnimals.set(data.data || []);
			console.log('фильтр ', data.data);
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
		}
	}
</script>

<section class="filter">
	<div class="filterWrapper">
		<Filter {onFilterChange} />

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
