import React, { useState, useEffect } from 'react';
import hero1 from '../assets/images/hero/hero1.webp';
import hero2 from '../assets/images/hero/hero2.jpg';
import hero3 from '../assets/images/hero/hero3.webp';
import hero4 from '../assets/images/hero/hero4.webp';

const Hero: React.FC = () => {
  const images = [hero1, hero2, hero3, hero4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrenotaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openChatbot', { 
      detail: { message: "Ciao, vorrei prenotare una prova gratuita" } 
    }));
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Images with sophisticated gradient overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
            role="img"
            aria-label={`Studenti di ballo che danzano presso Free Sport Life - Immagine ${index + 1}`}
            {...(index === 0 ? { 'data-fetchpriority': 'high' } : { 'data-loading': 'lazy' })}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 tracking-wide uppercase">
          Scuola di Ballo a Roma
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
        Free Sport Life <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
          (Danas Club)
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Un ambiente elegante dove riscoprire il piacere di muoversi.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#courses" 
            className="px-8 py-4 bg-white text-tango-dark font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            I Nostri Corsi
          </a>
          <button 
            onClick={handlePrenotaClick}
            className="px-8 py-4 bg-tango-red/90 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-tango-red transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Prenota una Prova
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;