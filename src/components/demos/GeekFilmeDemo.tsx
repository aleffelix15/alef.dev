import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, ChevronRight, Pause } from 'lucide-react';

export const GeekFilmeDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  const movies = [
    { id: 1, title: 'Iron Man', image: '/geekfilme/ironman-poster.webp' },
    { id: 2, title: 'WandaVision', image: '/geekfilme/wanda-poster.jpg' },
    { id: 3, title: 'Thor', image: '/geekfilme/thor-poster.jpg' },
    { id: 4, title: 'B99', image: '/geekfilme/b99-poster.jpg' },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[350px] max-h-[360px] md:max-h-[420px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden font-sans relative select-none">
      <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center gap-4">
          <span className="font-black text-[#E50914] text-[0.8rem] tracking-tighter">GEEKFILME</span>
          <div className="hidden sm:flex gap-3 text-[0.6rem] text-[#E5E5E5] font-medium">
            <span className="font-bold cursor-pointer">Início</span>
            <span className="text-[#B3B3B3] hover:text-[#E5E5E5] cursor-pointer">Séries</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#E5E5E5]">
          <Search className="w-3 h-3 cursor-pointer hidden sm:block" />
          <div className="w-5 h-5 rounded bg-[#333] border border-[#444] overflow-hidden" />
        </div>
      </motion.div>

      <div className="flex-1 bg-[#141414] overflow-hidden flex flex-col relative">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div key="catalog" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} viewport={{ once: true }} className="flex-1 flex flex-col">
              <div className="h-[150px] sm:h-[160px] w-full relative flex items-end px-4 pb-3">
                <img src="/geekfilme/ironman-banner.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent opacity-90" />
                
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 max-w-[280px]">
                  <motion.h2 variants={fadeUp} className="text-white font-black text-xl sm:text-2xl mb-1 uppercase tracking-tight shadow-sm drop-shadow-md">Iron Man</motion.h2>
                  <motion.p variants={fadeUp} className="text-gray-300 text-[0.6rem] mb-2 line-clamp-2 drop-shadow-sm font-medium leading-relaxed">
                    Gênio, bilionário, playboy e filantropo cria uma armadura para salvar o mundo.
                  </motion.p>
                  <motion.div variants={fadeUp} className="flex items-center gap-2">
                    <button onClick={() => setIsPlaying(true)} className="bg-white hover:bg-gray-200 text-black px-3 py-1 rounded-sm text-[0.65rem] font-bold flex items-center gap-1.5 transition-all">
                      <Play className="w-2.5 h-2.5 fill-current" /> Assistir
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="px-4 py-2 flex-1 z-10 flex flex-col justify-end pb-3">
                <div className="flex items-center gap-1 mb-1.5 cursor-pointer group w-fit">
                  <h3 className="text-[#E5E5E5] font-bold text-[0.7rem]">Populares</h3>
                  <ChevronRight className="w-3 h-3 text-[#54B9C5] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x items-end pb-1">
                  {movies.map((movie, index) => (
                    <motion.div key={movie.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + (index * 0.1) }} onMouseEnter={() => setHoveredMovie(movie.id)} onMouseLeave={() => setHoveredMovie(null)} className="relative w-[75px] sm:w-[85px] aspect-[2/3] rounded overflow-hidden bg-[#222] cursor-pointer group snap-start shrink-0 shadow-lg border border-[#333]/50">
                      <img src={movie.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 transition-opacity duration-300 ${hoveredMovie === movie.id ? "opacity-100" : "opacity-0"}`}>
                        <div className="absolute inset-0 p-2 flex flex-col justify-end">
                          <Play className={`w-5 h-5 text-white fill-white mb-auto self-center mt-4 transition-all duration-300 ${hoveredMovie === movie.id ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
                          <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: hoveredMovie === movie.id ? 0 : 5, opacity: hoveredMovie === movie.id ? 1 : 0 }} className="flex flex-col gap-0.5">
                            <span className="text-white font-bold text-[0.55rem] leading-tight line-clamp-1">{movie.title}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="player" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-black flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20"><img src="/geekfilme/ironman-banner.jpg" className="w-full h-full object-cover blur-md" /></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="flex flex-col items-center gap-3">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-6 h-6 border-2 border-white/20 border-t-[#E50914] rounded-full" />
                   <span className="text-gray-300 font-medium text-[0.65rem] drop-shadow-md tracking-wide">Reproduzindo...</span>
                 </div>
              </div>
              <div className="relative z-10 w-full p-4 bg-gradient-to-t from-black to-transparent mt-auto flex flex-col gap-2.5">
                 <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden"><motion.div initial={{ width: '0%' }} animate={{ width: '10%' }} transition={{ duration: 2, ease: 'linear' }} className="h-full bg-[#E50914]" /></div>
                 <div className="flex items-center gap-3">
                   <Pause className="w-3.5 h-3.5 text-white fill-white cursor-pointer hover:text-gray-300" onClick={() => setIsPlaying(false)} />
                   <span className="text-white font-bold text-[0.65rem]">Iron Man</span>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
};
