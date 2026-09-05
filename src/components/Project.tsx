import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data';
import { DecodeDemo } from './demos/DecodeDemo';
import { BankingDemo } from './demos/BankingDemo';
import { GeekFilmeDemo } from './demos/GeekFilmeDemo';
import { VerticeDemo } from './demos/VerticeDemo';

export const Project: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const highlightedProjects = SITE_DATA.projects.filter(p => p.isHighlight);

  const fadeUpVariant = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="projeto" className="bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-[#1C1C20]/50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
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
            Cada projeto representa um desafio único e uma oportunidade de aprender, construir e gerar impacto real através de código.
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
          {highlightedProjects.map((project, index) => {
            const projectVariant = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' } }
            }) as Variants;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={projectVariant}
                className="flex flex-col gap-6"
              >
                {/* Header of Card */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                      <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#0066FF] border border-[#0066FF]/20 bg-[#0066FF]/10 px-2 py-1 rounded w-fit">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F5] tracking-tight leading-none">
                        {project.name}
                      </h3>
                      <p className="font-body text-sm text-[#0066FF] font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <p className="font-body text-sm text-[#9A9A9A] leading-relaxed md:max-w-[45%] md:text-right">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* DEMONSTRAÇÃO */}
                <div className="w-full group mt-2">
                  <div className={`relative rounded-xl p-[1px] bg-gradient-to-b ${project.demoType === 'decode' ? 'from-[#FF3B30]/30 to-transparent' : project.demoType === 'banking' ? 'from-[#00C853]/30 to-transparent' : project.demoType === 'geekfilme' ? 'from-red-600/30 to-transparent' : project.demoType === 'vertice' ? 'from-[#9b4dff]/30 to-transparent' : 'from-[#1C1C20] to-transparent'} transition-all duration-700 group-hover:scale-[1.01] shadow-xl group-hover:shadow-[#000000]/80`}>
                    <div className="rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#1C1C20]/50">
                      {project.demoType === 'decode' && <DecodeDemo />}
                      {project.demoType === 'banking' && <BankingDemo />}
                      {project.demoType === 'geekfilme' && <GeekFilmeDemo />}
                      {project.demoType === 'vertice' && <VerticeDemo />}
                    </div>
                  </div>
                </div>

                {/* Tech & Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-2">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {project.tech.slice(0, 5).map((tech: string) => (
                      <span 
                        key={tech} 
                        className="font-mono text-[0.65rem] text-[#A1A1AA] bg-[#0A0A0C] border border-[#2A2A30] px-2.5 py-1 rounded hover:bg-[#0D0D0F] hover:border-[#4D4D55] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="font-mono text-[0.65rem] text-[#71717A] px-2.5 py-1">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-xs font-semibold text-[#E0E0E0] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white transition-colors" />
                        <span>Ver projeto</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-xs font-semibold text-[#E0E0E0] hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white transition-colors" />
                        <span>Ver no GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

