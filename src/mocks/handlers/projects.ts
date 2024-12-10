import { http } from 'msw';

export const handlers = [
  http.get('/projects', () => {
    console.log('Captured a "GET /posts" request');
  }),
];
