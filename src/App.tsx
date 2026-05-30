import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Trust } from '@/components/sections/Trust';
import { About } from '@/components/sections/About';
import { Categories } from '@/components/sections/Categories';
import { Products } from '@/components/sections/Products';
import { Manufacturing } from '@/components/sections/Manufacturing';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { FloatingConsultation } from '@/components/ui/FloatingConsultation';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/context/ToastContext';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

function AppInner() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Leaf className="w-16 h-16 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-2xl font-bold text-primary tracking-widest uppercase"
          >
            Ayurrekha
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-2 text-sm text-secondary tracking-widest uppercase"
          >
            Ancient Wisdom. Modern Wellness.
          </motion.p>
          <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-secondary"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-screen bg-background font-sans text-foreground"
        >
          {/* Scroll progress bar — gradient green → gold */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-primary origin-left z-[100]"
            style={{ scaleX }}
          />

          <Navbar />

          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <Hero />
            <Trust />
            <About />
            <Certifications />
            <Categories />
            <Products />
            <Manufacturing />
            <Contact />
          </motion.main>

          <Footer />
          <FloatingConsultation />
          <CartDrawer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
