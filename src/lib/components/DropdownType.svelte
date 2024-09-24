<script lang="ts">
	import { onMount } from 'svelte';
	import { getAnimalTypes } from '../../api/api';
	import type { AnimalFilter, AnimalType } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	export let selected: string | null = null;
	export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};

	let types: AnimalType[] = [];

	onMount(async () => {
		try {
			types = await getAnimalTypes();
		} catch (error) {
			console.error('Не удалось загрузить типы животных:', error);
		}
	});
</script>

<SelectElement name="Вид животного" options={types} nameField="type" {selected} {onFilterChange} />
