<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fetchAnimals } from '../../api/api';
	import type { Animal } from '../../types/index';

	export let animalsPerPage: number = 8;
	export let filteredAnimals = writable<Animal[]>([]);
	export let currentOffset = writable(0);

	let totalItems = 0;

	onMount(async () => {
		await loadFilteredAnimals($currentOffset);
	});

	async function loadFilteredAnimals(offset: number) {
		try {
			const data = await fetchAnimals(offset, animalsPerPage);
			filteredAnimals.set(data.data || []);
			// console.log('галерея ', data.data);
			totalItems = data.count || 0;
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
		}
	}

	function prevPage() {
		if ($currentOffset > 0) {
			currentOffset.update((n) => n - animalsPerPage);
			loadFilteredAnimals($currentOffset);
		}
	}

	function nextPage() {
		if ($currentOffset + animalsPerPage < totalItems) {
			currentOffset.update((n) => n + animalsPerPage);
			loadFilteredAnimals($currentOffset);
		}
	}
</script>

<div class="imagesContainer">
	<button class="prevButton" on:click={prevPage} disabled={$currentOffset === 0}></button>

	{#if $filteredAnimals && $filteredAnimals.length > 0}
		{#each $filteredAnimals as animal (animal.id)}
			<img src={animal.images} alt={animal.type} class="image" />
		{/each}
	{:else}
		<p>Загрузка...</p>
	{/if}

	<button
		class="nextButton"
		on:click={nextPage}
		disabled={$currentOffset + animalsPerPage >= totalItems}
	></button>
</div>

<style lang="scss">
	.imagesContainer {
		display: flex;
		width: 100%;

		align-items: center;
		justify-content: center;
	}

	.image {
		width: 125px;

		margin: 0 16px;

		aspect-ratio: 1 / 1;

		object-fit: cover;

		border-radius: 50%;

		transition: all 0.3s ease;

		&:hover {
			cursor: pointer;
			scale: 1.1;
		}
	}

	.prevButton,
	.nextButton {
		width: 30px;
		height: 40px;

		background-color: inherit;
		background-position: center;
		background-repeat: no-repeat;

		border: none;

		cursor: pointer;
	}

	.prevButton {
		margin-right: 80px;
		background-image: url('../assets/images/prev-btn.png');
	}

	.nextButton {
		margin-left: 80px;
		background-image: url('../assets/images/next-btn.png');
	}
</style>
