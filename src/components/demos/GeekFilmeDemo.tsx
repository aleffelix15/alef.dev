import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Bell, Menu, Plus, ChevronRight, Pause } from 'lucide-react';

export const GeekFilmeDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  const movies = [
    { id: 1, title: 'Iron Man', year: '2008', image: '/geekfilme/ironman-poster.webp', genre: 'Ação' },
    { id: 2, title: 'WandaVision', year: '2021', image: '/geekfilme/wanda-poster.jpg', genre: 'Mistério' },
    { id: 3, title: 'Thor: Ragnarok', year: '2017', image: '/geekfilme/thor-poster.jpg', genre: 'Aventura' },
    { id: 4, title: 'Brooklyn 99', year: '2013', image: '/geekfilme/b99-poster.jpg', genre: 'Comédia' },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <div className="w-full h-full min-h-[400px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden font-sans relative select-none">
      
      {/* Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between px-5 py-3 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-20"
      >
        <div className="flex items-center gap-5">
          <span className="font-black text-[#E50914] text-lg tracking-tighter">GEEKFILME</span>
          <div className="hidden sm:flex gap-4 text-[0.7rem] text-[#E5E5E5] font-medium">
            <span className="font-bold cursor-pointer">Início</span>
            <span className="text-[#B3B3B3] hover:text-[#E5E5E5] transition-colors cursor-pointer">Séries</span>
            <span className="text-[#B3B3B3] hover:text-[#E5E5E5] transition-colors cursor-pointer">Filmes</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#E5E5E5]">
          <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors hidden sm:block" />
          <Bell className="w-4 h-4 cursor-pointer hover:text-white transition-colors hidden sm:block" />
          <div className="w-6 h-6 rounded bg-[#333] border border-[#444] overflow-hidden" />
          <Menu className="w-4 h-4 sm:hidden cursor-pointer" />
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#141414] overflow-hidden flex flex-col relative">
        
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="catalog"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col"
            >
              {/* Hero Banner */}
              <div className="h-[240px] sm:h-[280px] w-full relative flex items-end px-5 pb-6">
                <img 
                  src="/geekfilme/ironman-banner.jpg" 
                  alt="Iron Man Banner" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent opacity-80" />
                
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative z-10 max-w-sm"
                >
                  <motion.div variants={fadeUp} className="flex items-center gap-2 mb-1">
                    <span className="text-[#E50914] font-black text-[0.6rem] tracking-wider uppercase border border-[#E50914] px-1 rounded-sm">Filme</span>
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="text-white font-black text-3xl sm:text-4xl mb-2 uppercase tracking-tight shadow-sm drop-shadow-md">
                    Iron Man
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-gray-300 text-[0.7rem] sm:text-xs mb-4 line-clamp-2 drop-shadow-sm font-medium">
                    Gênio, bilionário, playboy e filantropo cria uma armadura para salvar o mundo e descobre o verdadeiro significado de ser um herói.
                  </motion.p>
                  
                  <motion.div variants={fadeUp} className="flex items-center gap-3">
                    <button 
                      onClick={handlePlay}
                      className="bg-white hover:bg-gray-200 text-black px-4 py-1.5 rounded-sm text-[0.8rem] font-bold flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> Assistir
                    </button>
                    <button className="bg-gray-500/50 hover:bg-gray-500/70 text-white px-4 py-1.5 rounded-sm text-[0.8rem] font-bold flex items-center gap-2 transition-all backdrop-blur-sm cursor-pointer">
                      <Plus className="w-3.5 h-3.5" /> Minha Lista
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Movie Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="px-5 py-2 flex-1 z-10"
              >
                <div className="flex items-center gap-1 mb-2.5 cursor-pointer group w-fit">
                  <h3 className="text-[#E5E5E5] font-bold text-[0.85rem]">Populares no GeekFilme</h3>
                  <ChevronRight className="w-4 h-4 text-[#54B9C5] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                
                <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {movies.map((movie, index) => (
                    <motion.div 
                      key={movie.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      onMouseEnter={() => setHoveredMovie(movie.id)}
                      onMouseLeave={() => setHoveredMovie(null)}
                      className="relative min-w-[110px] sm:min-w-[130px] aspect-[2/3] rounded-md overflow-hidden bg-[#222] cursor-pointer group snap-start shrink-0 shadow-lg"
                    >
                      <img 
                        src={movie.image} 
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 ${hoveredMovie === movie.id ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute inset-0 p-2.5 flex flex-col justify-end">
                          <Play className={`w-8 h-8 text-white fill-white mb-auto self-center mt-8 transition-all duration-300 ${hoveredMovie === movie.id ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                          
                          <motion.div 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: hoveredMovie === movie.id ? 0 : 10, opacity: hoveredMovie === movie.id ? 1 : 0 }}
                            className="flex flex-col gap-0.5"
                          >
                            <span className="text-white font-bold text-[0.75rem] leading-tight line-clamp-1">{movie.title}</span>
                            <div className="flex items-center gap-1.5 text-[0.6rem] text-gray-300 font-medium">
                              <span className="text-[#46D369]">{movie.year}</span>
                              <span className="w-0.5 h-0.5 bg-gray-400 rounded-full" />
                              <span>{movie.genre}</span>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* Player State */
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-black flex flex-col justify-between"
            >
              <div className="absolute inset-0 opacity-30">
                 <img src="/geekfilme/ironman-banner.jpg" className="w-full h-full object-cover blur-sm" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="flex flex-col items-center gap-4">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="w-10 h-10 border-2 border-white/20 border-t-[#E50914] rounded-full"
                   />
                   <span className="text-white font-medium text-sm drop-shadow-md">Reproduzindo Iron Man...</span>
                 </div>
              </div>
              
              {/* Fake Player Controls */}
              <div className="relative z-10 w-full p-6 bg-gradient-to-t from-black to-transparent mt-auto flex flex-col gap-3">
                 <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: "0%" }}
                     animate={{ width: "10%" }}
                     transition={{ duration: 2, ease: "linear" }}
                     className="h-full bg-[#E50914]"
                   />
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <Pause className="w-5 h-5 text-white fill-white cursor-pointer" onClick={() => setIsPlaying(false)} />
                     <span className="text-white font-bold text-sm">Iron Man</span>
                   </div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
};
