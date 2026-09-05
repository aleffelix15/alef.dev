import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, RefreshCw } from 'lucide-react';

export const VerticeDemo: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [cartCount, setCartCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (step === 0 && !hasInteracted) {
      const timer = setTimeout(() => {
        simulateInteraction();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step, hasInteracted]);

  const simulateInteraction = () => {
    setHasInteracted(true);
    setStep(1); 
    setTimeout(() => {
      setStep(2); 
      setCartCount(1);
      setTimeout(() => reset(), 4000);
    }, 1500);
  };

  const handleManualClick = () => {
    setHasInteracted(true);
    setStep(2);
    setCartCount(prev => prev + 1);
  };

  const reset = () => {
    setHasInteracted(false);
    setStep(0);
    setCartCount(0);
  };

  return (
    <div className="w-full h-full min-h-[350px] max-h-[420px] bg-[#050505] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden relative select-none">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1C1C20] bg-[#0A0A0C]">
        <div className="flex items-center">
          <span className="text-[#F5F5F5] font-display font-semibold text-sm tracking-wider">VÉRTICE</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-[#A1A1AA]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 bg-[#9b4dff] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          {cartCount > 0 && (
            <button onClick={reset} className="text-[#71717A] hover:text-[#F5F5F5] transition-colors">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center bg-[#050505]">
        
        <div className="w-full max-w-sm mb-4 text-center">
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#9b4dff] bg-[#9b4dff]/10 px-2 py-1 rounded-full border border-[#9b4dff]/20">
            Destaque
          </span>
        </div>

        {/* Product Card */}
        <div 
          className="w-full max-w-[200px] group relative rounded-xl border border-[#1C1C20] bg-[#0A0A0C] overflow-hidden transition-all duration-500 hover:border-[#9b4dff]/40 cursor-pointer"
          onMouseEnter={() => { if (!hasInteracted) setStep(1); }}
          onMouseLeave={() => { if (!hasInteracted) setStep(0); }}
        >
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&q=80" 
              alt="Hoodie Phantom"
              className={`w-full h-full object-cover transition-transform duration-700 ${step >= 1 ? 'scale-105' : 'scale-100'}`}
            />
            
            <span className="absolute top-2 left-2 text-[8px] font-bold uppercase bg-[#9b4dff] text-white px-1.5 py-0.5 rounded-md shadow-lg">
              NOVO
            </span>

            {/* Quick Add */}
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
              onClick={(e) => { e.stopPropagation(); handleManualClick(); }}
              className="absolute bottom-2 right-2 p-2 rounded-lg bg-[#9b4dff] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Details */}
          <div className="p-3 flex flex-col gap-1">
            <h4 className="text-xs font-semibold text-[#E0E0E0] leading-snug">Hoodie — Phantom</h4>
            <div className="flex items-center justify-between mt-0.5">
              <span className="text-[#9b4dff] font-bold text-xs">R$ 419,90</span>
              <div className="flex items-center gap-1 text-[10px] text-[#71717A]">
                <Star className="w-2.5 h-2.5 fill-[#9b4dff] text-[#9b4dff]" />
                5.0
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
