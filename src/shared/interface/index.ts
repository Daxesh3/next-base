export interface IResponseObject<T> {
	isError: boolean;
	message: string;
	data: T;
}

export interface IMetaData {
	content: string;
	property?: string;
	name?: string;
}

export interface ISEO {
	title: string;
	description: string;
	canonicalUrl?: string;
}

export interface IObj {
	[key: string | number]: string | number;
}
