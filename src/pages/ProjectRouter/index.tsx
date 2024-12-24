import { Suspense } from 'react';
import { Outlet } from 'react-router';

import CenteredWrapper from '@/components/CenteredWrapper';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ProjectRouter() {
  return (
    <Suspense
      fallback={
        <CenteredWrapper>
          <LoadingSpinner size='large' />
        </CenteredWrapper>
      }
    >
      <Outlet />
    </Suspense>
  );
}
