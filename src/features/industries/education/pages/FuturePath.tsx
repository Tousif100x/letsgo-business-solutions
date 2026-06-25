import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  ArrowRight,
  Check,
  X,
  Shield,
  ChevronDown
} from 'lucide-react';
import { ShowcaseNavigation } from '../../../../components/shared/ShowcaseNavigation';

interface SubjectItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

interface CareerItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  bgColor: string;
  borderColor: string;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  positionClass: string; // for radial positioning
  iconBg: string;
  iconColor: string;
}

interface ProgramItem {
  id: string;
  name: string;
  grade: string;
  description: string;
  color: string;
  features: string[];
  timings: string;
  teachers: string;
}

interface TimingItem {
  id: string;
  name: string;
  time: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
}

interface JourneyStep {
  step: number;
  title: string;
  description: string;
  color: string;
}

interface AchieverItem {
  id: string;
  name: string;
  achievement: string;
  score: string;
  image: string;
  badgeColor: string;
}

interface CampusItem {
  id: string;
  title: string;
  image: string;
  tag: string;
}

interface ParentTrustItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  badge: string;
  rating: number;
}

export const FuturePath: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('foundation');
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Class 6-8',
    batch: 'Foundation Batch'
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Custom Google Fonts loading for Playful Gen-Z Theme
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Save to local storage
    localStorage.setItem('futurepath_demo_lead', JSON.stringify(formData));
    setFormSubmitted(true);

    // Format WhatsApp message
    const message = `Hello, I would like information regarding admissions and to book a free demo:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Class/Grade: ${formData.grade}
- Preferred Batch: ${formData.batch}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919526543210?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormSubmitted(false);
      setShowDemoModal(false);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        grade: 'Class 6-8',
        batch: 'Foundation Batch'
      });
    }, 1500);
  };

  const handleWhatsAppEnquiry = () => {
    const message = "Hello, I would like information regarding admissions.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919526543210?text=${encodedMessage}`, '_blank');
  };

  // Data declarations
  const subjects: SubjectItem[] = [
    {
      id: 'sub-phy',
      name: 'Physics',
      description: 'Understanding forces, motion, energy, and cosmic mysteries.',
      icon: 'Atom',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      borderColor: 'border-teal-200'
    },
    {
      id: 'sub-chem',
      name: 'Chemistry',
      description: 'Exploring reactions, atomic structures, and molecular magic.',
      icon: 'Beaker',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-700',
      borderColor: 'border-lime-300'
    },
    {
      id: 'sub-math',
      name: 'Mathematics',
      description: 'Solving complex algebra, geometry, calculus, and logical equations.',
      icon: 'Divide',
      bgColor: 'bg-teal-100/50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-300/60'
    },
    {
      id: 'sub-bio',
      name: 'Biology',
      description: 'Studying life systems, human anatomy, genetics, and ecology.',
      icon: 'Dna',
      bgColor: 'bg-lime-100/50',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-300'
    },
    {
      id: 'sub-eng',
      name: 'English',
      description: 'Mastering grammar, communication, literature, and creative writing.',
      icon: 'BookOpen',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      borderColor: 'border-teal-200'
    },
    {
      id: 'sub-sst',
      name: 'Social Science',
      description: 'Analyzing history, geographies, civics, and global economies.',
      icon: 'Globe',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-700',
      borderColor: 'border-lime-300'
    }
  ];

  const careers: CareerItem[] = [
    {
      id: 'c-eng',
      title: 'Engineer',
      tagline: 'Build tech, code platforms, and redesign infrastructures.',
      image: '/media/industries/education/engineer.png',
      bgColor: 'bg-teal-50/70',
      borderColor: 'border-teal-200'
    },
    {
      id: 'c-doc',
      title: 'Doctor',
      tagline: 'Heal lives, specialize in surgery, and lead medical breakthroughs.',
      image: '/media/industries/education/doctor.png',
      bgColor: 'bg-lime-50/70',
      borderColor: 'border-lime-200'
    },
    {
      id: 'c-sci',
      title: 'Scientist',
      tagline: 'Uncover universe secrets, research molecules, and discover technology.',
      image: '/media/industries/education/scientist.png',
      bgColor: 'bg-teal-50/70',
      borderColor: 'border-teal-200'
    },
    {
      id: 'c-ias',
      title: 'IAS Officer',
      tagline: 'Administer regions, drive social change, and manage policies.',
      image: '/media/industries/education/civil.png',
      bgColor: 'bg-lime-50/70',
      borderColor: 'border-lime-200'
    },
    {
      id: 'c-law',
      title: 'Law & Defence',
      tagline: 'Uphold legal systems, serve in the Armed Forces, or defend nations.',
      image: '/media/industries/education/defence.png',
      bgColor: 'bg-teal-50/70',
      borderColor: 'border-teal-200'
    },
    {
      id: 'c-comm',
      title: 'CA / Commerce',
      tagline: 'Lead financial operations, consult corporate houses, and audit trades.',
      image: '/media/industries/education/commerce.png',
      bgColor: 'bg-lime-50/70',
      borderColor: 'border-lime-200'
    }
  ];

  const features: FeatureItem[] = [
    {
      id: 'f-pl',
      title: 'Personalized Learning',
      description: 'Customized lesson paces and modules tailored for every single student.',
      positionClass: 'md:absolute md:top-2 md:left-6 lg:left-14',
      iconBg: 'bg-teal-500',
      iconColor: 'text-white'
    },
    {
      id: 'f-cc',
      title: 'Concept Clarity',
      description: 'Deep visual explanations bypassing boring rote academic memorization.',
      positionClass: 'md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-12 lg:-left-20',
      iconBg: 'bg-lime-400',
      iconColor: 'text-[#111827]'
    },
    {
      id: 'f-rt',
      title: 'Regular Tests',
      description: 'Weekly practice assessments tracking exact metrics, speeds, and focus zones.',
      positionClass: 'md:absolute md:bottom-2 md:left-6 lg:left-14',
      iconBg: 'bg-teal-500',
      iconColor: 'text-white'
    },
    {
      id: 'f-em',
      title: 'Expert Faculty',
      description: 'Experienced educators from IITs and medical universities coaching personally.',
      positionClass: 'md:absolute md:top-2 md:right-6 lg:right-14',
      iconBg: 'bg-lime-400',
      iconColor: 'text-[#111827]'
    },
    {
      id: 'f-ds',
      title: 'Doubt Solving',
      description: 'Instant query resolutions with mentors, available during study intervals.',
      positionClass: 'md:absolute md:top-1/2 md:-translate-y-1/2 md:-right-12 lg:-right-20',
      iconBg: 'bg-teal-500',
      iconColor: 'text-white'
    },
    {
      id: 'f-pc',
      title: 'Parent Connect',
      description: 'Real-time reports, automated attendance, and interactive dashboard reports.',
      positionClass: 'md:absolute md:bottom-2 md:right-6 lg:right-14',
      iconBg: 'bg-lime-400',
      iconColor: 'text-[#111827]'
    }
  ];

  const programs: ProgramItem[] = [
    {
      id: 'foundation',
      name: 'Foundation Batch',
      grade: 'Class 6 - 8',
      description: 'Building cognitive strengths, structural reasoning, and logic capabilities to prepare for school dominance and early Olympiads.',
      color: 'teal',
      features: ['Logical Math Concepts', 'Fun Science Experiments', 'Mental Ability Training', 'Olympiad Foundation Syllabus'],
      timings: '4:00 PM – 6:00 PM (Mon, Wed, Fri)',
      teachers: 'Prof. Anjali Mehta (M.Sc. Physics) & Team'
    },
    {
      id: 'excellence',
      name: 'School Excellence',
      grade: 'Class 9 - 10',
      description: 'Solidifying core science and advanced math subjects for high board exam marks, establishing pre-foundation strategies for JEE/NEET.',
      color: 'lime',
      features: ['Board Exam Question Drills', 'Advanced Science Derivations', 'Logical Mathematics Mastery', 'Monthly Mock Boards'],
      timings: '6:00 PM – 8:00 PM (Daily)',
      teachers: 'Er. Rajat Sharma (B.Tech, IIT Delhi) & Team'
    },
    {
      id: 'board-competitive',
      name: 'Board + JEE/NEET Prep',
      grade: 'Class 11 - 12',
      description: 'Comprehensive dual syllabus handling board exams and competitive engineering/medical exams together, optimizing stress levels.',
      color: 'teal',
      features: ['Dual Syllabus Integration', 'Formula Cheat sheets & Derivations', 'Daily Practice Papers (DPPs)', 'Simultaneous Lab Mock Sessions'],
      timings: '4:00 PM – 7:00 PM (Daily)',
      teachers: 'Dr. Vivek Verma (Ph.D. Organic Chemistry) & Team'
    },
    {
      id: 'jee-intensive',
      name: 'JEE Intensive',
      grade: 'Class 12 & Droppers',
      description: 'High-speed problem solving drills, advanced mock test assessments, and custom tactics to score maximum percentiles in JEE Mains & Advanced.',
      color: 'lime',
      features: ['Complex Physics Solver Sessions', 'Simulated Computer-Based Tests', 'Percentile Optimization Maps', 'IIT Alumni Personal Mentoring'],
      timings: '7:00 PM – 9:00 PM (Mon to Sat)',
      teachers: 'Prof. Sandeep Bansal (IIT Kanpur Graduate, 15+ Yrs Exp)'
    },
    {
      id: 'neet-intensive',
      name: 'NEET Intensive',
      grade: 'Class 12 & Droppers',
      description: 'Specialized medical entrance strategy focusing heavily on high-speed Biology drills and conceptual Chemistry/Physics problem strategies.',
      color: 'teal',
      features: ['NCERT Fingerprint Biology Mastery', 'Physics Numerical Speed Hacks', 'Weekly Full-Length Medical Mocks', 'AIIMS Entry Strategy Mapping'],
      timings: '4:00 PM – 7:00 PM (Mon to Sat)',
      teachers: 'Dr. Shruti Sen (MD, NEET Coach, 12+ Yrs Exp)'
    },
    {
      id: 'olympiad',
      name: 'Olympiad Preparation',
      grade: 'Class 6 - 12',
      description: 'Advanced logical reasoning and conceptual application to compete in National/International Science, Math, and Astronomy Olympiads.',
      color: 'lime',
      features: ['IMO / NSO Advanced Syllabus', 'Analytical Reasoning Drills', 'Previous Olympiad Paper Deconstruction', 'National Rank Mapping Charts'],
      timings: '6:00 PM – 8:00 PM (Saturday & Sunday)',
      teachers: 'Dr. Amit Gupta (Olympiad Gold Medalist) & Team'
    }
  ];

  const timings: TimingItem[] = [
    {
      id: 't-foundation',
      name: 'Foundation Batch',
      time: '4:00 PM – 6:00 PM',
      bgColor: 'bg-teal-50/50',
      borderColor: 'border-teal-200/80',
      textColor: 'text-[#111827]',
      accentColor: 'bg-teal-500 text-white'
    },
    {
      id: 't-school',
      name: 'School Batch',
      time: '6:00 PM – 8:00 PM',
      bgColor: 'bg-lime-50/40',
      borderColor: 'border-lime-200/80',
      textColor: 'text-[#111827]',
      accentColor: 'bg-lime-400 text-[#111827]'
    },
    {
      id: 't-board',
      name: 'Board + JEE/NEET',
      time: '4:00 PM – 7:00 PM',
      bgColor: 'bg-teal-50/50',
      borderColor: 'border-teal-200/80',
      textColor: 'text-[#111827]',
      accentColor: 'bg-teal-500 text-white'
    },
    {
      id: 't-advanced',
      name: 'Advanced Batch',
      time: '7:00 PM – 9:00 PM',
      bgColor: 'bg-lime-50/40',
      borderColor: 'border-lime-200/80',
      textColor: 'text-[#111827]',
      accentColor: 'bg-lime-400 text-[#111827]'
    }
  ];

  const journeySteps: JourneyStep[] = [
    {
      step: 1,
      title: 'Learn Concepts',
      description: 'Visualize abstract ideas through gamified modules & expert sessions.',
      color: 'bg-teal-500 text-white'
    },
    {
      step: 2,
      title: 'Practice Questions',
      description: 'Build confidence with Daily Practice Papers (DPPs) tailored by difficulty.',
      color: 'bg-lime-400 text-[#111827]'
    },
    {
      step: 3,
      title: 'Weekly Tests',
      description: 'Evaluate speed, accuracy, and logic under real-time exam timers.',
      color: 'bg-teal-500 text-white'
    },
    {
      step: 4,
      title: 'Performance Analysis',
      description: 'Gain smart reports identifying exact weakness corridors and fix tracks.',
      color: 'bg-lime-400 text-[#111827]'
    },
    {
      step: 5,
      title: 'Success',
      description: 'Secure ranks, toppers tags, and unlock college dreams fearlessly.',
      color: 'bg-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.4)]'
    }
  ];

  const achievers: AchieverItem[] = [
    {
      id: 'ach-1',
      name: 'Rohan Sharma',
      achievement: 'JEE Advanced Qualified',
      score: 'AIR 241',
      image: '/media/industries/education/achiever1.png',
      badgeColor: 'bg-teal-500'
    },
    {
      id: 'ach-2',
      name: 'Ananya Vyas',
      achievement: 'NEET Qualified',
      score: '692 / 720',
      image: '/media/industries/education/achiever2.png',
      badgeColor: 'bg-lime-400 text-[#111827]'
    },
    {
      id: 'ach-3',
      name: 'Vikram Rajput',
      achievement: 'Board Exams Topper',
      score: '98.6% (CBSE)',
      image: '/media/industries/education/achiever3.png',
      badgeColor: 'bg-teal-500'
    },
    {
      id: 'ach-4',
      name: 'Meera Deshmukh',
      achievement: 'Olympiad Winner',
      score: 'Gold Medalist (IMO)',
      image: '/media/industries/education/achiever4.png',
      badgeColor: 'bg-lime-400 text-[#111827]'
    }
  ];

  const campusLife: CampusItem[] = [
    {
      id: 'camp-1',
      title: 'Interactive Classrooms',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      tag: 'Classroom Sessions'
    },
    {
      id: 'camp-2',
      title: '1-on-1 Doubt Clears',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      tag: 'Doubt Solving'
    },
    {
      id: 'camp-3',
      title: 'National Mock Exams',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      tag: 'Test Series'
    },
    {
      id: 'camp-4',
      title: 'Collaborative Study Spaces',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      tag: 'Group Discussions'
    },
    {
      id: 'camp-5',
      title: 'Direct Teacher Mentors',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      tag: 'Teacher Guidance'
    },
    {
      id: 'camp-6',
      title: 'Conceptual Bootcamps',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      tag: 'Academic Workshops'
    }
  ];

  const parentTrusts: ParentTrustItem[] = [
    {
      id: 'pt-reports',
      title: 'Progress Reports',
      description: 'Weekly detailed scorecards sent directly to parents detailing strength parameters.',
      icon: 'FileText',
      bgColor: 'bg-teal-50/60'
    },
    {
      id: 'pt-attendance',
      title: 'Attendance Tracking',
      description: 'Biometric scan reports pinged automatically via WhatsApp on entry and exit.',
      icon: 'Clock',
      bgColor: 'bg-lime-50/50'
    },
    {
      id: 'pt-meetings',
      title: 'Parent Meetings',
      description: 'Monthly interactive discussions with faculty to align student home strategies.',
      icon: 'Users',
      bgColor: 'bg-teal-50/60'
    },
    {
      id: 'pt-monitoring',
      title: 'Academic Monitoring',
      description: 'Direct communication channels with chief mentors for consistent evaluation.',
      icon: 'BookOpen',
      bgColor: 'bg-lime-50/50'
    }
  ];

  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      name: 'Aishwarya Patil',
      role: 'Class 12 Board + JEE Student',
      quote: 'The teachers explain dry formulas so visually! I actually look forward to attending physics sessions here. My mock scores jumped from 45% to 85% in just four months.',
      badge: '95% in Boards & JEE Mains Clear',
      rating: 5
    },
    {
      id: 'test-2',
      name: 'Amit Verma',
      role: 'Father of Rahul Verma (Class 9)',
      quote: 'Excellent monitoring! The automated WhatsApp notifications of class attendance and weekly rank sheets give us complete visibility without micro-managing Rahul.',
      badge: 'Olympiad Winner Parent',
      rating: 5
    },
    {
      id: 'test-3',
      name: 'Karan Malhotra',
      role: 'NEET Intensive Drop Batch',
      quote: 'The Doubt solving zone is a lifesaver. You can sit with a faculty member after hours and solve physical Chemistry queries until your concepts are 100% resolved.',
      badge: 'NEET Qualified - AIR 982',
      rating: 5
    }
  ];

  const selectedProgram = programs.find(p => p.id === activeTab) || programs[0];

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans antialiased overflow-x-hidden relative selection:bg-teal-200 selection:text-teal-900 pb-1">
      <ShowcaseNavigation 
        sectorName="Education"
        sectorSlug="education"
        showcaseName="FuturePath Learning Hub"
        accentColor="#14B8A6" // teal-500
        theme="light"
      />
      {/* Dynamic font stylesheet configuration */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-fredoka { font-family: 'Fredoka', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.03); opacity: 1; }
        }
        
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
        
        /* Smooth custom curves */
        .curved-bottom {
          border-bottom-left-radius: 6rem;
          border-bottom-right-radius: 6rem;
        }
        .curved-top {
          border-top-left-radius: 6rem;
          border-top-right-radius: 6rem;
        }
        @media (max-width: 768px) {
          .curved-bottom {
            border-bottom-left-radius: 3rem;
            border-bottom-right-radius: 3rem;
          }
          .curved-top {
            border-top-left-radius: 3rem;
            border-top-right-radius: 3rem;
          }
        }
      `}} />

      {/* Floating Sparkles and Doodles (Absolute Canvas) */}
      <div className="absolute top-10 left-5 pointer-events-none opacity-40 animate-float-gentle z-0 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#14B8A6" />
        </svg>
      </div>
      <div className="absolute top-96 right-10 pointer-events-none opacity-30 animate-float-slow z-0 hidden lg:block">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <path d="M17.5 0L22 13L35 17.5L22 22L17.5 35L13 22L0 17.5L13 13L17.5 0Z" fill="#B7F34D" />
        </svg>
      </div>

      {/* ---------------- NAVIGATION ---------------- */}
      <nav className="relative z-40 bg-white/95 backdrop-blur-md border-b border-teal-50 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/sectors/education')}>
          <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-teal-500/20 transform rotate-3">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="font-fredoka text-xl tracking-tight text-[#111827] block leading-none">FuturePath</span>
            <span className="text-[10px] uppercase tracking-wider text-teal-600 font-bold">Learning Hub</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-outfit text-sm font-semibold">
          <a href="#subjects" className="text-[#111827]/75 hover:text-teal-600 transition-colors">Subjects</a>
          <a href="#careers" className="text-[#111827]/75 hover:text-teal-600 transition-colors">Careers</a>
          <a href="#radial-hub" className="text-[#111827]/75 hover:text-teal-600 transition-colors">Why Us</a>
          <a href="#programs" className="text-[#111827]/75 hover:text-teal-600 transition-colors">Programs</a>
          <a href="#roadmaps" className="text-[#111827]/75 hover:text-teal-600 transition-colors">Journey</a>
          <a href="#results" className="text-[#111827]/75 hover:text-teal-600 transition-colors">Achievers</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowDemoModal(true)} 
            className="font-outfit text-xs font-bold uppercase tracking-wider px-5 py-2.5 bg-teal-500 text-white rounded-full hover:bg-teal-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-teal-500/20"
          >
            Book Free Demo
          </button>
          
          <button 
            onClick={() => navigate('/sectors')} 
            className="p-2 border border-teal-100 hover:bg-teal-50 rounded-full transition-colors text-teal-600"
            title="Back to Catalog"
          >
            <X size={18} />
          </button>
        </div>
      </nav>

      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pb-24 px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="font-outfit text-xs font-bold uppercase tracking-[0.2em] bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full inline-block border border-teal-100 shadow-sm animate-pulse-soft">
              ✦ Admission Open: Class 6 to 12, JEE & NEET ✦
            </span>
            
            <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl text-[#111827] leading-[1.1] tracking-tight">
              Learn Better.<br />
              <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">Achieve</span> Bigger.<br />
              <span className="bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent">Dream Fearlessly.</span>
            </h1>

            <p className="font-outfit text-base text-[#111827]/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Personalized guidance, concept-clarity coaching, and real outcomes that shape your engineering, medical, or administrative future. Learning isn't a chore; it's an exciting journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a 
                href="#programs" 
                className="w-full sm:w-auto text-center font-outfit text-sm font-bold uppercase tracking-wider px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300"
              >
                Explore Programs
              </a>
              <button 
                onClick={() => setShowDemoModal(true)} 
                className="w-full sm:w-auto text-center font-outfit text-sm font-bold uppercase tracking-wider px-8 py-4 bg-lime-400 text-[#111827] rounded-full hover:bg-lime-500 hover:shadow-xl hover:shadow-lime-400/25 transition-all duration-300 border border-lime-300"
              >
                Book Free Demo
              </button>
            </div>
            
            {/* Quick Proofing */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4 border-t border-teal-50">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-100 flex items-center justify-center font-fredoka text-xs font-bold text-teal-800">R</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-lime-200 flex items-center justify-center font-fredoka text-xs font-bold text-lime-800">A</div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-200 flex items-center justify-center font-fredoka text-xs font-bold text-teal-900">V</div>
              </div>
              <p className="font-outfit text-xs text-[#111827]/60">
                <span className="font-bold text-teal-600">2,000+ Students</span> growing stronger with us in Madhya Pradesh corridor.
              </p>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden border border-teal-100 shadow-2xl p-2 bg-[#E6F8F6]">
              {/* Floating element overlays */}
              <div className="absolute top-4 left-6 bg-white/90 backdrop-blur-sm border border-teal-100 rounded-2xl p-3 flex items-center space-x-2 shadow-lg animate-float-gentle z-20">
                <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center font-fredoka text-[#111827] font-bold">✓</div>
                <div>
                  <span className="font-fredoka text-xs block text-[#111827]">Olympiads Winner</span>
                  <span className="text-[9px] uppercase tracking-wider text-teal-600 font-bold">Level 2 Rank 1</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-[#111827]/90 border border-teal-700 rounded-2xl p-3 flex items-center space-x-2.5 shadow-xl animate-float-slow z-20">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-fredoka font-bold">1</div>
                <div>
                  <span className="font-fredoka text-xs block text-white">Your Journey Starts Today</span>
                  <span className="text-[9px] uppercase tracking-wider text-lime-400 font-bold">Step 1 of 5</span>
                </div>
              </div>

              <img 
                src="/media/industries/education/hero.png" 
                alt="Happy students group cartoon 3D" 
                className="w-full h-full object-cover rounded-[2.5rem] hover:scale-102 transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Background absolute visuals */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-lime-400/10 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: POPULAR SUBJECTS ---------------- */}
      <section id="subjects" className="py-16 bg-teal-50/20 border-y border-teal-50 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">Academic Coverage</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Master Every Subject</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Our comprehensive coaching curriculum prepares students thoroughly across core domains, ensuring board success and olympiad victories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((sub) => (
              <div 
                key={sub.id}
                className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-600/5 group flex flex-col justify-between ${sub.bgColor} ${sub.borderColor}`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-white border ${sub.borderColor} flex items-center justify-center ${sub.textColor} font-fredoka font-bold shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                    {sub.name.charAt(0)}
                  </div>
                  <h3 className="font-fredoka text-lg text-[#111827]">{sub.name}</h3>
                  <p className="font-outfit text-xs text-[#111827]/65 leading-relaxed">{sub.description}</p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold tracking-wider uppercase text-[#111827]/70 group-hover:text-teal-600 transition-colors">
                  <span>Explore Syllabus</span>
                  <ArrowRight size={12} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 3: CAREER EXPLORATION ---------------- */}
      <section id="careers" className="py-20 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">Choose Your Path</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Where Will Your Dreams Take You?</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Interactive career pathways designed to build foundation pillars for the country's most competitive, premium exams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {careers.map((career) => (
              <div 
                key={career.id}
                className={`p-4 rounded-3xl border ${career.bgColor} ${career.borderColor} flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer group`}
              >
                <div className="space-y-3 w-full">
                  {/* Circular 3D Avatar Area */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-white border border-teal-100 overflow-hidden shadow-inner p-1 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={career.image} 
                      alt={career.title} 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
                  <h3 className="font-fredoka text-base text-[#111827]">{career.title}</h3>
                  <p className="font-outfit text-[11px] text-[#111827]/60 leading-normal line-clamp-3">
                    {career.tagline}
                  </p>
                </div>

                <div className="mt-4 w-8 h-8 rounded-full bg-white border border-teal-100 flex items-center justify-center text-teal-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 4: ACHIEVEMENT BAR ---------------- */}
      <section className="px-6 md:px-12 lg:px-20 z-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="curved-bottom curved-top bg-gradient-to-r from-teal-500 to-teal-600 border border-teal-400 p-8 md:p-12 shadow-xl shadow-teal-500/20 text-white flex flex-col md:flex-row items-center justify-around gap-8 text-center">
            
            <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
              <span className="font-fredoka text-3xl sm:text-4xl md:text-5xl block font-bold text-lime-300">5000+</span>
              <span className="font-outfit text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90">Students Enrolled</span>
            </div>

            <div className="h-10 w-px bg-white/20 hidden md:block" />

            <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
              <span className="font-fredoka text-3xl sm:text-4xl md:text-5xl block font-bold text-lime-300">25+</span>
              <span className="font-outfit text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90">Expert Mentors</span>
            </div>

            <div className="h-10 w-px bg-white/20 hidden md:block" />

            <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
              <span className="font-fredoka text-3xl sm:text-4xl md:text-5xl block font-bold text-lime-300">95%</span>
              <span className="font-outfit text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90">Success Rate</span>
            </div>

            <div className="h-10 w-px bg-white/20 hidden md:block" />

            <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
              <span className="font-fredoka text-3xl sm:text-4xl md:text-5xl block font-bold text-lime-300">10+ Years</span>
              <span className="font-outfit text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90">Excellence</span>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: WHY STUDENTS LOVE US ---------------- */}
      <section id="radial-hub" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">The Student Experience</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Why Students Love Us</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              We design educational systems that trigger genuine excitement, logical capability, and peerless board/competitive results.
            </p>
          </div>

          {/* Radial connected network container */}
          <div className="relative min-h-[580px] flex items-center justify-center">
            
            {/* SVG Connector lines background - Animates in dashoffset on hover */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block stroke-teal-200/60" 
              viewBox="0 0 1000 600" 
              fill="none"
            >
              {/* Radial connection paths linked to center center: (500, 300) */}
              {/* Left Top Card */}
              <path d="M 200 80 Q 320 80 500 300" strokeWidth="2.5" strokeDasharray="6,6" className="animate-[dash_20s_linear_infinite]" />
              {/* Left Mid Card */}
              <path d="M 120 300 H 500" strokeWidth="2.5" strokeDasharray="6,6" />
              {/* Left Bot Card */}
              <path d="M 200 520 Q 320 520 500 300" strokeWidth="2.5" strokeDasharray="6,6" />
              {/* Right Top Card */}
              <path d="M 800 80 Q 680 80 500 300" strokeWidth="2.5" strokeDasharray="6,6" />
              {/* Right Mid Card */}
              <path d="M 880 300 H 500" strokeWidth="2.5" strokeDasharray="6,6" />
              {/* Right Bot Card */}
              <path d="M 800 520 Q 680 520 500 300" strokeWidth="2.5" strokeDasharray="6,6" />
            </svg>

            {/* Central Student Avatar (Weight anchor center) */}
            <div className="z-10 bg-white border border-teal-150 p-3 rounded-full shadow-2xl relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center transform hover:scale-102 duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#E6F8F6] to-teal-50/50 overflow-hidden relative border border-teal-100 flex items-center justify-center">
                <img 
                  src="/media/industries/education/student-center.png" 
                  alt="Center Student cartoon 3D" 
                  className="w-full h-full object-cover transform translate-y-2" 
                />
              </div>
              <div className="absolute -bottom-2 bg-lime-400 text-[#111827] text-[10px] font-bold tracking-widest uppercase border border-lime-300 px-4 py-1.5 rounded-full shadow-md leading-none">
                Active Learning
              </div>
            </div>

            {/* Circular feature cards wrapper */}
            <div className="absolute inset-0 flex flex-col md:block justify-between space-y-6 md:space-y-0 z-20 pointer-events-none md:pointer-events-auto mt-6 md:mt-0">
              {features.map((feat) => (
                <div 
                  key={feat.id}
                  className={`pointer-events-auto w-full md:w-60 lg:w-72 p-5 bg-white border border-teal-50 rounded-3xl shadow-lg hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex items-start space-x-3.5 transform hover:-translate-y-1 ${feat.positionClass}`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${feat.iconBg} ${feat.iconColor} font-fredoka font-bold text-sm`}>
                    {feat.title.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-fredoka text-sm text-[#111827]">{feat.title}</h4>
                    <p className="font-outfit text-xs text-[#111827]/60 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- SECTION 6: PROGRAMS & BATCHES ---------------- */}
      <section id="programs" className="py-20 bg-teal-50/20 border-t border-teal-50 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">Tailored Curriculum</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Programs & Batches</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Select your academic group below to view custom timelines, dedicated syllabi, and teacher faculty alignments.
            </p>
          </div>

          {/* Program Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {programs.map((p) => (
              <button 
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`font-outfit text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === p.id 
                    ? 'bg-teal-500 border-teal-600 text-white shadow-md shadow-teal-500/20' 
                    : 'bg-white border-teal-100 hover:border-teal-200 text-[#111827]/75 hover:bg-teal-50/30'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Selected Program Display Card */}
          <div className="bg-white border border-teal-50 rounded-[2.5rem] shadow-xl p-6 md:p-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center transform hover:scale-[1.01] transition-transform duration-300">
            
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">
                  {selectedProgram.grade}
                </span>
                <h3 className="font-fredoka text-2xl md:text-3xl text-[#111827]">
                  {selectedProgram.name}
                </h3>
                <p className="font-outfit text-sm text-[#111827]/70 leading-relaxed pt-1">
                  {selectedProgram.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {selectedProgram.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#111827]/85 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center text-[#111827] shrink-0">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-teal-50 pt-5 space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#111827]/70 gap-2">
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-teal-500 shrink-0" />
                    <span>Timings: <strong className="text-[#111827] font-semibold">{selectedProgram.timings}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={14} className="text-teal-500 shrink-0" />
                    <span>Faculty: <strong className="text-[#111827] font-semibold">{selectedProgram.teachers.split(' ')[1]} & Team</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-teal-50/50 rounded-3xl p-6 border border-teal-100 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-outfit text-[10px] font-bold uppercase tracking-wider text-teal-700 block mb-2">✦ Batch Details</span>
                <h4 className="font-fredoka text-lg text-[#111827] mb-3">Admission Guidelines</h4>
                <p className="font-outfit text-xs text-[#111827]/60 leading-relaxed">
                  Includes comprehensive study kits, books, daily doubt sessions, weekly test analysis and feedback portals. Schedule a free demo class today to test your baseline capabilities.
                </p>
              </div>

              <button 
                onClick={() => {
                  setFormData(prev => ({ ...prev, grade: selectedProgram.grade, batch: selectedProgram.name }));
                  setShowDemoModal(true);
                }} 
                className="w-full font-outfit text-xs font-bold uppercase tracking-wider py-3.5 bg-teal-500 text-white rounded-full hover:bg-teal-600 hover:shadow-lg transition-all duration-300 text-center block"
              >
                Join {selectedProgram.name}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- SECTION 7: BATCH TIMINGS ---------------- */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">Daily Schedules</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Dedicated Batch Timings</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Clear timing calendars helping parents sync academic schedules and school travel intervals with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timings.map((time) => (
              <div 
                key={time.id}
                className={`p-6 rounded-3xl border ${time.bgColor} ${time.borderColor} flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
              >
                <div className="space-y-3 w-full">
                  <span className="font-fredoka text-[#111827] text-lg font-semibold block">{time.name}</span>
                  <div className="h-px bg-teal-100/50 w-1/3 mx-auto" />
                  <span className="font-outfit text-sm text-teal-600 font-bold block">{time.time}</span>
                </div>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, batch: time.name }));
                    setShowDemoModal(true);
                  }}
                  className="mt-6 font-outfit text-[10px] font-bold uppercase tracking-wider py-2 px-4 rounded-full border border-teal-200 bg-white text-teal-700 hover:bg-teal-500 hover:text-white transition-colors duration-300"
                >
                  Inquire Seats
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 8: LEARNING JOURNEY ---------------- */}
      <section id="roadmaps" className="py-20 bg-teal-50/20 border-t border-teal-50 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">The Roadmap</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Learning Journey</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Our proven milestones roadmap mapping the step-by-step progress metrics students complete to secure results.
            </p>
          </div>

          {/* illustrated roadmap grid timeline */}
          <div className="relative">
            {/* Connector snake-like line for wide layouts */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-lime-300 to-teal-500 -translate-y-1/2 hidden lg:block z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {journeySteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-teal-50 rounded-[2rem] p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center relative group"
                >
                  {/* Step Bubble */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-fredoka font-bold text-base mb-4 transform group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                    {step.step}
                  </div>
                  
                  <h4 className="font-fredoka text-sm text-[#111827] mb-2">{step.title}</h4>
                  <p className="font-outfit text-xs text-[#111827]/60 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Down Arrow for Mobile Layouts */}
                  {idx < 4 && (
                    <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 lg:hidden bg-teal-500 text-white w-6 h-6 rounded-full flex items-center justify-center z-20 shadow-md">
                      <ChevronDown size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 9: RESULTS WALL ---------------- */}
      <section id="results" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">Our Pride</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Hall of Achievers</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Credible student accomplishments. Real toppers, real scores, and authentic board/competitive results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievers.map((ach) => (
              <div 
                key={ach.id}
                className="bg-white border border-teal-50 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-xl hover:border-teal-200 transition-all duration-300 group"
              >
                {/* Topper Real Photograph */}
                <div className="relative aspect-[4/5] bg-teal-50/50 overflow-hidden">
                  <img 
                    src={ach.image} 
                    alt={ach.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                  />
                  {/* Achievement score badge over photo */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="font-fredoka text-xs font-semibold px-4 py-1.5 rounded-full shadow-md text-white bg-teal-500">
                      {ach.score}
                    </span>
                  </div>
                </div>

                {/* Topper detail description */}
                <div className="p-6 space-y-3 text-center">
                  <div>
                    <h3 className="font-fredoka text-base text-[#111827]">{ach.name}</h3>
                    <p className="font-outfit text-xs text-teal-600 font-bold uppercase tracking-wide mt-1">
                      {ach.achievement}
                    </p>
                  </div>
                  
                  {/* Small gold crown separator */}
                  <div className="flex items-center justify-center space-x-1.5 text-lime-500">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 10: CAMPUS LIFE ---------------- */}
      <section className="py-20 bg-teal-50/20 border-y border-teal-50 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">The Environment</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Learning Beyond The Classroom</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Take a visual tour inside our spaces. Real photography representing classrooms, tests, and active doubts corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusLife.map((camp) => (
              <div 
                key={camp.id}
                className="bg-white border border-teal-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Real classroom/workspace visual */}
                <div className="relative aspect-[4/3] bg-teal-50/20 overflow-hidden">
                  <img 
                    src={camp.image} 
                    alt={camp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-transparent to-transparent opacity-80" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 z-20 font-outfit text-[9px] font-bold uppercase tracking-widest bg-white text-[#111827] px-3 py-1 rounded-full shadow-sm">
                    {camp.tag}
                  </span>
                </div>

                <div className="p-5 text-center">
                  <h4 className="font-fredoka text-sm text-[#111827] group-hover:text-teal-600 transition-colors duration-300">
                    {camp.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 11: PARENTS TRUST SECTION ---------------- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">Peace of Mind</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Parents Trust Section</h2>
            <p className="font-outfit text-sm text-[#111827]/60">
              Clear administrative pillars building complete credibility, safety and regular performance monitoring for your child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentTrusts.map((pt) => (
              <div 
                key={pt.id}
                className={`p-6 rounded-[2rem] border border-teal-50 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${pt.bgColor}`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-teal-100 flex items-center justify-center text-teal-600 shadow-sm">
                    <Shield size={18} />
                  </div>
                  <h3 className="font-fredoka text-sm text-[#111827] font-semibold">{pt.title}</h3>
                  <p className="font-outfit text-xs text-[#111827]/60 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
                
                <div className="pt-4 flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  <span>Verified System</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 12: TESTIMONIALS CAROUSEL ---------------- */}
      <section className="py-20 bg-teal-50/20 border-t border-teal-50 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-teal-600">What Students Say</span>
            <h2 className="font-fredoka text-3xl md:text-4xl text-[#111827]">Real Stories. Real Results.</h2>
          </div>

          <div className="max-w-3xl mx-auto relative px-4">
            
            {/* Active Testimonial Card */}
            <div className="bg-white border border-teal-50 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative transform transition-all duration-500 ease-out">
              <span className="absolute top-6 right-8 text-teal-200/40 text-7xl font-fredoka pointer-events-none">“</span>
              
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 text-lime-500">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <p className="font-outfit text-base md:text-lg text-[#111827]/80 italic leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="border-t border-teal-50 pt-5 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-fredoka text-base text-[#111827]">{testimonials[activeTestimonial].name}</h4>
                    <span className="font-outfit text-xs text-[#111827]/55">{testimonials[activeTestimonial].role}</span>
                  </div>

                  <span className="font-outfit text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
                    {testimonials[activeTestimonial].badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel Control buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button 
                onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-teal-100 bg-white hover:bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm hover:scale-105 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              
              {/* Slides indicator dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? 'bg-teal-500 w-6' : 'bg-teal-200'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full border border-teal-100 bg-white hover:bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm hover:scale-105 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- SECTION 13: ENQUIRY CTA ---------------- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="curved-bottom curved-top bg-gradient-to-br from-teal-500 to-teal-600 border border-teal-400 p-8 md:p-14 text-white shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
              <span className="font-outfit text-xs font-bold uppercase tracking-[0.2em] bg-white/10 text-lime-300 px-4 py-1.5 rounded-full inline-block border border-white/10 shadow-inner">
                ✦ Unlock Your Ranks Fearlessly ✦
              </span>
              <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-white">
                Ready To Build<br />Your Future?
              </h2>
              <p className="font-outfit text-sm text-white/80 leading-relaxed max-w-xl">
                Take the first step. Book your free personalized demo class or send a direct admission enquiry. Our academic counselors will get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowDemoModal(true)} 
                  className="font-outfit text-xs font-bold uppercase tracking-wider py-4 px-8 bg-lime-400 text-[#111827] rounded-full hover:bg-lime-500 hover:shadow-lg transition-all duration-300"
                >
                  Book Free Demo
                </button>
                <button 
                  onClick={handleWhatsAppEnquiry} 
                  className="font-outfit text-xs font-bold uppercase tracking-wider py-4 px-8 border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-full hover:shadow-lg transition-all duration-300"
                >
                  WhatsApp Enquiry
                </button>
              </div>
            </div>

            {/* Right student visual column */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10">
              <div className="relative w-full max-w-[340px] aspect-square rounded-[2rem] overflow-hidden bg-white/10 border border-white/20 shadow-xl p-1.5">
                <img 
                  src="/media/industries/education/cta-student.png" 
                  alt="Confident student cartoon 3D" 
                  className="w-full h-full object-cover rounded-[1.8rem] transform translate-y-1" 
                />
              </div>
            </div>

            {/* Background design elements inside the CTA banner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl z-0" />
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 14: FOOTER ---------------- */}
      <footer className="bg-[#111827] text-white/70 py-16 px-6 md:px-12 lg:px-20 border-t border-white/5 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/sectors/education')}>
              <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-teal-500/20 transform rotate-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-fredoka text-xl tracking-tight text-white block leading-none">FuturePath</span>
                <span className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">Learning Hub</span>
              </div>
            </div>
            
            <p className="font-outfit text-xs text-white/55 leading-relaxed max-w-sm">
              Empowering students from Class 6 to 12 with quality, concept-clarity coaching and competitive entrance expertise. Reimagining traditional education.
            </p>

            <p className="font-outfit text-[10px] text-white/35">
              © 2026 FuturePath Learning Hub. Under LETSGO Business Solutions. All rights reserved.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-fredoka text-sm text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2.5 font-outfit text-xs text-white/60">
              <li><a href="#subjects" className="hover:text-teal-400 transition-colors">Popular Subjects</a></li>
              <li><a href="#careers" className="hover:text-teal-400 transition-colors">Career Pathways</a></li>
              <li><a href="#radial-hub" className="hover:text-teal-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#programs" className="hover:text-teal-400 transition-colors">Courses & Batches</a></li>
              <li><a href="#roadmaps" className="hover:text-teal-400 transition-colors">Learning Journey</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-fredoka text-sm text-white font-semibold">Our Programs</h4>
            <ul className="space-y-2.5 font-outfit text-xs text-white/60">
              <li><span className="hover:text-teal-400 cursor-pointer block" onClick={() => { setActiveTab('foundation'); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}>Foundation Batch (Class 6-8)</span></li>
              <li><span className="hover:text-teal-400 cursor-pointer block" onClick={() => { setActiveTab('excellence'); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}>School Excellence (Class 9-10)</span></li>
              <li><span className="hover:text-teal-400 cursor-pointer block" onClick={() => { setActiveTab('board-competitive'); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}>Board + JEE/NEET (Class 11-12)</span></li>
              <li><span className="hover:text-teal-400 cursor-pointer block" onClick={() => { setActiveTab('jee-intensive'); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}>JEE/NEET Intensive</span></li>
              <li><span className="hover:text-teal-400 cursor-pointer block" onClick={() => { setActiveTab('olympiad'); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}>Olympiads Coaching</span></li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-fredoka text-sm text-white font-semibold">Contact Info</h4>
            <ul className="space-y-3 font-outfit text-xs text-white/60">
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="text-teal-400 shrink-0 mt-0.5" />
                <span>123, Education Street, Silicon City, Indore, MP - 452012</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-teal-400 shrink-0" />
                <span>+91 95265 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={14} className="text-teal-400 shrink-0" />
                <span>Mon – Sat: 4:00 PM – 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </footer>

      {/* ---------------- SECTION 15: FLOATING WHATSAPP BUTTON ---------------- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleWhatsAppEnquiry}
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400"
          title="WhatsApp Enquiry"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 2.01 14.041 1 11.453 1 6.012 1 1.593 5.37 1.59 10.8c-.001 1.702.463 3.367 1.34 4.811L1.926 20.2l4.72-1.046zM17.56 14.8c-.27-.133-1.585-.767-1.83-.857-.247-.09-.427-.133-.607.133-.18.267-.697.857-.853 1.034-.157.177-.313.2-.583.067-.27-.133-1.14-.413-2.17-1.317-.803-.703-1.345-1.572-1.502-1.84-.157-.267-.017-.412.118-.545.122-.12.27-.313.405-.47.135-.157.18-.267.27-.447.09-.177.045-.333-.023-.467-.067-.133-.607-1.428-.83-1.956-.218-.52-.458-.45-.607-.458-.157-.008-.337-.01-.518-.01-.18 0-.472.067-.72.333-.248.267-.945.91-.945 2.22 0 1.31.968 2.578 1.103 2.756.135.177 1.905 2.85 4.615 3.998.644.273 1.148.435 1.54.558.648.202 1.238.173 1.704.103.52-.078 1.585-.635 1.808-1.25.223-.617.223-1.148.156-1.25-.067-.1-.248-.133-.518-.267z" />
          </svg>
        </button>
      </div>

      {/* ---------------- DEMO BOOKING MODAL ---------------- */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 bg-[#111827]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-teal-50 rounded-[2.5rem] w-full max-w-md shadow-2xl p-6 md:p-8 relative transform scale-100 transition-all duration-300">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-6 right-6 p-1.5 border border-teal-50 hover:bg-teal-50 rounded-full transition-colors text-[#111827]/70"
            >
              <X size={16} />
            </button>

            <div className="space-y-6">
              <div className="text-center">
                <span className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mx-auto shadow-sm mb-3">
                  <Calendar size={24} />
                </span>
                <h3 className="font-fredoka text-xl text-[#111827]">Book Your Free Demo</h3>
                <p className="font-outfit text-xs text-[#111827]/55 mt-1">
                  Secure your baseline analysis session. Fill details to register.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-lime-400 text-[#111827] flex items-center justify-center mx-auto shadow-md">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <h4 className="font-fredoka text-base text-[#111827]">Redirecting to WhatsApp...</h4>
                  <p className="font-outfit text-xs text-[#111827]/50">
                    We are opening WhatsApp with your prefilled query details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-outfit">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111827]/70 block">
                      Student Name <strong className="text-red-500">*</strong>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter full name" 
                      className="w-full text-xs font-semibold px-4 py-3 bg-teal-50/30 border border-teal-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111827]/70 block">
                      WhatsApp Phone Number <strong className="text-red-500">*</strong>
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number" 
                      className="w-full text-xs font-semibold px-4 py-3 bg-teal-50/30 border border-teal-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111827]/70 block">
                      Class / Grade
                    </label>
                    <select 
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full text-xs font-semibold px-4 py-3 bg-teal-50/30 border border-teal-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="Class 6-8">Class 6 - 8 (Foundation)</option>
                      <option value="Class 9-10">Class 9 - 10 (School Batch)</option>
                      <option value="Class 11-12">Class 11 - 12 (Board + JEE/NEET)</option>
                      <option value="JEE Droppers">JEE Intensive (Class 12 & Droppers)</option>
                      <option value="NEET Droppers">NEET Intensive (Class 12 & Droppers)</option>
                      <option value="Olympiads">Olympiad Preparation (All Classes)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#111827]/70 block">
                      Preferred Batch
                    </label>
                    <select 
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      className="w-full text-xs font-semibold px-4 py-3 bg-teal-50/30 border border-teal-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="Foundation Batch">Foundation Batch (4 PM - 6 PM)</option>
                      <option value="School Batch">School Batch (6 PM - 8 PM)</option>
                      <option value="Board + JEE/NEET Batch">Board + JEE/NEET Batch (4 PM - 7 PM)</option>
                      <option value="Advanced Batch">Advanced Batch (7 PM - 9 PM)</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full font-outfit text-xs font-bold uppercase tracking-wider py-3.5 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300 mt-2 shadow-lg shadow-teal-500/10"
                  >
                    Confirm Registration & Book
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FuturePath;
