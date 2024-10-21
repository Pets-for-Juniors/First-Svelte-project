<script lang="ts">
	import { getAnimalAges } from '$api/api';
	import { onMount } from 'svelte';
	import type { AnimalAge } from '../../types/animals';

	import SelectElement from './SelectElement.svelte';

	export let selected: AnimalAge | undefined;
	export let onChange: (fieldName: string, value: AnimalAge | undefined) => void = () => {};

	let ages: AnimalAge[] = [];

	onMount(async () => {
		try {
			ages = await getAnimalAges();
		} catch (error) {
			console.error('Не удалось загрузить возраст животных:', error);
		}
	});

	const getSelectedAsString = () => {
		return selected ? JSON.stringify(selected) : undefined;
	};

	const onSelectedChanged = (e: string | undefined) => {
		onChange('age', e ? JSON.parse(e) : undefined);
	};
</script>

<SelectElement
	name="Возраст"
	options={ages}
	nameField="title"
	selected={getSelectedAsString()}
	onChange={onSelectedChanged}
/>
