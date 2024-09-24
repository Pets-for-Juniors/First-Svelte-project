<script lang="ts">
	import { onMount } from 'svelte';
	import { getAnimalBreeds } from '../../api/api';
	import type { AnimalBreed, AnimalFilter } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	export let selected: string | null = null;
	export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};
	export let type: string | undefined;

	let breeds: AnimalBreed[] = [];

	onMount(async () => {
		try {
			breeds = await getAnimalBreeds();
		} catch (error) {
			console.error('Не удалось загрузить породы животных:', error);
		}
	});
</script>

<SelectElement name="Порода" options={breeds} nameField="breed" {selected} {onFilterChange} />
