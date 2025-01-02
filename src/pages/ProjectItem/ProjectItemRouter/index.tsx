import { Suspense } from 'react';
import { Outlet } from 'react-router';

import ErrorBoundary from '@/components/ErrorBoundary';

import NotFound from '@/pages/NotFound';

export default function ProjectItemRouter() {
  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
