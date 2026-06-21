import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../config/projects';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/shared/CTASection';
import { Shield, ArrowRight, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">
            Production Software Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-tight">
            Real Production-Grade Projects
          </h1>
          <p className="font-sans text-sm md:text-base text-brand-charcoal/60 leading-relaxed">
            Unlike our showcase prototypes, these platforms represent fully developed, secure, multi-tier software applications that operate live in production settings. Read our in-depth case studies, view interface recordings, and click direct links to explore live deployments.
          </p>
        </div>

        {/* Projects Listing */}
        <div className="space-y-8 mb-20">
          {projects.map((proj) => {
            const hasQr = !!proj.qrCodePath;
            return (
              <Card
                key={proj.id}
                hoverEffect={false}
                padding="lg"
                className={`border-brand-beige bg-brand-white grid grid-cols-1 gap-8 items-center ${
                  hasQr ? 'lg:grid-cols-12' : 'lg:grid-cols-3'
                }`}
              >
                {/* Project Intro Details */}
                <div className={hasQr ? 'lg:col-span-6 space-y-6' : 'lg:col-span-2 space-y-6'}>
                  <div className="space-y-2">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      Enterprise Cloud System
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal">
                      {proj.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/50 italic">
                      {proj.tagline}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed line-clamp-3">
                    {proj.overview}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="font-sans text-[10px] font-semibold bg-brand-ivory border border-brand-beige px-2 py-0.5 rounded text-brand-charcoal/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 5 && (
                      <span className="font-sans text-[10px] text-brand-charcoal/40 pt-0.5">
                        +{proj.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons Box */}
                <div className={`border-t lg:border-t-0 lg:border-l border-brand-beige pt-6 lg:pt-0 lg:pl-8 flex flex-col space-y-3 justify-center h-full ${
                  hasQr ? 'lg:col-span-3' : 'lg:col-span-1'
                }`}>
                  <Link to={`/projects/${proj.slug}`} className="w-full">
                    <Button variant="primary" fullWidth className="group py-3">
                      <span>Read Case Study</span>
                      <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <a href={proj.liveDemoUrl} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" fullWidth className="py-3 flex items-center justify-center">
                      <span>Explore Live Site</span>
                      <ExternalLink size={12} className="ml-1.5" />
                    </Button>
                  </a>
                </div>

                {/* QR Code Box */}
                {hasQr && (
                  <div className="border-t lg:border-t-0 lg:border-l border-brand-beige pt-6 lg:pt-0 lg:pl-8 flex flex-col items-center justify-center space-y-2 lg:col-span-3">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50 text-center">
                      Scan to Explore Live
                    </span>
                    <div className="relative group overflow-hidden rounded border border-brand-beige bg-brand-white w-44 h-44 flex items-center justify-center p-2">
                      <img
                        src={proj.qrCodePath}
                        alt={`${proj.name} QR Code`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Credibility Guarantee Banner */}
        <div className="bg-brand-white border border-brand-beige rounded p-8 flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 max-w-4xl mx-auto mb-16">
          <div className="p-4 bg-brand-forest/5 rounded-full text-brand-forest">
            <Shield size={32} strokeWidth={1.2} />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-brand-charcoal">
              Production System Integrity
            </h4>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              We respect data isolation and service privacy. All case studies (e.g. Eyecare Platform) details demonstrate visual layouts, non-sensitive feature highlights, and interfaces using fake/mock clinical database profiles, leaving production environments secure and untouched.
            </p>
          </div>
        </div>

        {/* General CTA */}
        <CTASection
          title="Interested in Enterprise Custom Systems?"
          subtitle="Whether you need HIPAA compliance, third-party logistics APIs, multi-user role scopes, or encrypted cloud storage solutions, we can architect systems configured to your exact requirements."
          buttonText="Schedule Technical Consulting Call"
        />
      </div>
    </MainLayout>
  );
};
export default Projects;
