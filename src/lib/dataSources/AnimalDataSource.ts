import { API_BASE_URL } from '../../constants/externalLinks';
import type { Animal, AnimalFilter } from '../../types';
import { BaseDataSource } from './BaseDataSource';

export class AnimalDataSource extends BaseDataSource<Animal> {
	constructor(filters?: AnimalFilter) {
		let query = [];
		if (filters) {
			if (filters.type) query.push(`type=${filters.type.type}`);
			if (filters.sex) query.push(`sex=${filters.sex.sex}`);
			if (filters.age) query.push(`age__gte=${filters.age.minAge}&age__lte=${filters.age.maxAge}`);
			if (filters.breed) query.push(`breed=${filters.breed.breed}`);
		}

		const filterString = query.length ? `${query.join('&')}` : '';

		super(`${API_BASE_URL}/api/pets/`, filterString, 8);
	}
}
