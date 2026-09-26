import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, BookOpen, Brain, CheckCircle2, ChevronRight, XCircle, Flame, Lock } from 'lucide-react';

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
  const [streak, setStreak] = useState(0);

  const question = QUIZ_DATA[currentQuestion];

  const handleSelect = (id: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(id);
    
    // Simulate API/Validation delay for realistic app feel
    setTimeout(() => {
      setShowResult(true);
      if (id === question.correctAnswer) {
        setScore(prev => prev + 1);
        setStreak(prev => prev + 1);
      } else {
        setStreak(0);
      }
    }, 600);
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
      setStreak(0);
    }
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / QUIZ_DATA.length) * 100;

  return (
    <div className="w-full h-full min-h-[400px] bg-[#0A0A0C] border border-[#1C1C20] rounded-xl flex flex-col overflow-hidden font-sans relative select-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
      
      {/* Browser Bar */}
      <div className="w-full bg-[#141414] border-b border-[#1C1C20] px-4 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex gap-1.5 shrink-0 w-[60px]">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#22C55E]/80"></div>
        </div>
        
        <div className="flex-1 max-w-sm mx-auto bg-[#0A0A0C] border border-[#1C1C20] rounded-md py-1 px-3 text-center truncate flex items-center justify-center gap-1.5">
          <Lock className="w-2.5 h-2.5 text-[#71717A]" />
          <span className="text-[0.65rem] text-[#A1A1AA] font-mono truncate">
            app.biostudy.com.br/imunologia
          </span>
        </div>

        <div className="w-[60px] shrink-0"></div> {/* Spacer for balance */}
      </div>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Sidebar - Stats */}
        <div className="w-full md:w-56 bg-[#0A0A0C] border-b md:border-b-0 md:border-r border-[#1C1C20] p-5 flex flex-row md:flex-col gap-5 shrink-0 z-10 overflow-x-auto md:overflow-y-auto scrollbar-hide">
          <div className="hidden md:flex items-center gap-2.5 mb-2">
            <div className="bg-[#22C55E]/20 p-1.5 rounded-lg">
              <Activity className="w-5 h-5 text-[#22C55E]" />
            </div>
            <span className="font-bold text-[#F5F5F5] tracking-tight">BIOSTUDY</span>
          </div>
          
          <div className="flex flex-row md:flex-col gap-3 flex-1 min-w-min">
            <div className="bg-[#141414] border border-[#1C1C20] rounded-xl p-3.5 flex-1 md:flex-none">
              <div className="text-xs text-[#A1A1AA] mb-2 flex items-center gap-2">
                <div className="bg-blue-500/10 p-1 rounded-md">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <span className="font-medium uppercase tracking-wider text-[0.65rem]">Módulo</span>
              </div>
              <div className="text-sm font-bold text-[#E0E0E0] truncate">Imunologia</div>
            </div>

            <div className="bg-[#141414] border border-[#1C1C20] rounded-xl p-3.5 flex-1 md:flex-none">
              <div className="text-xs text-[#A1A1AA] mb-2 flex items-center gap-2">
                <div className="bg-purple-500/10 p-1 rounded-md">
                  <Brain className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="font-medium uppercase tracking-wider text-[0.65rem]">Pontuação</span>
              </div>
              <motion.div 
                key={score}
                initial={{ scale: 1.2, color: '#22C55E' }}
                animate={{ scale: 1, color: '#FFFFFF' }}
                className="text-xl font-bold"
              >
                {score}/{QUIZ_DATA.length}
              </motion.div>
            </div>
            
            <div className="bg-[#141414] border border-[#1C1C20] rounded-xl p-3.5 flex-1 md:flex-none">
              <div className="text-xs text-[#A1A1AA] mb-2 flex items-center gap-2">
                <div className="bg-orange-500/10 p-1 rounded-md">
                  <Flame className="w-3.5 h-3.5 text-orange-500" />
                </div>
                <span className="font-medium uppercase tracking-wider text-[0.65rem]">Sequência</span>
              </div>
              <div className="text-xl font-bold text-white flex items-center gap-1">
                {streak} <span className="text-xs font-normal text-[#71717A]">acertos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Quiz */}
        <div className="flex-1 flex flex-col bg-[#0A0A0C] relative overflow-y-auto">
          
          <div className="p-6 md:p-10 flex-1 flex flex-col max-w-3xl mx-auto w-full">
            
            {/* Progress Bar */}
            <div className="w-full bg-[#1C1C20] h-1.5 rounded-full overflow-hidden mb-8">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#22C55E] to-[#10B981]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🧬</span>
                    <span className="text-xs font-bold text-[#A1A1AA] tracking-wider uppercase">
                      Questão {currentQuestion + 1} <span className="text-[#3F3F46] mx-1">/</span> {QUIZ_DATA.length}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-[#F5F5F5] leading-snug">
                    {question.question}
                  </h3>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  {question.options.map((opt) => {
                    const isSelected = selectedAnswer === opt.id;
                    const isCorrect = opt.id === question.correctAnswer;
                    
                    let optStyle = "bg-[#141414] border-[#2A2A30] hover:bg-[#1C1C20] hover:border-[#3F3F46] text-[#A1A1AA] cursor-pointer active:scale-[0.99]";
                    let iconStyle = "bg-[#1C1C20] border border-[#2A2A30] text-[#E0E0E0]";
                    
                    if (selectedAnswer !== null && !showResult) {
                      // Waiting for validation
                      if (isSelected) {
                        optStyle = "bg-[#1C1C20] border-[#0066FF] text-[#F5F5F5] shadow-[0_0_15px_rgba(0,102,255,0.15)]";
                        iconStyle = "bg-[#0066FF] border-[#0066FF] text-white";
                      } else {
                        optStyle = "bg-[#0A0A0C] border-[#1C1C20] text-[#71717A] opacity-60 cursor-default";
                      }
                    } else if (showResult) {
                      if (isCorrect) {
                        optStyle = "bg-[#22C55E]/10 border-[#22C55E] text-[#F5F5F5] shadow-[0_0_20px_rgba(34,197,94,0.1)]";
                        iconStyle = "bg-[#22C55E] border-[#22C55E] text-white";
                      } else if (isSelected && !isCorrect) {
                        optStyle = "bg-[#EF4444]/10 border-[#EF4444] text-[#F5F5F5]";
                        iconStyle = "bg-[#EF4444] border-[#EF4444] text-white";
                      } else {
                        optStyle = "bg-[#0A0A0C] border-[#1C1C20] text-[#71717A] opacity-40 cursor-default";
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleSelect(opt.id)}
                        className={`flex items-center p-4 border rounded-xl transition-all duration-200 text-left relative overflow-hidden group ${optStyle}`}
                      >
                        <div className="flex-1 flex items-center gap-4 relative z-10">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${iconStyle}`}>
                            {opt.id}
                          </div>
                          <span className="text-sm md:text-base font-medium">
                            {opt.text}
                          </span>
                        </div>
                        
                        <AnimatePresence>
                          {showResult && isCorrect && (
                            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10">
                              <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                            </motion.div>
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10">
                              <XCircle className="w-5 h-5 text-[#EF4444]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-8 p-5 bg-[#141414] border border-[#2A2A30] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg"
                >
                  <div className="flex-1 text-sm text-[#A1A1AA] leading-relaxed">
                    <span className="font-bold text-[#F5F5F5] block mb-1">Explicação</span> 
                    {question.explanation}
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-full md:w-auto bg-[#F5F5F5] hover:bg-white active:scale-95 text-black px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all shrink-0"
                  >
                    {currentQuestion < QUIZ_DATA.length - 1 ? 'Próxima Questão' : 'Reiniciar Quiz'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
});

BioStudyDemo.displayName = 'BioStudyDemo';

