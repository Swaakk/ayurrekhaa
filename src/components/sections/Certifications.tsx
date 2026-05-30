import { motion } from 'framer-motion';

const certifications = [
  {
    src: '/cert-licensed.png',
    alt: 'Licensed',
    label: 'Licensed',
  },
  {
    src: '/cert-fssai.png',
    alt: 'FSSAI Certified',
    label: 'FSSAI Certified',
  },
  {
    src: '/cert-gmp.png',
    alt: 'GMP Quality Certified',
    label: 'GMP Certified',
  },
  {
    src: '/cert-iso.jpg',
    alt: 'ISO 9001:2015 Certified',
    label: 'ISO 9001:2015',
  },
];

export function Certifications() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">
            Quality &amp; Compliance
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2">
            Certified for Your Trust
          </h3>
          <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
            Every Ayurrekha product is manufactured under strict regulatory and quality certifications, ensuring safety you can rely on.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.alt}
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.12, y: -6 }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white shadow-md group-hover:shadow-xl border border-gray-100 flex items-center justify-center p-3 transition-shadow duration-300">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-gray-600 group-hover:text-primary transition-colors text-center leading-tight">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-gray-400 mt-10 tracking-wide"
        >
          All certifications are regularly audited and renewed to maintain the highest standards.
        </motion.p>
      </div>
    </section>
  );
}
