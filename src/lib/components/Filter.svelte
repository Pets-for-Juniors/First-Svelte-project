<script lang="ts">
	import { onMount } from 'svelte';

	import { getAnimalAges, getAnimalBreeds, getAnimalGenders, getAnimalTypes } from '../../api/api';
	import type { AnimalAge, AnimalBreed, AnimalGender, AnimalType } from '../../types/index';

	export let onFilterChange = () => {};

	let types: AnimalType[] = [];
	let sexes: AnimalGender[] = [];
	let ages: AnimalAge[] = [];
	let breeds: AnimalBreed[] = [];

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

<form on:submit|preventDefault={onFilterChange} on:reset={onFilterChange} class="filterForm">
	<div class="selectWrapper">
		<select class="select" name="Вид животного">
			<option value="">Вид животного</option>
			{#each types as types}
				<option value={types.type}>{types.type}</option>
			{/each}
		</select>
	</div>

	<div class="selectWrapper">
		<select class="select" name="Пол">
			<option value="">Пол</option>
			{#each sexes as sexes}
				<option value={sexes.sex}>{sexes.sex}</option>
			{/each}
		</select>
	</div>

	<div class="selectWrapper">
		<select class="select" name="Возраст">
			<option value="">Возраст</option>
			{#each ages as ages}
				<option value={ages.title}>{ages.title}</option>
			{/each}
		</select>
	</div>

	<div class="selectWrapper">
		<select class="select" name="Порода">
			<option value="">Порода</option>
			{#each breeds as breeds}
				<option value={breeds.breed}>{breeds.breed}</option>
			{/each}
		</select>
	</div>

	<button class="searchButton" type="button">Поиск</button>
	<button class="resetButton" type="reset">Сбросить параметры</button>
</form>

<style lang="scss">
	.filterForm {
		display: flex;
		width: 100%;
		gap: 50px;
	}

	.selectWrapper {
		position: relative;

		&::after {
			content: '';
			width: 18px;
			height: 16px;

			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 9px;

			background-image: url('../assets/images/arrow.png');
			background-position: center;
			background-repeat: no-repeat;
		}
	}

	.select {
		width: 236px;
		padding: 24px 0 24px 13px;

		font-family: Inter-Regular, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);

		background-color: var(--red);

		border: none;
		border-radius: var(--border-radius-button);
		appearance: none;

		&:hover {
			cursor: pointer;
		}

		&:focus {
			outline: 5px solid rgb(76, 184, 67);
		}
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
