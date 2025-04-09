import { useState } from 'react';
import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';

// Rainbow categories from top to bottom (ROYGBIV)
const categories = [
  { name: 'Pumping', handle: 'pumping', color: 'from-red-500 to-red-600' },
  { name: 'Rugged', handle: 'rugged', color: 'from-orange-500 to-orange-600' },
  { name: 'Resurrected', handle: 'resurrected', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Trending', handle: 'trending', color: 'from-green-500 to-green-600' },
  { name: 'Popular', handle: 'popular', color: 'from-blue-500 to-blue-600' },
  { name: 'Meme', handle: 'meme', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Living', handle: 'living', color: 'from-violet-500 to-violet-600' },
];

export function Sidebar() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Create a pyramid effect by making middle items larger
  const getItemSize = (index: number) => {
    // Calculate distance from middle of array
    const middle = Math.floor(categories.length / 2);
    const distanceFromMiddle = Math.abs(index - middle);
    const maxDistance = Math.max(middle, categories.length - middle - 1);
    
    // Convert to a percentage between 70% and 100%
    const sizePercentage = 100 - (distanceFromMiddle / maxDistance) * 30;
    return `${sizePercentage}%`;
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-48 bg-[#0f0f13] border-r border-[#2c2c44] pt-20 hidden lg:block z-40">
      <div className="flex flex-col items-center justify-center h-full space-y-2 py-6">
        {categories.map((category, index) => {
          const isActive = location.pathname === `/collections/${category.handle}`;
          const size = getItemSize(index);

          return (
            <motion.div
              key={category.handle}
              className="w-full px-4"
              style={{ width: size }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/collections/${category.handle}`}>
                <motion.div 
                  className={`bg-gradient-to-r ${category.color} py-3 px-4 rounded-lg text-white text-center
                           border border-white/10 relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 15px rgba(255,255,255,0.3)',
                  }}
                  animate={{
                    boxShadow: hoveredIndex === index 
                      ? ['0 0 5px rgba(255,255,255,0.3)', '0 0 20px rgba(255,255,255,0.5)', '0 0 5px rgba(255,255,255,0.3)'] 
                      : '0 0 0px rgba(255,255,255,0)',
                  }}
                  transition={{
                    boxShadow: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }
                  }}
                >
                  {/* Glow effect when hovered */}
                  {hoveredIndex === index && (
                    <motion.div 
                      className="absolute inset-0 bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div 
                      className="absolute right-1 top-1 w-2 h-2 rounded-full bg-white"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  
                  <span className="relative z-10 font-medium">{category.name}</span>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}