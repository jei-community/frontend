export const BASE_URL = 'https://api-dev.everydei.site';

export const ENDPOINTS = {
  GOOGLE_LOGIN: '/api/v1/auth/social-login/google',
  REFRESH_TOKEN: '/api/v1/auth/token-refresh',
  AUTO_LOGIN: '/api/v1/auth/auto-login',
  LOGOUT: '/api/v1/auth/logout',
  PROJECT_LIST: '/api/v1',
};

export const URLS = {
  GET_GOOGLE_LOGIN: BASE_URL + ENDPOINTS.GOOGLE_LOGIN,
  POST_REFRESH_TOKEN: BASE_URL + ENDPOINTS.REFRESH_TOKEN,
  POST_AUTO_LOGIN: BASE_URL + ENDPOINTS.AUTO_LOGIN,
  POST_LOGOUT: BASE_URL + ENDPOINTS.LOGOUT,
  GET_PROJECT_LIST: BASE_URL + ENDPOINTS.PROJECT_LIST,
};
