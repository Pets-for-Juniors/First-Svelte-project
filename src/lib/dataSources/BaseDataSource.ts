export class BaseDataSource<T> {
	constructor(url: string, filterString?: string, limit: number = 1000) {
		this.url = url;
		this.filterString = filterString;
		this.limit = limit;
	}

	private url: string;
	private filterString: any;
	private limit: number;
	private previous: string | undefined;
	private next: string | undefined;

	public count: number = 0;
	public results: T[] = [];
	public loaded: boolean = false;
	public canPrev: boolean = false;
	public canNext: boolean = false;

	private async loadData(url: string, hasQuery: boolean) {
		this.loaded = false;
		try {
			let queryString: string = '';
			if (hasQuery) {
				queryString = url;
			} else {
				queryString = `${url}?limit=${this.limit}&${this.filterString}`;
			}

			const response = await fetch(queryString);
			if (!response.ok) {
				throw new Error(`Ошибка HTTP: ${response.status}`);
			}
			const data = await response.json();

			this.count = data.count;
			this.next = data.next;
			this.previous = data.previous;
			this.results = data.results;

			this.canPrev = !!this.previous;
			this.canNext = !!this.next;
			this.loaded = true;

			return this.clone();
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
			throw error;
		}
	}

	private clone(): BaseDataSource<T> {
		const clone = new BaseDataSource<T>(this.url, this.filterString, this.limit);
		clone.previous = this.previous;
		clone.next = this.next;
		clone.count = this.count;
		clone.results = this.results;
		clone.loaded = this.loaded;
		clone.canPrev = this.canPrev;
		clone.canNext = this.canNext;
		return clone;
	}

	public async load() {
		return await this.loadData(this.url, false);
	}

	public async loadPrev() {
		if (this.previous) {
			return await this.loadData(this.previous, true);
		} else {
			return this;
		}
	}

	public async loadNext() {
		if (this.next) {
			return await this.loadData(this.next, true);
		} else {
			return this;
		}
	}
}
