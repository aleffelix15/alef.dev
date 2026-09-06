import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { ProjectType } from './Project';

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Define custom glow and border colors based on demoType
    const getColors = (type?: string) => {
    switch(type) {
      case 'decode': return 'hover:border-[#FF3B30] hover:shadow-[0_0_20px_rgba(255,59,48,0.2)]';
      case 'banking': return 'hover:border-accent hover:shadow-[0_0_20px_theme(colors.accent.glow)]';
      case 'geekfilme': return 'hover:border-[#E50914] hover:shadow-[0_0_20px_rgba(229,9,20,0.2)]';
      case 'vertice': return 'hover:border-[#9b4dff] hover:shadow-[0_0_20px_rgba(155,77,255,0.2)]';
      default: return 'hover:border-accent hover:shadow-[0_0_20px_theme(colors.accent.glow)]';
    }
  };

  const getSpotlightColor = (type?: string) => {
    switch(type) {
      case 'decode': return 'rgba(255,59,48,0.15)';
      case 'banking': return 'rgba(0,102,255,0.15)';
      case 'geekfilme': return 'rgba(229,9,20,0.15)';
      case 'vertice': return 'rgba(155,77,255,0.15)';
      default: return 'rgba(0,102,255,0.15)';
    }
  };

  return (
    <SpotlightCard 
      onClick={onClick}
      spotlightColor={getSpotlightColor(project.demoType)}
      className={`h-full bg-[#0A0A0C] border border-[#1C1C20] rounded-xl p-6 md:p-8 flex flex-col transition-colors duration-300 ${getColors(project.demoType)}`}
    >
      <motion.div layoutId={`card-container-${project.id}`} className="flex flex-col h-full gap-4 relative z-10">
        
        <motion.span 
          layoutId={`category-${project.id}`}
          className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-accent border border-accent/20 bg-accent/10 px-2 py-1 rounded w-fit"
        >
          {project.category}
        </motion.span>
        
        <div>
          <motion.h3 
            layoutId={`title-${project.id}`}
            className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F5] tracking-tight leading-none mb-2"
          >
            {project.name}
          </motion.h3>
          <motion.p 
            layoutId={`subtitle-${project.id}`}
            className="font-body text-sm text-accent font-medium"
          >
            {project.subtitle}
          </motion.p>
        </div>

        <motion.p 
          layoutId={`desc-${project.id}`}
          className="font-body text-sm text-[#9A9A9A] leading-relaxed flex-1 mt-2 line-clamp-3"
        >
          {project.desc}
        </motion.p>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1C1C20]">
          {project.tech.slice(0, 4).map((t: string) => (
            <span key={t} className="font-mono text-[0.65rem] text-[#A1A1AA] bg-[#050505] border border-[#2A2A30] px-2.5 py-1 rounded">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="font-mono text-[0.65rem] text-[#71717A] px-2.5 py-1">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </motion.div>
    </SpotlightCard>
  );
};
