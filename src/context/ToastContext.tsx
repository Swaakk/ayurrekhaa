import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

/* ── Toast types ── */
interface Toast {
  id: number;
  productName: string;
  productImage: string;
  price: number;
}

interface ToastContextType {
  showToast: (name: string, image: string, price: number) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const showToast = useCallback((productName: string, productImage: string, price: number) => {
    const id = ++idRef.current;
    setToasts(prev => [...prev, { id, productName, productImage, price }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const dismiss = (id: number) =>
    setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast portal — top-right */}
      <div className="fixed top-24 right-4 z-[300] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="pointer-events-auto w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 3.5, ease: 'linear' }}
                className="h-1 bg-primary origin-left"
              />

              <div className="flex items-center gap-4 p-4">
                {/* Product thumb */}
                <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden p-1">
                  <img
                    src={toast.productImage}
                    alt={toast.productName}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-xs font-semibold text-green-600">Added to cart!</span>
                  </div>
                  <p className="text-sm font-bold text-primary line-clamp-1">{toast.productName}</p>
                  <p className="text-xs text-gray-500 mt-0.5">₹{toast.price}</p>
                </div>

                {/* Cart icon */}
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-primary" />
                  </div>
                  <button
                    onClick={() => dismiss(toast.id)}
                    className="text-gray-300 hover:text-gray-500 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
