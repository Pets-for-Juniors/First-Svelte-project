<script lang="ts">
	import { getAnimalGenders } from '$api/api';
	import { onMount } from 'svelte';
	import type { AnimalGender } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	export let selected: AnimalGender | undefined;
	export let onChange: (fieldName: string, value: AnimalGender | undefined) => void = () => {};

	let sexes: AnimalGender[] = [];

	onMount(async () => {
		try {
			sexes = await getAnimalGenders();
		} catch (error) {
			console.error('Не удалось загрузить пол животных:', error);
		}
	});

	const getSelectedAsString = () => {
		return selected ? JSON.stringify(selected) : undefined;
	};

	const onSelectedChanged = (e: string | undefined) => {
		onChange('sex', e ? JSON.parse(e) : undefined);
	};
</script>

<SelectElement
	name="Пол"
	options={sexes}
	nameField="sex"
	selected={getSelectedAsString()}
	onChange={onSelectedChanged}
/>
