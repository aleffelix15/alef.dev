import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export const DecodeDemo: React.FC = () => {
  const [step, setStep] = useState<0 | 1>(0);

  const handleChoice = () => {
    setStep(1);
  };

  const reset = () => setStep(0);

  return (
    <div className="w-full h-full min-h-[350px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden relative">
      
      {/* Fake App Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1C1C20] bg-[#050505]">
        <div className="flex flex-col">
          <span className="text-[#F5F5F5] font-display font-semibold text-sm">Cenário Interativo</span>
          <span className="text-[#71717A] text-xs">Simulação DECODE</span>
        </div>
        {step === 1 && (
          <button onClick={reset} className="text-[#4D94FF] hover:text-[#1A75FF] transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="scenario"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex flex-col h-full"
            >
              <div className="bg-[#111114] border border-[#1C1C20] p-4 rounded-xl mb-6 relative">
                <div className="absolute -left-2 top-4 w-4 h-4 bg-[#111114] border-l border-b border-[#1C1C20] rotate-45" />
                <p className="text-[#E0E0E0] text-sm leading-relaxed">
                  "Você não vai sair com essa roupa, né? Sabe como os caras ficam olhando. É pro seu próprio bem."
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <p className="text-[#71717A] text-xs font-semibold uppercase mb-1">Escolha uma reação:</p>
                <button onClick={handleChoice} className="w-full text-left p-4 rounded-xl bg-[#0D0D0F] border border-[#2A2A30] hover:border-[#4D94FF] transition-colors text-sm text-[#F5F5F5]">
                  "Verdade, melhor eu trocar de roupa pra evitar problemas."
                </button>
                <button onClick={handleChoice} className="w-full text-left p-4 rounded-xl bg-[#0D0D0F] border border-[#2A2A30] hover:border-[#4D94FF] transition-colors text-sm text-[#F5F5F5]">
                  "Minha roupa não justifica o comportamento dos outros."
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col h-full justify-center items-center text-center px-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#FF3B30]/10 flex items-center justify-center mb-4">
                <ShieldAlert className="w-6 h-6 text-[#FF3B30]" />
              </div>
              <h4 className="text-[#F5F5F5] font-display font-bold text-lg mb-2">
                Alerta de Controle
              </h4>
              <p className="text-[#9A9A9A] text-sm leading-relaxed mb-6">
                Comentários disfarçados de "cuidado" muitas vezes são tentativas de controlar suas escolhas e limitar sua autonomia. Esse é um sinal de alerta (Red Flag).
              </p>
              
              <div className="w-full bg-[#111114] border border-[#1C1C20] rounded-lg p-3 text-left">
                <span className="block text-xs text-[#71717A] uppercase mb-1">Tecnologias da Simulação</span>
                <div className="flex gap-2">
                  <span className="text-[10px] text-[#A1A1AA] bg-[#050505] px-2 py-1 rounded">React</span>
                  <span className="text-[10px] text-[#A1A1AA] bg-[#050505] px-2 py-1 rounded">Framer Motion</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
