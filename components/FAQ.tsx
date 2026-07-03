import React from 'react';

const FAQS = [
  {
    question: 'Dove si trova la scuola di ballo?',
    answer: "Free Sport Life (Dana's Club) si trova in Via Giovanni Battista de Rossi 48, a Roma, vicino Piazza Bologna.",
    link: { label: 'Vedi su Google Maps', url: 'https://share.google/c5fSljDxRgpOQDKGA' }
  },
  {
    question: 'Che corsi di ballo offrite?',
    answer: 'Tango Argentino, Liscio, Danze Standard, Balli Caraibici, Balli di Gruppo e Coreografico, per adulti di ogni livello.'
  },
  {
    question: 'Le lezioni sono adatte anche a chi non ha mai ballato?',
    answer: 'Sì, i corsi accolgono principianti assoluti e livelli avanzati: ogni corso è organizzato per livello di esperienza.'
  },
  {
    question: 'Quando si svolgono i corsi?',
    answer: 'Le lezioni si svolgono nelle sere infrasettimanali, con orari organizzati su più giorni per venire incontro ai tuoi impegni.'
  },
  {
    question: 'Come posso prenotare una lezione di prova?',
    answer: 'Puoi contattarci al 347 687 3085 o via WhatsApp per prenotare una prova gratuita.'
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-tango-light scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-tango-red font-semibold tracking-wider uppercase text-sm mb-2 block">
            Domande frequenti
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-tango-dark tracking-tight leading-tight">
            Le domande più frequenti
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-apple">
              <h3 className="text-lg font-bold text-tango-dark mb-2">{faq.question}</h3>
              <p className="text-tango-gray leading-relaxed">{faq.answer}</p>
              {faq.link && (
                <a
                  href={faq.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-tango-red font-semibold hover:underline"
                >
                  {faq.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
