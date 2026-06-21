import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Calendar, Sparkles, ArrowRight, User } from 'lucide-react';
import { Button } from '../../../../components/common/Button';

interface ConsultationType {
  name: string;
  description: string;
}

interface StylistOption {
  name: string;
  tier: string;
  specialty: string;
}

interface TrousseauModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTypeName?: string;
  preselectedLook?: string;
}

const CONSULTATION_TYPES: ConsultationType[] = [
  { 
    name: 'Bridal Trousseau Curation', 
    description: 'A comprehensive, multi-session consultation to design and coordinate your entire wedding ensemble, matching ancestral weaves with royal jewellery.' 
  },
  { 
    name: 'Heritage Saree Selection', 
    description: 'Personalized curation of handloom masterpieces (Bandhani, Leheriya, Kota Doria) for significant life events.' 
  },
  { 
    name: 'Traditional Royal Jewellery Pairing', 
    description: 'Curating bespoke Jadau and Meenakari gold filigree ornaments to coordinate perfectly with your couture.' 
  },
];

const STYLIST_OPTIONS: StylistOption[] = [
  { name: 'Associate Heritage Stylist', tier: 'Associate', specialty: 'Contemporary Styling of Classic Textiles' },
  { name: 'Senior Wardrobe Director', tier: 'Senior', specialty: 'Traditional Drapes & Royal Heritage History' },
  { name: 'Principal Creative Director', tier: 'Principal', specialty: 'Bridal Trousseau & Heirloom Ornaments Curation' },
];

export const TrousseauModal: React.FC<TrousseauModalProps> = ({
  isOpen,
  onClose,
  selectedTypeName,
  preselectedLook,
}) => {
  const navigate = useNavigate();
  
  // Custom states
  const [selectedType, setSelectedType] = useState<ConsultationType>(CONSULTATION_TYPES[0]);
  const [format, setFormat] = useState<'virtual' | 'in-person'>('virtual');
  const [selectedStylist, setSelectedStylist] = useState<StylistOption>(STYLIST_OPTIONS[0]);
  const [styleGoals, setStyleGoals] = useState<string>('');
  
  // Custom additions
  const [addFabricSwatches, setAddFabricSwatches] = useState<boolean>(false);
  const [addAccessoryMatching, setAddAccessoryMatching] = useState<boolean>(false);
  const [addArchiveAccess, setAddArchiveAccess] = useState<boolean>(false);

  // Sync selected type from parent prop
  useEffect(() => {
    if (selectedTypeName) {
      const match = CONSULTATION_TYPES.find((c) => c.name === selectedTypeName);
      if (match) {
        setSelectedType(match);
      }
    }
  }, [selectedTypeName]);

  // Set style goals placeholder if preselected look is provided
  useEffect(() => {
    if (preselectedLook) {
      setStyleGoals(`Interested in curating a look around: ${preselectedLook}`);
    }
  }, [preselectedLook]);

  if (!isOpen) return null;

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedExtras = [];
    if (addFabricSwatches) selectedExtras.push('Heirloom Fabric Swatch Book');
    if (addAccessoryMatching) selectedExtras.push('Jadau Jewellery Coord Styling');
    if (addArchiveAccess) selectedExtras.push('Private Archive Room Walkthrough');

    navigate('/contact', {
      state: {
        contextType: 'showcase',
        contextName: 'Rajputana Heritage',
        stylingDetails: {
          consultationType: selectedType.name,
          format,
          stylist: selectedStylist.name,
          extras: selectedExtras,
          styleGoals,
          preselectedLook: preselectedLook || 'None',
        },
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#262626]/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#FBF7F0] border border-[#C5A059]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans text-[#262626]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#C5A059]/20 flex items-center justify-between bg-[#EFE8DB]">
          <div className="flex items-center space-x-2 text-[#1E4620]">
            <Calendar className="w-5 h-5 stroke-[1.2]" />
            <h3 className="font-serif text-xl font-bold tracking-wide">
              Trousseau Consultation Intake
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-[#262626]/60 hover:text-[#1E4620] p-1.5 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleRequest} className="p-6 overflow-y-auto flex-grow space-y-6">
          
          <div className="bg-[#1E4620]/5 border border-[#1E4620]/15 rounded-xl p-4 flex items-start space-x-3">
            <Sparkles className="text-[#C5A059] w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs text-[#262626]/75 leading-relaxed">
              Step into the virtual chambers of Rajputana Heritage. Outline your aesthetic aspirations, select a consulting director, and coordinate private viewing formats to request a bespoke curation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Section: Luxury Intake Forms (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Style Goals Text Area */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#262626]/60 mb-2">
                  Describe Your Heritage Style Goals
                </label>
                <textarea
                  value={styleGoals}
                  onChange={(e) => setStyleGoals(e.target.value)}
                  placeholder="E.g., Bridal Jadau gold pair coordinate with red Bandhani saree for wedding reception..."
                  rows={3}
                  className="w-full bg-[#FBF7F0] border border-[#C5A059]/25 rounded-xl p-3 text-xs text-[#262626] focus:outline-none focus:border-[#1E4620] focus:ring-1 focus:ring-[#1E4620] transition-all duration-200"
                />
              </div>

              {/* Consultation Type selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#262626]/60 mb-2">
                  Consultation Program
                </label>
                <select
                  value={selectedType.name}
                  onChange={(e) => {
                    const match = CONSULTATION_TYPES.find((c) => c.name === e.target.value);
                    if (match) {
                      setSelectedType(match);
                    }
                  }}
                  className="w-full bg-[#EFE8DB]/35 border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#1E4620]"
                >
                  {CONSULTATION_TYPES.map((type) => (
                    <option key={type.name} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <p className="text-[9px] text-[#262626]/50 mt-1 px-1">
                  {selectedType.description}
                </p>
              </div>

              {/* Format input */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#262626]/60 mb-2">
                  Viewing Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as 'virtual' | 'in-person')}
                  className="w-full bg-[#EFE8DB]/35 border border-[#C5A059]/25 rounded-xl px-3 py-2.5 text-xs text-[#262626] focus:outline-none focus:border-[#1E4620]"
                >
                  <option value="virtual">Virtual Video Consult</option>
                  <option value="in-person">Private Viewing in Palace Boutique</option>
                </select>
              </div>

            </div>

            {/* Right Section: Custom Enhancements (5 cols) */}
            <div className="md:col-span-5 border border-[#C5A059]/20 rounded-xl p-5 bg-[#EFE8DB]/45 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#262626]/50 border-b border-[#C5A059]/20 pb-2">
                  Atelier Curation Director
                </span>
                
                {/* Stylist Selection */}
                <div className="space-y-3">
                  <select
                    value={selectedStylist.name}
                    onChange={(e) => {
                      const match = STYLIST_OPTIONS.find((s) => s.name === e.target.value);
                      if (match) setSelectedStylist(match);
                    }}
                    className="w-full bg-[#FBF7F0] border border-[#C5A059]/25 rounded-xl px-3 py-2 text-xs text-[#262626] focus:outline-none focus:border-[#1E4620]"
                  >
                    {STYLIST_OPTIONS.map((stylist) => (
                      <option key={stylist.name} value={stylist.name}>
                        {stylist.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center space-x-2 bg-[#FBF7F0]/80 p-2.5 rounded-lg border border-[#C5A059]/15">
                    <User className="w-4 h-4 text-[#1E4620] stroke-[1.5]" />
                    <span className="text-[9px] text-[#262626]/75 leading-tight">
                      Specialty: <strong className="text-[#262626]">{selectedStylist.specialty}</strong>
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#C5A059]/15 space-y-3">
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-[#262626]/50">
                    Traditional Enhancements
                  </span>
                  
                  {/* Fabric Swatch check */}
                  <label className="flex items-start space-x-3 text-[11px] cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={addFabricSwatches}
                      onChange={(e) => setAddFabricSwatches(e.target.checked)}
                      className="rounded border-[#C5A059]/40 text-[#1E4620] focus:ring-[#1E4620] mt-0.5"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#262626] group-hover:text-[#1E4620]">Swatch Book Delivery</span>
                      <span className="text-[9px] text-[#262626]/55">Order samples of real handloom silk & cotton fabrics.</span>
                    </div>
                  </label>

                  {/* Accessory check */}
                  <label className="flex items-start space-x-3 text-[11px] cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={addAccessoryMatching}
                      onChange={(e) => setAddAccessoryMatching(e.target.checked)}
                      className="rounded border-[#C5A059]/40 text-[#1E4620] focus:ring-[#1E4620] mt-0.5"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#262626] group-hover:text-[#1E4620]">Jadau Coord Styling</span>
                      <span className="text-[9px] text-[#262626]/55">Select matching earrings, necklaces, and bangles.</span>
                    </div>
                  </label>

                  {/* Archive Access check */}
                  <label className="flex items-start space-x-3 text-[11px] cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={addArchiveAccess}
                      onChange={(e) => setAddArchiveAccess(e.target.checked)}
                      className="rounded border-[#C5A059]/40 text-[#1E4620] focus:ring-[#1E4620] mt-0.5"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#262626] group-hover:text-[#1E4620]">Archive Room Access</span>
                      <span className="text-[9px] text-[#262626]/55">View vintage bridal designs and private collection vaults.</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C5A059]/20 space-y-1">
                <span className="text-[8px] uppercase tracking-wider text-[#262626]/40 block">Design Inquiry</span>
                <p className="text-[9px] text-[#262626]/50 leading-relaxed">
                  Submit this proposal to book a viewing. Our team will verify date availability and contact you via email or phone.
                </p>
              </div>

            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="bg-[#1E4620] text-white hover:bg-[#1E4620]/95 border border-[#C5A059]/30 py-3.5 flex items-center justify-center space-x-2 group text-xs uppercase tracking-widest font-bold"
          >
            <span>Request Heritage Consultation</span>
            <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default TrousseauModal;
