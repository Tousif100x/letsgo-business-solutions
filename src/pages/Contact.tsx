import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { ContactForm } from '../components/shared/ContactForm';

export const Contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight">
            Consult With Our Experts
          </h1>
          <p className="font-sans text-sm md:text-base text-brand-charcoal/60 leading-relaxed">
            Let's evaluate your business requirements and custom-design a modern web or automation solution built to drive growth.
          </p>
        </div>
        <ContactForm />
      </div>
    </MainLayout>
  );
};
export default Contact;
