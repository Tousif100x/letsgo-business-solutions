import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MainLayout } from '../../../../components/layout/MainLayout';
import { Button } from '../../../../components/common/Button';
import { Card } from '../../../../components/common/Card';
import { BookingModal } from '../components/BookingModal';
import {
  Users,
  Star,
  ArrowDown,
  BedDouble,
  ChevronRight,
} from 'lucide-react';

export const ResortHome: React.FC = () => {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomName, setSelectedRoomName] = useState('Deluxe Ocean Suite');

  const openBookingWithRoom = (roomName: string) => {
    setSelectedRoomName(roomName);
    setIsBookingOpen(true);
  };

  const handleConsultation = () => {
    navigate('/contact', {
      state: {
        contextType: 'showcase',
        contextName: 'Grand Horizon Resort & Spa',
      },
    });
  };

  return (
    <MainLayout>
            {/* 1. Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden -mt-24 md:-mt-28">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-brand-charcoal">
          <img
            src="/media/industries/resort/hero.png"
            alt="The Grand Horizon Resort & Spa CLIFFSIDE VIEW"
            className="w-full h-full object-cover object-[70%_center] md:object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-brand-charcoal/45 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center text-brand-white z-10 space-y-6 pt-16">
          <div className="space-y-3 max-w-xl">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              The Grand Horizon Resort &amp; Spa
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight">
              YOUR PERFECT CLIFFSIDE ESCAPE
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-brand-white/80 leading-relaxed max-w-lg">
              Luxury stays. Breathtaking sea views. Timeless memories. Perched on coastal cliffs overlooking private turquoise coves.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              variant="accent"
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="py-3 px-8 font-semibold text-xs tracking-wider uppercase"
            >
              Simulate Your Stay
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleConsultation}
              className="py-3 px-8 text-brand-white border-brand-white hover:bg-brand-white/10 text-xs tracking-wider uppercase"
            >
              Request Custom Demo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-brand-white/60 animate-bounce">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest">
              Scroll To Discover
            </span>
            <ArrowDown size={14} className="text-brand-gold" />
          </div>
        </div>
      </section>

      {/* 2. Resort Highlights (3 Pillars) */}
      <section className="py-20 px-6 md:px-12 border-b border-brand-beige bg-brand-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              How We Resort
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
              3 Signature Pillars of The Horizon
            </h2>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Experience the pinnacle of Mediterranean coastal hospitality, curated across our unique signature operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 border-l-2 border-brand-beige pl-6">
              <div className="flex items-baseline space-x-3">
                <span className="font-sans text-xs font-bold text-brand-gold">01/</span>
                <h3 className="font-serif text-xl text-brand-charcoal">STAY</h3>
              </div>
              <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                <strong className="text-brand-charcoal">400+ Rooms &amp; Villas.</strong> Handpicked luxury suites situated on the cliff-edge with private panoramic ocean terraces and custom butler services.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-brand-beige pl-6">
              <div className="flex items-baseline space-x-3">
                <span className="font-sans text-xs font-bold text-brand-gold">02/</span>
                <h3 className="font-serif text-xl text-brand-charcoal">DINE &amp; DRINK</h3>
              </div>
              <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                <strong className="text-brand-charcoal">18+ Restaurants &amp; Bars.</strong> Culinary journeys crafted by world-class Michelin-star chefs, ranging from beachfront candlelit tables to sky-high mixology lounges.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-brand-beige pl-6">
              <div className="flex items-baseline space-x-3">
                <span className="font-sans text-xs font-bold text-brand-gold">03/</span>
                <h3 className="font-serif text-xl text-brand-charcoal">RESTORE</h3>
              </div>
              <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                <strong className="text-brand-charcoal">12+ Wellness Experiences.</strong> Rejuvenate your body and mind in our mineral-rich marine hot pools, cliffside treatment rooms, and guided dawn yoga sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Experience (Emotional Split-Layout) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#E9F2F9]/30 border-b border-[#C2D6E7]/55">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              Bespoke Sanctuary
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal leading-tight tracking-tight">
              Where Sky Meets the Turquoise Mediterranean
            </h2>
            <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
              Perched atop dramatic ocean cliffs overlooking quiet sandy bays, The Grand Horizon Resort &amp; Spa combines luxury modern minimalist architecture with raw, untouched coastal nature. 
            </p>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Here, time slows. Every morning greets you with fresh sea breezes and panoramic vistas. Every evening hosts a private golden sunset over the horizon. From our secluded beaches to custom cliffside infinity pools, every space is built to evoke pure relaxation and aspiration.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                onClick={() => openBookingWithRoom('Royal Horizon Penthouse')}
                className="group border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-ivory font-semibold text-xs tracking-wider uppercase py-2.5 px-6"
              >
                <span>Discover Signature Services</span>
                <ChevronRight size={14} className="inline ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded overflow-hidden shadow-lg border border-brand-beige">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
              alt="Luxury Pool View"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-forest/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* 4. Accommodations Showcase */}
      <section className="py-20 md:py-32 bg-brand-white text-brand-charcoal px-6 md:px-12" id="welcome">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
                Stay in Luxury
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
                Handpicked Rooms &amp; Villas
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                Discover private atmospheric suite options designed with soft organic tones, custom linen drapery, and private heated infinity pools.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => openBookingWithRoom('Deluxe Ocean Suite')}
              className="text-xs font-semibold tracking-wider uppercase py-2.5 px-6 shrink-0"
            >
              Compare Accommodations
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room 1 */}
            <Card hoverEffect={true} padding="none" className="border-brand-beige flex flex-col justify-between overflow-hidden">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src="/media/industries/resort/suite.png"
                    alt="Deluxe Ocean Suite"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl text-brand-charcoal">Deluxe Ocean Suite</h3>
                    <span className="font-serif text-lg font-bold text-brand-forest">₹35,000<span className="text-xs font-sans text-brand-charcoal/50 font-normal">/nt</span></span>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Spacious room with custom ivory limestone walls, private glass balcony, marble bathtub, and automated ocean views.
                  </p>
                  <ul className="text-[10px] font-sans font-semibold tracking-wide text-brand-charcoal/50 uppercase flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    <li className="flex items-center"><BedDouble size={12} className="mr-1" /> 1 King Bed</li>
                    <li className="flex items-center"><Users size={12} className="mr-1" /> Max 3 Guests</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-brand-beige/50 mt-4 flex items-center justify-between">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  Direct Reserve Saving
                </span>
                <button
                  onClick={() => openBookingWithRoom('Deluxe Ocean Suite')}
                  className="font-sans text-xs font-bold text-brand-forest hover:text-[#153e2a] hover:underline"
                >
                  Book Suite
                </button>
              </div>
            </Card>

            {/* Room 2 */}
            <Card hoverEffect={true} padding="none" className="border-brand-beige flex flex-col justify-between overflow-hidden">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80"
                    alt="Premium Garden Villa"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl text-brand-charcoal">Premium Garden Villa</h3>
                    <span className="font-serif text-lg font-bold text-brand-forest">₹48,000<span className="text-xs font-sans text-brand-charcoal/50 font-normal">/nt</span></span>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Detached private sanctuary nestled inside lush tropical gardens. Features personal heated dip pool and outdoor stone shower.
                  </p>
                  <ul className="text-[10px] font-sans font-semibold tracking-wide text-brand-charcoal/50 uppercase flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    <li className="flex items-center"><BedDouble size={12} className="mr-1" /> 2 Queen Beds</li>
                    <li className="flex items-center"><Users size={12} className="mr-1" /> Max 4 Guests</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-brand-beige/50 mt-4 flex items-center justify-between">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  Direct Reserve Saving
                </span>
                <button
                  onClick={() => openBookingWithRoom('Premium Garden Villa')}
                  className="font-sans text-xs font-bold text-brand-forest hover:text-[#153e2a] hover:underline"
                >
                  Book Villa
                </button>
              </div>
            </Card>

            {/* Room 3 */}
            <Card hoverEffect={true} padding="none" className="border-brand-beige flex flex-col justify-between overflow-hidden">
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1601918774516-5d4e0a07c4f3?auto=format&fit=crop&w=700&q=80"
                    alt="Royal Horizon Penthouse"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl text-brand-charcoal">Royal Horizon Penthouse</h3>
                    <span className="font-serif text-lg font-bold text-brand-forest">₹95,000<span className="text-xs font-sans text-brand-charcoal/50 font-normal">/nt</span></span>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Our top-floor ultimate residency. Expansive private skydeck terrace, infinity hot pool, glass-walled kitchen, and chef access.
                  </p>
                  <ul className="text-[10px] font-sans font-semibold tracking-wide text-brand-charcoal/50 uppercase flex flex-wrap gap-x-4 gap-y-1 pt-2">
                    <li className="flex items-center"><BedDouble size={12} className="mr-1" /> 3 King Beds</li>
                    <li className="flex items-center"><Users size={12} className="mr-1" /> Max 6 Guests</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-brand-beige/50 mt-4 flex items-center justify-between">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  Direct Reserve Saving
                </span>
                <button
                  onClick={() => openBookingWithRoom('Royal Horizon Penthouse')}
                  className="font-sans text-xs font-bold text-brand-forest hover:text-[#153e2a] hover:underline"
                >
                  Book Penthouse
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Dining Experience */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-brand-ivory border-b border-brand-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded overflow-hidden shadow-lg border border-brand-beige order-last lg:order-first">
            <img
              src="/media/industries/resort/dining.png"
              alt="Luxury Dining Setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              Culinary Artistry
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal leading-tight tracking-tight">
              From Barefoot Beach Grills to Sky-High Cocktails
            </h2>
            <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
              Savor curated seasonal menus sourced from local marine catches, organic estates, and handpicked boutique wineries. 
            </p>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Dine on white linens at our candlelit shoreline grids, listen to waves crash, or elevate your evenings with custom botanical cocktails mixed by international artisans on our high-elevation scenic sky terrace.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-brand-beige/80">
              <div>
                <span className="block font-serif text-lg text-brand-forest">18+</span>
                <span className="block font-sans text-[9px] text-brand-charcoal/50 uppercase font-semibold">Restaurants &amp; Bars</span>
              </div>
              <div>
                <span className="block font-serif text-lg text-brand-forest">100%</span>
                <span className="block font-sans text-[9px] text-brand-charcoal/50 uppercase font-semibold">Organic Estate Sourced</span>
              </div>
              <div>
                <span className="block font-serif text-lg text-brand-forest">24h</span>
                <span className="block font-sans text-[9px] text-brand-charcoal/50 uppercase font-semibold">Private Villa Dining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Activities & Experiences */}
      <section className="py-20 px-6 md:px-12 bg-brand-white border-b border-brand-beige">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              Curated Adventures
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
              Experiences of The Horizon
            </h2>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Fill your days with mindful recovery, active marine explorations, and curated culinary workshops designed to connect you to the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center">
              <div className="aspect-[3/4] rounded overflow-hidden border border-brand-beige shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                  alt="Marine Spa Wellness"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-brand-charcoal">The Marine Spa</h4>
                <p className="font-sans text-xs text-brand-charcoal/50">Thermal pools, heated volcanic stones, marine oils</p>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <div className="aspect-[3/4] rounded overflow-hidden border border-brand-beige shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
                  alt="Yacht Coastal Excursions"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-brand-charcoal">Yacht Excursions</h4>
                <p className="font-sans text-xs text-brand-charcoal/50">Explore hidden sea arches, coves, and private islands</p>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <div className="aspect-[3/4] rounded overflow-hidden border border-brand-beige shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80"
                  alt="Bespoke Private Tastings"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-brand-charcoal">Bespoke Tastings</h4>
                <p className="font-sans text-xs text-brand-charcoal/50">Sommelier wine pairing courses and olive oil tastings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="py-20 px-6 md:px-12 bg-[#E9F2F9]/20 border-b border-[#C2D6E7]/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              Visual Narrative
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal">
              Atmospheric Moments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 aspect-[2/1] md:aspect-[3/1] max-w-5xl mx-auto">
            <div className="rounded overflow-hidden border border-brand-beige relative group">
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=500&q=80"
                alt="Coastline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded overflow-hidden border border-brand-beige md:col-span-2 relative group">
              <img
                src="https://images.unsplash.com/photo-1540541338537-71cf3b58c19a?auto=format&fit=crop&w=800&q=80"
                alt="Beach Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded overflow-hidden border border-brand-beige relative group">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=500&q=80"
                alt="Lounge Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials (Trust-Building Reviews) */}
      <section className="py-20 px-6 md:px-12 bg-[#E9F2F9]/10 border-b border-[#C2D6E7]/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              Verified Stays
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
              Stories From Our Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card hoverEffect={false} className="border-[#C2D6E7]/60 bg-brand-white p-8 space-y-6">
              <div className="flex items-center text-brand-gold space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="font-serif text-lg text-brand-charcoal leading-relaxed italic">
                "An absolute coastal sanctuary. Requesting a direct suite reservation bypassed OTA fees and the check-in concierge greeted us with organic botanicals. The cliffside villas are unmatched."
              </p>
              <div className="border-t border-brand-beige/50 pt-4 flex items-center justify-between">
                <div>
                  <span className="block font-sans text-xs font-semibold text-brand-charcoal">Charlotte V.</span>
                  <span className="block font-sans text-[10px] text-brand-charcoal/50">Paris, France</span>
                </div>
                <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-brand-forest bg-brand-forest/10 px-2 py-0.5 rounded">
                  Verified Guest
                </span>
              </div>
            </Card>

            <Card hoverEffect={false} className="border-[#C2D6E7]/60 bg-brand-white p-8 space-y-6">
              <div className="flex items-center text-brand-gold space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="font-serif text-lg text-brand-charcoal leading-relaxed italic">
                "We were wowed by the direct table reservations for the barefoot beach dinners. The private yacht tour is a must-do. Completely stress-free anniversary escape."
              </p>
              <div className="border-t border-brand-beige/50 pt-4 flex items-center justify-between">
                <div>
                  <span className="block font-sans text-xs font-semibold text-brand-charcoal">Marcus &amp; Elena D.</span>
                  <span className="block font-sans text-[10px] text-brand-charcoal/50">London, UK</span>
                </div>
                <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-brand-forest bg-brand-forest/10 px-2 py-0.5 rounded">
                  Verified Guest
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Final CTA - Plan Your Escape */}
      <section className="bg-[#E9F2F9]/30 border-y border-[#C2D6E7]/60 py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold">
            Plan Your Escape
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal leading-tight">
            Escaping is the Only True Luxury.
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            Launch our simulated stay booking widget to compute pricing, or contact our central agency to discuss direct booking platforms for your hospitality properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="py-3 px-8 font-semibold text-xs tracking-wider uppercase"
            >
              Simulate reservation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleConsultation}
              className="py-3 px-8 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal/5 text-xs tracking-wider uppercase"
            >
              Book Resort Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Dedicated Minimalist Footer */}
      <footer className="bg-brand-charcoal text-brand-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-brand-white/40 space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="font-serif text-sm font-bold tracking-tight text-brand-white">
              THE GRAND HORIZON
            </span>
            <span className="font-sans text-[8px] font-bold tracking-[0.25em] text-brand-white/50 uppercase">
              Resort &amp; Spa
            </span>
          </div>
          <div className="flex space-x-6 text-[10px] font-semibold tracking-wider uppercase font-sans">
            <span onClick={() => setIsBookingOpen(true)} className="hover:text-brand-gold cursor-pointer transition-colors">Book Stay</span>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">Inquire Demo</Link>
            <Link to="/industries" className="hover:text-brand-gold transition-colors">LBS Hub</Link>
          </div>
          <div>
            <p>© {new Date().getFullYear()} The Grand Horizon Resort &amp; Spa. Showcase Prototype Only.</p>
          </div>
        </div>
      </footer>

      {/* Booking Simulator Modal Component */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoomName={selectedRoomName}
      />
    </MainLayout>
  );
};
export default ResortHome;


