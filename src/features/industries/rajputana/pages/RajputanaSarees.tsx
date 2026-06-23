import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../../../components/layout/MainLayout';
import { Button } from '../../../../components/common/Button';
import { TrousseauModal } from '../components/TrousseauModal';
import {
  Compass,
  Award,
  Phone,
  MessageSquare
} from 'lucide-react';

interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  image: string; // Unique image per collection
  highlights: string[];
}

const SAREE_COLLECTIONS: CollectionItem[] = [
  {
    id: 'bandhani',
    name: 'Bandhani Collection',
    tagline: 'Tie-dye heritage of Rajasthan.',
    image: '/media/industries/rajputana/bandhani.png', // Unique model wearing Bandhani
    highlights: ['Jodhpur Tie-Dye', 'Real Zari Borders', 'Auspicious Crimson']
  },
  {
    id: 'leheriya',
    name: 'Leheriya Collection',
    tagline: 'Vibrant waves of tradition.',
    image: '/media/industries/rajputana/leheriya.png', // Unique model wearing Leheriya
    highlights: ['Diagonal Wave Dyes', 'Kota Silk Blends', 'Monsoon Festive Wear']
  },
  {
    id: 'rajputi',
    name: 'Rajputi Collection',
    tagline: 'Royal bridal elegance.',
    image: '/media/industries/rajputana/rajputi.png', // Unique model wearing Rajputi poshak
    highlights: ['Bridal Gota Patti', 'Zardozi Embroidery', 'Pure Satin-Silk']
  },
  {
    id: 'kotadoria',
    name: 'Kota Doria Collection',
    tagline: 'Light, elegant & timeless checked weaves.',
    image: '/media/industries/rajputana/kotadoria.png', // Unique model wearing Kota Doria
    highlights: ['Traditional Khats', 'Pure Cotton-Silk', 'Breathable Heritage']
  },
  {
    id: 'shaira',
    name: 'Shaira Collection',
    tagline: 'Graceful. Sophisticated. Unique.',
    image: '/media/industries/rajputana/shaira.png', // Unique model wearing Shaira
    highlights: ['Banarasi Katan Silk', 'Pure Silver Zari', 'Generational Heirlooms']
  }
];

export const RajputanaSarees: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Heritage Saree Selection');
  const [preselectedLook, setPreselectedLook] = useState('');

  const openStylingWithService = (serviceName: string, lookName: string) => {
    setSelectedServiceName(serviceName);
    setPreselectedLook(lookName);
    setIsModalOpen(true);
  };

  return (
    <MainLayout>
      <div 
        style={{
          backgroundColor: '#FAF6EE',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='80' viewBox='0 0 60 80'%3E%3Cpath d='M 5,80 L 5,35 C 5,18 15,12 30,5 C 45,12 55,18 55,35 L 55,80' fill='none' stroke='%23C8A15A' stroke-width='0.5' opacity='0.04'/%3E%3C/svg%3E")`
        }}
        className="min-h-screen text-[#222222] font-sans -mt-24 md:-mt-28 pt-24 md:pt-28 selection:bg-[#7C1F2D]/10 selection:text-[#7C1F2D]"
      >
        
        {/* HEADER NAVIGATION */}
        <header className="border-b border-[#C8A15A]/25 py-5 px-6 bg-[#FAF6EE]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/sectors/fashion-lifestyle/rajputana-heritage')}>
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
                onClick={() => navigate('/rajputana/jewellery')}
                className="hover:text-[#7C1F2D] transition-colors py-1 hover:underline underline-offset-4 decoration-[#C8A15A]"
              >
                Jewellery
              </button>
              <button 
                onClick={() => navigate('/rajputana/sarees')}
                className="text-[#7C1F2D] transition-colors py-1 underline underline-offset-4 decoration-[#C8A15A]"
              >
                Sarees
              </button>
            </nav>

            {/* Primary CTA */}
            <div>
              <Button 
                onClick={() => openStylingWithService('Heritage Saree Selection', 'Header Private Viewing')}
                className="bg-[#7C1F2D] text-white hover:bg-[#7C1F2D]/95 border border-[#C8A15A]/30 text-[10px] tracking-widest uppercase font-semibold py-2 px-5 shadow-sm rounded-none"
              >
                Book Private Viewing
              </Button>
            </div>
          </div>
        </header>

        {/* PAGE TITLE */}
        <div className="text-center pt-16 pb-4">
          <div className="flex items-center justify-center space-x-4 text-[#C8A15A] mb-2">
            <span className="text-xs">⚜</span>
            <div className="h-[1px] w-12 bg-[#C8A15A]/45" />
            <span className="font-serif text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A15A]">Campaign Edition</span>
            <div className="h-[1px] w-12 bg-[#C8A15A]/45" />
            <span className="text-xs">⚜</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#7C1F2D] font-bold tracking-widest uppercase">
            Saree Collections
          </h2>
          <div className="w-16 h-[2px] bg-[#C8A15A] mx-auto mt-4" />
        </div>

        {/* DEDICATED SHOWCASE ROWS */}
        <div className="space-y-0">
          {SAREE_COLLECTIONS.map((item, index) => {
            const isReverse = index % 2 === 1;
            return (
              <div 
                key={item.id} 
                style={{ paddingTop: '120px', paddingBottom: '120px' }} 
                className="px-6 border-b border-[#C8A15A]/15 last:border-b-0"
              >
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-10 items-stretch overflow-hidden">
                  
                  {/* 70% Visual Column */}
                  <div className={`relative h-[450px] lg:h-[650px] w-full overflow-hidden lg:col-span-7 ${isReverse ? 'lg:order-last' : ''}`}>
                    <img 
                      src={item.image} 
                      alt={`${item.name} Campaign Display`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#7C1F2D]/3 mix-blend-multiply pointer-events-none" />
                  </div>

                  {/* 30% Centered Content Column */}
                  <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-[#FAF6EE] text-[#222222] lg:col-span-3 border border-[#C8A15A]/25 lg:border-none">
                    <div className="space-y-2">
                      <span className="font-sans text-[8px] font-bold uppercase tracking-wider text-[#C8A15A]">Fine Handloom weaves</span>
                      <h3 className="font-serif text-3xl text-[#7C1F2D] font-bold tracking-wide leading-tight">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-[#222222]/80 font-medium">
                        {item.tagline}
                      </p>
                      <div className="w-12 h-[1px] bg-[#C8A15A] mt-4" />
                    </div>

                    <ul className="space-y-3.5 text-xs text-[#222222]/85 font-medium pt-6">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span className="text-[#C8A15A]">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-8">
                      <Button 
                        onClick={() => openStylingWithService('Heritage Saree Selection', item.name)}
                        className="bg-[#7C1F2D] text-white hover:bg-[#7C1F2D]/95 border border-[#C8A15A]/30 text-[10px] tracking-widest uppercase font-bold py-3.5 px-6 rounded-none shadow-md w-full justify-center"
                      >
                        Request This Look
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* FINAL CTA FOOTER */}
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
              onClick={() => openStylingWithService('Heritage Saree Selection', 'Boutique Consultation')}
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

      {/* Trousseau consultation modal */}
      <TrousseauModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTypeName={selectedServiceName}
        preselectedLook={preselectedLook}
      />
    </MainLayout>
  );
};

export default RajputanaSarees;
