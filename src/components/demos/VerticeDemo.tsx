import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, User, ShoppingCart, ArrowRight, Heart, ShoppingBag, X } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  tag: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Oversized Tee — Void", category: "Camisetas", price: "R$ 189,90", tag: "Novidades", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&q=80" },
  { id: 2, name: "Cargo Jogger — Stealth", category: "Calças", price: "R$ 329,90", tag: "Novidades", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop&q=80" },
  { id: 3, name: "Hoodie — Phantom", category: "Agasalhos", price: "R$ 419,90", tag: "Promoções", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&q=80" },
  { id: 4, name: "Cap — Signal", category: "Acessórios", price: "R$ 129,90", tag: "Categorias", image: "/vertice/cap-signal.jpg" },
];

export const VerticeDemo: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Novidades');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCartCount(prev => prev + 1);
  };

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'Categorias' ? true : p.tag === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="vertice-demo w-full h-full min-h-[300px] max-h-[420px] bg-[#050505] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden relative select-none font-sans">
      
      {/* Navbar */}
      <div className="vertice-demo__nav flex flex-shrink-0 items-center justify-between border-b border-[#1C1C20] bg-[#0A0A0C] z-10 px-3 py-2">
        <div className="vertice-demo__nav-left flex items-center gap-4">
          <span className="text-[#F5F5F5] font-display font-bold text-sm tracking-widest uppercase">VÉRTICE</span>
          <div className="vertice-demo__categories hidden sm:flex items-center gap-3 text-[11px] text-[#A1A1AA] font-medium">
            {['Categorias', 'Novidades', 'Promoções'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative cursor-pointer transition-colors focus:outline-none ${activeTab === tab ? 'text-white' : 'hover:text-white'}`}
              >
                {tab}
                {activeTab === tab && <motion.span layoutId="vertice-tab" className="absolute -bottom-1 left-0 right-0 h-px bg-[#9b4dff]" transition={{ duration: shouldReduceMotion ? 0 : 0.2 }} />}
              </button>
            ))}
          </div>
        </div>

        <div className="vertice-demo__actions flex items-center gap-3">
          <div className="vertice-demo__desktop-search hidden sm:flex items-center bg-[#151518] border border-[#2A2A30] rounded-md px-2 py-1.5 w-40 transition-colors focus-within:border-[#9b4dff]/50">
            <Search className="w-3.5 h-3.5 text-[#71717A] mr-1.5" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[11px] text-[#F5F5F5] w-full outline-none placeholder-[#71717A]"
              aria-label="Buscar produtos"
            />
          </div>
          <User className="vertice-demo__user w-4 h-4 text-[#A1A1AA] hover:text-white cursor-pointer transition-colors" aria-label="Perfil" />
          <div className="relative cursor-pointer group" onClick={(e) => e.stopPropagation()}>
            <ShoppingCart className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" aria-label="Carrinho" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
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
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#2A2A30] [&::-webkit-scrollbar-thumb]:rounded-full">
        
        {/* Mobile Search Bar */}
        <div className="vertice-demo__mobile-search sm:hidden mb-4">
          <div className="flex items-center bg-[#151518] border border-[#2A2A30] rounded-md px-3 py-2 w-full transition-colors focus-within:border-[#9b4dff]/50">
            <Search className="w-3.5 h-3.5 text-[#71717A] mr-2" />
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[11px] text-[#F5F5F5] w-full outline-none placeholder-[#71717A]"
              aria-label="Buscar produtos"
            />
          </div>
          <div className="flex gap-3 mt-3 text-[11px] text-[#A1A1AA] font-medium overflow-x-auto">
            {['Categorias', 'Novidades', 'Promoções'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative cursor-pointer whitespace-nowrap transition-colors focus:outline-none ${activeTab === tab ? 'text-white' : 'hover:text-white'}`}
              >
                {tab}
                {activeTab === tab && <motion.span layoutId="vertice-mobile-tab" className="absolute -bottom-1 left-0 right-0 h-px bg-[#9b4dff]" transition={{ duration: shouldReduceMotion ? 0 : 0.2 }} />}
              </button>
            ))}
          </div>
        </div>

        <div className="vertice-demo__content flex flex-col gap-6">
          
          {/* Hero Banner */}
          {!searchQuery && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="vertice-demo__hero w-full h-32 rounded-xl relative overflow-hidden group cursor-pointer border border-[#1C1C20]"
            >
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&h=400&fit=crop&q=80" 
                alt="Coleção Inverno VÉRTICE"
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/50 to-transparent" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-center">
                <span className="text-[9px] uppercase font-medium tracking-wider text-[#A1A1AA] mb-1">Coleção Exclusiva</span>
                <h2 className="text-lg font-bold text-[#F5F5F5] leading-tight mb-3 font-display">O Ápice do Estilo</h2>
                <button className="bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[10px] font-semibold py-1.5 px-3 rounded-md w-fit flex items-center gap-1.5 transition-colors">
                  Ver coleção <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Products List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-[#F5F5F5]">
              {searchQuery ? `Resultados para "${searchQuery}"` : activeTab}
            </h3>

            <div className="grid grid-cols-2 gap-3 pb-4">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col gap-2 group cursor-pointer"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#151518] border border-[#1C1C20] group-hover:border-[#9b4dff]/40 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <motion.button
                        onClick={(e) => toggleFavorite(e, product.id)}
                        whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
                        animate={{ scale: favorites.includes(product.id) ? 1.08 : 1 }}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#9b4dff]"
                        aria-label={favorites.includes(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                      >
                        <Heart className={`w-3 h-3 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {hoveredProduct === product.id && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute inset-x-2 bottom-2"
                          >
                            <button 
                              onClick={handleAddToCart}
                              aria-label="Adicionar ao carrinho"
                              className="w-full bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[10px] font-semibold py-1.5 rounded shadow-lg transition-colors flex items-center justify-center gap-1.5"
                            >
                              <ShoppingBag className="w-3 h-3" /> Adicionar
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-[11px] font-semibold text-[#E0E0E0] truncate">{product.name}</h4>
                      <span className="text-[9px] text-[#71717A]">{product.category}</span>
                      <span className="text-[11px] font-bold text-[#F5F5F5]">{product.price}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredProducts.length === 0 && (
                <div className="col-span-2 text-center py-8 text-[#71717A] text-[11px]">
                  Nenhum produto encontrado.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0A0A0C] border border-[#1C1C20] rounded-xl w-full max-w-sm overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Fechar detalhes do produto"
                  className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white focus:outline-none"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div>
                  <h3 className="text-sm font-bold text-[#F5F5F5]">{selectedProduct.name}</h3>
                  <span className="text-[10px] text-[#71717A]">{selectedProduct.category}</span>
                </div>
                <p className="text-[10px] text-[#A1A1AA] leading-relaxed">
                  Peça exclusiva da nova coleção. Design moderno e materiais de alta qualidade para o máximo conforto no dia a dia.
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1C1C20]">
                  <span className="font-bold text-[#F5F5F5]">{selectedProduct.price}</span>
                  <button 
                    onClick={(e) => { handleAddToCart(e); setSelectedProduct(null); }}
                    aria-label="Adicionar à sacola"
                    className="bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[10px] font-semibold py-1.5 px-3 rounded shadow transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#9b4dff]"
                  >
                    <ShoppingBag className="w-3 h-3" /> Por na sacola
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
