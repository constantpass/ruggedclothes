import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@remix-run/react';

// Mock featured shirts with growth metrics
const featuredShirts = [
  {
    id: '1',
    title: 'PEPE PUMP',
    handle: 'pepe-pump',
    image: 'https://placehold.co/800x400/22c55e/ffffff?text=PEPE+PUMP',
    growth: '+240%',
    price: '$35.99',
    creator: 'PepeLord',
  },
  {
    id: '2',
    title: 'MOON SOON',
    handle: 'moon-soon',
    image: 'https://placehold.co/800x400/8b5cf6/ffffff?text=MOON+SOON',
    growth: '+178%',
    price: '$29.99',
    creator: 'MoonMan',
  },
  {
    id: '3',
    title: 'DEGEN SZN',
    handle: 'degen-szn',
    image: 'https://placehold.co/800x400/ec4899/ffffff?text=DEGEN+SZN',
    growth: '+120%',
    price: '$32.99',
    creator: 'DegenKing',
  },
  {
    id: '4',
    title: 'WAGMI',
    handle: 'wagmi',
    image: 'https://placehold.co/800x400/3b82f6/ffffff?text=WAGMI',
    growth: '+95%',
    price: '$27.99',
    creator: 'DiamondHands',
  },
];

export function ShirtCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const currentShirt = featuredShirts[currentIndex];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredShirts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredShirts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % featuredShirts.length
    );
  };

  // Variants for animation
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden rounded-xl w-full h-[400px] bg-[#151522] border border-[#2c2c44]">
      {/* Carousel content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentShirt.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden">
            {/* Image section */}
            <div className="md:w-7/12 h-48 md:h-full relative overflow-hidden">
              <Link to={`/products/${currentShirt.handle}`}>
                <img
                  src={currentShirt.image}
                  alt={currentShirt.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Growth indicator */}
                <div className="absolute top-4 right-4 bg-green-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-lg
                              border border-green-400 flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mr-1"
                  >
                    ↑
                  </motion.div>
                  <motion.span
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentShirt.growth}
                  </motion.span>
                </div>
              </Link>
            </div>
            
            {/* Info section */}
            <div className="md:w-5/12 p-6 flex flex-col justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a]">
              <motion.h2 
                className="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {currentShirt.title}
              </motion.h2>
              
              <motion.div 
                className="text-sm text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Created by <span className="text-purple-400">{currentShirt.creator}</span>
              </motion.div>
              
              <motion.div 
                className="text-2xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {currentShirt.price}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link to={`/products/${currentShirt.handle}`}>
                  <motion.button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold
                              shadow-[0_0_15px_rgba(168,85,247,0.5)] w-full md:w-auto"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 25px rgba(168, 85, 247, 0.8)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="mt-6 grid grid-cols-2 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="bg-[#1c1c2e]/50 p-3 rounded-lg">
                  <div className="text-xs text-gray-400">Trending</div>
                  <div className="text-sm font-semibold text-green-400">
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block"
                    >
                      #1
                    </motion.span> 
                    <span> this week</span>
                  </div>
                </div>
                <div className="bg-[#1c1c2e]/50 p-3 rounded-lg">
                  <div className="text-xs text-gray-400">Sales</div>
                  <div className="text-sm font-semibold text-white">2,458 sold</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 
                  rounded-full flex items-center justify-center z-10 backdrop-blur-sm border border-white/10"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10
                  rounded-full flex items-center justify-center z-10 backdrop-blur-sm border border-white/10"
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {featuredShirts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}