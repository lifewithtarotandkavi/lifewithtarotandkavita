import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    // Run initially in case page loaded scrolled down
    handleScrollEvent();
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Kavita, I've visited your website and would love to enquire about an appointment. Please share your available slots for a reading session.");
    window.open(`https://wa.me/919773595256?text=${message}`, '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4' 
          : 'bg-transparent py-6 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        
        {/* Elegant Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl sm:text-2xl font-serif tracking-tight flex items-center hover:opacity-90 transition-opacity"
          id="nav-logo"
        >
          <span className={isScrolled ? 'text-black font-semibold' : 'text-white font-normal'}>
            Life With Tarot & <span className="text-[#D5B990] font-normal italic">Kavita</span>
            {/* <sup className="text-[10px] font-sans tracking-normal ml-0.5 -top-1">®</sup> */}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleScroll('hero')}
            className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors cursor-pointer ${
              isScrolled 
                ? 'text-black hover:text-[#D5B990]' 
                : 'text-white hover:text-[#D5B990]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll('about-kavita')}
            className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors cursor-pointer ${
              isScrolled 
                ? 'text-neutral-500 hover:text-black' 
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleScroll('tarot-draw')}
            className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors cursor-pointer ${
              isScrolled 
                ? 'text-neutral-500 hover:text-black' 
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Tarot Draw
          </button>
          <button 
            onClick={() => handleScroll('offerings')}
            className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors cursor-pointer ${
              isScrolled 
                ? 'text-neutral-500 hover:text-black' 
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => handleScroll('reviews')}
            className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors cursor-pointer ${
              isScrolled 
                ? 'text-neutral-500 hover:text-black' 
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Reviews
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScroll('offerings')}
            className={`rounded-sm px-6 py-2.5 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? 'bg-black text-white hover:bg-neutral-800' 
                : 'border border-white/40 text-white hover:border-white hover:bg-white/5'
            }`}
            id="nav-cta-btn"
          >
            Book Reading
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-1 cursor-pointer ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#151210] border-b border-white/10 shadow-xl px-6 py-6 flex flex-col space-y-4 animate-fade-rise">
          <button 
            onClick={() => handleScroll('hero')}
            className="text-left py-2 text-sm font-sans tracking-widest uppercase font-medium text-white hover:text-[#D5B990]"
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll('about-kavita')}
            className="text-left py-2 text-sm font-sans tracking-widest uppercase font-medium text-neutral-300 hover:text-white"
          >
            About
          </button>
          <button 
            onClick={() => handleScroll('tarot-draw')}
            className="text-left py-2 text-sm font-sans tracking-widest uppercase font-medium text-neutral-300 hover:text-white"
          >
            Tarot Draw
          </button>
          <button 
            onClick={() => handleScroll('offerings')}
            className="text-left py-2 text-sm font-sans tracking-widest uppercase font-medium text-neutral-300 hover:text-white"
          >
            Services
          </button>
          <button 
            onClick={() => handleScroll('reviews')}
            className="text-left py-2 text-sm font-sans tracking-widest uppercase font-medium text-neutral-300 hover:text-white"
          >
            Reviews
          </button>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => handleScroll('offerings')}
              className="w-full text-center rounded-sm py-3 text-xs tracking-widest uppercase font-sans font-medium bg-[#D5B990] text-black active:scale-[0.97] transition-all"
            >
              Book Reading
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 rounded-sm py-3 text-xs tracking-widest uppercase font-sans font-medium bg-[#25D366] text-white active:scale-[0.97] transition-all"
            >
              <MessageSquare className="h-4 w-4 fill-white text-white" />
              WhatsApp Live
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
