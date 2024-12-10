import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}
