const PROJECT = {
  INDEX: '/project',

  RELATIVE: {
    LIST: {
      INDEX: 'list',
      ITEM: {
        INDEX: ':projectId',
        WITH_ID: (projectId: string | number) => String(projectId),
        EDITOR: 'editor',
      },
    },
    CREATE: 'create',
  },

  ABSOLUTE: {
    LIST: {
      INDEX: '/project/list',
      ITEM: {
        INDEX: '/project/list/:projectId',
        WITH_ID: (projectId: string | number) => `/project/list/${projectId}`,
        EDITOR: '/project/list/:projectId/editor',
      },
    },
    CREATE: '/project/create',
  },
};

export const PATH = {
  SIGN_IN: '/sign-in',
  APP: '/',
  MAIN: '/',
  DAILY_CHECK: '/daily-check',
  ARTICLES: '/articles',
  PROJECT,
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
