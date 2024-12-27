import { Navigate, Outlet, useSearchParams } from 'react-router';

import { PATH } from '@/constants/path';

export default function PrivateRouter() {
  const [searchParams] = useSearchParams();
  let token = searchParams.get('token');

  if (token) localStorage.setItem('token', token);
  else token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to={PATH.SIGN_IN} />;
}
