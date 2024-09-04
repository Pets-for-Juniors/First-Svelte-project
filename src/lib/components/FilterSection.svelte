<script lang="ts">
	import { fetchAnimals } from '../../api/api';
	import type { Animal } from '../../types/index';

	let animals: Animal[] = [];
	let currentPage = 1;
	const animalsPerPage = 8;

	document.addEventListener('DOMContentLoaded', async () => {
		try {
			const animals = await fetchAnimals();
			populateFilters(animals);
			updateImages();
		} catch (error) {
			console.error('Не удалось загрузить и обработать данные:', error);
		}
	});

	function populateFilters(animals: Animal[]) {
		const types = [...new Set(animals.map((animal) => animal.type))];
		const genders = [...new Set(animals.map((animal) => animal.sex))];
		const ages = [...new Set(animals.map((animal) => animal.age))];
		const breeds = [...new Set(animals.map((animal) => animal.breed))];

		populateSelect('Вид животного', types);
		populateSelect('Пол', genders);
		populateSelect('Возраст', ages.map(String));
		populateSelect('Порода', breeds);
	}

	function populateSelect(selectName: string, options: string[]) {
		const selectElement = document.querySelector(`select[name="${selectName}"]`);
		options.forEach((option) => {
			const optionElement = document.createElement('option');
			optionElement.value = option;
			optionElement.textContent = option;
			selectElement?.appendChild(optionElement);
		});
	}

	function updateImages() {
		const imagesContainer = document.querySelector('.imagesContainer');
		if (!imagesContainer) return;

		const start = (currentPage - 1) * animalsPerPage;
		const end = start + animalsPerPage;
		const currentanimals = animals.slice(start, end);

		imagesContainer.innerHTML = '';
		currentanimals.forEach((animal) => {
			const imgElement = document.createElement('img');
			imgElement.src = animal.image;
			imgElement.alt = animal.type;
			imgElement.className = 'image';
			imagesContainer.appendChild(imgElement);
		});

		updatePaginationButtons();
	}

	function updatePaginationButtons() {
		const prevButton = document.querySelector('.prevButton') as HTMLButtonElement;
		const nextButton = document.querySelector('.nextButton') as HTMLButtonElement;

		prevButton.disabled = currentPage === 1;
		nextButton.disabled = currentPage * animalsPerPage >= animals.length;
	}

	document.querySelector('.searchButton')?.addEventListener('click', (event) => {
		event.preventDefault();
		const filters = {
			type: (document.querySelector('select[name="Вид животного"]') as HTMLSelectElement).value,
			gender: (document.querySelector('select[name="Пол"]') as HTMLSelectElement).value,
			age: (document.querySelector('select[name="Возраст"]') as HTMLSelectElement).value,
			breed: (document.querySelector('select[name="Порода"]') as HTMLSelectElement).value
		};

		filteranimals(filters);
	});

	function filteranimals(filters: { type: string; gender: string; age: string; breed: string }) {
		currentPage = 1;
		animals = animals.filter(
			(animal) =>
				(!filters.type || animal.type === filters.type) &&
				(!filters.gender || animal.sex === filters.gender) &&
				(!filters.age || animal.age === Number(filters.age)) &&
				(!filters.breed || animal.breed === filters.breed)
		);
		updateImages();
	}

	document.querySelector('.prevButton')?.addEventListener('click', () => {
		if (currentPage > 1) {
			currentPage--;
			updateImages();
		}
	});

	document.querySelector('.nextButton')?.addEventListener('click', () => {
		if (currentPage * animalsPerPage < animals.length) {
			currentPage++;
			updateImages();
		}
	});
</script>

<section class="filter">
	<div class="filterWrapper">
		<form class="filterForm">
			<div class="selectWrapper">
				<select class="select" name="Вид животного">
					<option value="">Вид животного</option>
				</select>
			</div>

			<div class="selectWrapper">
				<select class="select" name="Пол">
					<option value="">Пол</option>
				</select>
			</div>

			<div class="selectWrapper">
				<select class="select" name="Возраст">
					<option value="">Возраст</option>
				</select>
			</div>

			<div class="selectWrapper">
				<select class="select" name="Порода">
					<option value="">Порода</option>
				</select>
			</div>

			<button class="searchButton" type="submit">Поиск</button>
			<button class="resetButton" type="reset">Сбросить параметры</button>
		</form>
		<p class="text">Воспользуйтесь фильтром, чтобы найти идеального друга!</p>
		<div class="imagesContainer">
			<button class="prevButton" type="button"></button>
			<button class="nextButton" type="button"></button>
		</div>
	</div>
</section>

<style lang="scss">
	.filter {
		width: 100%;
		height: 100%;
		min-height: 370px;
		padding: 30px 0 70px;
		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: var(--amber);
	}

	.filterWrapper {
		display: flex;
		flex-direction: column;

		width: 100%;
		max-width: var(--section-max-width);

		gap: 26px;
	}

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

	.text {
		font-family: Inter-LightItalic, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);
	}

	.imagesContainer {
		position: relative;

		width: 100%;
		align-self: center;
	}

	.prevButton {
		width: 30px;
		height: 40px;

		margin: 32px 0 0 48px;

		background-color: inherit;
		background-image: url('../assets/images/prev-btn.png');
		background-position: center;
		background-repeat: no-repeat;

		border: none;

		cursor: pointer;
	}

	.nextButton {
		width: 30px;
		height: 40px;

		margin: 32px 48px 0 0;

		background-color: inherit;
		background-image: url('../assets/images/next-btn.png');
		background-position: center;
		background-repeat: no-repeat;

		border: none;

		cursor: pointer;
	}
</style>
