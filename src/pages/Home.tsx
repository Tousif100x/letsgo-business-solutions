import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { sectors } from '../config/sectors';
import { projects } from '../config/projects';
import { automations } from '../config/automation';
import {
  Hotel,
  Shirt,
  GraduationCap,
  Dumbbell,
  Activity,
  ArrowRight,
  MessageSquare,
  Layers,
  MessageSquareCode,
  Sparkles,
  Bell,
  Image as ImageIcon,
  Gem,
  Scissors,
  User,
  Phone
} from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Hotel,
  Shirt,
  GraduationCap,
  Dumbbell,
  Activity,
};

const showcaseIconMap: { [key: string]: React.ComponentType<any> } = {
  Bell,
  Image: ImageIcon,
  Gem,
  Shirt,
  Scissors,
  User,
};

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleWhatsAppChat = (context?: string) => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '917724045340';
    const messageText = context 
      ? `Hi! I am visiting LETSGO Business Solutions. I am interested in building a solution similar to your ${context} for my business.`
      : "Hi! I am visiting LETSGO Business Solutions. I am interested in exploring modern websites, interactive experiences, and business solutions.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`, '_blank');
  };
  
  // Extract active showcases from sectors
  const activeShowcases = sectors.flatMap(sec => 
    sec.showcases.filter(show => show.status === 'active').map(show => ({
      ...show,
      sectorName: sec.name,
      mood: sec.mood,
      tintClass: sec.tintClass
    }))
  );

  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-brand-white to-brand-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded inline-block">
              Premium Digital Studio
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-brand-charcoal leading-tight tracking-tight">
              We design digital solutions that <span className="text-brand-forest italic">own</span> the customer experience.
            </h1>
            <p className="font-sans text-sm md:text-lg text-brand-charcoal/70 leading-relaxed max-w-2xl">
              From luxury resorts to local businesses, we build digital experiences that turn visitors into customers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center max-w-3xl pt-4 w-full">
              <Link to="/sectors" className="w-full">
                <Button variant="primary" size="lg" className="w-full whitespace-nowrap">
                  Explore Sectors
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => handleWhatsAppChat()} 
                className="w-full border-brand-forest text-brand-forest hover:bg-brand-forest/5 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </Button>
              <a 
                href="tel:+917724045340" 
                className="w-full font-sans font-medium text-xs text-brand-charcoal/60 hover:text-brand-forest transition-colors duration-300 py-3.5 flex items-center justify-center space-x-2 bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-brand-forest/50 rounded whitespace-nowrap"
              >
                <Phone size={14} />
                <span>+91 77240 45340</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Normalized SVG Clip Path for Mughal Arch cropping in Sector Cards */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="mughal-arch-clip-sectors" clipPathUnits="objectBoundingBox">
            <path d="M 0.03,0.97 L 0.03,0.45 C 0.03,0.25 0.1,0.18 0.25,0.15 C 0.35,0.12 0.42,0.08 0.5,0.03 C 0.58,0.08 0.65,0.12 0.75,0.15 C 0.9,0.18 0.97,0.25 0.97,0.45 L 0.97,0.97 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 2. Business Sectors Section */}
      <section className="py-20 px-6 md:px-12 border-t border-brand-beige bg-brand-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-brand-gold">
              Operational Blueprints
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
              Explore Our Business Sectors
            </h2>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
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
                  onClick={() => {
                    if (isActive) {
                      navigate(`/sectors/${sec.slug}`);
                    } else {
                      navigate('/contact', {
                        state: {
                          contextType: 'sector',
                          contextName: `${sec.name} Sector`,
                        },
                      });
                    }
                  }}
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
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-brand-white text-brand-forest shadow-md border border-brand-beige w-10 h-10 rounded-full flex items-center justify-center z-20">
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
                  <div className="p-4 border-t border-brand-charcoal/5 text-center bg-brand-white/20">
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
        </div>
      </section>

      {/* 3. Featured Showcases Section */}
      {activeShowcases.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-brand-beige bg-brand-ivory animate-fade-in">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                  Industry Showcase Collections
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight">
                  Our Active Showcases
                </h2>
                <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                  Explore real-world showcase experiences crafted to demonstrate the power, elegance, and results our solutions deliver.
                </p>
              </div>
              <Link to="/sectors">
                <Button variant="outline" size="sm" className="group border-brand-forest text-brand-forest hover:bg-brand-forest/5 rounded-full">
                  <span>View All Sectors</span>
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeShowcases.map((showcase) => {
                const [bgClass, , borderClass] = showcase.tintClass.split(' ');
                
                return (
                  <Card
                    key={showcase.id}
                    hoverEffect={true}
                    padding="none"
                    className={`overflow-hidden border transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full rounded-2xl ${bgClass} ${borderClass}`}
                    onClick={() => navigate(showcase.path)}
                  >
                    <div className="flex flex-col h-full justify-between">
                      {/* Image Area - 70% height weight */}
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
                            <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-brand-white bg-brand-forest/90 px-3 py-1 rounded shadow-md">
                              {showcase.badgeText}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Area - 30% height weight */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                        {/* Subtitle & Title & Short Desc */}
                        <div className="space-y-4 text-center">
                          <span className="block font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#C48A4A]">
                            ✦ {showcase.sectorName.toUpperCase()} SHOWCASE ✦
                          </span>
                          <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal leading-tight">
                            {showcase.name}
                          </h3>
                          <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed max-w-xl mx-auto line-clamp-2">
                            {showcase.shortDesc}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-brand-charcoal/5" />

                        {/* 3 Circular Icon Feature Badges Row */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 items-center justify-center py-2">
                          {showcase.features?.slice(0, 3).map((feat, i) => {
                            const FeatIcon = showcaseIconMap[feat.iconName] || Sparkles;
                            return (
                              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-2.5 justify-center">
                                <div className="w-8 h-8 rounded-full border border-brand-beige bg-brand-white flex items-center justify-center text-brand-forest shrink-0 shadow-sm">
                                  <FeatIcon size={14} strokeWidth={1.5} />
                                </div>
                                <div className="text-center sm:text-left">
                                  <span className="font-sans text-[10px] font-semibold text-brand-charcoal/85 leading-tight block">
                                    {feat.title.split(' ').slice(0, 2).join(' ')}
                                  </span>
                                  {feat.title.split(' ').length > 2 && (
                                    <span className="font-sans text-[8px] text-brand-charcoal/50 leading-tight block">
                                      {feat.title.split(' ').slice(2).join(' ')}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Explore Button centered */}
                        <div className="pt-2 flex justify-center">
                          <Button 
                            variant="outline"
                            size="md"
                            className={`w-full sm:w-auto px-8 py-2.5 rounded-full border font-sans text-xs uppercase font-bold tracking-widest transition-all duration-300 ${
                              showcase.id === 'aura-atelier'
                                ? 'border-[#5C2B34]/35 text-[#5C2B34] hover:bg-[#5C2B34]/5'
                                : 'border-[#1E3A5F]/35 text-[#1E3A5F] hover:bg-[#1E3A5F]/5'
                            }`}
                          >
                            Explore Showcase
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. Automation Solutions Section */}
      {automations.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-brand-beige bg-brand-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                  Intelligent Business Solutions
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
                  Business Chatbots &amp; AI Assistants
                </h2>
                <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                  Smarter customer interactions. Capture direct table reservations, browse catalogs, and resolve FAQs using intelligent automated chat workflows.
                </p>
              </div>
              <Link to="/automation">
                <Button variant="outline" size="sm" className="group">
                  <span>View Solutions</span>
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automations.map((aut) => (
                <Card
                  key={aut.id}
                  hoverEffect={true}
                  className="border-brand-beige bg-brand-white flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-brand-forest/5 rounded-full text-brand-forest">
                        <MessageSquareCode size={20} strokeWidth={1.5} />
                      </div>
                      {aut.id === 'cyber-spice-cafe' && (
                        <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-brand-forest bg-brand-forest/10 px-2 py-0.5 rounded">
                          Primary Showcase
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl text-brand-charcoal">{aut.name}</h3>
                    <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed line-clamp-3">
                      {aut.overview}
                    </p>
                  </div>
                  <div className="border-t border-brand-beige mt-8 pt-6 flex flex-col sm:flex-row gap-3">
                    <Link to={`/automation/${aut.slug}`} className="flex-grow">
                      <Button variant="primary" fullWidth className="py-2.5 text-xs">
                        View Discovery Details
                      </Button>
                    </Link>
                    <a href={aut.liveDemoUrl} target="_blank" rel="noreferrer" className="flex-grow">
                      <Button variant="outline" fullWidth className="py-2.5 text-xs">
                        Test Live Bot
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Portfolio Projects Section */}
      {projects.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-brand-beige bg-brand-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded inline-block">
                  Featured Portfolio Project
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-tight">
                  {projects[0].name}
                </h2>
                <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                  An interactive 3D portfolio experience and immersive project exploration showroom. Developed to display our design capabilities in an engaging, web-native spatial digital canvas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[10px] font-semibold bg-brand-white border border-brand-beige px-2.5 py-0.5 rounded text-brand-charcoal/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link to={`/projects/${projects[0].slug}`}>
                    <Button variant="primary" size="md" className="group">
                      <span>Explore Showcase</span>
                      <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                  <a href={projects[0].liveDemoUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="md">
                      Live Experience
                    </Button>
                  </a>
                </div>
              </div>

              {/* 3D nature preview card */}
              <div className="lg:col-span-5 relative group overflow-hidden border border-brand-beige rounded-2xl p-2 bg-brand-charcoal shadow-xl aspect-square flex flex-col justify-end">
                <img
                  src="/media/projects/letsgo-nexus/hero.png"
                  alt="LETSGO Nexus 3D Interface"
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />
                
                <div className="relative p-6 space-y-2 z-10">
                  <div className="flex items-center space-x-2 text-brand-gold">
                    <Layers size={16} />
                    <span className="font-sans text-[9px] font-bold uppercase tracking-widest">Immersive 3D Space</span>
                  </div>
                  <h4 className="font-serif text-lg text-brand-white font-bold">Interactive Spatial Canvas</h4>
                  <p className="font-sans text-[11px] text-brand-white/60 leading-relaxed">
                    Test your mouse drag and mobile gestures to navigate floating components fluidly in 60fps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Contact Section / Main Home Consultation CTA */}
      <section className="bg-brand-white border-t border-brand-beige py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal leading-tight">
            Schedule a Custom Consultation &amp; System Audit
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            Ready to explore how modern websites, interactive experiences, and intelligent chatbots can help your business stand out? Book a session to review customized blueprints.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 items-center max-w-3xl mx-auto w-full">
            <Link to="/contact" className="w-full">
              <Button variant="primary" size="lg" className="group w-full whitespace-nowrap">
                <span>Book Free Assessment</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleWhatsAppChat()}
              className="w-full border-brand-forest text-brand-forest hover:bg-brand-forest/5 flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </Button>
            <a
              href="tel:+917724045340"
              className="w-full font-sans font-medium text-xs text-brand-charcoal/60 hover:text-brand-forest transition-colors duration-300 py-3.5 flex items-center justify-center space-x-2 bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-brand-forest/50 rounded whitespace-nowrap"
            >
              <Phone size={14} />
              <span>+91 77240 45340</span>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
