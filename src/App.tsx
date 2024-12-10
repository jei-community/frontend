import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
