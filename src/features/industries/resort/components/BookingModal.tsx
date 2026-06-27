import React, { useState, useEffect } from 'react';

import { X, Calculator, Gift, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../../../../components/common/Button';
import { emailService } from '../../../../services/emailService';

interface RoomType {
  name: string;
  price: number;
  maxGuests: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomName?: string;
}

const ROOM_OPTIONS: RoomType[] = [
  { name: 'Deluxe Ocean Suite', price: 35000, maxGuests: 3 },
  { name: 'Premium Garden Villa', price: 48000, maxGuests: 4 },
  { name: 'Royal Horizon Penthouse', price: 95000, maxGuests: 6 },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomName,
}) => {
  
  const [selectedRoom, setSelectedRoom] = useState<RoomType>(ROOM_OPTIONS[0]);
  const [nights, setNights] = useState<number>(3);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [addSpa, setAddSpa] = useState<boolean>(false);
  const [addYacht, setAddYacht] = useState<boolean>(false);
  const [addTransfer, setAddTransfer] = useState<boolean>(false);
  const [checkInDate, setCheckInDate] = useState<string>('2026-10-24');
  
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [referenceId, setReferenceId] = useState('');

  // Sync selected room from parent prop
  useEffect(() => {
    if (selectedRoomName) {
      const match = ROOM_OPTIONS.find((r) => r.name === selectedRoomName);
      if (match) setSelectedRoom(match);
    }
  }, [selectedRoomName]);

  if (!isOpen) return null;

  // Pricing calculations
  const roomBaseTotal = selectedRoom.price * nights;
  const spaTotal = addSpa ? 15000 * adults : 0;
  const yachtTotal = addYacht ? 25000 : 0;
  const transferTotal = addTransfer ? 7500 : 0;
  const estimatedTotal = roomBaseTotal + spaTotal + yachtTotal + transferTotal;

  const handleBookingRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName || !phone) {
      setErrorMsg('Please provide your name and phone number.');
      return;
    }

    const selectedExtras = [];
    if (addSpa) selectedExtras.push('Spa & Wellness Treatment');
    if (addYacht) selectedExtras.push('Yacht Coastal Tour');
    if (addTransfer) selectedExtras.push('Private Airport Transfer');

    setIsSubmitting(true);

    const requirementStr = `
      Room: ${selectedRoom.name}
      Check-In: ${checkInDate}
      Duration: ${nights} nights
      Guests: ${adults} Adults ${children > 0 ? `, ${children} Children` : ''}
      Extras: ${selectedExtras.join(', ')}
      Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')}
    `;

    const payload = {
      fullName,
      phone,
      email,
      businessName: 'Grand Horizon Client',
      inquiryType: 'Resort Booking',
      projectRequirement: requirementStr,
      showcaseName: 'Grand Horizon',
    };

    const res = await emailService.submitEnquiry(payload);
    if (res.success) {
      if (res.referenceId) setReferenceId(res.referenceId);
      setIsSubmitted(true);
    } else {
      setErrorMsg(res.message);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-brand-charcoal/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-brand-white border border-brand-beige rounded shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-brand-beige flex items-center justify-between bg-brand-ivory">
          <div className="flex items-center space-x-2 text-brand-forest">
            <Calculator className="w-5 h-5 stroke-[1.5]" />
            <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
              Escape Reservation Simulator
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-brand-charcoal/60 hover:text-brand-forest p-1 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-16 h-16 text-brand-forest mb-4" />
            <h3 className="font-serif text-xl font-bold tracking-wide text-brand-charcoal mb-2">Request Submitted</h3>
            <p className="text-sm text-brand-charcoal/70 mb-4">Our booking concierge will contact you soon to confirm your reservation details.</p>
            <div className="mb-6 bg-brand-ivory px-4 py-2 rounded border border-brand-beige">
              <span className="text-xs font-semibold text-brand-forest">Reference: {referenceId}</span>
            </div>
            <Button onClick={onClose} variant="primary">Close Window</Button>
          </div>
        ) : (
        <form onSubmit={handleBookingRequest} className="p-6 overflow-y-auto flex-grow space-y-6 custom-scrollbar">
          
          <div className="bg-brand-gold/5 border border-brand-gold/15 rounded p-4 flex items-start space-x-3">
            <Gift className="text-brand-gold w-5 h-5 stroke-[1.5] shrink-0 mt-0.5" />
            <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
              This interactive widget demonstrates a direct hotel booking engine. Complete the parameters below to compute live estimations without paying OTA service fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Form Inputs */}
            <div className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">Name *</label>
                  <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} disabled={isSubmitting} className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs focus:outline-none focus:border-brand-forest" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">Phone *</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} disabled={isSubmitting} className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs focus:outline-none focus:border-brand-forest" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isSubmitting} className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs focus:outline-none focus:border-brand-forest" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">
                  Select Accommodation
                </label>
                <select
                  value={selectedRoom.name}
                  onChange={(e) => {
                    const match = ROOM_OPTIONS.find((r) => r.name === e.target.value);
                    if (match) setSelectedRoom(match);
                  }}
                  className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2.5 font-sans text-xs text-brand-charcoal focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest"
                >
                  {ROOM_OPTIONS.map((room) => (
                    <option key={room.name} value={room.name}>
                      {room.name} (₹{room.price.toLocaleString('en-IN')}/night)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs text-brand-charcoal focus:outline-none focus:border-brand-forest"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">
                    Stay Duration
                  </label>
                  <select
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs text-brand-charcoal focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 7, 10, 14].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Night' : 'Nights'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs text-brand-charcoal focus:outline-none"
                  >
                    {[1, 2, 3, 4].map((a) => (
                      <option key={a} value={a}>
                        {a} {a === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 mb-2">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-brand-ivory border border-brand-beige rounded px-3 py-2 text-xs text-brand-charcoal focus:outline-none"
                  >
                    {[0, 1, 2, 3].map((c) => (
                      <option key={c} value={c}>
                        {c} {c === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-brand-beige">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                  Optional Curated Experiences
                </span>
                <label className="flex items-center space-x-3 text-xs text-brand-charcoal/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addSpa}
                    onChange={(e) => setAddSpa(e.target.checked)}
                    className="rounded border-brand-beige text-brand-forest focus:ring-brand-forest"
                  />
                  <span>Spa &amp; Wellness Program (+₹15,000/adult)</span>
                </label>
                <label className="flex items-center space-x-3 text-xs text-brand-charcoal/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addYacht}
                    onChange={(e) => setAddYacht(e.target.checked)}
                    className="rounded border-brand-beige text-brand-forest focus:ring-brand-forest"
                  />
                  <span>Yacht Coastal Tour (+₹25,000 flat)</span>
                </label>
                <label className="flex items-center space-x-3 text-xs text-brand-charcoal/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addTransfer}
                    onChange={(e) => setAddTransfer(e.target.checked)}
                    className="rounded border-brand-beige text-brand-forest focus:ring-brand-forest"
                  />
                  <span>Private Airport Transfer (+₹7,500 flat)</span>
                </label>
              </div>
            </div>

            {/* Right Column: Pricing Breakdown */}
            <div className="border border-brand-beige rounded-lg p-5 bg-brand-ivory flex flex-col justify-between">
              <div className="space-y-4">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50 border-b border-brand-beige pb-2">
                  Pricing Breakdown
                </span>
                
                <div className="space-y-2 text-xs font-sans text-brand-charcoal/70">
                  <div className="flex justify-between">
                    <span>{selectedRoom.name} ({nights} nights)</span>
                    <span className="font-semibold text-brand-charcoal">₹{roomBaseTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {addSpa && (
                    <div className="flex justify-between">
                      <span>Spa &amp; Wellness ({adults} guests)</span>
                      <span className="font-semibold text-brand-charcoal">₹{spaTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addYacht && (
                    <div className="flex justify-between">
                      <span>Yacht Excursion</span>
                      <span className="font-semibold text-brand-charcoal">₹{yachtTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {addTransfer && (
                    <div className="flex justify-between">
                      <span>Private Transfer</span>
                      <span className="font-semibold text-brand-charcoal">₹{transferTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-brand-beige mt-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-base font-semibold text-brand-charcoal">Estimated Total</span>
                  <span className="font-serif text-3xl font-bold text-brand-forest">₹{estimatedTotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="font-sans text-[10px] text-brand-charcoal/50 leading-normal">
                  *This estimation excludes OTA fees. All requests are routed straight to LBS consultation advisors for simulated validation.
                </p>
              </div>
            </div>
          </div>

          {errorMsg && <div className="text-red-500 text-xs text-center">{errorMsg}</div>}

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            className="py-3.5 flex items-center justify-center space-x-2 group disabled:opacity-70"
          >
            {isSubmitting ? (
              <><Loader2 className="w-4 h-4 animate-spin mr-2" /> <span>Requesting...</span></>
            ) : (
              <>
                <span>Request Booking Proposal</span>
                <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
              </>
            )}
          </Button>
        </form>
        )}
      </div>
    </div>
  );
};
export default BookingModal;
