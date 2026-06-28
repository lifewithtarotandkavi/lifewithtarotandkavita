export interface TarotCard {
  id: string;
  name: string;
  arcana: 'Major' | 'Minor';
  keyThemes: string[];
  meaning: string;
  uprightAdvice: string;
  quote: string;
  imageSymbol: string; // A descriptive word to render a beautiful symbolic illustration
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl?: string;
  nationality: 'Indian' | 'International';
}

export interface Offering {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  whatsAppMessage: string;
  popular?: boolean;
}
