import {motion, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from 'react';

// Enhanced mock data with transaction IDs and shirt growth percentages
const mockSales = [
  { txId: 'tx_572829', username: 'Crypto_Maxx', product: 'PEPE PUMP Tee', amount: 29.99, timeAgo: '2 mins ago', growth: '+120%' },
  { txId: 'tx_572828', username: 'MoonGirl', product: 'DEGEN SZN Tee', amount: 32.99, timeAgo: '5 mins ago', growth: '+85%' },
  { txId: 'tx_572825', username: 'HodlKing', product: 'WAGMI Tee', amount: 27.99, timeAgo: '12 mins ago', growth: '+43%' },
  { txId: 'tx_572821', username: 'DiamondHands', product: 'MOON SOON Tee', amount: 29.99, timeAgo: '18 mins ago', growth: '+178%' },
  { txId: 'tx_572819', username: 'SatoshiWannabe', product: 'BULLISH AF Tee', amount: 35.99, timeAgo: '24 mins ago', growth: '+32%' },
  { txId: 'tx_572814', username: 'CryptoQueen', product: 'NGMI Tee', amount: 28.99, timeAgo: '35 mins ago', growth: '+95%' },
];

export function SalesTicker() {
  const [sales] = useState(mockSales);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSale = sales[currentIndex];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sales.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [sales.length]);
  
  return (
    <div className="bg-[#151522] py-2 overflow-hidden border-y border-[#2c2c44]">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSale.txId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center text-sm text-center"
          >
            {/* Pulsing dot indicator */}
            <motion.div 
              className="text-green-400 mr-2 h-2 w-2 rounded-full bg-green-400"
              animate={{ 
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 4px rgba(34, 197, 94, 0.2)', '0 0 0 0 rgba(34, 197, 94, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Transaction ID */}
            <motion.span 
              className="font-mono text-xs text-pink-400 mr-2 hidden sm:inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {currentSale.txId}
            </motion.span>
            
            <span className="text-gray-300">
              {/* Username with glow effect */}
              <motion.span 
                className="font-medium text-pink-300"
                animate={{ textShadow: ['0 0 0px rgba(236, 72, 153, 0)', '0 0 4px rgba(236, 72, 153, 0.7)', '0 0 0px rgba(236, 72, 153, 0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentSale.username}
              </motion.span>
              
              {' '}just purchased{' '}
              
              {/* Product name with highlight */}
              <motion.span 
                className="font-medium text-purple-400"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, times: [0, 0.5, 1] }}
              >
                {currentSale.product}
              </motion.span>
              
              {' '}for{' '}
              
              {/* Price with floating animation */}
              <motion.span 
                className="font-medium text-green-400"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ${currentSale.amount}
              </motion.span>
              
              {' '}
              
              {/* Growth percentage with glow */}
              <motion.span 
                className="font-bold text-green-500 bg-green-900/20 px-1.5 py-0.5 rounded-md ml-1"
                animate={{ 
                  boxShadow: ['0 0 0px rgba(34, 197, 94, 0)', '0 0 5px rgba(34, 197, 94, 0.5)', '0 0 0px rgba(34, 197, 94, 0)'],
                  scale: [1, 1.03, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentSale.growth}
              </motion.span>
              
              {' '}
              
              <span className="text-gray-500">{currentSale.timeAgo}</span>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}