import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-forest/15 selection:text-brand-forest relative">
      <Navbar />
      
      {/* Floating Back Button for Showcases */}
      {pathname.split('/').length === 4 && pathname.startsWith('/sectors/') && (
        <div className="fixed top-24 md:top-28 left-4 md:left-8 z-40">
          <Link to={pathname.split('/').slice(0, 3).join('/')}>
            <button className="bg-white/90 backdrop-blur-md border border-brand-beige shadow-md px-4 py-2.5 rounded-full flex items-center space-x-2 hover:bg-brand-forest hover:text-white hover:border-brand-forest transition-all duration-300 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Sector</span>
            </button>
          </Link>
        </div>
      )}

      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
