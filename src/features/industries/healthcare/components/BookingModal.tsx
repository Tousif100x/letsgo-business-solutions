import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../../../../components/common/Button';
import { emailService } from '../../../../services/emailService';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setErrorMsg('');
    if (!formData.name || !formData.phone || !formData.testSelection) {
      setErrorMsg("Please fill in the required fields (Name, Phone, Test/Package).");
      return;
    }

    setIsSubmitting(true);
    const reqDetails = `
      Test: ${formData.testSelection}
      Date: ${formData.date}
      Time: ${formData.time}
      Type: ${formData.collectionType === 'home' ? 'Home Collection' : 'Lab Visit'}
      Address: ${formData.address}
    `;

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      businessName: 'Enova Labs Booking',
      inquiryType: 'Healthcare Appointment',
      projectRequirement: reqDetails,
      showcaseName: 'Enova Labs (Healthcare)',
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

        {isSubmitted ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Booking Requested!</h3>
            <p className="text-slate-600 mb-4">Your appointment request has been submitted successfully. Our team will contact you shortly to confirm.</p>
            <div className="mb-6 bg-[#0F4C81]/10 px-4 py-2 rounded border border-[#0F4C81]/20">
              <span className="text-xs font-semibold text-[#0F4C81]">Reference: {referenceId}</span>
            </div>
            <Button onClick={onClose} className="bg-[#0F4C81] text-white">Close</Button>
          </div>
        ) : (
          <>
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Preferred Time</label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    onClick={() => setFormData(prev => ({ ...prev, collectionType: 'home' }))}
                    className={`p-3 border rounded-xl flex items-start space-x-3 transition-all ${
                      formData.collectionType === 'home' 
                        ? 'border-[#0F4C81] bg-[#0F4C81]/5 ring-1 ring-[#0F4C81]' 
                        : 'border-slate-200 bg-white hover:border-[#38BDF8]'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                    disabled={isSubmitting}
                    onClick={() => setFormData(prev => ({ ...prev, collectionType: 'lab' }))}
                    className={`p-3 border rounded-xl flex items-start space-x-3 transition-all ${
                      formData.collectionType === 'lab' 
                        ? 'border-[#0F4C81] bg-[#0F4C81]/5 ring-1 ring-[#0F4C81]' 
                        : 'border-slate-200 bg-white hover:border-[#38BDF8]'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                      disabled={isSubmitting}
                    />
                  </div>
                )}
              </div>
              
              {errorMsg && (
                <div className="text-red-500 text-sm">{errorMsg}</div>
              )}

            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-500 max-w-[200px]">
                By booking, you agree to our <a href="#" className="text-[#0F4C81] hover:underline">Terms of Service</a>.
              </p>
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-[#10B981] hover:bg-[#059669] text-white rounded-lg px-6 py-2.5 font-medium tracking-wide flex items-center space-x-2 shadow-lg shadow-[#10B981]/20 transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Submitting...</>
                ) : (
                  <span>Submit Booking</span>
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
