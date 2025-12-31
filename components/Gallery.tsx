import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="text-tango-red font-semibold tracking-wider uppercase text-sm mb-2 block">
              I nostri momenti
            </span>
            <h2 className="text-4xl font-bold text-tango-dark tracking-tight">Galleria</h2>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="https://www.instagram.com/danasclub_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tango-dark font-medium hover:text-tango-red transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/danasclub/photos_albums" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tango-dark font-medium hover:text-tango-red transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a 
              href="https://www.youtube.com/channel/UCGZBjPF7vTxsTTDOdxcYFGA/videos" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tango-dark font-medium hover:text-tango-red transition-colors"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
          </div>
        </div>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: false,
          }}
          closable={true}
          showCloseIcon={true}
        >
          {GALLERY_IMAGES.map((src, index) => (
            <a
              key={index}
              href={src}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer aspect-square ${index >= 5 ? 'hidden md:block' : 'block'}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img 
                src={src} 
                alt={`Momento Dana's Club ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width="600"
                height="800"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-tango-dark text-xs font-bold rounded-full">
                  Dana's Club
                </span>
              </div>
            </a>
          ))}
        </LightGallery>

        {/* Spettacoli di Ballo Section */}
        <div className="mt-20">
          <div className="text-left mb-10">
            <span className="text-tango-red font-semibold tracking-wider uppercase text-sm mb-2 block">
              Le nostre produzioni
            </span>
            <h3 className="text-3xl font-bold text-tango-dark tracking-tight">Spettacoli di Ballo</h3>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Ogni anno, alla fine del ciclo di insegnamento, organizziamo uno spettacolo di ballo che coinvolge tutti i nostri allievi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chi dice Donna... dice Ballo 4",
                date: "26/05/2024",
                video: "https://www.youtube.com/watch?v=HMqQpBJMSWM",
                foto: "https://www.facebook.com/media/set/?set=a.938814324825812"
              },
              {
                title: "Chi dice Donna... dice Ballo 3",
                date: "11/03/2023",
                video: "https://www.youtube.com/watch?v=HMqQpBJMSWM",
                foto: "https://www.facebook.com/media/set/?vanity=danasclub&set=a.669593991747848"
              },
              {
                title: "Chi dice Donna... dice Ballo 2",
                date: "12/06/2022",
                video: "https://www.youtube.com/watch?v=HMqQpBJMSWM",
                foto: "https://www.facebook.com/media/set/?set=a.489594019747847&type=3"
              },
              {
                title: "Chi dice Donna... dice Ballo",
                date: "16/06/2019",
                video: "https://www.youtube.com/watch?v=8kwoACfFcIU",
                foto: "https://www.facebook.com/media/set/?set=a.2469574986486701&type=3"
              },
              {
                title: "Ma che musical Maestro",
                date: "26/06/2016",
                video: "https://www.facebook.com/watch/?v=916210751823140",
                foto: "https://www.facebook.com/media/set/?set=a.938714779572737&type=3"
              },
              {
                title: "Saggio 2014",
                date: "26/06/2014",
                video: "https://www.facebook.com/watch/?v=651661474944737",
                foto: null
              }
            ].map((spettacolo, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-tango-dark mb-1">{spettacolo.title}</h4>
                <p className="text-tango-red text-sm font-medium mb-4">{spettacolo.date}</p>
                <div className="flex gap-3">
                  {spettacolo.video && (
                    <a 
                      href={spettacolo.video} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-tango-dark text-white rounded-xl font-bold hover:bg-tango-red transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Youtube className="w-5 h-5" />
                      Video
                    </a>
                  )}
                  {spettacolo.foto && (
                    <a 
                      href={spettacolo.foto} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-tango-dark rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Facebook className="w-5 h-5" />
                      Foto
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;