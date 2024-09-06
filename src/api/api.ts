import { API_BASE_URL } from '../constants/externalLinks';

export const fetchAnimals = async (page = 1, limit = 8) => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/pets/?page=${page}&limit=${limit}`);
		// console.log(response);
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
