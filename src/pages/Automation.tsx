import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { automations } from '../config/automation';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/shared/CTASection';
import { Bot, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';

export const Automation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded">
            Automation Registry
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-tight">
            Conversational &amp; Workflow Automations
          </h1>
          <p className="font-sans text-sm md:text-base text-brand-charcoal/60 leading-relaxed">
            Discover how WhatsApp Business integrations, conversational AI assistants, and automated databases streamline restaurant reservations, scheduling notifications, and client routing. Explore demo run-throughs and review live message channels.
          </p>
        </div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {automations.map((aut) => (
            <Card
              key={aut.id}
              hoverEffect={true}
              onClick={() => navigate(`/automation/${aut.slug}`)}
              className="border-brand-beige bg-brand-white flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300"            >
              <div className="space-y-6">
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-forest/5 rounded-full text-brand-forest">
                    <Bot size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded">
                    {aut.isConcept ? 'Concept Demonstration' : 'WhatsApp Automation'}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-brand-charcoal">
                    {aut.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/50 italic leading-relaxed">
                    {aut.tagline}
                  </p>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed line-clamp-3">
                    {aut.overview}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {aut.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[10px] bg-brand-ivory border border-brand-beige px-2 py-0.5 rounded text-brand-charcoal/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="border-t border-brand-beige mt-8 pt-6 flex flex-col sm:flex-row gap-3" onClick={(e) => e.stopPropagation()}>
                <Link to={`/automation/${aut.slug}`} className={aut.isConcept ? "w-full" : "flex-grow"}>
                  <Button variant="primary" fullWidth className="group py-2.5 text-xs rounded-full">
                    <span>{aut.isConcept ? 'View Concept Walkthrough' : 'Showcase Walkthrough'}</span>
                    <ArrowRight size={12} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                {!aut.isConcept && (
                  <a href={aut.liveDemoUrl} target="_blank" rel="noreferrer" className="flex-grow">
                    <Button variant="outline" fullWidth className="py-2.5 text-xs rounded-full">
                      <span>Test Channel</span>
                      <ExternalLink size={10} className="ml-1.5" />
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Business Value Highlight Box */}
        <div className="border border-brand-beige rounded-lg bg-brand-white p-6 max-w-4xl mx-auto mb-16 flex items-start space-x-4">
          <MessageSquare className="text-brand-forest w-6 h-6 stroke-[1.5] min-w-[24px]" />
          <div>
            <h4 className="font-serif text-lg text-brand-charcoal mb-1">
              Conversational Lead Ingestion Efficiency
            </h4>
            <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
              Automated messaging achieves up to 80% response rates compared to traditional contact email forms. By letting customers view restaurant specials or class schedules inside messaging platforms, you qualify high-intent inquiries and collect lead phone records instantly.
            </p>
          </div>
        </div>

        {/* General CTA */}
        <CTASection
          title="Looking to Automate Customer Workflows?"
          subtitle="We engineer specialized WhatsApp Business integrations, AI auto-replies, and custom notifications pipelines. Let us evaluate your operation for a free automated solution roadmap."
          buttonText="Schedule Workflow Automation Audit"
        />
      </div>
    </MainLayout>
  );
};
export default Automation;
