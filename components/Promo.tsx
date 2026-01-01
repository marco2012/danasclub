import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import promoImg from '../assets/images/promo.webp';

const Promo: React.FC = () => {
  const handlePrenotaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openChatbot', { 
      detail: { message: "Ciao, vorrei prenotare una prova gratuita" } 
    }));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-tango-dark rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-tango-red opacity-20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-900 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 border border-white/10">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Offerta Speciale</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Inizia a ballare oggi. <br />
                <span className="text-tango-red">La prima lezione è gratis.</span>
              </h2>
              {new Date() <= new Date('2026-01-31') && (
                <p className="text-white text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                  Corso di Tango e Milonga per principianti.<br/>
                  Lezione di prova <strong>12 gennaio 2026</strong> ore <strong>20:30</strong>.
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handlePrenotaClick}
                  className="px-8 py-4 bg-tango-red text-white font-bold rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Prenota la tua Prova
                </button>
                <div className="flex items-center gap-2 text-white/80 px-6 py-4">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">Offerta valida fino al {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block lg:w-1/3">
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src={promoImg} 
                  alt="Coppia che balla" 
                  className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;