import {motion, AnimatePresence} from 'framer-motion';
import {useState, Suspense} from 'react';
import {Link} from '@remix-run/react';

// Mock cart data
const mockCart = {
  linesCount: 0,
  isEmpty: true,
  totalAmount: "0.00", 
  lines: []
};

export function Cart() {
  return <CartContent />;
}

function CartContent() {
  const [cart] = useState(mockCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        className="bg-[#151522] p-3 rounded-full border border-[#2c2c44] shadow-lg"
        onClick={() => setIsCartOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0f0f13] shadow-xl overflow-auto"
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'tween', ease: 'easeInOut', duration: 0.3}}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-[#2c2c44]">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <button
                    className="p-2 text-gray-400 hover:text-white"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <p className="mb-3">Your cart is empty</p>
                <Link
                  to="/collections/all"
                  className="bg-purple-600 text-white px-4 py-2 rounded-full inline-block"
                >
                  Continue shopping
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}