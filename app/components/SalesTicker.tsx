import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';

// Mock data - in a real app, this would come from a Store metafield or server component
const mockSales = [
  { username: 'Crypto_Maxx', product: 'PEPE PUMP Tee', amount: 29.99, timeAgo: '2 mins ago' },
  { username: 'MoonGirl', product: 'DEGEN SZN Tee', amount: 32.99, timeAgo: '5 mins ago' },
  { username: 'HodlKing', product: 'WAGMI Tee', amount: 27.99, timeAgo: '12 mins ago' },
  { username: 'DiamondHands', product: 'MOON SOON Tee', amount: 29.99, timeAgo: '18 mins ago' },
  { username: 'SatoshiWannabe', product: 'BULLISH AF Tee', amount: 35.99, timeAgo: '24 mins ago' },
  { username: 'CryptoQueen', product: 'NGMI Tee', amount: 28.99, timeAgo: '35 mins ago' },
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
    <div className="bg-[#151522] py-1 overflow-hidden border-y border-[#2c2c44]">
      <div className="container mx-auto px-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center text-sm text-center"
        >
          <div className="text-green-400 animate-pulse mr-2">•</div>
          <span className="text-gray-300">
            <span className="font-medium">{currentSale.username}</span> just purchased{' '}
            <span className="font-medium text-purple-400">{currentSale.product}</span> for{' '}
            <span className="font-medium text-green-400">${currentSale.amount}</span>{' '}
            <span className="text-gray-500">{currentSale.timeAgo}</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}