import { Shield, Award, Leaf, CheckCircle2, Truck, TestTube } from 'lucide-react';
import { motion } from 'framer-motion';

const trustBadges = [
  { icon: Shield, title: 'GMP Certified' },
  { icon: Award, title: 'ISO Certified' },
  { icon: Leaf, title: '100% Natural' },
  { icon: CheckCircle2, title: 'Cruelty Free' },
  { icon: Truck, title: 'Free Delivery' },
  { icon: TestTube, title: 'Research Driven' },
  { icon: Shield, title: 'GMP Certified' },
  { icon: Award, title: 'ISO Certified' },
  { icon: Leaf, title: '100% Natural' },
  { icon: CheckCircle2, title: 'Cruelty Free' },
  { icon: Truck, title: 'Free Delivery' },
  { icon: TestTube, title: 'Research Driven' },
];

export function Trust() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-0 w-max"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-10 py-4 group shrink-0"
              >
                <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-gray-700 whitespace-nowrap text-sm tracking-wide">{badge.title}</span>
                <span className="text-gray-300 ml-6 text-lg">✦</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
