import {Link} from '@remix-run/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a10] text-white py-8 mt-12 border-t border-[#2c2c44]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold neon-text">Rugged</h3>
            <p className="text-purple-300 mt-1">The #1 T-Shirt Marketplace</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://twitter.com/rugged" className="hover:text-purple-400 transition-colors">Twitter</a>
            <a href="https://discord.gg/rugged" className="hover:text-purple-400 transition-colors">Discord</a>
            <a href="https://instagram.com/rugged" className="hover:text-purple-400 transition-colors">Instagram</a>
            <Link to="/policies/faq" className="hover:text-purple-400 transition-colors">FAQ</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#2c2c44] text-center text-gray-400 text-sm">
          <p>© {currentYear} Rugged. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/policies/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link to="/policies/terms-of-service" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link to="/policies/shipping-policy" className="hover:text-purple-400 transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}