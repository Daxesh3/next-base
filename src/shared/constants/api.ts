import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import { API_BASE_URL } from '.';

export const API_CONFIG = {
	baseUrl: API_BASE_URL,
	path: {
		login: 'user/login',
		register: 'user/register',
		forgotPassword: 'user/forgotPassword',
		resetPassword: 'user/resetPassword'
	}
};

export const getUrl = (url: string, params: any = {}): string => {
	Object.keys(params).forEach((key) => (params[key] == null || params[key] === '') && delete params[key]);
	let urlString = `${url}`;
	if (params && !isEmpty(params)) {
		urlString += `?${queryString.stringify(params)}`;
	}
	return urlString;
};
