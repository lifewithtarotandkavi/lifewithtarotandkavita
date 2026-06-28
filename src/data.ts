import { TarotCard, Review, Offering } from './types';

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 'the-fool',
    name: 'The Fool',
    arcana: 'Major',
    keyThemes: ['New Beginnings', 'Faith', 'Pure Potential', 'Spontaneity'],
    meaning: 'The Fool represents a blank slate. You are standing at the edge of something beautiful, raw, and completely unwritten. Trust the universe, take your leap of faith, and let your spirit guide you without the weight of past expectations.',
    uprightAdvice: 'Let go of old patterns and stories. The path before you is entirely new. Step forward with child-like curiosity, a light heart, and trust that the ground will appear beneath your feet.',
    quote: 'Trust the step you haven\'t taken yet. The universe holds those who dare to fly.',
    imageSymbol: '🌬️'
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    arcana: 'Major',
    keyThemes: ['Manifestation', 'Creative Power', 'Focus', 'Resourcefulness'],
    meaning: 'The Magician signals that you already possess all the tools, skills, and energy necessary to shape your physical reality. You are the bridge between the celestial and the earthly.',
    uprightAdvice: 'Stop waiting for external signs or permissions. You are the sign. Direct your focus, pool your hidden resources, and take aligned action to bring your visions into solid physical form.',
    quote: 'The magic isn\'t written in the cold stars; it is ignited by your willingness to touch them.',
    imageSymbol: '⚡'
  },
  {
    id: 'the-high-priestess',
    name: 'The High Priestess',
    arcana: 'Major',
    keyThemes: ['Intuition', 'Inner Wisdom', 'Mystic Veil', 'Divine Feminine'],
    meaning: 'A card of deep stillness and secret understanding. The High Priestess asks you to look inward rather than outward for truth. Your inner compass knows the direction long before your mind does.',
    uprightAdvice: 'Quiet the external noise. Step away from opinions and analytical grids. Sit in complete silence, connect with your breath, and listen to the truth that whispers in the dark.',
    quote: 'The loudest truths are spoken in your quietest moments. Bow to your own silence.',
    imageSymbol: '🌙'
  },
  {
    id: 'the-empress',
    name: 'The Empress',
    arcana: 'Major',
    keyThemes: ['Abundance', 'Creativity', 'Growth', 'Nurturing Energy'],
    meaning: 'The Empress is the ultimate symbol of prosperity, creative flow, and sensory delight. You are entering a highly fertile phase of life where dreams planted with love will effortlessly blossom.',
    uprightAdvice: 'Connect with nature, your physical senses, and your creative impulses. Give yourself unconditional permission to receive comfort, luxury, and abundance. Nurture yourself first.',
    quote: 'Abundance is not a collection of items; it is a heart completely at ease with receiving.',
    imageSymbol: '👑'
  },
  {
    id: 'the-lovers',
    name: 'The Lovers',
    arcana: 'Major',
    keyThemes: ['Harmony', 'Soul Alignment', 'Core Choices', 'Connections'],
    meaning: 'The Lovers represents a deep alignment of values, choices, and hearts. It is not just about romantic love, but about choosing paths that fully resonate with your authentic self.',
    uprightAdvice: 'Make choices based on your highest personal truth and spiritual integrity, never from a place of fear or pleasing others. Align your thoughts and actions to create harmony.',
    quote: 'True love begins the moment you stop negotiating with your own spiritual integrity.',
    imageSymbol: '💖'
  },
  {
    id: 'the-hermit',
    name: 'The Hermit',
    arcana: 'Major',
    keyThemes: ['Soul Searching', 'Inner Lantern', 'Reflection', 'Solitude'],
    meaning: 'The Hermit is a sacred call to unplug and go within. It reminds you that the answers to your life\'s grand questions cannot be found in external crowds or superficial validation.',
    uprightAdvice: 'Create a temporary sanctuary for yourself. Step back from social demands, journal your thoughts, and spend time in contemplation to clarify your vision and recharge your soul.',
    quote: 'Your soul does not need to be repaired or reconstructed; it only needs to be heard.',
    imageSymbol: '🏮'
  },
  {
    id: 'wheel-of-fortune',
    name: 'Wheel of Fortune',
    arcana: 'Major',
    keyThemes: ['Destiny', 'Karmic Shifts', 'Cycles', 'Auspicous Change'],
    meaning: 'The Wheel of Fortune reminds us that life is in constant, beautiful motion. What goes down must come up. It brings sudden, auspicious turning points and shifts in your cosmic wind.',
    uprightAdvice: 'Release your need to control everything. Flow gracefully with the changing tides. Know that both highs and lows are passing phases in your soul\'s grand journey.',
    quote: 'When the golden wheel turns, do not try to hold the spokes. Relax, breathe, and trust the direction.',
    imageSymbol: '🌀'
  },
  {
    id: 'the-star',
    name: 'The Star',
    arcana: 'Major',
    keyThemes: ['Hope', 'Divine Healing', 'Inspiration', 'Serenity'],
    meaning: 'A gorgeous celestial omen of peace and recovery. After the heavy storm, the Star rises to pour light upon your path. You are being spiritually replenished and healed from past trials.',
    uprightAdvice: 'Release your worries and grief. The worst is behind you. Open your heart to the quiet miracles of hope, and trust that the universe is actively rebuilding your life.',
    quote: 'Even in the darkest night, there is a star designed specifically to light your individual path.',
    imageSymbol: '✨'
  },
  {
    id: 'the-sun',
    name: 'The Sun',
    arcana: 'Major',
    keyThemes: ['Unconditional Joy', 'Radiance', 'Vitality', 'Abundant Success'],
    meaning: 'The Sun is the most positive card in the deck, radiating warmth, clarity, and life-giving energy. It promises success, vibrant physical health, and childlike enthusiasm.',
    uprightAdvice: 'Step into the spotlight. Express your gratitude openly, celebrate your existence, and let your vibrant energy inspire and heal those around you. Do not hide your brilliance.',
    quote: 'You are made of raw, beautiful stardust. It is your birthright to shine without asking for permission.',
    imageSymbol: '☀️'
  },
  {
    id: 'the-world',
    name: 'The World',
    arcana: 'Major',
    keyThemes: ['Completion', 'Wholeness', 'Celebration', 'New Horizons'],
    meaning: 'The World represents the successful completion of a significant life cycle. You have integrated your lessons, found your inner center, and reached a state of deep wholeness.',
    uprightAdvice: 'Pause and celebrate your victories. Acknowledge your growth, and prepare to transition into a new, higher level of being. You are complete, confident, and free.',
    quote: 'You are not merely a traveler in this world; you are the universe observing its own creation.',
    imageSymbol: '🌍'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Ananya Sharma',
    location: 'New Delhi, India',
    rating: 5,
    text: 'Kavita\'s readings are not just predictions; they are profound spiritual therapy. She predicted my career shift to the exact month. Her presence is incredibly soothing and her words have become my daily anchors!',
    date: 'June 2026',
    nationality: 'Indian'
  },
  {
    id: '2',
    name: 'Alistair Sterling',
    location: 'London, United Kingdom',
    rating: 5,
    text: 'I booked a session from London expecting standard tarot lines, but Kavita went unbelievably deep. She picked up on an old family pattern that I had never spoken about. Her insight on my business alignment changed everything.',
    date: 'May 2026',
    nationality: 'International'
  },
  {
    id: '3',
    name: 'Dr. Rohan Deshmukh',
    location: 'Mumbai, India',
    rating: 5,
    text: 'The Relationship Alignment session with Kavita gave me and my partner the clarity we had been seeking for years. Her remedies are simple yet powerful. Connecting via WhatsApp is incredibly convenient.',
    date: 'April 2026',
    nationality: 'Indian'
  },
  {
    id: '4',
    name: 'Charlotte Dubois',
    location: 'Paris, France',
    rating: 5,
    text: 'Kavita has a rare, divine gift. Her calmness transcends the digital screen. The Star card she drew for me gave me so much peace during a dark phase. She is truly a guiding light.',
    date: 'March 2026',
    nationality: 'International'
  },
  {
    id: '5',
    name: 'Priya Nair',
    location: 'Bangalore, India',
    rating: 5,
    text: 'Kavita is an absolute gem of a soul. Her intuition is scary-accurate! She knew about my decision to move abroad before I even told my parents. I connect with her whenever I need pure clarity.',
    date: 'February 2026',
    nationality: 'Indian'
  },
  {
    id: '6',
    name: 'Elena Rostova',
    location: 'St. Petersburg, Russia',
    rating: 4.8,
    text: 'I was feeling extremely anxious before a big decision and booked an emergency 15-minute quick session. Kavita\'s grounding energy and precise predictions gave me instant relief and clear direction. Outstanding work!',
    date: 'January 2026',
    nationality: 'International'
  }
];

export const OFFERINGS: Offering[] = [
  {
    id: 'session-30min',
    title: '30 Minutes Tarot Reading',
    duration: '30 Minutes Session',
    price: '₹2,100',
    description: 'A focused, high-clarity session perfect for targeted questions, urgent decisions, or single-area exploration (career, relationships, or immediate paths). Held online via Google Meet or Zoom.',
    whatsAppMessage: 'Hi Kavita, I need to enquire about an appointment for a 30 Minutes Tarot Reading session (₹2100). Please let me know your available slots for a Zoom or Google Meet call.'
  },
  {
    id: 'session-1hour',
    title: '1 Hour Deep-Dive Session',
    duration: '1 Hour (60 Mins) Session',
    price: '₹3,100',
    description: 'A comprehensive, multi-spread reading to explore complex situations, life transitions, relationships, and yearly foresight in absolute depth. Held online via Google Meet or Zoom.',
    whatsAppMessage: 'Hi Kavita, I need to enquire about an appointment for a 1 Hour Tarot Reading session (₹3100). Please let me know your available slots for a Zoom or Google Meet call.',
    popular: true
  }
];

export const TAROT_QUOTES = [
  {
    text: "Tarot does not predict a fixed future; it mirrors your current energetic vibration so you can consciously write your own destiny.",
    author: "Kavita"
  },
  {
    text: "The cards are a map of your subconscious minds, translating cosmic wind into clear pathways for the courageous soul.",
    author: "Kavita"
  },
  {
    text: "Clarity is not about knowing what happens tomorrow; it is about standing in your power today, completely aligned.",
    author: "Kavita"
  }
];
