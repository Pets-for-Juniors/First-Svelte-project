<script lang="ts">
	import { onMount } from 'svelte';
	import { getAnimalAges } from '../../api/api';
	// import type { AnimalFilter, AnimalAge } from '../../types/index';
	import type { AnimalAge } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	// export let selected: AnimalGender | null = null;
	// export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};

	let ages: AnimalAge[] = [];

	onMount(async () => {
		try {
			ages = await getAnimalAges();
		} catch (error) {
			console.error('Не удалось загрузить возраст животных:', error);
		}
	});
</script>

<SelectElement name="Возраст" options={ages} nameField="title" />

<style lang="scss"></style>
