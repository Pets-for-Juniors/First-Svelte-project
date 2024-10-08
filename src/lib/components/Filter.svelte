<script lang="ts">
	import { onMount } from 'svelte';
	import type {
		AnimalAge,
		AnimalBreed,
		AnimalFilter,
		AnimalGender,
		AnimalType
	} from '../../types/index';
	import DropdownAge from './DropdownAge.svelte';
	import DropdownBreed from './DropdownBreed.svelte';
	import DropdownSex from './DropdownSex.svelte';
	import DropdownType from './DropdownType.svelte';

	export let onFilterChange: (filters?: AnimalFilter | undefined) => void = () => {};

	let modelFilter: AnimalFilter;

	const onChange = (
		fieldName: string,
		value: AnimalType | AnimalBreed | AnimalGender | AnimalAge | undefined
	) => {
		(modelFilter as any)[fieldName] = value;
	};

	onMount(async () => {
		modelFilter = {
			type: undefined,
			sex: undefined,
			age: undefined,
			breed: undefined
		};
	});

	const onSearchClick = () => {
		onFilterChange(modelFilter);
	};

	const onResetClick = () => {
		modelFilter = {
			type: undefined,
			sex: undefined,
			age: undefined,
			breed: undefined
		};

		onFilterChange();
	};
</script>

<form class="filterForm" name="filterForm">
	<DropdownType selected={modelFilter?.type} {onChange} />
	<DropdownSex selected={modelFilter?.sex} {onChange} />
	<DropdownAge selected={modelFilter?.age} {onChange} />
	<DropdownBreed selected={modelFilter?.breed} type={modelFilter?.type} {onChange} />

	<button class="searchButton" type="button" on:click={onSearchClick}>Поиск</button>
	<button class="resetButton" type="reset" on:click={() => onResetClick()}
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
