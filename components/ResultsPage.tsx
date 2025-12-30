
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { QuizAnswer } from '../types';

interface ResultsPageProps {
  answers: QuizAnswer[];
  onContinue: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ answers, onContinue }) => {
  const formatAnswers = () => {
    return answers.map(a => `*${a.question}*\n- ${a.answer}`).join('\n\n');
  };

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(`Olá Dra. ${EXPERT_NAME}, acabei de realizar meu quiz de perfil e gostaria de uma avaliação personalizada!\n\nMeus resultados:\n\n${formatAnswers()}`);
    window.open(`${WHATSAPP_URL}${text}`, '_blank');
  };

  return (
    <div className="h-screen flex flex-col bg-[#1b4332] overflow-hidden">
      {/* Hero Photo area com enquadramento otimizado */}
      <div className="relative w-full h-[50vh] overflow-hidden flex-shrink-0">
        <img 
          src={IMAGES.hero} 
          alt={EXPERT_NAME} 
          className="w-full h-full object-cover object-top md:object-[center_20%]"
        />
        
        {/* Camadas de Overlay para legibilidade premium */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332] via-[#1b4332]/20 to-transparent" />
        
        {/* Conteúdo flutuante sobre a imagem */}
        <div className="absolute bottom-10 left-0 w-full px-6 text-center z-20">
          <div className="inline-block bg-[#d4af37] text-[#1b4332] px-4 py-1.5 rounded-full font-black text-[10px] tracking-[0.2em] mb-4 shadow-xl animate-bounce uppercase">
            Perfil Compatível
          </div>
          <h1 className="text-white font-serif text-4xl font-bold leading-tight drop-shadow-2xl">
            Você é a <br/>
            <span className="italic text-[#d4af37]">Paciente Ideal.</span>
          </h1>
        </div>
      </div>

      {/* Area de Ação - Compacta para Mobile */}
      <div className="bg-[#1b4332] w-full flex-1 flex flex-col justify-between px-6 pt-10 pb-8 rounded-t-[3rem] -mt-10 relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] text-center border-t border-white/10">
        <div className="max-w-sm mx-auto flex-1 flex flex-col justify-start">
          <p className="text-white/90 text-sm md:text-lg mb-8 leading-relaxed">
            Com base no seu perfil, o Método da <span className="text-[#d4af37] font-bold italic">Dra. {EXPERT_NAME}</span> é a solução perfeita para entregar a naturalidade que você deseja.
          </p>

          <div className="space-y-4 w-full">
            <button 
              onClick={sendToWhatsApp}
              className="w-full bg-[#d4af37] text-[#1b4332] font-black py-5 px-6 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-95 transition-all text-base flex items-center justify-center gap-2 animate-pulse"
            >
              1. ENVIAR AVALIAÇÃO À DRA.
            </button>

            <button 
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
              className="w-full bg-white/10 border border-white/20 text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:bg-white/20 transition-all text-sm"
            >
              2. WHATSAPP SEM COMPROMISSO
            </button>

            <button 
              onClick={onContinue}
              className="w-full bg-transparent text-white/40 font-bold py-2 px-6 rounded-xl hover:text-white transition-colors text-[10px] uppercase tracking-widest"
            >
              3. CONTINUAR NO SITE
            </button>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="font-signature text-3xl text-white/20">{EXPERT_NAME}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
