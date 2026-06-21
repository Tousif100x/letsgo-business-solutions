import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-white border-t border-brand-beige py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-brand-charcoal">
              LETSGO
            </span>
            <span className="font-sans text-[8px] font-bold tracking-[0.25em] text-brand-charcoal/50 uppercase -mt-1">
              Business Solutions
            </span>
          </Link>
          <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed max-w-sm">
            Showcasing modern digital design, web automation, and custom solutions engineered to drive conversions and operational efficiency for local and regional businesses.
          </p>
        </div>

        {/* Industry Showcases Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
            Showcase Modules
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/industries/resort" className="text-brand-charcoal/60 hover:text-brand-forest transition-colors">
                Resort & Hotel Demo
              </Link>
            </li>
            <li>
              <span className="text-brand-charcoal/40 cursor-default">
                Boutique & Fashion (Soon)
              </span>
            </li>
            <li>
              <span className="text-brand-charcoal/40 cursor-default">
                Coaching Institute (Soon)
              </span>
            </li>
            <li>
              <span className="text-brand-charcoal/40 cursor-default">
                Restaurant & Cafe (Soon)
              </span>
            </li>
            <li>
              <span className="text-brand-charcoal/40 cursor-default">
                Gym & Fitness (Soon)
              </span>
            </li>
          </ul>
        </div>

        {/* Automation Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
            Automation
          </h4>
          <ul className="space-y-2.5 text-xs text-brand-charcoal/60">
            <li>
              <Link to="/automation/cyber-spice-cafe" className="hover:text-brand-forest transition-colors">
                Cyber Spice Cafe Bot
              </Link>
            </li>
            <li>
              <Link to="/automation/multi-business-bot" className="hover:text-brand-forest transition-colors">
                LETSGO Multi-Business Bot
              </Link>
            </li>
            <li>
              <Link to="/projects/eyecare" className="hover:text-brand-forest transition-colors">
                Eyecare EHR Platform
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Corporate Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
            Connect
          </h4>
          <ul className="space-y-2.5 text-xs text-brand-charcoal/60">
            <li>
              <Link to="/about" className="hover:text-brand-forest transition-colors">
                About LBS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-forest transition-colors">
                Inquire & Book Consultation
              </Link>
            </li>
            <li className="pt-2 text-brand-charcoal/50 font-sans italic">
              Empowering business owners to own their digital presence commission-free.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-beige mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-charcoal/50 font-sans">
        <p>© {currentYear} LETSGO Business Solutions. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-brand-forest transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-brand-forest transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
