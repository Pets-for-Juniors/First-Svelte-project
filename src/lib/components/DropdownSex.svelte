<script lang="ts">
	import { onMount } from 'svelte';
	import { getAnimalGenders } from '../../api/api';
	// import type { AnimalFilter, AnimalGender } from '../../types/index';
	import type { AnimalGender } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	// export let selected: AnimalGender | null = null;
	// export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};

	let sexes: AnimalGender[] = [];

	onMount(async () => {
		try {
			sexes = await getAnimalGenders();
		} catch (error) {
			console.error('Не удалось загрузить пол животных:', error);
		}
	});
</script>

<SelectElement name="Пол" options={sexes} nameField="sex" />

<style lang="scss"></style>
