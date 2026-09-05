import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Search, Bell, Menu } from 'lucide-react';

export const GeekFilmeDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'movies'>('home');
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  const movies = [
    { id: 1, title: 'IRON MAN', color: 'from-red-600 to-red-900', year: '2008' },
    { id: 2, title: 'WANDA', color: 'from-purple-600 to-purple-900', year: '2021' },
    { id: 3, title: 'AVENGERS', color: 'from-blue-600 to-blue-900', year: '2012' },
  ];

  return (
    <div className="w-full h-full min-h-[350px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden font-sans relative select-none">
      
      {/* Navbar Simulation */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-[#2A2A30]">
        <div className="flex items-center gap-4">
          <span className="font-black text-red-600 text-lg tracking-tighter">GEEKFILME</span>
          <div className="hidden sm:flex gap-3 text-xs text-[#E5E5E5] font-medium">
            <button 
              onClick={() => setActiveTab('home')}
              className={`transition-colors ${activeTab === 'home' ? 'font-bold' : 'text-[#B3B3B3] hover:text-[#E5E5E5]'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setActiveTab('movies')}
              className={`transition-colors ${activeTab === 'movies' ? 'font-bold' : 'text-[#B3B3B3] hover:text-[#E5E5E5]'}`}
            >
              Filmes
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#E5E5E5]">
          <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          <Bell className="w-4 h-4 cursor-pointer hover:text-white transition-colors hidden sm:block" />
          <div className="w-6 h-6 rounded bg-gray-600 border border-gray-500 overflow-hidden" />
          <Menu className="w-4 h-4 sm:hidden" />
        </div>
      </div>

      <div className="flex-1 bg-[#141414] overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              {/* Hero Banner Simulation */}
              <div className="h-[180px] w-full bg-gradient-to-br from-red-900/40 to-black relative flex items-end p-5">
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <div className="relative z-10">
                  <h2 className="text-white font-black text-3xl mb-1 uppercase tracking-tight shadow-sm">Iron Man</h2>
                  <p className="text-gray-300 text-[10px] mb-3 max-w-[200px] line-clamp-2">
                    Gênio, bilionário, playboy e filantropo cria uma armadura para salvar o mundo.
                  </p>
                  <button className="bg-white hover:bg-gray-200 text-black px-4 py-1.5 rounded text-xs font-bold flex items-center gap-1 transition-colors">
                    <Play className="w-3 h-3 fill-current" /> Assistir
                  </button>
                </div>
              </div>

              {/* Rows Simulation */}
              <div className="px-4 py-2 flex-1">
                <h3 className="text-[#E5E5E5] font-semibold text-xs mb-2">Populares no GEEKFILME</h3>
                <div className="flex gap-2">
                  {movies.map(movie => (
                    <div 
                      key={movie.id}
                      onMouseEnter={() => setHoveredMovie(movie.id)}
                      onMouseLeave={() => setHoveredMovie(null)}
                      className="relative w-1/3 aspect-[2/3] rounded-md overflow-hidden bg-gradient-to-br border border-[#333] cursor-pointer group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${movie.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                      <div className="absolute inset-0 p-2 flex flex-col justify-end">
                        <span className="text-white font-bold text-[10px] leading-tight">{movie.title}</span>
                      </div>
                      
                      {hoveredMovie === movie.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 bg-black/80 flex items-center justify-center p-2 backdrop-blur-sm"
                        >
                          <Play className="w-8 h-8 text-white fill-white opacity-80" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'movies' && (
            <motion.div
              key="movies"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 p-4"
            >
              <h3 className="text-[#E5E5E5] font-semibold text-sm mb-4">Filmes de Ação</h3>
              <div className="grid grid-cols-2 gap-3">
                {[...movies, {id: 4, title: 'THOR', color: 'from-gray-600 to-gray-900'}].map(movie => (
                  <div key={movie.id} className="w-full aspect-video rounded-md overflow-hidden relative border border-[#333]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${movie.color} opacity-50`} />
                    <div className="absolute inset-0 p-2 flex items-end">
                      <span className="text-white font-bold text-xs">{movie.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
