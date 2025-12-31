import React, { useState, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { SCHOOL_INFO } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleOpenChat = (e: any) => {
      setIsOpen(true);
      if (e.detail?.message) {
        setInput(e.detail.message);
      }
    };

    window.addEventListener('openChatbot', handleOpenChat);
    return () => window.removeEventListener('openChatbot', handleOpenChat);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const phoneNumber = SCHOOL_INFO.phone.replace(/\s/g, '');
    const encodedMessage = encodeURIComponent(input);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setInput('');
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-apple-hover transition-all duration-300 ${
          isOpen 
            ? 'bg-tango-dark rotate-90 scale-90' 
            : 'bg-[#25D366] hover:scale-105 active:scale-95'
        }`}
        aria-label="Apri chat WhatsApp"
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <SiWhatsapp className="text-white w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 md:right-8 w-[90vw] md:w-96 bg-white rounded-3xl shadow-2xl z-40 flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-[#075E54] p-5 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <SiWhatsapp className="text-white w-6 h-6" />
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-[#075E54]"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Free Sport Life (Dana's Club)</h3>
              <p className="text-xs text-white/80">Piazza Bologna, Roma</p>
            </div>
          </div>

          {/* Intro Area */}
          <div className="p-6 bg-gray-50">
            <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
              <p className="text-tango-dark text-[15px] leading-relaxed">
                Ciao! 👋 Scrivi qui il tuo messaggio e ti risponderemo direttamente su WhatsApp.
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-gray-200 focus-within:bg-white transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Scrivi un messaggio..."
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder-gray-400 text-tango-dark"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] disabled:opacity-50 disabled:bg-gray-300 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Chatbot;