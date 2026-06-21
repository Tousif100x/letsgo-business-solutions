import React, { useState } from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout';
import { Button } from '../../../../components/common/Button';
import { TrousseauModal } from '../components/TrousseauModal';
import {
  Compass,
  Award,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface CollectionItem {
  id: string;
  name: string;
  category: 'saree' | 'jewellery';
  tagline: string;
  image: string;
  highlights: string[];
}

const JEWELLERY_COLLECTIONS: CollectionItem[] = [
  {
    id: 'jadau',
    name: 'Jadau Collection',
    category: 'jewellery',
    tagline: 'Royal heirloom craftsmanship',
    image: '/media/industries/rajputana/jadau.png', // Uncut diamonds jewellery closeup
    highlights: ['Bridal Sets', 'Wedding Jewellery', 'Handcrafted Pieces']
  },
  {
    id: 'meenakari',
    name: 'Meenakari Collection',
    category: 'jewellery',
    tagline: 'Vibrant traditions in every detail',
    image: '/media/industries/rajputana/meenakari.png', // Enamelled jewellery closeup
    highlights: ['Enamel Jewellery', 'Vibrant Handwork', 'Heritage Designs']
  }
];

const SAREE_COLLECTIONS: CollectionItem[] = [
  {
    id: 'bandhani',
    name: 'Bandhani Collection',
    category: 'saree',
    tagline: 'Tie-dye heritage of Rajasthan',
    image: '/media/industries/rajputana/bandhani.png', // Unique Bandhani model image
    highlights: ['Jodhpur Tie-Dye', 'Real Zari Borders', 'Auspicious Crimson']
  },
  {
    id: 'leheriya',
    name: 'Leheriya Collection',
    category: 'saree',
    tagline: 'Vibrant waves of tradition',
    image: '/media/industries/rajputana/leheriya.png', // Unique Leheriya model image
    highlights: ['Diagonal Wave Dyes', 'Kota Silk Blends', 'Monsoon Festive Wear']
  },
  {
    id: 'rajputi',
    name: 'Rajputi Collection',
    category: 'saree',
    tagline: 'Royal bridal elegance',
    image: '/media/industries/rajputana/rajputi.png', // Unique Rajputi model image
    highlights: ['Bridal Gota Patti', 'Zardozi Embroidery', 'Pure Satin-Silk']
  },
  {
    id: 'kotadoria',
    name: 'Kota Doria Collection',
    category: 'saree',
    tagline: 'Light, elegant & timeless checked weaves',
    image: '/media/industries/rajputana/kotadoria.png', // Unique Kota Doria model image
    highlights: ['Traditional Khats', 'Pure Cotton-Silk', 'Breathable Heritage']
  },
  {
    id: 'shaira',
    name: 'Shaira Collection',
    category: 'saree',
    tagline: 'Graceful. Sophisticated. Unique.',
    image: '/media/industries/rajputana/shaira.png', // Unique Shaira model image
    highlights: ['Banarasi Katan Silk', 'Pure Silver Zari', 'Generational Heirlooms']
  }
];

export const RajputanaHome: React.FC = () => {
  const [showAllSarees, setShowAllSarees] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Bridal Trousseau Curation');
  const [preselectedLook, setPreselectedLook] = useState('');

  const openStylingWithService = (serviceName: string, lookName: string) => {
    setSelectedServiceName(serviceName);
    setPreselectedLook(lookName);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Redesigned split-pane category card
  const CategoryCard: React.FC<{
    title: string;
    description: string;
    imageSrc: string;
    btnText: string;
    btnClass: string;
    bgClass: string;
    onExplore: () => void;
    imageLeft?: boolean;
  }> = ({ title, description, imageSrc, btnText, btnClass, bgClass, onExplore, imageLeft = true }) => {
    return (
      <div 
        onClick={onExplore}
        className="group cursor-pointer grid grid-cols-1 sm:grid-cols-2 bg-[#FAF6EE] border border-[#C8A15A]/35 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      >
        {imageLeft ? (
          <>
            <div className="aspect-[4/3] sm:aspect-auto w-full h-full min-h-[220px] overflow-hidden relative">
              <img src={imageSrc} alt={`${title} gateway`} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
            </div>
            <div className={`p-6 sm:p-8 flex flex-col justify-center text-center sm:text-left text-white ${bgClass}`}>
              <h4 className="font-serif text-xl font-bold tracking-widest uppercase mb-1">{title}</h4>
              <p className="font-sans text-[10px] text-white/80 font-light mb-4 leading-normal">{description}</p>
              <div>
                <Button onClick={(e) => { e.stopPropagation(); onExplore(); }} className={`${btnClass} rounded-none text-[8px] font-bold tracking-widest px-4 py-2 w-fit`}>
                  {btnText}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`p-6 sm:p-8 flex flex-col justify-center text-center sm:text-left text-white ${bgClass} order-last sm:order-first`}>
              <h4 className="font-serif text-xl font-bold tracking-widest uppercase mb-1">{title}</h4>
              <p className="font-sans text-[10px] text-white/80 font-light mb-4 leading-normal">{description}</p>
              <div>
                <Button onClick={(e) => { e.stopPropagation(); onExplore(); }} className={`${btnClass} rounded-none text-[8px] font-bold tracking-widest px-4 py-2 w-fit`}>
                  {btnText}
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] sm:aspect-auto w-full h-full min-h-[220px] overflow-hidden relative">
              <img src={imageSrc} alt={`${title} gateway`} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
            </div>
          </>
        )}
      </div>
    );
  };

  // Full-Width 50/50 Editorial Row (Padding 120px, Max-Width 1400px)
  const EditorialRow: React.FC<{
    item: CollectionItem;
    reverse?: boolean;
    ctaText: string;
    onCtaClick: () => void;
  }> = ({ item, reverse = false, ctaText, onCtaClick }) => {
    return (
      <div 
        style={{ paddingTop: '120px', paddingBottom: '120px' }} 
        className="px-6 border-b border-[#C8A15A]/15 last:border-b-0"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px] items-stretch overflow-hidden">
          
          {/* 50% Image Column */}
          <div className={`relative h-[400px] lg:h-auto w-full overflow-hidden ${reverse ? 'lg:order-last' : ''}`}>
            <img 
              src={item.image} 
              alt={`${item.name} Visual`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#7C1F2D]/3 mix-blend-multiply pointer-events-none" />
          </div>

          {/* 50% Center Content Column */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20 space-y-5 bg-[#FAF6EE] text-[#222222]">
            <div className="space-y-1">
              <span className="font-sans text-[8px] font-bold uppercase tracking-[0.25em] text-[#C8A15A] block">
                {item.category === 'jewellery' ? 'Royal Ornaments' : 'Heritage Handloom'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#7C1F2D] font-bold tracking-wide">
                {item.name}
              </h3>
              <div className="w-12 h-[1px] bg-[#C8A15A] mt-3" />
            </div>

            <p className="font-sans text-xs text-[#222222]/80 font-medium">
              {item.tagline}
            </p>

            <ul className="space-y-2.5 text-xs text-[#222222]/85 font-medium pt-2">
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <span className="text-[#C8A15A]">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button 
                onClick={onCtaClick}
                className="bg-[#7C1F2D] text-white hover:bg-[#7C1F2D]/95 border border-[#C8A15A]/30 text-[9px] tracking-widest uppercase font-bold py-3 px-6 rounded-none shadow-sm"
              >
                {ctaText}
              </Button>
            </div>
          </div>

        </div>
      </div>
    );
  };

  // Section divider header with gold motifs
  const SectionHeader: React.FC<{ title: string; id: string }> = ({ title, id }) => (
    <div id={id} className="text-center pt-24 pb-4">
      <div className="flex items-center justify-center space-x-4 text-[#C8A15A] mb-1">
        <span className="text-xs">⚜</span>
        <div className="h-[1px] w-12 bg-[#C8A15A]/45" />
        <span className="font-serif text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A15A]">Exclusive Curation</span>
        <div className="h-[1px] w-12 bg-[#C8A15A]/45" />
        <span className="text-xs">⚜</span>
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl text-[#7C1F2D] font-bold tracking-widest uppercase">
        {title}
      </h2>
      <div className="w-16 h-[2px] bg-[#C8A15A] mx-auto mt-3" />
    </div>
  );

  return (
    <MainLayout>
      <div 
        style={{
          backgroundColor: '#FAF6EE',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='80' viewBox='0 0 60 80'%3E%3Cpath d='M 5,80 L 5,35 C 5,18 15,12 30,5 C 45,12 55,18 55,35 L 55,80' fill='none' stroke='%23C8A15A' stroke-width='0.5' opacity='0.04'/%3E%3C/svg%3E")`
        }}
        className="min-h-screen text-[#222222] font-sans -mt-24 md:-mt-28 pt-24 md:pt-28 selection:bg-[#7C1F2D]/10 selection:text-[#7C1F2D]"
      >
        
        {/* HEADER NAVIGATION (SIMPLIFIED) */}
        <header className="border-b border-[#C8A15A]/25 py-5 px-6 bg-[#FAF6EE]/95 sticky top-[73px] z-35 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('top-hero')}>
              <div className="text-[#7C1F2D] p-1.5 border border-[#C8A15A]/40 rounded-full bg-[#FAF6EE] shadow-sm">
                <Compass className="w-5 h-5 stroke-[1.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-[0.15em] text-[#7C1F2D] uppercase">
                  Rajputana Heritage
                </span>
                <span className="font-sans text-[7px] font-bold tracking-[0.2em] text-[#C8A15A] uppercase -mt-0.5">
                  Luxury Saree &amp; Jewellery House
                </span>
              </div>
            </div>

            {/* Simplified Links */}
            <nav className="flex items-center gap-x-8 text-[10px] font-bold uppercase tracking-wider text-[#222222]/80">
              <button 
                onClick={() => scrollToSection('jewellery-section')}
                className="hover:text-[#7C1F2D] transition-colors py-1 hover:underline underline-offset-4 decoration-[#C8A15A]"
              >
                Jewellery
              </button>
              <button 
                onClick={() => scrollToSection('saree-section')}
                className="hover:text-[#7C1F2D] transition-colors py-1 hover:underline underline-offset-4 decoration-[#C8A15A]"
              >
                Sarees
              </button>
              <button 
                onClick={() => scrollToSection('bridal-section')}
                className="hover:text-[#7C1F2D] transition-colors py-1 hover:underline underline-offset-4 decoration-[#C8A15A]"
              >
                Bridal
              </button>
            </nav>

            {/* Primary CTA */}
            <div>
              <Button 
                onClick={() => openStylingWithService('Bridal Trousseau Curation', 'Navigation Header')}
                className="bg-[#7C1F2D] text-white hover:bg-[#7C1F2D]/95 border border-[#C8A15A]/30 text-[10px] tracking-widest uppercase font-semibold py-2 px-5 shadow-sm rounded-none"
              >
                Book Private Viewing
              </Button>
            </div>
          </div>
        </header>

        {/* SECTION 1 — FULL-WIDTH PURE VISUAL HERO */}
        <section id="top-hero" className="relative h-[82vh] min-h-[550px] w-full overflow-hidden bg-black">
          {/* Full-width Palace Background */}
          <img 
            src="/media/industries/rajputana/hero.png" 
            alt="Rajput Queen Bridal Palace Hero Campaign" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

          {/* Bottom-left Overlay (Branding Only, No buttons/overlapping blocks) */}
          <div className="absolute bottom-12 left-6 sm:left-12 lg:left-16 z-20 text-white max-w-xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF6EE] font-bold tracking-[0.1em] leading-none uppercase">
              Rajputana Heritage
            </h1>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A15A] mt-2 mb-3">
              Luxury Saree &amp; Jewellery House
            </p>
            <p className="font-sans text-xs text-[#FAF6EE]/80 font-light">
              Celebrating Rajasthan's finest sarees, jewellery, and bridal traditions.
            </p>
          </div>
        </section>

        {/* SECTION 2 — CATEGORY SELECTION GATEWAY */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="text-center pt-8 pb-10">
            <div className="flex items-center justify-center space-x-4 text-[#C8A15A] mb-1">
              <span className="text-xs">⚜</span>
              <div className="h-[1px] w-12 bg-[#C8A15A]/45" />
              <h3 className="font-serif text-xs font-bold uppercase tracking-widest text-[#C8A15A]">Gateway Portal</h3>
              <div className="h-[1px] w-12 bg-[#C8A15A]/45" />
              <span className="text-xs">⚜</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#7C1F2D] font-bold tracking-widest uppercase">
              Choose Your Experience
            </h2>
            <div className="w-16 h-[2px] bg-[#C8A15A] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Jewellery */}
            <CategoryCard 
              title="Jewellery"
              description="Timeless heirlooms crafted with royal artistry."
              imageSrc="/media/industries/rajputana/courtyard.png" // Dedicated closeup jewellery
              btnText="Explore Jewellery"
              btnClass="bg-[#7C1F2D] text-white hover:bg-[#7C1F2D]/90 border border-[#C8A15A]/30"
              bgClass="bg-[#1F4D3A]" // Dark emerald text block
              onExplore={() => scrollToSection('jewellery-section')}
              imageLeft={true}
            />

            {/* Card 2: Sarees */}
            <CategoryCard 
              title="Sarees"
              description="Exquisite weaves that carry the legacy of Rajasthan."
              imageSrc="/media/industries/rajputana/bandhani.png" // Dedicated red saree
              btnText="Explore Sarees"
              btnClass="bg-[#1F4D3A] text-white hover:bg-[#1F4D3A]/90 border border-[#C8A15A]/30"
              bgClass="bg-[#7C1F2D]/95" // Dark maroon/brown text block
              onExplore={() => scrollToSection('saree-section')}
              imageLeft={false}
            />
          </div>
        </section>

        {/* SECTION 3 — JEWELLERY COLLECTIONS */}
        <SectionHeader title="Jewellery Collections" id="jewellery-section" />
        
        <EditorialRow 
          item={JEWELLERY_COLLECTIONS[0]}
          reverse={false}
          ctaText="Book Consultation"
          onCtaClick={() => openStylingWithService('Traditional Royal Jewellery Pairing', JEWELLERY_COLLECTIONS[0].name)}
        />

        <EditorialRow 
          item={JEWELLERY_COLLECTIONS[1]}
          reverse={true}
          ctaText="Book Consultation"
          onCtaClick={() => openStylingWithService('Traditional Royal Jewellery Pairing', JEWELLERY_COLLECTIONS[1].name)}
        />

        {/* SECTION 4 — SAREE COLLECTIONS */}
        <SectionHeader title="Saree Collections" id="saree-section" />

        <EditorialRow 
          item={SAREE_COLLECTIONS[0]}
          reverse={false}
          ctaText="Request This Look"
          onCtaClick={() => openStylingWithService('Heritage Saree Selection', SAREE_COLLECTIONS[0].name)}
        />

        <EditorialRow 
          item={SAREE_COLLECTIONS[1]}
          reverse={true}
          ctaText="Request This Look"
          onCtaClick={() => openStylingWithService('Heritage Saree Selection', SAREE_COLLECTIONS[1].name)}
        />

        <EditorialRow 
          item={SAREE_COLLECTIONS[2]}
          reverse={false}
          ctaText="Request This Look"
          onCtaClick={() => openStylingWithService('Heritage Saree Selection', SAREE_COLLECTIONS[2].name)}
        />

        {/* Expandable Section for Kota Doria and Shaira */}
        {showAllSarees && (
          <div>
            <EditorialRow 
              item={SAREE_COLLECTIONS[3]}
              reverse={true}
              ctaText="Request This Look"
              onCtaClick={() => openStylingWithService('Heritage Saree Selection', SAREE_COLLECTIONS[3].name)}
            />
            <EditorialRow 
              item={SAREE_COLLECTIONS[4]}
              reverse={false}
              ctaText="Request This Look"
              onCtaClick={() => openStylingWithService('Heritage Saree Selection', SAREE_COLLECTIONS[4].name)}
            />
          </div>
        )}

        {/* Complete Collection Expansion Button */}
        <div className="text-center py-16">
          <button
            onClick={() => setShowAllSarees(!showAllSarees)}
            className="border border-[#C8A15A] text-[#7C1F2D] hover:bg-[#7C1F2D]/5 font-serif text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 transition-all duration-300 inline-flex items-center space-x-2 rounded-none"
          >
            <span>{showAllSarees ? 'View Less' : 'View Complete Collection'}</span>
            <ArrowRight size={12} className={`transition-transform duration-300 ${showAllSarees ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* SECTION 5 — BRIDAL EXPERIENCE (80vh minimum, full bleed banner) */}
        <section id="bridal-section" className="relative min-h-[80vh] w-full flex items-center justify-center bg-black border-y border-[#C8A15A]/30 overflow-hidden">
          <img 
            src="/media/industries/rajputana/courtyard.png" 
            alt="Royal Bridal Attire and Zenana Palace Interior" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/85 z-10" />
          
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto space-y-6">
            <div className="text-[#C8A15A] space-y-2">
              <span className="text-sm">⚜</span>
              <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.3em]">Exclusive Couture</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF6EE] font-bold tracking-[0.2em] leading-tight uppercase">
              Rajputana Bridal Experience
            </h2>
            <div className="w-16 h-[2.5px] bg-[#C8A15A] mx-auto" />
            
            <p className="font-sans text-xs sm:text-sm text-[#FAF6EE]/85 leading-relaxed max-w-md font-light">
              Crafted for your most precious moments.
            </p>

            <div className="pt-6">
              <Button 
                onClick={() => openStylingWithService('Bridal Trousseau Curation', 'Bridal Experience Section')}
                className="bg-[#7C1F2D] text-white hover:bg-[#7C1F2D]/90 border border-[#C8A15A]/40 text-[10px] tracking-wider uppercase font-semibold py-4 px-10 rounded-none shadow-md"
              >
                Book Private Viewing
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FINAL CTA FOOTER */}
        <section className="bg-[#FAF6EE] border-t border-[#C8A15A]/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y divide-[#C8A15A]/25 sm:divide-y-0 sm:divide-x divide-x-0 divide-dashed sm:divide-solid">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/917724045340" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 flex flex-col items-center text-center space-y-3 hover:bg-[#7C1F2D]/5 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-[#7C1F2D] group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-7 h-7 stroke-[1.2]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#7C1F2D]">WhatsApp</h4>
                <p className="font-sans text-[10px] text-[#222222]/60">Chat with our stylist</p>
              </div>
            </a>

            {/* Call Us */}
            <a 
              href="tel:+917724045340"
              className="group p-8 flex flex-col items-center text-center space-y-3 hover:bg-[#7C1F2D]/5 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-[#7C1F2D] group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 stroke-[1.2]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#7C1F2D]">Call Us</h4>
                <p className="font-sans text-[10px] text-[#222222]/80 font-semibold tracking-wide">+91 77240 45340</p>
              </div>
            </a>

            {/* Book Consultation */}
            <button 
              onClick={() => openStylingWithService('Bridal Trousseau Curation', 'Footer Contact Grid')}
              className="group p-8 flex flex-col items-center text-center space-y-3 hover:bg-[#7C1F2D]/5 transition-colors duration-300 w-full"
            >
              <div className="text-[#7C1F2D] group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 stroke-[1.2]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#7C1F2D]">Book Private Viewing</h4>
                <p className="font-sans text-[10px] text-[#222222]/60">Schedule personal boutique visit</p>
              </div>
            </button>

          </div>
        </section>

      </div>

      {/* Trousseau Consultation Intake Modal */}
      <TrousseauModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTypeName={selectedServiceName}
        preselectedLook={preselectedLook}
      />
    </MainLayout>
  );
};

export default RajputanaHome;
