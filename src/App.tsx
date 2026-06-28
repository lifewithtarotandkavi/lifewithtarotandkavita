/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TarotReader from './components/TarotReader';
import AboutKavita from './components/AboutKavita';
import Reviews from './components/Reviews';
import Offerings from './components/Offerings';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';


export default function App() {
  const handleFloatingWhatsApp = () => {
    const message = encodeURIComponent("Hi Kavita, I need to enquire about an appointment. I'm browsing your website and would love to ask you a quick question regarding booking a personalized tarot reading session.");
    window.open(`https://wa.me/919773595256?text=${message}`, '_blank');
  };

  return (
    
    <div className="relative min-h-screen w-full bg-white text-black font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden">

    


      
      {/* Navigation Layer */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Cinematic Hero Block */}
        <Hero />

        {/* Interactive Tarot Card Drawer */}
        <TarotReader />

        {/* Practice Biography */}
        <AboutKavita />

        {/* Session Booking Tiers */}
        <Offerings />

        {/* Global Client Testimonials */}
        <Reviews />
      </main>

      {/* Peaceful Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp CTA Button for Mobile/Desktop convenience */}
      <button
        onClick={handleFloatingWhatsApp}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 hover:shadow-green-500/20 transition-all duration-300 group cursor-pointer"
        aria-label="Connect via WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="h-6 w-6 fill-white text-white group-hover:rotate-12 transition-transform duration-300" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-out text-sm font-sans font-medium whitespace-nowrap">
          WhatsApp Kavita
        </span>
      </button>

    </div>
  );
}

