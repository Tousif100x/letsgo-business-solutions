import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { automations } from '../../../config/automation';
import { MainLayout } from '../../../components/layout/MainLayout';
import { Card } from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';
import { CTASection } from '../../../components/shared/CTASection';
import { ArrowLeft, ExternalLink, Monitor, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

export const AutomationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const automation = automations.find((a) => a.slug === slug);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!automation) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
          <h2 className="font-serif text-3xl mb-4">Automation Solution Not Found</h2>
          <p className="mb-8 font-sans text-brand-charcoal/60">The requested automation showcase does not exist.</p>
          <Link to="/automation">
            <Button variant="outline">Back to Automation Solutions</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }



  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Back Link */}
        <Link
          to="/automation"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-charcoal/60 hover:text-brand-forest transition-colors mb-10"
        >
          <ArrowLeft size={14} className="mr-2" />
          Back to Automation Solutions
        </Link>

        {/* Title & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start border-b border-brand-beige pb-12 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">
              {automation.isConcept ? 'Concept Demonstration' : 'Live Production System'}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-tight">
              {automation.name}
            </h1>
            <p className="font-sans text-lg md:text-xl text-brand-charcoal/70 leading-relaxed italic">
              {automation.tagline}
            </p>
          </div>

          <div className="bg-brand-white border border-brand-beige rounded p-6 space-y-6 lg:mt-6 w-full">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50 mb-3">
                Technologies Employed
              </span>
              <div className="flex flex-wrap gap-2">
                {automation.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-xs bg-brand-ivory border border-brand-beige px-2.5 py-1 rounded text-brand-charcoal/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-3 pt-2">
              {automation.isConcept ? (
                <Button
                  variant="primary"
                  fullWidth
                  className="group py-3 font-sans text-xs uppercase font-bold tracking-wider rounded-full"
                  onClick={() => {
                    document.getElementById('media-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Explore Concept</span>
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              ) : (
                <a
                  href={automation.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <Button variant="primary" fullWidth className="group py-3 font-sans text-xs uppercase font-bold tracking-wider rounded-full">
                    <span>Try Live Demo</span>
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </a>
              )}
            </div>

            {!automation.isConcept && automation.qrCodePath && (
              <div className="border-t border-brand-beige pt-4 space-y-3">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50">
                  Scan &amp; Test on Mobile
                </span>
                <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                  Scan this QR code with your phone camera to launch the live chatbot experience directly on your device.
                </p>
                <div 
                  className="relative group cursor-zoom-in overflow-hidden rounded border border-brand-beige bg-brand-white w-56 h-56 mx-auto flex items-center justify-center p-2 hover:border-brand-gold transition-colors duration-300"
                  onClick={() => setActiveImage(automation.qrCodePath!)}
                >
                  <img
                    src={automation.qrCodePath}
                    alt={`${automation.name} Mobile QR Code`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-brand-white/95 text-brand-charcoal font-sans text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
                      Enlarge
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Details & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-4">
                Solution Overview
              </h2>
              <p className="font-sans text-sm md:text-base text-brand-charcoal/70 leading-relaxed">
                {automation.overview}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-6">
                Functional Integrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {automation.features.map((feat, index) => (
                  <Card key={index} hoverEffect={false} padding="sm" className="border-brand-beige bg-brand-white">
                    <h3 className="font-serif text-lg text-brand-forest mb-2">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                      {feat.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities Sidebar */}
          <div className="space-y-6">
            <div className="border border-brand-beige rounded p-6 bg-brand-white">
              <h4 className="font-serif text-xl text-brand-charcoal mb-4">
                Highlights
              </h4>
              <ul className="text-xs font-sans text-brand-charcoal/60 space-y-3">
                {automation.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center space-x-2 border-b border-brand-beige pb-2 last:border-0 last:pb-0">
                    <CheckCircle2 size={14} className="text-brand-forest min-w-[14px]" />
                    <span className="font-medium text-brand-charcoal">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Screen Recordings Section */}
        {automation.screenRecordings && automation.screenRecordings.length > 0 && (
          <div id="media-section" className="space-y-6 border-t border-brand-beige pt-16 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-2 flex items-center">
                <Monitor className="mr-3 text-brand-forest w-6 h-6 stroke-[1.5]" />
                Conversational Run-through
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/60">
                Watch a mobile screen capture highlighting natural conversation flows, automated catalog browsing, and instant table booking actions.
              </p>
            </div>

            <div className="max-w-md mx-auto border border-brand-beige rounded-3xl p-3 bg-brand-charcoal shadow-2xl">
              {/* iPhone mock frame layout */}
              <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19] relative border border-brand-charcoal">
                <video
                  preload="none"
                  playsInline
                  muted
                  controls
                  poster={automation.screenshots[0]}
                  className="w-full h-full object-cover"
                >
                  <source src={automation.screenRecordings[0]} type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Screenshots Section */}
        {automation.screenshots && automation.screenshots.length > 0 && (
          <div className="space-y-6 border-t border-brand-beige pt-16 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-2 flex items-center">
                <Eye className="mr-3 text-brand-forest w-6 h-6 stroke-[1.5]" />
                Interface Showcase
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/60">
                Browse layouts of automated chat transcripts, dynamic greeting menus, and response templates. Click on any thumbnail to expand.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {automation.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-zoom-in overflow-hidden rounded border border-brand-beige bg-brand-white aspect-[9/16] max-w-[200px] mx-auto flex items-center justify-center hover:border-brand-gold transition-colors duration-300"
                  onClick={() => setActiveImage(shot)}
                >
                  <img
                    src={shot}
                    alt={`${automation.name} Screenshot ${idx + 1}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-brand-white/95 text-brand-charcoal font-sans text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
                      Expand
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-brand-charcoal/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-sm bg-brand-white p-2 rounded shadow-2xl border border-brand-beige cursor-default" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeImage}
                alt="Expanded View"
                className="max-w-full max-h-[80vh] object-contain rounded"
              />
              <div className="flex justify-between items-center mt-3 px-2">
                <span className="font-sans text-xs text-brand-charcoal/60">
                  {automation.name} — Chat UI
                </span>
                <button
                  className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-forest"
                  onClick={() => setActiveImage(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Context-aware CTA Section */}
        <CTASection
          title={`Build a Custom Assistant Like ${automation.name}`}
          subtitle={`Automate customer messaging, bookings, menu inquiries, and lead qualification channels. Let us engineer a solution built for your specific operational scale.`}
          buttonText="Build a Solution Like This"
          contextType="automation"
          contextName={automation.name}
        />
      </div>
    </MainLayout>
  );
};
export default AutomationDetail;
