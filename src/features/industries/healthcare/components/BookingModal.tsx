import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../../components/common/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTest?: string;
  selectedPackage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedTest, selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    testSelection: selectedTest || selectedPackage || '',
    date: '',
    time: '',
    collectionType: 'home',
    address: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppBook = () => {
    if (!formData.name || !formData.phone || !formData.testSelection) {
      alert("Please fill in the required fields (Name, Phone, Test/Package).");
      return;
    }

    const message = `*NEW BOOKING REQUEST - ENOVA LABS*%0A%0A` +
      `*Patient Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `${formData.email ? `*Email:* ${formData.email}%0A` : ''}` +
      `*Requested Test/Package:* ${formData.testSelection}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Preferred Time:* ${formData.time}%0A` +
      `*Collection Type:* ${formData.collectionType === 'home' ? 'Home Sample Collection' : 'Visit Laboratory'}%0A` +
      `${formData.collectionType === 'home' ? `*Address:* ${formData.address}%0A` : ''}%0A` +
      `Please confirm my appointment.`;

    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-[#0F4C81] p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Book Appointment</h3>
              <p className="text-sm text-[#38BDF8]">Schedule your test in minutes</p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider flex items-center">
              <User size={16} className="mr-2 text-[#06B6D4]" />
              Patient Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Email Address (Optional)</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="h-px w-full bg-slate-100" />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider flex items-center">
              <Clock size={16} className="mr-2 text-[#06B6D4]" />
              Appointment Details
            </h4>
            
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Test or Package *</label>
              <input 
                type="text" 
                name="testSelection"
                value={formData.testSelection}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                placeholder="e.g. Complete Blood Count (CBC)"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Preferred Time</label>
                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                >
                  <option value="">Select Time</option>
                  <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM (Fasting)</option>
                  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-slate-100" />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider flex items-center">
              <MapPin size={16} className="mr-2 text-[#06B6D4]" />
              Collection Type
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, collectionType: 'home' }))}
                className={`p-3 border rounded-xl flex items-start space-x-3 transition-all ${
                  formData.collectionType === 'home' 
                    ? 'border-[#0F4C81] bg-[#0F4C81]/5 ring-1 ring-[#0F4C81]' 
                    : 'border-slate-200 bg-white hover:border-[#38BDF8]'
                }`}
              >
                <div className={`mt-0.5 rounded-full p-0.5 ${formData.collectionType === 'home' ? 'bg-[#0F4C81] text-white' : 'border border-slate-300 text-transparent'}`}>
                  <CheckCircle2 size={14} />
                </div>
                <div className="text-left">
                  <div className={`text-sm font-medium ${formData.collectionType === 'home' ? 'text-[#0F4C81]' : 'text-slate-700'}`}>Home Collection</div>
                  <div className="text-xs text-slate-500 mt-0.5">We come to you</div>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, collectionType: 'lab' }))}
                className={`p-3 border rounded-xl flex items-start space-x-3 transition-all ${
                  formData.collectionType === 'lab' 
                    ? 'border-[#0F4C81] bg-[#0F4C81]/5 ring-1 ring-[#0F4C81]' 
                    : 'border-slate-200 bg-white hover:border-[#38BDF8]'
                }`}
              >
                <div className={`mt-0.5 rounded-full p-0.5 ${formData.collectionType === 'lab' ? 'bg-[#0F4C81] text-white' : 'border border-slate-300 text-transparent'}`}>
                  <CheckCircle2 size={14} />
                </div>
                <div className="text-left">
                  <div className={`text-sm font-medium ${formData.collectionType === 'lab' ? 'text-[#0F4C81]' : 'text-slate-700'}`}>Visit Lab</div>
                  <div className="text-xs text-slate-500 mt-0.5">Come to our center</div>
                </div>
              </button>
            </div>

            {formData.collectionType === 'home' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="block text-xs font-medium text-slate-500 mb-1">Collection Address *</label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all resize-none"
                  placeholder="Enter your full address with landmark"
                />
              </div>
            )}
          </div>

        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 max-w-[200px]">
            By booking, you agree to our <a href="#" className="text-[#0F4C81] hover:underline">Terms of Service</a>.
          </p>
          <Button 
            onClick={handleWhatsAppBook}
            className="bg-[#10B981] hover:bg-[#059669] text-white rounded-lg px-6 py-2.5 font-medium tracking-wide flex items-center space-x-2 shadow-lg shadow-[#10B981]/20 transition-all hover:scale-105"
          >
            <span>Book via WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
