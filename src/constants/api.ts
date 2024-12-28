export const BASE_URL = 'https://api-dev.everydei.site/api/v1';

export const ENDPOINTS = {
  GOOGLE_LOGIN: '/social-login/google',
  TOKEN_REFRESH: '/token-refresh',
  AUTO_LOGIN: '/auto-login',
  LOGOUT: '/logout',
  PROJECT_LIST: '/projects',
};

const AUTH_PREFIX = '/auth';

export const URLS = {
  AUTH: {
    GET_GOOGLE_LOGIN: BASE_URL + AUTH_PREFIX + ENDPOINTS.GOOGLE_LOGIN,
    POST_TOKEN_REFRESH: BASE_URL + AUTH_PREFIX + ENDPOINTS.TOKEN_REFRESH,
    POST_AUTO_LOGIN: BASE_URL + AUTH_PREFIX + ENDPOINTS.AUTO_LOGIN,
    POST_LOGOUT: BASE_URL + AUTH_PREFIX + ENDPOINTS.LOGOUT,
  },

  GET_PROJECT_LIST: BASE_URL + ENDPOINTS.PROJECT_LIST,
};
