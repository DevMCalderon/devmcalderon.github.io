import { Suspense } from 'react';
import Loading from '@/views/Loading/Loading';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';


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
