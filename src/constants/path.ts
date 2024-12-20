const PROJECT = {
  INDEX: '/project',

  RELATIVE: {
    LIST: {
      INDEX: 'list',
      GET_PROJECT_ITEM: (id: string | number) => String(id),
    },
    EDITOR: 'editor',
  },

  ABSOLUTE: {
    LIST: {
      INDEX: '/project/list',
      GET_PROJECT_ITEM: (id: string | number) => `/project/list/${id}`,
    },
    EDITOR: '/project/editor',
  },
};

export const PATH = {
  SIGN_IN: '/sign-in',
  APP: '/',
  MAIN: '/',
  DAILY_CHECK: '/daily-check',
  ARTICLES: '/articles',
  PROJECT: PROJECT,
  POSTS: {
    INDEX: '/posts',
    LIST: 'list',
    EDITOR: 'editor',
  },
  ALBUMS: {
    INDEX: '/albums',
    LIST: 'list',
    EDITOR: 'editor',
  },
  SWAGGER: '/api',
  NOT_FOUND: '*',
};
