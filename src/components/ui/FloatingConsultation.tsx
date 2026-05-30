import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const options = [
  { icon: Phone, label: 'Call Us', color: 'bg-green-500', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email Us', color: 'bg-blue-500', href: 'mailto:info@ayurrekha.com' },
];

export function FloatingConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      if (window.scrollY <= 300) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.12 },
    tap: { scale: 0.92 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Sub-options */}
          <AnimatePresence>
            {isOpen && (
              <>
                {options.map((opt, i) => {
                  const Icon = opt.icon;
                  return (
                    <motion.a
                      key={opt.label}
                      href={opt.href}
                      initial={{ opacity: 0, x: 30, scale: 0.7 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 30, scale: 0.7 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 22,
                        delay: i * 0.07,
                      }}
                      className="flex items-center gap-3 group"
                    >
                      <span className="bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                        {opt.label}
                      </span>
                      <motion.div
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        className={`w-12 h-12 ${opt.color} text-white rounded-full flex items-center justify-center shadow-xl`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <div className="relative">
            {/* Pulse ring */}
            {!isOpen && (
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-primary/40"
              />
            )}

            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/30"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>

              {!isOpen && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-pulse" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
