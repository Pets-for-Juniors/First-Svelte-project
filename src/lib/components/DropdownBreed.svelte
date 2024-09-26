<script lang="ts">
	import { getAnimalBreeds } from '$api/api';
	import { onMount } from 'svelte';
	import type { AnimalBreed, AnimalType } from '../../types/index';

	import SelectElement from './SelectElement.svelte';

	export let selected: AnimalBreed | undefined;
	export let onChange: (fieldName: string, value: AnimalBreed | undefined) => void = () => {};
	export let type: AnimalType | undefined;

	let breeds: AnimalBreed[] = [];
	let currentType: AnimalType | undefined;

	onMount(async () => {
		await loadData(true);
	});

	const loadData = async (firstLoad: boolean) => {
		try {
			if (firstLoad || type?.type !== currentType?.type) {
				breeds = await getAnimalBreeds(type?.type);
				if (selected) {
					onChange('breed', undefined);
				}

				currentType = type;
			}
		} catch (error) {
			console.error('Не удалось загрузить породы животных:', error);
		}
	};

	const getSelectedAsString = () => {
		return selected ? JSON.stringify(selected) : undefined;
	};

	const onSelectedChanged = (e: string | undefined) => {
		onChange('breed', e ? JSON.parse(e) : undefined);
	};

	$: type, loadData(false);
</script>

<SelectElement
	name="Порода"
	options={breeds}
	nameField="breed"
	selected={getSelectedAsString()}
	onChange={onSelectedChanged}
/>
