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
import { Helmet } from "react-helmet-async";

export default function App() {
  const handleFloatingWhatsApp = () => {
    const message = encodeURIComponent("Hi Kavita, I need to enquire about an appointment. I'm browsing your website and would love to ask you a quick question regarding booking a personalized tarot reading session.");
    window.open(`https://wa.me/919773595256?text=${message}`, '_blank');
  };

  return (
    
    <div className="relative min-h-screen w-full bg-white text-black font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden">

    


      <Helmet>
  <title>Life With Tarot & Kavi | Professional Tarot Reader & Numerology</title>

  <meta
    name="description"
    content="Professional Tarot Reading and Numerology guidance by Kavita. Book online and in-person sessions for love, career, relationships, marriage and personal growth."
  />

  <meta
    name="keywords"
    content="Tarot Reader, Tarot Reading, Numerology, Online Tarot Reading, Love Tarot, Career Guidance, Marriage Guidance, Tarot India"
  />

  <meta name="author" content="Life With Tarot & Kavi" />

  <meta name="robots" content="index,follow" />

  <link
  rel="canonical"
  href="https://lifewithtarotandkavita.vercel.app"
/>

  <meta
  property="og:image"
  content="https://lifewithtarotandkavita.vercel.app/og-image.png"
/>

<meta property="og:image:type" content="image/png" />

<meta property="og:image:width" content="1200" />

<meta property="og:image:height" content="630" />

<meta
  name="twitter:image"
  content="https://lifewithtarotandkavita.vercel.app/og-image.png"
/>

  <meta property="og:site_name" content="Life With Tarot & Kavi" />

<meta property="og:locale" content="en_US" />

<meta name="twitter:card" content="summary_large_image" />

  <meta property="og:type" content="website" />

  <meta property="og:title" content="Life With Tarot & Kavi" />

  <meta
    property="og:description"
    content="Professional Tarot Reading & Numerology Guidance."
  />

  <meta
    property="og:url"
    content="https://lifewithtarotandkavita.vercel.app"
  />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Life With Tarot & Kavi",
      image: "https://lifewithtarotandkavita.vercel.app/og-image.png",
      url: "https://lifewithtarotandkavita.vercel.app",
      telephone: "+91 9773595256",
      description:
        "Professional Tarot Reading and Numerology Guidance for love, career, relationships, marriage, finance and personal growth.",
      priceRange: "₹₹",
      areaServed: "Worldwide",
      availableLanguage: [
        "English",
        "Hindi"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9773595256",
        contactType: "Customer Support",
        availableLanguage: [
          "English",
          "Hindi"
        ]
      }
    }),
  }}
/>
</Helmet>
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

