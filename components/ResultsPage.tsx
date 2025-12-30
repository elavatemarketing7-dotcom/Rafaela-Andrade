
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
      {/* Reduced Height Hero Photo area */}
      <div className="relative w-full h-[45vh] min-h-[300px] overflow-hidden flex-shrink-0">
        <img 
          src={IMAGES.hero} 
          alt={EXPERT_NAME} 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332] via-transparent to-transparent" />
        
        {/* Adjusted Position: Using top-[40%] to be slightly lower than previous [35%] */}
        <div className="absolute top-[40%] left-0 w-full px-6 text-center z-20">
          <div className="inline-block bg-[#d4af37] text-white px-3 py-1 rounded-full font-bold text-[10px] tracking-widest mb-2 shadow-lg animate-bounce uppercase border border-white/20">
            Perfil Compatível
          </div>
          <h1 className="text-white font-serif text-3xl font-bold leading-tight drop-shadow-md">
            Você é a <br/>
            <span className="italic">Paciente Ideal.</span>
          </h1>
        </div>
      </div>

      {/* Content Area - Flex-1 to fill remaining space */}
      <div className="bg-[#1b4332] w-full flex-1 flex flex-col justify-between px-6 pt-6 pb-6 rounded-t-[2.5rem] -mt-8 relative z-30 shadow-2xl text-center border-t border-white/10">
        <div className="max-w-sm mx-auto flex-1 flex flex-col justify-center">
          <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed">
            Com base nas suas respostas, o Método da <span className="text-[#d4af37] font-bold italic">Dra. {EXPERT_NAME}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>

          <div className="space-y-3 w-full">
            <button 
              onClick={sendToWhatsApp}
              className="w-full bg-[#d4af37] text-[#1b4332] font-black py-4 px-6 rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-transform text-base flex items-center justify-center gap-2 animate-pulse"
            >
              1. ENVIAR MINHA AVALIAÇÃO À DRA.
            </button>

            <button 
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
              className="w-full bg-white text-[#1b4332] font-bold py-3 px-6 rounded-xl shadow-md hover:bg-gray-100 transition-colors text-sm"
            >
              2. CHAMAR NO WHATSAPP SEM COMPROMISSO
            </button>

            <button 
              onClick={onContinue}
              className="w-full bg-transparent border border-white/20 text-white/50 font-medium py-2 px-6 rounded-xl hover:text-white transition-colors text-xs"
            >
              3. NÃO ENVIAR E CONTINUAR NO SITE
            </button>
          </div>
        </div>
        
        <div className="mt-4 opacity-40">
          <p className="font-signature text-2xl text-white tracking-widest">{EXPERT_NAME}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
