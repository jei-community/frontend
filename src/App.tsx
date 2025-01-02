import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';

import GlobalStyle from '@/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle>
          <ScrollToTop />
          <Layout>
            <Outlet />
          </Layout>
        </GlobalStyle>
      </QueryClientProvider>
    </Suspense>
  );
}
