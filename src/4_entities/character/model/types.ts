// данные приходят с API
export interface ICharacter {
	id: number;
	name: string;
	status: 'Alive' | 'Dead' | 'unknown';
	species: string;
	type: string;
	gender: 'Male' | 'Female' | 'unknown';
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}
// общее представление ответа от API
export interface ICharacterResponse {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: ICharacter[];
}
// параметры страницы, фильтры, номер страницы
export interface ICharacterParams {
	page?: number;
	filter?: string;
	sort?: string;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;

}