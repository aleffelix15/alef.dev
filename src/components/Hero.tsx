import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const codeSnippet = `const developer = {
  name: 'Alef Felix',
  role: 'Desenvolvedor Full Stack',
  focus: ['React', 'Node.js', 'TypeScript'],
  passion: 'Resolver problemas e criar impacto',
  learning: 'Todos os dias'
};

function transformarIdeia(ideia) {
  return '${"$"}{ideia} -> código -> solução -> impacto';
}

console.log(transformarIdeia('Sua ideia!'));
// Vamos construir algo incrível juntos! 🚀`;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] pt-24 pb-12 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-[0.03] blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
          }}
          className="flex flex-col items-start text-left"
        >
          <motion.div
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              {!shouldReduceMotion && (
                <span className="absolute h-full w-full rounded-full bg-[#00C853] opacity-60 animate-[pulse-dot_3s_ease-in-out_infinite]" />
              )}
              <span className="relative h-2 w-2 rounded-full bg-[#00C853]" />
            </div>
            <span className="font-mono text-[0.65rem] font-semibold text-[#9A9A9A] tracking-[0.2em] uppercase">
              Disponível para novos desafios
            </span>
          </motion.div>

          <motion.h1
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-bold text-[#F5F5F5] tracking-tight mb-6"
          >
            DESENVOLVEDOR <span className="text-[#333333]">&</span><br />
            ESTUDANTE DE<br />
            <span className="text-[#9A9A9A]">ENGENHARIA DE</span><br />
            SOFTWARE
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-body text-base md:text-lg text-[#71717A] max-w-md leading-relaxed mb-10"
          >
            Transformando ideias em soluções digitais escaláveis. Código limpo, design inteligente e performance.
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projeto"
              className="group inline-flex items-center gap-2 bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-sm font-semibold px-6 py-3 rounded-md transition-all active:scale-95"
            >
              Ver projetos <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 bg-transparent text-[#E0E0E0] border border-[#1C1C20] hover:bg-[#0D0D0F] hover:border-[#2A2A30] font-body text-sm font-medium px-6 py-3 rounded-md transition-all active:scale-95"
            >
              Sobre mim <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Code Block - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block w-full"
        >
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1C1C20] bg-[#050505]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9500]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C853]/80" />
              </div>
              <span className="ml-2 font-mono text-[10px] text-[#71717A]">dev.alef.ts</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-[1.7]">
                <code>
                  <span className="text-[#0066FF]">const</span> <span className="text-[#F5F5F5]">developer</span> <span className="text-[#0066FF]">=</span> {'{'}<br/>
                  {'  '}<span className="text-[#71717A]">name:</span> <span className="text-[#00C853]">'Alef Felix'</span>,<br/>
                  {'  '}<span className="text-[#71717A]">role:</span> <span className="text-[#00C853]">'Desenvolvedor Full Stack'</span>,<br/>
                  {'  '}<span className="text-[#71717A]">focus:</span> [<span className="text-[#00C853]">'React'</span>, <span className="text-[#00C853]">'Node.js'</span>, <span className="text-[#00C853]">'TypeScript'</span>],<br/>
                  {'  '}<span className="text-[#71717A]">passion:</span> <span className="text-[#00C853]">'Resolver problemas e criar impacto'</span>,<br/>
                  {'  '}<span className="text-[#71717A]">learning:</span> <span className="text-[#00C853]">'Todos os dias'</span><br/>
                  {'}'}<br/><br/>
                  <span className="text-[#0066FF]">function</span> <span className="text-[#F5F5F5]">transformarIdeia</span>(<span className="text-[#FF9500]">ideia</span>) {'{'}<br/>
                  {'  '}<span className="text-[#0066FF]">return</span> <span className="text-[#00C853]">\\ -{'>'} código -{'>'} solução -{'>'} impacto\</span>;<br/>
                  {'}'}<br/><br/>
                  <span className="text-[#F5F5F5]">console</span>.<span className="text-[#0066FF]">log</span>(<span className="text-[#F5F5F5]">transformarIdeia</span>(<span className="text-[#00C853]">'Sua ideia!'</span>));<br/>
                  <span className="text-[#71717A]">// Vamos construir algo incrível juntos! 🚀</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

