import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';
import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';

// Mock collections data
const mockCollections = {
  nodes: [
    {
      id: 'col1',
      title: 'Pumping',
      handle: 'pumping',
      description: 'T-shirts featuring coins and tokens that are on the rise. Get in early with these trending designs!',
      products: {
        totalCount: 32
      }
    },
    {
      id: 'col2',
      title: 'Rugged',
      handle: 'rugged',
      description: 'For the true degens. T-shirts featuring the most notorious rug pulls and failed projects in crypto history.',
      products: {
        totalCount: 14
      }
    },
    {
      id: 'col3',
      title: 'New Drops',
      handle: 'new-drops',
      description: 'Fresh designs just dropped. Be the first to rock these brand new crypto and meme-inspired t-shirts.',
      products: {
        totalCount: 26
      }
    },
    {
      id: 'col4',
      title: 'Classics',
      handle: 'classics',
      description: 'Timeless crypto memes and references that never go out of style. The OG designs everyone recognizes.',
      products: {
        totalCount: 41
      }
    },
    {
      id: 'col5',
      title: 'Trending',
      handle: 'trending',
      description: 'Our hottest sellers right now. These shirts are pumping in sales and popularity!',
      products: {
        totalCount: 28
      }
    }
  ]
};

export async function loader() {
  return json({
    collections: mockCollections
  });
}

export default function CollectionsPage() {
  const {collections} = useLoaderData<typeof loader>();
  
  // Map categories to display format with colors
  const categoryColors = {
    'pumping': 'from-green-500 to-green-700',
    'rugged': 'from-red-500 to-red-700',
    'new-drops': 'from-blue-500 to-blue-700',
    'classics': 'from-yellow-500 to-yellow-700',
    'trending': 'from-purple-500 to-purple-700',
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        <h1 className="text-3xl font-bold mb-8 neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          T-Shirt Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.nodes.map((collection, index) => {
            const colorClass = categoryColors[collection.handle as keyof typeof categoryColors] || 'from-purple-500 to-purple-700';
            
            return (
              <motion.div 
                key={collection.id}
                className={`bg-gradient-to-br ${colorClass} p-8 rounded-xl text-white relative overflow-hidden
                         border border-white/10 h-64 flex flex-col justify-between`}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  scale: 1.02
                }}
                whileTap={{scale: 0.98}}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: index * 0.1}}
              >
                <Link to={`/collections/${collection.handle}`} className="absolute inset-0 z-10">
                  <span className="sr-only">{collection.title}</span>
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
                
                {/* Animated particles */}
                {Array.from({length: 6}).map((_, i) => (
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
                
                <div>
                  <h2 className="text-2xl font-bold relative z-2">{collection.title}</h2>
                  <p className="text-white/80 mt-2 relative z-2">
                    {collection.description ? collection.description.substring(0, 120) + '...' : 'Explore our collection of trending t-shirts'}
                  </p>
                </div>
                
                <div className="flex items-center justify-between relative z-2">
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {collection.products.totalCount} shirts
                  </span>
                  <span className="text-sm font-medium flex items-center">
                    Explore
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Tags Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
            Popular Tags
          </h2>
          
          <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44]">
            <div className="flex flex-wrap gap-3">
              {['TRENDING', 'POPULAR', 'NEW', 'LIMITED', 'SALE', 'EXCLUSIVE', 'BEST SELLER', 'CRYPTO', 'PEPE', 'MOON', 'DEGEN', 'WAGMI', 'HODL', 'APE', 'BULL', 'PUMP'].map((tag) => (
                <motion.a 
                  key={tag}
                  href={`/search?q=${tag}`}
                  className="bg-[#1c1c2e] px-4 py-2 rounded-full text-sm cursor-pointer border border-[#2c2c44]"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#2a2a44',
                    boxShadow: '0 0 12px rgba(168,85,247,0.5)' 
                  }}
                >
                  #{tag}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Query to fetch all collections
const COLLECTIONS_QUERY = `#graphql
  query Collections {
    collections(first: 10) {
      nodes {
        id
        title
        handle
        description
        products(first: 0) {
          totalCount
        }
      }
    }
  }
`;