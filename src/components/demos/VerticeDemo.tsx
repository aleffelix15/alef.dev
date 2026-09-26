import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, User, ShoppingCart, ArrowRight, Heart, ShoppingBag, X, Star, Minus, Plus, Trash2 } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  tag: string;
  image: string;
  rating: number;
  reviewCount: number;
};

const products: Product[] = [
  { id: 1, name: "Oversized Tee — Void", category: "Camisetas", price: "R$ 189,90", tag: "Novidades", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&q=80", rating: 4.8, reviewCount: 124 },
  { id: 2, name: "Cargo Jogger — Stealth", category: "Calças", price: "R$ 329,90", tag: "Novidades", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop&q=80", rating: 4.5, reviewCount: 89 },
  { id: 3, name: "Hoodie — Phantom", category: "Agasalhos", price: "R$ 419,90", tag: "Promoções", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&q=80", rating: 4.9, reviewCount: 210 },
  { id: 4, name: "Cap — Signal", category: "Acessórios", price: "R$ 129,90", tag: "Categorias", image: "/vertice/cap-signal.webp", rating: 4.2, reviewCount: 45 },
  { id: 5, name: "T-Shirt — Basic", category: "Camisetas", price: "R$ 149,90", tag: "Categorias", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop&q=80", rating: 4.6, reviewCount: 156 },
  { id: 6, name: "Jacket — Urban", category: "Agasalhos", price: "R$ 549,90", tag: "Novidades", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop&q=80", rating: 4.7, reviewCount: 67 },
  { id: 7, name: "Sneakers — Velocity", category: "Calçados", price: "R$ 699,90", tag: "Promoções", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop&q=80", rating: 4.9, reviewCount: 342 },
  { id: 8, name: "Beanie — Core", category: "Acessórios", price: "R$ 89,90", tag: "Categorias", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop&q=80", rating: 4.3, reviewCount: 28 },
  { id: 9, name: "Shorts — Motion", category: "Calças", price: "R$ 199,90", tag: "Categorias", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop&q=80", rating: 4.4, reviewCount: 92 },
  { id: 10, name: "Socks — Essential", category: "Acessórios", price: "R$ 49,90", tag: "Promoções", image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=500&h=600&fit=crop&q=80", rating: 4.8, reviewCount: 415 }
];

const parsePrice = (price: string) => parseFloat(price.replace('R$ ', '').replace(',', '.'));

export const VerticeDemo: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ product: Product; qty: number; size: string }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Novidades');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState('Relevância');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showLoginPlaceholder, setShowLoginPlaceholder] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const cartSubtotal = cartItems.reduce((acc, item) => {
    const priceNum = parsePrice(item.product.price);
    return acc + (priceNum * item.qty);
  }, 0);

  const handleAddToCart = (e: React.MouseEvent, product: Product, size: string) => {
    e.stopPropagation();
    if (!size) return;
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id && item.size === size);
      if (existingItem) {
        return prev.map(item => 
          (item.product.id === product.id && item.size === size) 
            ? { ...item, qty: item.qty + 1 } 
            : item
        );
      }
      return [...prev, { product, qty: 1, size }];
    });
  };

  const updateCartItemQty = (productId: number, size: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === productId && item.size === size) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      });
    });
  };

  const removeCartItem = (productId: number, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'Categorias' ? (activeCategory ? p.category === activeCategory : true) : activeTab === 'Favoritos' ? favorites.includes(p.id) : p.tag === activeTab;
      return matchesSearch && matchesTab;
    });

    if (sortOrder === 'Menor preço') {
      filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'Maior preço') {
      filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return filtered;
  }, [searchQuery, activeTab, sortOrder, favorites, activeCategory]);

  return (
    <div className="vertice-demo w-full h-full min-h-[300px] max-h-[420px] bg-[#050505] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden relative select-none font-sans">
      
      {/* Navbar */}
      <div className="vertice-demo__nav flex flex-shrink-0 items-center justify-between border-b border-[#1C1C20] bg-[#0A0A0C] z-10 px-3 py-2">
        <div className="vertice-demo__nav-left flex items-center gap-4">
          <span className="text-[#F5F5F5] font-display font-bold text-sm tracking-widest uppercase">VÉRTICE</span>
          <div className="vertice-demo__categories hidden sm:flex items-center gap-3 text-[11px] text-[#A1A1AA] font-medium">
            {['Categorias', 'Novidades', 'Promoções', 'Favoritos'].map(tab => (
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
          <div className="relative">
            <User 
              className="vertice-demo__user w-4 h-4 text-[#A1A1AA] hover:text-white cursor-pointer transition-colors" 
              aria-label="Perfil" 
              role="button"
              tabIndex={0}
              onClick={() => {
                setShowLoginPlaceholder(true);
                setTimeout(() => setShowLoginPlaceholder(false), 2000);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setShowLoginPlaceholder(true);
                  setTimeout(() => setShowLoginPlaceholder(false), 2000);
                }
              }}
            />
            <AnimatePresence>
              {showLoginPlaceholder && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full right-0 mt-2 bg-[#151518] border border-[#2A2A30] text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50"
                >
                  Login em breve
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative cursor-pointer group" onClick={(e) => { e.stopPropagation(); setIsCartOpen(true); }}>
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
            {['Categorias', 'Novidades', 'Promoções', 'Favoritos'].map(tab => (
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
          {!searchQuery && activeTab !== 'Favoritos' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="vertice-demo__hero w-full h-32 rounded-xl relative overflow-hidden group cursor-pointer border border-[#1C1C20]"
            >
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&h=400&fit=crop&q=80" 
                alt="Coleção Inverno VÉRTICE"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/50 to-transparent" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-center">
                <span className="text-[9px] uppercase font-medium tracking-wider text-[#A1A1AA] mb-1">Coleção Exclusiva</span>
                <h2 className="text-lg font-bold text-[#F5F5F5] leading-tight mb-3 font-display">O Ápice do Estilo</h2>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab('Novidades');
                    document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[10px] font-semibold py-1.5 px-3 rounded-md w-fit flex items-center gap-1.5 transition-colors"
                >
                  Ver coleção <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Products List */}
          <div className="flex flex-col gap-3">
            {activeTab === 'Categorias' && (
              <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
                {['Camisetas', 'Calças', 'Agasalhos', 'Acessórios', 'Calçados'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full text-[10px] font-medium transition-colors ${
                      activeCategory === cat ? 'bg-[#9b4dff] text-white' : 'bg-[#151518] text-[#A1A1AA] border border-[#2A2A30] hover:text-white hover:border-[#9b4dff]/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#F5F5F5]">
                {searchQuery ? `Resultados para "${searchQuery}"` : activeTab}
              </h3>
              
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-[#151518] text-[#A1A1AA] text-[10px] border border-[#2A2A30] rounded px-2 py-1 outline-none"
              >
                <option>Relevância</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
              </select>
            </div>

            <div id="products-grid" className="grid grid-cols-2 gap-3 pb-4">
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
                    onClick={() => { setSelectedProduct(product); setSelectedSize(''); }}
                  >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#151518] border border-[#1C1C20] group-hover:border-[#9b4dff]/40 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        loading="lazy"
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
                              onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); setSelectedSize(''); }}
                              aria-label="Ver detalhes"
                              className="w-full bg-[#9b4dff] hover:bg-[#8a44e5] text-white text-[10px] font-semibold py-1.5 rounded shadow-lg transition-colors flex items-center justify-center gap-1.5"
                            >
                              <ShoppingBag className="w-3 h-3" /> Ver detalhes
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-[11px] font-semibold text-[#E0E0E0] truncate">{product.name}</h4>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] text-[#71717A] flex-1">{product.category}</span>
                        <div className="flex items-center gap-0.5 text-[#EAB308]">
                          <Star className="w-2.5 h-2.5 fill-current" />
                          <span className="text-[9px] text-[#A1A1AA]">{product.rating} ({product.reviewCount})</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-[#F5F5F5]">{product.price}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredProducts.length === 0 && (
                <div className="col-span-2 text-center py-8 text-[#71717A] text-[11px]">
                  {activeTab === 'Favoritos' && favorites.length === 0 
                    ? "Nenhum favorito ainda." 
                    : "Nenhum produto encontrado."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-64 bg-[#0A0A0C] border-l border-[#1C1C20] shadow-2xl z-50 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Carrinho de Compras"
            >
              <div className="p-4 border-b border-[#1C1C20] flex items-center justify-between shrink-0">
                <h2 className="text-sm font-bold text-[#F5F5F5] flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Sacola ({cartCount})
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="text-[#A1A1AA] hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {cartItems.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center text-[#71717A] text-[11px]">
                    Sua sacola está vazia.
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-3 bg-[#151518] p-2 rounded-lg border border-[#1C1C20]">
                      <img src={item.product.image} alt={item.product.name} loading="lazy" className="w-12 h-16 object-cover rounded bg-[#2A2A30]" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-[10px] font-bold text-[#F5F5F5] leading-tight truncate max-w-[100px]">{item.product.name}</h4>
                            <button onClick={() => removeCartItem(item.product.id, item.size)} className="text-[#71717A] hover:text-red-500">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-[9px] text-[#A1A1AA]">Tam: {item.size}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] font-bold text-[#9b4dff]">{item.product.price}</span>
                          <div className="flex items-center gap-2 bg-[#0A0A0C] border border-[#2A2A30] rounded px-1">
                            <button onClick={() => updateCartItemQty(item.product.id, item.size, -1)} className="text-[#A1A1AA] hover:text-white p-0.5">
                              <Minus className="w-2 h-2" />
                            </button>
                            <span className="text-[9px] text-[#F5F5F5] font-medium min-w-[12px] text-center">{item.qty}</span>
                            <button onClick={() => updateCartItemQty(item.product.id, item.size, 1)} className="text-[#A1A1AA] hover:text-white p-0.5">
                              <Plus className="w-2 h-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-4 border-t border-[#1C1C20] bg-[#151518] shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] text-[#A1A1AA]">Subtotal</span>
                  <span className="text-sm font-bold text-[#F5F5F5]">
                    R$ {cartSubtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                {orderConfirmed ? (
                  <div className="w-full bg-green-600 text-white text-[11px] font-bold py-2.5 rounded shadow-lg flex items-center justify-center gap-2">
                    Pedido confirmado!
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      setOrderConfirmed(true);
                      setTimeout(() => {
                        setOrderConfirmed(false);
                        setCartItems([]);
                        setIsCartOpen(false);
                      }, 2000);
                    }}
                    disabled={cartItems.length === 0}
                    className="w-full bg-[#9b4dff] hover:bg-[#8a44e5] disabled:bg-[#2A2A30] disabled:text-[#71717A] text-white text-[11px] font-bold py-2.5 rounded shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Finalizar Compra
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
              className="bg-[#0A0A0C] border border-[#1C1C20] rounded-xl w-full max-w-sm max-h-full overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Detalhes do Produto"
            >
              <div className="relative aspect-video shrink-0">
                <img src={selectedProduct.image} alt={selectedProduct.name} loading="lazy" className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Fechar detalhes do produto"
                  className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white focus:outline-none"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-2 overflow-y-auto">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-[#F5F5F5]">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-1 text-[#EAB308]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] text-[#A1A1AA]">{selectedProduct.rating}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#71717A]">{selectedProduct.category}</span>
                </div>
                
                <p className="text-[10px] text-[#A1A1AA] leading-relaxed">
                  Peça exclusiva da nova coleção. Design moderno e materiais de alta qualidade para o máximo conforto no dia a dia.
                </p>

                <div className="mt-2">
                  <span className="text-[10px] text-[#E0E0E0] mb-1.5 block">Tamanho:</span>
                  <div className="flex gap-2">
                    {['P', 'M', 'G', 'GG'].map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-8 h-8 rounded-full text-[10px] font-semibold flex items-center justify-center border transition-colors ${
                          selectedSize === size 
                            ? 'bg-[#9b4dff] border-[#9b4dff] text-white' 
                            : 'bg-[#151518] border-[#2A2A30] text-[#A1A1AA] hover:border-[#9b4dff]/50 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1C1C20]">
                  <span className="font-bold text-[#F5F5F5]">{selectedProduct.price}</span>
                  <button 
                    onClick={(e) => { 
                      handleAddToCart(e, selectedProduct, selectedSize); 
                      setSelectedProduct(null); 
                      setIsCartOpen(true);
                    }}
                    disabled={!selectedSize}
                    aria-label="Adicionar à sacola"
                    className={`bg-[#9b4dff] hover:bg-[#8a44e5] disabled:opacity-50 disabled:hover:bg-[#9b4dff] disabled:cursor-not-allowed text-white text-[10px] font-semibold py-1.5 px-3 rounded shadow transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#9b4dff]`}
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
