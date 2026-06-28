import { useState } from 'react';
import { REVIEWS } from '../data';
import { Review } from '../types';
import { Star, Globe, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const [filter, setFilter] = useState<'All' | 'Indian' | 'International'>('All');

  const filteredReviews = REVIEWS.filter(review => {
    if (filter === 'All') return true;
    return review.nationality === filter;
  });

  const handleWhatsAppReview = () => {
    const message = encodeURIComponent("Hi Kavita, I need to enquire about an appointment. I read the incredible reviews from your Indian and international clients on your website! Please let me know how we can schedule a reading.");
    window.open(`https://wa.me/919773595256?text=${message}`, '_blank');
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < floorRating 
              ? 'text-amber-400 fill-amber-400' 
              : rating % 1 !== 0 && i === floorRating 
                ? 'text-amber-400 fill-amber-400 opacity-60' 
                : 'text-neutral-200'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section 
      id="reviews"
      className="py-24 bg-neutral-50 border-t border-neutral-100 relative"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-sans tracking-widest uppercase text-[#6F6F6F] block mb-2">
              Client Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-black leading-tight tracking-tight">
              Sought by Hearts Across the Globe
            </h2>
            <p className="text-sm sm:text-base text-[#6F6F6F] font-sans mt-3 leading-relaxed">
              Real stories of clarity, breakthroughs, and healing from our valued seekers, both in India and worldwide.
            </p>
          </div>

          {/* Filter Toggles */}
          <div className="bg-white border border-neutral-200 p-1 rounded-full flex self-start md:self-auto shadow-sm">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                filter === 'All' 
                  ? 'bg-black text-white' 
                  : 'text-[#6F6F6F] hover:text-black'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setFilter('Indian')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all flex items-center gap-1 ${
                filter === 'Indian' 
                  ? 'bg-black text-white' 
                  : 'text-[#6F6F6F] hover:text-black'
              }`}
            >
              🇮🇳 Indian
            </button>
            <button
              onClick={() => setFilter('International')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all flex items-center gap-1 ${
                filter === 'International' 
                  ? 'bg-black text-white' 
                  : 'text-[#6F6F6F] hover:text-black'
              }`}
            >
              🌍 Global
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map(review => (
            <div 
              key={review.id} 
              className="bg-white border border-neutral-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 relative group animate-fade-rise"
            >
              {/* Top rating row */}
              <div>
                <div className="flex items-center gap-1.5 mb-6">
                  {renderStars(review.rating)}
                  <span className="text-xs text-neutral-400 font-mono ml-2">({review.rating})</span>
                </div>
                
                {/* Quotation text */}
                <p className="text-sm sm:text-base text-neutral-700 font-sans italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Author row */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-sans font-semibold text-black">{review.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-[#6F6F6F] mt-0.5">
                    {review.nationality === 'Indian' ? '🇮🇳' : '🌍'}
                    <span>{review.location}</span>
                  </div>
                </div>
                <span className="text-[10px] text-neutral-300 font-mono tracking-wider">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action panel */}
        <div className="mt-16 bg-white border border-neutral-200/60 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif text-black">Ready to discover your own clarity map?</h3>
            <p className="text-xs sm:text-sm text-[#6F6F6F] font-sans">Join hundreds of seekers globally and begin your flow alignment call.</p>
          </div>
          <button
            onClick={handleWhatsAppReview}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-8 py-4 text-sm font-sans font-medium hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            Book with Kavita on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
