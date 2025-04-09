import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';
import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';

// Mock collections data
const mockCollections = {
  'pumping': {
    id: 'col1',
    title: 'Pumping',
    handle: 'pumping',
    description: 'T-shirts featuring coins and tokens that are on the rise. Get in early with these trending designs!',
    products: {
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
        }
      ]
    }
  },
  'rugged': {
    id: 'col2',
    title: 'Rugged',
    handle: 'rugged',
    description: 'For the true degens. T-shirts featuring the most notorious rug pulls and failed projects in crypto history.',
    products: {
      nodes: [
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
        }
      ]
    }
  },
  'trending': {
    id: 'col5',
    title: 'Trending',
    handle: 'trending',
    description: 'Our hottest sellers right now. These shirts are pumping in sales and popularity!',
    products: {
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
      ]
    }
  }
};

export async function loader({params}) {
  const {handle} = params;

  if (!handle) {
    throw new Response('No collection handle provided', {status: 404});
  }

  // Get collection from mock data
  const collection = mockCollections[handle];

  if (!collection) {
    throw new Response('Collection not found', {status: 404});
  }

  return json({
    collection,
  });
}

export default function CollectionPage() {
  const {collection} = useLoaderData<typeof loader>();
  
  // Map categories to display format with colors
  const categoryColors = {
    'pumping': 'from-green-500 to-green-700',
    'rugged': 'from-red-500 to-red-700',
    'new-drops': 'from-blue-500 to-blue-700',
    'classics': 'from-yellow-500 to-yellow-700',
    'trending': 'from-purple-500 to-purple-700',
  };
  
  const colorClass = categoryColors[collection.handle as keyof typeof categoryColors] || 'from-purple-500 to-purple-700';
  
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        {/* Collection Header */}
        <div className={`bg-gradient-to-br ${colorClass} rounded-xl p-8 mb-10 relative overflow-hidden`}>
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
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-3">{collection.title}</h1>
            
            {collection.description && (
              <div 
                dangerouslySetInnerHTML={{__html: collection.description}} 
                className="text-white/80 max-w-3xl"
              />
            )}
            
            <div className="flex items-center mt-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                {collection.products.nodes.length} shirts
              </span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collection.products.nodes.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-[#151522] rounded-xl overflow-hidden border border-[#2c2c44] card-glow"
              whileHover={{y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.3)'}}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.3, delay: index * 0.05}}
            >
              <Link to={`/products/${product.handle}`}>
                <div className="relative">
                  {product.images.nodes[0] && (
                    <img
                      src={product.images.nodes[0].url}
                      className="w-full h-56 object-cover"
                      alt={product.title}
                      width={product.images.nodes[0].width}
                      height={product.images.nodes[0].height}
                    />
                  )}
                  
                  {/* This would come from a metafield in real application */}
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    +120%
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold">{product.title}</h3>
                  
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-purple-400 font-medium">
                      ${product.priceRange.minVariantPrice.amount}
                    </p>
                    
                    <div className="text-xs text-gray-400">
                      {/* This would come from metafields */}
                      897 sales
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No products found */}
        {collection.products.nodes.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-gray-400 mb-6">We couldn't find any products in this collection.</p>
            <Link 
              to="/collections"
              className="bg-purple-600 text-white px-6 py-3 rounded-full inline-block"
            >
              View all collections
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// GraphQL query for collection data
const COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      products(first: 20) {
        nodes {
          id
          title
          handle
          images(first: 1) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;