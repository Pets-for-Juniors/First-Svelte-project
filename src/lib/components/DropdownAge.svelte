<script lang="ts">
	import { getAnimalAges } from '$api/api';
	import { onMount } from 'svelte';
	import type { AnimalAge } from '../../types/index';

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
</script>

<SelectElement
	name="Возраст"
	options={ages}
	nameField="title"
	selected={JSON.stringify(selected)}
	onChange={(e) => onChange('age', e ? JSON.parse(e) : undefined)}
/>
