import {json} from '@remix-run/node';
import type {LoaderFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';
import {ShirtCarousel} from '../components/ShirtCarousel';

// Mock data that would normally come from Shopify
const mockProducts = {
  nodes: [
    {
      id: '1',
      title: 'PEPE PUMP',
      handle: 'pepe-pump',
      images: {
        nodes: [
          {
            id: 'img1',
            url: 'https://placehold.co/600x400/22c55e/ffffff?text=PEPE+PUMP',
            altText: 'PEPE PUMP T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '35.99',
          currencyCode: 'USD'
        }
      }
    },
    {
      id: '2',
      title: 'MOON SOON',
      handle: 'moon-soon',
      images: {
        nodes: [
          {
            id: 'img2',
            url: 'https://placehold.co/600x400/8b5cf6/ffffff?text=MOON+SOON',
            altText: 'MOON SOON T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '29.99',
          currencyCode: 'USD'
        }
      }
    },
    {
      id: '3',
      title: 'DEGEN SZN',
      handle: 'degen-szn',
      images: {
        nodes: [
          {
            id: 'img3',
            url: 'https://placehold.co/600x400/ec4899/ffffff?text=DEGEN+SZN',
            altText: 'DEGEN SZN T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '32.99',
          currencyCode: 'USD'
        }
      }
    },
    {
      id: '4',
      title: 'WAGMI',
      handle: 'wagmi',
      images: {
        nodes: [
          {
            id: 'img4',
            url: 'https://placehold.co/600x400/3b82f6/ffffff?text=WAGMI',
            altText: 'WAGMI T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '27.99',
          currencyCode: 'USD'
        }
      }
    }
  ],
  totalCount: 2547
};

const mockCollections = {
  nodes: [
    {
      id: 'col1',
      title: 'Pumping',
      handle: 'pumping',
      products: {
        totalCount: 32
      }
    },
    {
      id: 'col2',
      title: 'Rugged',
      handle: 'rugged',
      products: {
        totalCount: 14
      }
    },
    {
      id: 'col3',
      title: 'New Drops',
      handle: 'new-drops',
      products: {
        totalCount: 26
      }
    },
    {
      id: 'col4',
      title: 'Classics',
      handle: 'classics',
      products: {
        totalCount: 41
      }
    }
  ]
};

export const loader: LoaderFunction = async () => {
  // In a real implementation, this would fetch from Shopify's Storefront API
  return json({
    products: mockProducts,
    collections: mockCollections
  });
};

export default function Index() {
  const {products, collections} = useLoaderData();
  
  // Map categories to display format with colors
  const categoryColors = {
    'pumping': 'from-green-500 to-green-700',
    'rugged': 'from-red-500 to-red-700',
    'new-drops': 'from-blue-500 to-blue-700',
    'classics': 'from-yellow-500 to-yellow-700',
  };
  
  const categories = collections.nodes.map(collection => ({
    id: collection.id,
    handle: collection.handle,
    title: collection.title,
    color: categoryColors[collection.handle] || 'from-purple-500 to-purple-700',
    count: collection.products.totalCount
  }));

  // Stats section - could be dynamic from Shopify metafields
  const stats = {
    totalShirts: products.totalCount,
    dailySales: '$45,892',
    creators: 843,
    topROI: '312%'
  };

  return (
    <motion.div 
      className="container mx-auto py-6 px-4"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <section className="mb-12">
        {/* Featured Carousel */}
        <div className="bg-gradient-to-br from-[#151522] to-[#1c1c2e] p-4 md:p-6 rounded-xl border border-[#2c2c44] relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
              Featured Shirts
            </h2>
            <Link to="/collections/trending" className="text-pink-400 hover:text-pink-300 transition-colors">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 3 }}
              >
                <span>View All</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          </div>
          
          {/* Import our new ShirtCarousel component */}
          <ShirtCarousel />
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Featured Products */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                Trending T-Shirts
              </h2>
              <Link to="/collections/trending" className="text-purple-400 hover:text-purple-300 transition-colors">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.nodes.slice(0, 4).map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="bg-[#151522] rounded-xl overflow-hidden border border-pink-500/20 card-glow"
                  whileHover={{
                    y: -5, 
                    boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)',
                    borderColor: 'rgba(236, 72, 153, 0.5)'
                  }}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/products/${product.handle}`}>
                    <div className="relative">
                      <img
                        src={product.images.nodes[0].url}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                        width="300"
                        height="200"
                      />
                      
                      {/* Enhanced price growth indicator */}
                      <motion.div 
                        className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold
                                  shadow-lg border border-green-400 flex items-center"
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            '0 0 0px rgba(34, 197, 94, 0.3)',
                            '0 0 8px rgba(34, 197, 94, 0.6)',
                            '0 0 0px rgba(34, 197, 94, 0.3)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="mr-1">↑</span>
                        <span>+{(120 + index * 40)}%</span>
                      </motion.div>
                      
                      {/* Creator tag */}
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                        by <span className="text-purple-300">Creator{product.id}</span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      {/* Product name with glow effect */}
                      <motion.h3 
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                        whileHover={{
                          textShadow: '0 0 8px rgba(255,255,255,0.5)'
                        }}
                      >
                        {product.title}
                      </motion.h3>
                      
                      <div className="flex justify-between items-center mt-2">
                        {/* Price with dynamic animation */}
                        <motion.p 
                          className="text-purple-400 font-bold"
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          ${product.priceRange.minVariantPrice.amount}
                        </motion.p>
                        
                        {/* Sales count */}
                        <p className="text-xs text-gray-400">
                          {800 + (index * 123)} sold
                        </p>
                      </div>
                      
                      {/* Buy button */}
                      <motion.button 
                        className="w-full mt-3 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white py-1.5 rounded-lg
                                 text-sm font-medium"
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)'
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Buy Now
                      </motion.button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Categories */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                Categories
              </h2>
              <Link to="/collections" className="text-purple-400 hover:text-purple-300 transition-colors">View All</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <motion.div 
                  key={category.id}
                  className={`bg-gradient-to-br ${category.color} p-6 rounded-lg text-white text-center cursor-pointer
                             border border-white/10 relative overflow-hidden`}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                    scale: 1.03
                  }}
                  whileTap={{y: 0, boxShadow: '0 5px 10px rgba(0,0,0,0.2)'}}
                >
                  <Link to={`/collections/${category.handle}`} className="block absolute inset-0 z-10">
                    <span className="sr-only">{category.title}</span>
                  </Link>
                  <motion.div 
                    className="absolute inset-0 bg-white/5"
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatType: 'reverse'
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
                    }}
                  />
                  <h3 className="text-xl font-bold relative z-2">{category.title}</h3>
                  <p className="text-sm mt-1 text-white/80 relative z-2">{category.count}+ shirts</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {/* Enhanced Trending Keywords */}
          <div className="mt-8 bg-[#151522] p-4 rounded-xl border border-purple-500/20 card-glow">
            <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
              Trending Keywords
            </h2>
            
            {/* Search bar above keywords */}
            <div className="mb-4 relative">
              <input 
                type="text" 
                placeholder="Search keywords..."
                className="w-full bg-[#1c1c2e] text-white rounded-lg px-4 py-2 pl-10
                      border border-purple-500/20 focus:border-purple-500/50 focus:outline-none
                      focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              />
              <div className="absolute left-3 top-2.5 text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                {keyword: 'PEPE', intensity: 95, color: 'green'},
                {keyword: 'MOON', intensity: 82, color: 'blue'},
                {keyword: 'DEGEN', intensity: 75, color: 'pink'},
                {keyword: 'WAGMI', intensity: 65, color: 'purple'},
                {keyword: 'HODL', intensity: 60, color: 'orange'},
                {keyword: 'APE', intensity: 55, color: 'yellow'},
                {keyword: 'BULL', intensity: 50, color: 'red'},
                {keyword: 'PUMP', intensity: 48, color: 'green'},
                {keyword: 'LAMBO', intensity: 45, color: 'blue'},
                {keyword: 'GEM', intensity: 40, color: 'indigo'}
              ].map((item) => {
                const colorMap = {
                  green: 'text-green-400 bg-green-900/20 border-green-500/20 hover:bg-green-900/40 hover:border-green-500/40',
                  blue: 'text-blue-400 bg-blue-900/20 border-blue-500/20 hover:bg-blue-900/40 hover:border-blue-500/40',
                  pink: 'text-pink-400 bg-pink-900/20 border-pink-500/20 hover:bg-pink-900/40 hover:border-pink-500/40',
                  purple: 'text-purple-400 bg-purple-900/20 border-purple-500/20 hover:bg-purple-900/40 hover:border-purple-500/40',
                  orange: 'text-orange-400 bg-orange-900/20 border-orange-500/20 hover:bg-orange-900/40 hover:border-orange-500/40',
                  yellow: 'text-yellow-400 bg-yellow-900/20 border-yellow-500/20 hover:bg-yellow-900/40 hover:border-yellow-500/40',
                  red: 'text-red-400 bg-red-900/20 border-red-500/20 hover:bg-red-900/40 hover:border-red-500/40',
                  indigo: 'text-indigo-400 bg-indigo-900/20 border-indigo-500/20 hover:bg-indigo-900/40 hover:border-indigo-500/40'
                };
                const colorClass = colorMap[item.color as keyof typeof colorMap];
                
                // Scale font size based on intensity
                const fontSize = 12 + (item.intensity / 20);
                  
                return (
                  <motion.div
                    key={item.keyword}
                    className={`px-3 py-1 rounded-full cursor-pointer
                             border ${colorClass} transition-all duration-300`}
                    style={{ fontSize: `${fontSize}px` }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: `0 0 12px rgba(168,85,247,0.5)`,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.random() * 0.3 }}
                  >
                    <div className="flex items-center">
                      <span className="mr-1">#</span>
                      <span>{item.keyword}</span>
                      <motion.span 
                        className="ml-1.5 text-xs"
                        animate={{ 
                          opacity: [0.7, 1, 0.7],
                          y: [0, -1, 0] 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      >
                        +{item.intensity}%
                      </motion.span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Create CTA */}
          <motion.div 
            className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-700 p-6 rounded-xl border border-indigo-400/30 relative overflow-hidden card-glow"
            whileHover={{scale: 1.02}}
          >
            {/* Animated particles */}
            {Array.from({length: 8}).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/70"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  y: [0, Math.random() * -30 - 10],
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 1 + 1, 0]
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: i * (Math.random() * 0.5)
                }}
              />
            ))}
            
            <h2 className="text-xl font-bold mb-2 text-white relative z-10 neon-text">Create Your Own T-Shirt</h2>
            <p className="text-indigo-200 mb-4 relative z-10">Design, sell, and earn profit share from your own shirt designs!</p>
            
            {/* This would link to a custom form or partner app integration */}
            <Link to="/pages/custom-shirt">
              <motion.button 
                className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-indigo-50 transition-colors relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255,255,255,0.5)' 
                }}
                whileTap={{scale: 0.98}}
              >
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats card */}
          <div className="mt-8 bg-[#151522] p-5 rounded-xl border border-[#2c2c44] card-glow">
            <h2 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
              Platform Stats
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]">
                <div className="text-sm text-gray-400">Total Shirts</div>
                <div className="text-xl font-bold text-white mt-1">{stats.totalShirts}</div>
              </div>
              <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]">
                <div className="text-sm text-gray-400">Sales (24h)</div>
                <div className="text-xl font-bold text-green-400 mt-1">{stats.dailySales}</div>
              </div>
              <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]">
                <div className="text-sm text-gray-400">Creators</div>
                <div className="text-xl font-bold text-white mt-1">{stats.creators}</div>
              </div>
              <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]">
                <div className="text-sm text-gray-400">Top ROI</div>
                <div className="text-xl font-bold text-purple-400 mt-1">{stats.topROI}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}