import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';

// Mock user data - in a real app, this would come from your auth system
const mockUser = {
  name: 'CryptoUser',
  email: 'user@example.com',
  joinDate: 'January 15, 2025',
  orders: [
    { id: 'ORD-1234', date: 'March 25, 2025', status: 'Delivered', total: '$35.99' },
    { id: 'ORD-1122', date: 'February 12, 2025', status: 'Shipped', total: '$29.99' }
  ],
  wishlist: [
    { id: '1', title: 'PEPE PUMP', handle: 'pepe-pump', image: 'https://placehold.co/600x400/22c55e/ffffff?text=PEPE+PUMP', price: '$35.99' },
    { id: '2', title: 'MOON SOON', handle: 'moon-soon', image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=MOON+SOON', price: '$29.99' }
  ]
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const user = mockUser; // In a real app, you would fetch this data from your backend/Shopify

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
          My Account
        </h1>

        {/* Account navigation tabs */}
        <div className="flex overflow-x-auto mb-8 pb-2">
          {['overview', 'orders', 'wishlist', 'settings'].map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 mx-1 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  : 'bg-[#1c1c2e] text-gray-300 hover:text-white transition-colors'
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar with user info - visible on all tabs */}
          <div className="md:col-span-1">
            <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44] card-glow">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                  {user.name.charAt(0)}
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-400 text-sm">{user.email}</p>
                <p className="text-gray-400 text-sm mt-1">Member since {user.joinDate}</p>
              </div>

              <div className="space-y-4">
                <motion.button 
                  className="w-full bg-[#1c1c2e] hover:bg-[#252538] text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors text-left"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 8px rgba(168,85,247,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Edit Profile
                </motion.button>
                
                <motion.button 
                  className="w-full bg-[#1c1c2e] hover:bg-[#252538] text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors text-left"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 8px rgba(168,85,247,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Change Password
                </motion.button>
                
                <motion.button 
                  className="w-full bg-red-900/20 hover:bg-red-900/30 text-red-400 py-2 px-4 rounded-lg font-medium text-sm transition-colors text-left"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 8px rgba(220,38,38,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Out
                </motion.button>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44] card-glow mt-6">
              <h3 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                Your Stats
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]">
                  <div className="text-xs text-gray-400">Orders</div>
                  <div className="text-lg font-bold text-white">{user.orders.length}</div>
                </div>
                
                <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]">
                  <div className="text-xs text-gray-400">Saved</div>
                  <div className="text-lg font-bold text-white">{user.wishlist.length}</div>
                </div>
                
                <div className="bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44] col-span-2">
                  <div className="text-xs text-gray-400">Member Level</div>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Diamond Hand
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="md:col-span-2">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44] card-glow">
                <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                  Account Overview
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Recent Orders</h4>
                  {user.orders.length > 0 ? (
                    <div className="space-y-4">
                      {user.orders.slice(0, 2).map(order => (
                        <motion.div 
                          key={order.id}
                          className="bg-[#1c1c2e] p-4 rounded-lg border border-[#2c2c44] flex justify-between items-center"
                          whileHover={{ y: -2, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                        >
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-gray-400">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              order.status === 'Delivered' ? 'text-green-400' : 
                              order.status === 'Shipped' ? 'text-blue-400' : 'text-yellow-400'
                            }`}>
                              {order.status}
                            </p>
                            <p className="text-sm">{order.total}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">You haven't placed any orders yet.</p>
                  )}
                  
                  {user.orders.length > 0 && (
                    <Link to="#orders" onClick={() => setActiveTab('orders')}>
                      <motion.button 
                        className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                        whileHover={{ x: 3 }}
                      >
                        View all orders
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </Link>
                  )}
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Saved Items</h4>
                  {user.wishlist.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {user.wishlist.slice(0, 2).map(item => (
                        <motion.div 
                          key={item.id}
                          className="bg-[#1c1c2e] rounded-lg overflow-hidden flex flex-col"
                          whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-3">
                            <h5 className="font-medium">{item.title}</h5>
                            <div className="flex justify-between items-center mt-2">
                              <p className="text-purple-400">{item.price}</p>
                              <Link to={`/products/${item.handle}`}>
                                <motion.button 
                                  className="text-xs bg-purple-600/80 hover:bg-purple-600 text-white px-2 py-1 rounded transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  View
                                </motion.button>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">You haven't saved any items yet.</p>
                  )}
                  
                  {user.wishlist.length > 0 && (
                    <Link to="#wishlist" onClick={() => setActiveTab('wishlist')}>
                      <motion.button 
                        className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                        whileHover={{ x: 3 }}
                      >
                        View all saved items
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44] card-glow">
                <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                  Order History
                </h3>
                
                {user.orders.length > 0 ? (
                  <div className="space-y-4">
                    {user.orders.map(order => (
                      <motion.div 
                        key={order.id}
                        className="bg-[#1c1c2e] p-4 rounded-lg border border-[#2c2c44]"
                        whileHover={{ scale: 1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-gray-400">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${
                              order.status === 'Delivered' ? 'text-green-400' : 
                              order.status === 'Shipped' ? 'text-blue-400' : 'text-yellow-400'
                            }`}>
                              {order.status}
                            </p>
                            <p className="text-sm">{order.total}</p>
                          </div>
                        </div>
                        
                        {/* Order actions */}
                        <div className="flex justify-end mt-4 space-x-3">
                          <motion.button 
                            className="text-xs bg-[#252538] hover:bg-[#32324d] text-white px-3 py-1.5 rounded-full transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Track Order
                          </motion.button>
                          
                          <motion.button 
                            className="text-xs bg-[#252538] hover:bg-[#32324d] text-white px-3 py-1.5 rounded-full transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Details
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">You haven't placed any orders yet.</p>
                    <Link to="/trending">
                      <motion.button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium text-sm"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168,85,247,0.5)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Shop Trending Shirts
                      </motion.button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44] card-glow">
                <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                  Saved Items
                </h3>
                
                {user.wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {user.wishlist.map(item => (
                      <motion.div 
                        key={item.id}
                        className="bg-[#1c1c2e] rounded-lg overflow-hidden relative group"
                        whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                      >
                        <Link to={`/products/${item.handle}`}>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover"
                          />
                        </Link>
                        
                        {/* Remove from wishlist button */}
                        <button 
                          className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        
                        <div className="p-4">
                          <Link to={`/products/${item.handle}`}>
                            <h5 className="font-medium text-lg">{item.title}</h5>
                          </Link>
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-purple-400 font-bold">{item.price}</p>
                            <motion.button 
                              className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white py-1.5 px-4 rounded-lg text-sm font-medium"
                              whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)' }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Add to Cart
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">You haven't saved any items yet.</p>
                    <Link to="/trending">
                      <motion.button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium text-sm"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168,85,247,0.5)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore Trending Shirts
                      </motion.button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-[#151522] p-6 rounded-xl border border-[#2c2c44] card-glow">
                <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
                  Account Settings
                </h3>
                
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-[#1c1c2e] p-5 rounded-lg border border-[#2c2c44]">
                    <h4 className="font-medium mb-4">Personal Information</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Display Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-[#252538] border border-[#3d3d5c] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                          value={user.name}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-[#252538] border border-[#3d3d5c] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                          value={user.email}
                        />
                      </div>
                    </div>
                    
                    <motion.button 
                      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(168,85,247,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Save Changes
                    </motion.button>
                  </div>
                  
                  {/* Change Password */}
                  <div className="bg-[#1c1c2e] p-5 rounded-lg border border-[#2c2c44]">
                    <h4 className="font-medium mb-4">Change Password</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Current Password</label>
                        <input 
                          type="password" 
                          className="w-full bg-[#252538] border border-[#3d3d5c] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">New Password</label>
                        <input 
                          type="password" 
                          className="w-full bg-[#252538] border border-[#3d3d5c] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full bg-[#252538] border border-[#3d3d5c] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    
                    <motion.button 
                      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(168,85,247,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Update Password
                    </motion.button>
                  </div>
                  
                  {/* Notification Preferences */}
                  <div className="bg-[#1c1c2e] p-5 rounded-lg border border-[#2c2c44]">
                    <h4 className="font-medium mb-4">Notification Preferences</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Email Notifications</label>
                        <div className="relative inline-block w-12 h-6 rounded-full transition-colors bg-[#252538]">
                          <input 
                            type="checkbox" 
                            className="sr-only"
                            defaultChecked
                          />
                          <span className="block absolute left-1 top-1 w-4 h-4 rounded-full bg-purple-500 transition-transform transform"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="text-sm">New Product Alerts</label>
                        <div className="relative inline-block w-12 h-6 rounded-full transition-colors bg-[#252538]">
                          <input 
                            type="checkbox" 
                            className="sr-only"
                            defaultChecked
                          />
                          <span className="block absolute left-1 top-1 w-4 h-4 rounded-full bg-purple-500 transition-transform transform"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Price Drop Alerts</label>
                        <div className="relative inline-block w-12 h-6 rounded-full transition-colors bg-[#252538]">
                          <input 
                            type="checkbox" 
                            className="sr-only"
                            defaultChecked
                          />
                          <span className="block absolute left-1 top-1 w-4 h-4 rounded-full bg-purple-500 transition-transform transform"></span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(168,85,247,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Save Preferences
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}