import { MessageSquare } from 'lucide-react';
import kaviPortrait from '../assets/images/WhatsApp Image 2026-06-25 at 7.01.21 PM.jpeg';

export default function AboutKavita() {
  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent("Hi Kavita, I need to enquire about an appointment. I read about your background on your website and would love to learn more about your reading slots and methodology.");
    window.open(`https://wa.me/919773595256?text=${message}`, '_blank');
  };

  return (
    <section 
      id="about-kavita"
      className="py-24 bg-[#FAF7F2] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Portrait & Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-lg overflow-hidden shadow-xl border border-neutral-200">
              <img
                src={kaviPortrait}
                alt="Portrait of Kavita - Tarot Reader and Numerologist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Experience Badge overlapping bottom part */}
            <div className="absolute -bottom-6 right-4 lg:-right-4 bg-white border border-neutral-100 shadow-xl p-6 rounded-sm text-center max-w-[150px] animate-fade-rise">
              <span className="block text-4xl font-serif font-semibold text-black leading-none">
                10+
              </span>
              <span className="block text-[9px] tracking-[0.15em] font-sans uppercase text-[#6F6F6F] mt-2 font-medium">
                Years of Practice
              </span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:col-span-7 space-y-8 mt-8 lg:mt-0">
            <div className="space-y-4">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#6F6F6F] font-semibold block">
                ABOUT KAVITA
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif text-black leading-tight tracking-tight">
                A quiet space to listen to <br />
                <span className="italic text-[#6F6F6F] font-normal">what your life is asking.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
              <p>
                I'm Kavita — a tarot reader and numerologist, and the quiet voice behind <strong>Life With Tarot & Kavita®</strong>. For over a decade, I've sat with people during some of the most uncertain seasons of their lives — career pivots, marriages, heartbreaks, second chances — and helped them find the next honest step forward.
              </p>
              <p>
                My work is not about prediction or fear. It's about creating a calm, private space where you can think clearly, feel safely, and hear yourself again. Tarot and numerology are my tools — what we are really working with is your story.
              </p>
            </div>

            {/* 3-Column Pillars (Mission, Approach, Experience) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
              
              <div className="space-y-2">
                <span className="block text-[10px] tracking-[0.15em] font-sans font-semibold uppercase text-neutral-400">
                  MISSION
                </span>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  To make spiritual guidance feel modern, grounded and emotionally safe.
                </p>
              </div>

              <div className="space-y-2">
                <span className="block text-[10px] tracking-[0.15em] font-sans font-semibold uppercase text-neutral-400">
                  APPROACH
                </span>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  Compassionate, practical, never theatrical — with respect for your time and your truth.
                </p>
              </div>

              <div className="space-y-2">
                <span className="block text-[10px] tracking-[0.15em] font-sans font-semibold uppercase text-neutral-400">
                  EXPERIENCE
                </span>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  10+ years of practice. Hundreds of clients across India, Europe, the UK and the US.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  const offerings = document.getElementById('offerings');
                  if (offerings) offerings.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center rounded-sm bg-black text-white px-8 py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-neutral-800 transition-all cursor-pointer shadow-md"
              >
                View Sessions
              </button>
              
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-neutral-300 bg-white text-black px-8 py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-neutral-50 transition-all cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 text-[#25D366] fill-[#25D366]" />
                Enquire via WhatsApp
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
