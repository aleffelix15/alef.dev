import React, { useState } from 'react';

import { SITE_DATA } from '../data';
import { FadeInWhenVisible } from './Animations';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export type ProjectType = typeof SITE_DATA.projects[0];

export const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  const highlightedProjects = SITE_DATA.projects.filter(p => p.isHighlight);

  return (
    <section id="projeto" className="bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-[#1C1C20]/50 relative">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        
        {/* HEADER */}
        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#0066FF]">■</span>
                <span className="font-mono text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#0066FF]">
                  Projetos
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight">
                Projetos & Construções
              </h2>
            </div>
            <p className="font-body text-[0.9375rem] text-[#71717A] max-w-sm md:text-right">
              Aplicações reais, arquiteturas escaláveis e experiências interativas. Clique nos cards para testar as demonstrações.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {highlightedProjects.map((project, index) => (
            <FadeInWhenVisible key={project.id} delay={index * 0.1}>
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </FadeInWhenVisible>
          ))}
        </div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
