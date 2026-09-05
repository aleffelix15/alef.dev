import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data';
import { DecodeDemo } from './demos/DecodeDemo';
import { BankingDemo } from './demos/BankingDemo';
import { GeekFilmeDemo } from './demos/GeekFilmeDemo';

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
          {highlightedProjects.map((project, index) => {
            const projectVariant = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }) as Variants;

            const titleVariant = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
            }) as Variants;

            const descVariant = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
            }) as Variants;

            const demoVariant = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 25, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }) as Variants;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={projectVariant}
                className="flex flex-col gap-12"
              >
                {/* 1 & 2: Name and What it is */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-end">
                  <div className="flex-1">
                    <motion.div variants={titleVariant} className="flex items-center gap-3 mb-6">
                      <span className="inline-flex font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#0066FF] border border-[#0066FF]/30 bg-[#0066FF]/10 px-3 py-1 rounded-full w-fit">
                        {project.category}
                      </span>
                    </motion.div>
                    
                    <motion.h3 variants={titleVariant} className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-[#F5F5F5] mb-3 tracking-tight leading-none">
                      {project.name}
                    </motion.h3>
                    <motion.p variants={titleVariant} className="font-display text-xl sm:text-2xl text-[#4D94FF] font-light">
                      {project.subtitle}
                    </motion.p>
                  </div>
                  
                  <motion.div variants={descVariant} className="flex-1 max-w-2xl">
                    <p className="font-body text-[1.125rem] text-[#9A9A9A] leading-[1.8]">
                      {project.desc}
                    </p>
                  </motion.div>
                </div>

                {/* 3: DEMONSTRAÇÃO */}
                <motion.div variants={demoVariant} className="w-full group">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[0.65rem] tracking-[0.1em] text-[#71717A] uppercase transition-colors group-hover:text-[#9A9A9A]">
                      / DEMONSTRAÇÃO INTERATIVA
                    </span>
                    <div className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C20] group-hover:bg-[#FF3B30] transition-colors duration-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C20] group-hover:bg-[#FF9500] transition-colors duration-500 delay-75" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C20] group-hover:bg-[#00C853] transition-colors duration-500 delay-150" />
                    </div>
                  </div>
                  <div className={`relative rounded-xl p-[1px] bg-gradient-to-b ${project.demoType === 'decode' ? 'from-[#FF3B30]/30 to-transparent' : project.demoType === 'banking' ? 'from-[#00C853]/30 to-transparent' : project.demoType === 'geekfilme' ? 'from-red-600/30 to-transparent' : 'from-[#1C1C20] to-transparent'} transition-all duration-700 group-hover:scale-[1.01] shadow-2xl group-hover:shadow-[#000000]/80`}>
                    <div className="rounded-xl overflow-hidden bg-[#0A0A0C]">
                      {project.demoType === 'decode' && <DecodeDemo />}
                      {project.demoType === 'banking' && <BankingDemo />}
                      {project.demoType === 'geekfilme' && <GeekFilmeDemo />}
                    </div>
                  </div>
                </motion.div>

                {/* 4 a 7: Por que, Para que, Como, Resultado */}
                <motion.div variants={descVariant} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-4 pt-8 border-t border-[#1C1C20]/50">
                  
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[#E0E0E0] font-display text-[0.875rem] font-bold uppercase tracking-wider">Por que criei</h4>
                    <p className="font-body text-[0.9375rem] text-[#71717A] leading-[1.7]">
                      {project.whyCreated}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-[#E0E0E0] font-display text-[0.875rem] font-bold uppercase tracking-wider">Para que serve</h4>
                    <p className="font-body text-[0.9375rem] text-[#71717A] leading-[1.7]">
                      {project.whatItIsFor}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 lg:col-span-2">
                    <h4 className="text-[#E0E0E0] font-display text-[0.875rem] font-bold uppercase tracking-wider">O que desenvolvi</h4>
                    <p className="font-body text-[0.9375rem] text-[#71717A] leading-[1.7] mb-4">
                      {project.whatIDeveloped}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <span 
                          key={tech} 
                          className="font-mono text-[0.7rem] text-[#A1A1AA] bg-[#050505] border border-[#2A2A30] px-3 py-1.5 rounded-md hover:bg-[#0D0D0F] hover:border-[#4D4D55] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>

                <motion.div variants={descVariant} className="flex flex-col gap-3 p-6 rounded-xl bg-[#0A0A0C] border border-[#1C1C20]">
                  <h4 className="text-[#E0E0E0] font-display text-[0.875rem] font-bold uppercase tracking-wider">Resultado</h4>
                  <p className="font-body text-[0.9375rem] text-[#71717A] leading-[1.7]">
                    {project.results}
                  </p>
                </motion.div>

                {/* Links */}
                <motion.div variants={descVariant} className="flex flex-wrap gap-4 mt-2">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center gap-2 bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-[0.9375rem] font-semibold px-7 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
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
                      className="inline-flex items-center gap-2 bg-transparent border border-[#2A2A30] hover:border-[#4D4D55] hover:bg-[#0D0D0F] text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                    >
                      <Github className="w-4 h-4 text-[#9A9A9A]" />
                      <span>Repositório</span>
                    </a>
                  )}
                </motion.div>

                {/* Divider between projects */}
                {index !== highlightedProjects.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1C1C20] to-transparent mt-20" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
