import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router';

import { postAutoLogin, postTokenRefresh } from '@/apis/auth';

import { PATH } from '@/constants/path';

import { useUserInfoStore } from '@/store';

export default function PrivateRouter() {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const { updateUserInfo } = useUserInfoStore();
  let token = searchParams.get('token');

  if (token) localStorage.setItem('token', token);
  else token = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    const redirect = () => {
      if (pathname === PATH.SIGN_IN) navigate(PATH.MAIN);
    };

    const redirectBeforeRefreshToken = async () => {
      try {
        const { accessToken } = await postTokenRefresh();
        localStorage.setItem('token', accessToken);
        redirect();
      } catch (error) {
        console.error(error);
        navigate(PATH.SIGN_IN);
      }
    };

    const verifyToken = async () => {
      try {
        if (token) {
          const { userId, name, role, profileImageUrl } = await postAutoLogin();
          updateUserInfo({
            userId,
            name,
            role,
            profileImageUrl,
          });
          redirect();
        } else {
          redirectBeforeRefreshToken();
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        redirectBeforeRefreshToken();
      }
    };

    verifyToken();
  }, [token, pathname, navigate, updateUserInfo]);

  return token ? <Outlet /> : <Navigate to={PATH.SIGN_IN} />;
}
