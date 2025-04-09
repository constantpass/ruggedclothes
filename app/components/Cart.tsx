import {
  useCart,
  CartLineProvider,
  CartShopPayButton,
  Money,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLine,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartEstimatedCost,
  CartLineImage,
  CartLinePrice,
  CartProvider,
} from '@shopify/hydrogen-react';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, Suspense} from 'react';

export function Cart() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}

function CartContent() {
  const {lines, totalQuantity} = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (!lines || lines.length === 0) {
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
          {totalQuantity}
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
                <CartItems />
              </Suspense>

              <div className="p-4 mt-4 border-t border-[#2c2c44]">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Subtotal</span>
                    <CartEstimatedCost
                      amountType="subtotal"
                      className="font-medium"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-gray-200">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg pt-2 border-t border-[#2c2c44]">
                    <span>Total</span>
                    <CartEstimatedCost
                      amountType="total"
                      className="font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <CartShopPayButton
                    className="w-full bg-[#5A31F4] text-white py-3 rounded-full"
                    variableName="shopPayCheckout"
                  />
                  <CartCheckoutButton 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-full"
                  >
                    Checkout
                  </CartCheckoutButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CartItems() {
  const {lines} = useCart();

  if (!lines || lines.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="mb-3">Your cart is empty</p>
        <Link
          to="/collections/all"
          className="bg-purple-600 text-white px-4 py-2 rounded-full inline-block"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4">
      <CartLines>
        {({merchandise}) => (
          <CartLineProvider>
            <motion.div 
              className="py-4 border-b border-[#2c2c44] flex"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
            >
              <div className="flex-shrink-0 mr-4">
                <CartLineImage 
                  className="w-20 h-20 object-cover rounded-lg"
                  loaderOptions={{width: 90, height: 90, crop: 'center'}}
                />
              </div>
                
              <div className="flex-grow">
                <Link
                  to={`/products/${merchandise.product.handle}`}
                  className="font-medium hover:text-purple-400 transition-colors"
                >
                  {merchandise.product.title}
                </Link>
                
                <div className="text-sm text-gray-400 mt-1">
                  {merchandise.title !== 'Default Title' ? merchandise.title : ''}
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <CartLinePrice className="font-medium" />
                  
                  <div className="flex items-center border border-[#2c2c44] rounded-full">
                    <CartLineQuantityAdjustButton
                      adjust="decrease"
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
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
                    </CartLineQuantityAdjustButton>
                    
                    <CartLineQuantity className="mx-2" />
                    
                    <CartLineQuantityAdjustButton
                      adjust="increase"
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
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
                    </CartLineQuantityAdjustButton>
                  </div>
                </div>
              </div>
              
              <div className="ml-2">
                <CartLineQuantityAdjustButton
                  adjust="remove"
                  className="text-gray-400 hover:text-white"
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
                </CartLineQuantityAdjustButton>
              </div>
            </motion.div>
          </CartLineProvider>
        )}
      </CartLines>
    </div>
  );
}