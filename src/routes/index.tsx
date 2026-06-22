import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Eagerly loaded parent hub pages
import Home from '../pages/Home';
import Sectors from '../pages/Sectors';
import SectorDetail from '../pages/SectorDetail';
import Projects from '../pages/Projects';
import Automation from '../pages/Automation';
import About from '../pages/About';
import Contact from '../pages/Contact';

// Lazily loaded dynamic detail pages for showcases
const ResortHome = React.lazy(() => import('../features/industries/resort/pages/ResortHome'));
const ShahiKitchen = React.lazy(() => import('../features/industries/shahi-kitchen/pages/ShahiKitchen'));
const BoutiqueHome = React.lazy(() => import('../features/industries/boutique/pages/BoutiqueHome'));
const RajputanaHome = React.lazy(() => import('../features/industries/rajputana/pages/RajputanaHome'));
const RajputanaJewellery = React.lazy(() => import('../features/industries/rajputana/pages/RajputanaJewellery'));
const RajputanaSarees = React.lazy(() => import('../features/industries/rajputana/pages/RajputanaSarees'));
const ProjectDetail = React.lazy(() => import('../features/projects/pages/ProjectDetail'));
const AutomationDetail = React.lazy(() => import('../features/automation/pages/AutomationDetail'));

// Reusable Scroll Restoration Component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

export const AppRoutes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-brand-ivory flex items-center justify-center font-serif text-lg text-brand-charcoal animate-pulse">
          Loading Showroom...
        </div>
      }
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Backward Compatibility Redirects */}
        <Route path="/industries" element={<Navigate to="/sectors" replace />} />
        <Route path="/industries/resort" element={<Navigate to="/sectors/hospitality/resort" replace />} />
        <Route path="/industries/boutique" element={<Navigate to="/sectors/fashion-lifestyle/aura-atelier" replace />} />

        <Route path="/sectors" element={<Sectors />} />
        <Route path="/sectors/:sectorSlug" element={<SectorDetail />} />
        <Route path="/sectors/hospitality/resort" element={<ResortHome />} />
        <Route path="/sectors/hospitality/shahi-kitchen" element={<ShahiKitchen />} />
        <Route path="/sectors/fashion-lifestyle/aura-atelier" element={<BoutiqueHome />} />
        <Route path="/sectors/fashion-lifestyle/rajputana-heritage" element={<RajputanaHome />} />
        <Route path="/rajputana/jewellery" element={<RajputanaJewellery />} />
        <Route path="/rajputana/sarees" element={<RajputanaSarees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/automation/:slug" element={<AutomationDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
