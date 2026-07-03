import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHOOL_INFO } from '../constants';
import logo from '../assets/images/logo.webp';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('openChatbot', { 
      detail: { message: "Vorrei prenotare una prova gratuita" } 
    }));
  };

  const navItems = [
    { label: 'Chi Siamo', href: '#about' },
    { label: 'Corsi', href: '#courses' },
    { label: 'Orari', href: '#schedule' },
    { label: 'Recensioni', href: '#reviews' },
    { label: 'Galleria', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contatti', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        duration: 0.2
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.25
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10, transition: { duration: 0.15 } },
    opened: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-white/70 shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      style={(scrolled || isOpen) ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src={logo} 
            alt="Free Sport Life Logo" 
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`transition-colors duration-300 ${scrolled || isOpen ? 'text-tango-dark' : 'text-white'}`}>
            <p className="text-xl font-bold tracking-tight">
              Free Sport Life
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 ${
                scrolled 
                  ? 'text-tango-dark hover:text-tango-red' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={handleOpenChat}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              scrolled 
                ? 'bg-tango-red text-white hover:bg-tango-dark' 
                : 'bg-white text-tango-red hover:bg-tango-light'
            }`}
          >
            Prenota Ora
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
            scrolled || isOpen 
              ? 'text-tango-dark bg-gray-100/50' 
              : 'text-white bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            initial={false}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-t border-gray-100 shadow-2xl h-[calc(100vh-73px)] overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 space-y-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  className="text-tango-dark hover:text-tango-red text-3xl font-bold tracking-tight transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                onClick={handleOpenChat}
                className="mt-8 px-10 py-4 bg-tango-red text-white text-xl font-bold rounded-full shadow-lg shadow-tango-red/20 active:scale-95 transition-transform"
              >
                Prenota una prova
              </motion.button>
              
              <motion.div 
                variants={itemVariants}
                className="absolute bottom-12 text-center text-tango-gray"
              >
                <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} {SCHOOL_INFO.fullName} | <a href="http://marlup.top/?utm_source=danasclub" target="_blank" rel="noopener noreferrer">MarLup</a></p>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;