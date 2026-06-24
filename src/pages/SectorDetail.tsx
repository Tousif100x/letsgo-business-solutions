import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { sectors } from '../config/sectors';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/shared/CTASection';
import {
  ArrowLeft,
  Play,
  Sparkles,
  Bell,
  Image as ImageIcon,
  Gem,
  Shirt,
  Scissors,
  User,
  Compass,
  TrendingUp,
  Clock
} from 'lucide-react';

const showcaseIconMap: { [key: string]: React.ComponentType<any> } = {
  Bell,
  Image: ImageIcon,
  Gem,
  Shirt,
  Scissors,
  User,
  Compass,
  TrendingUp,
  Clock
};

export const SectorDetail: React.FC = () => {
  const { sectorSlug } = useParams<{ sectorSlug: string }>();
  const navigate = useNavigate();

  // Find active sector configuration
  const sector = sectors.find((s) => s.slug === sectorSlug);

  if (!sector) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-3xl text-brand-charcoal mb-4">Sector Not Found</h2>
          <p className="font-sans text-sm text-[#2B2B2B]/60 mb-6">
            The business sector you are trying to explore is not registered in our blueprints.
          </p>
          <Link to="/sectors">
            <Button variant="primary">Return to Catalog</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        
        {/* Breadcrumbs / Back button */}
        <div className="mb-10">
          <Link 
            to="/sectors" 
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-forest hover:text-brand-gold transition-colors"
          >
            <ArrowLeft size={14} className="mr-2" />
            <span>Back to Sectors</span>
          </Link>
        </div>

        {/* Sector Cinematic Hero Banner */}
        {(() => {
          const [bgClass, textClass, borderClass] = sector.tintClass.split(' ');
          const isDark = bgClass.includes('#0A0A0A') || bgClass.includes('black');
          
          return (
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-hidden rounded-3xl border p-6 md:p-8 mb-16 ${bgClass} ${borderClass}`}>
              {/* Left text panel */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`font-sans text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm border ${isDark ? 'text-[#D4FF00] bg-white/10 border-[#D4FF00]/30' : 'text-[#C48A4A] bg-brand-white border-brand-beige'}`}>
                      {sector.mood}
                    </span>
                    <span className={`font-sans text-[9px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-white/50' : 'text-brand-charcoal/50'}`}>
                      {sector.name} Blueprint Series
                    </span>
                  </div>
                  
                  <h1 className={`font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight pt-2 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
                    {sector.name} Solutions
                  </h1>
                  
                  <p className={`font-sans text-xs sm:text-sm leading-relaxed max-w-2xl pt-2 ${isDark ? 'text-white/70' : 'text-brand-charcoal/70'}`}>
                    {sector.description}
                  </p>
                </div>

                <div className={`pt-4 flex items-center justify-between border-t ${isDark ? 'border-white/10' : 'border-brand-charcoal/5'}`}>
                  <div className={`font-sans text-[11px] ${isDark ? 'text-white/60' : 'text-brand-charcoal/55'}`}>
                    Platform Architecture: <strong className={`font-semibold ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>Sector → Showcase</strong>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider shadow-sm ${isDark ? 'bg-[#D4FF00]/20 text-[#D4FF00] border-[#D4FF00]/30' : 'bg-brand-white text-[#3E5A46] border-brand-beige'}`}>
                    Active Showcases: {sector.activeCount}
                  </div>
                </div>
              </div>

              {/* Right cinematic environment image (Landscape rectangular, no arch crop) */}
              <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-[350px] rounded-2xl overflow-hidden shadow-md border border-brand-beige/50 bg-brand-charcoal/10">
                <img
                  src={sector.image}
                  alt={`${sector.name} Environment`}
                  className="absolute inset-0 w-full h-full object-cover opacity-95 hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent" />
              </div>
            </div>
          );
        })()}

        {/* Showcases Catalog */}
        {sector.showcases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {sector.showcases.map((showcase) => {
              const [bgClass, , borderClass] = sector.tintClass.split(' ');
              const isDark = bgClass.includes('#0A0A0A') || bgClass.includes('black');
              
              return (
                <div
                  key={showcase.id}
                  className={`overflow-hidden border transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-brand-gold/35 ${bgClass} ${borderClass}`}
                  onClick={() => navigate(showcase.path)}
                >
                  <div className="flex flex-col h-full justify-between">
                    {/* Image Area - 70% weight */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal/10">
                      <img
                        src={showcase.image}
                        alt={showcase.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Dark overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent" />
                      
                      {/* Maturity Badge Overlay */}
                      {showcase.badgeText && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`font-sans text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md ${isDark ? 'bg-[#D4FF00] text-[#0A0A0A]' : 'text-brand-white bg-brand-forest/90'}`}>
                            {showcase.badgeText}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Area - 30% weight */}
                    <div className={`p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
                      {/* Subtitle & Title & Short Desc */}
                      <div className="space-y-4 text-center">
                        <span className="block font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#C48A4A]">
                          ✦ ACTIVE BLUEPRINT ✦
                        </span>
                        <h3 className={`font-serif text-2xl md:text-3xl leading-tight ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
                          {showcase.name}
                        </h3>
                        <p className={`font-sans text-xs leading-relaxed max-w-xl mx-auto line-clamp-2 ${isDark ? 'text-white/70' : 'text-brand-charcoal/65'}`}>
                          {showcase.shortDesc}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className={`border-t ${isDark ? 'border-white/10' : 'border-brand-charcoal/5'}`} />

                      {/* Features list (3 Circular Icon Feature Badges Row) */}
                      <div className="grid grid-cols-3 gap-3 md:gap-4 items-center justify-center py-2">
                        {showcase.features?.slice(0, 3).map((feat, i) => {
                          const FeatIcon = showcaseIconMap[feat.iconName] || Sparkles;
                          return (
                            <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-2.5 justify-center">
                              <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 shadow-sm ${isDark ? 'bg-white/10 border-white/20 text-[#D4FF00]' : 'border-brand-beige bg-brand-white text-brand-forest'}`}>
                                <FeatIcon size={14} strokeWidth={1.5} />
                              </div>
                              <div className="text-center sm:text-left">
                                <span className={`font-sans text-[10px] font-semibold leading-tight block ${isDark ? 'text-white' : 'text-brand-charcoal/85'}`}>
                                  {feat.title.split(' ').slice(0, 2).join(' ')}
                                </span>
                                {feat.title.split(' ').length > 2 && (
                                  <span className={`font-sans text-[8px] leading-tight block ${isDark ? 'text-white/50' : 'text-brand-charcoal/50'}`}>
                                    {feat.title.split(' ').slice(2).join(' ')}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Solutions list (key capabilities details) */}
                      <div className={`border-t pt-4 space-y-2.5 ${isDark ? 'border-white/10' : 'border-brand-charcoal/5'}`}>
                        <span className={`block text-[8px] font-bold uppercase tracking-wider text-center sm:text-left ${isDark ? 'text-white/40' : 'text-brand-charcoal/45'}`}>
                          Key Solutions Showcased:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                          {showcase.solutionsShowcased.slice(0, 4).map((sol, index) => (
                            <li key={index} className={`flex items-start text-[11px] leading-tight ${isDark ? 'text-white/75' : 'text-brand-charcoal/75'}`}>
                              <span className={`${isDark ? 'text-[#D4FF00]' : 'text-brand-forest'} mr-1.5 shrink-0`}>✓</span>
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Action buttons */}
                      <div className={`border-t pt-6 flex flex-col sm:flex-row gap-3 ${isDark ? 'border-white/10' : 'border-brand-charcoal/5'}`}>
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(showcase.path);
                          }}
                          variant="primary" 
                          className="flex-grow py-3 flex items-center justify-center space-x-2 text-xs uppercase font-bold tracking-wider rounded-full"
                        >
                          <Play size={12} fill="currentColor" className="mr-1" />
                          <span>Launch Showcase</span>
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/contact', { state: { contextType: 'showcase', contextName: showcase.name } });
                          }}
                          variant="outline"
                          className={`flex-grow py-3 border-brand-forest text-xs uppercase font-bold tracking-wider rounded-full ${isDark ? 'text-[#D4FF00] border-[#D4FF00] hover:bg-[#D4FF00]/10' : 'text-brand-forest hover:bg-brand-forest/5'}`}
                        >
                          <span>Request Custom Build</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-white border border-brand-beige rounded-xl max-w-3xl mx-auto mb-20 space-y-4">
            <Sparkles className="w-12 h-12 text-brand-gold mx-auto stroke-[1.2]" />
            <h3 className="font-serif text-2xl text-brand-charcoal">Blueprint Incubation</h3>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed max-w-md mx-auto">
              We are currently in active design phases for showcases in the {sector.name} sector. Click below to schedule a blueprint consultation.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="primary">Schedule Consultation</Button>
              </Link>
            </div>
          </div>
        )}

        {/* General CTA */}
        <CTASection
          title="Looking to Develop a Customized Showcase?"
          subtitle="Explore commission-free reservation engines, mobile-optimized visual lookbooks, and customized client portals engineered to convert visitors."
          buttonText="Schedule Your Assessment"
          contextType="sector"
          contextName={sector.name}
        />

      </div>
    </MainLayout>
  );
};

export default SectorDetail;
