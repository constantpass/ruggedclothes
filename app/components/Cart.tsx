import {
  useCart,
  CartProvider,
} from '@shopify/hydrogen-react';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, Suspense} from 'react';
import {Link} from '@remix-run/react';

export function Cart() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}

function CartContent() {
  const {status, linesCount, cost, lines} = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (status === 'uninitialized' || linesCount === 0) {
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
      </div>
    );
  }

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        className="relative bg-[#151522] p-3 rounded-full border border-[#2c2c44] shadow-lg"
        onClick={() => setIsCartOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span className="absolute -top-2 -right-2 bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
          {linesCount}
        </span>
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

              <Suspense fallback={<div className="p-4 text-center">Loading cart...</div>}>
                {lines?.length > 0 ? (
                  <div className="px-4">
                    {lines.map((line) => (
                      <motion.div 
                        key={line.id}
                        className="py-4 border-b border-[#2c2c44] flex"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                      >
                        <div className="flex-shrink-0 mr-4">
                          {line.merchandise.image && (
                            <img 
                              src={line.merchandise.image.url}
                              alt={line.merchandise.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          )}
                        </div>
                          
                        <div className="flex-grow">
                          <Link
                            to={`/products/${line.merchandise.product.handle}`}
                            className="font-medium hover:text-purple-400 transition-colors"
                          >
                            {line.merchandise.product.title}
                          </Link>
                          
                          <div className="text-sm text-gray-400 mt-1">
                            {line.merchandise.title !== 'Default Title' ? line.merchandise.title : ''}
                          </div>
                          
                          <div className="flex justify-between items-center mt-2">
                            <p className="font-medium">${parseFloat(line.cost.totalAmount.amount).toFixed(2)}</p>
                            
                            <div className="flex items-center border border-[#2c2c44] rounded-full">
                              <button
                                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                                onClick={() => {
                                  // Decrease quantity
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 12H4"
                                  />
                                </svg>
                              </button>
                              
                              <span className="mx-2">{line.quantity}</span>
                              
                              <button
                                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                                onClick={() => {
                                  // Increase quantity
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-2">
                          <button
                            className="text-gray-400 hover:text-white"
                            onClick={() => {
                              // Remove from cart
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="mb-3">Your cart is empty</p>
                    <Link
                      to="/collections/all"
                      className="bg-purple-600 text-white px-4 py-2 rounded-full inline-block"
                    >
                      Continue shopping
                    </Link>
                  </div>
                )}
              </Suspense>

              {lines?.length > 0 && (
                <div className="p-4 mt-4 border-t border-[#2c2c44]">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="font-medium">
                        ${parseFloat(cost?.subtotalAmount?.amount || "0").toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Shipping</span>
                      <span className="text-gray-200">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-lg pt-2 border-t border-[#2c2c44]">
                      <span>Total</span>
                      <span className="font-bold">
                        ${parseFloat(cost?.totalAmount?.amount || "0").toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      className="w-full bg-[#5A31F4] text-white py-3 rounded-full"
                      onClick={() => {
                        // Open Shop Pay checkout
                      }}
                    >
                      Check out with Shop Pay
                    </button>
                    
                    <button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-full"
                      onClick={() => {
                        // Open regular checkout
                      }}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}