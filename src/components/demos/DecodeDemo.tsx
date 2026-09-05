import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, RefreshCw, CheckCircle2, MessageSquare, Lightbulb } from 'lucide-react';

export const DecodeDemo: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (step === 0 && !hasInteracted) {
      const timer = setTimeout(() => {
        handleChoice();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, hasInteracted]);

  const handleChoice = () => {
    setHasInteracted(true);
    setStep(1); // Decisão
    setTimeout(() => setStep(2), 1200); // Consequência
    setTimeout(() => setStep(3), 3500); // Aprendizado
  };

  const reset = () => {
    setHasInteracted(false);
    setStep(0);
  };

  const stepsInfo = [
    { id: 0, label: 'Situação', icon: MessageSquare },
    { id: 1, label: 'Decisão', icon: CheckCircle2 },
    { id: 2, label: 'Alerta', icon: ShieldAlert },
    { id: 3, label: 'Insight', icon: Lightbulb },
  ];

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[350px] bg-[#050505] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden relative select-none">
      
      {/* Header com Progress Tracker */}
      <div className="flex flex-col px-4 py-3 border-b border-[#1C1C20] bg-[#0A0A0C]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-[#F5F5F5] font-display font-semibold text-sm">Simulador DECODE</span>
          </div>
          {step === 3 && (
            <button onClick={reset} className="text-[#71717A] hover:text-[#F5F5F5] transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
        
        {/* Progress Line */}
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#1C1C20] z-0" />
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#FF3B30] z-0"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
          {stepsInfo.map((s) => {
            const Icon = s.icon;
            const isActive = step >= s.id;
            const isCurrent = step === s.id;
            return (
              <div key={s.id} className="relative z-10 flex flex-col items-center gap-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors duration-300 ${isActive ? 'bg-[#FF3B30] border-[#FF3B30] text-white shadow-[0_0_8px_rgba(255,59,48,0.4)]' : 'bg-[#050505] border-[#2A2A30] text-[#4D4D55]'}`}>
                  <Icon className="w-2.5 h-2.5" />
                </div>
                <span className={`text-[0.55rem] uppercase font-mono tracking-wider transition-colors duration-300 ${isCurrent ? 'text-[#F5F5F5]' : isActive ? 'text-[#A1A1AA]' : 'text-[#4D4D55]'}`}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 bg-[#050505]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="scenario"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full"
            >
              <div className="bg-[#111114] border border-[#1C1C20] p-4 rounded-xl mb-6 relative">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-[#111114] border-l border-b border-[#1C1C20] rotate-45" />
                <p className="text-[#E0E0E0] text-[0.9375rem] leading-relaxed">
                  "Você não vai sair com essa roupa, né? Sabe como os caras ficam olhando. É pro seu próprio bem."
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-2">
                <p className="text-[#71717A] text-[0.65rem] tracking-wider font-mono uppercase mb-1">Qual a sua reação?</p>
                <button onClick={handleChoice} className="w-full text-left p-3.5 rounded-lg bg-[#0A0A0C] border border-[#1C1C20] hover:border-[#FF3B30]/50 hover:bg-[#FF3B30]/5 transition-all text-sm text-[#A1A1AA] hover:text-[#F5F5F5] active:scale-[0.99]">
                  "Verdade, melhor trocar pra evitar problema."
                </button>
                <button onClick={handleChoice} className="w-full text-left p-3.5 rounded-lg bg-[#0A0A0C] border border-[#1C1C20] hover:border-[#FF3B30]/50 hover:bg-[#FF3B30]/5 transition-all text-sm text-[#A1A1AA] hover:text-[#F5F5F5] active:scale-[0.99]">
                  "Minha roupa não justifica a atitude dos outros."
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="decision"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full justify-center items-center text-center px-4"
            >
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full border-2 border-[#1C1C20] border-t-[#FF3B30] mb-4"
              />
              <p className="text-[#71717A] font-mono text-xs uppercase tracking-widest animate-pulse">
                Processando escolha...
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="consequence"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full justify-center items-center text-center px-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF3B30]/10 flex items-center justify-center mb-4 border border-[#FF3B30]/20">
                <ShieldAlert className="w-7 h-7 text-[#FF3B30]" />
              </div>
              <h4 className="text-[#F5F5F5] font-display font-bold text-xl mb-2">
                Red Flag Detectada
              </h4>
              <p className="text-[#9A9A9A] text-[0.9375rem] leading-relaxed">
                Controle disfarçado de cuidado.
              </p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="learning"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full justify-center items-center text-center px-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#00C853]/10 flex items-center justify-center mb-3">
                <Lightbulb className="w-6 h-6 text-[#00C853]" />
              </div>
              <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6 px-2">
                Restringir vestimentas não é sinal de proteção, é uma tentativa de limitar autonomia e isolar a vítima. Reconhecer esse padrão é o primeiro passo para quebrar o ciclo.
              </p>
              
              <div className="w-full bg-[#0A0A0C] border border-[#1C1C20] rounded-lg p-3 text-left flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                <span className="font-mono text-[0.65rem] text-[#71717A] uppercase tracking-wider">Módulo 1 Concluído</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
