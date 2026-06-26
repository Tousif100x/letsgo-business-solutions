import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, ChevronRight, Menu, X } from 'lucide-react';

export interface ShowcaseNavigationProps {
  sectorName: string;
  sectorSlug: string;
  showcaseName: string;
  accentColor: string;
  theme: "light" | "dark";
}

export const ShowcaseNavigation: React.FC<ShowcaseNavigationProps> = ({
  sectorName,
  sectorSlug,
  showcaseName,
  accentColor,
  theme
}) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const hoverTextClass = isDark ? 'hover:text-white' : 'hover:text-gray-900';
  const bgClass = isDark ? 'bg-black/20' : 'bg-white/40';
  const borderClass = isDark ? 'border-white/10' : 'border-black/5';

  return (
    <div className="absolute top-[20px] left-0 right-0 z-50 px-4 md:px-8 flex justify-center w-full pointer-events-none">
      <div className={`
        pointer-events-auto
        flex items-center justify-between 
        backdrop-blur-md rounded-full border 
        px-5 h-12 shadow-md transition-all duration-300
        w-[90%] md:w-max md:min-w-[600px] gap-6
        ${bgClass} ${borderClass}
      `}>
        
        {/* Desktop Breadcrumb */}
        <div className="hidden md:flex items-center space-x-2 text-xs font-medium tracking-wide">
          <Link to="/" className={`${mutedTextClass} ${hoverTextClass} transition-colors flex items-center`}>
            <Home size={14} className="mr-1" />
            Home
          </Link>
          <ChevronRight size={14} className={mutedTextClass} />
          <Link to="/sectors" className={`${mutedTextClass} ${hoverTextClass} transition-colors`}>
            Sectors
          </Link>
          <ChevronRight size={14} className={mutedTextClass} />
          <Link to={`/sectors/${sectorSlug}`} className={`${mutedTextClass} ${hoverTextClass} transition-colors`}>
            {sectorName}
          </Link>
          <ChevronRight size={14} className={mutedTextClass} />
          <span className={textClass} style={{ color: accentColor }}>
            {showcaseName}
          </span>
        </div>

        {/* Mobile Breadcrumb (Simplified) */}
        <div className="md:hidden flex items-center space-x-2 text-xs font-medium tracking-wide">
          <Link to={`/sectors/${sectorSlug}`} className={`${mutedTextClass} ${hoverTextClass} transition-colors flex items-center`}>
            <ArrowLeft size={14} className="mr-1" />
            {sectorName}
          </Link>
        </div>

        {/* Quick Actions Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => navigate(`/sectors/${sectorSlug}`)}
            className={`text-xs font-bold uppercase tracking-wider flex items-center group transition-colors`}
            style={{ color: accentColor }}
          >
            <ArrowLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Sector
          </button>
          <span className={mutedTextClass}>|</span>
          <Link 
            to="/"
            className={`text-xs font-bold uppercase tracking-wider flex items-center group transition-colors ${mutedTextClass} ${hoverTextClass}`}
          >
            Back to LETSGO
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-1 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={20} className={textClass} />
          ) : (
            <Menu size={20} className={textClass} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className={`
          pointer-events-auto
          absolute top-[70px] left-[5%] right-[5%] w-[90%] p-4 rounded-3xl border backdrop-blur-xl shadow-lg
          ${bgClass} ${borderClass} md:hidden flex flex-col space-y-4
        `}>
          <div className="flex flex-col space-y-2 text-sm">
             <Link to="/" className={`${mutedTextClass} hover:text-white transition-colors flex items-center py-2 border-b ${borderClass}`}>
              <Home size={16} className="mr-2" />
              LETSGO Home
            </Link>
            <Link to="/sectors" className={`${mutedTextClass} hover:text-white transition-colors py-2 border-b ${borderClass}`}>
              All Sectors
            </Link>
            <Link to={`/sectors/${sectorSlug}`} className={`${textClass} font-medium py-2`}>
              {sectorName} Sector
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
