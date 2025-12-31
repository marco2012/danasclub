import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
      <div className="container mx-auto px-6">
        <div className="bg-tango-light rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Info Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-tango-dark mb-6 tracking-tight">Contattaci</h2>
              <p className="text-tango-gray mb-10 text-lg font-light leading-relaxed">
                Vieni a trovarci per una lezione di prova gratuita. <br />
                Siamo qui per rispondere a tutte le tue domande.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 group-hover:shadow-md transition-shadow">
                    <MapPin className="w-6 h-6 text-tango-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tango-dark text-lg">Sede</h4>
                    <a href={SCHOOL_INFO.mapsAddress} target="_blank" rel="noopener noreferrer" className="text-tango-gray hover:text-tango-red transition-colors">
                      {SCHOOL_INFO.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 group-hover:shadow-md transition-shadow">
                    <Phone className="w-6 h-6 text-tango-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tango-dark text-lg">Telefono</h4>
                    <a href={SCHOOL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-tango-gray hover:text-tango-red transition-colors">
                      {SCHOOL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 group-hover:shadow-md transition-shadow">
                    <Mail className="w-6 h-6 text-tango-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tango-dark text-lg">Email</h4>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-tango-gray hover:text-tango-red transition-colors">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 group-hover:shadow-md transition-shadow">
                    <Facebook className="w-6 h-6 text-tango-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tango-dark text-lg">Facebook</h4>
                    <a href={SCHOOL_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-tango-gray hover:text-tango-red transition-colors">
                      facebook.com/danasclub
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-4 rounded-2xl shadow-sm mr-6 group-hover:shadow-md transition-shadow">
                    <Instagram className="w-6 h-6 text-tango-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tango-dark text-lg">Instagram</h4>
                    <a href={SCHOOL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-tango-gray hover:text-tango-red transition-colors">
                      instagram.com/danasclub_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="h-[400px] lg:h-auto bg-gray-200">
              <iframe 
                src={SCHOOL_INFO.mapsUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mappa della sede Free sport life a Roma"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;