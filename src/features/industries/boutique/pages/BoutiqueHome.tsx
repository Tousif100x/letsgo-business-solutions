import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../../../components/layout/MainLayout';
import { Button } from '../../../../components/common/Button';
import { Card } from '../../../../components/common/Card';
import { StylingModal } from '../components/StylingModal';
import { ShowcaseNavigation } from '../../../../components/shared/ShowcaseNavigation';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Flower2,
  Compass,
  Scissors,
  ChevronRight,
  Info
} from 'lucide-react';

type WingType = 'courtyard' | 'bridal' | 'festive' | 'designer' | 'tailoring';

interface FeaturedLook {
  id: string;
  name: string;
  price: number;
  fabrics: string;
  craft: string;
  image: string;
  description: string;
}

const BRIDAL_LOOKS: FeaturedLook[] = [
  {
    id: 'bridal-1',
    name: 'The Noor Mahal Lehenga',
    price: 125000,
    fabrics: 'Pure Raw Silk in Antique Ivory',
    craft: '400 Hours of Zardozi & Muted Dabka Wirework',
    image: '/images/boutique/noor-mahal.png',
    description: 'A classic heritage silhouette embroidered with geometric borders inspired by Mughal stone carvings.'
  },
  {
    id: 'bridal-2',
    name: 'Shehnai Terracotta Sherwani',
    price: 98000,
    fabrics: 'Handloomed Banarasi Silk',
    craft: 'Fine Tilla embroidery and antique gold thread details',
    image: '/images/boutique/sherwani.png',
    description: 'An unstructured classic drape for celebrations, blending heritage borders with comfortable contours.'
  }
];

const FESTIVE_LOOKS: FeaturedLook[] = [
  {
    id: 'festive-1',
    name: 'Darbar Mint Anarkali',
    price: 48000,
    fabrics: 'Pure Silk Georgette in Muted Sage',
    craft: 'Lucknowi Chikankari & delicate pearl embellishments',
    image: '/images/boutique/festive-room.png',
    description: 'An airy, full-flare silhouette featuring floral jali motifs woven by hand into lightweight fabric.'
  },
  {
    id: 'festive-2',
    name: 'Jali Tissue Dupatta',
    price: 22000,
    fabrics: 'Chanderi Kora Silk Tissue',
    craft: 'Woven antique gold borders & floral block-print center',
    image: '/media/industries/boutique/lookbook.png',
    description: 'A shimmering accent piece, perfect to elevate traditional ensembles with heritage textures.'
  }
];

const DESIGNER_LOOKS: FeaturedLook[] = [
  {
    id: 'designer-1',
    name: 'Heritage Emerald Kurta Set',
    price: 35000,
    fabrics: 'Heavy Handwoven Varanasi Raw Silk',
    craft: 'Minimalist neckline embroidery with Antique Zari',
    image: '/images/boutique/midnight-velvet.png',
    description: 'A modern, clean-cut tailored set highlighting organic silk textures and hand-carved brass buttons.'
  },
  {
    id: 'designer-2',
    name: 'Terracotta Palazzo Drape',
    price: 28000,
    fabrics: 'Linen-Silk Blend in Soft Clay',
    craft: 'Handblock printed motifs and pleated border accents',
    image: '/images/boutique/brocade-blazer.png',
    description: 'Quiet luxury designed for modern styling, offering fluid drape lines and elegant movement.'
  }
];

const TAILORING_LOOKS: FeaturedLook[] = [
  {
    id: 'tailoring-1',
    name: 'Bespoke Atelier Design Session',
    price: 30000,
    fabrics: 'Custom selection from our Private Silk Archives',
    craft: 'Tailored precisely to your frame over 3 separate fittings',
    image: '/images/boutique/heritage-waistcoat.png',
    description: 'Our signature tailoring service. Work with our master drapers to sketch and draft your heirloom.'
  }
];

export const BoutiqueHome: React.FC = () => {
  const navigate = useNavigate();
  const [activeWing, setActiveWing] = useState<WingType>('courtyard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Seasonal Wardrobe Refresh');

  const openStylingWithService = (serviceName: string) => {
    setSelectedServiceName(serviceName);
    setIsModalOpen(true);
  };

  const handleLBSConsultation = () => {
    navigate('/contact', {
      state: {
        contextType: 'showcase',
        contextName: 'AURA Atelier',
      },
    });
  };

  // Helper component to render the Mughal arch border outline
  const MughalArchFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        preserveAspectRatio="none" 
        className="absolute inset-0 w-full h-full pointer-events-none stroke-[#B08D57]/45 z-20"
      >
        <path 
          d="M 3,97 L 3,45 C 3,25 10,18 25,15 C 35,12 42,8 50,3 C 58,8 65,12 75,15 C 90,18 97,25 97,45 L 97,97 Z" 
          vectorEffect="non-scaling-stroke"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );

  return (
    <MainLayout>
      <ShowcaseNavigation 
        sectorName="Fashion & Lifestyle" 
        sectorSlug="fashion-lifestyle" 
        showcaseName="AURA Atelier" 
        accentColor="#B08D57" 
        theme="light" 
      />
      {/* Normalized SVG Clip Path for Mughal Arch cropping */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="mughal-arch-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.03,0.97 L 0.03,0.45 C 0.03,0.25 0.1,0.18 0.25,0.15 C 0.35,0.12 0.42,0.08 0.5,0.03 C 0.58,0.08 0.65,0.12 0.75,0.15 C 0.9,0.18 0.97,0.25 0.97,0.45 L 0.97,0.97 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="min-h-screen bg-[#FBF7F0] text-[#2B2B2B] font-sans -mt-24 md:-mt-28 pt-24 md:pt-28 selection:bg-[#3E5A46]/10 selection:text-[#3E5A46]">
                
        {/* AURA ATELIER CUSTOM HEADER */}
        <header className="border-b border-[#B08D57]/20 py-6 px-6 bg-[#FBF7F0] sticky top-[73px] z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveWing('courtyard')}>
              <div className="text-[#3E5A46] p-1.5 border border-[#B08D57]/30 rounded-full">
                <Flower2 className="w-5 h-5 stroke-[1.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-[0.1em] text-[#2B2B2B] uppercase">
                  Aura Atelier
                </span>
                <span className="font-sans text-[7px] font-bold tracking-[0.25em] text-[#B08D57] uppercase -mt-0.5">
                  Bespoke Indian Fashion
                </span>
              </div>
            </div>

            {/* Local Nav links */}
            <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]/75">
              <button 
                onClick={() => setActiveWing('courtyard')}
                className={`hover:text-[#3E5A46] transition-colors ${activeWing === 'courtyard' ? 'text-[#3E5A46] underline decoration-[#B08D57] underline-offset-4' : ''}`}
              >
                The Experience
              </button>
              <button 
                onClick={() => setActiveWing('bridal')}
                className={`hover:text-[#3E5A46] transition-colors ${activeWing === 'bridal' ? 'text-[#3E5A46] underline decoration-[#B08D57] underline-offset-4' : ''}`}
              >
                Bridal Room
              </button>
              <button 
                onClick={() => setActiveWing('festive')}
                className={`hover:text-[#3E5A46] transition-colors ${activeWing === 'festive' ? 'text-[#3E5A46] underline decoration-[#B08D57] underline-offset-4' : ''}`}
              >
                Festive Room
              </button>
              <button 
                onClick={() => setActiveWing('designer')}
                className={`hover:text-[#3E5A46] transition-colors ${activeWing === 'designer' ? 'text-[#3E5A46] underline decoration-[#B08D57] underline-offset-4' : ''}`}
              >
                Designer Picks
              </button>
              <button 
                onClick={() => setActiveWing('tailoring')}
                className={`hover:text-[#3E5A46] transition-colors ${activeWing === 'tailoring' ? 'text-[#3E5A46] underline decoration-[#B08D57] underline-offset-4' : ''}`}
              >
                Custom Tailoring
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="primary" 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#3E5A46] text-white hover:bg-[#3E5A46]/95 border-none text-[10px] tracking-widest uppercase font-semibold py-2 px-5"
              >
                Book Atelier Consultation
              </Button>
            </div>
          </div>
        </header>

        {/* VIEW CONTROLLER */}
        {activeWing === 'courtyard' ? (
          
          /* ========================================================================= */
          /* CENTRAL COURTYARD HOMEPAGE VIEW                                           */
          /* ========================================================================= */
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
            
            {/* Mughal Courtyard Wings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* West Column: Bridal and Designer Picks */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-8">
                
                {/* West Wing: Bridal */}
                <Card 
                  hoverEffect={true} 
                  padding="none" 
                  onClick={() => setActiveWing('bridal')}
                  className="border-none bg-transparent flex flex-col items-center text-center cursor-pointer group"
                >
                  <MughalArchFrame className="w-full aspect-[3/4] relative bg-[#F1E9DC]">
                    <img 
                      src="/media/industries/boutique/bridal.png" 
                      alt="Bridal Collection"
                      style={{ clipPath: 'url(#mughal-arch-clip)' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </MughalArchFrame>
                  <div className="mt-4 space-y-1.5 px-3">
                    <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#B08D57]">West Wing</span>
                    <h3 className="font-serif text-lg text-[#2B2B2B]">Bridal Collection</h3>
                    <p className="font-sans text-[10px] text-[#2B2B2B]/60 max-w-[200px]">For your most precious beginnings.</p>
                    <span className="inline-flex items-center text-[10px] font-bold text-[#3E5A46] pt-1">
                      <span>Explore Bridal</span>
                      <ArrowRight size={10} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Card>

                {/* North Wing: Designer Picks */}
                <Card 
                  hoverEffect={true} 
                  padding="none" 
                  onClick={() => setActiveWing('designer')}
                  className="border-none bg-transparent flex flex-col items-center text-center cursor-pointer group"
                >
                  <MughalArchFrame className="w-full aspect-[3/4] relative bg-[#F1E9DC]">
                    <img 
                      src="/media/industries/boutique/designer.png" 
                      alt="Designer Picks"
                      style={{ clipPath: 'url(#mughal-arch-clip)' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </MughalArchFrame>
                  <div className="mt-4 space-y-1.5 px-3">
                    <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#B08D57]">North Wing</span>
                    <h3 className="font-serif text-lg text-[#2B2B2B]">Designer Picks</h3>
                    <p className="font-sans text-[10px] text-[#2B2B2B]/60 max-w-[200px]">Handpicked signature silhouettes.</p>
                    <span className="inline-flex items-center text-[10px] font-bold text-[#3E5A46] pt-1">
                      <span>Discover Now</span>
                      <ArrowRight size={10} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Card>

              </div>

              {/* Center Courtyard: Large Centerpiece Arch */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[82vh] bg-[#F1E9DC] rounded-[100px] border border-[#B08D57]/30 overflow-hidden shadow-xl p-2">
                  
                  {/* Background Image of the Mughal Courtyard */}
                  <img 
                    src="/media/industries/boutique/courtyard.png" 
                    alt="Mughal Reflection Pool Courtyard"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/40 via-[#FBF7F0]/20 to-[#FBF7F0]/85" />
                  
                  {/* Decorative Frame Line */}
                  <svg 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    preserveAspectRatio="none" 
                    className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] pointer-events-none stroke-[#B08D57]/45 z-10"
                  >
                    <path 
                      d="M 5,95 L 5,30 C 5,18 10,12 25,10 C 35,8 42,5 50,2 C 58,5 65,8 75,10 C 90,12 95,18 95,30 L 95,95 Z" 
                      vectorEffect="non-scaling-stroke"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Central Centerpiece Content Box */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-8 z-10 max-w-md mx-auto space-y-6">
                    <div className="text-[#3E5A46]">
                      <Flower2 className="w-10 h-10 stroke-[0.8] mx-auto animate-pulse" />
                    </div>
                    
                    <div className="space-y-3">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#B08D57]">The Courtyard Portal</span>
                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B] leading-tight">
                        A Journey Through Timeless Elegance
                      </h1>
                      <div className="w-16 h-px bg-[#B08D57]/40 mx-auto" />
                      <p className="font-sans text-xs text-[#2B2B2B]/75 leading-relaxed">
                        Step into a world where heritage craftsmanship meets contemporary sophistication. Explore our curated wings of craftsmanship, design, and storytelling.
                      </p>
                    </div>

                    <Button 
                      onClick={() => setActiveWing('bridal')}
                      className="bg-[#3E5A46] text-white hover:bg-[#3E5A46]/95 border border-[#B08D57]/30 text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 group rounded-full"
                    >
                      <span>Begin Your Journey</span>
                      <ChevronRight size={12} className="inline ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* East Column: Festive and Custom Tailoring */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-8">
                
                {/* East Wing: Festive */}
                <Card 
                  hoverEffect={true} 
                  padding="none" 
                  onClick={() => setActiveWing('festive')}
                  className="border-none bg-transparent flex flex-col items-center text-center cursor-pointer group"
                >
                  <MughalArchFrame className="w-full aspect-[3/4] relative bg-[#F1E9DC]">
                    <img 
                      src="/media/industries/boutique/festive.png" 
                      alt="Festive Collection"
                      style={{ clipPath: 'url(#mughal-arch-clip)' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </MughalArchFrame>
                  <div className="mt-4 space-y-1.5 px-3">
                    <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#B08D57]">East Wing</span>
                    <h3 className="font-serif text-lg text-[#2B2B2B]">Festive Collection</h3>
                    <p className="font-sans text-[10px] text-[#2B2B2B]/60 max-w-[200px]">Celebrate traditions in timeless style.</p>
                    <span className="inline-flex items-center text-[10px] font-bold text-[#3E5A46] pt-1">
                      <span>Explore Festive</span>
                      <ArrowRight size={10} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Card>

                {/* South Wing: Custom Tailoring */}
                <Card 
                  hoverEffect={true} 
                  padding="none" 
                  onClick={() => setActiveWing('tailoring')}
                  className="border-none bg-transparent flex flex-col items-center text-center cursor-pointer group"
                >
                  <MughalArchFrame className="w-full aspect-[3/4] relative bg-[#F1E9DC]">
                    <img 
                      src="/media/industries/boutique/tailoring.png" 
                      alt="Custom Tailoring Atelier"
                      style={{ clipPath: 'url(#mughal-arch-clip)' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </MughalArchFrame>
                  <div className="mt-4 space-y-1.5 px-3">
                    <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#B08D57]">South Wing</span>
                    <h3 className="font-serif text-lg text-[#2B2B2B]">Custom Tailoring</h3>
                    <p className="font-sans text-[10px] text-[#2B2B2B]/60 max-w-[200px]">Bespoke design, made for you.</p>
                    <span className="inline-flex items-center text-[10px] font-bold text-[#3E5A46] pt-1">
                      <span>Learn More</span>
                      <ArrowRight size={10} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Card>

              </div>
            </div>

            {/* Sub-grid: Brand Pillars */}
            <section className="bg-[#F9E9EC]/40 border-y border-[#ECC6CD]/60 py-12 px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center space-y-2.5">
                  <Flower2 className="w-6 h-6 text-[#3E5A46] mx-auto stroke-[1.2]" />
                  <h4 className="font-serif text-base text-[#2B2B2B] font-semibold">Heritage Craftsmanship</h4>
                  <p className="font-sans text-[10px] text-[#2B2B2B]/60 leading-relaxed px-4">
                    Preserving age-old handloom techniques with unmatched artisan dedication.
                  </p>
                </div>
                <div className="text-center space-y-2.5">
                  <Compass className="w-6 h-6 text-[#3E5A46] mx-auto stroke-[1.2]" />
                  <h4 className="font-serif text-base text-[#2B2B2B] font-semibold">Premium Fabrics</h4>
                  <p className="font-sans text-[10px] text-[#2B2B2B]/60 leading-relaxed px-4">
                    Finest raw silks, sheer linens, and lightweight textiles sourced from local clusters.
                  </p>
                </div>
                <div className="text-center space-y-2.5">
                  <Sparkles className="w-6 h-6 text-[#3E5A46] mx-auto stroke-[1.2]" />
                  <h4 className="font-serif text-base text-[#2B2B2B] font-semibold">Bespoke Experience</h4>
                  <p className="font-sans text-[10px] text-[#2B2B2B]/60 leading-relaxed px-4">
                    Personalized styling, tailored measurements, and coordinate draping sessions.
                  </p>
                </div>
                <div className="text-center space-y-2.5">
                  <Scissors className="w-6 h-6 text-[#3E5A46] mx-auto stroke-[1.2]" />
                  <h4 className="font-serif text-base text-[#2B2B2B] font-semibold">Sustainable Fashion</h4>
                  <p className="font-sans text-[10px] text-[#2B2B2B]/60 leading-relaxed px-4">
                    Slow fashion cycles that honor handloom traditions and small artisan networks.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Story Card */}
            <div className="border border-[#ECC6CD]/50 rounded-xl p-8 bg-[#F9E9EC]/20 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              <div className="space-y-1.5 md:max-w-2xl">
                <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#B08D57]">The Atelier Story</span>
                <h4 className="font-serif text-xl text-[#2B2B2B] font-bold">Every outfit at Aura Atelier is a story of craftsmanship.</h4>
                <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                  We bridge centuries-old Indian handloom weaving and embroidery processes with modern architectural contours. Discover the story woven into the threads.
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLBSConsultation}
                className="border-[#3E5A46] text-[#3E5A46] hover:bg-[#3E5A46]/5 whitespace-nowrap text-[9px] uppercase tracking-wider py-2.5 px-6 font-bold"
              >
                Explore Our Heritage Blueprints →
              </Button>
            </div>

            {/* Strategic Value cards for business owners */}
            <section className="pt-8 space-y-12">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#B08D57] bg-[#B08D57]/10 px-3 py-1 rounded inline-block">
                  Platform Showcase Concept
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#2B2B2B]">
                  Quiet Luxury Presentation Over Standard Grids
                </h2>
                <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                  AURA Atelier demonstrating how high-end boutiques capture value through experience-driven digital paths instead of noisy storefront listing cards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card hoverEffect={false} className="bg-[#F9E9EC]/15 border-[#ECC6CD]/50 space-y-3">
                  <div className="flex items-center space-x-3 text-[#3E5A46]">
                    <Compass size={20} strokeWidth={1.5} />
                    <h3 className="font-serif text-base text-[#2B2B2B] font-semibold">High-End Walkthrough Flow</h3>
                  </div>
                  <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                    Rather than dropping visitors into rows of catalog blocks, the walkthrough evokes history and tactile beauty, guiding visitors to schedule high-margin custom styling assessments.
                  </p>
                </Card>

                <Card hoverEffect={false} className="bg-[#F9E9EC]/15 border-[#ECC6CD]/50 space-y-3">
                  <div className="flex items-center space-x-3 text-[#3E5A46]">
                    <Sparkles size={20} strokeWidth={1.5} />
                    <h3 className="font-serif text-base text-[#2B2B2B] font-semibold">Elevate Average Basket Values</h3>
                  </div>
                  <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                    By showing complete coordinated looks inside dynamic theme chambers, visitors inquire about curated outfits rather than single items, lifting brand ticket size.
                  </p>
                </Card>

                <Card hoverEffect={false} className="bg-[#F9E9EC]/15 border-[#ECC6CD]/50 space-y-3">
                  <div className="flex items-center space-x-3 text-[#3E5A46]">
                    <Info size={20} strokeWidth={1.5} />
                    <h3 className="font-serif text-base text-[#2B2B2B] font-semibold">Zero Commission Intake</h3>
                  </div>
                  <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                    Own your customer experience. Consultation reservations, fits, and customized styling requests route directly to your team without commission-deducting aggregators.
                  </p>
                </Card>
              </div>
            </section>

          </div>
        ) : (
          
          /* ========================================================================= */
          /* COLLECTION ROOM VIEW (BRIDAL, FESTIVE, DESIGNER PICKS, CUSTOM TAILORING)   */
          /* ========================================================================= */
          <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
            
            {/* Back Chevron Bar */}
            <div className="flex justify-between items-center border-b border-[#B08D57]/20 pb-6">
              <button 
                onClick={() => setActiveWing('courtyard')}
                className="flex items-center text-xs font-bold uppercase tracking-wider text-[#3E5A46] hover:text-[#B08D57] transition-colors group"
              >
                <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-0.5 transition-transform" />
                <span>Return to Courtyard</span>
              </button>
              <span className="font-serif italic text-sm text-[#B08D57]">
                {activeWing === 'bridal' && 'The Bridal Chamber'}
                {activeWing === 'festive' && 'The Festive Room'}
                {activeWing === 'designer' && 'The Designer Edit'}
                {activeWing === 'tailoring' && 'The Bespoke Drape'}
              </span>
            </div>

            {/* Wing Detail Rooms Render */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Story & Inspiration details */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 1. The Story */}
                <div className="space-y-4">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#B08D57]">I. The Collection Narrative</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#2B2B2B]">
                    {activeWing === 'bridal' && 'A Poetical Union of Gold & Silk'}
                    {activeWing === 'festive' && 'Sunlit Courtyards & Mint Silhouettes'}
                    {activeWing === 'designer' && 'Contemporary Lines, Antique Threads'}
                    {activeWing === 'tailoring' && 'The Quiet Craft of Made-To-Measure'}
                  </h2>
                  <p className="font-sans text-sm text-[#2B2B2B]/75 leading-relaxed">
                    {activeWing === 'bridal' && 'Crafted for precious beginnings, our Bridal collection combines heavy, structured drapes with delicate motifs. Inspired by Mughal lattice gardens, each border represents an eternal pattern, weaving classic heritage details into silhouettes that float down the aisle.'}
                    {activeWing === 'festive' && 'A celebration of community, breeze, and laughter. Our Festive line emphasizes lightweight movement, pastels, and floral decorations. These ensembles are engineered to move fluidly in celebration nights, echoing centuries of courtyard festivities.'}
                    {activeWing === 'designer' && 'The designer culls patterns directly from private archives, scaling down complex shapes to build minimal, daily couture statement pieces. Quiet luxury raw silk coordinates designed to present structural elegance.'}
                    {activeWing === 'tailoring' && 'Tailoring is a slow, collaborative dialogue. Our master patternmakers study the line and weight of fine handlooms, drafting customized paper blueprints matching your specific posture and frame. An heirloom built for comfort.'}
                  </p>
                </div>

                {/* 2. The Inspiration */}
                <div className="space-y-3 pt-4 border-t border-[#B08D57]/20">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#B08D57]">II. Design Inspiration</span>
                  <h3 className="font-serif text-xl text-[#2B2B2B]">
                    {activeWing === 'bridal' && 'Lattice Jali Work & Marble Carvings'}
                    {activeWing === 'festive' && 'Heritage Wall Frescoes & Floral Creepers'}
                    {activeWing === 'designer' && 'Symmetry, Contrast, and Sandstone Archways'}
                    {activeWing === 'tailoring' && 'The Geometry of Draping Fabrics'}
                  </h3>
                  <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                    {activeWing === 'bridal' && 'We draw grids and motifs directly from the white marble screen panels of Red Fort arches. The double-border lines on the raw silk lehenga hem echo these classic geometric frames.'}
                    {activeWing === 'festive' && 'Faint floral patterns printed onto georgette and silk blends are inspired by the hand-painted wall creepers and clay frescoes of royal chambers.'}
                    {activeWing === 'designer' && 'Deep forest green colors and brass buttons align with sandstone fort doorways, framing traditional silhouettes with contemporary neat cuffs.'}
                    {activeWing === 'tailoring' && 'Draft lines are measured using antique methods. The fabric weight determines the stitch density, ensuring raw silk drapes cleanly without gathering.'}
                  </p>
                </div>

                {/* 3. The Craftsmanship */}
                <div className="space-y-3 pt-4 border-t border-[#B08D57]/20">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#B08D57]">III. Traditional Artisan Craft</span>
                  <h3 className="font-serif text-xl text-[#2B2B2B]">
                    {activeWing === 'bridal' && 'Antique Zardozi & Hand-coiled Metal'}
                    {activeWing === 'festive' && 'Delicate Chikankari & Block borders'}
                    {activeWing === 'designer' && 'Varanasi Handlooms & Chanderi Weaving'}
                    {activeWing === 'tailoring' && 'Heritage Paper Drafting & Hand-stitching'}
                  </h3>
                  <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                    {activeWing === 'bridal' && 'Fine silver-alloy wire (Dabka) is coiled and stitched onto raw silk by master artisans. Pearls are nested inside patterns, requiring up to three months of delicate needlework.'}
                    {activeWing === 'festive' && 'Delicate white shadow-stitch threads are embroidered onto soft mint georgette, framed by hand-block borders printed using teak wood blocks.'}
                    {activeWing === 'designer' && 'Our raw silks are woven on traditional handlooms in Varanasi. These organic looms yield unique texture variations that define quiet quality.'}
                    {activeWing === 'tailoring' && 'Every canvas is drafted individually. Internal linings are stitched by hand to preserve structural memory, preventing seams from pulling over time.'}
                  </p>
                </div>

              </div>

              {/* Right Side: Mughal Arch Themed Feature Graphic */}
              <div className="lg:col-span-5 relative w-full aspect-[3/4] bg-[#F1E9DC] rounded-[40px] overflow-hidden border border-[#B08D57]/20 shadow-md">
                <img 
                  src={
                    activeWing === 'bridal' ? '/images/boutique/bridal-room.png' :
                    activeWing === 'festive' ? '/images/boutique/festive-room.png' :
                    activeWing === 'designer' ? '/images/boutique/designer-room.png' :
                    '/images/boutique/tailoring-room.png'
                  }
                  alt="Atelier room mood display"
                  style={{ clipPath: 'url(#mughal-arch-clip)' }}
                  className="w-full h-full object-cover p-1"
                />
                
                {/* Subtle arch overlay line */}
                <svg 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  preserveAspectRatio="none" 
                  className="absolute inset-0 w-full h-full pointer-events-none stroke-[#B08D57]/45 z-20"
                >
                  <path 
                    d="M 3,97 L 3,45 C 3,25 10,18 25,15 C 35,12 42,8 50,3 C 58,8 65,12 75,15 C 90,18 97,25 97,45 L 97,97 Z" 
                    vectorEffect="non-scaling-stroke"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

            </div>

            {/* 4. Interactive Lookbook Row */}
            <div className="space-y-6 pt-10 border-t border-[#B08D57]/20">
              <div className="space-y-1.5">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#B08D57]">IV. Curated Lookbook</span>
                <h3 className="font-serif text-2xl text-[#2B2B2B]">Bespoke Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[16/10] bg-[#F1E9DC] rounded-xl overflow-hidden border border-[#B08D57]/20 relative">
                  <img 
                    src="/media/industries/boutique/lookbook.png" 
                    alt="Fabric details lookbook" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2B2B2B]/5 mix-blend-multiply" />
                  <div className="absolute bottom-4 left-4 bg-[#FBF7F0]/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#B08D57]/25 text-[9px] font-bold uppercase tracking-wider text-[#2B2B2B]">
                    Texture Focus: Belgian Linen &amp; Silk Dupion
                  </div>
                </div>
                
                <div className="aspect-[16/10] bg-[#F1E9DC] rounded-xl overflow-hidden border border-[#B08D57]/20 relative">
                  <img 
                    src="/images/boutique/tailoring-room.png" 
                    alt="Atelier drawing board" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2B2B2B]/5 mix-blend-multiply" />
                  <div className="absolute bottom-4 left-4 bg-[#FBF7F0]/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#B08D57]/25 text-[9px] font-bold uppercase tracking-wider text-[#2B2B2B]">
                    Atelier View: Sandstone Carving Inspirations
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Featured Pieces (Experience List rather than Shopping grid) */}
            <div className="space-y-8 pt-10 border-t border-[#B08D57]/20">
              <div className="space-y-1.5">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#B08D57]">V. Curated Masterpieces</span>
                <h3 className="font-serif text-2xl text-[#2B2B2B]">Featured Pieces</h3>
                <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed">
                  These heritage styles are hand-tailored to measurements. Select a piece to preload into your private styling assessment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(
                  activeWing === 'bridal' ? BRIDAL_LOOKS :
                  activeWing === 'festive' ? FESTIVE_LOOKS :
                  activeWing === 'designer' ? DESIGNER_LOOKS :
                  TAILORING_LOOKS
                ).map((look) => (
                  <Card 
                    key={look.id}
                    hoverEffect={true} 
                    className="bg-[#F9E9EC]/10 border-[#ECC6CD]/50 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="aspect-[4/3] bg-[#F1E9DC] rounded overflow-hidden relative border border-[#B08D57]/15">
                        <img 
                          src={look.image} 
                          alt={look.name}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-serif text-xl text-[#2B2B2B]">{look.name}</h4>
                        <div className="text-[10px] text-[#B08D57] font-semibold space-y-1">
                          <p>Fabric: {look.fabrics}</p>
                          <p>Detailing: {look.craft}</p>
                        </div>
                        <p className="font-sans text-[11px] text-[#2B2B2B]/70 leading-relaxed">
                          {look.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-[#B08D57]/15 mt-6 pt-4 flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-[#2B2B2B]">₹{look.price.toLocaleString('en-IN')}</span>
                      <Button 
                        onClick={() => openStylingWithService(activeWing === 'bridal' ? 'Bridal & Formal Styling' : activeWing === 'festive' ? 'Seasonal Wardrobe Refresh' : activeWing === 'designer' ? 'Special Event Styling' : 'Seasonal Wardrobe Refresh')}
                        className="bg-[#3E5A46] text-white hover:bg-[#3E5A46]/95 border-none text-[9px] uppercase tracking-widest font-bold py-2.5 px-5 rounded"
                      >
                        Request This Look
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* 6. Bespoke Styling Invitation CTA */}
            <div className="bg-[#F9E9EC]/30 border border-[#ECC6CD]/50 rounded-2xl p-10 text-center space-y-6 max-w-3xl mx-auto">
              <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#B08D57]">VI. Bespoke Styling Invitation</span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#2B2B2B]">
                Co-Create Your Perfect Silhouette
              </h3>
              <p className="font-sans text-xs text-[#2B2B2B]/60 leading-relaxed max-w-lg mx-auto">
                Schedule a consultation to outline styling goals, review our handwoven silk catalog sheets, and assign a dedicated consultant director.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#3E5A46] text-white hover:bg-[#3E5A46]/95 border border-[#B08D57]/30 text-[10px] tracking-wider uppercase font-semibold py-3 px-8"
                >
                  Request Consultation Proposal
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setActiveWing('courtyard')}
                  className="border-[#B08D57] text-[#2B2B2B]/85 hover:bg-[#B08D57]/5 text-[10px] tracking-wider uppercase py-3 px-8"
                >
                  Return to Courtyard
                </Button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Interactive Personal Styling Intake Modal */}
      <StylingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTypeName={selectedServiceName}
      />
    </MainLayout>
  );
};

export default BoutiqueHome;


