import { OFFERINGS } from '../data';
import { Check, MessageSquare, Shield, Clock, Sparkles, Video } from 'lucide-react';

export default function Offerings() {
  const handleBooking = (whatsAppMessage: string) => {
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    window.open(`https://wa.me/919773595256?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      id="offerings"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background soft lighting details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Two-column Header Block based on Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-neutral-100">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#6F6F6F] font-semibold block">
              SESSION OFFERINGS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-black leading-tight tracking-tight">
              Guidance, crafted for the <br />
              <span className="italic text-[#6F6F6F] font-normal">question you're sitting with.</span>
            </h2>
          </div>

          {/* Right Column: Introductory Paragraph */}
          <div className="md:col-span-5">
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              Each session is a private, unhurried conversation — shaped around you, your timing and what you most need clarity on. Choose the one that feels closest, or message on WhatsApp and I'll help you pick.
            </p>
          </div>

        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {OFFERINGS.map(offering => (
            <div 
              key={offering.id}
              className={`bg-white border rounded-sm p-8 flex flex-col justify-between transition-all duration-300 relative ${
                offering.popular 
                  ? 'border-neutral-900 ring-1 ring-neutral-900 shadow-xl scale-[1.02] md:scale-[1.01] z-10' 
                  : 'border-neutral-200 shadow-sm hover:border-neutral-300'
              }`}
            >
              {/* Popular Tag */}
              {offering.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[9px] font-sans font-semibold uppercase tracking-wider">
                  Most Requested Session
                </span>
              )}

              {/* Top part */}
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-widest font-sans font-semibold text-[#6F6F6F] uppercase flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#D5B990]" />
                    {offering.duration}
                  </span>
                  
                  {offering.popular && (
                    <span className="text-xs text-[#D5B990] animate-pulse">
                      <Sparkles className="h-4 w-4 fill-current" />
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-serif text-black mt-4 leading-tight font-normal">
                  {offering.title}
                </h3>
                
                <div className="mt-4 pb-6 border-b border-neutral-100">
                  <span className="text-3xl font-serif text-black tracking-tight">{offering.price}</span>
                  <span className="text-xs text-neutral-400 font-sans ml-1.5">/ session</span>
                </div>

                <p className="text-xs sm:text-sm text-[#6F6F6F] font-sans mt-6 leading-relaxed">
                  {offering.description}
                </p>

                {/* Platform info label in card */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-500 font-sans">
                  <Video className="h-3.5 w-3.5 text-[#D5B990]" />
                  <span>Held live over Google Meet or Zoom</span>
                </div>
              </div>

              {/* Bottom part / Action Button */}
              <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
                <button
                  onClick={() => handleBooking(offering.whatsAppMessage)}
                  className={`w-full flex items-center justify-center gap-2 rounded-sm py-3.5 text-xs tracking-widest uppercase font-sans font-semibold transition-all duration-200 cursor-pointer ${
                    offering.popular
                      ? 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]'
                      : 'bg-[#D5B990] text-black hover:bg-[#CBB28A] active:scale-[0.98]'
                  }`}
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  Book Session
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 font-sans">
                  <Shield className="h-3 w-3" />
                  <span>100% Confidential & Private Readings</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Meet & Zoom Notice Banner */}
        <div className="mt-12 max-w-2xl mx-auto bg-[#FAF7F2] border border-neutral-100 rounded-sm p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="p-2.5 bg-white rounded-full border border-neutral-100 shadow-sm shrink-0">
            <Video className="h-5 w-5 text-[#D5B990]" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-xs tracking-wider uppercase font-sans font-bold text-neutral-800">Video Call Sessions</h4>
            <p className="text-xs text-[#6F6F6F] font-sans mt-1 leading-relaxed">
              All readings are conducted live over <strong>Google Meet</strong> or <strong>Zoom</strong>. A secure direct link will be sent to your calendar or email once booking details are aligned.
            </p>
          </div>
        </div>

        {/* Footer info/Method disclaimer */}
        <div className="mt-16 text-center text-[#6F6F6F] max-w-xl mx-auto space-y-2">
          <p className="text-xs font-sans italic leading-relaxed">
            "We do not require complex rituals or background secrets. Just come with an open heart, an empty mind, and a pure intention."
          </p>
          <span className="block text-[10px] text-neutral-400 tracking-wider uppercase font-sans">— Life with Tarot Methodology</span>
        </div>

      </div>
    </section>
  );
}
