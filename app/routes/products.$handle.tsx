import {json} from '@remix-run/node';
import type {LoaderFunction} from '@remix-run/node';
import {useLoaderData, Link} from '@remix-run/react';
import {motion} from 'framer-motion';

// Mock product data that would come from Shopify
const mockProducts = {
  '1': {
    id: '1',
    title: 'PEPE PUMP',
    handle: 'pepe-pump',
    descriptionHtml: '<p>The iconic PEPE PUMP t-shirt, perfect for crypto enthusiasts and meme lovers!</p>',
    images: {
      nodes: [
        {
          id: 'img1',
          url: 'https://placehold.co/600x400/22c55e/ffffff?text=PEPE+PUMP',
          altText: 'PEPE PUMP T-shirt',
          width: 600,
          height: 400
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'variant1',
          price: {
            amount: '35.99',
            currencyCode: 'USD'
          },
          availableForSale: true,
          selectedOptions: [
            {
              name: 'Size',
              value: 'M'
            },
            {
              name: 'Color',
              value: 'Green'
            }
          ]
        }
      ]
    },
    metafields: [
      {
        key: 'growth',
        value: '240'
      },
      {
        key: 'creator_name',
        value: 'PepeLord'
      },
      {
        key: 'creator_address',
        value: 'pepe...x829'
      },
      {
        key: 'creator_share',
        value: '10'
      },
      {
        key: 'total_sales',
        value: '1289'
      },
      {
        key: 'holders',
        value: '1254'
      }
    ]
  },
  '2': {
    id: '2',
    title: 'MOON SOON',
    handle: 'moon-soon',
    descriptionHtml: '<p>Show off your optimism with this MOON SOON t-shirt. To the moon!</p>',
    images: {
      nodes: [
        {
          id: 'img2',
          url: 'https://placehold.co/600x400/8b5cf6/ffffff?text=MOON+SOON',
          altText: 'MOON SOON T-shirt',
          width: 600,
          height: 400
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'variant2',
          price: {
            amount: '29.99',
            currencyCode: 'USD'
          },
          availableForSale: true,
          selectedOptions: [
            {
              name: 'Size',
              value: 'M'
            },
            {
              name: 'Color',
              value: 'Purple'
            }
          ]
        }
      ]
    },
    metafields: [
      {
        key: 'growth',
        value: '120'
      },
      {
        key: 'creator_name',
        value: 'MoonMan'
      },
      {
        key: 'creator_address',
        value: 'moon...p741'
      },
      {
        key: 'creator_share',
        value: '12'
      },
      {
        key: 'total_sales',
        value: '895'
      },
      {
        key: 'holders',
        value: '872'
      }
    ]
  },
  '3': {
    id: '3',
    title: 'DEGEN SZN',
    handle: 'degen-szn',
    descriptionHtml: '<p>Embrace the degen life with our limited edition DEGEN SZN t-shirt.</p>',
    images: {
      nodes: [
        {
          id: 'img3',
          url: 'https://placehold.co/600x400/ec4899/ffffff?text=DEGEN+SZN',
          altText: 'DEGEN SZN T-shirt',
          width: 600,
          height: 400
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: 'variant3',
          price: {
            amount: '32.99',
            currencyCode: 'USD'
          },
          availableForSale: true,
          selectedOptions: [
            {
              name: 'Size',
              value: 'L'
            },
            {
              name: 'Color',
              value: 'Pink'
            }
          ]
        }
      ]
    },
    metafields: [
      {
        key: 'growth',
        value: '180'
      },
      {
        key: 'creator_name',
        value: 'DegenKing'
      },
      {
        key: 'creator_address',
        value: 'degen...q462'
      },
      {
        key: 'creator_share',
        value: '15'
      },
      {
        key: 'total_sales',
        value: '1045'
      },
      {
        key: 'holders',
        value: '985'
      }
    ]
  }
};

export const loader: LoaderFunction = async ({params}) => {
  const {handle} = params;
  
  // Get product by handle
  let product = null;
  for (const id in mockProducts) {
    if (mockProducts[id].handle === handle) {
      product = mockProducts[id];
      break;
    }
  }
  
  if (!product) {
    throw new Response('Product not found', {status: 404});
  }

  // Get related products
  const relatedProducts = {
    nodes: Object.values(mockProducts).filter(p => p.id !== product.id)
  };

  return json({
    product,
    relatedProducts,
  });
};

export default function ProductPage() {
  const {product, relatedProducts} = useLoaderData();
  
  // Default variant - first variant is the default
  const selectedVariant = product.variants.nodes[0];
  
  // Get product stats (from metafields)
  const stats = {
    totalSales: product.metafields.find(m => m.key === 'total_sales')?.value || '897',
    lastPurchase: '2 minutes ago',
    holders: product.metafields.find(m => m.key === 'holders')?.value || '854',
  };

  // Calculate growth percentage (from metafields)
  const growth = product.metafields.find(m => m.key === 'growth')?.value || '120';

  // Get creator info (from metafields)
  const creator = {
    name: product.metafields.find(m => m.key === 'creator_name')?.value || 'TShirtDesigner',
    address: product.metafields.find(m => m.key === 'creator_address')?.value || 'designer...x723',
    share: product.metafields.find(m => m.key === 'creator_share')?.value || '10',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5}}
        >
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl shadow-lg">
            {product.images.nodes[0] && (
              <img 
                src={product.images.nodes[0].url}
                alt={product.title}
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Creator Info</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Created by</p>
                <p className="font-medium">{creator.name}</p>
                <p className="text-xs text-gray-400">{creator.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Royalty</p>
                <p className="font-medium text-purple-600">{creator.share}%</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Product Details */}
        <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div 
                dangerouslySetInnerHTML={{__html: product.descriptionHtml}} 
                className="text-gray-600 mt-2"
              />
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center">
              <p className="text-xl font-bold">+{growth}%</p>
              <p className="text-xs">24h</p>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">
                ${selectedVariant.price.amount} {selectedVariant.price.currencyCode}
              </span>
            </div>
            
            <div className="mt-10 space-y-4">
              <button
                className="flex items-center justify-center bg-[#5A31F4] text-white w-full py-3 rounded-full"
                onClick={() => {
                  // Shop Pay button functionality would go here
                }}
              >
                Check out with Shop Pay
              </button>
              
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg"
                onClick={() => {
                  // Add to cart functionality would go here
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm">Total Sales</p>
              <p className="font-bold text-xl">{stats.totalSales}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm">Last Purchase</p>
              <p className="font-bold text-lg">{stats.lastPurchase}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm">Holders</p>
              <p className="font-bold text-xl">{stats.holders}</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
      >
        <h2 className="text-2xl font-bold mb-6">Similar T-Shirts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.nodes.map(similar => (
            <motion.div
              key={similar.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)'}}
            >
              {similar.images.nodes[0] && (
                <img 
                  src={similar.images.nodes[0].url}
                  alt={similar.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold">{similar.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    +{similar.metafields.find(m => m.key === 'growth')?.value || '120'}%
                  </span>
                </div>
                <p className="mt-2 text-purple-600 font-medium">
                  ${similar.variants.nodes[0].price.amount} {similar.variants.nodes[0].price.currencyCode}
                </p>
                <Link 
                  to={`/products/${similar.handle}`}
                  className="mt-3 w-full bg-purple-100 text-purple-600 py-2 px-4 rounded-lg font-medium hover:bg-purple-200 transition-colors inline-block text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}