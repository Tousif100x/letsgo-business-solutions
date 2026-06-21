import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sectors } from '../config/sectors';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/common/Card';
import { CTASection } from '../components/shared/CTASection';
import { Hotel, Shirt, GraduationCap, Dumbbell, Activity, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Hotel,
  Shirt,
  GraduationCap,
  Dumbbell,
  Activity,
};

export const Sectors: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug: string, status: 'active' | 'coming-soon', name: string) => {
    if (status === 'active') {
      navigate(`/sectors/${slug}`);
    } else {
      navigate('/contact', {
        state: {
          contextType: 'sector',
          contextName: `${name} Sector`,
        },
      });
    }
  };

  return (
    <MainLayout>
      {/* Normalized SVG Clip Path for Mughal Arch cropping in Sectors */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="mughal-arch-clip-sectors" clipPathUnits="objectBoundingBox">
            <path d="M 0.03,0.97 L 0.03,0.45 C 0.03,0.25 0.1,0.18 0.25,0.15 C 0.35,0.12 0.42,0.08 0.5,0.03 C 0.58,0.08 0.65,0.12 0.75,0.15 C 0.9,0.18 0.97,0.25 0.97,0.45 L 0.97,0.97 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-center md:text-left">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#C48A4A] bg-[#C48A4A]/10 px-3 py-1 rounded inline-block">
            Industry Showcase Collections
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-tight">
            Explore Our Business Sectors
          </h1>
          <p className="font-sans text-sm text-brand-charcoal/60 leading-relaxed max-w-2xl">
            Discover premium showcase experiences crafted for every industry we serve. Each sector represents our commitment to excellence and innovation.
          </p>
        </div>

        {/* Sectors Grid (5 Columns matching the Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20 items-stretch">
          {sectors.map((sec) => {
            const IconComponent = iconMap[sec.icon] || Sparkles;
            const isActive = sec.status === 'active';
            const [bgClass, , borderClass] = sec.tintClass.split(' ');

            return (
              <Card
                key={sec.id}
                hoverEffect={true}
                padding="none"
                className={`flex flex-col justify-between overflow-hidden border transition-all duration-500 cursor-pointer ${bgClass} ${borderClass} group`}
                onClick={() => handleCardClick(sec.slug, sec.status, sec.name)}
              >
                <div>
                  {/* 1. Large Architectural Visual with Mughal Arch */}
                  <div className="relative aspect-[3/4] w-full bg-brand-charcoal/10 overflow-hidden p-1">
                    <img
                      src={sec.image}
                      alt={sec.name}
                      style={{ clipPath: 'url(#mughal-arch-clip-sectors)' }}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Subtle gold line arch stroke overlay */}
                    <svg 
                      viewBox="0 0 100 100" 
                      preserveAspectRatio="none" 
                      className="absolute inset-0 w-full h-full pointer-events-none stroke-[#B08D57]/40 z-10"
                    >
                      <path 
                        d="M 3,97 L 3,45 C 3,25 10,18 25,15 C 35,12 42,8 50,3 C 58,8 65,12 75,15 C 90,18 97,25 97,45 L 97,97 Z" 
                        vectorEffect="non-scaling-stroke"
                        strokeWidth="1.2"
                        fill="none"
                      />
                    </svg>

                    {/* Circular Icon Overlaid in the Center Boundary of Image */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-brand-white text-brand-forest shadow-md border border-brand-beige w-10 h-10 rounded-full flex items-center justify-center z-20 relative">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* 2. Text Details below image */}
                  <div className="pt-8 pb-6 px-4 space-y-3 text-center">
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg text-brand-charcoal font-semibold">
                        {sec.name}
                      </h3>
                      <p className="font-sans text-[8px] italic text-[#C48A4A] tracking-wider uppercase">
                        {sec.mood}
                      </p>
                    </div>
                    <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed line-clamp-3 min-h-[50px]">
                      {sec.description}
                    </p>
                  </div>
                </div>

                {/* 3. Action Card Footer */}
                <div className="p-4 border-t border-brand-charcoal/5 text-center">
                  {isActive ? (
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#3E5A46] group-hover:text-[#B08D57] transition-colors">
                      <span>Explore Showcases</span>
                      <ArrowRight size={10} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40">
                      Coming Soon
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info Block */}
        <div className="border border-brand-beige rounded-lg bg-brand-white p-6 max-w-4xl mx-auto mb-16 flex items-start space-x-4">
          <AlertCircle className="text-[#C48A4A] w-6 h-6 stroke-[1.5] min-w-[24px]" />
          <div>
            <h4 className="font-serif text-lg text-brand-charcoal mb-1">
              Sector-Based Platform Architecture
            </h4>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              We compile websites under broader sectors to make LBS future-ready. Active sector cards take you to showcases matching those models. Non-active sector selections let you schedule audits and express early interest.
            </p>
          </div>
        </div>

        {/* General CTA */}
        <CTASection
          title="Need a Dedicated Platform for Your Sector?"
          subtitle="Don't see your specific sector active? Let's discuss your custom layout challenges. We frequently mock up interactive platforms for specialized client companies."
          buttonText="Schedule Your Assessment"
        />
      </div>
    </MainLayout>
  );
};

export default Sectors;
