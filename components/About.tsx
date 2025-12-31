import React from 'react';
import { INSTRUCTORS } from '../constants';
import aboutImg from '../assets/images/about.webp';
import AnimatedCounter from './AnimatedCounter';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full bg-tango-light rounded-3xl -z-10"></div>
            <img 
              src={aboutImg} 
              alt="Elegante sala da ballo Dana's Club a Roma vicino Piazza Bologna" 
              className="w-full aspect-square rounded-3xl shadow-apple object-cover"
              loading="lazy"
              width="1000"
              height="1000"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-tango-red font-semibold tracking-wider uppercase text-sm mb-2 block">
              La nostra storia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-tango-dark mb-8 tracking-tight leading-tight">
              Dal 2009, passione <br />
              <span className="text-gray-400">sulla pista da ballo.</span>
            </h2>
            
            <div className="space-y-6 text-tango-dark text-lg font-normal leading-relaxed text-gray-900">
              <p>
                Free Sport Life (Dana's Club), situata vicino Piazza Bologna a Roma, offre ballo e sport dal 2009.
                Corsi di tango argentino, balli di gruppo, liscio, standard, latino americano, coreografico per tutte le età e livelli.
                Gare e competizioni sportive.
              </p>
              
              {/* <div className="pt-6 border-t border-gray-100">
                <span className="text-tango-red font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Affiliazione
                </span>
                <h4 className="font-bold text-tango-dark mb-2">Free Sport Life S.S.D.</h4>
                <p className="text-base">
                  Società Sportiva Dilettantistica A Responsabilità Limitata riconosciuta ai fini sportivi dagli enti di promozione sportiva EPS, ACSI e UISP. Ingresso e attività riservate ai tesserati.
                </p>
              </div> */}

            </div>

            <div className="mt-12 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center lg:items-start transition-all hover:shadow-lg duration-300">
                <span className="block text-5xl font-bold text-tango-red mb-2 tracking-tighter">
                  <AnimatedCounter value={2009} />
                </span>
                <span className="text-xs font-bold text-tango-gray uppercase tracking-[0.2em]">Anno fondazione</span>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center lg:items-start transition-all hover:shadow-lg duration-300">
                <span className="block text-5xl font-bold text-tango-red mb-2 tracking-tighter">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <span className="text-xs font-bold text-tango-gray uppercase tracking-[0.2em]">Allievi felici</span>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center lg:items-start transition-all hover:shadow-lg duration-300 sm:col-span-2 lg:col-span-1">
                <span className="block text-5xl font-bold text-tango-red mb-2 tracking-tighter">
                  <AnimatedCounter value={7} />
                </span>
                <span className="text-xs font-bold text-tango-gray uppercase tracking-[0.2em]">Corsi attivi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Instructors Section integrated into About */}
        <div id="instructors" className="mt-6 pt-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-tango-dark mb-4 tracking-tight">I Nostri Maestri</h3>
            <p className="text-tango-gray text-lg max-w-2xl mx-auto font-light">
              Passione e professionalità al vostro servizio.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {INSTRUCTORS.map((instructor) => (
              <div key={instructor.id} className="bg-tango-light rounded-3xl overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-300 max-w-md w-full flex flex-col md:flex-row md:items-center p-6 md:p-0 group">
                <div className="w-48 h-48 flex-shrink-0 relative overflow-hidden rounded-full mx-auto md:ml-4">
                  <img 
                    src={instructor.image} 
                    alt={`${instructor.role} ${instructor.name} - Insegnante di ballo presso Dana's Club`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
                <div className="p-6 md:p-10 flex-1">
                  <h4 className="text-2xl font-bold text-tango-dark mb-1">{instructor.name}</h4>
                  <p className="text-tango-red font-medium text-sm mb-4 tracking-wide uppercase">{instructor.role}</p>
                  <p className="text-tango-gray leading-relaxed text-sm">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;