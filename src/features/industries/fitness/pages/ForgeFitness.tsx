import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell, Zap, Users, Trophy, Star, ChevronRight, ChevronLeft,
  Clock, MapPin, Phone, Mail, MessageCircle, Play, Check,
  Flame, Target, TrendingUp, Shield, X, Instagram, Facebook,
  Youtube, ArrowDown, Award, BarChart2, Activity
} from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface ExperienceZone {
  id: string;
  name: string;
  description: string;
  image: string;
}

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

interface Transformation {
  id: string;
  name: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  weightChange: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
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

const experienceZones: ExperienceZone[] = [
  {
    id: 'strength',
    name: 'Strength Zone',
    description: 'Over 10,000 sq ft of free weights, squat racks, and premium plate-loaded machines.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cardio',
    name: 'Cardio Arena',
    description: 'State-of-the-art treadmills, ellipticals, and rowers with immersive screens.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'functional',
    name: 'Functional Training Area',
    description: 'Turf lanes, sleds, kettlebells, and rig for athletic conditioning.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'group',
    name: 'Group Workout Studio',
    description: 'High-energy space for HIIT, spin, yoga, and combat classes.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'coaching',
    name: 'Personal Coaching Zone',
    description: 'Exclusive private area for 1-on-1 sessions and technique perfection.',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1200&q=80'
  }
];

const programs: Program[] = [
  {
    id: 'strength',
    name: 'Strength Training',
    description: 'Build raw power and functional strength with progressive overload techniques used by elite athletes.',
    duration: '60 min/session',
    sessions: '4x per week',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    tag: 'Most Popular',
    icon: <Dumbbell size={20} />
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss Program',
    description: 'Scientifically designed HIIT circuits and metabolic conditioning to maximize fat burn in minimum time.',
    duration: '45 min/session',
    sessions: '5x per week',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
    icon: <Target size={20} />
  },
  {
    id: 'cross',
    name: 'Cross Training',
    description: 'High-intensity varied workouts combining gymnastic, cardio, and weightlifting for total body conditioning.',
    duration: '60 min/session',
    sessions: '4x per week',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tag: 'Intense',
    icon: <Zap size={20} />
  },
  {
    id: 'personal',
    name: 'Personal Training',
    description: 'Exclusive 1-on-1 coaching tailored 100% to your goals, schedule, and body type with certified experts.',
    duration: '60 min/session',
    sessions: 'Flexible',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    tag: 'Exclusive',
    icon: <Shield size={20} />
  }
];

const transformations: Transformation[] = [
  {
    id: 'ts1',
    name: 'Aman Sharma',
    duration: '4 Months',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80',
    weightChange: '92kg → 74kg'
  },
  {
    id: 'ts2',
    name: 'Simran Kaur',
    duration: '5 Months',
    beforeImage: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80',
    weightChange: '85kg → 68kg'
  },
  {
    id: 'ts3',
    name: 'Vikram Nair',
    duration: '6 Months',
    beforeImage: 'https://images.unsplash.com/photo-1571732154690-f6d1c4fbd4ab?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=400&q=80',
    weightChange: 'Muscle +8kg'
  },
  {
    id: 'ts4',
    name: 'Pooja Reddy',
    duration: '3 Months',
    beforeImage: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80',
    weightChange: '78kg → 65kg'
  },
  {
    id: 'ts5',
    name: 'Rahul Tiwari',
    duration: '8 Months',
    beforeImage: 'https://images.unsplash.com/photo-1537233634024-e8dafb4eb053?auto=format&fit=crop&w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80',
    weightChange: 'Fat -18%'
  }
];

const products: Product[] = [
  {
    id: 'wp1', name: 'Whey Protein', category: 'Protein',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80',
    description: '25g protein per scoop. Zero artificial fillers. Chocolate Fudge & Vanilla Bean.'
  },
  {
    id: 'mg1', name: 'Mass Gainer', category: 'Gainer',
    image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=400&q=80',
    description: '1250 kcal per serving. Clean complex carbs and 55g protein. Ideal for hardgainers.'
  },
  {
    id: 'pw1', name: 'Pre Workout', category: 'Pre-Workout',
    image: 'https://images.unsplash.com/photo-1579722820903-47d2a2b00271?auto=format&fit=crop&w=400&q=80',
    description: 'Explosive energy, razor-sharp focus, no crash. 200mg natural caffeine.'
  },
  {
    id: 'bc1', name: 'BCAA', category: 'Recovery',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=400&q=80',
    description: '2:1:1 ratio BCAA blend with electrolytes for muscle repair and hydration.'
  },
  {
    id: 'sh1', name: 'Shaker Bottles', category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?auto=format&fit=crop&w=400&q=80',
    description: 'BPA-free 700ml shaker with leak-proof lid and measurement markings.'
  },
  {
    id: 'ga1', name: 'Gym Accessories', category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1566241832378-917a0f30db2c?auto=format&fit=crop&w=400&q=80',
    description: 'Lifting belts, wrist wraps, and anti-slip gloves for heavy lifts.'
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
    text: "Best gym in the city, hands down. The equipment is always clean and maintained. I've seen more results in 3 months here than 2 years anywhere else.",
    program: 'Strength Training', since: 'Member since 2023'
  },
  {
    id: 'r2', name: 'Aditya Joshi', avatar: 'AJ', rating: 5,
    text: "Forge is the real deal. The atmosphere is electric, the coaching is unmatched, and the diet plans completely transformed how I eat. I lost 18kg in 5 months.",
    program: 'Weight Loss Program', since: 'Member since 2022'
  },
  {
    id: 'r3', name: 'Kavya Reddy', avatar: 'KR', rating: 5,
    text: "As someone who was gym-shy, Forge made me feel completely welcome. The nutrition guidance is exceptional and the results speak for themselves.",
    program: 'Personal Training', since: 'Member since 2024'
  },
  {
    id: 'r4', name: 'Siddharth Patel', avatar: 'SP', rating: 5,
    text: "Membership here is genuinely worth every rupee. World-class facilities, premium supplements, 24/7 access. The transformation wall is real — I'm on it now.",
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
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Form states
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiResult, setBmiResult] = useState<{ value: string, category: string } | null>(null);

  const [trialName, setTrialName] = useState('');
  const [trialPhone, setTrialPhone] = useState('');
  const [trialGoal, setTrialGoal] = useState('');

  const members13k = useCountUp(13000, 2200);
  const trainers70 = useCountUp(70, 1800);
  const years15 = useCountUp(15, 1500);
  const retention95 = useCountUp(95, 1800);

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

  const openWhatsApp = (message = 'Hi! I\'m interested in joining FORGE FITNESS CLUB. Please share details.') => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bmiHeight || !bmiWeight) return;
    const heightInMeters = parseFloat(bmiHeight) / 100;
    const weightInKg = parseFloat(bmiWeight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) category = 'Normal';
    else if (bmi >= 25 && bmi < 29.9) category = 'Overweight';
    else category = 'Obese';
    
    setBmiResult({ value: bmi.toFixed(1), category });
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialName || !trialPhone) return;
    openWhatsApp(`Hi, I would like to book a free trial.\nName: ${trialName}\nPhone: ${trialPhone}\nGoal: ${trialGoal}`);
  };

  const navLinks = [
    { label: 'Experience', id: 'experience' },
    { label: 'Programs', id: 'programs' },
    { label: 'Transformations', id: 'transformations' },
    { label: 'Plans', id: 'pricing' },
    { label: 'Nutrition', id: 'nutrition' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white font-sans min-h-screen overflow-x-hidden">

      {/* ── FONTS & STYLES ── */}
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
        .neon-border-strong { border: 2px solid #D4FF00; box-shadow: 0 0 20px rgba(212,255,0,0.1); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); border-color: #D4FF0060; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .bg-forge-card { background: linear-gradient(135deg, #161616 0%, #121212 100%); }
        .hero-text-shadow { text-shadow: 0 2px 40px rgba(0,0,0,0.8); }
        .neon-glow-btn { box-shadow: 0 0 20px #D4FF0040, 0 4px 15px rgba(0,0,0,0.5); }
        .scan-shimmer::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg, transparent, rgba(212,255,0,0.06), transparent); animation:scan-line 3s infinite; }
        .zone-overlay { opacity: 0; transition: opacity 0.3s ease; }
        .zone-card:hover .zone-overlay { opacity: 1; }
      `}</style>

      {/* ─────────────────────────────────────────────────
          NAVIGATION
      ───────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-body ${
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
          <div className="hidden lg:flex items-center space-x-8">
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
              onClick={() => scrollToSection('book-trial')}
              className="px-5 py-2.5 bg-[#D4FF00] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8F500] transition-colors neon-glow-btn"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-[#D4FF00]/20 py-6 px-6 space-y-4 shadow-2xl">
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
              onClick={() => scrollToSection('book-trial')}
              className="w-full py-3 bg-[#D4FF00] text-[#0A0A0A] font-bold uppercase tracking-wider rounded-sm mt-4"
            >
              Book Free Trial
            </button>
          </div>
        )}
      </nav>

      {/* ─────────────────────────────────────────────────
          1. HERO (100vh)
      ───────────────────────────────────────────────── */}
      <section id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative pt-20">
            
            {/* LEFT — Typography */}
            <div className="z-20 space-y-6 lg:mt-0 relative">
              {/* Eyebrow */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#D4FF00]" />
                <span className="font-body text-[#D4FF00] text-xs font-bold uppercase tracking-[0.3em]">Premium Fitness Club</span>
              </div>

              {/* Main headline */}
              <div className="space-y-0 relative z-30">
                <h1 className="font-forge text-[70px] sm:text-[90px] lg:text-[110px] xl:text-[130px] leading-[0.85] font-black uppercase text-white hero-text-shadow mix-blend-difference">
                  NO<br />PAIN.
                </h1>
                <h2 className="font-forge text-[70px] sm:text-[90px] lg:text-[110px] xl:text-[130px] leading-[0.85] font-black uppercase text-[#D4FF00] hero-text-shadow glow-text mix-blend-difference">
                  NO<br />GAIN.
                </h2>
              </div>

              {/* Tagline */}
              <p className="font-body text-[#999] text-sm md:text-base leading-relaxed max-w-sm relative z-30 mix-blend-difference">
                Transform your body. Elevate your lifestyle.<br />
                Join the strongest fitness community in town.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 relative z-30 mix-blend-difference">
                <button
                  onClick={() => scrollToSection('book-trial')}
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
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 relative z-30 mix-blend-difference">
                {['Strength Training', 'Fat Loss Program', 'Nutrition Coaching'].map(f => (
                  <div key={f} className="flex items-center space-x-1.5 text-white/80 text-[11px] font-bold uppercase tracking-wider">
                    <Zap size={10} className="text-[#D4FF00]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER/RIGHT — Dominant Bodybuilder Image */}
            <div className="absolute bottom-0 right-0 w-[120%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[60%] h-[60%] sm:h-[70%] lg:h-[85%] flex items-end justify-end pointer-events-none z-10 translate-x-[10%] lg:translate-x-0">
              {/* Glow circle behind */}
              <div className="absolute bottom-10 right-[20%] w-[400px] h-[400px] rounded-full bg-[#D4FF00]/10 blur-[100px] pointer-events-none" />
              
              {/* Bodybuilder image — breaks layout boundaries */}
              <img
                src="https://images.unsplash.com/photo-1534368786749-b63e05c92717?auto=format&fit=crop&w=1200&q=90"
                alt="Elite Bodybuilder at Forge Fitness Club"
                className="w-full h-full object-contain object-right-bottom drop-shadow-2xl"
                style={{ filter: 'contrast(1.1) brightness(0.95)' }}
              />
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center animate-bounce cursor-pointer" onClick={() => scrollToSection('achievement-strip')}>
          <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-[#D4FF00]" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          2. ACHIEVEMENT STRIP
      ───────────────────────────────────────────────── */}
      <section id="achievement-strip" className="bg-[#050505] border-y border-[#D4FF00]/20 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10" ref={members13k.ref}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#222]">
            {[
              { refData: members13k, suffix: '+', label: 'Active Members' },
              { refData: trainers70, suffix: '+', label: 'Certified Trainers' },
              { refData: years15, suffix: '+', label: 'Years Excellence' },
              { refData: retention95, suffix: '%', label: 'Member Retention' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="font-forge text-4xl sm:text-5xl font-black text-[#D4FF00] leading-none mb-1">
                  {stat.refData.count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-[#888] text-[10px] sm:text-xs font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          3. WHY CHOOSE FORGE
      ───────────────────────────────────────────────── */}
      <section id="why-forge" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Why Join Us</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">WHY CHOOSE FORGE</h2>
            <p className="text-[#666] text-sm max-w-lg mx-auto">We don't just offer a gym. We offer a complete transformation ecosystem designed for your ultimate success.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={32} />, title: 'Certified Trainers', desc: 'All our coaches hold NSCA, ACE, or international certifications with 5+ years of proven results.' },
              { icon: <Dumbbell size={32} />, title: 'Modern Equipment', desc: 'State-of-the-art strength, cardio, and recovery equipment. Over ₹2 crore in premium machinery.' },
              { icon: <Target size={32} />, title: 'Customized Diet Plans', desc: 'Personalized macros and meal timing designed by in-house sports nutritionists for your body type.' },
              { icon: <Shield size={32} />, title: 'Flexible Memberships', desc: 'Monthly, quarterly, or annual plans with family add-ons, corporate packages, and 3-day free trials.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-forge-card neon-border rounded-2xl p-8 card-hover cursor-default group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/0 to-[#D4FF00]/5 transition-all duration-500 rounded-2xl" />

                <div className="w-16 h-16 rounded-xl bg-[#D4FF00]/10 group-hover:bg-[#D4FF00]/20 transition-colors flex items-center justify-center text-[#D4FF00] mb-6 border border-[#D4FF00]/20">
                  {item.icon}
                </div>
                <h3 className="font-forge text-2xl font-bold text-white uppercase mb-3 group-hover:text-[#D4FF00] transition-colors">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>

                <div className="mt-6 w-12 h-[2px] bg-[#D4FF00]/30 group-hover:bg-[#D4FF00] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          4. GYM EXPERIENCE ZONE (Replaces Trainers)
      ───────────────────────────────────────────────── */}
      <section id="experience" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#D4FF00]" />
                <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">World-Class Facilities</span>
              </div>
              <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Gym Experience Zones</h2>
            </div>
            <p className="text-[#666] text-sm max-w-sm">Immerse yourself in specialized zones designed for every training style, equipped with the best machinery in the industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceZones.map((zone, i) => (
              <div 
                key={zone.id} 
                className={`zone-card relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 || i === 1 ? 'lg:col-span-1.5' : ''}`}
                style={i === 0 ? { gridColumn: 'span 1 / span 2' } : {}}
              >
                <div className="relative h-72 w-full">
                  <img src={zone.image} alt={zone.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="font-forge text-3xl font-black text-white uppercase mb-2 group-hover:text-[#D4FF00] transition-colors">{zone.name}</h3>
                    <p className="text-[#ccc] text-sm leading-relaxed mb-4 line-clamp-2">{zone.description}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="zone-overlay absolute inset-0 bg-[#D4FF00]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-forge text-3xl font-black text-[#0A0A0A] uppercase mb-3">{zone.name}</h3>
                    <p className="text-[#0A0A0A]/80 text-sm font-semibold mb-6 max-w-xs">{zone.description}</p>
                    <button 
                      onClick={() => openWhatsApp(`Hi! I want to know more about the ${zone.name} at FORGE FITNESS CLUB.`)}
                      className="px-6 py-2.5 bg-[#0A0A0A] text-[#D4FF00] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#111] flex items-center space-x-2"
                    >
                      <span>Explore Experience</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          5. PROGRAMS
      ───────────────────────────────────────────────── */}
      <section id="programs" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Our Programs</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Train With Purpose</h2>
            <p className="text-[#666] text-sm max-w-lg mx-auto">6 scientifically backed programs designed for every fitness goal.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#111] neon-border rounded-2xl overflow-hidden card-hover cursor-default group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm">
                    {prog.tag}
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#0A0A0A]/80 backdrop-blur rounded-lg flex items-center justify-center text-[#D4FF00] border border-[#D4FF00]/20">
                    {prog.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-forge text-3xl font-bold text-white uppercase group-hover:text-[#D4FF00] transition-colors mb-3">{prog.name}</h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-6 flex-grow">{prog.description}</p>

                  <div className="flex items-center space-x-6 pt-4 border-t border-[#222] mb-6">
                    <div className="flex items-center space-x-2 text-[#aaa] text-xs font-semibold">
                      <Clock size={14} className="text-[#D4FF00]" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#aaa] text-xs font-semibold">
                      <BarChart2 size={14} className="text-[#D4FF00]" />
                      <span>{prog.sessions}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openWhatsApp(`Hi! I'm interested in the ${prog.name} program at FORGE FITNESS CLUB.`)}
                    className="w-full py-3.5 border border-[#D4FF00]/30 text-[#D4FF00] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#D4FF00] hover:text-[#0A0A0A] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Explore Program</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          6. BMI CALCULATOR
      ───────────────────────────────────────────────── */}
      <section id="bmi-calculator" className="py-24 relative overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=50" alt="Gym BG" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Know Your Body</span>
            </div>
            <h2 className="font-forge text-5xl sm:text-7xl font-black text-white uppercase leading-none">
              Calculate Your<br />
              <span className="text-[#D4FF00]">BMI Index</span>
            </h2>
            <p className="text-[#aaa] text-base leading-relaxed max-w-md">
              Body Mass Index (BMI) is a simple calculation using your height and weight. Find out your current baseline to set accurate fitness goals.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-[#D4FF00]/10 flex items-center justify-center">
                <Activity size={24} className="text-[#D4FF00]" />
              </div>
              <div>
                <div className="text-white font-bold uppercase tracking-wider text-sm">Instant Results</div>
                <div className="text-[#666] text-xs">No signup required</div>
              </div>
            </div>
          </div>

          {/* Right Form (Glassmorphism) */}
          <div className="w-full md:w-1/2 max-w-lg mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4FF00]/10 blur-[60px] rounded-full pointer-events-none" />
              
              <h3 className="font-forge text-3xl font-bold text-white mb-6">BMI Calculator</h3>
              
              <form onSubmit={calculateBMI} className="space-y-5 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[#aaa] text-xs uppercase font-bold tracking-wider">Height (cm)</label>
                    <input 
                      type="number" 
                      required
                      value={bmiHeight}
                      onChange={e => setBmiHeight(e.target.value)}
                      placeholder="e.g. 175"
                      className="w-full bg-[#0A0A0A]/50 border border-white/20 rounded-sm p-4 text-white focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] outline-none font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#aaa] text-xs uppercase font-bold tracking-wider">Weight (kg)</label>
                    <input 
                      type="number" 
                      required
                      value={bmiWeight}
                      onChange={e => setBmiWeight(e.target.value)}
                      placeholder="e.g. 70"
                      className="w-full bg-[#0A0A0A]/50 border border-white/20 rounded-sm p-4 text-white focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] outline-none font-body"
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#D4FF00] text-[#0A0A0A] font-black text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8F500] transition-all neon-glow-btn"
                >
                  Calculate Now
                </button>
              </form>

              {/* Result Area */}
              {bmiResult && (
                <div className="mt-6 p-5 bg-[#0A0A0A]/80 border border-[#D4FF00]/30 rounded-xl flex items-center justify-between slide-up relative z-10">
                  <div>
                    <div className="text-[#888] text-xs font-bold uppercase tracking-wider mb-1">Your BMI</div>
                    <div className="font-forge text-4xl font-black text-[#D4FF00]">{bmiResult.value}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#888] text-xs font-bold uppercase tracking-wider mb-1">Status</div>
                    <div className={`font-bold uppercase tracking-wider px-3 py-1 rounded-sm text-xs ${
                      bmiResult.category === 'Normal' ? 'bg-[#25D366]/20 text-[#25D366]' : 
                      bmiResult.category === 'Underweight' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {bmiResult.category}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          7. HALL OF TRANSFORMATIONS (Renamed & Upgraded)
      ───────────────────────────────────────────────── */}
      <section id="transformations" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Proven Results</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Hall of Transformations</h2>
            <p className="text-[#666] text-sm max-w-lg mx-auto">Real members. Real sweat. Real results. Join the wall of fame.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map(ts => (
              <div key={ts.id} className="bg-[#111] rounded-2xl overflow-hidden neon-border group">
                {/* Images */}
                <div className="flex h-64 relative">
                  <div className="w-1/2 relative">
                    <img src={ts.beforeImage} alt="Before" className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 text-[#888] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur">Before</div>
                  </div>
                  <div className="w-[2px] bg-[#D4FF00] z-10 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#D4FF00] border-2 border-[#111] flex items-center justify-center">
                      <ChevronRight size={14} className="text-[#0A0A0A]" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img src={ts.afterImage} alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-[#D4FF00] text-[#0A0A0A] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-lg">After</div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 relative">
                  <div className="absolute -top-6 right-6 bg-[#161616] border border-[#D4FF00]/30 px-4 py-2 rounded-xl shadow-xl flex items-center space-x-2">
                    <Flame size={16} className="text-[#D4FF00]" />
                    <span className="font-forge font-bold text-[#D4FF00] text-lg leading-none">{ts.weightChange}</span>
                  </div>

                  <h3 className="font-forge text-3xl font-black text-white uppercase mt-2 mb-1">{ts.name}</h3>
                  <div className="text-[#888] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <Clock size={12} className="text-[#D4FF00]" />
                    <span>{ts.duration} Journey</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button 
              onClick={() => openWhatsApp('Hi! I saw the Hall of Transformations and want to start my journey.')}
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#D4FF00] text-[#D4FF00] hover:bg-[#D4FF00] hover:text-[#0A0A0A] font-bold text-sm uppercase tracking-wider rounded-sm transition-all"
            >
              <span>Start Your Transformation</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          8. MEMBERSHIP PLANS (Upgraded)
      ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Choose Your Plan</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Membership Plans</h2>
            <p className="text-[#666] text-sm max-w-lg mx-auto">Transparent pricing. No hidden fees. Select the plan that matches your commitment level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Monthly Plan', period: 'Per Month', price: 2499,
                features: ['✓ Gym Access (All Hours)', '✓ Locker Access', '✓ Basic Guidance', '✕ Personalized Diet', '✕ Trainer Support', '✕ Body Analysis'],
                featured: false, btn: 'Start Monthly'
              },
              {
                name: 'Annual Plan', period: 'Per Year', price: 19999,
                features: ['✓ Everything Included', '✓ Body Analysis', '✓ Priority Support', '✓ Supplement Discounts', '✓ Exclusive Workshops', '✓ 2 Guest Passes/Mo'],
                featured: true, btn: 'Join Annual (Best Value)'
              },
              {
                name: 'Quarterly Plan', period: 'Per 3 Months', price: 6499,
                features: ['✓ Gym Access (All Hours)', '✓ Locker Access', '✓ Personalized Diet', '✓ Trainer Support', '✕ Body Analysis', '✕ Supplement Discounts'],
                featured: false, btn: 'Start Quarterly'
              }
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  plan.featured 
                    ? 'neon-border-strong bg-[#111] scale-105 z-10 scan-shimmer shadow-[0_0_50px_rgba(212,255,0,0.1)]' 
                    : 'border border-[#222] bg-[#0A0A0A] hover:border-[#D4FF00]/40 mt-4 md:mt-0'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4FF00] text-[#0A0A0A] text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-xl flex items-center space-x-2">
                    <Star size={14} className="fill-[#0A0A0A]" />
                    <span>Best Value</span>
                  </div>
                )}

                <div className="text-center mb-8 pb-8 border-b border-[#222]">
                  <div className={`font-forge text-2xl font-bold uppercase mb-2 ${plan.featured ? 'text-[#D4FF00]' : 'text-white'}`}>{plan.name}</div>
                  <div className="flex justify-center items-end space-x-1.5">
                    <div className="font-forge text-5xl font-black text-white leading-none">₹{plan.price.toLocaleString()}</div>
                  </div>
                  <div className="text-[#666] text-xs font-bold uppercase tracking-wider mt-2">{plan.period}</div>
                </div>

                <ul className="space-y-4 flex-1 mb-10">
                  {plan.features.map((f, idx) => {
                    const isIncluded = f.startsWith('✓');
                    const text = f.substring(2);
                    return (
                      <li key={idx} className="flex items-center space-x-3 text-sm">
                        {isIncluded ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-[#D4FF00]/20 text-[#D4FF00]' : 'bg-[#222] text-[#888]'}`}>
                            <Check size={12} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-transparent text-[#444]">
                            <X size={12} strokeWidth={3} />
                          </div>
                        )}
                        <span className={isIncluded ? (plan.featured ? 'text-white font-medium' : 'text-[#aaa]') : 'text-[#555] line-through'}>{text}</span>
                      </li>
                    )
                  })}
                </ul>

                <button
                  onClick={() => openWhatsApp(`Hi! I want to join FORGE FITNESS CLUB on the ${plan.name} (₹${plan.price}).`)}
                  className={`w-full py-4 font-black text-sm uppercase tracking-wider rounded-sm transition-all ${
                    plan.featured
                      ? 'bg-[#D4FF00] text-[#0A0A0A] hover:bg-[#C8F500] neon-glow-btn shadow-[0_10px_20px_rgba(212,255,0,0.2)]'
                      : 'border border-[#333] text-white hover:border-[#D4FF00] hover:text-[#D4FF00] bg-[#111]'
                  }`}
                >
                  {plan.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          9. NUTRITION CORNER (Renamed, no checkout)
      ───────────────────────────────────────────────── */}
      <section id="nutrition" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#D4FF00]" />
                <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">In-House Store</span>
              </div>
              <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Nutrition Corner</h2>
            </div>
            <div className="max-w-xs">
              <div className="bg-[#161616] border border-[#D4FF00]/20 rounded-xl px-5 py-4 flex items-start space-x-3">
                <Shield size={24} className="text-[#D4FF00] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[#D4FF00] text-xs font-bold uppercase tracking-wider mb-1">Authentic Products</div>
                  <p className="text-[#888] text-[11px] leading-relaxed">Available exclusively for members at the gym counter. Ask for guidance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-[#111] neon-border rounded-2xl overflow-hidden card-hover group flex flex-col">
                <div className="relative h-56 bg-[#080808] flex items-center justify-center p-6">
                  {/* Subtle background glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-[40px]" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700 relative z-10 mix-blend-screen"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm z-20">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-grow flex flex-col">
                  <h3 className="font-forge text-2xl font-bold text-white uppercase">{product.name}</h3>
                  <p className="text-[#777] text-sm leading-relaxed flex-grow">{product.description}</p>
                  <div className="pt-4 border-t border-[#222] mt-2">
                    <button
                      onClick={() => openWhatsApp(`Hi! I'm interested in the ${product.name} from the Nutrition Corner.`)}
                      className="w-full flex items-center justify-center space-x-2 border border-[#D4FF00]/40 text-[#D4FF00] text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-sm hover:bg-[#D4FF00] hover:text-[#0A0A0A] transition-all"
                    >
                      <MessageCircle size={16} />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          10. GYM GALLERY
      ───────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Inside The Club</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Gym Gallery</h2>
          </div>

          {/* Masonry-style gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img.src)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 || i === 5 ? 'md:row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 || i === 5 ? '3/4' : '1/1' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm inline-block shadow-xl">
                    {img.label}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-[#D4FF00]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#D4FF00]/30 shadow-2xl">
                    <Play size={20} className="text-[#D4FF00] ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#D4FF00] hover:text-[#0A0A0A] transition-colors">
              <X size={24} />
            </button>
            <img
              src={lightboxImg}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────
          11. MEMBER REVIEWS
      ───────────────────────────────────────────────── */}
      <section id="reviews" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Community Speaks</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-6xl font-black text-white uppercase">Member Reviews</h2>
          </div>

          {/* Review carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-[#111] border border-[#222] rounded-3xl p-10 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
              {/* Quote mark decoration */}
              <div className="absolute -top-10 -left-6 font-forge text-[180px] text-white/[0.02] font-black leading-none pointer-events-none">"</div>
              
              {/* Stars */}
              <div className="flex items-center space-x-1.5 mb-8 relative z-10">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#D4FF00] fill-[#D4FF00]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#e0e0e0] text-xl md:text-2xl leading-relaxed mb-10 italic relative z-10 font-medium">
                "{reviews[activeReview].text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-[#222]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-[#D4FF00] flex items-center justify-center font-black text-[#0A0A0A] text-xl font-forge shadow-lg">
                    {reviews[activeReview].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{reviews[activeReview].name}</div>
                    <div className="text-[#888] text-xs font-semibold uppercase tracking-wider mt-0.5">{reviews[activeReview].program} • {reviews[activeReview].since}</div>
                  </div>
                </div>

                {/* Nav */}
                <div className="flex items-center space-x-3 hidden sm:flex">
                  <button
                    onClick={() => setActiveReview(p => (p - 1 + reviews.length) % reviews.length)}
                    className="w-12 h-12 rounded-full border border-[#333] hover:border-[#D4FF00] flex items-center justify-center text-[#888] hover:text-[#D4FF00] transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveReview(p => (p + 1) % reviews.length)}
                    className="w-12 h-12 rounded-full bg-[#D4FF00] flex items-center justify-center text-[#0A0A0A] hover:bg-[#C8F500] shadow-lg transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeReview ? 'w-10 h-2 bg-[#D4FF00]' : 'w-2 h-2 bg-[#333]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          12. BOOK FREE TRIAL FORM
      ───────────────────────────────────────────────── */}
      <section id="book-trial" className="relative py-28 overflow-hidden bg-[#0A0A0A]">
        {/* Background gym image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=70"
            alt="Forge Fitness CTA"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 z-10">
          <div className="bg-[#111]/90 backdrop-blur-2xl border border-[#D4FF00]/30 rounded-3xl p-8 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left CTA Text */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-[2px] bg-[#D4FF00]" />
                  <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Your Time is Now</span>
                </div>
                <h2 className="font-forge text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] glow-text">
                  CLAIM YOUR<br />
                  <span className="text-[#D4FF00]">FREE TRIAL</span>
                </h2>
                <p className="text-[#aaa] text-sm md:text-base leading-relaxed">
                  Experience the equipment, meet the trainers, and feel the energy. Book your 3-day guest pass today with zero obligations.
                </p>
                <div className="space-y-3 pt-2">
                  {['No Registration Fee', 'Cancel Anytime', 'Expert Guidance'].map(t => (
                    <div key={t} className="flex items-center space-x-3 text-white font-bold text-sm">
                      <div className="w-5 h-5 bg-[#D4FF00]/20 rounded-full flex items-center justify-center">
                        <Check size={12} className="text-[#D4FF00]" strokeWidth={4} />
                      </div>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-[#222]">
                <h3 className="font-forge text-2xl font-bold text-white uppercase mb-6 border-b border-[#222] pb-4">Secure Your Pass</h3>
                <form onSubmit={handleTrialSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[#888] text-[10px] font-bold uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={trialName}
                      onChange={e => setTrialName(e.target.value)}
                      placeholder="Enter your name" 
                      className="w-full bg-[#161616] border border-[#333] rounded-sm px-4 py-3.5 text-white text-sm focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#888] text-[10px] font-bold uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={trialPhone}
                      onChange={e => setTrialPhone(e.target.value)}
                      placeholder="Enter mobile number" 
                      className="w-full bg-[#161616] border border-[#333] rounded-sm px-4 py-3.5 text-white text-sm focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#888] text-[10px] font-bold uppercase tracking-wider">Fitness Goal (Optional)</label>
                    <select 
                      value={trialGoal}
                      onChange={e => setTrialGoal(e.target.value)}
                      className="w-full bg-[#161616] border border-[#333] rounded-sm px-4 py-3.5 text-white text-sm focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] outline-none appearance-none"
                    >
                      <option value="">Select your goal...</option>
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Gain">Muscle Gain</option>
                      <option value="Strength">Strength & Power</option>
                      <option value="General Fitness">General Fitness</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#D4FF00] text-[#0A0A0A] font-black text-sm uppercase tracking-wider rounded-sm hover:bg-[#C8F500] transition-all neon-glow-btn flex items-center justify-center space-x-2 mb-3"
                    >
                      <span>Book Trial via WhatsApp</span>
                      <ChevronRight size={18} />
                    </button>
                    <button 
                      type="button"
                      onClick={() => openWhatsApp()}
                      className="w-full py-3.5 border-2 border-[#333] text-white font-bold text-xs uppercase tracking-wider rounded-sm hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={16} />
                      <span>Just Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          13. CONTACT & LOCATION (Map Below Form)
      ───────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#0D0D0D] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-14">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
              <span className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.35em]">Find Us</span>
              <div className="w-8 h-[2px] bg-[#D4FF00]" />
            </div>
            <h2 className="font-forge text-4xl sm:text-5xl font-black text-white uppercase">Gym Location</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Address */}
            <div className="bg-[#111] neon-border rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#D4FF00]/10 rounded-full flex items-center justify-center mb-5">
                <MapPin size={24} className="text-[#D4FF00]" />
              </div>
              <h3 className="font-forge text-2xl font-bold text-white uppercase mb-3">Address</h3>
              <p className="text-[#888] text-sm leading-relaxed">Forge Tower, Sector 18<br />Gurugram, Haryana 122001</p>
            </div>
            
            {/* Contact */}
            <div className="bg-[#111] neon-border rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#D4FF00]/10 rounded-full flex items-center justify-center mb-5">
                <Phone size={24} className="text-[#D4FF00]" />
              </div>
              <h3 className="font-forge text-2xl font-bold text-white uppercase mb-3">Contact</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-2">+91 98765 43210</p>
              <p className="text-[#888] text-sm leading-relaxed">info@forgefitness.in</p>
            </div>

            {/* Hours */}
            <div className="bg-[#111] neon-border rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#D4FF00]/10 rounded-full flex items-center justify-center mb-5">
                <Clock size={24} className="text-[#D4FF00]" />
              </div>
              <h3 className="font-forge text-2xl font-bold text-white uppercase mb-3">Hours</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-2">Mon-Sat: 5:00 AM – 11:00 PM</p>
              <p className="text-[#888] text-sm leading-relaxed">Sun: 7:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#222] h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121026!2d77.04259731508397!3d28.502436982459673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1623000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
              allowFullScreen
              loading="lazy"
              title="Forge Fitness Club Location"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          14. FOOTER
      ───────────────────────────────────────────────── */}
      <footer className="bg-[#050505] border-t border-[#161616] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
            <div className="md:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#D4FF00] rounded-sm flex items-center justify-center">
                  <Dumbbell size={24} className="text-[#0A0A0A]" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-forge text-white text-2xl font-bold leading-none">FORGE FITNESS</div>
                  <div className="text-[#D4FF00] text-[9px] tracking-[0.4em] uppercase leading-none mt-1">Forge Your Legacy</div>
                </div>
              </div>
              <p className="text-[#666] text-sm max-w-sm leading-relaxed mb-6">
                The ultimate premium fitness facility dedicated to building strength, burning fat, and creating unbreakable mindsets.
              </p>
              {/* Social */}
              <div className="flex items-center space-x-4">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-[#888] hover:bg-[#D4FF00] hover:text-[#0A0A0A] cursor-pointer transition-all shadow-lg">
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-forge text-lg font-bold text-white uppercase mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="text-[#777] hover:text-[#D4FF00] text-sm transition-colors">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-forge text-lg font-bold text-white uppercase mb-5">Members</h4>
              <ul className="space-y-3">
                <li><button className="text-[#777] hover:text-[#D4FF00] text-sm transition-colors">Member Portal</button></li>
                <li><button className="text-[#777] hover:text-[#D4FF00] text-sm transition-colors">Class Schedule</button></li>
                <li><button className="text-[#777] hover:text-[#D4FF00] text-sm transition-colors">Privacy Policy</button></li>
                <li><button className="text-[#777] hover:text-[#D4FF00] text-sm transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4 text-[#555] text-xs">
            <span>© 2025 Forge Fitness Club. All rights reserved.</span>
            <span className="flex items-center space-x-1.5">
              <span>Showcase by</span>
              <Link to="/" className="text-[#D4FF00] hover:text-white transition-colors font-bold uppercase tracking-wider">LETSGO Business Solutions</Link>
            </span>
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────
          15. FLOATING ELEMENTS
      ───────────────────────────────────────────────── */}
      {/* WhatsApp Float Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </button>

      {/* Sticky Trial Button */}
      <div className={`fixed bottom-6 left-6 z-[90] transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button
          onClick={() => scrollToSection('book-trial')}
          className="px-6 py-3.5 bg-[#D4FF00] text-[#0A0A0A] font-black text-xs uppercase tracking-wider rounded-full shadow-[0_10px_30px_rgba(212,255,0,0.3)] hover:bg-[#C8F500] hover:scale-105 transition-all flex items-center space-x-2"
        >
          <Dumbbell size={16} strokeWidth={3} />
          <span>Claim Free Trial</span>
        </button>
      </div>
    </div>
  );
};

export default ForgeFitness;
