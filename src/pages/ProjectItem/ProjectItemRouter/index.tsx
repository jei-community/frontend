import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function ProjectItemRouter() {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
}
