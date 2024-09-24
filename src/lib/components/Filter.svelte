<script lang="ts">
	import type { AnimalFilter } from '../../types/index';
	import DropdownAge from './DropdownAge.svelte';
	import DropdownBreed from './DropdownBreed.svelte';
	import DropdownSex from './DropdownSex.svelte';
	import DropdownType from './DropdownType.svelte';

	export let onFilterChange: (filters?: AnimalFilter | null) => void = () => {};

	// let modelFilter: AnimalFilter;

	const onSearchClick = () => {
		const form = document.querySelector('form[name="filterForm"]') as HTMLFormElement;
		const formData = new FormData(form);

		const filters = {
			type:
				formData.get('Вид животного') && JSON.parse(formData.get('Вид животного') as string).type,
			sex: formData.get('Пол') && JSON.parse(formData.get('Пол') as string).sex,
			age: formData.get('Возраст') && JSON.parse(formData.get('Возраст') as string),
			breed: formData.get('Порода') && JSON.parse(formData.get('Порода') as string).breed
		};

		console.log('filters', filters);
		onFilterChange(filters);
	};
</script>

<form class="filterForm" name="filterForm">
	<DropdownType />
	<DropdownSex />
	<DropdownAge />
	<DropdownBreed />

	<button class="searchButton" type="button" on:click={onSearchClick}>Поиск</button>
	<button class="resetButton" type="reset" on:click={() => onFilterChange()}
		>Сбросить параметры</button
	>
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
