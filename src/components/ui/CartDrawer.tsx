import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[201] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary">Your Cart</h2>
                  <p className="text-xs text-gray-400">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-4"
                    >
                      <Leaf className="w-10 h-10 text-primary/30" />
                    </motion.div>
                    <p className="text-gray-400 font-medium">Your cart is empty</p>
                    <p className="text-gray-300 text-sm mt-1">Add some Ayurvedic goodness!</p>
                    <Button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 bg-primary text-white rounded-full px-6"
                    >
                      Browse Products
                    </Button>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.name}
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-contain rounded-xl bg-white border border-gray-100 p-1 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-primary text-sm leading-snug line-clamp-2">{item.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-base font-bold text-primary">₹{item.price}</span>
                            <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity stepper */}
                            <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 px-1 py-0.5">
                              <motion.button
                                whileTap={{ scale: 0.8 }}
                                onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </motion.button>
                              <motion.span
                                key={item.quantity}
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-6 text-center text-sm font-bold text-primary"
                              >
                                {item.quantity}
                              </motion.span>
                              <motion.button
                                whileTap={{ scale: 0.8 }}
                                onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </motion.button>
                            </div>

                            {/* Subtotal + Delete */}
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-gray-600">
                                ₹{item.price * item.quantity}
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                                onClick={() => removeFromCart(item.name)}
                                className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-100 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <AnimatePresence>
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="border-t border-gray-100 px-6 py-5 bg-white"
                >
                  {/* Order summary */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal ({totalItems} items)</span>
                      <span className="font-medium text-gray-700">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Delivery</span>
                      <span className="text-green-600 font-medium">FREE</span>
                    </div>
                    <div className="h-px bg-gray-100 my-2" />
                    <div className="flex justify-between font-bold text-primary text-lg">
                      <span>Total</span>
                      <motion.span
                        key={totalPrice}
                        initial={{ scale: 1.1, color: '#C8A951' }}
                        animate={{ scale: 1, color: '#0F5132' }}
                        transition={{ duration: 0.3 }}
                      >
                        ₹{totalPrice}
                      </motion.span>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl text-base font-semibold shadow-lg shadow-primary/20">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>

                  <button
                    onClick={clearCart}
                    className="w-full text-center text-xs text-gray-400 hover:text-red-400 mt-3 transition-colors"
                  >
                    Clear cart
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
