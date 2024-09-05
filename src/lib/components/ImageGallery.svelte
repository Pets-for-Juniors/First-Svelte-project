<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fetchAnimals } from '../../api/api';
	import { API_BASE_URL } from '../../constants/externalLinks';
	import type { Animal } from '../../types/index';

	export let animalsPerPage: number = 8;
	export let animals = writable<Animal[]>([]);
	export let currentPage = writable(1);

	let totalPages = 1;

	const loadAnimals = async (page: number) => {
		try {
			const response = await fetchAnimals(page, animalsPerPage);
			animals.set(response.data);
			totalPages = Math.ceil(response.count / animalsPerPage);
		} catch (error) {
			console.error('Не удалось загрузить и обработать данные:', error);
		}
	};

	onMount(async () => {
		await loadAnimals($currentPage);
	});

	function prevPage() {
		if ($currentPage > 1) {
			currentPage.update((n) => n - 1);
			loadAnimals($currentPage);
		}
	}

	function nextPage() {
		if ($currentPage < totalPages) {
			currentPage.update((n) => n + 1);
			loadAnimals($currentPage);
		}
	}
</script>

<div class="imagesContainer">
	<button class="prevButton" on:click={prevPage} disabled={$currentPage === 1}></button>

	{#if $animals.length === 0}
		<p>Загрузка...</p>
	{/if}

	{#each $animals as animal (animal.id)}
		<img src={`${API_BASE_URL}${animal.images}`} alt={animal.type} class="image" />
	{/each}

	<button class="nextButton" on:click={nextPage} disabled={$currentPage === totalPages}></button>
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

		margin-right: 32px;

		aspect-ratio: 1 / 1;

		object-fit: cover;

		border-radius: 50%;

		transition: all 0.3s ease;

		&:last-child {
			margin-right: 0;
		}

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
