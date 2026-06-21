import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-forest/15 selection:text-brand-forest">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
