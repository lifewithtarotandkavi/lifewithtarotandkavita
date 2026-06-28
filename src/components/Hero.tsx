import { Globe, Shield, Star, Sparkles, ArrowRight, Eye, Moon } from 'lucide-react';
import heroBg from '../assets/images/tarot_hero_bg_1782649527543.jpg';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#151210] overflow-hidden"
    >
      {/* Serene Static Background Image with Moody Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Serene spiritual meditation hands holding mala beads"
          className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep luxurious vignette/gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#151210]/90 via-[#151210]/60 to-[#151210]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#151210] to-transparent" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 max-w-7xl mx-auto w-full pt-32 pb-16">
        
        {/* Small Golden Pill/Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D5B990]/30 bg-[#D5B990]/10 text-xs font-sans tracking-[0.25em] uppercase text-[#D5B990] mb-8 animate-fade-rise">
          <Moon className="h-3.5 w-3.5 fill-[#D5B990]/20 animate-pulse text-[#D5B990]" />
          Tarot • Guidance
        </div>

        {/* Headline */}
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-normal text-white max-w-5xl leading-[1.05] tracking-tight animate-fade-rise"
          id="hero-headline"
        >
          Find Clarity. <br />
          <span className="italic text-[#D5B990] font-normal font-serif">Trust Your Journey.</span>
        </h1>

        {/* Description */}
        <p 
          className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-8 leading-relaxed font-sans font-light animate-fade-rise-delay"
          id="hero-description"
        >
          Professional Tarot Reading and Numerology Guidance for love, career, relationships, personal growth and life decisions — calm, confidential and rooted in over a decade of practice.
        </p>

        {/* Hero CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-rise-delay-2">
          {/* Main Gold Button */}
          <button
            onClick={() => handleScroll('offerings')}
            className="w-full sm:w-auto rounded-full bg-[#D5B990] hover:bg-[#CBB28A] text-black font-sans font-semibold text-sm px-10 py-4 transition-all duration-300 shadow-lg shadow-[#D5B990]/15 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group"
          >
            BOOK YOUR READING
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Outline Button */}
          <button
            onClick={() => handleScroll('tarot-draw')}
            className="w-full sm:w-auto rounded-full border border-white/40 hover:border-white text-white hover:bg-white/5 font-sans font-medium text-sm px-10 py-4 transition-all duration-300 cursor-pointer flex items-center justify-center"
          >
            EXPLORE SERVICES
          </button>
        </div>

      </div>

      {/* Features Row at the bottom */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm py-6 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-y-4 gap-x-8 text-xs font-sans tracking-widest uppercase text-neutral-300">
            
            <div className="flex items-center gap-2">
              <Eye className="h-3.5 w-3.5 text-[#D5B990]" />
              <span>Online Sessions</span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#D5B990]" />
              <span>Google Meet & Zoom</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-[#D5B990]" />
              <span>Confidential Readings</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-[#D5B990]" />
              <span>Worldwide Guidance</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
