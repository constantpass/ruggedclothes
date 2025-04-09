import {Header} from './Header';
import {Footer} from './Footer';
import {Cart} from './Cart';
import {Sidebar} from './Sidebar';
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
        
        {/* Add the sidebar */}
        <Sidebar />
        
        <main role="main" id="mainContent" className="flex-grow lg:ml-48 transition-all duration-300">
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