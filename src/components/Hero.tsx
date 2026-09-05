import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const decodeProject = SITE_DATA.projects.find(p => p.id === 'decode');

  // Variáveis de animação para stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  const noMotionVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const activeVariants = shouldReduceMotion ? noMotionVariants : itemVariants;

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050505] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Refinado: Gradiente radial ultra suave para profundidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.03) 0%, transparent 60%)'
          }}
        />
        {/* Subtle grid line */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: Conteúdo */}
          <motion.div
            variants={shouldReduceMotion ? noMotionVariants : containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-2xl"
          >
            {/* Status */}
            <motion.div variants={activeVariants} className="flex items-center gap-3 mb-8">
              <div className="relative flex h-2 w-2 items-center justify-center">
                {!shouldReduceMotion && (
                  <span className="absolute h-full w-full rounded-full bg-[#00C853] opacity-60 animate-[pulse-dot_3s_ease-in-out_infinite]" />
                )}
                <span className="relative h-2 w-2 rounded-full bg-[#00C853]" />
              </div>
              <span className="font-body text-[0.75rem] font-medium text-[#9A9A9A] tracking-wider uppercase">
                Disponível para novos desafios
              </span>
            </motion.div>

            {/* Hierarquia do Título */}
            <motion.div variants={activeVariants} className="mb-6 flex flex-col gap-2">
              <h2 className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] to-[#9A9A9A] text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] tracking-tight uppercase">
                Desenvolvedor & <br />
                Estudante de <br />
                Engenharia de Software
              </h2>
            </motion.div>

            <motion.h1 variants={activeVariants} className="font-display font-medium text-[#E0E0E0] text-[clamp(1.25rem,2.5vw,1.5rem)] leading-snug tracking-tight mb-6 max-w-xl">
              Transformando ideias em soluções digitais.
            </motion.h1>

            {/* Descrição */}
            <motion.p variants={activeVariants} className="font-body text-[1rem] sm:text-[1.0625rem] text-[#9A9A9A] leading-relaxed max-w-[500px] mb-10">
              {SITE_DATA.profile.heroDesc}
            </motion.p>

            {/* Botões */}
            <motion.div variants={activeVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#projeto"
                className="inline-flex items-center justify-center gap-2 bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-[0.9375rem] font-semibold px-7 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
              >
                Conhecer projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-transparent text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-7 py-3.5 rounded-lg border border-[#2A2A30] hover:border-[#4D4D55] hover:bg-[#0D0D0F] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
              >
                Entrar em contato
              </a>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: Projeto em Destaque */}
          {decodeProject && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full flex justify-center lg:justify-end"
            >
              <a
                href="#projeto" // Pode ancorar pra seção do projeto ou ir direto pro demo Url, mas de acordo com a ref, ir pra seção faz sentido.
                className="group relative flex flex-col w-full max-w-[420px] bg-[#0A0A0C] border border-[#1C1C20] hover:border-[#2E2E38] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,102,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                {/* Elementos tecnológicos sutis */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-[#4D4D55] opacity-50">
                  SYS.01
                </div>

                <div className="p-6 pb-5 border-b border-[#1C1C20]/50 relative z-10">
                  <span className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#0066FF] mb-4">
                    <span className="w-1 h-1 rounded-full bg-[#0066FF]" />
                    Projeto em Destaque
                  </span>
                  
                  <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-1">
                    {decodeProject.name}
                  </h3>
                  <p className="font-display text-sm text-[#9A9A9A] italic mb-5">
                    {decodeProject.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {decodeProject.tech.slice(0, 4).map(tech => (
                      <span key={tech} className="font-mono text-[0.7rem] text-[#A1A1AA] bg-[#111114] border border-[#1C1C20] px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Imagem com máscara e microinteração */}
                <div className="relative h-[200px] sm:h-[240px] w-full bg-[#050505] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10" />
                  {decodeProject.images && decodeProject.images.length > 0 ? (
                    <img
                      src={decodeProject.images[0]}
                      alt={decodeProject.name}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-30">
                      <div className="w-32 h-32 border border-[#1C1C20] rounded-full" />
                    </div>
                  )}
                </div>

                {/* CTA Inferior */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-end z-20">
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[#F5F5F5] group-hover:text-[#0066FF] transition-colors">
                    Ver projeto 
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};
