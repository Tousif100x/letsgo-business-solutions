import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../../config/projects';
import { MainLayout } from '../../../components/layout/MainLayout';
import { Card } from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';
import { CTASection } from '../../../components/shared/CTASection';
import { ArrowLeft, ExternalLink, Eye, Monitor } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
          <h2 className="font-serif text-3xl mb-4">Project Not Found</h2>
          <p className="mb-8 font-sans text-brand-charcoal/60">The requested project case study does not exist.</p>
          <Link to="/projects">
            <Button variant="outline">Back to Projects</Button>
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
          to="/projects"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-charcoal/60 hover:text-brand-forest transition-colors mb-10"
        >
          <ArrowLeft size={14} className="mr-2" />
          Back to Real Projects
        </Link>

        {/* Title & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start border-b border-brand-beige pb-12 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">
              Real Project Case Study
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-tight">
              {project.name}
            </h1>
            <p className="font-sans text-lg md:text-xl text-brand-charcoal/70 leading-relaxed italic">
              {project.tagline}
            </p>
          </div>

          <div className="bg-brand-white border border-brand-beige rounded p-6 space-y-6 lg:mt-6 w-full">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50 mb-3">
                Technologies Employed
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Button variant="primary" fullWidth className="group py-3 font-sans text-xs uppercase font-bold tracking-wider rounded-full">
                  <span>Explore Live Experience</span>
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </a>
              {project.gitHubUrl && (
                <a
                  href={project.gitHubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" fullWidth className="py-3 font-sans text-xs uppercase font-bold tracking-wider rounded-full">
                    <span>Source Repository</span>
                  </Button>
                </a>
              )}
            </div>

            {project.qrCodePath && (
              <div className="border-t border-brand-beige pt-4 space-y-3">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50">
                  Scan &amp; Explore on Mobile
                </span>
                <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                  Scan this QR code with your phone camera to test the mobile WebGL performance and responsive layout directly on your device.
                </p>
                <div 
                  className="relative group cursor-zoom-in overflow-hidden rounded border border-brand-beige bg-brand-white w-56 h-56 mx-auto flex items-center justify-center p-2 hover:border-brand-gold transition-colors duration-300"
                  onClick={() => setActiveImage(project.qrCodePath!)}
                >
                  <img
                    src={project.qrCodePath}
                    alt={`${project.name} Mobile QR Code`}
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

        {/* Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-4">
                Executive Overview
              </h2>
              <p className="font-sans text-sm md:text-base text-brand-charcoal/70 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-6">
                System Capabilities &amp; Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feat, index) => (
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

          {/* Sidebar Metrics Info */}
          <div className="space-y-6">
            <div className="border border-brand-beige rounded p-6 bg-brand-white">
              <h4 className="font-serif text-xl text-brand-charcoal mb-4">
                Architecture Scope
              </h4>
              <ul className="text-xs font-sans text-brand-charcoal/60 space-y-3">
                <li className="flex justify-between border-b border-brand-beige pb-2">
                  <span>Deployment Model</span>
                  <span className="font-semibold text-brand-charcoal">Independent Cloud</span>
                </li>
                <li className="flex justify-between border-b border-brand-beige pb-2">
                  <span>Data Classification</span>
                  <span className="font-semibold text-brand-charcoal">Secure / Encrypted</span>
                </li>
                <li className="flex justify-between border-b border-brand-beige pb-2">
                  <span>Mobile Optimization</span>
                  <span className="font-semibold text-brand-charcoal">100% Fully Responsive</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Primary Integration</span>
                  <span className="font-semibold text-brand-charcoal">RESTful APIs / Twilio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Media Galleries */}
        <div className="space-y-16 mb-20 border-t border-brand-beige pt-16">
          {/* Recordings Section */}
          {project.screenRecordings && project.screenRecordings.length > 0 && (
            <div className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-2 flex items-center">
                  <Monitor className="mr-3 text-brand-forest w-6 h-6 stroke-[1.5]" />
                  Interactive Screen Demonstration
                </h2>
                <p className="font-sans text-xs text-brand-charcoal/60">
                  Watch a guided walkthrough showcasing patient registry updates, clinical records documentation, and scheduling workflows.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <video
                  preload="none"
                  playsInline
                  muted
                  controls
                  poster={project.screenshots[0]}
                  className="w-full rounded border border-brand-beige shadow-sm bg-brand-charcoal"
                >
                  <source src={project.screenRecordings[0]} type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>
              </div>
            </div>
          )}

          {/* Screenshots Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-6 border-t border-brand-beige pt-16">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-2 flex items-center">
                  <Eye className="mr-3 text-brand-forest w-6 h-6 stroke-[1.5]" />
                  Visual Interface Gallery
                </h2>
                <p className="font-sans text-xs text-brand-charcoal/60">
                  Browse high-resolution views of doctor dashboards, scheduling calendars, billing sheets, and intake portals. Click on any thumbnail to expand.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="group relative cursor-zoom-in overflow-hidden rounded border border-brand-beige bg-brand-white aspect-[4/3] flex items-center justify-center hover:border-brand-gold transition-colors duration-300"
                    onClick={() => setActiveImage(shot)}
                  >
                    <img
                      src={shot}
                      alt={`${project.name} Screenshot ${idx + 1}`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-brand-white/95 text-brand-charcoal font-sans text-xs font-semibold px-3 py-1.5 rounded shadow-sm">
                        Expand View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Lightbox for image Zoom */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-brand-charcoal/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] bg-brand-white p-2 rounded shadow-2xl border border-brand-beige cursor-default" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeImage}
                alt="Expanded View"
                className="max-w-full max-h-[80vh] object-contain rounded"
              />
              <div className="flex justify-between items-center mt-3 px-2">
                <span className="font-sans text-xs text-brand-charcoal/60">
                  {project.name} — Screen Layout
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
          title={`Looking for a Solution Like ${project.name}?`}
          subtitle={`We can architect and build a custom patient dashboard, secure scheduling portal, or specialized CRM to fit your exact clinic requirements.`}
          buttonText="Build a Solution Like This"
          contextType="project"
          contextName={project.name}
        />
      </div>
    </MainLayout>
  );
};
export default ProjectDetail;
