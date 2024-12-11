import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Layout from '@/components/Layout';

import GlobalStyle from '@/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
    </Suspense>
  );
}
