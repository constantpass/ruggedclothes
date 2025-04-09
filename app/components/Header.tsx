import {useState} from 'react';
import {Link, useParams, useLocation} from '@remix-run/react';
import {motion} from 'framer-motion';
import {SalesTicker} from './SalesTicker';
import {TopTicker} from './TopTicker';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const params = useParams();

  const isHome = pathname === '/';
  const isProductPage = pathname.includes('/products/');

  return (
    <div className="sticky top-0 z-50 bg-[#0a0a10]">
      {/* Brand and main navigation */}
      <div className="border-b border-[#2c2c44]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                Rugged
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 mx-4">
            <Link to="/" className={`text-gray-300 hover:text-purple-400 transition-colors ${isHome ? 'text-purple-400' : ''}`}>Home</Link>
            <Link to="/collections/trending" className="text-gray-300 hover:text-purple-400 transition-colors">Trending</Link>
            <Link to="/collections" className="text-gray-300 hover:text-purple-400 transition-colors">Categories</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/account">
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm
                        relative overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168,85,247,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">My Account</span>
                <motion.div 
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
              </motion.button>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sales ticker (optional based on route) */}
      {!isProductPage && (
        <div className="pt-3 pb-2 border-b border-[#2c2c44] bg-[#0a0a10]/90 backdrop-blur-sm">
          <SalesTicker />
          
          <div className="mt-3 text-center">
            <Link to="/products/create-your-own">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 transition-all cursor-pointer neon-text">
                Create a Shirt
              </span>
            </Link>
          </div>
          
          {/* Centered search bar */}
          <div className="max-w-md mx-auto mt-3 px-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search shirts..."
                className="w-full bg-[#1c1c2e] text-white rounded-full px-4 py-2 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                      border border-[#2c2c44] transition-all"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ticker bar with bubbles */}
      {!isProductPage && <TopTicker />}

      {/* Mobile menu (visible on small screens) */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-[#151522] border-b border-[#2c2c44]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-3 space-y-2">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/collections/trending" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trending
            </Link>
            <Link 
              to="/collections" 
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/account"
              className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Account
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}