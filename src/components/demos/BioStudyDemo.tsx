import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, BookOpen, Brain, CheckCircle2, ChevronRight, XCircle } from 'lucide-react';

const QUIZ_DATA = [
  {
    question: "Qual das seguintes células é responsável primariamente pela fagocitose de bactérias no sistema imune inato?",
    options: [
      { id: 'A', text: 'Linfócitos T' },
      { id: 'B', text: 'Neutrófilos' },
      { id: 'C', text: 'Eritrócitos' },
      { id: 'D', text: 'Basófilos' }
    ],
    correctAnswer: 'B',
    explanation: 'Os neutrófilos são os primeiros fagócitos a chegar ao local da infecção e são essenciais na defesa inata contra bactérias.'
  },
  {
    question: "Qual organela celular é considerada a principal responsável pela produção de ATP em células eucarióticas?",
    options: [
      { id: 'A', text: 'Complexo de Golgi' },
      { id: 'B', text: 'Lisossomo' },
      { id: 'C', text: 'Mitocôndria' },
      { id: 'D', text: 'Retículo Endoplasmático Liso' }
    ],
    correctAnswer: 'C',
    explanation: 'A mitocôndria realiza a respiração celular e é o principal local de produção de ATP, a moeda energética da célula.'
  }
];

export const BioStudyDemo = React.memo(() => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = QUIZ_DATA[currentQuestion];

  const handleSelect = (id: string) => {
    if (showResult) return;
    setSelectedAnswer(id);
    setShowResult(true);
    if (id === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_DATA.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Reset quiz
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
    }
  };

  const progress = ((currentQuestion) / QUIZ_DATA.length) * 100;

  return (
    <div className="w-full h-full min-h-[350px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col md:flex-row overflow-hidden font-sans relative select-none">
      
      {/* Sidebar - Stats */}
      <div className="w-full md:w-48 bg-[#141414] border-b md:border-b-0 md:border-r border-[#1C1C20] p-4 flex flex-row md:flex-col gap-4">
        <div className="flex items-center gap-2 mb-2 md:mb-6">
          <Activity className="w-5 h-5 text-[#22C55E]" />
          <span className="font-bold text-[#F5F5F5] tracking-tight">BIOSTUDY</span>
        </div>
        
        <div className="flex flex-row md:flex-col gap-3 flex-1">
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-lg p-3 flex-1 md:flex-none">
            <div className="text-xs text-[#A1A1AA] mb-1 flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" />
              <span>Pontuação</span>
            </div>
            <div className="text-xl font-bold text-white">{score}/{QUIZ_DATA.length}</div>
          </div>
          
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-lg p-3 flex-1 md:flex-none">
            <div className="text-xs text-[#A1A1AA] mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Módulo</span>
            </div>
            <div className="text-sm font-medium text-[#E0E0E0]">Imunologia</div>
          </div>
        </div>
      </div>

      {/* Main Content - Quiz */}
      <div className="flex-1 flex flex-col">
        {/* Top Progress */}
        <div className="w-full h-1.5 bg-[#1C1C20]">
          <motion.div 
            className="h-full bg-[#22C55E]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-6">
                <span className="text-xs font-mono text-[#22C55E] tracking-wider mb-2 block">
                  QUESTÃO {currentQuestion + 1} DE {QUIZ_DATA.length}
                </span>
                <h3 className="text-lg md:text-xl font-medium text-[#F5F5F5] leading-relaxed">
                  {question.question}
                </h3>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {question.options.map((opt) => {
                  const isSelected = selectedAnswer === opt.id;
                  const isCorrect = opt.id === question.correctAnswer;
                  
                  let optStyle = "bg-[#141414] border-[#1C1C20] hover:border-[#3F3F46] text-[#A1A1AA]";
                  
                  if (showResult) {
                    if (isCorrect) {
                      optStyle = "bg-[#22C55E]/10 border-[#22C55E] text-[#22C55E]";
                    } else if (isSelected && !isCorrect) {
                      optStyle = "bg-[#EF4444]/10 border-[#EF4444] text-[#EF4444]";
                    } else {
                      optStyle = "bg-[#141414] border-[#1C1C20] text-[#71717A] opacity-50";
                    }
                  } else if (isSelected) {
                    optStyle = "bg-[#2A2A30] border-[#3F3F46] text-[#F5F5F5]";
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={showResult}
                      onClick={() => handleSelect(opt.id)}
                      className={`flex items-center p-4 border rounded-xl transition-all duration-200 text-left ${optStyle}`}
                    >
                      <div className="flex-1 flex items-center gap-3">
                        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${showResult && isCorrect ? 'bg-[#22C55E] text-white' : showResult && isSelected && !isCorrect ? 'bg-[#EF4444] text-white' : 'bg-[#1C1C20] text-[#E0E0E0]'}`}>
                          {opt.id}
                        </div>
                        <span className={`text-sm md:text-base ${showResult && isCorrect ? 'text-[#F5F5F5] font-medium' : ''}`}>
                          {opt.text}
                        </span>
                      </div>
                      
                      {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-[#EF4444]" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-4 border-t border-[#1C1C20] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex-1 text-sm text-[#A1A1AA]">
                <span className="font-semibold text-[#F5F5F5]">Explicação:</span> {question.explanation}
              </div>
              <button
                onClick={handleNext}
                className="w-full md:w-auto bg-[#F5F5F5] hover:bg-white text-black px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                {currentQuestion < QUIZ_DATA.length - 1 ? 'Próxima Questão' : 'Reiniciar Quiz'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
});

BioStudyDemo.displayName = 'BioStudyDemo';
