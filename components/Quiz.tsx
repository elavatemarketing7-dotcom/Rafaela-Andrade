
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_NAME } from '../constants';
import { QuizAnswer } from '../types';

interface QuizProps {
  onComplete: (answers: QuizAnswer[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onSkip }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, { question: QUIZ_QUESTIONS[currentIndex].text, answer: option }];
    setAnswers(newAnswers);
    
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[105] flex flex-col items-center justify-center p-4 bg-white/20 backdrop-blur-[8px]">
      {/* Header do Quiz (Sempre visível) */}
      <div className="absolute top-6 text-center w-full px-6 pointer-events-none">
        <div className="relative inline-block">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-xl mb-1 animate-float mx-auto"
          />
          <div className="bg-[#1b4332] text-white text-[8px] font-bold px-2 py-0.5 rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap uppercase tracking-wider">
            Dra. Rafaela
          </div>
        </div>
        <h2 className="font-signature text-2xl text-[#1b4332] mt-2 drop-shadow-sm">{EXPERT_NAME}</h2>
      </div>

      <div className="w-full max-w-sm bg-white rounded-[2.5rem] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] relative mt-12 border border-white/50">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 rounded-t-full overflow-hidden">
          <div 
            className="h-full bg-[#1b4332] transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">
              Avaliação Exclusiva
            </span>
            <span className="text-[10px] font-bold text-gray-400">
              {currentIndex + 1} / {QUIZ_QUESTIONS.length}
            </span>
          </div>
          
          <h3 className="text-xl font-serif font-bold text-[#1b4332] mb-6 leading-tight">
            {QUIZ_QUESTIONS[currentIndex].text}
          </h3>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-50 bg-gray-50/50 hover:border-[#1b4332] hover:bg-[#1b4332]/5 transition-all group active:scale-[0.97]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-semibold text-sm group-hover:text-[#1b4332]">{option}</span>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#1b4332] shrink-0">
                    <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#1b4332]" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={onSkip}
          className="mt-6 text-gray-400 text-[11px] font-bold hover:text-[#1b4332] transition-colors w-full text-center uppercase tracking-tighter"
        >
          Pular e ir para o site principal
        </button>
      </div>
      
      {/* Rodapé discreto do Quiz */}
      <div className="mt-8 text-white text-[10px] font-medium tracking-widest uppercase bg-[#1b4332]/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
        Sua beleza, minha prioridade.
      </div>
    </div>
  );
};

export default Quiz;
