import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with overlay */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 opacity-10"
      >
        <div
          className="absolute inset-0"
          style={{
            // backgroundImage: 'url("https://images.unsplash.com/photo-1644061923948-f5b918b524c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent z-0" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6"
            >
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider uppercase">GMP Certified</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6"
            >
              Experience the Power of <span className="text-secondary relative">
                Authentic
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10 origin-left"
                />
              </span> Ayurveda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Natural healthcare solutions crafted through research, tradition, and quality manufacturing. Ancient wisdom meets modern wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  Shop Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-lg rounded-full">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-6 border-t border-gray-200"
            >
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">100% Natural</p>
                  <p className="text-sm text-gray-500">Pure Ingredients</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Free Delivery</p>
                  <p className="text-sm text-gray-500">Across India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Certification logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 pt-6"
            >
              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase shrink-0">Certified by</span>
              <div className="flex items-center gap-3">
                {[
                  { src: `${import.meta.env.BASE_URL}cert-licensed.png`, alt: 'Licensed' },
                  { src: `${import.meta.env.BASE_URL}cert-fssai.png`, alt: 'FSSAI' },
                  { src: `${import.meta.env.BASE_URL}cert-gmp.png`, alt: 'GMP' },
                  { src: `${import.meta.env.BASE_URL}cert-iso.jpg`, alt: 'ISO' },
                ].map((cert, i) => (
                  <motion.div
                    key={cert.alt}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + i * 0.1, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.2, y: -4 }}
                    title={cert.alt}
                    className="w-10 h-10 rounded-lg bg-white shadow-md border border-gray-100 flex items-center justify-center p-1.5 cursor-default"
                  >
                    <img src={cert.src} alt={cert.alt} className="w-full h-full object-contain" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
                alt="Ayurvedic Wellness"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                x: { delay: 1, duration: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}
              className="absolute -bottom-8 -left-8 md:-left-16 glass-card p-6 rounded-2xl w-72 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-inner">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Research Driven</p>
                  <p className="text-xs text-gray-500 font-medium">Clinical Formulations</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-secondary"
                  />
                </div>
                <p className="text-xs font-bold text-primary text-right">85% Efficacy Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
