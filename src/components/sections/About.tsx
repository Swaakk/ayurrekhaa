import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Leaf, Award, Users, HeartPulse } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: HeartPulse, value: '50+', label: 'Formulations' },
  { icon: Users, value: '1M+', label: 'Happy Customers' },
  { icon: Leaf, value: '100%', label: 'Natural Ingredients' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                style={{ y: y2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://plus.unsplash.com/premium_photo-1732319199786-33a2eaed7b7c?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ayurvedic Herbs"
                className="rounded-2xl rounded-tr-[4rem] w-full h-64 object-cover shadow-lg"
              />
              <motion.img
                style={{ y: y1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
                alt="Ayurvedic Treatment"
                className="rounded-2xl rounded-bl-[4rem] w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
            {/* Floating Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-secondary/20"
            >
              <Leaf className="w-12 h-12 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Heritage</motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              A Legacy of Healing & Wellness
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ayurrekha represents the perfect synthesis of ancient Ayurvedic wisdom and modern scientific validation. For over two decades, we have been dedicated to formulating premium healthcare solutions that promote holistic well-being.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our GMP-certified manufacturing facilities ensure that every product meets the highest standards of purity, efficacy, and safety.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div variants={itemVariants} key={stat.label} className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
