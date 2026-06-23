import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Calendar, Sparkles, ArrowRight, User } from 'lucide-react';
import { Button } from '../../../../components/common/Button';

interface ConsultationType {
  name: string;
  price: number;
  defaultSessions: number;
  description: string;
}

interface StylistOption {
  name: string;
  feePerSession: number;
  tier: string;
  specialty: string;
}

interface StylingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTypeName?: string;
}

const CONSULTATION_TYPES: ConsultationType[] = [
  { 
    name: 'Seasonal Wardrobe Refresh', 
    price: 25000, 
    defaultSessions: 2,
    description: 'A complete curation of seasonal pieces aligned with your lifestyle and personal aesthetic.' 
  },
  { 
    name: 'Special Event Styling', 
    price: 18000, 
    defaultSessions: 1,
    description: 'Perfect for galas, keynotes, or formal milestones. Handpicked head-to-toe options.' 
  },
  { 
    name: 'Bridal & Formal Styling', 
    price: 45000, 
    defaultSessions: 3,
    description: 'Bespoke design, coordinate alterations, and complete visual outfit maps for your special event.' 
  },
];

const STYLIST_OPTIONS: StylistOption[] = [
  { name: 'Associate Stylist', feePerSession: 0, tier: 'Associate', specialty: 'Contemporary Silhouettes' },
  { name: 'Senior Wardrobe Director', feePerSession: 10000, tier: 'Senior', specialty: 'Festive & Classic Drapes' },
  { name: 'Principal Creative Director', feePerSession: 25000, tier: 'Principal', specialty: 'Bridal Trousseau Curation' },
];

export const StylingModal: React.FC<StylingModalProps> = ({
  isOpen,
  onClose,
  selectedTypeName,
}) => {
  const navigate = useNavigate();
  
  // Luxury styling states
  const [selectedType, setSelectedType] = useState<ConsultationType>(CONSULTATION_TYPES[0]);
  const [sessions, setSessions] = useState<number>(2);
  const [format, setFormat] = useState<'virtual' | 'in-person'>('virtual');
  const [selectedStylist, setSelectedStylist] = useState<StylistOption>(STYLIST_OPTIONS[0]);
  const [styleGoals, setStyleGoals] = useState<string>('');
  
  // Custom additions
  const [addStyleBoard, setAddStyleBoard] = useState<boolean>(false);
  const [addTailoring, setAddTailoring] = useState<boolean>(false);
  const [addConcierge, setAddConcierge] = useState<boolean>(false);

  // Sync selected type from parent prop
  useEffect(() => {
    if (selectedTypeName) {
      const match = CONSULTATION_TYPES.find((c) => c.name === selectedTypeName);
      if (match) {
        setSelectedType(match);
        setSessions(match.defaultSessions);
      }
    }
  }, [selectedTypeName]);

  if (!isOpen) return null;

  // Investment calculations
  const baseTotal = selectedType.price * sessions;
  const formatTotal = format === 'in-person' ? 7000 : 0;
  const stylistTotal = selectedStylist.feePerSession * sessions;
  
  const styleBoardTotal = addStyleBoard ? 5000 : 0;
  const tailoringTotal = addTailoring ? 12000 : 0;
  const conciergeTotal = addConcierge ? 8000 : 0;
  
  const estimatedTotal = baseTotal + formatTotal + stylistTotal + styleBoardTotal + tailoringTotal + conciergeTotal;

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedExtras = [];
    if (addStyleBoard) selectedExtras.push('Digital Style Board & Catalog');
    if (addTailoring) selectedExtras.push('Custom Tailoring Fitting Session');
    if (addConcierge) selectedExtras.push('Priority Delivery Concierge');

    navigate('/contact', {
      state: {
        contextType: 'showcase',
        contextName: 'AURA Atelier',
        stylingDetails: {
          consultationType: selectedType.name,
          format,
          sessions,
          stylist: selectedStylist.name,
          extras: selectedExtras,
          estimatedTotal,
        },
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#2B2B2B]/85 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-[#FBF7F0] border border-[#B08D57]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans text-[#2B2B2B]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#B08D57]/20 flex items-center justify-between bg-[#F1E9DC]">
          <div className="flex items-center space-x-2 text-[#3E5A46]">
            <Calendar className="w-5 h-5 stroke-[1.2]" />
            <h3 className="font-serif text-xl font-bold tracking-wide">
              Atelier Personal Intake
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-[#2B2B2B]/60 hover:text-[#3E5A46] p-1.5 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleRequest} className="p-6 overflow-y-auto flex-grow space-y-6">
          
          <div className="bg-[#B08D57]/5 border border-[#B08D57]/15 rounded-xl p-4 flex items-start space-x-3">
            <Sparkles className="text-[#B08D57] w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs text-[#2B2B2B]/70 leading-relaxed">
              Step into our virtual atelier. Below, describe your wardrobe aspirations, select preferred stylist drapers, and align fitting formats to outline a custom design outline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Section: Luxury Intake Forms (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Style Goals Text Area */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/60 mb-2">
                  Describe Your Style Goals
                </label>
                <textarea
                  value={styleGoals}
                  onChange={(e) => setStyleGoals(e.target.value)}
                  placeholder="E.g., Bridal trousseau in classic crimson silk, custom measurements for autumn festive wear..."
                  rows={2}
                  className="w-full bg-[#FBF7F0] border border-[#B08D57]/25 rounded-xl p-3 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#3E5A46] focus:ring-1 focus:ring-[#3E5A46] transition-all duration-200"
                />
              </div>

              {/* Consultation Type selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/60 mb-2">
                  Consultation Program
                </label>
                <select
                  value={selectedType.name}
                  onChange={(e) => {
                    const match = CONSULTATION_TYPES.find((c) => c.name === e.target.value);
                    if (match) {
                      setSelectedType(match);
                      setSessions(match.defaultSessions);
                    }
                  }}
                  className="w-full bg-[#F1E9DC]/35 border border-[#B08D57]/25 rounded-xl px-3 py-2.5 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#3E5A46]"
                >
                  {CONSULTATION_TYPES.map((type) => (
                    <option key={type.name} value={type.name}>
                      {type.name} (₹{type.price.toLocaleString('en-IN')}/session)
                    </option>
                  ))}
                </select>
                <p className="text-[9px] text-[#2B2B2B]/50 mt-1 px-1">
                  {selectedType.description}
                </p>
              </div>

              {/* Format and Sessions inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/60 mb-2">
                    Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as 'virtual' | 'in-person')}
                    className="w-full bg-[#F1E9DC]/35 border border-[#B08D57]/25 rounded-xl px-3 py-2.5 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#3E5A46]"
                  >
                    <option value="virtual">Virtual Video Consult</option>
                    <option value="in-person">Atelier Studio Fitting (+₹7,000)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/60 mb-2">
                    Sessions count
                  </label>
                  <select
                    value={sessions}
                    onChange={(e) => setSessions(Number(e.target.value))}
                    className="w-full bg-[#F1E9DC]/35 border border-[#B08D57]/25 rounded-xl px-3 py-2.5 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#3E5A46]"
                  >
                    {[1, 2, 3, 4, 5, 8].map((s) => (
                      <option key={s} value={s}>
                        {s} {s === 1 ? 'Session' : 'Sessions'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stylist Selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/60 mb-2">
                  Atelier Consultant
                </label>
                <div className="space-y-3">
                  <select
                    value={selectedStylist.name}
                    onChange={(e) => {
                      const match = STYLIST_OPTIONS.find((s) => s.name === e.target.value);
                      if (match) setSelectedStylist(match);
                    }}
                    className="w-full bg-[#F1E9DC]/35 border border-[#B08D57]/25 rounded-xl px-3 py-2.5 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#3E5A46]"
                  >
                    {STYLIST_OPTIONS.map((stylist) => (
                      <option key={stylist.name} value={stylist.name}>
                        {stylist.name} {stylist.feePerSession > 0 ? `(+₹${stylist.feePerSession.toLocaleString('en-IN')}/session)` : '(Included)'}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center space-x-2 bg-[#F1E9DC]/30 p-2.5 rounded-lg border border-[#B08D57]/15">
                    <User className="w-4 h-4 text-[#3E5A46] stroke-[1.5]" />
                    <span className="text-[10px] text-[#2B2B2B]/75 leading-none">
                      Specialty: <strong className="text-[#2B2B2B]">{selectedStylist.specialty}</strong>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Section: Atelier Pricing Preview (5 cols) */}
            <div className="md:col-span-5 border border-[#B08D57]/20 rounded-xl p-5 bg-[#F1E9DC]/45 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B]/50 border-b border-[#B08D57]/20 pb-2">
                  Atelier Curation Details
                </span>
                
                <div className="space-y-2.5 text-xs text-[#2B2B2B]/75">
                  <div className="flex justify-between">
                    <span>{selectedType.name}</span>
                    <span className="font-semibold text-[#2B2B2B]">₹{baseTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {format === 'in-person' && (
                    <div className="flex justify-between">
                      <span>In-Person Travel Fee</span>
                      <span className="font-semibold text-[#2B2B2B]">₹{formatTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {selectedStylist.feePerSession > 0 && (
                    <div className="flex justify-between">
                      <span>{selectedStylist.tier} Director Fee</span>
                      <span className="font-semibold text-[#2B2B2B]">₹{stylistTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  
                  {/* Toggles for custom enhancements */}
                  <div className="pt-2 border-t border-[#B08D57]/15 space-y-2">
                    <span className="block text-[8px] font-bold uppercase tracking-wider text-[#2B2B2B]/50 mb-1">Couture Enhancements</span>
                    
                    <label className="flex items-center justify-between text-[11px] cursor-pointer">
                      <span className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={addStyleBoard}
                          onChange={(e) => setAddStyleBoard(e.target.checked)}
                          className="rounded border-[#B08D57]/40 text-[#3E5A46] focus:ring-[#3E5A46]"
                        />
                        <span>Digital style catalog</span>
                      </span>
                      <span className="font-semibold text-[#2B2B2B]">₹{styleBoardTotal.toLocaleString('en-IN')}</span>
                    </label>

                    <label className="flex items-center justify-between text-[11px] cursor-pointer">
                      <span className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={addTailoring}
                          onChange={(e) => setAddTailoring(e.target.checked)}
                          className="rounded border-[#B08D57]/40 text-[#3E5A46] focus:ring-[#3E5A46]"
                        />
                        <span>Tailor fitting session</span>
                      </span>
                      <span className="font-semibold text-[#2B2B2B]">₹{tailoringTotal.toLocaleString('en-IN')}</span>
                    </label>

                    <label className="flex items-center justify-between text-[11px] cursor-pointer">
                      <span className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={addConcierge}
                          onChange={(e) => setAddConcierge(e.target.checked)}
                          className="rounded border-[#B08D57]/40 text-[#3E5A46] focus:ring-[#3E5A46]"
                        />
                        <span>Priority delivery concierge</span>
                      </span>
                      <span className="font-semibold text-[#2B2B2B]">₹{conciergeTotal.toLocaleString('en-IN')}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#B08D57]/20 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-sm font-bold text-[#2B2B2B]">Estimated Quote</span>
                  <span className="font-serif text-2xl font-bold text-[#3E5A46]">₹{estimatedTotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[9px] text-[#2B2B2B]/50 leading-relaxed">
                  *All prices are simulated demonstration valuations. Finalized requests are prefilled into our lead generation pipeline.
                </p>
              </div>

            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="bg-[#3E5A46] text-white hover:bg-[#3E5A46]/95 border border-[#B08D57]/30 py-3.5 flex items-center justify-center space-x-2 group text-xs uppercase tracking-widest font-bold"
          >
            <span>Request Curation Proposal</span>
            <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </form>
      </div>
    </div>
  );
};
export default StylingModal;
