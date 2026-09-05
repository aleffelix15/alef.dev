import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, ShieldCheck, Database, Server, RefreshCw } from 'lucide-react';

export const BankingDemo: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (step === 0 && !hasInteracted) {
      const timer = setTimeout(() => {
        handleRequest();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, hasInteracted]);

  const handleRequest = () => {
    setHasInteracted(true);
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 2000); // tempo para ver a animação de processamento
  };

  const reset = () => {
    setHasInteracted(false);
    setStep(0);
  };

  return (
    <div className="w-full h-full min-h-[350px] bg-[#050505] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden font-mono relative select-none">
      
      {/* Header Terminal */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1C1C20] bg-[#0A0A0C]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#71717A]" />
          <span className="text-[#A1A1AA] text-xs">API_Gateway v2.4</span>
        </div>
        <div className="flex items-center gap-1.5">
          {step === 2 && (
            <button onClick={reset} className="text-[#71717A] hover:text-[#F5F5F5] mr-2 transition-colors">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#00C853]" />
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-1 relative">
        <AnimatePresence mode="wait">
          
          {step === 0 && (
            <motion.div
              key="request-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#00C853]/10 text-[#00C853] px-2 py-0.5 rounded text-[0.65rem] font-bold">POST</span>
                <span className="text-[#E0E0E0] text-sm">/api/v1/transacoes/deposito</span>
              </div>

              <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-lg p-4 mb-4 text-xs text-[#9A9A9A] flex-1">
                <span className="text-[#4D94FF]">{"{"}</span>
                <div className="pl-4 py-1 flex flex-col gap-1">
                  <div><span className="text-[#71717A]">"conta_origem":</span> <span className="text-[#F5F5F5]">"0000-0000-0000-0000"</span>,</div>
                  <div><span className="text-[#71717A]">"conta_destino":</span> <span className="text-[#F5F5F5]">"9876-5432-1098-7654"</span>,</div>
                  <div><span className="text-[#71717A]">"valor":</span> <span className="text-[#00C853]">1500.00</span>,</div>
                  <div><span className="text-[#71717A]">"moeda":</span> <span className="text-[#F5F5F5]">"BRL"</span></div>
                </div>
                <span className="text-[#4D94FF]">{"}"}</span>
              </div>

              <button 
                onClick={handleRequest}
                className="w-full bg-[#F5F5F5] hover:bg-white text-[#050505] font-sans font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Disparar Requisição
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full justify-center"
            >
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0 }}
                  className="flex items-center gap-3 text-[#A1A1AA] text-xs"
                >
                  <Server className="w-4 h-4 text-[#4D94FF] animate-pulse" />
                  <span>Autenticando via Spring Security...</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 text-[#A1A1AA] text-xs"
                >
                  <ShieldCheck className="w-4 h-4 text-[#00C853] animate-pulse" />
                  <span>Validando saldo disponível (ACID)...</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                  className="flex items-center gap-3 text-[#A1A1AA] text-xs"
                >
                  <Database className="w-4 h-4 text-[#FF9500] animate-pulse" />
                  <span>Persistindo transação no MySQL...</span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="response"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30 px-2 py-0.5 rounded text-[0.65rem] font-bold">200 OK</span>
                <span className="text-[#71717A] text-xs">142ms</span>
              </div>

              <div className="bg-[#050505] border border-[#1C1C20] rounded-lg p-4 text-xs text-[#9A9A9A] flex-1 overflow-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[#4D94FF]">{"{"}</span>
                  <div className="pl-4 py-1 flex flex-col gap-1">
                    <div><span className="text-[#71717A]">"status":</span> <span className="text-[#00C853]">"sucesso"</span>,</div>
                    <div><span className="text-[#71717A]">"id_transacao":</span> <span className="text-[#F5F5F5]">"TRX-8829103-BR"</span>,</div>
                    <div>
                      <span className="text-[#71717A]">"detalhes":</span> <span className="text-[#4D94FF]">{"{"}</span>
                      <div className="pl-4 flex flex-col gap-1">
                        <div><span className="text-[#71717A]">"mensagem":</span> <span className="text-[#F5F5F5]">"Transferência concluída"</span>,</div>
                        <div><span className="text-[#71717A]">"novo_saldo":</span> <span className="text-[#00C853]">8500.00</span></div>
                      </div>
                      <span className="text-[#4D94FF]">{"}"}</span>
                    </div>
                  </div>
                  <span className="text-[#4D94FF]">{"}"}</span>
                </motion.div>
                
                {/* Blinking cursor */}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-3 bg-[#A1A1AA] ml-1 mt-2"
                />
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
