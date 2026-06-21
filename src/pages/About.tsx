import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/common/Card';
import { CTASection } from '../components/shared/CTASection';
import { Shield, Smartphone, Zap, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Core Vision Heading */}
        <div className="max-w-3xl space-y-6 mb-20">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">
            Our Business Philosophy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-charcoal leading-tight">
            We build digital systems that capture value and automate growth.
          </h1>
          <p className="font-sans text-sm md:text-base text-brand-charcoal/70 leading-relaxed max-w-2xl">
            LETSGO Business Solutions (LBS) is a custom software strategy consultancy. We engineer premium websites and conversation engines designed to establish local credibility and capture direct leads for business owners.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card hoverEffect={false} className="border-brand-beige p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-brand-forest/10 rounded">
                <Shield className="text-brand-forest w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Commission-Free Architectures</h3>
            </div>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              We believe business owners should own their customers. Our custom solutions allow resorts, clinics, and restaurants to process table reservations, class bookings, and inquiries directly—bypassing third-party OTA and delivery aggregators that take 15% to 30% cuts.
            </p>
          </Card>

          <Card hoverEffect={false} className="border-brand-beige p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-brand-forest/10 rounded">
                <Smartphone className="text-brand-forest w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Mobile-First Engineering</h3>
            </div>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Over 70% of local service searches occur on mobile viewports. We design layouts mobile-first, ensuring that booking forms, product listings, and contact options are touch-friendly, fast, and drop-off proof.
            </p>
          </Card>

          <Card hoverEffect={false} className="border-brand-beige p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-brand-forest/10 rounded">
                <Zap className="text-brand-forest w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Performance-First Design</h3>
            </div>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Slow websites bleed conversions. We avoid heavy bloated scripts, unnecessary layout libraries, and massive media payloads. By utilizing optimized Vite build compilations, next-gen WebP formatting, and inline SVG rendering, we ensure near-instant initial page rendering.
            </p>
          </Card>

          <Card hoverEffect={false} className="border-brand-beige p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-brand-forest/10 rounded">
                <Sparkles className="text-brand-forest w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal">Custom-Fit Automations</h3>
            </div>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Generic SaaS packages force your operations into their templates. We design intelligent business chatbots, AI assistants, and customer portals tailored to how your business actually interacts with clients and captures leads.
            </p>
          </Card>
        </div>

        {/* Philosophy CTA */}
        <CTASection
          title="Looking to Elevate Your Business Online?"
          subtitle="Get a free 30-minute evaluation session where we audit your existing systems, review commission-free opportunities, and map custom chat-assist blueprints."
          buttonText="Schedule Your Assessment"
        />
      </div>
    </MainLayout>
  );
};
export default About;
