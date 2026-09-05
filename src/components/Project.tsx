import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Project: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const decodeProject = SITE_DATA.projects.find(p => p.id === 'decode');

  if (!decodeProject) return null;

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

        {/* DESTAQUE PRINCIPAL: DECODE */}
        <div className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariant}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start"
          >
            {/* Info Column */}
            <div className="flex-1 w-full flex flex-col order-2 lg:order-1">
              <span className="inline-flex font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#0066FF] border border-[#0066FF]/30 bg-[#0066FF]/10 px-3 py-1 rounded-full w-fit mb-6">
                Projeto em Destaque
              </span>
              
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-2 tracking-tight">
                {decodeProject.name}
              </h3>
              <p className="font-display text-xl sm:text-2xl text-[#4D94FF] mb-8 font-light">
                {decodeProject.subtitle}
              </p>

              <div className="space-y-6">
                <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-relaxed">
                  {decodeProject.desc}
                </p>
                <div className="pt-4 border-t border-[#1C1C20]">
                  <h4 className="text-[#E0E0E0] font-display text-base font-semibold mb-2">O Problema & A Solução</h4>
                  <p className="font-body text-[1rem] text-[#71717A] leading-relaxed mb-4">
                    {decodeProject.problem} {decodeProject.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {decodeProject.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="font-mono text-[0.75rem] text-[#A1A1AA] bg-[#0A0A0C] border border-[#2A2A30] px-3 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href={decodeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-[0.9375rem] font-semibold px-7 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  <span>Acessar Projeto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href={decodeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border border-[#2A2A30] hover:border-[#4D4D55] hover:bg-[#0D0D0F] text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-7 py-3.5 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  <Github className="w-4 h-4 text-[#9A9A9A]" />
                  <span>Repositório</span>
                </a>
              </div>
            </div>

            {/* Visual Column */}
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0C] border border-[#1C1C20]">
                {/* Abstract geometric background elements */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#0066FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
                
                {decodeProject.images && decodeProject.images.length > 0 && (
                  <div className="absolute inset-0 flex flex-col justify-center gap-6 p-6 sm:p-12">
                    <img 
                      src={decodeProject.images[0]} 
                      alt={`${decodeProject.name} Principal`}
                      className="w-full rounded-xl border border-[#2A2A30] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                    />
                    {decodeProject.images[1] && (
                      <img 
                        src={decodeProject.images[1]} 
                        alt={`${decodeProject.name} Secundária`}
                        className="w-5/6 ml-auto rounded-xl border border-[#2A2A30] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};
