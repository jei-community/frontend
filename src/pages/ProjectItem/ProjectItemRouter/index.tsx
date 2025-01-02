import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router';

import { PATH } from '@/constants/path';

import ErrorBoundary from '@/components/ErrorBoundary';

import NotFound from '@/pages/NotFound';
import { useUserInfoStore } from '@/store';

export default function ProjectItemRouter() {
  const { role } = useUserInfoStore();

  if (PATH.PROJECT.RELATIVE.LIST.ITEM.EDITOR && role === 'USER') return <Navigate to={PATH.PROJECT.INDEX} />;

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
