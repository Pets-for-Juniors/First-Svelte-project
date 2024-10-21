<script lang="ts">
	import { EmployeeDataSource } from '$lib/dataSources/EmployeeDataSource';
	import { onMount } from 'svelte';
	import EmployeeCard from './EmployeeCard.svelte';

	let employeeDataSource: EmployeeDataSource;

	onMount(async () => {
		const ds = new EmployeeDataSource();
		await ds.load();
		employeeDataSource = ds;
	});

	// async function onPrevEmployee() {
	// 	employeeDataSource = await employeeDataSource.loadPrev();
	// }

	// async function onNextEmployee() {
	// 	employeeDataSource = await employeeDataSource.loadNext();
	// }

	$: loaded = employeeDataSource?.loaded;
</script>

<section class="team">
	{#if loaded}
		<!-- <EmployeeCard {employeeDataSource} {onPrevEmployee} {onNextEmployee} /> -->
		<EmployeeCard {employeeDataSource} />
	{:else}
		<p class="text">Загрузка...</p>
	{/if}
</section>

<style lang="scss">
	.team {
		width: 100%;
		max-width: var(--section-max-width);
		height: 100%;
		min-height: 1000px;

		padding: 75px 0 90px;
		display: flex;
	}

	.text {
		font-family: Inter-Regular, sans-serif;
		font-size: var(--large-text);
		letter-spacing: var(--large-text-letter-spacing);
		color: var(--red);
	}
</style>
