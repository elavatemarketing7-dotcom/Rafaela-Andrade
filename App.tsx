
import React, { useState, useEffect } from 'react';
import { AppState, QuizAnswer } from './types';
import Quiz from './components/Quiz';
import ResultsPage from './components/ResultsPage';
import MainSite from './components/MainSite';
import { EXPERT_NAME, IMAGES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppState>('CHOICE');
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleChoice = (choice: 'QUIZ' | 'SITE') => {
    setCurrentView(choice);
  };

  const handleQuizComplete = (finalAnswers: QuizAnswer[]) => {
    setAnswers(finalAnswers);
    setCurrentView('RESULT');
  };

  // Choice View is an overlay on top of the hero logic or a clean intro
  if (currentView === 'CHOICE') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border-t-4 border-[#1b4332]">
          <div className="mb-6">
            <img 
              src={IMAGES.hero} 
              alt={EXPERT_NAME} 
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#1b4332] shadow-lg animate-float"
            />
          </div>
          <h1 className="font-serif text-3xl font-bold mb-4 text-[#1b4332]">Bem-vinda!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Para uma experiência personalizada com a <strong>Dra. {EXPERT_NAME}</strong>, como deseja prosseguir?
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => handleChoice('QUIZ')}
              className="w-full bg-[#1b4332] text-white font-bold py-5 px-6 rounded-2xl shadow-xl hover:scale-105 transition-transform active:scale-95 text-lg"
            >
              FAZER AVALIAÇÃO PERSONALIZADA
            </button>
            <button 
              onClick={() => handleChoice('SITE')}
              className="w-full bg-transparent border-2 border-[#1b4332] text-[#1b4332] font-semibold py-4 px-6 rounded-2xl hover:bg-[#1b4332]/5 transition-colors"
            >
              IR DIRETO PARA O SITE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {currentView === 'QUIZ' && (
        <Quiz onComplete={handleQuizComplete} onSkip={() => setCurrentView('SITE')} />
      )}
      {currentView === 'RESULT' && (
        <ResultsPage answers={answers} onContinue={() => setCurrentView('SITE')} />
      )}
      {currentView === 'SITE' && (
        <MainSite />
      )}
    </div>
  );
};

export default App;
