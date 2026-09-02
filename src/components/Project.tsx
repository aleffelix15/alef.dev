import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

export const Project: React.FC = () => {
  return (
    <section id="projeto" className="bg-[#050505] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Projeto Principal
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h2 className="font-display text-5xl font-bold text-[#F5F5F5] mb-2">
              DECODE
            </h2>
            <p className="font-display text-xl text-[#4D94FF] italic mb-6">
              "Descriptografando a Violência"
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7] mb-6">
                DECODE é um projeto interativo que usa tecnologia e narrativa para conscientizar jovens sobre a violência contra a mulher. 
                Através de um ambiente simulado, o usuário navega por cenários que desmistificam comportamentos tóxicos disfarçados de situações cotidianas.
              </p>
              
              <h3 className="text-white font-display text-lg font-semibold mb-3">O Problema</h3>
              <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7] mb-6">
                A violência muitas vezes começa de forma invisível e silenciosa. O objetivo do sistema é atuar na raiz do problema, 
                educando jovens a identificar os primeiros sinais antes que eles se transformem em abuso.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map(tech => (
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
                href="https://decode-ochre.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#1A75FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] hover:-translate-y-[1px] text-white font-body text-[0.9375rem] font-semibold px-6 py-3 rounded-lg transition-all duration-300 group"
              >
                Acessar Projeto
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a 
                href="https://github.com/aleffelix15/decode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-[#2E2E38] hover:border-[#4D94FF] hover:text-white text-[#9A9A9A] font-body text-[0.9375rem] font-semibold px-6 py-3 rounded-lg transition-all duration-300 group"
              >
                <Github className="w-4 h-4" />
                Repositório
              </a>
            </div>
          </motion.div>

          {/* Image/Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 w-full flex flex-col gap-6"
          >
            {/* Main Image */}
            <div className="group rounded-2xl border border-[#1C1C20] overflow-hidden bg-[#09090D] shadow-2xl relative flex flex-col select-none aspect-video">
              <div className="relative z-10 flex items-center justify-between w-full border-b border-[#1C1C24] px-4 py-2.5 bg-[#0D0D11]/90 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="bg-[#050505] border border-[#1C1C24] px-4 py-0.5 rounded-md text-[11px] font-mono text-[#A1A1AA]">
                  decode-ochre.vercel.app
                </div>
              </div>
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="/assets/decode_dashboard.png" 
                  alt="DECODE Dashboard" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Secondary Image */}
            <div className="group rounded-2xl border border-[#1C1C20] overflow-hidden bg-[#09090D] shadow-xl relative select-none aspect-video">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="/assets/decode_landing.png" 
                  alt="DECODE Landing Page" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
