<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fetchAnimals } from '../../api/api';
	import type { Animal } from '../../types/index';

	export let animals: Animal[] = [];
	export let filteredAnimals = writable<Animal[]>([]);
	export let currentPage = writable(1);

	let types: string[] = [];
	let genders: string[] = [];
	let ages: string[] = [];
	let breeds: string[] = [];

	onMount(async () => {
		try {
			const response = await fetchAnimals();
			animals = response.data;
			console.log(animals);
			types = [...new Set(animals.map((animal) => animal.type))];
			genders = [...new Set(animals.map((animal) => animal.sex))];
			ages = [...new Set(animals.map((animal) => animal.age.toString()))];
			breeds = [...new Set(animals.map((animal) => animal.breed))];
			filteredAnimals.set(animals);
		} catch (error) {
			console.error('Не удалось загрузить и обработать данные:', error);
		}
	});

	function filterAnimals(event: Event) {
		event.preventDefault();
		const filters = {
			type: (document.querySelector('select[name="Вид животного"]') as HTMLSelectElement).value,
			gender: (document.querySelector('select[name="Пол"]') as HTMLSelectElement).value,
			age: (document.querySelector('select[name="Возраст"]') as HTMLSelectElement).value,
			breed: (document.querySelector('select[name="Порода"]') as HTMLSelectElement).value
		};

		currentPage.set(1);
		filteredAnimals.set(
			animals.filter(
				(animal) =>
					(!filters.type || animal.type === filters.type) &&
					(!filters.gender || animal.sex === filters.gender) &&
					(!filters.age || animal.age === Number(filters.age)) &&
					(!filters.breed || animal.breed === filters.breed)
			)
		);
	}
</script>

<form on:submit|preventDefault={filterAnimals} class="filterForm">
	<div class="selectWrapper">
		<select class="select" name="Вид животного">
			<option value="">Вид животного</option>
			{#each types as type}
				<option value={type}>{type}</option>
			{/each}
		</select>
	</div>

	<div class="selectWrapper">
		<select class="select" name="Пол">
			<option value="">Пол</option>
			{#each genders as gender}
				<option value={gender}>{gender}</option>
			{/each}
		</select>
	</div>

	<div class="selectWrapper">
		<select class="select" name="Возраст">
			<option value="">Возраст</option>
			{#each ages as age}
				<option value={age}>{age}</option>
			{/each}
		</select>
	</div>

	<div class="selectWrapper">
		<select class="select" name="Порода">
			<option value="">Порода</option>
			{#each breeds as breed}
				<option value={breed}>{breed}</option>
			{/each}
		</select>
	</div>

	<button class="searchButton" type="submit">Поиск</button>
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
