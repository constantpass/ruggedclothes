import {motion} from 'framer-motion';

// Mock data - in a real app, this would come from Shopify metafields
const mockStats = [
  { label: '24h Volume', value: '$158,923', change: '+15.2%', positive: true },
  { label: 'Active Sellers', value: '843', change: '+12', positive: true },
  { label: 'Total T-Shirts', value: '2,547', change: '+83', positive: true },
  { label: 'Avg. Price', value: '$32.42', change: '-1.2%', positive: false },
  { label: 'Recent Sales', value: '432', change: '+53', positive: true },
];

export function TopTicker() {
  return (
    <div className="bg-[#0a0a10] border-b border-[#2c2c44]">
      <div className="container mx-auto py-2 px-4 overflow-x-auto">
        <div className="flex space-x-6 md:space-x-12 justify-start md:justify-center min-w-max">
          {mockStats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              {/* Animated bubble */}
              <motion.div
                className={`w-2 h-2 rounded-full ${stat.positive ? 'bg-green-400' : 'bg-red-400'} mr-2 flex-shrink-0`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
              
              <div className="mr-1 text-xs text-gray-400 font-medium">{stat.label}:</div>
              <div className="text-xs font-bold">{stat.value}</div>
              <div className={`ml-1.5 text-xs ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}