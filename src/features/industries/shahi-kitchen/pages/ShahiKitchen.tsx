import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  X,
  Plus,
  Minus,
  MapPin,
  Phone,
  Clock,
  Star,
  Shield,
  Percent,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Info
} from 'lucide-react';
import { ShowcaseNavigation } from '../../../../components/shared/ShowcaseNavigation';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  isVeg: boolean;
  isBestseller?: boolean;
  image: string;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export const ShahiKitchen: React.FC = () => {
  const navigate = useNavigate();
  
  // Custom Google Fonts loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Dancing+Script:wght@600;700&family=Outfit:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Menu items data matching categories
  const menuItems: MenuItem[] = [
    // Pizza
    {
      id: 'p1',
      name: 'Cheese Burst Pizza',
      category: 'Pizza',
      price: 150,
      description: 'Loaded with double liquid cheese, fresh mozzarella, and aromatic Shahi herbs.',
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'p2',
      name: 'Shahi Special Veg Pizza',
      category: 'Pizza',
      price: 179,
      description: 'Golden paneer cubes, mushrooms, red bell peppers, black olives, and sweet corn.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'p3',
      name: 'Classic Margherita Pizza',
      category: 'Pizza',
      price: 120,
      description: 'Single cheese blend over fresh basil leaves and our signature tangy house pizza sauce.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80'
    },
    // Burgers
    {
      id: 'b1',
      name: 'Veg Cheese Burger',
      category: 'Burgers',
      price: 59,
      description: 'Crispy herb potato patty topped with a processed cheese slice, onion, lettuce, and rich eggless mayo.',
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'b2',
      name: 'Double Patty Maharaja Veg Burger',
      category: 'Burgers',
      price: 129,
      description: 'Double veg patty layered with double cheese, juicy tomato slices, and custom Shahi burger dressing.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'b3',
      name: 'Shahi Spicy Chicken Burger',
      category: 'Burgers',
      price: 149,
      description: 'Crunchy golden-fried chicken breast fillet topped with spicy fire sauce, fresh lettuce, and gherkins.',
      isVeg: false,
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80'
    },
    // Momos
    {
      id: 'm1',
      name: 'Kurkure Momos',
      category: 'Momos',
      price: 100,
      description: 'Double coated crunchy fried dumplings filled with paneer and herbs, served with fire sauce.',
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm2',
      name: 'Steamed Paneer Momos (Full)',
      category: 'Momos',
      price: 99,
      description: '8 pieces of soft steamed flour dumplings filled with seasoned grated paneer and spring onions.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm3',
      name: 'Cheese Masala Momos',
      category: 'Momos',
      price: 119,
      description: 'Steamed momos tossed in tandoori spices and baked under a blanket of liquid cheese.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
    },
    // Sandwiches
    {
      id: 's1',
      name: 'Paneer Tikka Sandwich',
      category: 'Sandwiches',
      price: 60,
      description: 'Triple layered grilled sandwich filled with marinated paneer tikka bits and coriander mint chutney.',
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 's2',
      name: 'Corn & Cheese Sandwich',
      category: 'Sandwiches',
      price: 79,
      description: 'Sweet golden corn and melted mozzarella mixture pressed between butter-brushed breads.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57900?auto=format&fit=crop&w=600&q=80'
    },
    // Chinese
    {
      id: 'c1',
      name: 'Schezwan Noodles',
      category: 'Chinese',
      price: 109,
      description: 'Wok-tossed Hakka noodles with bell peppers, cabbage, onion, and a fiery in-house Schezwan sauce.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'c2',
      name: 'Manchurian Dry (Full)',
      category: 'Chinese',
      price: 119,
      description: 'Crispy deep-fried mixed vegetable balls tossed in soy, ginger, garlic, and green onion sauce.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
    },
    // French Fries
    {
      id: 'f1',
      name: 'Peri Peri Fries',
      category: 'French Fries',
      price: 79,
      description: 'Crisp golden potato fingers dusted liberally with dry hot African peri-peri seasoning.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'f2',
      name: 'Cheesy Loaded Fries',
      category: 'French Fries',
      price: 119,
      description: 'Fries drenched in warm liquid cheese sauce, garnished with pickled jalapenos and spring onion greens.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80'
    },
    // South Indian
    {
      id: 'si1',
      name: 'Butter Masala Dosa',
      category: 'South Indian',
      price: 99,
      description: 'Thin crispy fermented rice crepe smeared with hot butter and loaded with savory potato masala.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'si2',
      name: 'Idli Sambhar (2 Pcs)',
      category: 'South Indian',
      price: 59,
      description: 'Fluffy steamed rice cakes served with hot lentils sambhar and coconut chutney.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80'
    },
    // Indian Meals
    {
      id: 'im1',
      name: 'Shahi Paneer Thali',
      category: 'Indian Meals',
      price: 149,
      description: 'Rich Shahi Paneer, creamy Dal Makhani, 2 Butter Roti, Jeera Rice, Salad, and Gulab Jamun.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'im2',
      name: 'Chole Bhature (2 Pcs)',
      category: 'Indian Meals',
      price: 99,
      description: 'Flavorful spiced chickpeas cooked Punjabi style, served with two hot and puffy bhature.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    // Kunafa Delights
    {
      id: 'kd1',
      name: 'Kunafa Delight (Classic)',
      category: 'Kunafa Delights',
      price: 249,
      description: 'Classic vermicelli dessert with a hot cheese core, baked crispy and drizzled with orange blossom syrup.',
      isVeg: true,
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'kd2',
      name: 'Nutella Kunafa',
      category: 'Kunafa Delights',
      price: 279,
      description: 'Our crispy golden cheese kunafa layered and topped with molten Nutella chocolate sauce.',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Categories list matching mockup
  const categories = [
    'All',
    'Pizza',
    'Burgers',
    'Momos',
    'Sandwiches',
    'Chinese',
    'French Fries',
    'South Indian',
    'Indian Meals',
    'Kunafa Delights'
  ];

  // States
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Checkout Form Details (autofills from localstorage)
  const [customerName, setCustomerName] = useState(() => localStorage.getItem('shahi_customer_name') || '');
  const [customerPhone, setCustomerPhone] = useState(() => localStorage.getItem('shahi_customer_phone') || '');
  const [customerAddress, setCustomerAddress] = useState(() => localStorage.getItem('shahi_customer_address') || '');
  const [customerLandmark, setCustomerLandmark] = useState(() => localStorage.getItem('shahi_customer_landmark') || '');
  const [customerArea, setCustomerArea] = useState(() => localStorage.getItem('shahi_customer_area') || 'IPS Corridor');
  
  // Delivery Verification State
  const [searchAreaInput, setSearchAreaInput] = useState('');
  const [deliveryResult, setDeliveryResult] = useState<{
    status: 'success' | 'warning' | 'error' | null;
    message: string;
  }>({ status: null, message: '' });

  // Refs for scrolling
  const menuSectionRef = useRef<HTMLDivElement>(null);
  const bestSellersRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Filter menu items
  const filteredMenuItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !vegOnly || item.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.item.id === item.id);
      if (existing) {
        return prevCart.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.item.id === itemId);
      if (existing && existing.quantity > 1) {
        return prevCart.map(i => i.item.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prevCart.filter(i => i.item.id !== itemId);
    });
  };

  const getCartSubtotal = () => {
    return cart.reduce((acc, current) => acc + (current.item.price * current.quantity), 0);
  };

  const getDiscount = () => {
    const subtotal = getCartSubtotal();
    return subtotal > 199 ? Math.round(subtotal * 0.1) : 0; // 10% first order discount above ₹199
  };

  const getDeliveryFee = () => {
    const subtotal = getCartSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 199 ? 0 : 20; // Free delivery above 199 as per header strip
  };

  const getCartTotal = () => {
    return getCartSubtotal() - getDiscount() + getDeliveryFee();
  };

  const getCartTotalItemsCount = () => {
    return cart.reduce((acc, current) => acc + current.quantity, 0);
  };

  // Verify Delivery Area Input
  const handleVerifyDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchAreaInput.trim()) {
      setDeliveryResult({ status: 'warning', message: 'Please enter your area or landmark name.' });
      return;
    }

    const query = searchAreaInput.toLowerCase().trim();
    
    // Delivery area sets
    const successAreas = ['ips', 'ips academy', 'ips hostel', 'silicon', 'silicon city', 'silicon flats', 'cat road', 'cat gate', 'cat square', 'rau circle', 'rau market', 'rau railway', 'shree krishna paradise', 'krishna paradise'];
    const boundaryAreas = ['emerald heights', 'emerald', 'iim', 'iim indore', 'iim gate', 'chouhan nagar', 'pigdamber'];

    const matchesSuccess = successAreas.some(area => query.includes(area));
    const matchesBoundary = boundaryAreas.some(area => query.includes(area));

    if (matchesSuccess) {
      setDeliveryResult({
        status: 'success',
        message: '🟢 Delivery available! Minimum order: ₹100. Delivery fee: ₹20 (Free on orders above ₹199).'
      });
    } else if (matchesBoundary) {
      setDeliveryResult({
        status: 'warning',
        message: '🟡 Boundary Area. We deliver here with slightly extended wait times. Min. order: ₹200.'
      });
    } else {
      setDeliveryResult({
        status: 'error',
        message: '❌ Outside standard 5km zone. Please contact us directly at +91 9111221940 to place a manual delivery order.'
      });
    }
  };

  // Generate WhatsApp Order Payload and redirect
  const handleWhatsAppOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !customerPhone || !customerAddress) {
      alert('Please fill out Name, Phone Number, and Delivery Address to complete your order.');
      return;
    }

    // Cache info in localStorage
    localStorage.setItem('shahi_customer_name', customerName);
    localStorage.setItem('shahi_customer_phone', customerPhone);
    localStorage.setItem('shahi_customer_address', customerAddress);
    localStorage.setItem('shahi_customer_landmark', customerLandmark);
    localStorage.setItem('shahi_customer_area', customerArea);

    const itemsText = cart.map((c, index) => {
      const emoji = c.item.category.includes('Pizza') ? '🍕' :
                    c.item.category.includes('Burgers') ? '🍔' :
                    c.item.category.includes('Momos') ? '🥟' :
                    c.item.category.includes('Sandwiches') ? '🥪' :
                    c.item.category.includes('Chinese') ? '🍜' :
                    c.item.category.includes('Kunafa') ? '🍮' : '🍲';
      return `${index + 1}. ${emoji} ${c.quantity}x ${c.item.name} - ₹${c.item.price * c.quantity}`;
    }).join('\n');

    const subtotal = getCartSubtotal();
    const discount = getDiscount();
    const delivery = getDeliveryFee();
    const total = getCartTotal();

    const orderPayload = `*🟢 NEW ORDER - SHAHI KITCHEN WEBSITE*
----------------------------------------
*📍 CUSTOMER DETAILS:*
• Name: ${customerName}
• Phone: +91 ${customerPhone}
• Address: ${customerAddress}
• Landmark: ${customerLandmark || 'None Specified'}
• Area: ${customerArea}
----------------------------------------
*🛒 ITEMS ORDERED:*
${itemsText}
----------------------------------------
*💰 BILLING SUMMARY:*
• Subtotal: ₹${subtotal}
${discount > 0 ? `• First Order Discount (10%): -₹${discount}\n` : ''}• Delivery Fee: ₹${delivery === 0 ? 'FREE (Orders above ₹199)' : `₹${delivery}`}
• *Net Payable:* *₹${total}*
----------------------------------------
*💳 PAYMENT TYPE:*
• UPI (Pay on Delivery via QR)
----------------------------------------
_Generated via ShahiKitchen.com_`;

    const encodedText = encodeURIComponent(orderPayload);
    const whatsappUrl = `https://wa.me/919111221940?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close drawer
    setCart([]);
    setIsCartOpen(false);
    alert('Order details sent to WhatsApp! Press "Send" in the WhatsApp chat to submit your order to the Shahi Kitchen manager.');
  };

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const navbarHeight = 110;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleScroll(menuSectionRef);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-brand-white font-outfit selection:bg-brand-orange selection:text-white">
      <ShowcaseNavigation 
        sectorName="Hospitality"
        sectorSlug="hospitality"
        showcaseName="Shahi Kitchen"
        accentColor="#F97316" // brand-orange
        theme="dark"
      />
      
      {/* 1. APP-LIKE FIXED BOTTOM NAVIGATION (MOBILE ONLY) */}
      <style>{`
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        .font-serif-royal {
          font-family: 'Cinzel', Georgia, serif;
        }
        .wood-texture {
          background-color: #241207;
          background-image: radial-gradient(circle at 100% 150%, #2f170a 24%, #241207 25%, #241207 28%, #2f170a 29%, #2f170a 36%, #241207 37%, #241207 40%, #2f170a 41%, #2f170a 48%, #241207 49%, #241207 52%, #2f170a 53%, #2f170a 60%, #241207 61%, #241207 64%, #2f170a 65%, #2f170a 72%, #241207 73%, #241207 76%, #2f170a 77%, #2f170a 84%, #241207 85%, #241207 88%, #2f170a 89%, #2f170a 96%, #241207 97%, #241207 100%);
          background-size: 100px 100px;
        }
        .wood-texture-dark {
          background-color: #1a0a03;
          background-image: radial-gradient(circle at 100% 150%, #230d04 24%, #1a0a03 25%, #1a0a03 28%, #230d04 29%, #230d04 36%, #1a0a03 37%, #1a0a03 40%, #230d04 41%, #230d04 48%, #1a0a03 49%, #1a0a03 52%, #230d04 53%, #230d04 60%, #1a0a03 61%, #1a0a03 64%, #230d04 65%, #230d04 72%, #1a0a03 73%, #1a0a03 76%, #230d04 77%, #230d04 84%, #1a0a03 85%, #1a0a03 88%, #230d04 89%, #230d04 96%, #1a0a03 97%, #1a0a03 100%);
          background-size: 100px 100px;
        }
      `}</style>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-[#1E0D07]/95 border-b border-[#FAF5EB]/10 backdrop-blur-md shadow-xl py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Back Button (Hub Exit) */}
          <button 
            onClick={() => navigate('/sectors/hospitality')}
            className="flex items-center text-xs tracking-wider uppercase font-semibold text-[#FAF5EB]/60 hover:text-[#FAF5EB] transition-colors"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* Shahi Kitchen Brand Logo */}
          <div className="flex flex-col items-center justify-center text-center cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center justify-center space-x-1 text-[#e0b252]">
              <span className="text-xl">👑</span>
            </div>
            <h1 className="font-serif-royal text-2xl md:text-3xl font-extrabold tracking-wide text-[#FAF5EB] -mt-1 hover:text-[#e0b252] transition-colors">
              Shahi Kitchen
            </h1>
            <span className="font-script text-xs text-[#e0b252] tracking-wider -mt-1 font-semibold">
              Taste That Rules Hearts
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-xs tracking-wider uppercase text-[#FAF5EB]/80">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#e0b252] transition-colors">Home</button>
            <button onClick={() => handleScroll(menuSectionRef)} className="hover:text-[#e0b252] transition-colors">Menu</button>
            <button onClick={() => handleScroll(bestSellersRef)} className="hover:text-[#e0b252] transition-colors">Specials</button>
            <button onClick={() => handleScroll(reviewsRef)} className="hover:text-[#e0b252] transition-colors">Reviews</button>
            <button onClick={() => handleScroll(contactRef)} className="hover:text-[#e0b252] transition-colors">Contact</button>
          </nav>

          {/* Cart & WhatsApp CTA */}
          <div className="flex items-center space-x-3">
            {/* Shopping Cart Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#e0b252]/10 hover:bg-[#e0b252]/20 border border-[#e0b252]/20 rounded-full text-[#e0b252] transition-all flex items-center justify-center"
            >
              <ShoppingBag size={18} />
              {getCartTotalItemsCount() > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#27AE60] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {getCartTotalItemsCount()}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <a 
              href="https://wa.me/919111221940" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-[#e0b252] hover:bg-[#c59b27] text-[#1E0D07] font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={14} className="fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Marquee Info Strip */}
      <div className="bg-[#FAF5EB] text-[#962624] py-2.5 px-6 font-semibold text-xs text-center border-b border-[#FAF5EB]/10 z-10 shadow-sm flex items-center justify-center space-x-2">
        <span>🚚 We Deliver Happiness! 🧡</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#962624]" />
        <span>Free Delivery on Orders above ₹199</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#962624] hidden sm:inline" />
        <span className="hidden sm:inline text-[#27AE60]">⭐ Get 10% OFF on your first order!</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden wood-texture py-12 md:py-16 border-b border-[#FAF5EB]/10">
        <div className="absolute inset-0 bg-[#1F0D07]/50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-serif-royal text-base md:text-xl font-bold tracking-widest text-[#e0b252] block">
                ROYAL TASTE
              </span>
              <h2 className="font-serif-royal text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-[#FAF5EB]">
                EVERY BITE
              </h2>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#e0b252] block pt-2 font-bold select-none">
                Ek Shahi Experience!
              </span>
            </div>

            <p className="font-sans text-[#FAF5EB]/80 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Taste the finest selection of Burgers, Momos, Pizza, Sandwiches, Chinese, French Fries, South Indian, Indian Meals, and royal Kunafa Delights – crafted with premium ingredients and served at pocket-friendly student prices.
            </p>

            {/* 3 Pillars Badge Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              <div className="bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 p-3 rounded-xl flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#e0b252]/10 border border-[#e0b252]/20 flex items-center justify-center text-[#e0b252]">
                  <Clock size={18} />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]">Fast Delivery</span>
                <span className="font-sans text-[9px] text-[#FAF5EB]/50">0 - 3 KM Radius</span>
              </div>
              <div className="bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 p-3 rounded-xl flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#e0b252]/10 border border-[#e0b252]/20 flex items-center justify-center text-[#e0b252]">
                  <Percent size={18} />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]">Best Value</span>
                <span className="font-sans text-[9px] text-[#FAF5EB]/50">Budget Friendly</span>
              </div>
              <div className="bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 p-3 rounded-xl flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#e0b252]/10 border border-[#e0b252]/20 flex items-center justify-center text-[#e0b252]">
                  <Shield size={18} />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]">100% Hygienic</span>
                <span className="font-sans text-[9px] text-[#FAF5EB]/50">Clean Kitchen</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button 
                onClick={() => handleScroll(menuSectionRef)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#e0b252] hover:bg-[#c59b27] text-[#1E0D07] font-extrabold text-xs tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Order Now</span>
                <ArrowRight size={14} />
              </button>
              
              <a 
                href="https://maps.google.com/?q=Rau+Circle+Indore"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#FAF5EB]/20 hover:border-[#e0b252] hover:bg-[#FAF5EB]/5 text-[#FAF5EB] font-bold text-xs tracking-wider uppercase rounded-full transition-all flex items-center justify-center space-x-2"
              >
                <MapPin size={14} className="text-[#e0b252]" />
                <span>Our Location</span>
              </a>
            </div>
          </div>

          {/* Right Image Block with 3D Overlapping Food Collage */}
          <div className="lg:col-span-6 relative flex justify-center py-6">
            {/* Dotted border circle highlight */}
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border-2 border-dashed border-[#e0b252]/20 animate-spin-slow pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Layer 1: Base Collage Image */}
              <div className="w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-[#FAF5EB]/15 bg-[#FAF5EB]/5 p-1.5 z-0 transform hover:scale-[1.02] transition-transform duration-500 relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
                  alt="Delicious Indian street food burger pizza momos"
                  className="w-full h-full object-cover rounded-2xl opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D07]/60 via-transparent to-transparent pointer-events-none rounded-3xl" />
              </div>

              {/* Layer 2: Overlapping Steaming Momos (Bottom-Left) */}
              <div className="absolute bottom-[-15px] left-[-15px] sm:bottom-[-25px] sm:left-[-25px] w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-[#1F0D07] shadow-2xl z-20 transform hover:scale-[1.05] hover:z-30 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&q=80"
                  alt="Steamed Paneer Momos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 text-[#e0b252] text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#FAF5EB]/10">Momos</div>
              </div>

              {/* Layer 3: Overlapping Sweet Kunafa (Top-Right) */}
              <div className="absolute top-[-15px] right-[-15px] sm:top-[-25px] sm:right-[-25px] w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-[#1F0D07] shadow-2xl z-10 transform hover:scale-[1.05] hover:z-30 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=400&q=80"
                  alt="Gourmet Cheese Kunafa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 text-[#e0b252] text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#FAF5EB]/10">Kunafa</div>
              </div>

              {/* Layer 4: Floating Promo Badge (Centered-Right Overlapping) */}
              <div className="absolute right-[-20px] sm:right-[-35px] bottom-[25%] bg-[#962624] text-[#FAF5EB] p-3 rounded-full shadow-2xl border border-[#e0b252]/40 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 text-center z-30 animate-pulse">
                <span className="font-script text-[10px] sm:text-xs leading-none text-[#e0b252] font-semibold">Delicious</span>
                <span className="font-serif-royal text-xs sm:text-sm font-extrabold tracking-wide uppercase leading-tight">Food</span>
                <span className="font-sans text-[7px] sm:text-[8px] tracking-widest uppercase leading-none opacity-80 mt-1">Great Mood</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Carousel/Strip */}
      <section className="bg-[#1A0A03] py-6 border-b border-[#FAF5EB]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-2 mb-6">
            <div className="flex items-center justify-center space-x-3 text-[#e0b252]/60">
              <span className="h-[1px] w-12 bg-current" />
              <span className="font-serif-royal text-xs tracking-[0.25em] font-bold text-[#e0b252]">EXPLORE OUR MENU</span>
              <span className="h-[1px] w-12 bg-current" />
            </div>
          </div>

          {/* Horizontal Scroller Container */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-[#FAF5EB]/10 scrollbar-track-transparent">
            {categories.map((cat, i) => {
              const isActive = selectedCategory === cat;
              // Map categories to food icons (lucide approximations or text labels)
              const iconMap: { [key: string]: string } = {
                'All': '🍽️',
                'Pizza': '🍕',
                'Burgers': '🍔',
                'Momos': '🥟',
                'Sandwiches': '🥪',
                'Chinese': '🍜',
                'French Fries': '🍟',
                'South Indian': '🫓',
                'Indian Meals': '🍱',
                'Kunafa Delights': '🍮'
              };

              return (
                <button
                  key={i}
                  onClick={() => handleCategorySelect(cat)}
                  className={`flex flex-col items-center justify-center shrink-0 w-24 h-24 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#e0b252] border-[#e0b252] text-[#1E0D07] shadow-lg scale-105' 
                      : 'bg-[#FAF5EB]/5 border-[#FAF5EB]/10 text-[#FAF5EB]/80 hover:bg-[#FAF5EB]/10 hover:border-[#e0b252]/40'
                  }`}
                >
                  <span className="text-2xl mb-2">{iconMap[cat] || '🍲'}</span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-center px-1 line-clamp-1">
                    {cat.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specials & Best Sellers Section */}
      <section ref={bestSellersRef} className="bg-[#FAF5EB] text-[#1E0D07] py-14 border-b border-[#FAF5EB]/10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Dark Card - Best Sellers Menu */}
          <div className="lg:col-span-4 rounded-3xl bg-[#1E0D07] text-[#FAF5EB] p-8 border border-[#e0b252]/30 flex flex-col justify-between shadow-2xl relative overflow-hidden wood-texture-dark">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#e0b252]/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-script text-xl text-[#e0b252] font-semibold">Our Specials</span>
                <h3 className="font-serif-royal text-3xl font-extrabold tracking-tight text-[#FAF5EB]">Best Sellers</h3>
              </div>
              
              <ul className="divide-y divide-[#FAF5EB]/10 text-sm">
                {menuItems.filter(item => item.isBestseller).map((item) => (
                  <li key={item.id} className="py-4 flex justify-between items-center group">
                    <div className="space-y-0.5 max-w-[200px]">
                      <div className="flex items-center space-x-1.5">
                        <span className={`w-2 h-2 rounded-full inline-block ${item.isVeg ? 'bg-[#27AE60]' : 'bg-[#962624]'}`} />
                        <span className="font-bold text-[#FAF5EB] group-hover:text-[#e0b252] transition-colors">{item.name}</span>
                      </div>
                      <p className="text-[10px] text-[#FAF5EB]/50 line-clamp-1">{item.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-[#e0b252] font-mono">₹{item.price}</span>
                      <button 
                        onClick={() => addToCart(item)}
                        className="bg-[#FAF5EB]/10 hover:bg-[#e0b252] hover:text-[#1E0D07] text-[#FAF5EB] p-1.5 rounded-full border border-[#FAF5EB]/10 hover:border-[#e0b252] transition-all flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => handleScroll(menuSectionRef)}
              className="mt-8 w-full py-3 bg-[#e0b252] hover:bg-[#c59b27] text-[#1E0D07] font-bold text-xs tracking-wider uppercase rounded-full shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>View Full Menu</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Center Column - Overlaying Images */}
          <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-auto flex items-center justify-center py-6">
            {/* Steaming Pizza image (top back) */}
            <div className="absolute w-[210px] sm:w-[260px] aspect-square rounded-2xl overflow-hidden border border-[#1E0D07]/10 shadow-lg top-0 left-4 z-10 transition-transform hover:scale-108 duration-300">
              <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80" alt="Steaming Pizza" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-[#1E0D07]/80 text-[#FAF5EB] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Pizza</div>
            </div>

            {/* Steaming Momos image (front middle) */}
            <div className="relative w-[230px] sm:w-[280px] aspect-square rounded-3xl overflow-hidden border-4 border-[#FAF5EB] shadow-2xl z-20 transition-transform hover:scale-108 duration-300 -mt-4">
              <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=500&q=80" alt="Juicy Momos" className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 bg-[#962624] text-white p-2 rounded-full shadow-md text-center flex flex-col items-center justify-center w-12 h-12 border border-[#e0b252]/20">
                <span className="font-script text-[9px] text-[#e0b252] font-semibold leading-none">Must</span>
                <span className="font-sans text-[10px] font-extrabold uppercase leading-none">Try!</span>
              </div>
            </div>

            {/* Kunafa delight image (bottom right back) */}
            <div className="absolute w-[180px] sm:w-[230px] aspect-square rounded-2xl overflow-hidden border border-[#1E0D07]/10 shadow-lg bottom-0 right-4 z-10 transition-transform hover:scale-108 duration-300">
              <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500&q=80" alt="Sweet Kunafa Dessert" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-[#1E0D07]/80 text-[#FAF5EB] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Kunafa</div>
            </div>
          </div>

          {/* Right Card - Quality Badges & Chinese Special */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-[#FAF5EB]/40 p-8 shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <span className="font-serif-royal text-xs tracking-widest text-[#e0b252] font-bold block">• SHAAHI FLAVOURS •</span>
                <h3 className="font-script text-3xl font-bold text-[#962624] select-none">Made with Love</h3>
              </div>

              {/* Value Badges Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#d6c7b0] flex items-center justify-center text-[#962624]">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-[#1E0D07]/80 leading-tight">Fresh Ingredients</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#d6c7b0] flex items-center justify-center text-[#962624]">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-[#1E0D07]/80 leading-tight">Authentic Recipes</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#d6c7b0] flex items-center justify-center text-[#962624]">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-[#1E0D07]/80 leading-tight">Pure Veg Options</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#d6c7b0] flex items-center justify-center text-[#962624]">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-[#1E0D07]/80 leading-tight">Pocket Friendly</span>
                </div>
              </div>
            </div>

            {/* Chinese Promo Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#1E0D07] border border-[#FAF5EB]/10 flex flex-col justify-end p-4 group">
              <img 
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" 
                alt="Chinese Special Hakka Noodles" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="relative z-20 space-y-1">
                <span className="font-script text-base text-[#e0b252] font-semibold">Taste the Orient!</span>
                <h4 className="font-serif-royal text-lg font-bold text-white leading-tight">Schezwan Spiced Noodles</h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-bold text-white font-mono">₹109</span>
                  <button 
                    onClick={() => {
                      const item = menuItems.find(i => i.id === 'c1');
                      if (item) addToCart(item);
                    }}
                    className="bg-[#e0b252] text-[#1E0D07] hover:bg-[#c59b27] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider transition-all"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-[#241207] border-b border-[#FAF5EB]/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 md:gap-x-12 text-center text-xs tracking-wider uppercase font-semibold text-[#FAF5EB]/80">
          <div className="flex items-center space-x-2">
            <span className="text-[#e0b252]">🛵</span>
            <span>Quick Local Delivery</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FAF5EB]/30 hidden sm:inline" />
          <div className="flex items-center space-x-2">
            <span className="text-[#e0b252]">📦</span>
            <span>Safe &amp; Hygienic Packing</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FAF5EB]/30 hidden sm:inline" />
          <div className="flex items-center space-x-2">
            <span className="text-[#e0b252]">💰</span>
            <span>Affordable Prices</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FAF5EB]/30 hidden sm:inline" />
          <div className="flex items-center space-x-2">
            <span className="text-[#e0b252]">🟢</span>
            <span>100% Vegetarian Options</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FAF5EB]/30 hidden sm:inline" />
          <div className="flex items-center space-x-2">
            <span className="text-[#e0b252]">🤝</span>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Full Menu Section (Searchable & Filterable) */}
      <section ref={menuSectionRef} className="py-14 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#FAF5EB]/10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="font-serif-royal text-xs font-bold uppercase tracking-[0.25em] text-[#e0b252]">
              SHAHI CATLOGUE
            </span>
            <h2 className="font-serif-royal text-3xl md:text-4xl font-extrabold text-[#FAF5EB]">
              Royal Food Menu
            </h2>
            <p className="font-sans text-xs text-[#FAF5EB]/60 leading-relaxed">
              Find your favorite foods instantly. Filter by category, toggle vegetarian items, or search directly.
            </p>
          </div>

          {/* Filtering Control Bar */}
          <div className="bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-center shadow-md">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FAF5EB]/40 w-4 h-4" />
              <input
                type="text"
                placeholder="Search momos, burgers, pizzas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-full py-2.5 pl-11 pr-5 text-sm placeholder-[#FAF5EB]/40 focus:outline-none focus:border-[#e0b252] focus:ring-1 focus:ring-[#e0b252] text-[#FAF5EB]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FAF5EB]/40 hover:text-[#FAF5EB]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Selector (dropdown approximation on mobile, grid on desktop) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FAF5EB]/50 mr-2 hidden lg:inline">Quick Filter:</span>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-full py-2.5 px-6 text-sm text-[#FAF5EB]/80 focus:outline-none focus:border-[#e0b252]"
                >
                  {categories.map((cat, i) => (
                    <option key={i} value={cat} className="bg-[#1F0D07] text-[#FAF5EB]">{cat}</option>
                  ))}
                </select>
              </div>

              {/* Veg Only Toggle */}
              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center space-x-2 rounded-full py-2.5 px-6 border text-xs tracking-wider uppercase font-bold transition-all ${
                  vegOnly 
                    ? 'bg-[#27AE60]/20 border-[#27AE60] text-[#27AE60]' 
                    : 'bg-[#FAF5EB]/5 border-[#FAF5EB]/10 text-[#FAF5EB]/60 hover:border-[#FAF5EB]/30'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full inline-block bg-[#27AE60] border border-white ${vegOnly ? 'scale-110' : ''}`} />
                <span>Veg Only</span>
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          {filteredMenuItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenuItems.map((item) => {
                const cartQty = cart.find(c => c.item.id === item.id)?.quantity || 0;
                
                return (
                  <div 
                    key={item.id}
                    className="bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#e0b252]/40"
                  >
                    {/* Item Image area */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF5EB]/5">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Bestseller Badge */}
                      {item.isBestseller && (
                        <span className="absolute top-3 left-3 bg-[#962624] text-white text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded shadow-md border border-[#e0b252]/20">
                          Bestseller
                        </span>
                      )}

                      {/* Veg indicator badge */}
                      <span className="absolute top-3 right-3 bg-black/60 rounded px-1.5 py-0.5 border border-[#FAF5EB]/15 flex items-center justify-center">
                        <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-[#27AE60]' : 'bg-[#962624]'}`} />
                        <span className="text-[8px] font-bold text-white uppercase ml-1.5 tracking-wider">{item.isVeg ? 'Veg' : 'Non-Veg'}</span>
                      </span>
                    </div>

                    {/* Content area: Food Image > Price > Description layout */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-serif-royal text-lg font-bold text-[#FAF5EB] group-hover:text-[#e0b252] transition-colors leading-tight mb-1.5">
                          {item.name}
                        </h4>
                        <div className="text-[#e0b252] font-mono text-xl font-bold mb-2">
                          ₹{item.price}
                        </div>
                        <p className="text-xs text-[#FAF5EB]/65 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Add Button */}
                      <div className="border-t border-[#FAF5EB]/5 pt-4 flex items-center justify-between">
                        <span className="text-[10px] text-[#FAF5EB]/40 font-mono">Category: {item.category}</span>
                        
                        {cartQty > 0 ? (
                          <div className="flex items-center space-x-2 bg-[#e0b252] text-[#1E0D07] rounded-full p-1 border border-[#e0b252]">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all text-[#1E0D07]"
                            >
                              <Minus size={12} strokeWidth={2.5} />
                            </button>
                            <span className="font-bold text-xs px-2 min-w-[16px] text-center">{cartQty}</span>
                            <button 
                              onClick={() => addToCart(item)}
                              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all text-[#1E0D07]"
                            >
                              <Plus size={12} strokeWidth={2.5} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-[#FAF5EB]/5 hover:bg-[#e0b252] border border-[#FAF5EB]/10 hover:border-[#e0b252] text-[#FAF5EB] hover:text-[#1E0D07] font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all flex items-center justify-center space-x-1"
                          >
                            <Plus size={12} />
                            <span>Add</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 rounded-2xl max-w-md mx-auto space-y-3">
              <Info className="w-12 h-12 text-[#e0b252] mx-auto stroke-[1.2]" />
              <h4 className="font-serif-royal text-lg text-[#FAF5EB]">No Dishes Found</h4>
              <p className="text-xs text-[#FAF5EB]/50 max-w-xs mx-auto leading-relaxed">
                We couldn't find any dishes matching "{searchQuery}" under {selectedCategory}. Try resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setVegOnly(false);
                }}
                className="mt-2 text-xs font-bold text-[#e0b252] underline hover:text-[#c59b27]"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Delivery Coverage Section & Input Validator */}
      <section className="bg-[#FAF5EB] text-[#1E0D07] py-14 border-b border-[#FAF5EB]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-serif-royal text-xs font-bold uppercase tracking-[0.25em] text-[#e0b252]">
              LOCAL COVERAGE
            </span>
            <h2 className="font-serif-royal text-3xl md:text-4xl font-extrabold text-[#1E0D07]">
              Fast Delivery Radius
            </h2>
            <p className="font-sans text-sm text-[#1E0D07]/70 leading-relaxed">
              We operate a dedicated delivery fleet servicing a 3–5 km zone centered in <strong>Rau, Indore</strong>. This allows us to guarantee hot, steaming meals to students and families in under 30 minutes!
            </p>

            {/* Coverage Landmarks Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2">
                <span className="text-[#962624] font-bold">📍</span>
                <div className="text-xs">
                  <strong className="text-[#1E0D07] block font-semibold">IPS Corridor</strong>
                  <span className="text-[#1E0D07]/60">IPS Academy &amp; Hostels</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#962624] font-bold">📍</span>
                <div className="text-xs">
                  <strong className="text-[#1E0D07] block font-semibold">Silicon City</strong>
                  <span className="text-[#1E0D07]/60">Silicon Blocks &amp; Flats</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#962624] font-bold">📍</span>
                <div className="text-xs">
                  <strong className="text-[#1E0D07] block font-semibold">CAT Road Area</strong>
                  <span className="text-[#1E0D07]/60">CAT Square &amp; Gate 1/2</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#962624] font-bold">📍</span>
                <div className="text-xs">
                  <strong className="text-[#1E0D07] block font-semibold">Rau Circle</strong>
                  <span className="text-[#1E0D07]/60">Shree Krishna Paradise area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Input Validator Panel */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-[#FAF5EB]/50 p-8 shadow-xl space-y-6">
            <div className="space-y-1.5">
              <h3 className="font-serif-royal text-xl font-bold text-[#1E0D07] leading-tight">Check Delivery Availability</h3>
              <p className="text-xs text-[#1E0D07]/60">Input your hostel, society name, or landmark below to see if we deliver to your door.</p>
            </div>

            <form onSubmit={handleVerifyDelivery} className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1E0D07]/40 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="e.g. IPS Girls Hostel, Silicon City, CAT Square" 
                  value={searchAreaInput}
                  onChange={(e) => setSearchAreaInput(e.target.value)}
                  className="w-full bg-[#FAF5EB]/40 border border-[#d6c7b0] rounded-xl py-3 pl-11 pr-5 text-sm placeholder-[#1E0D07]/40 focus:outline-none focus:border-[#962624] text-[#1E0D07]"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-[#962624] hover:bg-[#7c1d1a] text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md"
              >
                Validate Area
              </button>
            </form>

            {/* Validation Result Box */}
            {deliveryResult.status && (
              <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                deliveryResult.status === 'success' ? 'bg-[#27AE60]/5 border-[#27AE60]/30 text-[#27AE60]' :
                deliveryResult.status === 'warning' ? 'bg-[#FAF5EB] border-[#FAF5EB] text-[#962624]' :
                'bg-[#962624]/5 border-[#962624]/20 text-[#962624]'
              }`}>
                {deliveryResult.message}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* How Ordering Works (Process Timeline) */}
      <section className="py-14 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#FAF5EB]/10">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="font-serif-royal text-xs font-bold uppercase tracking-[0.25em] text-[#e0b252]">EASY METHOD</span>
            <h2 className="font-serif-royal text-3xl font-extrabold text-[#FAF5EB]">How Ordering Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EB]/5 border border-[#e0b252]/30 flex items-center justify-center font-serif-royal text-xl font-bold text-[#e0b252] shadow-md z-10">
                01
              </div>
              <h4 className="font-serif-royal text-lg font-bold text-[#FAF5EB]">Select Your Food</h4>
              <p className="text-xs text-[#FAF5EB]/60 leading-relaxed max-w-xs">
                Browse our menu, add the dishes you crave to your shopping cart, and tap the checkout button.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] border-t border-dashed border-[#e0b252]/20 -z-0" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EB]/5 border border-[#e0b252]/30 flex items-center justify-center font-serif-royal text-xl font-bold text-[#e0b252] shadow-md z-10">
                02
              </div>
              <h4 className="font-serif-royal text-lg font-bold text-[#FAF5EB]">Submit on WhatsApp</h4>
              <p className="text-xs text-[#FAF5EB]/60 leading-relaxed max-w-xs">
                Fill in your address. The website compiles the cart details into a structured receipt message and launches WhatsApp.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] border-t border-dashed border-[#e0b252]/20 -z-0" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EB]/5 border border-[#e0b252]/30 flex items-center justify-center font-serif-royal text-xl font-bold text-[#e0b252] shadow-md">
                03
              </div>
              <h4 className="font-serif-royal text-lg font-bold text-[#FAF5EB]">Confirm &amp; Dine</h4>
              <p className="text-xs text-[#FAF5EB]/60 leading-relaxed max-w-xs">
                The manager sends an instant confirmation with an online payment link or scans UPI on delivery. Food arrives hot in 30 minutes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram / Reels Showcase */}
      <section className="py-14 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#FAF5EB]/10">
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="font-serif-royal text-xs font-bold uppercase tracking-[0.25em] text-[#e0b252]">OUR SOCIAL FEED</span>
            <h2 className="font-serif-royal text-3xl font-extrabold text-[#FAF5EB]">Instagram &amp; Reels Showcase</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
            ].map((imgSrc, i) => (
              <div 
                key={i} 
                className="group relative aspect-square rounded-2xl overflow-hidden shadow border border-[#FAF5EB]/10 bg-[#FAF5EB]/5 cursor-pointer"
              >
                <img 
                  src={imgSrc} 
                  alt={`Instagram Showcase ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" 
                />
                <div className="absolute inset-0 bg-[#962624]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-bold uppercase tracking-widest font-sans bg-[#1E0D07]/90 px-3 py-1 rounded-full shadow-md border border-[#e0b252]/30">View Post</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section ref={reviewsRef} className="bg-[#FAF5EB] text-[#1E0D07] py-14 border-b border-[#FAF5EB]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Testimonial Cards Columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="font-serif-royal text-xs font-bold uppercase tracking-[0.25em] text-[#FAF5EB] bg-[#1E0D07] px-3 py-1 rounded inline-block">
                HAPPY CLIENTS
              </span>
              <h2 className="font-serif-royal text-3xl font-extrabold text-[#1E0D07]">Our Happy Customers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Testimonial 1 */}
              <div className="bg-white border border-[#FAF5EB]/65 p-6 rounded-2xl shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Stars */}
                  <div className="flex text-[#e0b252]">
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                  </div>
                  <p className="text-xs text-[#1E0D07]/70 leading-relaxed italic">
                    "Amazing taste at such affordable prices. My absolute go-to place for pizza and hot kurkure momos! Fast delivery near IPS."
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E0D07]/10 flex items-center justify-center font-bold text-xs text-[#962624]">RS</div>
                  <div className="text-[10px]">
                    <strong className="text-[#1E0D07] block font-semibold">Rohit Sharma</strong>
                    <span className="text-[#1E0D07]/50 block">IPS Academy</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border border-[#FAF5EB]/65 p-6 rounded-2xl shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex text-[#e0b252]">
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                  </div>
                  <p className="text-xs text-[#1E0D07]/70 leading-relaxed italic">
                    "The Kunafa is just wow! Hot, crispy crust with gooey stretching cheese. Excellent service and very fast delivery."
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E0D07]/10 flex items-center justify-center font-bold text-xs text-[#962624]">NJ</div>
                  <div className="text-[10px]">
                    <strong className="text-[#1E0D07] block font-semibold">Neha Jain</strong>
                    <span className="text-[#1E0D07]/50 block">Silicon City Resident</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white border border-[#FAF5EB]/65 p-6 rounded-2xl shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex text-[#e0b252]">
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                  </div>
                  <p className="text-xs text-[#1E0D07]/70 leading-relaxed italic">
                    "Best street-food in Rau! Highly recommend the Veg Cheese Burger and Paneer Tikka Sandwiches. Super pocket friendly."
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E0D07]/10 flex items-center justify-center font-bold text-xs text-[#962624]">AV</div>
                  <div className="text-[10px]">
                    <strong className="text-[#1E0D07] block font-semibold">Amit Verma</strong>
                    <span className="text-[#1E0D07]/50 block">Coaching Student</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Enlarge QR Code Widget */}
          <div className="lg:col-span-5 rounded-3xl bg-[#1E0D07] text-[#FAF5EB] p-8 border border-[#e0b252]/30 flex flex-col items-center justify-center text-center shadow-xl space-y-6 wood-texture-dark transform hover:scale-[1.02] transition-transform duration-300">
            <span className="font-serif-royal text-xs font-bold tracking-widest text-[#e0b252] uppercase">DIGITAL CONVERSION</span>
            
            {/* Mock Enlarge QR Code Visual */}
            <div className="bg-white p-5 rounded-2xl shadow-inner border border-[#FAF5EB]/10 w-56 h-56 flex flex-col items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80" 
                alt="QR Code" 
                className="w-48 h-48 object-contain opacity-10 mix-blend-multiply absolute" 
              />
              {/* Drawing simple lines as visual QR mockup */}
              <div className="w-full h-full border-4 border-dashed border-[#1E0D07]/45 rounded-lg flex items-center justify-center text-center p-3">
                <span className="font-sans text-sm font-extrabold text-[#1E0D07] leading-tight">SCAN TO VIEW MENU &amp; ORDER NOW!</span>
              </div>
            </div>

            <div className="space-y-2">
              <strong className="font-serif-royal text-base block font-bold text-[#FAF5EB]">Scan directly from Table</strong>
              <p className="text-xs text-[#FAF5EB]/50 leading-relaxed max-w-xs mx-auto">
                No app installation required. Scan this custom QR code on dining tables or print brochures to open the digital order cart immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer ref={contactRef} className="bg-[#1E0D07] text-[#FAF5EB] border-t border-[#FAF5EB]/10 pt-16 pb-8 wood-texture-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-[#e0b252] text-lg leading-none">👑</span>
              <span className="font-serif-royal text-2xl font-extrabold tracking-wide text-[#FAF5EB]">Shahi Kitchen</span>
              <span className="font-script text-[#e0b252] text-xs font-semibold tracking-wider -mt-0.5">Taste That Rules Hearts</span>
            </div>
            <p className="text-xs text-[#FAF5EB]/60 leading-relaxed max-w-sm">
              We specialize in delivering premium street-food favorites, loaded burgers, hot momos, and traditional sweet Kunafa Delights to the local Rau college community. Fresh prep, fast rider fleet, pocket-friendly deals.
            </p>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-serif-royal text-sm font-bold uppercase tracking-widest text-[#FAF5EB] border-b border-[#FAF5EB]/10 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={14} className="text-[#e0b252]" />
                <span className="font-mono text-[#FAF5EB]/80">+91 9111221940 | 9098382993</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-[#e0b252] shrink-0 mt-0.5" />
                <span className="text-[#FAF5EB]/80">Near Rau Circle, Shree Krishna Paradise Phase-1, Indore (M.P.)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={14} className="text-[#e0b252]" />
                <span className="text-[#FAF5EB]/80">11:00 AM - 11:00 PM (Open Everyday)</span>
              </li>
            </ul>
          </div>

          {/* Quick Links & Footer Socials */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-serif-royal text-sm font-bold uppercase tracking-widest text-[#FAF5EB] border-b border-[#FAF5EB]/10 pb-2">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-[#FAF5EB]/70 font-semibold uppercase tracking-wider text-[10px]">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#e0b252] text-left transition-colors">Home</button>
              <button onClick={() => handleScroll(menuSectionRef)} className="hover:text-[#e0b252] text-left transition-colors">Food Menu</button>
              <button onClick={() => handleScroll(bestSellersRef)} className="hover:text-[#e0b252] text-left transition-colors">Best Sellers</button>
              <button onClick={() => handleScroll(reviewsRef)} className="hover:text-[#e0b252] text-left transition-colors">Reviews</button>
              <button onClick={() => handleScroll(contactRef)} className="hover:text-[#e0b252] text-left transition-colors">Address</button>
            </div>
            
            <div className="pt-4 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAF5EB]/40 block">Connect on Social</span>
              <div className="flex space-x-3 text-[#FAF5EB]/60">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 flex items-center justify-center hover:text-[#e0b252] hover:border-[#e0b252] transition-colors">IG</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 flex items-center justify-center hover:text-[#e0b252] hover:border-[#e0b252] transition-colors">FB</a>
                <a href="https://wa.me/919111221940" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 flex items-center justify-center hover:text-[#e0b252] hover:border-[#e0b252] transition-colors">WA</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#FAF5EB]/10 pt-8 text-center text-xs tracking-wider uppercase font-semibold text-[#FAF5EB]/45 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Shahi Kitchen. All Rights Reserved.</span>
          <span className="font-script text-base text-[#e0b252] select-none">Thank you for choosing Shahi Kitchen! 🧡</span>
        </div>
      </footer>

      {/* Floating Bottom Cart Bar (Mobile Only - visible when items in cart) */}
      {getCartTotalItemsCount() > 0 && !isCartOpen && (
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-30 shadow-2xl animate-fade-in-up">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#27AE60] hover:bg-[#219653] text-white flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase border border-[#FAF5EB]/10"
          >
            <div className="flex items-center space-x-2.5">
              <ShoppingBag size={18} />
              <span>{getCartTotalItemsCount()} Items | ₹{getCartTotal()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>View Cart</span>
              <ChevronRight size={16} />
            </div>
          </button>
        </div>
      )}

      {/* Cart Drawer / Slide-Over Checkout panel */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Overlay backdrop */}
          <div 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
          />

          <div className="absolute inset-y-0 right-0 max-w-lg w-full bg-[#1F0D07] text-[#FAF5EB] shadow-2xl flex flex-col justify-between border-l border-[#FAF5EB]/10">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#FAF5EB]/10 flex justify-between items-center bg-[#1E0D07]">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="text-[#e0b252]" size={18} />
                <h3 className="font-serif-royal text-xl font-bold text-[#FAF5EB]">Your Shahi Cart</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 bg-[#FAF5EB]/5 border border-[#FAF5EB]/10 rounded-full hover:text-[#e0b252] hover:border-[#e0b252] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#FAF5EB]/10 scrollbar-track-transparent">
              
              {/* Cart List */}
              {cart.length > 0 ? (
                <div className="space-y-4">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#FAF5EB]/40 border-b border-[#FAF5EB]/5 pb-2">Selected Items</div>
                  <ul className="divide-y divide-[#FAF5EB]/5 space-y-3.5">
                    {cart.map((c) => (
                      <li key={c.item.id} className="pt-3.5 flex justify-between items-center">
                        <div className="space-y-0.5">
                          <strong className="text-sm font-semibold text-[#FAF5EB] block leading-tight">{c.item.name}</strong>
                          <span className="text-[10px] font-mono text-[#e0b252]">₹{c.item.price} each</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          {/* Quantity selector */}
                          <div className="flex items-center space-x-2 bg-[#FAF5EB]/5 rounded-full p-0.5 border border-[#FAF5EB]/10">
                            <button 
                              onClick={() => removeFromCart(c.item.id)}
                              className="w-6 h-6 rounded-full bg-[#1F0D07]/60 hover:bg-[#FAF5EB]/10 flex items-center justify-center transition-all text-[#FAF5EB]"
                            >
                              <Minus size={10} strokeWidth={2.5} />
                            </button>
                            <span className="font-bold text-xs px-1.5 min-w-[14px] text-center">{c.quantity}</span>
                            <button 
                              onClick={() => addToCart(c.item.id ? c.item : c.item)}
                              className="w-6 h-6 rounded-full bg-[#1F0D07]/60 hover:bg-[#FAF5EB]/10 flex items-center justify-center transition-all text-[#FAF5EB]"
                            >
                              <Plus size={10} strokeWidth={2.5} />
                            </button>
                          </div>
                          
                          {/* Calculated price */}
                          <span className="font-bold text-sm text-[#FAF5EB] font-mono min-w-[50px] text-right">
                            ₹{c.item.price * c.quantity}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Coupon Notice */}
                  {getCartSubtotal() < 199 && (
                    <div className="bg-[#e0b252]/5 border border-[#e0b252]/10 rounded-xl p-3 flex items-start space-x-2 text-[10px] text-[#FAF5EB]/80 leading-relaxed mt-4">
                      <span>💡</span>
                      <span>Add <strong>₹{199 - getCartSubtotal()}</strong> more worth of food to get **FREE Delivery** and unlock your **10% first order discount**!</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-20 space-y-4">
                  <span className="text-5xl block animate-pulse">🛒</span>
                  <h4 className="font-serif-royal text-lg text-[#FAF5EB]">Cart is Empty</h4>
                  <p className="text-xs text-[#FAF5EB]/50 max-w-xs mx-auto leading-relaxed">
                    You haven't added any royal food to your plate yet. Browse the menu and add the items you desire!
                  </p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="py-2.5 px-6 border border-[#e0b252] text-[#e0b252] hover:bg-[#e0b252]/10 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                  >
                    Browse Dishes
                  </button>
                </div>
              )}

              {/* Delivery Details Form */}
              {cart.length > 0 && (
                <div className="space-y-4 border-t border-[#FAF5EB]/10 pt-6">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#FAF5EB]/40 border-b border-[#FAF5EB]/5 pb-2">Delivery Details</div>
                  
                  <form className="space-y-3.5 text-xs text-[#FAF5EB]/80">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]/60">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Sandeep" 
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-lg p-2.5 placeholder-[#FAF5EB]/20 focus:outline-none focus:border-[#e0b252] text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]/60">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="e.g. 9876543210" 
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-lg p-2.5 placeholder-[#FAF5EB]/20 focus:outline-none focus:border-[#e0b252] text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]/60">Delivery Area</label>
                      <select 
                        value={customerArea}
                        onChange={(e) => setCustomerArea(e.target.value)}
                        className="w-full bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-lg p-2.5 focus:outline-none focus:border-[#e0b252] text-sm text-[#FAF5EB]"
                      >
                        <option value="IPS Corridor">IPS Corridor (IPS Academy &amp; Hostels)</option>
                        <option value="Silicon City">Silicon City</option>
                        <option value="CAT Road">CAT Road / CAT Square</option>
                        <option value="Rau Circle">Rau Circle (Shree Krishna Paradise)</option>
                        <option value="Rau Market / Station">Rau Market / Station area</option>
                        <option value="Emerald Heights area">Emerald Heights area</option>
                        <option value="IIM Indore corridor">IIM Indore corridor</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]/60">Hostel Name / Society &amp; Room / Flat No.</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Room 204, Boys Hostel B, IPS Academy" 
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-lg p-2.5 placeholder-[#FAF5EB]/20 focus:outline-none focus:border-[#e0b252] text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#FAF5EB]/60">Landmark (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Opposite Central Library" 
                        value={customerLandmark}
                        onChange={(e) => setCustomerLandmark(e.target.value)}
                        className="w-full bg-[#1F0D07]/60 border border-[#FAF5EB]/10 rounded-lg p-2.5 placeholder-[#FAF5EB]/20 focus:outline-none focus:border-[#e0b252] text-sm"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Drawer Billing Summary & CTAs */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#1E0D07] border-t border-[#FAF5EB]/10 space-y-4">
                
                {/* Billing Summary List */}
                <div className="space-y-2 text-xs text-[#FAF5EB]/80 font-medium">
                  <div className="flex justify-between">
                    <span className="opacity-60">Subtotal</span>
                    <span className="font-mono">₹{getCartSubtotal()}</span>
                  </div>
                  {getDiscount() > 0 && (
                    <div className="flex justify-between text-[#27AE60]">
                      <span>First Order Discount (10%)</span>
                      <span className="font-mono">-₹{getDiscount()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="opacity-60">Delivery Charge</span>
                    <span className="font-mono">
                      {getDeliveryFee() === 0 ? (
                        <span className="text-[#27AE60] uppercase font-bold text-[10px]">Free</span>
                      ) : `₹${getDeliveryFee()}`}
                    </span>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-[#FAF5EB]/5 pt-2" />
                  
                  <div className="flex justify-between text-base font-bold text-[#FAF5EB]">
                    <span>Total Amount</span>
                    <span className="text-[#e0b252] font-mono text-lg">₹{getCartTotal()}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button 
                  onClick={handleWhatsAppOrderSubmit}
                  className="w-full py-4 bg-[#27AE60] hover:bg-[#219653] text-white font-bold text-xs tracking-widest uppercase rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Phone size={14} className="fill-current" />
                  <span>Send Order to WhatsApp</span>
                </button>

                <p className="text-[9px] text-center text-[#FAF5EB]/45 leading-relaxed">
                  Clicking opens WhatsApp with a pre-filled cart receipt. Tap send to submit to the kitchen. Payment collected via UPI or Cash on delivery.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ShahiKitchen;
