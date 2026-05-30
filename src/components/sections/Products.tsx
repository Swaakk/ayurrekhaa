import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ShoppingCart, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

const products = [
  {
    name: 'A to Z Ayurveda Tablet',
    description: 'Complete daily wellness and immunity support',
    price: 499,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop',
    badge: 'Bestseller'
  },
  {
    name: 'Fat Plus Tablet',
    description: 'Natural weight management formulation',
    price: 699,
    originalPrice: 850,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'VedaBringa Hair Oil',
    description: 'Intensive hair growth and care therapy',
    price: 349,
    originalPrice: 450,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop',
    badge: 'New'
  },
  {
    name: 'Kadambari Hair Dye',
    description: '100% herbal hair color and nourishment',
    price: 299,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Meltone Tablet',
    description: 'Stress relief and cognitive support',
    price: 549,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Nutrinuts',
    description: 'Ayurvedic nutritional supplement for kids',
    price: 450,
    originalPrice: 550,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'DrPlus Tablet',
    description: 'Advanced joint and muscle care',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Beard Gee',
    description: 'Premium beard growth and styling oil',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
  }
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addToCart, items } = useCart();
  const { showToast } = useToast();
  const [justAdded, setJustAdded] = useState(false);
  const [wished, setWished] = useState(false);

  const cartItem = items.find(i => i.name === product.name);
  const qty = cartItem?.quantity ?? 0;

  function handleAddToCart() {
    addToCart({
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    });
    showToast(product.name, product.image, product.price);
    
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <Card className="group h-full border border-gray-100 hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white">
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        {product.badge && (
          <Badge className="absolute top-4 left-4 z-10 bg-secondary hover:bg-secondary/90 text-white border-0 shadow-sm">
            {product.badge}
          </Badge>
        )}

        {/* Wishlist */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => setWished(w => !w)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm transition-all opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={wished ? 'filled' : 'empty'}
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 30 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${wished ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
              />
            </motion.div>
          </AnimatePresence>
        </motion.button>

        <motion.img
          whileHover={{ scale: 1.12, rotate: 4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply"
        />

        {/* Cart quantity badge on image */}
        <AnimatePresence>
          {qty > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
            >
              {qty} in cart
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CardContent className="p-5">
        <h4 className="font-bold text-base text-primary mb-1 line-clamp-1">{product.name}</h4>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">₹{product.price}</span>
            <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
          </div>

          {/* Add to cart button with feedback */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.88 }}
            onClick={handleAddToCart}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-md overflow-hidden transition-colors ${justAdded
              ? 'bg-green-500'
              : 'bg-primary hover:bg-secondary'
              } text-white`}
          >
            <AnimatePresence mode="wait">
              {justAdded ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="cart"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <ShoppingCart className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ripple burst on add */}
            <AnimatePresence>
              {justAdded && (
                <motion.span
                  initial={{ scale: 0.5, opacity: 0.7 }}
                  animate={{ scale: 3, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-full bg-green-400"
                />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </CardContent>
    </Card>
  );
}

export function Products() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Featured Collection</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Premium Formulations</h3>
            <p className="text-gray-600">Explore our most loved Ayurvedic products, crafted with precision and care for your well-being.</p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            View All Products
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.name} variants={itemVariants} whileHover={{ y: -10 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
