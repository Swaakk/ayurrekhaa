import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    title: 'Healthcare',
    description: 'Immunity Support, Wellness Supplements, Ayurvedic Tablets',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
    icon: '🌿'
  },
  {
    title: 'Beauty Care',
    description: 'Hair Oils, Herbal Hair Dye, Skin Care, Beard Care',
    image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=800&auto=format&fit=crop',
    icon: '✨'
  },
  {
    title: 'Baby Care',
    description: 'Nutritional Supplements, Herbal Baby Wellness',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
    icon: '👶'
  }
];

export function Categories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Wellness Collections</h3>
          <p className="text-gray-600">Discover our range of meticulously crafted Ayurvedic solutions for your entire family's holistic well-being.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="group overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                </div>
                <CardContent className="p-8 bg-white relative z-20">
                  <h4 className="text-2xl font-bold text-primary mb-3">{category.title}</h4>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <button className="text-secondary font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                    Explore Range <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
