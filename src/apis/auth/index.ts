import axios from 'axios';

import { URLS } from '@/constants/api';

/* 구글 로그인 요청 api */

// TODO: 구글로그인, 토큰 재발급, 로그아웃
export const loginToGoogle = () => {
  const form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', URLS.GET_GOOGLE_LOGIN);

  const params: { [key: string]: string } = {
    client_id: '901914571110-q1iu7if7639jnapf43d20dgicbhoka77.apps.googleusercontent.com',
    redirect_uri: window.origin,
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/calendar.readonly',
    include_granted_scopes: 'true',
    state: 'pass-through value',
  };

  // Add form parameters as hidden input values.
  for (const p in params) {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
};

/** 토큰 재발급 api */
export const postRefreshToken = async (refreshToken: string) => {
  const response = await axios.post(URLS.POST_REFRESH_TOKEN, {
    refreshToken,
  });

  return response.data;
};

/** 자동로그인 API */
export const postAutoLogin = async () => {
  const response = await axios.post(URLS.POST_AUTO_LOGIN);

  return response.data;
};

/** 로그아웃 API */
export const postLogout = async () => await axios.post(URLS.POST_LOGOUT);
