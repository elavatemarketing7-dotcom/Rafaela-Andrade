
import React, { useState } from 'react';
import { EXPERT_NAME, EXPERT_ROLE, IMAGES, RESULTS_GALLERY, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';

const MainSite: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Oculta o card se a imagem falhar ao carregar
    (e.target as HTMLImageElement).parentElement?.style.setProperty('display', 'none');
  };

  return (
    <div className="relative overflow-hidden bg-[#faf9f6]">
      {/* Lightbox */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <img src={lightboxImg} className="max-w-full max-h-full rounded-lg shadow-2xl" />
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col pt-0 pb-16">
        <div className="relative w-full h-[70vh]">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-black/20" />
        </div>

        <div className="px-6 -mt-32 relative z-10">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/50 text-center max-w-xl mx-auto">
            <h2 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-4">Bem-vinda à sua nova versão</h2>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1b4332] leading-tight mb-6">
              Eu sou Rafaela Andrade. <br/>
              <span className="text-gray-800 text-3xl font-normal italic">E realço sua beleza com naturalidade.</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Minha missão é devolver sua autoestima através de procedimentos seguros, personalizados e com resultados que preservam sua identidade.
            </p>
            
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#1b4332] text-white font-bold py-5 px-8 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 mb-3"
            >
              Agendar consulta gratuita no WhatsApp
            </button>
            <span className="text-xs text-gray-400 font-medium">*Atendimento exclusivo e sem compromisso</span>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img 
              src={IMAGES.authority1} 
              alt="Dra. Rafaela" 
              className="rounded-[3rem] shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#d4af37] p-8 rounded-2xl hidden md:block animate-float">
               <span className="text-white font-serif text-4xl font-bold">7+</span>
               <p className="text-white/80 text-xs font-bold tracking-widest">ANOS DE EXPERIÊNCIA</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-[#1b4332] font-serif text-4xl font-bold">Excelência em cada detalhe.</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Como {EXPERT_ROLE}, acredito que a verdadeira beleza reside na harmonia. Meu trabalho é fruto de anos de estudo e dedicação à estética avançada, focado em pacientes que buscam exclusividade.
            </p>
            <ul className="space-y-4">
              {[
                "Avaliação facial 3D personalizada",
                "Produtos de altíssima qualidade (Linha Premium)",
                "Foco total em segurança e biossegurança",
                "Acompanhamento pós-procedimento exclusivo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#1b4332]/10 flex items-center justify-center text-[#1b4332]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS SECTION */}
      <section className="py-24 px-6 bg-[#faf9f6]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#1b4332] mb-4">Resultados que inspiram.</h2>
          <p className="text-gray-500 max-w-md mx-auto">O antes e depois de pacientes que confiaram no Método Rafaela Andrade.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {RESULTS_GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-[1.03] transition-transform duration-300 border-2 border-white"
              onClick={() => setLightboxImg(img)}
            >
              <img 
                src={img} 
                alt="Resultado" 
                className="w-full h-full object-cover" 
                onError={handleImageError}
              />
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-400 italic">
          *Atenção: Os resultados podem variar de acordo com o biotipo e fisiologia de cada paciente.
        </p>
      </section>

      {/* MAIS PROVAS (BASTIDORES) - MOVED HERE AS REQUESTED */}
      <section className="py-24 px-6 bg-[#f0f4f2]">
         <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-[#1b4332]">Biomédica de Coração 💚</h2>
            <p className="text-gray-500 mt-4">Bastidores e dia a dia de quem ama o que faz.</p>
         </div>
         <div className="flex gap-4 overflow-x-auto pb-10 snap-x no-scrollbar px-4">
            {[IMAGES.bio1, IMAGES.bio2, IMAGES.bio3, IMAGES.bio4, IMAGES.bio5, IMAGES.bio6, IMAGES.bio7].map((img, i) => (
              <div key={i} className="min-w-[280px] h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl snap-center border-4 border-white relative">
                <img src={img} className="w-full h-full object-cover" onError={handleImageError} />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                   <p className="text-white font-medium text-sm">Atendimento Personalizado</p>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* POR QUE CONFIAR SECTION */}
      <section className="py-24 px-6 bg-[#1b4332]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">O Diferencial de quem faz com ❤️</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Avaliação Honesta", text: "Só recomendo o que realmente trará benefícios visíveis para você." },
            { title: "Atendimento Humanizado", text: "Você não é apenas um número, é uma história que trato com respeito." },
            { title: "Técnicas Modernas", text: "Uso o que há de mais avançado no mundo da estética facial." },
            { title: "Foco na Naturalidade", text: "O objetivo é que ninguém saiba o que você fez, apenas que você está melhor." },
            { title: "Segurança Total", text: "Protocolos rigorosos para garantir sua saúde em primeiro lugar." },
            { title: "Ambiente Premium", text: "Espaço pensado para seu conforto e privacidade total." }
          ].map((card, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center">
              <div className="w-12 h-12 bg-[#d4af37] rounded-2xl mx-auto mb-6 flex items-center justify-center text-[#1b4332]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-white/70">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-[#d4af37] text-[#1b4332] font-bold py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            Quero minha avaliação personalizada
          </button>
        </div>
      </section>

      {/* COMO FUNCIONA SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-[#1b4332] text-center mb-16">Sua jornada até a transformação</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Contato via WhatsApp", text: "Clique em qualquer botão aqui do site e fale direto com minha equipe." },
              { step: "02", title: "Agendamento da Consulta", text: "Escolha o melhor horário para nossa primeira conversa." },
              { step: "03", title: "Avaliação e Procedimento", text: "No dia marcado, faremos sua avaliação 3D e daremos o primeiro passo." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-5xl font-serif font-bold text-[#1b4332]/20 leading-none">{item.step}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-5xl font-bold text-[#1b4332] leading-tight">
            Pronta para elevar sua autoestima?
          </h2>
          <p className="text-gray-600 text-xl">
            Clique no botão abaixo e garanta seu horário para uma avaliação que vai mudar a forma como você se vê no espelho.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-[#1b4332] text-white font-bold py-6 px-12 rounded-3xl shadow-2xl hover:scale-105 transition-transform text-xl w-full sm:w-auto"
          >
            AGENDAR MINHA CONSULTA AGORA
          </button>
          <p className="text-sm text-[#d4af37] font-bold tracking-widest uppercase">
            Atendimento exclusivo no Jardim Goiás
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="font-signature text-6xl text-[#1b4332]">{EXPERT_NAME}</div>
          <div className="space-y-2 text-gray-500">
            <p className="font-bold text-gray-800">{EXPERT_ROLE}</p>
            <p>Safari Crossfit - Av. E, 55 - 1 º Andar - Jardim Goiás, Goiânia, Brazil</p>
          </div>
          <div className="flex justify-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-[#1b4332] font-bold hover:underline">Instagram</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-[#1b4332] font-bold hover:underline">WhatsApp</a>
          </div>
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainSite;
