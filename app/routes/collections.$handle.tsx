import {useLoaderData} from '@remix-run/react';
import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {motion} from 'framer-motion';

export async function loader({params, context}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Response('No collection handle provided', {status: 404});
  }

  // Get collection data
  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle},
  });

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
                    <Image
                      data={product.images.nodes[0]}
                      className="w-full h-56 object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      alt={product.title}
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