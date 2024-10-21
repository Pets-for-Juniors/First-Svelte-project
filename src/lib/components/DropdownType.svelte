<script lang="ts">
	import { getAnimalTypes } from '$api/animalApi';
	import { onMount } from 'svelte';
	import type { AnimalType } from '../../types/animals';

	import SelectElement from './SelectElement.svelte';

	export let selected: AnimalType | undefined;
	export let onChange: (fieldName: string, value: AnimalType | undefined) => void = () => {};

	let types: AnimalType[] = [];

	onMount(async () => {
		try {
			types = await getAnimalTypes();
		} catch (error) {
			console.error('Не удалось загрузить типы животных:', error);
		}
	});

	const getSelectedAsString = () => {
		return selected ? JSON.stringify(selected) : undefined;
	};

	const onSelectedChanged = (e: string | undefined) => {
		onChange('type', e ? JSON.parse(e) : undefined);
	};
</script>

<SelectElement
	name="Вид животного"
	options={types}
	nameField="type"
	selected={getSelectedAsString()}
	onChange={onSelectedChanged}
/>
