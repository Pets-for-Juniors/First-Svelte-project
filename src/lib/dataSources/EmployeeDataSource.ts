import { API_BASE_URL } from '../../constants/externalLinks';
import type { Employee } from '../../types/employees';
import { BaseDataSource } from './BaseDataSource';

export class EmployeeDataSource extends BaseDataSource<Employee> {
	constructor() {
		super(`${API_BASE_URL}/api/employees/`);
	}
}
