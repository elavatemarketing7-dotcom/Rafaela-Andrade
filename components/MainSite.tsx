
import React, { useState } from 'react';
import { EXPERT_NAME, EXPERT_ROLE, IMAGES, RESULTS_GALLERY, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';

const MainSite: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
        {/* Container da Imagem com Altura Adaptável */}
        <div className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top md:object-[center_20%] transition-transform duration-700 hover:scale-105"
          />
          {/* Camadas de Gradiente para profundidade e leitura */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent md:hidden" />
        </div>

        {/* Card de Conteúdo Flutuante */}
        <div className="px-6 -mt-24 md:-mt-48 relative z-10">
          <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 text-center max-w-2xl mx-auto transform transition-all">
            <div className="inline-block bg-[#1b4332] text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Exclusividade & Naturalidade
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1b4332] leading-tight mb-6">
              Eu sou Rafaela Andrade. <br/>
              <span className="text-gray-800 text-2xl md:text-3xl font-normal italic block mt-2">Realço sua beleza com essência.</span>
            </h1>
            
            <p className="text-gray-600 mb-8 text-base md:text-xl leading-relaxed max-w-lg mx-auto">
              Procedimentos de alta performance para mulheres que buscam resultados elegantes, seguros e personalizados.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={openWhatsApp}
                className="w-full bg-[#1b4332] text-white font-bold py-5 px-8 rounded-2xl shadow-[0_10px_20px_rgba(27,67,50,0.3)] hover:bg-[#2d5a45] transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Agendar consulta no WhatsApp
              </button>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Primeira avaliação sem compromisso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#d4af37] rounded-[3rem] rotate-3 scale-95 opacity-20 group-hover:rotate-0 transition-transform" />
            <img 
              src={IMAGES.authority1} 
              alt="Dra. Rafaela" 
              className="rounded-[3rem] shadow-2xl w-full object-cover relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1b4332] p-8 rounded-2xl hidden md:block animate-float z-20 border-4 border-white">
               <span className="text-white font-serif text-5xl font-bold">7+</span>
               <p className="text-white/80 text-[10px] font-black tracking-[0.2em] mt-1">ANOS DE EXPERIÊNCIA</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-[#d4af37] font-bold text-xs tracking-widest uppercase">Autoridade Pessoal</h3>
              <h2 className="text-[#1b4332] font-serif text-4xl md:text-5xl font-bold leading-tight">Excelência que <br/>vem do coração.</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Como {EXPERT_ROLE}, entendo que cada rosto conta uma história única. Minha abordagem técnica une ciência e arte para entregar a harmonia que você merece, sem perder sua identidade.
            </p>
            <ul className="space-y-4">
              {[
                "Protocolos de Rejuvenescimento Global",
                "Harmonização Facial Estratégica",
                "Bioestimuladores de Colágeno Premium",
                "Foco em Biossegurança e Pós-Luxo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-[#1b4332]/10 flex items-center justify-center text-[#1b4332] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS SECTION */}
      <section className="py-24 px-6 bg-[#faf9f6]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1b4332] mb-4 italic">Assinatura Rafaela Andrade</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 max-w-md mx-auto font-medium">Resultados reais de quem escolheu a naturalidade como prioridade.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {RESULTS_GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-[1.03] transition-transform duration-300 border-2 border-white bg-gray-200"
              onClick={() => setLightboxImg(img)}
            >
              <img 
                src={img} 
                alt="Resultado Estético" 
                className="w-full h-full object-cover" 
                onError={handleImageError}
              />
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-[10px] text-gray-400 font-medium uppercase tracking-widest px-10">
          *Os resultados são individuais e dependem de fatores genéticos e estilo de vida.
        </p>
      </section>

      {/* BASTIDORES SECTION */}
      <section className="py-24 px-6 bg-[#f0f4f2]">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <h3 className="text-[#1b4332] font-signature text-4xl mb-2">Biomédica de Coração 💚</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1b4332]">Além do consultório.</h2>
            </div>
            <p className="text-gray-500 md:max-w-xs text-sm">Acompanhe meu dia a dia focado em atualização constante e atendimento humanizado.</p>
         </div>
         <div className="flex gap-4 overflow-x-auto pb-10 snap-x no-scrollbar px-4">
            {[IMAGES.bio1, IMAGES.bio2, IMAGES.bio3, IMAGES.bio4, IMAGES.bio5, IMAGES.bio6, IMAGES.bio7].map((img, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl snap-center border-4 border-white relative group">
                <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={handleImageError} />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1b4332]/90 to-transparent">
                   <p className="text-white font-bold text-sm tracking-widest uppercase">Bastidores Rafaela Andrade</p>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* DIFERENCIAIS SECTION */}
      <section className="py-24 px-6 bg-[#1b4332]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Por que confiar sua beleza a mim?</h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Avaliação 360º", text: "Análise profunda da estrutura facial para um planejamento certeiro." },
            { title: "Segurança Absoluta", text: "Uso exclusivo de produtos liberados pela ANVISA e FDA." },
            { title: "Olhar Artístico", text: "Busca constante pela proporção áurea e beleza harmônica." },
            { title: "Atendimento VIP", text: "Agenda exclusiva para garantir tempo e atenção total a você." },
            { title: "Pós-Acompanhamento", text: "Suporte total após o procedimento para sua tranquilidade." },
            { title: "Privacidade", text: "Ambiente discreto no coração do Jardim Goiás." }
          ].map((card, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-[#d4af37] rounded-2xl mb-6 flex items-center justify-center text-[#1b4332] shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{card.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-white text-[#1b4332] font-black py-6 px-12 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          >
            Quero minha avaliação VIP
          </button>
        </div>
      </section>

      {/* JORNADA SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#1b4332] mb-4">Como funciona seu agendamento</h2>
            <p className="text-gray-500">Três passos simples para iniciar sua transformação.</p>
          </div>
          <div className="space-y-16">
            {[
              { step: "01", title: "Primeiro Contato", text: "Via WhatsApp, você fala com nossa equipe para entender suas necessidades iniciais." },
              { step: "02", title: "Consulta de Avaliação", text: "Presencialmente no Jardim Goiás, analisamos cada detalhe do seu perfil." },
              { step: "03", title: "Seu Momento", text: "Realização do procedimento com todo conforto, técnica e segurança necessários." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start group">
                <span className="text-6xl md:text-8xl font-serif font-black text-[#1b4332]/10 leading-none group-hover:text-[#d4af37]/20 transition-colors">{item.step}</span>
                <div className="pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-base md:text-xl leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center bg-[#faf9f6] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1b4332]/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1b4332] leading-tight">
            Pronta para ser <br/><span className="italic">sua melhor versão?</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-2xl max-w-xl mx-auto leading-relaxed">
            Restam poucas vagas para avaliações exclusivas este mês. Não deixe sua autoestima para depois.
          </p>
          <div className="pt-4">
            <button 
              onClick={openWhatsApp}
              className="bg-[#1b4332] text-white font-black py-7 px-16 rounded-3xl shadow-[0_20px_40px_rgba(27,67,50,0.3)] hover:scale-105 transition-all text-xl w-full sm:w-auto active:scale-95"
            >
              GARANTIR MEU HORÁRIO AGORA
            </button>
          </div>
          <p className="text-xs text-[#d4af37] font-black tracking-[0.3em] uppercase">
            Jardim Goiás, Goiânia - Safari Crossfit
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="font-signature text-7xl text-white mb-4">{EXPERT_NAME}</div>
          
          <div className="grid md:grid-cols-3 gap-12 w-full pt-12 border-t border-white/10">
            <div className="space-y-4">
              <h4 className="font-bold text-[#d4af37] text-xs uppercase tracking-widest">Localização</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Safari Crossfit - Av. E, 55 <br/>
                1 º Andar - Jardim Goiás <br/>
                Goiânia, GO
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#d4af37] text-xs uppercase tracking-widest">Redes Sociais</h4>
              <div className="flex justify-center gap-6">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white hover:text-[#d4af37] transition-colors font-semibold">Instagram</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-white hover:text-[#d4af37] transition-colors font-semibold">WhatsApp</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#d4af37] text-xs uppercase tracking-widest">Contato</h4>
              <p className="text-white/60 text-sm">Agendamentos exclusivos <br/> via WhatsApp</p>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 font-bold tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} {EXPERT_NAME}.</p>
            <p>Desenvolvido com sofisticação</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainSite;
