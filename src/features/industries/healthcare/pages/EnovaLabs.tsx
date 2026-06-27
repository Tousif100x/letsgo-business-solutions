import React, { useState, useEffect } from 'react';
import { BookingModal } from '../components/BookingModal';
import { Button } from '../../../../components/common/Button';
import { 
  Activity, CheckCircle2, ChevronRight, Clock, 
  Download, FileText, Heart, MapPin, Search, Shield, 
  Smartphone, TestTube, Users, Phone, MessageCircle, Calendar 
} from 'lucide-react';
import { ShowcaseNavigation } from '../../../../components/shared/ShowcaseNavigation';

export default function EnovaLabs() {
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState<string>('');
  
  // Dashboard mock state
  const [reportLookupState, setReportLookupState] = useState<'idle' | 'searching' | 'found'>('idle');
  const [patientId, setPatientId] = useState('');
  const [mobileNum, setMobileNum] = useState('');

  const handleBookTest = (testName = '') => {
    setSelectedTest(testName);
    setBookingModalOpen(true);
  };

  const handleReportSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId || !mobileNum) return;
    setReportLookupState('searching');
    setTimeout(() => {
      setReportLookupState('found');
      document.getElementById('patient-dashboard')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tests = [
    { name: 'Complete Blood Count (CBC)', price: '₹399', time: '12 Hours', icon: <TestTube className="w-5 h-5" /> },
    { name: 'Liver Function Test (LFT)', price: '₹699', time: '24 Hours', icon: <Activity className="w-5 h-5" /> },
    { name: 'Kidney Function Test', price: '₹799', time: '24 Hours', icon: <Activity className="w-5 h-5" /> },
    { name: 'HbA1c (Diabetes)', price: '₹450', time: '12 Hours', icon: <Activity className="w-5 h-5" /> },
    { name: 'Thyroid Profile', price: '₹550', time: '24 Hours', icon: <Activity className="w-5 h-5" /> },
    { name: 'Vitamin D', price: '₹899', time: '24 Hours', icon: <TestTube className="w-5 h-5" /> },
    { name: 'Vitamin B12', price: '₹699', time: '24 Hours', icon: <TestTube className="w-5 h-5" /> },
    { name: 'Lipid Profile', price: '₹499', time: '12 Hours', icon: <Heart className="w-5 h-5" /> }
  ];

  const packages = [
    { name: 'Basic Health Checkup', tests: 45, price: '₹999', oldPrice: '₹1499' },
    { name: 'Executive Health Package', tests: 72, price: '₹2499', oldPrice: '₹3999' },
    { name: "Women's Wellness", tests: 65, price: '₹1999', oldPrice: '₹2999' },
    { name: 'Diabetes Care', tests: 34, price: '₹1299', oldPrice: '₹1999' }
  ];

  const communityPrograms = [
    { title: 'Free Diabetes Screening Camp', date: 'Next Sunday, 9 AM - 2 PM', location: 'City Park Center' },
    { title: "Women's Wellness Drive", date: 'Available All Month', location: 'All Branches' },
    { title: 'Senior Citizen Health Camp', date: 'Every Wednesday', location: 'Main Laboratory' }
  ];

  const gallery = [
    '/images/enova-labs/equipment.png',
    '/images/enova-labs/hero.png',
    '/images/enova-labs/collection.png',
    'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="bg-[#F8FBFD] text-[#475569] font-sans antialiased overflow-x-hidden selection:bg-[#38BDF8]/20 selection:text-[#0F4C81]">
      <ShowcaseNavigation 
        sectorName="Healthcare" 
        sectorSlug="healthcare" 
        showcaseName="Enova Labs" 
        accentColor="#0F4C81" 
        theme="dark" 
      />
      
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(6,182,212,0.4)} 70%{box-shadow:0 0 0 15px rgba(6,182,212,0)} }
        .float-anim { animation: float 6s ease-in-out infinite; }
        .pulse-btn { animation: pulse-glow 2s infinite; }
        .glass-panel { background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.5); }
      `}</style>

      {/* ─── 1. PREMIUM HERO (100vh) ───────────────────────────────────────── */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-gradient-to-br from-[#0F4C81] via-[#0F4C81]/90 to-[#38BDF8]/80 z-10" />
          <img 
            src="/images/enova-labs/hero.png" 
            alt="Enova Labs Modern Interior" 
            className="w-full h-full object-cover z-0 absolute mix-blend-overlay opacity-40"
          />
          {/* Subtle animated floating icons */}
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-20">
            <Activity className="absolute top-1/4 left-1/4 w-12 h-12 text-white float-anim" style={{ animationDelay: '0s' }} />
            <TestTube className="absolute top-1/3 right-1/4 w-16 h-16 text-white float-anim" style={{ animationDelay: '2s' }} />
            <Heart className="absolute bottom-1/4 left-1/3 w-10 h-10 text-white float-anim" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15]">
                Accurate Reports.<br/>
                <span className="text-[#38BDF8]">Trusted Results.</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed font-light">
                Advanced pathology and diagnostic testing with precision technology. 
                Book tests online, schedule home sample collection, and receive secure digital reports — all from one place.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button 
                onClick={() => handleBookTest()}
                className="bg-[#06B6D4] hover:bg-[#0891B2] text-white rounded-full px-8 py-3.5 font-semibold tracking-wide pulse-btn shadow-lg shadow-[#06B6D4]/30 transition-transform hover:scale-105"
              >
                Book a Test
              </Button>
              <Button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full px-8 py-3.5 font-semibold tracking-wide transition-all"
              >
                View Health Packages
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-white">NABL</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/70 font-semibold">Standard</div>
              </div>
              <div className="w-px h-8 md:h-10 bg-white/20" />
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-bold text-white">25k+</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/70 font-semibold">Reports Delivered</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-5 hidden lg:block perspective-[1000px]">
            <div className="glass-panel p-8 rounded-3xl shadow-2xl shadow-black/10 float-anim border-t border-white border-l" style={{ transformStyle: 'preserve-3d' }}>
              <div className="w-14 h-14 bg-[#0F4C81]/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-[#0F4C81]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Home Sample Collection</h3>
              <p className="text-sm text-slate-500 mb-6">Safe, hygienic, and convenient testing at your doorstep.</p>
              
              <ul className="space-y-4 mb-8">
                {['Schedule Pickup in 60 mins', 'Certified Phlebotomist', 'Safe & Painless Collection', 'Digital Reports in 12hrs'].map((feat, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleBookTest()}
                className="w-full bg-[#0F4C81] hover:bg-[#1e3a8a] text-white rounded-xl py-4 font-semibold shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Home Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. PATIENT REPORT LOOKUP ────────────────────────────────────── */}
      <section className="relative -mt-16 z-30 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold text-[#0F172A] flex items-center">
                <Download className="w-5 h-5 mr-2 text-[#06B6D4]" />
                Download Report
              </h3>
              <p className="text-xs text-slate-500 mt-2">Access your digital reports securely online.</p>
            </div>
            
            <form onSubmit={handleReportSearch} className="w-full md:w-2/3 flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Patient ID / Lab No." 
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                required
              />
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                value={mobileNum}
                onChange={(e) => setMobileNum(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                required
              />
              <Button type="submit" disabled={reportLookupState === 'searching'} className="bg-[#0F4C81] text-white rounded-xl px-6 py-3 font-medium whitespace-nowrap">
                {reportLookupState === 'searching' ? 'Searching...' : 'Search'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── 3. POPULAR DIAGNOSTIC TESTS ─────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Find Your Test</h2>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for CBC, Thyroid, Sugar..." 
              className="w-full bg-white border border-slate-200 rounded-full pl-14 pr-6 py-4 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex">
              <Button className="bg-[#0F4C81] text-white rounded-full px-6 py-2 text-sm font-medium">Search</Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Blood Tests', 'Urine Tests', 'Diabetes', 'Thyroid', 'Vitamin', 'Hormone'].map(cat => (
              <span key={cat} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer hover:bg-slate-200 transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tests.map((test, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center text-[#0F4C81] mb-4 group-hover:scale-110 transition-transform">
                {test.icon}
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-1">{test.name}</h3>
              <p className="text-xs text-slate-500 mb-4 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" /> Reports in {test.time}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-[#0F4C81] text-lg">{test.price}</span>
                <button 
                  onClick={() => handleBookTest(test.name)}
                  className="text-xs font-semibold text-[#06B6D4] hover:text-[#0F4C81] uppercase tracking-wider"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. HEALTH PACKAGES ──────────────────────────────────────────── */}
      <section id="packages" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-sm font-bold text-[#06B6D4] tracking-wider uppercase mb-2 block">Preventive Healthcare</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Popular Health Packages</h2>
            </div>
            <Button className="mt-4 md:mt-0 text-[#0F4C81] font-semibold hover:underline flex items-center bg-transparent p-0">
              View All Packages <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#38BDF8] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#38BDF8]/10 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{pkg.name}</h3>
                <p className="text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
                  Includes <span className="font-bold text-[#0F4C81]">{pkg.tests} Tests</span>
                </p>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-3xl font-bold text-[#0F4C81]">{pkg.price}</span>
                  <span className="text-sm text-slate-400 line-through">{pkg.oldPrice}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => handleBookTest(pkg.name)}
                    className="w-full bg-[#0F4C81] text-white hover:bg-[#1e3a8a] rounded-xl py-3 text-sm font-semibold transition-colors"
                  >
                    Book Package
                  </Button>
                  <Button className="w-full bg-white text-[#0F4C81] border border-slate-200 hover:bg-slate-50 rounded-xl py-3 text-sm font-semibold transition-colors">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. COMMUNITY HEALTH PROGRAMS ────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-bold text-[#06B6D4] tracking-wider uppercase mb-2 block">Giving Back</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Community Health Programs</h2>
          <p className="text-slate-500 mt-4 max-w-2xl">Enova Labs is committed to building a healthier society. Participate in our free drives, camps, and subsidized wellness programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityPrograms.map((prog, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-40 bg-gradient-to-r from-[#0F4C81]/80 to-[#38BDF8]/80 flex items-center justify-center relative overflow-hidden">
                <Heart className="w-16 h-16 text-white/20 absolute -right-4 -bottom-4 rotate-12" />
                <h3 className="text-xl font-bold text-white text-center px-6 relative z-10">{prog.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="w-4 h-4 mr-2 text-[#06B6D4]" /> {prog.date}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#06B6D4]" /> {prog.location}
                  </div>
                </div>
                <Button className="w-full bg-slate-100 text-[#0F4C81] hover:bg-slate-200 rounded-xl py-2.5 text-sm font-semibold transition-colors">
                  Book Slot
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. PATIENT DASHBOARD MOCKUP ─────────────────────────────────── */}
      <section id="patient-dashboard" className="py-24 bg-[#0F4C81] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <span className="text-sm font-bold text-[#38BDF8] tracking-wider uppercase block">Digital Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Manage your health <br/>like never before.
            </h2>
            <p className="text-white/80 text-lg max-w-md font-light leading-relaxed">
              Our Apple Health & Stripe inspired patient portal gives you complete control. Download reports, view health trends, and manage appointments seamlessly.
            </p>
            <ul className="space-y-4">
              {['QR Verified Digital Reports', 'Historical Trend Graphs', 'Family Member Management'].map((feat, i) => (
                <li key={i} className="flex items-center text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] mr-3" /> {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard UI Mockup */}
          <div className="relative">
            {reportLookupState === 'found' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider animate-in slide-in-from-top-4 fade-in duration-500 z-50 flex items-center shadow-lg shadow-[#10B981]/20">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> REPORT FOUND
              </div>
            )}
            
            <div className={`bg-[#F8FAFC] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-700 ${reportLookupState === 'found' ? 'ring-4 ring-[#10B981]/50 scale-[1.02]' : ''}`}>
              {/* Header */}
              <div className="bg-white p-5 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">JD</div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A]">{reportLookupState === 'found' && patientId ? `Patient #${patientId}` : 'John Doe'}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Patient ID: 908123</div>
                  </div>
                </div>
                <div className="bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <Shield className="w-3.5 h-3.5 mr-1" /> Verified
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Trends Card */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-[#0F172A]">Health Timeline</h4>
                    <span className="text-xs text-slate-400">Last 6 Months</span>
                  </div>
                  <div className="h-24 flex items-end justify-between space-x-2">
                    {[40, 60, 45, 80, 50, 75, 90].map((h, i) => (
                      <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group">
                        <div className="absolute bottom-0 w-full bg-[#38BDF8] rounded-t-sm transition-all duration-500 group-hover:bg-[#0F4C81]" style={{ height: `${h}%` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reports */}
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] mb-3">Recent Reports</h4>
                  <div className="space-y-3">
                    {[
                      { n: 'Complete Blood Count', d: 'Today, 10:00 AM', s: 'Ready' },
                      { n: 'Lipid Profile', d: 'Oct 12, 2023', s: 'Ready' }
                    ].map((rep, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between hover:border-[#38BDF8] transition-colors cursor-pointer shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${i===0 && reportLookupState === 'found' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#0F4C81]/5 text-[#0F4C81]'}`}>
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800">{rep.n}</div>
                            <div className="text-xs text-slate-500">{rep.d}</div>
                          </div>
                        </div>
                        <Button className="bg-slate-50 hover:bg-slate-100 text-[#0F4C81] rounded-lg p-2">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHY CHOOSE & HOW IT WORKS ────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Why Choose Enova Labs</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Setting the benchmark in diagnostic precision and patient care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-24">
          {[
            { t: 'Accurate Results', d: 'NABL certified labs ensuring 100% precision.', i: <Shield /> },
            { t: 'Fast Reports', d: 'Digital delivery within 12-24 hours.', i: <Clock /> },
            { t: 'Experienced Staff', d: 'Highly trained pathologists and technicians.', i: <Users /> },
            { t: 'Home Collection', d: 'Safe sample collection at your convenience.', i: <MapPin /> },
            { t: 'Affordable Pricing', d: 'Transparent pricing with no hidden costs.', i: <CheckCircle2 /> },
            { t: 'Smart Dashboard', d: 'Track history and download reports easily.', i: <Smartphone /> },
          ].map((feat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0F4C81] mb-5 group-hover:bg-[#0F4C81] group-hover:text-white transition-colors shadow-sm">
                <div className="w-8 h-8 flex items-center justify-center">{feat.i}</div>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feat.t}</h3>
              <p className="text-sm text-slate-500">{feat.d}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-10 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-slate-200 z-0" />
            {[
              { s: '01', t: 'Book Test', d: 'Online or via WhatsApp' },
              { s: '02', t: 'Sample Collection', d: 'At home or laboratory' },
              { s: '03', t: 'Lab Analysis', d: 'Precision testing' },
              { s: '04', t: 'Digital Report', d: 'Sent via SMS/Email' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0 bg-slate-50 px-4 group">
                <div className="w-12 h-12 bg-white border-2 border-[#38BDF8] rounded-full flex items-center justify-center text-[#0F4C81] font-bold shadow-sm mb-4 group-hover:bg-[#38BDF8] group-hover:text-white transition-colors">
                  {step.s}
                </div>
                <h4 className="font-bold text-[#0F172A]">{step.t}</h4>
                <p className="text-xs text-slate-500 mt-1">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. LAB GALLERY ──────────────────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Our Facilities</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                <img src={img} alt={`Facility ${i}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. BOTTOM CTA & FOOTER ──────────────────────────────────────── */}
      <section className="bg-[#0F172A] py-24 px-6 text-center mt-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Healthcare Starts With <br/><span className="text-[#38BDF8]">Early Detection.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => handleBookTest()} className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white rounded-full px-8 py-4 font-bold text-lg shadow-lg">
              Book Test Now
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-4 font-bold text-lg flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> Call Us
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">ENOVA LABS</div>
            <p className="text-sm leading-relaxed">Accurate. Reliable. Trusted. Your partner in preventive healthcare and precision diagnostics.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Book a Test</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Health Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Report</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+91 98765 43210</li>
              <li>care@enovalabs.com</li>
              <li>123 Healthcare Avenue, City</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Timings</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon - Sat: 7:00 AM - 9:00 PM</li>
              <li>Sunday: 7:00 AM - 2:00 PM</li>
              <li className="text-[#38BDF8] font-semibold mt-2">Home Collection starts at 6:30 AM</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING COMPONENTS ─────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button className="w-14 h-14 bg-[#25D366] hover:bg-[#1EBE55] text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all shadow-[#25D366]/30 group relative">
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </button>
      </div>

      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex md:hidden gap-3 z-40 transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <Button onClick={() => handleBookTest()} className="flex-1 bg-[#0F4C81] text-white font-bold rounded-xl py-3 shadow-md">Book Test</Button>
        <Button className="flex-1 bg-[#25D366] text-white font-bold rounded-xl py-3 shadow-md flex items-center justify-center">
          <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
        </Button>
      </div>

      {/* Booking Modal Instance */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        selectedTest={selectedTest}
      />
    </div>
  );
}


