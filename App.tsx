import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import { SCHOOL_INFO } from './constants';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Promo from './components/Promo';

const Schedule = lazy(() => import('./components/Schedule'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Chatbot = lazy(() => import('./components/Chatbot'));

const LoadingFallback = () => <div className="h-20 flex items-center justify-center text-tango-gray">Caricamento...</div>;

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Promo />
        <About />
        <Courses />
        <Suspense fallback={<LoadingFallback />}>
          <Schedule />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-tango-gray text-xs leading-relaxed">
              Affiliazione  <span className="font-bold text-tango-dark mr-1">Free Sport Life S.S.D. a R.L.</span>
              riconosciuta ai fini sportivi da EPS, ACSI e UISP. Ingresso e attività riservate ai tesserati.
            </p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-[10px] text-gray-300 uppercase tracking-widest">&copy; {new Date().getFullYear()} {SCHOOL_INFO.fullName} | <a href="http://marlup.top/?utm_source=danasclub" target="_blank" rel="noopener noreferrer">MarLup</a></p>
          </div>
        </div>
      </footer>

      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}

export default App;