import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { DrawerModal } from './Animations';

import { DecodeDemo } from './demos/DecodeDemo';
import { BankingDemo } from './demos/BankingDemo';
import { GeekFilmeDemo } from './demos/GeekFilmeDemo';
import { VerticeDemo } from './demos/VerticeDemo';

import { ProjectType } from './Project';

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const renderDemo = () => {
    switch(project.demoType) {
      case 'decode': return <DecodeDemo />;
      case 'banking': return <BankingDemo />;
      case 'geekfilme': return <GeekFilmeDemo />;
      case 'vertice': return <VerticeDemo />;
      default: return <div className="text-[#71717A] text-sm italic">Área de Demonstração Interativa</div>;
    }
  };

  const gradientColors = () => {
    switch(project.demoType) {
      case 'decode': return 'from-[#FF3B30]/30';
      case 'banking': return 'from-accent/30';
      case 'geekfilme': return 'from-[#E50914]/30';
      case 'vertice': return 'from-[#9b4dff]/30';
      default: return 'from-accent/30';
    }
  };

  return (
    <DrawerModal isOpen={!!project} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div 
        layoutId={`card-container-${project.id}`}
        className="bg-[#050505] border border-[#1C1C20] rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl relative z-10 flex flex-col [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#2A2A30] [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#1C1C20] text-[#A1A1AA] hover:text-white hover:bg-[#2A2A30] transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 md:p-10 flex flex-col gap-8">
          {/* Header Info */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <motion.span 
              layoutId={`category-${project.id}`}
              className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-accent border border-accent/20 bg-accent/10 px-2 py-1 rounded w-fit"
            >
              {project.category}
            </motion.span>
            
            <div>
              <motion.h2 
                layoutId={`title-${project.id}`}
                className="font-display text-3xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight leading-none mb-2"
              >
                {project.name}
              </motion.h2>
              <motion.p 
                layoutId={`subtitle-${project.id}`}
                className="font-body text-base md:text-lg text-accent font-medium"
              >
                {project.subtitle}
              </motion.p>
            </div>
            
            <motion.p 
              layoutId={`desc-${project.id}`}
              className="font-body text-base text-[#A1A1AA] leading-relaxed"
            >
              {project.desc}
            </motion.p>
          </div>

          {/* Interactive Demo Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`w-full relative rounded-xl p-[1px] bg-gradient-to-b ${gradientColors()} to-transparent`}
          >
            <div className="rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#1C1C20]/50 min-h-[300px]">
              {renderDemo()}
            </div>
          </motion.div>

          {/* Project Details Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#1C1C20]"
          >
            <div className="md:col-span-2 flex flex-col gap-6">
              {project.whyCreated && (
                <div>
                  <h4 className="text-white font-bold mb-2">Por que foi criado?</h4>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">{project.whyCreated}</p>
                </div>
              )}
              {project.whatItIsFor && (
                <div>
                  <h4 className="text-white font-bold mb-2">Para que serve?</h4>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">{project.whatItIsFor}</p>
                </div>
              )}
              {project.whatIDeveloped && (
                <div>
                  <h4 className="text-white font-bold mb-2">O que desenvolvi?</h4>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">{project.whatIDeveloped}</p>
                </div>
              )}
              {project.results && (
                <div>
                  <h4 className="text-white font-bold mb-2">Resultados</h4>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-white font-bold mb-3">Ecossistema</h4>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t: string) => (
                    <span key={t} className="font-mono text-[0.65rem] text-[#E0E0E0] bg-[#1C1C20] border border-[#2A2A30] px-3 py-1.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-white text-black py-2.5 rounded-lg font-bold text-sm transition-colors">
                    <ExternalLink className="w-4 h-4" /> Acessar Aplicação
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#1C1C20] hover:bg-[#2A2A30] text-white py-2.5 rounded-lg font-bold text-sm transition-colors border border-[#3F3F46]">
                    <Github className="w-4 h-4" /> Código Fonte
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </DrawerModal>
  );
};
