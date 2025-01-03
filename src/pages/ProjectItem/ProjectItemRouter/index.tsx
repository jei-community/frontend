import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import { PATH } from '@/constants/path';

import ErrorBoundary from '@/components/ErrorBoundary';

import NotFound from '@/pages/NotFound';
import { useUserInfoStore } from '@/store';

export default function ProjectItemRouter() {
  const { role } = useUserInfoStore();
  const { pathname } = useLocation();

  if (pathname.split('/').includes('editor') && role === 'USER') return <Navigate to={PATH.PROJECT.INDEX} />;

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
