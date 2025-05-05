import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { PortfolioProvider } from './context/PortfolioContext';
import Loading from '@/views/loading/Loading';


function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <ScrollRestoration />
        <PortfolioProvider>
          <Outlet />
        </PortfolioProvider>
      </Suspense>
    </>
  );
}

export default App
