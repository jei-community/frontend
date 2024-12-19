export const PATH = {
  SIGN_IN: '/sign-in',
  APP: '/',
  MAIN: '/',
  DAILY_CHECK: '/articles',
  ARTICLES: '/articles',
  PROJECTS: '/projects',
  GET_PROJECT_WITH_ID: (id: string | number) => `/projects${id}`,
  PROJECT_EDITOR: '/projects/editor',
  SWAGGER: '/api',
  NOT_FOUND: '*',
};
