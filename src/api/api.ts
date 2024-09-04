import { API_BASE_URL } from '../constants/externalLinks';

export const fetchData = async () => {
	const response = await fetch('/api/data');
	return response.json();
};

export const fetchAnimals = async () => {
	try {
		const response = await fetch(API_BASE_URL);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
		throw error;
	}
};
