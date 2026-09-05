import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle2 } from 'lucide-react';

export const BankingDemo: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);

  const handleRequest = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 1200);
  };

  const reset = () => setStep(0);

  return (
    <div className="w-full h-full min-h-[300px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col font-mono text-sm overflow-hidden">
      {/* Fake window header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1C1C20] bg-[#050505]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#71717A]" />
          <span className="text-[#71717A] text-xs">POST /transacoes/deposito</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
      </div>

      <div className="p-5 flex flex-col gap-4 flex-1">
        
        {/* Request Block */}
        <div className="flex flex-col gap-2">
          <span className="text-[#4D94FF] text-xs font-semibold">REQUEST</span>
          <div className="bg-[#050505] border border-[#1C1C20] p-3 rounded-lg text-[#A1A1AA]">
            <pre className="m-0">
{`{
  "contaId": 1,
  "valor": 500.00
}`}
            </pre>
          </div>
        </div>

        {/* Action Button */}
        {step === 0 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleRequest}
            className="mt-2 flex items-center justify-center gap-2 w-full bg-[#0066FF] hover:bg-[#1A75FF] text-white py-2.5 rounded-md transition-colors"
          >
            <Send className="w-4 h-4" />
            Enviar Requisição
          </motion.button>
        )}

        {/* Loading / Response */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 text-[#71717A] py-2"
            >
              <div className="w-4 h-4 border-2 border-[#0066FF] border-t-transparent rounded-full animate-spin" />
              <span>Processando transação com Spring Security...</span>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="response"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[#00C853] text-xs font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> RESPONSE 200 OK
                </span>
                <button onClick={reset} className="text-[#71717A] text-xs hover:text-[#F5F5F5] underline">
                  Reiniciar
                </button>
              </div>
              <div className="bg-[#050505] border border-[#00C853]/20 p-3 rounded-lg text-[#E0E0E0]">
                <pre className="m-0">
{`{
  "status": "SUCESSO",
  "mensagem": "Depósito realizado com sucesso.",
  "comprovante": "TXN-98234-A1B",
  "novoSaldo": 1250.00
}`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
