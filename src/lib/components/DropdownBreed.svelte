<script lang="ts">
	import { onMount } from 'svelte';
	import { getAnimalBreeds } from '../../api/api';
	// import type { AnimalFilter, AnimalBreed } from '../../types/index';
	import type { AnimalBreed } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	// export let selected: AnimalBreed | null = null;
	// export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};

	let breeds: AnimalBreed[] = [];

	onMount(async () => {
		try {
			breeds = await getAnimalBreeds();
		} catch (error) {
			console.error('Не удалось загрузить породы животных:', error);
		}
	});
</script>

<SelectElement name="Порода" options={breeds} nameField="breed" />

<style lang="scss"></style>
