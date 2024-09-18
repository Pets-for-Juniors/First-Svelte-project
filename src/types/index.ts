export type Animal = {
	id: number;
	type: string;
	breed: string;
	name: string;
	age: number;
	sex: string;
	description: string;
	images: string;
};

export type AnimalType = {
	type: string;
};

export type AnimalGender = {
	sex: string;
};

export type AnimalAge = {
	title: string;
	minAge: number;
	maxAge: number;
};

export type AnimalBreed = {
	type: string;
	breed: string;
};
