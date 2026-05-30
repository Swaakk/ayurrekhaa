import { motion } from 'framer-motion';
import { Microscope, Factory, ShieldCheck, Beaker } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const facilities = [
  {
    icon: Factory,
    title: 'GMP Certified Facilities',
    description: 'State-of-the-art manufacturing units adhering to strict GMP guidelines.'
  },
  {
    icon: Microscope,
    title: 'Quality Control Labs',
    description: 'Advanced testing laboratories ensuring purity and potency.'
  },
  {
    icon: Beaker,
    title: 'R&D Center',
    description: 'Dedicated research team developing innovative Ayurvedic formulations.'
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Compliance',
    description: 'Meeting all national and international quality standards.'
  }
];

export function Manufacturing() {
  return (
    <section id="manufacturing" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-20 z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Manufacturing Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">World-Class Pharmaceutical Standards</h3>
          <p className="text-primary-foreground/80 text-lg">
            Our commitment to quality begins at the source and continues through our advanced manufacturing processes. We blend traditional Ayurvedic wisdom with modern pharmaceutical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-md h-full hover:bg-white/15 transition-colors cursor-default">
                  <CardContent className="p-6">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6"
                    >
                      <Icon className="w-7 h-7 text-secondary" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-3 text-white">{facility.title}</h4>
                    <p className="text-primary-foreground/70">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Contract Manufacturing Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 bottom-0 opacity-5 pointer-events-none origin-center translate-x-1/4 translate-y-1/4"
          >
            <Factory className="w-96 h-96 text-primary" />
          </motion.div>
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold text-primary mb-4">Contract Manufacturing Services</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Partner with Ayurrekha for premium B2B manufacturing solutions. We offer private label, third-party manufacturing, and bespoke product development services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold">
                Partner With Us
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
