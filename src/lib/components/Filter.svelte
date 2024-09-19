<script lang="ts">
	import { onMount } from 'svelte';

	import { getAnimalAges, getAnimalBreeds, getAnimalGenders, getAnimalTypes } from '../../api/api';
	import type { AnimalAge, AnimalBreed, AnimalGender, AnimalType } from '../../types/index';
	import SelectElement from './SelectElement.svelte';

	export let onFilterChange: (filters: {
		type: string;
		sex: string;
		age: { min: number; max: number };
		breed: string;
	}) => void = () => {};

	let types: AnimalType[] = [];
	let sexes: AnimalGender[] = [];
	let ages: AnimalAge[] = [];
	let breeds: AnimalBreed[] = [];

	const onSearchClick = () => {
		const filters = {
			type: (document.querySelector('select[name="Вид животного"]') as HTMLSelectElement).value,
			sex: (document.querySelector('select[name="Пол"]') as HTMLSelectElement).value,
			age: (document.querySelector('select[name="Возраст"]') as HTMLSelectElement).value,
			breed: (document.querySelector('select[name="Порода"]') as HTMLSelectElement).value
		};

		onFilterChange(filters);
	};

	onMount(async () => {
		try {
			types = await getAnimalTypes();
			sexes = await getAnimalGenders();
			ages = await getAnimalAges();
			breeds = await getAnimalBreeds();
		} catch (error) {
			console.error('Не удалось загрузить и обработать данные:', error);
		}
	});
</script>

<form class="filterForm">
	<SelectElement name="Вид животного" options={types} nameField="type" />
	<SelectElement name="Пол" options={sexes} nameField="sex" />
	<SelectElement name="Возраст" options={ages} nameField="title" />
	<SelectElement name="Порода" options={breeds} nameField="breed" />

	<button class="searchButton" type="button" on:click={onSearchClick}>Поиск</button>
	<button class="resetButton" type="reset" on:click={onFilterChange}>Сбросить параметры</button>
</form>

<style lang="scss">
	.filterForm {
		display: flex;
		width: 100%;
		gap: 50px;
	}

	.searchButton {
		width: 98px;
		margin-left: 30px;
		padding: 24px 7px;

		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);

		background-color: var(--turquoise);

		border: none;
		border-radius: var(--border-radius-button);

		&:hover {
			cursor: pointer;
		}
	}

	.resetButton {
		width: fit-content;
		padding: 0;

		font-family: Inter-SemiBold, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);

		border: none;
		background-color: transparent;

		text-decoration: underline 2px;
		text-underline-offset: 10px;

		&:hover {
			cursor: pointer;
		}
	}
</style>
