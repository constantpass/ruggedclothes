import {Header} from './Header';
import {Footer} from './Footer';
import {Cart} from './Cart';
import {Suspense} from 'react';

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        
        <Header />
        
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
        
        <Suspense fallback={null}>
          <Cart />
        </Suspense>
        
        <Footer />
      </div>
    </>
  );
}