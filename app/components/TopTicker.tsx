import {motion} from 'framer-motion';
import {useState} from 'react';

// Enhanced mock data - in a real app, this would come from Shopify metafields
const mockStats = [
  { label: '24h Volume', value: '$158,923', change: '+15.2%', positive: true, color: 'text-green-400' },
  { label: 'Active Sellers', value: '843', change: '+12', positive: true, color: 'text-purple-400' },
  { label: 'Total T-Shirts', value: '2,547', change: '+83', positive: true, color: 'text-blue-400' },
  { label: 'Avg. Price', value: '$32.42', change: '-1.2%', positive: false, color: 'text-red-400' },
  { label: 'Recent Sales', value: '432', change: '+53', positive: true, color: 'text-pink-400' },
];

export function TopTicker() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  
  return (
    <div className="bg-[#0a0a10] border-b border-[#2c2c44]">
      <div className="container mx-auto py-2 px-4 overflow-x-auto">
        <motion.div 
          className="flex space-x-6 md:space-x-12 justify-start md:justify-center min-w-max"
          initial={{x: 0}}
          animate={{x: [-10, 10, -10]}}
          transition={{
            duration: 10, 
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear'
          }}
        >
          {mockStats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="flex items-center cursor-pointer"
              whileHover={{scale: 1.05}}
              onMouseEnter={() => setHoveredStat(stat.label)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              {/* Animated bubble */}
              <motion.div
                className={`w-2 h-2 rounded-full ${stat.positive ? 'bg-green-400' : 'bg-red-400'} mr-2 flex-shrink-0`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1],
                  boxShadow: hoveredStat === stat.label 
                    ? ['0 0 0px rgba(255,255,255,0)', '0 0 10px rgba(255,255,255,0.5)', '0 0 0px rgba(255,255,255,0)'] 
                    : '0 0 0px rgba(255,255,255,0)',
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
              
              <div className="mr-1 text-xs text-gray-400 font-medium">{stat.label}:</div>
              
              {/* Value with glow effect on hover */}
              <motion.div 
                className={`text-xs font-bold ${hoveredStat === stat.label ? stat.color : 'text-white'}`}
                animate={{
                  textShadow: hoveredStat === stat.label 
                    ? ['0 0 0px rgba(255,255,255,0)', '0 0 5px rgba(255,255,255,0.7)', '0 0 0px rgba(255,255,255,0)'] 
                    : '0 0 0px rgba(255,255,255,0)',
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                {stat.value}
              </motion.div>
              
              {/* Change indicator with dynamic color */}
              <motion.div 
                className={`ml-1.5 text-xs ${stat.positive ? 'text-green-400' : 'text-red-400'}`}
                animate={{
                  y: [0, -2, 0],
                  opacity: hoveredStat === stat.label ? [0.7, 1, 0.7] : 1
                }}
                transition={{
                  y: {
                    duration: 1.5,
                    repeat: Infinity
                  },
                  opacity: {
                    duration: 1,
                    repeat: Infinity
                  }
                }}
              >
                {stat.change}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}