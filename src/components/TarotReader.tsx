import { useState, useEffect } from 'react';
import { TAROT_CARDS } from '../data';
import { TarotCard } from '../types';
import { Sparkles, RefreshCw, MessageSquare, ArrowRight } from 'lucide-react';

export default function TarotReader() {
  const [mode, setMode] = useState<'single' | 'three'>('single');
  const [deck, setDeck] = useState<TarotCard[]>([]);
  
  // Single Card Draw State
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  // Three Card Spread State
  const [threeCards, setThreeCards] = useState<(TarotCard | null)[]>([null, null, null]);
  const [threeFlipped, setThreeFlipped] = useState<boolean[]>([false, false, false]);
  const [selectedThreeIndex, setSelectedThreeIndex] = useState<number | null>(null);

  // Initialize and shuffle deck
  const initializeDeck = () => {
    const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setSelectedCard(null);
    setIsFlipped(false);
    setThreeCards([null, null, null]);
    setThreeFlipped([false, false, false]);
    setSelectedThreeIndex(null);
  };

  useEffect(() => {
    initializeDeck();
  }, [mode]);

  // Handle drawing a single card
  const drawSingleCard = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setIsFlipped(false);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * deck.length);
      setSelectedCard(deck[randomIndex]);
      setIsDrawing(false);
      // Flip after a short delay
      setTimeout(() => {
        setIsFlipped(true);
      }, 300);
    }, 600);
  };

  // Handle drawing cards for the three-card spread
  const drawThreeCardSpread = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setThreeFlipped([false, false, false]);
    setSelectedThreeIndex(null);

    setTimeout(() => {
      // Shuffle again for maximum randomness
      const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
      const chosen = [shuffled[0], shuffled[1], shuffled[2]];
      setThreeCards(chosen);
      setIsDrawing(false);

      // Flip sequentially
      chosen.forEach((_, index) => {
        setTimeout(() => {
          setThreeFlipped(prev => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
          if (index === 1) {
            setSelectedThreeIndex(1); // Default focus on the present card
          }
        }, 400 * (index + 1));
      });
    }, 600);
  };

  const getWhatsAppLink = (cardName: string, spreadType: string) => {
    const message = encodeURIComponent(
      `Hi Kavita, I need to enquire about an appointment. I just did a ${spreadType} tarot draw on your website and got "${cardName}". I would love to book a personal reading with you to explore this further.`
    );
    return `https://wa.me/919773595256?text=${message}`;
  };

  return (
    <section 
      id="tarot-draw"
      className="py-24 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden"
    >
      {/* Background soft glowing lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-yellow-100/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-neutral-200/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-sans tracking-widest uppercase text-[#6F6F6F] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            Interactive Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-black leading-tight tracking-tight">
            Consult the Eternal Deck
          </h2>
          <p className="text-sm sm:text-base text-[#6F6F6F] mt-4 font-sans leading-relaxed">
            Formulate a clear question in your heart. Choose your preferred spread, draw the cards, and receive Kavita's cosmic whisper.
          </p>

          {/* Mode Switcher */}
          <div className="flex justify-center mt-8">
            <div className="bg-white border border-neutral-200 p-1 rounded-full inline-flex">
              <button
                onClick={() => setMode('single')}
                className={`px-5 py-2 rounded-full text-xs font-sans font-medium transition-all ${
                  mode === 'single'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-[#6F6F6F] hover:text-black'
                }`}
              >
                Single Card Guidance
              </button>
              <button
                onClick={() => setMode('three')}
                className={`px-5 py-2 rounded-full text-xs font-sans font-medium transition-all ${
                  mode === 'three'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-[#6F6F6F] hover:text-black'
                }`}
              >
                Three-Card Divine Spread
              </button>
            </div>
          </div>
        </div>

        {/* =================================================== */}
        {/* SINGLE CARD MODE */}
        {/* =================================================== */}
        {mode === 'single' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Draw Area */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-96 group perspective">
                
                {/* 3D Card Container */}
                <div 
                  className={`w-full h-full relative duration-700 transform-style-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={drawSingleCard}
                >
                  {/* CARD BACK */}
                  <div className="absolute inset-0 w-full h-full bg-black rounded-2xl border-4 border-amber-100/30 p-4 flex flex-col items-center justify-between backface-hidden shadow-xl">
                    <div className="w-full h-full border border-amber-100/10 rounded-xl flex flex-col items-center justify-between p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-neutral-950">
                      <div className="text-amber-100/20 text-xs tracking-widest uppercase">Life With Tarot & Kavita</div>
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-100/20 flex items-center justify-center">
                        <div className="text-4xl text-amber-200/40 animate-pulse">🔮</div>
                      </div>
                      <div className="text-amber-100/20 text-xs tracking-widest uppercase">Draw Your Destiny</div>
                    </div>
                  </div>

                  {/* CARD FRONT */}
                  {selectedCard && (
                    <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border-4 border-amber-200 p-4 flex flex-col items-center justify-between rotate-y-180 backface-hidden shadow-2xl">
                      <div className="w-full h-full border border-amber-200/30 rounded-xl flex flex-col items-center justify-between p-4 bg-gradient-to-b from-neutral-50 to-white">
                        {/* Header */}
                        <div className="text-center">
                          <span className="text-[10px] font-sans tracking-widest uppercase text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-full">
                            {selectedCard.arcana} Arcana
                          </span>
                        </div>

                        {/* Symbolic Illustration */}
                        <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 shadow-inner">
                          <span className="text-5xl" role="img" aria-label={selectedCard.name}>
                            {selectedCard.imageSymbol}
                          </span>
                        </div>

                        {/* Card Name */}
                        <div className="text-center">
                          <h3 className="text-2xl font-serif text-black leading-none">{selectedCard.name}</h3>
                          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                            {selectedCard.keyThemes.slice(0, 2).map(theme => (
                              <span key={theme} className="text-[9px] font-sans px-2 py-0.5 bg-neutral-100 text-[#6F6F6F] rounded">
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Draw Controls */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <button
                  onClick={drawSingleCard}
                  disabled={isDrawing}
                  className="rounded-full bg-black text-white px-8 py-3.5 text-sm font-sans font-medium flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isDrawing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Shuffling Stars...
                    </>
                  ) : selectedCard ? (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Draw Another Card
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 text-amber-300" />
                      Draw Cosmic Card
                    </>
                  )}
                </button>
                <p className="text-xs text-[#6F6F6F] font-sans">
                  {selectedCard ? "Click the card to flip it back over" : "Click the card deck or the button above to draw"}
                </p>
              </div>

            </div>

            {/* Reading Details Area */}
            <div className="lg:col-span-7">
              {selectedCard && isFlipped ? (
                <div className="bg-white border border-neutral-100 p-8 rounded-3xl shadow-xl animate-fade-rise">
                  <span className="text-xs font-sans tracking-widest uppercase text-[#6F6F6F]">
                    Your Sacred Reading
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-black mt-2 leading-none">
                    {selectedCard.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedCard.keyThemes.map(theme => (
                      <span key={theme} className="text-xs font-sans px-3 py-1 bg-amber-50/70 text-amber-900 border border-amber-100 rounded-full">
                        {theme}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4 font-sans text-sm text-[#6F6F6F] leading-relaxed">
                    <p>
                      <strong className="text-black block mb-1">Energetic Essence:</strong>
                      {selectedCard.meaning}
                    </p>
                    <p>
                      <strong className="text-black block mb-1">Actionable Cosmic Advice:</strong>
                      {selectedCard.uprightAdvice}
                    </p>
                  </div>

                  {/* Kavita's Quote Box */}
                  <div className="mt-8 p-6 bg-neutral-50 rounded-2xl border-l-4 border-black font-serif italic text-base text-neutral-800 relative">
                    <span className="absolute right-4 bottom-2 text-6xl text-neutral-200/50 leading-none select-none">“</span>
                    <p className="relative z-10">"{selectedCard.quote}"</p>
                    <span className="block mt-2 font-sans not-italic text-xs tracking-widest uppercase text-[#6F6F6F]">
                      — Kavita's Wisdom
                    </span>
                  </div>

                  {/* Direct WhatsApp Call to Action */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                    <div className="text-center sm:text-left">
                      <p className="text-xs font-sans font-semibold text-black">Want deeper individual foresight?</p>
                      <p className="text-[11px] text-[#6F6F6F] font-sans">Talk to Kavita live regarding your {selectedCard.name} draw.</p>
                    </div>
                    <a
                      href={getWhatsAppLink(selectedCard.name, "Single Card")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-sans font-medium hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-md"
                    >
                      <MessageSquare className="h-4 w-4 fill-white" />
                      Discuss on WhatsApp
                    </a>
                  </div>

                </div>
              ) : (
                <div className="h-full min-h-[400px] bg-white border border-dashed border-neutral-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center text-3xl mb-4 border border-neutral-100">
                    ✨
                  </div>
                  <h4 className="text-xl font-serif text-black font-semibold">Ready for Cosmic Revelations</h4>
                  <p className="text-sm text-[#6F6F6F] font-sans max-w-md mt-2 leading-relaxed">
                    Click the deck on the left to draw your card of the day. The deck is rich with archetypes reflecting your spiritual path.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* =================================================== */}
        {/* THREE CARD MODE */}
        {/* =================================================== */}
        {mode === 'three' && (
          <div className="space-y-12">
            
            {/* Draw Trigger */}
            <div className="flex justify-center">
              <button
                onClick={drawThreeCardSpread}
                disabled={isDrawing}
                className="rounded-full bg-black text-white px-10 py-4 text-base font-sans font-medium flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isDrawing ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    Aligning Temporal Currents...
                  </>
                ) : threeCards[0] ? (
                  <>
                    <RefreshCw className="h-5 w-5" />
                    Draw A New Divine Spread
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 text-amber-300" />
                    Unfold Past, Present & Future
                  </>
                )}
              </button>
            </div>

            {/* The Three Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {['The Past (Root)', 'The Present (Vibration)', 'The Future (Horizon)'].map((label, idx) => {
                const card = threeCards[idx];
                const flipped = threeFlipped[idx];
                const isSelected = selectedThreeIndex === idx;

                return (
                  <div 
                    key={label}
                    className={`flex flex-col items-center p-4 rounded-3xl border transition-all ${
                      isSelected 
                        ? 'bg-amber-50/40 border-amber-200 ring-2 ring-amber-100' 
                        : 'bg-white border-neutral-100 hover:border-neutral-200'
                    }`}
                  >
                    <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#6F6F6F] mb-4">
                      {label}
                    </span>

                    <div className="w-48 h-72 group perspective relative mb-4">
                      <div 
                        className={`w-full h-full relative duration-700 transform-style-3d cursor-pointer ${
                          flipped ? 'rotate-y-180' : ''
                        }`}
                        onClick={() => {
                          if (card) setSelectedThreeIndex(idx);
                        }}
                      >
                        {/* CARD BACK */}
                        <div className="absolute inset-0 w-full h-full bg-black rounded-xl border-2 border-amber-100/20 p-3 flex flex-col items-center justify-between backface-hidden shadow-lg">
                          <div className="w-full h-full border border-amber-100/5 rounded-lg flex flex-col items-center justify-between p-3 bg-gradient-to-b from-neutral-900 via-black to-neutral-950">
                            <span className="text-[8px] text-amber-100/10 tracking-widest uppercase">Life Tarot</span>
                            <span className="text-2xl opacity-30">🔮</span>
                            <span className="text-[8px] text-amber-100/10 tracking-widest uppercase">Select Draw</span>
                          </div>
                        </div>

                        {/* CARD FRONT */}
                        {card && (
                          <div className="absolute inset-0 w-full h-full bg-white rounded-xl border-2 border-amber-200 p-3 flex flex-col items-center justify-between rotate-y-180 backface-hidden shadow-xl">
                            <div className="w-full h-full border border-amber-100/10 rounded-lg flex flex-col items-center justify-between p-2 bg-gradient-to-b from-neutral-50 to-white">
                              <span className="text-[8px] font-sans tracking-widest uppercase text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-full">
                                {card.arcana}
                              </span>
                              <span className="text-4xl" role="img" aria-label={card.name}>
                                {card.imageSymbol}
                              </span>
                              <div className="text-center">
                                <h4 className="text-lg font-serif text-black leading-tight">{card.name}</h4>
                                <span className="text-[9px] font-sans text-[#6F6F6F] truncate block">
                                  {card.keyThemes[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {card && flipped ? (
                      <button
                        onClick={() => setSelectedThreeIndex(idx)}
                        className={`text-xs font-sans font-medium flex items-center gap-1.5 py-1 px-3 rounded-full transition-all ${
                          isSelected 
                            ? 'bg-black text-white' 
                            : 'text-[#6F6F6F] hover:text-black bg-neutral-100'
                        }`}
                      >
                        Review Interpretation
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    ) : (
                      <span className="text-xs text-neutral-300 font-sans">Awaiting Draw</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Expanded interpretation of selected card */}
            {selectedThreeIndex !== null && threeCards[selectedThreeIndex] && (
              <div className="max-w-3xl mx-auto bg-white border border-neutral-100 p-8 rounded-3xl shadow-xl animate-fade-rise">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-sans tracking-widest uppercase text-amber-700 font-semibold bg-amber-50 px-2.5 py-1 rounded-full">
                    Position {selectedThreeIndex === 0 ? 'I : Past' : selectedThreeIndex === 1 ? 'II : Present' : 'III : Future'}
                  </span>
                </div>
                
                <h3 className="text-3xl font-serif text-black mt-4">
                  {threeCards[selectedThreeIndex]?.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {threeCards[selectedThreeIndex]?.keyThemes.map(theme => (
                    <span key={theme} className="text-xs font-sans px-2.5 py-0.5 bg-neutral-100 text-[#6F6F6F] rounded-md">
                      {theme}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-4 font-sans text-sm text-[#6F6F6F] leading-relaxed">
                  <p>
                    <strong className="text-black block">Temporal Meaning in this spread:</strong>
                    {selectedThreeIndex === 0 && `This card represents your roots. ${threeCards[selectedThreeIndex]?.meaning} This is the baseline from which you operate.`}
                    {selectedThreeIndex === 1 && `This card represents your current vibration. ${threeCards[selectedThreeIndex]?.meaning} This energy is highly active right now.`}
                    {selectedThreeIndex === 2 && `This card represents your upcoming pathway. ${threeCards[selectedThreeIndex]?.meaning} Align with this energy to invite harmony.`}
                  </p>
                  <p>
                    <strong className="text-black block">Actionable Divine Counsel:</strong>
                    {threeCards[selectedThreeIndex]?.uprightAdvice}
                  </p>
                </div>

                {/* Kavita's Wisdom Quote */}
                <div className="mt-8 p-6 bg-neutral-50 rounded-2xl border-l-4 border-amber-300 font-serif italic text-base text-neutral-800">
                  <p>"{threeCards[selectedThreeIndex]?.quote}"</p>
                  <span className="block mt-2 font-sans not-italic text-xs tracking-widest uppercase text-[#6F6F6F]">
                    — Kavita's Insight
                  </span>
                </div>

                {/* WhatsApp button tailored for Three Card Draw */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-sans font-semibold text-black">Get a fully synthesized timeline analysis</p>
                    <p className="text-[11px] text-[#6F6F6F] font-sans">Ask Kavita to weave your Past, Present, and Future spreads together.</p>
                  </div>
                  <a
                    href={getWhatsAppLink(threeCards[selectedThreeIndex]?.name || "Three-Card", `Three-Card (${selectedThreeIndex === 0 ? 'Past' : selectedThreeIndex === 1 ? 'Present' : 'Future'})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-sans font-medium hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-md"
                  >
                    <MessageSquare className="h-4 w-4 fill-white" />
                    Discuss Spread with Kavita
                  </a>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
