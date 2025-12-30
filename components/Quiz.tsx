
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#faf9f6]">
      {/* Name and Floating Photo */}
      <div className="absolute top-8 text-center w-full px-6">
        <div className="relative inline-block">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl mb-2 animate-float mx-auto"
          />
          <div className="bg-[#1b4332] text-white text-[10px] font-bold px-2 py-1 rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap uppercase tracking-wider">
            Sua Especialista
          </div>
        </div>
        <h2 className="font-signature text-3xl text-[#1b4332] mt-4">{EXPERT_NAME}</h2>
      </div>

      <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-2xl relative mt-20 border border-gray-100">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 rounded-t-full overflow-hidden">
          <div 
            className="h-full bg-[#1b4332] transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4">
          <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            Pergunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <h3 className="text-2xl font-serif font-bold text-gray-800 mt-2 mb-8 leading-tight">
            {QUIZ_QUESTIONS[currentIndex].text}
          </h3>

          <div className="space-y-4">
            {QUIZ_QUESTIONS[currentIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:border-[#1b4332] hover:bg-[#1b4332]/5 transition-all group active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium group-hover:text-[#1b4332]">{option}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#1b4332]">
                    <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#1b4332]" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={onSkip}
          className="mt-8 text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors w-full text-center"
        >
          Pular avaliação e ir para o site
        </button>
      </div>
    </div>
  );
};

export default Quiz;
