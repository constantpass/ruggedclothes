import {json} from '@remix-run/node';
import type {LoaderFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';

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
        {/* Featured banner */}
        <div className="bg-gradient-to-br from-[#151522] to-[#1c1c2e] p-8 rounded-xl border border-[#2c2c44] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">T-Shirt Pump</h2>
              <p className="text-gray-300 mb-6">The #1 marketplace for trending t-shirts with casino-like dynamics!</p>
              <Link to="/collections/trending">
                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
                  whileHover={{scale: 1.05, boxShadow: '0 0 15px rgba(168,85,247,0.5)'}}
                  whileTap={{scale: 0.98}}
                >
                  Explore Trending Shirts
                </motion.button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Placeholder for featured product image */}
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                Featured Shirt
              </div>
            </div>
          </div>
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
              {products.nodes.slice(0, 4).map((product) => (
                <motion.div 
                  key={product.id}
                  className="bg-[#151522] rounded-xl overflow-hidden border border-[#2c2c44] card-glow"
                  whileHover={{y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.3)'}}
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
                      
                      {/* This would come from a metafield in real application */}
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        +120%
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold">{product.title}</h3>
                      <p className="text-purple-400 mt-1">
                        ${product.priceRange.minVariantPrice.amount}
                      </p>
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
          {/* Trending Keywords */}
          <div className="mt-8 bg-[#151522] p-4 rounded-xl border border-[#2c2c44] card-glow">
            <h2 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
              Trending Keywords
            </h2>
            <div className="flex flex-wrap gap-2">
              {['PEPE', 'MOON', 'DEGEN', 'WAGMI', 'HODL', 'APE', 'BULL', 'PUMP', 'LAMBO', 'GEM'].map((keyword) => (
                <motion.span 
                  key={keyword}
                  className="bg-[#1c1c2e] px-3 py-1 rounded-full text-sm cursor-pointer border border-[#2c2c44]"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#2a2a44',
                    boxShadow: '0 0 12px rgba(168,85,247,0.5)' 
                  }}
                >
                  #{keyword}
                </motion.span>
              ))}
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