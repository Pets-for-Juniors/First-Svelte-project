<script lang="ts">
	import { onMount } from 'svelte';
	import { getAnimalAges } from '../../api/api';
	import type { AnimalAge, AnimalFilter } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	export let selected: string | null = null;
	export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};

	let ages: AnimalAge[] = [];

	onMount(async () => {
		try {
			ages = await getAnimalAges();
		} catch (error) {
			console.error('Не удалось загрузить возраст животных:', error);
		}
	});
</script>

<SelectElement name="Возраст" options={ages} nameField="title" {selected} {onFilterChange} />
