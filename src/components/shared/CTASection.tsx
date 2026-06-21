import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  contextType?: 'sector' | 'showcase' | 'industry' | 'project' | 'automation';
  contextName?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Transform Your Business Presence?",
  subtitle = "Schedule a complimentary digital consultation. We'll map your industry workflows, audit potential optimizations, and outline a tailored proposal for your business.",
  buttonText = "Book a Free Consultation",
  contextType,
  contextName
}) => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/contact', {
      state: {
        contextType,
        contextName
      }
    });
  };

  const handleWhatsAppChat = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '917724045340';
    let messageText = "Hi! I am visiting LETSGO Business Solutions. I am interested in exploring modern websites, interactive experiences, and business solutions.";
    if (contextName) {
      messageText = `Hi! I am visiting LETSGO Business Solutions. I am interested in building a solution similar to your ${contextName} for my business.`;
    }
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`, '_blank');
  };

  return (
    <section className="bg-brand-white border-y border-brand-beige py-20 px-6 md:px-12 text-center my-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal leading-tight">
          {title}
        </h2>
        <p className="font-sans text-sm md:text-base text-brand-charcoal/60 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 items-center max-w-3xl mx-auto w-full">
          <Button variant="primary" size="lg" onClick={handleCTA} className="group w-full whitespace-nowrap">
            <span>{buttonText}</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleWhatsAppChat}
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
  );
};
export default CTASection;
