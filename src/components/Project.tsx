import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data';
import { DecodeDemo } from './demos/DecodeDemo';
import { BankingDemo } from './demos/BankingDemo';

export const Project: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const highlightedProjects = SITE_DATA.projects.filter(p => p.isHighlight);

  const fadeUpVariant = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="projeto" className="bg-[#050505] py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUpVariant}
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Portfólio
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight">
            Projetos & Construções
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32">
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpVariant}
              className="flex flex-col gap-12"
            >
              
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                
                {/* Info Column */}
                <div className="flex-1 w-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#0066FF] border border-[#0066FF]/30 bg-[#0066FF]/10 px-3 py-1 rounded-full w-fit">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-2 tracking-tight">
                    {project.name}
                  </h3>
                  <p className="font-display text-lg sm:text-xl text-[#4D94FF] mb-8 font-light">
                    {project.subtitle}
                  </p>

                  <div className="space-y-8">
                    <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#1C1C20]">
                      <div>
                        <h4 className="text-[#E0E0E0] font-display text-sm font-bold uppercase tracking-wider mb-2">Por que criei</h4>
                        <p className="font-body text-[0.9375rem] text-[#71717A] leading-relaxed">
                          {project.whyCreated}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[#E0E0E0] font-display text-sm font-bold uppercase tracking-wider mb-2">Para que serve</h4>
                        <p className="font-body text-[0.9375rem] text-[#71717A] leading-relaxed">
                          {project.whatItIsFor}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#1C1C20]">
                      <h4 className="text-[#E0E0E0] font-display text-sm font-bold uppercase tracking-wider mb-2">O que desenvolvi</h4>
                      <p className="font-body text-[0.9375rem] text-[#71717A] leading-relaxed mb-6">
                        {project.whatIDeveloped}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <span 
                            key={tech} 
                            className="font-mono text-[0.7rem] text-[#A1A1AA] bg-[#0A0A0C] border border-[#2A2A30] px-3 py-1.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#1C1C20]">
                      <h4 className="text-[#E0E0E0] font-display text-sm font-bold uppercase tracking-wider mb-2">Resultado</h4>
                      <p className="font-body text-[0.9375rem] text-[#71717A] leading-relaxed">
                        {project.results}
                      </p>
                    </div>

                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden inline-flex items-center gap-2 bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-[0.9375rem] font-semibold px-7 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                      >
                        <span>Ver Projeto</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent border border-[#2A2A30] hover:border-[#4D4D55] hover:bg-[#0D0D0F] text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-7 py-3.5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                      >
                        <Github className="w-4 h-4 text-[#9A9A9A]" />
                        <span>Repositório</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Demo / Visual Column */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="font-mono text-[0.65rem] tracking-[0.1em] text-[#71717A] uppercase">
                      / DEMONSTRAÇÃO
                    </span>
                  </div>
                  <div className={`relative rounded-xl p-[1px] bg-gradient-to-b ${project.demoType === 'decode' ? 'from-[#FF3B30]/20 to-transparent' : project.demoType === 'banking' ? 'from-[#00C853]/20 to-transparent' : 'from-[#1C1C20] to-transparent'}`}>
                    <div className="rounded-xl overflow-hidden bg-[#0A0A0C]">
                      {project.demoType === 'decode' && <DecodeDemo />}
                      {project.demoType === 'banking' && <BankingDemo />}
                    </div>
                  </div>
                </div>

              </div>

              {/* Divider between projects */}
              {index !== highlightedProjects.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1C1C20] to-transparent mt-16" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
