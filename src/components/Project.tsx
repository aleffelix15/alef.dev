import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Project: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const decode = SITE_DATA.projects.find(p => p.id === 'decode');

  if (!decode) return null;

  const animationProps = shouldReduceMotion 
    ? { initial: { opacity: 1 }, whileInView: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, viewport: { once: true, margin: '-50px' } };

  return (
    <section id="projeto" className="bg-[#050505] py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          {...animationProps}
          className="mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Projeto em Destaque
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Info Column */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-2">
              {decode.name}
            </h2>
            <p className="font-display text-xl text-[#4D94FF] italic mb-8">
              {decode.subtitle}
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
                  {decode.desc}
                </p>
              </div>

              <div>
                <h3 className="text-[#F5F5F5] font-display text-lg font-semibold mb-2">O Problema</h3>
                <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
                  {decode.problem}
                </p>
              </div>

              <div>
                <h3 className="text-[#F5F5F5] font-display text-lg font-semibold mb-2">A Solução</h3>
                <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
                  {decode.solution}
                </p>
              </div>

              {decode.results && (
                <div>
                  <h3 className="text-[#F5F5F5] font-display text-lg font-semibold mb-2">Impacto</h3>
                  <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
                    {decode.results}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {decode.tech.map(tech => (
                <span 
                  key={tech} 
                  className="font-mono text-[0.8125rem] text-[#E0E0E0] bg-[#1C1C20] border border-[#2E2E38] px-3 py-1.5 rounded-md shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href={decode.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#1A75FF] text-white font-body text-[0.9375rem] font-medium px-6 py-3 rounded-lg transition-all duration-300 group"
              >
                <span className="relative z-10">Acessar Projeto</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              </a>
              
              <a 
                href={decode.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-[#2E2E38] hover:border-[#4D94FF] hover:text-white text-[#9A9A9A] font-body text-[0.9375rem] font-medium px-6 py-3 rounded-lg transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Repositório</span>
              </a>
            </div>
          </motion.div>

          {/* Image/Visual Column */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 w-full flex flex-col gap-8 lg:mt-8"
          >
            {decode.images && decode.images.map((img, index) => (
              <div 
                key={index}
                className="group rounded-xl border border-[#1C1C20] overflow-hidden bg-[#09090D] shadow-xl relative select-none"
              >
                {/* Safari style header for mockup feeling */}
                <div className="relative z-10 flex items-center gap-1.5 border-b border-[#1C1C24] px-4 py-3 bg-[#0D0D11]/90 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/50" />
                </div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#050505]">
                  <img 
                    src={img} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
