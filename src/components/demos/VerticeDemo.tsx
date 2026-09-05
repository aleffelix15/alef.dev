import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingCart, ArrowRight, Heart, ShoppingBag } from 'lucide-react';

export const VerticeDemo: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        setCartCount(1);
        setHasInteracted(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCartCount(prev => prev + 1);
    setHasInteracted(true);
  };

  const products = [
    { id: 1, name: "Oversized Tee â€” Void", category: "Camisetas", price: "R$ 189,90", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&q=80" },
    { id: 2, name: "Cargo Jogger â€” Stealth", category: "CalÃ§as", price: "R$ 329,90", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop&q=80" },
    { id: 3, name: "Hoodie â€” Phantom", category: "Agasalhos", price: "R$ 419,90", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&q=80" },
    { id: 4, name: "Cap â€” Signal", category: "AcessÃ³rios", price: "R$ 129,90", image: "/vertice/cap-signal.jpg" },
  ];

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[350px] max-h-[360px] md:max-h-[420px] bg-[#050505] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden relative select-none font-sans">
      
      {/* Navbar */}
      <div className="flex flex-shrink-0 items-center justify-between px-4 sm:px-6 py-3 border-b border-[#1C1C20] bg-[#0A0A0C] z-10">
        <div className="flex items-center gap-8">
          <span className="text-[#F5F5F5] font-display font-bold text-sm tracking-widest uppercase">VÃ‰RTICE</span>
          <div className="hidden md:flex items-center gap-5 text-[11px] text-[#A1A1AA] font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">Categorias</span>
            <span className="hover:text-white cursor-pointer transition-colors text-white">Novidades</span>
            <span className="hover:text-white cursor-pointer transition-colors">PromoÃ§Ãµes</span>
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-5">
          <div className="hidden md:flex items-center bg-[#151518] border border-[#2A2A30] rounded-md px-3 py-1.5 w-48 transition-colors focus-within:border-[#9b4dff]/50">
            <Search className="w-3.5 h-3.5 text-[#71717A] mr-2" />
            <span className="text-[#71717A] text-[11px]">Buscar produtos...</span>
          </div>
          <User className="w-4 h-4 text-[#A1A1AA] hover:text-white cursor-pointer transition-colors hidden sm:block" />
          <div className="relative cursor-pointer group" onClick={() => setCartCount(prev => prev > 0 ? 0 : 1)}>
            <ShoppingCart className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1.5 -right-2 bg-[#9b4dff] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(155,77,255,0.4)]"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#2A2A30] [&::-webkit-scrollbar-thumb]:rounded-full">
        
        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pt-4 pb-0">
          <div className="flex items-center bg-[#151518] border border-[#2A2A30] rounded-md px-3 py-2 w-full transition-colors focus-within:border-[#9b4dff]/50">
            <Search className="w-3.5 h-3.5 text-[#71717A] mr-2" />
            <span className="text-[#71717A] text-[11px]">Buscar produtos...</span>
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col gap-6 md:gap-8">
          
          {/* Hero Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-40 sm:h-48 rounded-xl relative overflow-hidden group cursor-pointer border border-[#1C1C20]"
          >
            <img 
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&h=400&fit=crop&q=80" 
              alt="ColeÃ§Ã£o Inverno"
              className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/50 to-transparent" />
            
            <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-center max-w-[280px] sm:max-w-sm">
              <span className="text-[10px] sm:text-[11px] uppercase font-medium tracking-wider text-[#A1A1AA] mb-2">
                ColeÃ§Ã£o Exclusiva
              </span>
              <h2 className="text-lg sm:text-2xl font-bold text-[#F5F5F5] leading-tight mb-4 font-display">
                O Ãpice do Estilo em Qualquer Momento
              </h2>
              <button className="bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[11px] font-semibold py-2 px-4 rounded-md w-fit flex items-center gap-2 transition-colors">
                Ver coleÃ§Ã£o <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Destaques Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#F5F5F5]">Destaques para vocÃª</h3>
              <span className="text-[11px] text-[#9b4dff] hover:text-[#8a44e5] cursor-pointer font-medium transition-colors">Ver todos</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pb-4">
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col gap-2.5 group cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#151518] border border-[#1C1C20] group-hover:border-[#9b4dff]/40 transition-colors">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 400 500'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Cpath d='M200 210L160 240V280L200 310L240 280V240L200 210Z' fill='%23151518'/%3E%3C/svg%3E";
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Favorite btn */}
                    <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all">
                      <Heart className="w-3.5 h-3.5" />
                    </button>

                    {/* Quick Add Overlay */}
                    <AnimatePresence>
                      {hoveredProduct === product.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-x-2 bottom-2"
                        >
                          <button 
                            onClick={handleAddToCart}
                            className="w-full bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[11px] font-semibold py-2 rounded-md shadow-lg transition-colors flex items-center justify-center gap-1.5"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" /> Adicionar
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-[12px] font-semibold text-[#E0E0E0] truncate">{product.name}</h4>
                    <span className="text-[10px] text-[#71717A]">{product.category}</span>
                    <span className="text-[12px] font-bold text-[#F5F5F5] mt-0.5">{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};


