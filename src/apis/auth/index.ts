import axios from 'axios';

/** 요청 URL */
const BASE_URL = 'https://api-dev.everydei.site';

/* 구글 로그인 요청 api */
export const getGoogleLogin = () => {
  const endPoint = BASE_URL + '/api/v1/auth/social-login/google';
  const form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', endPoint);

  const params: { [key: string]: string } = {
    client_id: 'YOUR_CLIENT_ID',
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
  const body = {
    refreshToken: refreshToken,
  };
  const response = await axios.post(BASE_URL + '/api/v1/auth/token-refresh', body);

  return response.data;
};

/** 자동로그인 API */
export const postAutoLogin = async () => {
  const response = await axios.post(BASE_URL + '/api/v1/auth/auto-login');

  return response.data;
};

/** 로그아웃 API */
export const postLogout = async () => await axios.post(BASE_URL + '/api/v1/auth/logout');
