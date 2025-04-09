import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Mock search results - in a real app, this would come from Shopify's search API
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
      },
      tags: ['PEPE', 'PUMP', 'TRENDING', 'CRYPTO', 'MEME'],
      createdAt: '2025-03-15'
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
      },
      tags: ['MOON', 'CRYPTO', 'TRENDING', 'HODL'],
      createdAt: '2025-03-18'
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
      },
      tags: ['DEGEN', 'CRYPTO', 'POPULAR', 'SZN'],
      createdAt: '2025-03-12'
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
      },
      tags: ['WAGMI', 'CRYPTO', 'POPULAR', 'POSITIVE'],
      createdAt: '2025-03-05'
    },
    {
      id: '5',
      title: 'HODL KING',
      handle: 'hodl-king',
      images: {
        nodes: [
          {
            id: 'img5',
            url: 'https://placehold.co/600x400/f59e0b/ffffff?text=HODL+KING',
            altText: 'HODL KING T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '33.99',
          currencyCode: 'USD'
        }
      },
      tags: ['HODL', 'CRYPTO', 'KING', 'POPULAR'],
      createdAt: '2025-03-10'
    },
    {
      id: '6',
      title: 'APE IN',
      handle: 'ape-in',
      images: {
        nodes: [
          {
            id: 'img6',
            url: 'https://placehold.co/600x400/4ade80/ffffff?text=APE+IN',
            altText: 'APE IN T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '31.99',
          currencyCode: 'USD'
        }
      },
      tags: ['APE', 'CRYPTO', 'NEW', 'TRENDING'],
      createdAt: '2025-03-21'
    },
    {
      id: '7',
      title: 'NGMI',
      handle: 'ngmi',
      images: {
        nodes: [
          {
            id: 'img7',
            url: 'https://placehold.co/600x400/ef4444/ffffff?text=NGMI',
            altText: 'NGMI T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '28.99',
          currencyCode: 'USD'
        }
      },
      tags: ['NGMI', 'CRYPTO', 'RUGGED', 'POPULAR'],
      createdAt: '2025-03-08'
    },
    {
      id: '8',
      title: 'BULLISH AF',
      handle: 'bullish-af',
      images: {
        nodes: [
          {
            id: 'img8',
            url: 'https://placehold.co/600x400/0ea5e9/ffffff?text=BULLISH+AF',
            altText: 'BULLISH AF T-Shirt',
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: '34.99',
          currencyCode: 'USD'
        }
      },
      tags: ['BULL', 'CRYPTO', 'TRENDING', 'POSITIVE'],
      createdAt: '2025-03-17'
    }
  ]
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('q') || '';
  const sortBy = url.searchParams.get('sort') || 'relevance';
  
  // Filter products based on search query
  // In a real app, this filtering would happen on the server side via Shopify's API
  let filteredProducts = [...mockProducts.nodes];
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => {
      const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const tagMatch = product.tags.some(tag => 
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return titleMatch || tagMatch;
    });
  }
  
  // Sort products based on sorting parameter
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => 
      parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount)
    );
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => 
      parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount)
    );
  } else if (sortBy === 'newest') {
    filteredProducts.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  // Get unique tags from filtered products for filter options
  const allTags = filteredProducts.flatMap(product => product.tags);
  const uniqueTags = [...new Set(allTags)];
  
  return json({
    products: filteredProducts,
    query: searchQuery,
    tags: uniqueTags,
    total: filteredProducts.length
  });
};

export default function SearchPage() {
  const { products, query, tags, total } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  
  // Apply tag filters
  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        activeFilters.some(filter => product.tags.includes(filter))
      );
      setFilteredProducts(filtered);
    }
  }, [activeFilters, products]);
  
  // Handle filter toggle
  const toggleFilter = (tag: string) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(t => t !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };
  
  // Handle sort change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', event.target.value);
    setSearchParams(newParams);
  };
  
  // Get current sort value
  const currentSort = searchParams.get('sort') || 'relevance';
  
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3 neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Search Results
          </h1>
          
          {query ? (
            <div className="flex items-center text-lg">
              <span className="text-gray-300">Results for: </span>
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">
                "{query}"
              </span>
              <span className="ml-2 text-gray-400">({total} shirts found)</span>
            </div>
          ) : (
            <p className="text-gray-300">Browse all shirts</p>
          )}
        </div>
        
        {/* Search and filter controls */}
        <div className="bg-[#151522] p-5 rounded-xl border border-[#2c2c44] mb-8">
          <div className="md:flex justify-between items-center">
            {/* Search form */}
            <form action="/search" method="get" className="md:w-1/2 mb-4 md:mb-0">
              <div className="relative">
                <motion.input
                  type="text"
                  name="q"
                  placeholder="Search for t-shirts..."
                  defaultValue={query}
                  className="w-full bg-[#1c1c2e] text-white rounded-full px-4 py-3 pl-10
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                         border border-purple-500/20"
                  whileFocus={{ 
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                    borderColor: 'rgba(168, 85, 247, 0.8)'
                  }}
                />
                <div className="absolute left-3 top-3.5 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.button>
              </div>
            </form>
            
            {/* Sort and filter options */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <select
                  value={currentSort}
                  onChange={handleSortChange}
                  className="appearance-none bg-[#1c1c2e] text-white rounded-lg px-4 py-2 pr-8
                           border border-[#2c2c44] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Sort by: Price (Low to High)</option>
                  <option value="price-high">Sort by: Price (High to Low)</option>
                </select>
                <div className="absolute right-3 top-3 text-purple-400 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-[#1c1c2e] text-white rounded-lg px-4 py-2 border border-[#2c2c44] flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters {activeFilters.length > 0 && `(${activeFilters.length})`}
              </motion.button>
            </div>
          </div>
          
          {/* Filters section */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-[#2c2c44]"
            >
              <div className="mb-2 text-sm text-gray-400">Filter by tags:</div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <motion.button
                    key={tag}
                    onClick={() => toggleFilter(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm
                            ${activeFilters.includes(tag)
                              ? 'bg-purple-600 text-white'
                              : 'bg-[#252538] text-gray-300 hover:bg-[#32324d]'
                            } border border-[#3d3d5c] transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    #{tag}
                  </motion.button>
                ))}
              </div>
              
              {activeFilters.length > 0 && (
                <motion.button
                  onClick={() => setActiveFilters([])}
                  className="text-sm text-purple-400 hover:text-purple-300 mt-3 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear all filters
                </motion.button>
              )}
            </motion.div>
          )}
        </div>
        
        {/* Search results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                className="bg-[#151522] rounded-xl overflow-hidden border border-[#2c2c44] card-glow"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/products/${product.handle}`}>
                  <div className="relative">
                    {product.images.nodes[0] && (
                      <img
                        src={product.images.nodes[0].url}
                        alt={product.title}
                        className="w-full h-56 object-cover"
                        width={product.images.nodes[0].width}
                        height={product.images.nodes[0].height}
                      />
                    )}
                    
                    {/* Price tag */}
                    <div className="absolute top-2 right-2 bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      ${product.priceRange.minVariantPrice.amount}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{product.title}</h3>
                    
                    {/* Tags */}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-block px-2 py-0.5 bg-[#252538] text-xs rounded-full text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Buy button */}
                    <motion.button 
                      className="w-full mt-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white py-2 rounded-lg
                               text-sm font-medium"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)'
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-[#151522] p-8 rounded-xl border border-[#2c2c44] text-center">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              No shirts found
            </h2>
            <p className="text-gray-400 mb-6">
              Try searching with different keywords or browse our categories.
            </p>
            <Link to="/collections">
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168,85,247,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Categories
              </motion.button>
            </Link>
          </div>
        )}
        
        {/* Popular searches */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
            Popular Searches
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {['PEPE', 'MOON', 'DEGEN', 'WAGMI', 'HODL', 'APE', 'BULL', 'CRYPTO', 'PUMP', 'MEME'].map((term) => (
              <Link key={term} to={`/search?q=${term}`}>
                <motion.div 
                  className="px-4 py-2 bg-[#1c1c2e] rounded-full text-gray-300 border border-[#2c2c44]"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#252538',
                    boxShadow: '0 0 12px rgba(168,85,247,0.3)' 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  #{term}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}