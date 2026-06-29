import { MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Kavita, I need to enquire about an appointment. I'm wrapping up reading your website and would love to arrange a custom tarot reading with you.");
    window.open(`https://wa.me/919773595256?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-black text-white py-16 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Brand Side */}
        <div className="md:col-span-5 space-y-4">
          <h3 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-serif text-white tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            Life With Tarot & Kavita
          </h3>
          
<p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-sm">
  Professional Tarot Reading and Numerology Guidance by Kavita. Offering personalized online and in-person consultations for love, career, relationships, marriage, finance, and personal growth. Trusted by clients across India and worldwide.
</p>


          <div className="pt-2 text-[10px] text-neutral-500 font-mono">
            © {new Date().getFullYear()} Life With Tarot & Kavita. All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-sans font-semibold text-neutral-400 uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-neutral-300">
            <li>
              <button onClick={() => handleScroll('hero')} className="hover:text-white transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('tarot-draw')} className="hover:text-white transition-colors cursor-pointer">
                Tarot Reading
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('about-kavita')} className="hover:text-white transition-colors cursor-pointer">
                About Kavita
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('reviews')} className="hover:text-white transition-colors cursor-pointer">
                Client Reviews
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('offerings')} className="hover:text-white transition-colors cursor-pointer">
                Book A Session
              </button>
            </li>
          </ul>
        </div>

        {/* Dynamic Booking/Instant Connect */}
        <div className="md:col-span-4 space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs font-sans font-semibold text-neutral-400 uppercase tracking-widest">
              Instant Connection
            </h4>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
             
Book your tarot reading or numerology consultation directly on WhatsApp. Get quick responses, discuss your questions, and schedule a personalized session with Kavita.


            </p>
          </div>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-xs font-sans font-medium hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            <MessageSquare className="h-4 w-4 fill-white text-white" />
            Connect Live with Kavita
          </button>
        </div>

      </div>

      {/* Credit Row */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 font-sans gap-4">
        <div>
         Professional Tarot Reading & Numerology Guidance • Online & In-Person Sessions.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Alignment</a>
        </div>
      </div>
    </footer>
  );
}
