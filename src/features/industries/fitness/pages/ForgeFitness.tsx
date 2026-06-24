import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell, Zap, Users, Trophy, Star, ChevronRight, ChevronLeft,
  Clock, MapPin, Phone, Mail, MessageCircle, Play, Check,
  Flame, Target, TrendingUp, Shield, X, Instagram, Facebook,
  Youtube, ArrowDown, Award, BarChart2
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  sessions: string;
  image: string;
  tag: string;
  icon: React.ReactNode;
}

interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  successRate: string;
  specialties: string[];
  image: string;
}

interface TransformStory {
  id: string;
  name: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  weightLost?: string;
  muscleGain?: string;
  fatReduction?: string;
  quote: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  program: string;
  since: string;
}

// ─── DATA ───────────────────────────────────────────────────────────────────
const programs: Program[] = [
  {
    id: 'strength',
    name: 'Strength Training',
    description: 'Build raw power and functional strength with progressive overload techniques used by elite athletes.',
    duration: '60 min/session',
    sessions: '4x per week',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tag: 'Most Popular',
    icon: <Dumbbell size={20} />
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss Program',
    description: 'Scientifically designed HIIT circuits and metabolic conditioning to maximize fat burn in minimum time.',
    duration: '45 min/session',
    sessions: '5x per week',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tag: 'High Demand',
    icon: <Flame size={20} />
  },
  {
    id: 'muscle',
    name: 'Muscle Building',
    description: 'Hypertrophy-focused training splits with nutrition periodization to help you pack on quality muscle mass.',
    duration: '75 min/session',
    sessions: '5x per week',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    tag: 'Premium',
    icon: <TrendingUp size={20} />
  },
  {
    id: 'functional',
    name: 'Functional Fitness',
    description: 'Movement-based training that builds real-world strength, stability, and athletic performance for everyday life.',
    duration: '50 min/session',
    sessions: '3x per week',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    icon: <Target size={20} />
  },
  {
    id: 'cross',
    name: 'Cross Training',
    description: 'High-intensity varied workouts combining gymnastic, cardio, and weightlifting for total body conditioning.',
    duration: '60 min/session',
    sessions: '4x per week',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    tag: 'Intense',
    icon: <Zap size={20} />
  },
  {
    id: 'personal',
    name: 'Personal Training',
    description: 'Exclusive 1-on-1 coaching tailored 100% to your goals, schedule, and body type with certified experts.',
    duration: '60 min/session',
    sessions: 'Flexible',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800&q=80',
    tag: 'Exclusive',
    icon: <Shield size={20} />
  }
];

const trainers: Trainer[] = [
  {
    id: 't1',
    name: 'Arjun Sharma',
    role: 'Head Strength Coach',
    experience: '12 Years',
    successRate: '94%',
    specialties: ['Powerlifting', 'Olympic Lifting', 'Periodization'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't2',
    name: 'Priya Kapoor',
    role: 'Fat Loss Specialist',
    experience: '8 Years',
    successRate: '97%',
    specialties: ['HIIT', 'Nutrition Coaching', 'Body Composition'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't3',
    name: 'Rohit Mehra',
    role: 'Functional Trainer',
    experience: '9 Years',
    successRate: '91%',
    specialties: ['CrossFit', 'Mobility', 'Athletic Performance'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't4',
    name: 'Neha Singh',
    role: 'Nutrition & Wellness Expert',
    experience: '7 Years',
    successRate: '98%',
    specialties: ['Sports Nutrition', 'Diet Planning', 'Supplementation'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80'
  }
];

const transformStories: TransformStory[] = [
  {
    id: 'ts1',
    name: 'Vikram Nair',
    duration: '6 Months',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80',
    weightLost: '22 kg',
    fatReduction: '18%',
    quote: 'Forge literally changed my life. I came in overweight and defeated — I leave as an athlete.'
  },
  {
    id: 'ts2',
    name: 'Simran Kaur',
    duration: '4 Months',
    beforeImage: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80',
    weightLost: '15 kg',
    muscleGain: '4 kg',
    quote: 'The trainers here push you beyond what you think is possible. Absolutely world-class.'
  },
  {
    id: 'ts3',
    name: 'Aman Gupta',
    duration: '8 Months',
    beforeImage: 'https://images.unsplash.com/photo-1571732154690-f6d1c4fbd4ab?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=400&q=80',
    muscleGain: '12 kg',
    fatReduction: '22%',
    quote: "Went from skinny to strong. The muscle building program delivered results I didn't think were possible."
  }
];

const products: Product[] = [
  {
    id: 'wp1', name: 'Forge Whey Protein', category: 'Protein',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80',
    description: '25g protein per scoop. Zero artificial fillers. Chocolate Fudge & Vanilla Bean.'
  },
  {
    id: 'mg1', name: 'Mass Gainer Pro', category: 'Gainer',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=400&q=80',
    description: '1250 kcal per serving. Clean complex carbs and 55g protein. Ideal for hardgainers.'
  },
  {
    id: 'pw1', name: 'Pre Workout Ignite', category: 'Pre-Workout',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1579722820903-47d2a2b00271?auto=format&fit=crop&w=400&q=80',
    description: 'Explosive energy, razor-sharp focus, no crash. 200mg natural caffeine.'
  },
  {
    id: 'bc1', name: 'BCAA Recover', category: 'Recovery',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=400&q=80',
    description: '2:1:1 ratio BCAA blend with electrolytes for muscle repair and hydration.'
  },
  {
    id: 'sh1', name: 'Forge Shaker Bottle', category: 'Accessories',
    price: 599,
    image: 'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?auto=format&fit=crop&w=400&q=80',
    description: 'BPA-free 700ml shaker with leak-proof lid and measurement markings.'
  },
  {
    id: 'ga1', name: 'Lifting Gloves', category: 'Accessories',
    price: 799,
    image: 'https://images.unsplash.com/photo-1566241832378-917a0f30db2c?auto=format&fit=crop&w=400&q=80',
    description: 'Full palm protection and wrist support. Anti-slip grip for heavy lifts.'
  }
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', label: 'Weight Section' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80', label: 'Cardio Zone' },
  { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80', label: 'Group Classes' },
  { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80', label: 'Training Floor' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80', label: 'Free Weights' },
  { src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80', label: 'CrossFit Area' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80', label: 'Members Training' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', label: 'Equipment' },
];

const reviews: Review[] = [
  {
    id: 'r1', name: 'Rahul Tiwari', avatar: 'RT', rating: 5,
    text: "Best gym in the city, hands down. The trainers are incredible and the equipment is always clean and maintained. I've seen more results in 3 months here than 2 years anywhere else.",
    program: 'Strength Training', since: 'Member since 2023'
  },
  {
    id: 'r2', name: 'Aditya Joshi', avatar: 'AJ', rating: 5,
    text: "Forge is the real deal. The atmosphere is electric, the trainers know their craft, and the diet plans they gave me completely transformed how I eat. I lost 18kg in 5 months.",
    program: 'Weight Loss Program', since: 'Member since 2022'
  },
  {
    id: 'r3', name: 'Kavya Reddy', avatar: 'KR', rating: 5,
    text: "As someone who was gym-shy, Forge made me feel completely welcome. The nutrition guidance is exceptional and the results speak for themselves — I'm stronger than I've ever been.",
    program: 'Personal Training', since: 'Member since 2024'
  },
  {
    id: 'r4', name: 'Siddharth Patel', avatar: 'SP', rating: 5,
    text: "Membership here is genuinely worth every rupee. World-class trainers, premium supplements, 24/7 access. The transformation wall is real — I'm on it now.",
    program: 'Muscle Building', since: 'Member since 2023'
  }
];

// ─── COUNTER ANIMATION HOOK ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, startWhenVisible = true) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startWhenVisible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return { count, ref };
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export const ForgeFitness: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const trainers70 = useCountUp(70, 1800);
  const members13k = useCountUp(13000, 2200);
  const years15 = useCountUp(15, 1500);
  const satisfaction98 = useCountUp(98, 1800);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => setActiveReview(p => (p + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const openWhatsApp = (message = 'Hi! I'm interested in joining FORGE FITNESS CLUB. Please share details.') => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const navLinks = [
    { label: 'Programs', id: 'programs' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Plans', id: 'pricing' },
    { label: 'Nutrition', id: 'nutrition' },
    { label: 'Results', id: 'results' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white font-sans min-h-screen overflow-x-hidden">

      {/* ── FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,900&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-forge { font-family: 'Barlow Condensed', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        @keyframes float-card { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-neon { 0%,100%{box-shadow:0 0 10px #D4FF0060} 50%{box-shadow:0 0 30px #D4FF00aa, 0 0 60px #D4FF0040} }
        @keyframes slide-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glow-text { 0%,100%{text-shadow:0 0 20px #D4FF0060} 50%{text-shadow:0 0 40px #D4FF00cc, 0 0 80px #D4FF0040} }
        @keyframes scan-line { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        .float-card { animation: float-card 4s ease-in-out infinite; }
        .pulse-neon { animation: pulse-neon 2.5s ease-in-out infinite; }
        .slide-up { animation: slide-up 0.7s ease forwards; }
        .glow-text { animation: glow-text 3s ease-in-out infinite; }
        .neon-border { border: 1px solid #D4FF0030; }
        .neon-border-strong { border: 2px solid #D4FF00; }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); border-color: #D4FF0060; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .bg-forge-card { background: linear-gradient(135deg, #161616 0%, #121212 100%); }
        .hero-text-shadow { text-shadow: 0 2px 40px rgba(0,0,0,0.8); }
        .neon-glow-btn { box-shadow: 0 0 20px #D4FF0040, 0 4px 15px rgba(0,0,0,0.5); }
        .trainer-card:hover .trainer-overlay { opacity: 1; }
        .trainer-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .scan-shimmer::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg, transparent, rgba(212,255,0,0.06), transparent); animation:scan-line 3s infinite; }
      `}</style>

      {/* ─────────────────────────────────────────────────
          NAVIGATION
      ───────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4FF00]/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-[#D4FF00] rounded-sm flex items-center justify-center">
              <Dumbbell size={20} className="text-[#0A0A0A]" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-forge text-white text-xl font-bold leading-none tracking-wider">FORGE</div>
              <div className="text-[#D4FF00] text-[8px] font-bold tracking-[0.35em] uppercase leading-none">FITNESS CLUB</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#888] hover:text-[#D4FF00] text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => openWhatsApp()}
              className="px-5 py-2.5 bg-[#D4FF00] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8F500] transition-colors neon-glow-btn"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : (
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-4 h-0.5 bg-[#D4FF00]" />
                <div className="w-6 h-0.5 bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-[#D4FF00]/20 py-6 px-6 space-y-4">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white hover:text-[#D4FF00] font-bold uppercase tracking-wider py-2 border-b border-[#1A1A1A]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => openWhatsApp()}
              className="w-full py-3 bg-[#D4FF00] text-[#0A0A0A] font-bold uppercase tracking-wider rounded-sm mt-4"
            >
              Book Free Trial
            </button>
          </div>
        )}
      </nav>

      {/* ─────────────────────────────────────────────────
          SECTION 1 — HERO (100vh)
      ───────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Dark BG with subtle gym texture */}
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=60')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-[#0A0A0A]" />
        </div>

        {/* Neon diagonal accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[2px] h-[60%] bg-gradient-to-b from-[#D4FF00]/0 via-[#D4FF00]/30 to-[#D4FF00]/0 rotate-12 transform-gpu" />
          <div className="absolute top-[20%] right-1/4 w-[1px] h-[40%] bg-gradient-to-b from-[#D4FF00]/0 via-[#D4FF00]/15 to-[#D4FF00]/0 rotate-12 transform-gpu" />
          <div className="absolute bottom-0 left-1/3 w-[2px] h-[40%] bg-gradient-to-t from-[#D4FF00]/0 via-[#D4FF00]/20 to-[#D4FF00]/0 -rotate-6 transform-gpu" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-28 pb-32 lg:pt-24 lg:pb-20 min-h-screen">

          {/* LEFT — Typography */}
          <div className="lg:col-span-4 z-20 space-y-6 order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="font-body text-[#D4FF00] text-xs font-bold uppercase tracking-[0.3em]">Premium Fitness Club</span>
            </div>

            {/* Main headline */}
            <div className="space-y-0">
              <h1 className="font-forge text-[80px] sm:text-[100px] lg:text-[110px] xl:text-[120px] leading-[0.88] font-black uppercase text-white hero-text-shadow">
                NO<br />PAIN.
              </h1>
              <h2 className="font-forge text-[80px] sm:text-[100px] lg:text-[110px] xl:text-[120px] leading-[0.88] font-black uppercase text-[#D4FF00] hero-text-shadow glow-text">
                NO<br />GAIN.
              </h2>
            </div>

            {/* Tagline */}
            <p className="font-body text-[#999] text-sm md:text-base leading-relaxed max-w-xs">
              Transform your body. Elevate your lifestyle.<br />
              Join the strongest fitness community in town.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openWhatsApp('Hi! I want to book a FREE trial at FORGE FITNESS CLUB.')}
                className="px-7 py-3.5 bg-[#D4FF00] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8F500] transition-all neon-glow-btn flex items-center justify-center space-x-2"
              >
                <span>Join Free Trial</span>
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="px-7 py-3.5 bg-transparent text-white font-bold text-sm uppercase tracking-wider rounded-sm border border-white/20 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Programs</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Quick feature strip */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
              {['Strength Training', 'Fat Loss Program', 'Nutrition Coaching'].map(f => (
                <div key={f} className="flex items-center space-x-1.5 text-[#666] text-[11px] font-semibold uppercase tracking-wider">
                  <Zap size={10} className="text-[#D4FF00]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER — Bodybuilder Hero Image */}
          <div className="lg:col-span-5 relative flex items-end justify-center order-1 lg:order-2 z-20 min-h-[50vh] lg:min-h-[85vh]">
            {/* Glow circle behind */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#D4FF00]/8 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-[#D4FF00]/15 blur-[40px] pointer-events-none" />

            {/* Bodybuilder image — breaks layout boundaries */}
            <img
              src="https://images.unsplash.com/photo-1534368786749-b63e05c92717?auto=format&fit=crop&w=800&q=85"
              alt="Elite Bodybuilder at Forge Fitness Club"
              className="relative z-10 w-full max-w-[380px] lg:max-w-[460px] h-auto object-cover object-top"
              style={{ filter: 'contrast(1.1) brightness(0.95)' }}
            />

            {/* Floating metric badge — top left */}
            <div className="absolute top-16 -left-4 lg:-left-8 bg-[#161616] border border-[#D4FF00]/30 rounded-xl p-3 shadow-2xl z-30 float-card">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4FF00]/10 flex items-center justify-center">
                  <Flame size={16} className="text-[#D4FF00]" />
                </div>
                <div>
                  <div className="text-[#D4FF00] text-xs font-bold">1,250 kcal</div>
                  <div className="text-[#555] text-[10px]">Calories Burned</div>
                </div>
              </div>
            </div>

            {/* Floating metric badge — right */}
            <div className="absolute top-1/3 -right-4 lg:-right-8 bg-[#161616] border border-[#D4FF00]/30 rounded-xl p-3 shadow-2xl z-30" style={{ animation: 'float-card 5s ease-in-out infinite 1s' }}>
              <div className="text-[#555] text-[9px] uppercase tracking-wider mb-1">Heart Rate</div>
              <div className="flex items-center space-x-1">
                <div className="text-[#D4FF00] text-lg font-bold font-forge leading-none">128</div>
                <div className="text-[#555] text-[10px]">bpm</div>
              </div>
              {/* Mini line chart */}
              <svg width="60" height="20" viewBox="0 0 60 20" className="mt-1">
                <polyline points="0,15 10,8 20,12 30,4 40,9 50,2 60,7" fill="none" stroke="#D4FF00" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Workout Streak badge */}
            <div className="absolute bottom-12 -right-4 lg:-right-8 bg-[#D4FF00] rounded-xl p-3 shadow-2xl z-30" style={{ animation: 'float-card 4.5s ease-in-out infinite 2s' }}>
              <div className="text-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider mb-0.5">🔥 Streak</div>
              <div className="text-[#0A0A0A] text-xl font-black font-forge leading-none">12 Days</div>
              <div className="text-[#0A0A0A]/60 text-[9px]">Keep it up!</div>
            </div>
          </div>

          {/* RIGHT — Nutrition Floating Card */}
          <div className="lg:col-span-3 z-20 order-3 flex flex-col space-y-4 items-start lg:items-start">
            {/* Nutrition Card */}
            <div className="w-full max-w-[240px] bg-[#141414] border border-[#D4FF00]/20 rounded-2xl p-5 shadow-2xl float-card">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#D4FF00]/10 flex items-center justify-center">
                  <span className="text-base">🥗</span>
                </div>
                <div>
                  <div className="text-white text-xs font-bold">Healthy Diet Plan</div>
                  <div className="text-[#555] text-[10px]">Customized Nutrition</div>
                </div>
              </div>

              {/* Macro bars */}
              <div className="space-y-2.5">
                {[
                  { label: 'Protein', value: 78, unit: '185g', color: '#D4FF00' },
                  { label: 'Carbs', value: 55, unit: '290g', color: '#888' },
                  { label: 'Fats', value: 40, unit: '65g', color: '#555' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-[#888]">{m.label}</span>
                      <span className="text-[#D4FF00] font-bold">{m.unit}</span>
                    </div>
                    <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${m.value}%`, background: m.color }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#222] flex items-center justify-between">
                <span className="text-[#555] text-[10px] uppercase tracking-wider">Protein Guidance</span>
                <span className="text-[#D4FF00] text-[10px] font-bold">✓ Optimized</span>
              </div>
            </div>

            {/* Progress ring card */}
            <div className="w-full max-w-[240px] bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4 shadow-xl">
              <div className="text-[#888] text-[10px] uppercase tracking-wider mb-3">Weekly Goal</div>
              <div className="flex items-center space-x-3">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="#1E1E1E" strokeWidth="4" />
                  <circle cx="24" cy="24" r="20" fill="none" stroke="#D4FF00" strokeWidth="4"
                    strokeDasharray="125.6" strokeDashoffset="32" strokeLinecap="round"
                    transform="rotate(-90 24 24)" />
                  <text x="24" y="28" textAnchor="middle" fill="#D4FF00" fontSize="11" fontWeight="bold">75%</text>
                </svg>
                <div>
                  <div className="text-white text-sm font-bold">4/5 Sessions</div>
                  <div className="text-[#555] text-[10px]">Completed this week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── HERO BOTTOM — Stats + Glass CTA ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Stats Row */}
          <div
            className="max-w-7xl mx-auto px-6 md:px-10"
            ref={trainers70.ref}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { refData: trainers70, suffix: '+', label: 'Certified Trainers' },
                { refData: members13k, suffix: '+', label: 'Active Members' },
                { refData: years15, suffix: '+', label: 'Years Experience' },
                { refData: satisfaction98, suffix: '%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#111]/80 backdrop-blur border border-[#D4FF00]/10 rounded-xl p-4 text-center"
                >
                  <div className="font-forge text-3xl sm:text-4xl font-black text-[#D4FF00] leading-none">
                    {stat.refData.count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-[#666] text-[11px] font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Glass Card CTA */}
            <div className="w-full max-w-xl mx-auto mb-8">
              <div className="bg-[#D4FF00]/5 backdrop-blur-md border border-[#D4FF00]/20 rounded-2xl p-5 text-center pulse-neon">
                <div className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Start Your Journey</div>
                <p className="text-white/70 text-sm">Take the first step towards a stronger version of yourself.</p>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="mt-3 inline-flex items-center space-x-1.5 text-[#D4FF00] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors"
                >
                  <ArrowDown size={14} className="animate-bounce" />
                  <span>Discover Programs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 2 — WHY CHOOSE FORGE
      ───────────────────────────────────────────────── */}
      <section id="why-forge" className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Why Join Us</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">WHY CHOOSE FORGE</h2>
            <p className="text-[#666] text-sm max-w-lg mx-auto">We don't just offer a gym. We offer a complete transformation ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={28} />, title: 'Certified Trainers', desc: 'All our coaches hold NSCA, ACE, or international certifications with 5+ years of proven results.' },
              { icon: <Dumbbell size={28} />, title: 'Modern Equipment', desc: 'State-of-the-art strength, cardio, and recovery equipment. Over ₹2 crore in premium machinery.' },
              { icon: <Target size={28} />, title: 'Customized Diet Plans', desc: 'Personalized macros and meal timing designed by in-house sports nutritionists for your body type.' },
              { icon: <Shield size={28} />, title: 'Flexible Memberships', desc: 'Monthly, quarterly, or annual plans with family add-ons, corporate packages, and 3-day free trials.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-forge-card neon-border rounded-2xl p-7 card-hover cursor-default group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/0 to-[#D4FF00]/0 group-hover:from-[#D4FF00]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="w-12 h-12 rounded-xl bg-[#D4FF00]/10 group-hover:bg-[#D4FF00]/20 transition-colors flex items-center justify-center text-[#D4FF00] mb-5">
                  {item.icon}
                </div>
                <h3 className="font-forge text-xl font-bold text-white uppercase mb-2 group-hover:text-[#D4FF00] transition-colors">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>

                <div className="mt-4 w-8 h-[2px] bg-[#D4FF00]/30 group-hover:bg-[#D4FF00] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 3 — PROGRAMS
      ───────────────────────────────────────────────── */}
      <section id="programs" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#D4FF00]" />
                <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Our Programs</span>
              </div>
              <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Train With Purpose</h2>
            </div>
            <p className="text-[#666] text-sm max-w-xs">6 scientifically backed programs designed for every fitness goal.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#111] neon-border rounded-2xl overflow-hidden card-hover cursor-default group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3 bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {prog.tag}
                  </div>

                  {/* Icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 bg-[#0A0A0A]/80 backdrop-blur rounded-lg flex items-center justify-center text-[#D4FF00]">
                    {prog.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-forge text-2xl font-bold text-white uppercase group-hover:text-[#D4FF00] transition-colors">{prog.name}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{prog.description}</p>

                  <div className="flex items-center space-x-4 pt-1">
                    <div className="flex items-center space-x-1.5 text-[#555] text-[11px]">
                      <Clock size={12} className="text-[#D4FF00]" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[#555] text-[11px]">
                      <BarChart2 size={12} className="text-[#D4FF00]" />
                      <span>{prog.sessions}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openWhatsApp(`Hi! I'm interested in the ${prog.name} program at FORGE FITNESS CLUB.`)}
                    className="mt-2 w-full py-2.5 border border-[#D4FF00]/30 text-[#D4FF00] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#D4FF00] hover:text-[#0A0A0A] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Explore Program</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 4 — TRAINER SPOTLIGHT
      ───────────────────────────────────────────────── */}
      <section id="trainers" className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Meet The Team</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Trainer Spotlight</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map(trainer => (
              <div key={trainer.id} className="relative group cursor-default overflow-hidden rounded-2xl trainer-card">
                {/* Image */}
                <div className="relative h-80 bg-[#111]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

                  {/* Success Rate Badge */}
                  <div className="absolute top-3 right-3 bg-[#D4FF00] text-[#0A0A0A] rounded-lg px-2.5 py-1.5 text-center">
                    <div className="font-forge text-lg font-black leading-none">{trainer.successRate}</div>
                    <div className="text-[8px] font-bold uppercase tracking-wide leading-none">Success</div>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                  <div className="font-forge text-xl font-bold text-white">{trainer.name}</div>
                  <div className="text-[#D4FF00] text-xs font-semibold uppercase tracking-wider">{trainer.role}</div>
                  <div className="text-[#666] text-[11px] mt-1">{trainer.experience} Experience</div>
                </div>

                {/* Hover overlay — specialties */}
                <div className="trainer-overlay absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center rounded-2xl">
                  <div className="font-forge text-2xl font-bold text-[#D4FF00] mb-1">{trainer.name}</div>
                  <div className="text-white text-xs font-semibold uppercase tracking-wider mb-4">{trainer.role}</div>
                  <div className="space-y-1.5">
                    {trainer.specialties.map(s => (
                      <div key={s} className="flex items-center space-x-2 text-[#999] text-xs">
                        <Check size={12} className="text-[#D4FF00]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-[#D4FF00] text-[#0A0A0A] px-5 py-2 rounded-sm font-bold text-xs uppercase tracking-wider">
                    {trainer.successRate} Success Rate
                  </div>
                  <button
                    onClick={() => openWhatsApp(`Hi! I'd like to book a session with ${trainer.name} at FORGE FITNESS CLUB.`)}
                    className="mt-2 border border-[#D4FF00]/40 text-[#D4FF00] px-5 py-2 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-[#D4FF00]/10 transition-colors"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 5 — TRANSFORMATION STORIES
      ───────────────────────────────────────────────── */}
      <section id="results" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#D4FF00]" />
                <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Real People. Real Results.</span>
              </div>
              <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Transformation<br />Stories</h2>
            </div>
            {/* Story selector dots */}
            <div className="flex items-center space-x-2">
              {transformStories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStory(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeStory ? 'w-8 h-2 bg-[#D4FF00]' : 'w-2 h-2 bg-[#333]'}`}
                />
              ))}
            </div>
          </div>

          {/* Active story */}
          {transformStories.map((story, i) => i === activeStory && (
            <div key={story.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Before / After images */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'BEFORE', src: story.beforeImage },
                  { label: 'AFTER', src: story.afterImage }
                ].map(img => (
                  <div key={img.label} className="relative rounded-xl overflow-hidden aspect-[3/4]">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                    <div className={`absolute top-3 left-3 text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-sm ${img.label === 'AFTER' ? 'bg-[#D4FF00] text-[#0A0A0A]' : 'bg-[#333] text-white'}`}>
                      {img.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Story details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="font-forge text-4xl font-black text-white uppercase">{story.name}</div>
                  <div className="text-[#D4FF00] font-semibold text-sm mt-1">{story.duration} Transformation</div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {story.weightLost && (
                    <div className="bg-[#161616] neon-border rounded-xl p-4 text-center">
                      <div className="font-forge text-3xl font-black text-[#D4FF00]">-{story.weightLost}</div>
                      <div className="text-[#555] text-[10px] uppercase tracking-wider mt-1">Weight Lost</div>
                    </div>
                  )}
                  {story.muscleGain && (
                    <div className="bg-[#161616] neon-border rounded-xl p-4 text-center">
                      <div className="font-forge text-3xl font-black text-[#D4FF00]">+{story.muscleGain}</div>
                      <div className="text-[#555] text-[10px] uppercase tracking-wider mt-1">Muscle Gain</div>
                    </div>
                  )}
                  {story.fatReduction && (
                    <div className="bg-[#161616] neon-border rounded-xl p-4 text-center">
                      <div className="font-forge text-3xl font-black text-[#D4FF00]">-{story.fatReduction}</div>
                      <div className="text-[#555] text-[10px] uppercase tracking-wider mt-1">Body Fat</div>
                    </div>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[#D4FF00] pl-5">
                  <p className="text-[#aaa] text-base italic leading-relaxed">"{story.quote}"</p>
                  <footer className="mt-2 text-[#D4FF00] font-bold text-sm">— {story.name}</footer>
                </blockquote>

                {/* Nav arrows */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setActiveStory(p => (p - 1 + transformStories.length) % transformStories.length)}
                    className="w-10 h-10 rounded-full border border-[#333] hover:border-[#D4FF00] flex items-center justify-center text-[#666] hover:text-[#D4FF00] transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setActiveStory(p => (p + 1) % transformStories.length)}
                    className="w-10 h-10 rounded-full border border-[#D4FF00] bg-[#D4FF00]/10 flex items-center justify-center text-[#D4FF00] hover:bg-[#D4FF00] hover:text-[#0A0A0A] transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <span className="text-[#555] text-xs">{activeStory + 1} / {transformStories.length}</span>
                </div>

                <button
                  onClick={() => openWhatsApp('Hi! I saw the transformation stories and want to start my own journey at FORGE FITNESS CLUB!')}
                  className="inline-flex items-center space-x-2 px-7 py-3 bg-[#D4FF00] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8F500] neon-glow-btn transition-all"
                >
                  <span>Start My Transformation</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 6 — MEMBERSHIP PLANS
      ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Choose Your Plan</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Membership Plans</h2>
            <p className="text-[#666] text-sm">Flexible options built around your goals and lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Monthly', period: '/month', price: 2499,
                features: ['Gym Access (All Hours)', 'Group Classes', 'Locker Room Access', 'Basic Nutrition Guide', 'Fitness Assessment'],
                featured: false
              },
              {
                name: 'Quarterly', period: '/3 months', price: 6499,
                features: ['All Monthly Benefits', 'Personal Training (2 Sessions)', 'Nutrition Consultation', 'Progress Tracking App', 'Guest Pass (2x)', 'Priority Booking'],
                featured: true
              },
              {
                name: 'Annual', period: '/year', price: 19999,
                features: ['All Quarterly Benefits', 'Personal Training (8 Sessions)', 'Monthly Body Composition', 'Priority Support Line', 'Diet Plan Updates', 'Free Supplements Kit', 'Family Add-on Discount'],
                featured: false
              }
            ].map(plan => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col ${plan.featured ? 'neon-border-strong bg-[#0F0F0F] scan-shimmer' : 'neon-border bg-[#111]'}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className={`font-forge text-xl font-bold uppercase mb-3 ${plan.featured ? 'text-[#D4FF00]' : 'text-[#888]'}`}>{plan.name}</div>
                  <div className="flex items-end space-x-1">
                    <div className="font-forge text-5xl font-black text-white leading-none">₹{plan.price.toLocaleString()}</div>
                    <div className="text-[#555] text-sm mb-1">{plan.period}</div>
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center space-x-2.5 text-sm">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-[#D4FF00]/20' : 'bg-[#222]'}`}>
                        <Check size={10} className={plan.featured ? 'text-[#D4FF00]' : 'text-[#555]'} />
                      </div>
                      <span className={plan.featured ? 'text-[#bbb]' : 'text-[#666]'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openWhatsApp(`Hi! I want to join FORGE FITNESS CLUB on the ${plan.name} Plan (₹${plan.price}).`)}
                  className={`w-full py-3.5 font-bold text-sm uppercase tracking-wider rounded-sm transition-all ${
                    plan.featured
                      ? 'bg-[#D4FF00] text-[#0A0A0A] hover:bg-[#C8F500] neon-glow-btn'
                      : 'border border-[#333] text-white hover:border-[#D4FF00] hover:text-[#D4FF00]'
                  }`}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 7 — NUTRITION & SUPPLEMENTS
      ───────────────────────────────────────────────── */}
      <section id="nutrition" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#D4FF00]" />
                <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Fuel Your Performance</span>
              </div>
              <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Nutrition &<br />Supplements</h2>
            </div>
            <div className="max-w-xs">
              <div className="bg-[#161616] border border-[#D4FF00]/20 rounded-xl px-4 py-3">
                <div className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-wider mb-1">Available At Our Gym</div>
                <p className="text-[#555] text-xs">All products sold and verified by our certified nutritionists. Ask in store for personalized guidance.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-[#111] neon-border rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-48 bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#D4FF00]/10 border border-[#D4FF00]/20 text-[#D4FF00] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm backdrop-blur">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-forge text-xl font-bold text-white uppercase">{product.name}</h3>
                  <p className="text-[#555] text-xs leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="font-forge text-2xl font-black text-[#D4FF00]">₹{product.price.toLocaleString()}</div>
                    <button
                      onClick={() => openWhatsApp(`Hi! I'm interested in ${product.name} from FORGE FITNESS CLUB. Can you share details?`)}
                      className="flex items-center space-x-1.5 border border-[#D4FF00]/40 text-[#D4FF00] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm hover:bg-[#D4FF00] hover:text-[#0A0A0A] transition-all"
                    >
                      <MessageCircle size={12} />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 8 — GYM GALLERY
      ───────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Inside The Club</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Gym Gallery</h2>
          </div>

          {/* Masonry-style gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img.src)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${i === 0 || i === 5 ? 'md:row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 || i === 5 ? '3/4' : '1/1' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm inline-block">
                    {img.label}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-[#D4FF00]/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Play size={16} className="text-[#D4FF00]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-[#D4FF00] transition-colors">
              <X size={28} />
            </button>
            <img
              src={lightboxImg}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 9 — MEMBER REVIEWS
      ───────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Community Speaks</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Member Reviews</h2>
          </div>

          {/* Review carousel */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-[#111] neon-border rounded-2xl p-8 min-h-[240px]">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#D4FF00] fill-[#D4FF00]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#bbb] text-base leading-relaxed mb-6 italic">
                "{reviews[activeReview].text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4FF00] flex items-center justify-center font-bold text-[#0A0A0A] text-sm font-forge">
                    {reviews[activeReview].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{reviews[activeReview].name}</div>
                    <div className="text-[#555] text-[11px]">{reviews[activeReview].program} • {reviews[activeReview].since}</div>
                  </div>
                </div>

                {/* Nav */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveReview(p => (p - 1 + reviews.length) % reviews.length)}
                    className="w-8 h-8 rounded-full border border-[#333] hover:border-[#D4FF00] flex items-center justify-center text-[#666] hover:text-[#D4FF00] transition-all"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={() => setActiveReview(p => (p + 1) % reviews.length)}
                    className="w-8 h-8 rounded-full bg-[#D4FF00] flex items-center justify-center text-[#0A0A0A] hover:bg-[#C8F500] transition-all"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeReview ? 'w-6 h-1.5 bg-[#D4FF00]' : 'w-1.5 h-1.5 bg-[#333]'}`}
                />
              ))}
            </div>
          </div>

          {/* Review grid (desktop) */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mt-10">
            {reviews.map((r, i) => (
              <div
                key={r.id}
                onClick={() => setActiveReview(i)}
                className={`bg-[#111] rounded-xl p-4 cursor-pointer transition-all border ${i === activeReview ? 'border-[#D4FF00]/50' : 'border-[#1A1A1A] hover:border-[#D4FF00]/20'}`}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#D4FF00] flex items-center justify-center font-bold text-[#0A0A0A] text-[10px] font-forge">{r.avatar}</div>
                  <div>
                    <div className="text-white text-xs font-bold">{r.name}</div>
                    <div className="text-[#555] text-[9px]">{r.program}</div>
                  </div>
                </div>
                <div className="flex space-x-0.5 mb-2">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={10} className="text-[#D4FF00] fill-[#D4FF00]" />)}
                </div>
                <p className="text-[#555] text-[11px] leading-relaxed line-clamp-2">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 10 — FREE TRIAL CTA
      ───────────────────────────────────────────────── */}
      <section id="cta" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
        {/* Background gym image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=70"
            alt="Forge Fitness CTA"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/70" />
        </div>

        {/* Neon glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#D4FF00]/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center space-y-8 z-10">
          <div>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Your Time is Now</span>
              <div className="w-12 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-none glow-text">
              READY TO<br />
              <span className="text-[#D4FF00]">TRANSFORM?</span>
            </h2>
            <p className="mt-4 text-[#666] text-base max-w-lg mx-auto">
              Start your fitness journey today. Your future self will thank you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp('Hi! I want to BOOK A FREE TRIAL at FORGE FITNESS CLUB.')}
              className="px-10 py-4 bg-[#D4FF00] text-[#0A0A0A] font-black text-base uppercase tracking-wider rounded-sm hover:bg-[#C8F500] transition-all neon-glow-btn flex items-center justify-center space-x-2"
            >
              <span>BOOK FREE TRIAL</span>
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => openWhatsApp()}
              className="px-10 py-4 border-2 border-[#D4FF00]/40 text-white font-black text-base uppercase tracking-wider rounded-sm hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} className="text-[#D4FF00]" />
              <span>CHAT ON WHATSAPP</span>
            </button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            {['No Registration Fee', '3-Day Free Trial', 'Cancel Anytime', 'Expert Guidance Included'].map(t => (
              <div key={t} className="flex items-center space-x-1.5 text-[#555] text-xs">
                <Check size={12} className="text-[#D4FF00]" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          SECTION 11 — CONTACT & LOCATION
      ───────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Find Us</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Contact & Location</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#1E1E1E] min-h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121026!2d77.04259731508397!3d28.502436982459673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1623000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ minHeight: '380px', border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen
                loading="lazy"
                title="Forge Fitness Club Location"
              />
            </div>

            {/* Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#111] neon-border rounded-2xl p-6 space-y-5">
                <h3 className="font-forge text-2xl font-bold text-white uppercase">Gym Details</h3>

                {[
                  { icon: <MapPin size={16} className="text-[#D4FF00]" />, label: 'Address', value: 'Forge Tower, Sector 18, Gurugram, Haryana 122001' },
                  { icon: <Phone size={16} className="text-[#D4FF00]" />, label: 'Phone', value: '+91 98765 43210' },
                  { icon: <Mail size={16} className="text-[#D4FF00]" />, label: 'Email', value: 'info@forgefitnessclub.in' },
                ].map(detail => (
                  <div key={detail.label} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#D4FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-[#555] text-[10px] uppercase tracking-wider mb-0.5">{detail.label}</div>
                      <div className="text-white text-sm">{detail.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-[#111] neon-border rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock size={16} className="text-[#D4FF00]" />
                  <h3 className="font-forge text-xl font-bold text-white uppercase">Opening Hours</h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    { day: 'Monday – Friday', hours: '5:00 AM – 11:00 PM', status: 'Open' },
                    { day: 'Saturday', hours: '6:00 AM – 10:00 PM', status: 'Open' },
                    { day: 'Sunday', hours: '7:00 AM – 8:00 PM', status: 'Special Hours' },
                  ].map(h => (
                    <div key={h.day} className="flex items-center justify-between">
                      <span className="text-[#888] text-sm">{h.day}</span>
                      <div className="text-right">
                        <div className="text-white text-sm font-semibold">{h.hours}</div>
                        <div className="text-[#D4FF00] text-[10px]">{h.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────────── */}
      <footer className="bg-[#060606] border-t border-[#161616] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 bg-[#D4FF00] rounded-sm flex items-center justify-center">
                <Dumbbell size={18} className="text-[#0A0A0A]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-forge text-white text-lg font-bold leading-none">FORGE FITNESS CLUB</div>
                <div className="text-[#D4FF00] text-[8px] tracking-[0.3em] uppercase leading-none">Forge Your Legacy</div>
              </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#555] hover:text-[#D4FF00] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center space-x-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <div key={i} className="w-8 h-8 bg-[#161616] border border-[#222] rounded-full flex items-center justify-center text-[#555] hover:text-[#D4FF00] hover:border-[#D4FF00]/40 cursor-pointer transition-all">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#161616] flex flex-col md:flex-row items-center justify-between gap-3 text-[#333] text-[11px]">
            <span>© 2025 Forge Fitness Club. All rights reserved.</span>
            <span className="flex items-center space-x-1.5">
              <span>Showcase by</span>
              <Link to="/" className="text-[#D4FF00] hover:text-white transition-colors font-semibold">LETSGO Business Solutions</Link>
            </span>
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────
          FLOATING ELEMENTS
      ───────────────────────────────────────────────── */}
      {/* WhatsApp Float Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </button>

      {/* Sticky Trial Button */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <button
          onClick={() => openWhatsApp('Hi! I want to book a FREE trial at FORGE FITNESS CLUB.')}
          className="px-5 py-3 bg-[#D4FF00] text-[#0A0A0A] font-black text-xs uppercase tracking-wider rounded-full shadow-xl hover:bg-[#C8F500] neon-glow-btn transition-all"
        >
          🏋️ Join Free Trial
        </button>
      </div>
    </div>
  );
};

export default ForgeFitness;
