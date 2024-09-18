import { API_BASE_URL } from '../constants/externalLinks';

export const fetchAnimals = async (offset = 0, limit = 8) => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/pets/?offset=${offset}&limit=${limit}`);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
		throw error;
	}
};

export const getAnimalTypes = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/pets/filter/type/`);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		const data = await response.json();
		// console.log('типы', data.data);
		return data.data;
	} catch (error) {
		console.error('Ошибка при загрузке типов животных:', error);
		throw error;
	}
};

export const getAnimalGenders = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/pets/filter/gender/`);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error('Ошибка при загрузке пола животных:', error);
		throw error;
	}
};

export const getAnimalBreeds = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/pets/filter/breed/`);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error('Ошибка при загрузке пород животных:', error);
		throw error;
	}
};

export const getAnimalAges = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/pets/filter/age/`);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error('Ошибка при загрузке возраста животных:', error);
		throw error;
	}
};
