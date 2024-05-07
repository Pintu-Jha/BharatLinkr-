export const API_BASE_URL = 'http://13.232.22.229:4000';

export const getApiURL = endpoint => API_BASE_URL + endpoint;


export const LOGIN_API = getApiURL('/auth/login');