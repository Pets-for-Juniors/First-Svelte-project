import { API_BASE_URL } from '../constants/externalLinks';

export const fetchEmployees = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/api/employees`);
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
	}
};
