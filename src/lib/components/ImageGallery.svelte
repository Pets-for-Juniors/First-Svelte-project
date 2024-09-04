<script lang="ts">
	// import { derived } from 'svelte/store';
	import type { Animal } from '../../types/index';

	export let animalsPerPage: number;
	export let filteredAnimals: Animal[] = [];
	export let currentPage: number = 1;

	const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);

	const paginatedAnimals = filteredAnimals.slice(
		(currentPage - 1) * animalsPerPage,
		currentPage * animalsPerPage
	);

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}
</script>

<div class="imagesContainer">
	{#each paginatedAnimals as animal (animal.id)}
		<img src={animal.image} alt={animal.type} class="image" />
	{/each}
</div>

<button class="prevButton" on:click={prevPage} disabled={currentPage === 1}></button>
<button class="nextButton" on:click={nextPage} disabled={currentPage === totalPages}></button>

<style lang="scss">
	.prevButton,
	.nextButton {
		width: 30px;
		height: 40px;
		margin: 32px;
		background-color: inherit;
		background-position: center;
		background-repeat: no-repeat;
		border: none;
		cursor: pointer;
	}

	.prevButton {
		background-image: url('../assets/images/prev-btn.png');
	}

	.nextButton {
		background-image: url('../assets/images/next-btn.png');
	}
</style>
