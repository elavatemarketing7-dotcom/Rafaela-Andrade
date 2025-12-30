
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

  // Efeito para gerenciar o scroll do body quando houver overlay
  useEffect(() => {
    if (currentView !== 'SITE') {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [currentView]);

  return (
    <div className="relative min-h-screen">
      {/* O Site Principal agora é a base, sempre renderizado para aparecer no fundo */}
      <MainSite />

      {/* Camada de Overlay (Escolha Inicial) */}
      {currentView === 'CHOICE' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 backdrop-blur-md p-6">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 relative overflow-hidden">
             {/* Efeito de brilho no topo do card */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1b4332] via-[#d4af37] to-[#1b4332]" />
             
            <div className="mb-6 pt-4">
              <img 
                src={IMAGES.hero} 
                alt={EXPERT_NAME} 
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#1b4332] shadow-xl animate-float"
              />
            </div>
            <h1 className="font-serif text-3xl font-bold mb-4 text-[#1b4332]">Bem-vinda!</h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
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
                className="w-full bg-white/80 border-2 border-[#1b4332] text-[#1b4332] font-semibold py-4 px-6 rounded-2xl hover:bg-[#1b4332] hover:text-white transition-all"
              >
                IR DIRETO PARA O SITE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Camada de Quiz */}
      {currentView === 'QUIZ' && (
        <Quiz onComplete={handleQuizComplete} onSkip={() => setCurrentView('SITE')} />
      )}

      {/* Camada de Resultado */}
      {currentView === 'RESULT' && (
        <div className="fixed inset-0 z-[110] bg-[#1b4332]">
          <ResultsPage answers={answers} onContinue={() => setCurrentView('SITE')} />
        </div>
      )}
    </div>
  );
};

export default App;
