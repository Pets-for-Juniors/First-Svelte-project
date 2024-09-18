<script lang="ts">
	import { onMount } from 'svelte';

	import { getAnimalAges, getAnimalBreeds, getAnimalGenders, getAnimalTypes } from '../../api/api';
	import type { AnimalAge, AnimalBreed, AnimalGender, AnimalType } from '../../types/index';

	// export let animals: Animal[] = [];
	// export let filteredAnimals = writable<Animal[]>([]);

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

	// async function filterAnimals(event: Event) {
	// 	event.preventDefault();

	// 	const filters = {
	// 		type: (document.querySelector('select[name="Вид животного"]') as HTMLSelectElement).value,
	// 		sex: (document.querySelector('select[name="Пол"]') as HTMLSelectElement).value,
	// 		age: (document.querySelector('select[name="Возраст"]') as HTMLSelectElement).value,
	// 		breed: (document.querySelector('select[name="Порода"]') as HTMLSelectElement).value
	// 	};

	// 	let query = [];
	// 	if (filters.type) query.push(`type=${filters.type}`);
	// 	if (filters.sex) query.push(`sex=${filters.sex}`);
	// 	if (filters.age) query.push(`age=${filters.age}`);
	// 	if (filters.breed) query.push(`breed=${filters.breed}`);

	// 	const queryString = query.length ? `?${query.join('&')}` : '';

	// 	try {
	// 		const response = await fetch(`${API_BASE_URL}/api/pets/${queryString}`);
	// 		const data = await response.json();
	// 		filteredAnimals.set(data.data || []);
	// 		console.log('фильтр ', data.data);
	// 	} catch (error) {
	// 		console.error('Ошибка при загрузке данных:', error);
	// 	}
	// }
</script>

<!-- <form on:submit|preventDefault={filterAnimals} class="filterForm"> -->
<form class="filterForm">
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
