import type { SectorConfig } from '../types';

export const sectors: SectorConfig[] = [
  {
    id: 'hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    description: 'Luxury resorts, hotels, villas and hospitality experiences that create unforgettable memories.',
    icon: 'Hotel',
    activeCount: 2,
    status: 'active',
    image: '/media/sectors/hospitality.png',
    tintClass: 'bg-[#E9F2F9] text-[#1E3A5F] border-[#C2D6E7]',
    accentTint: '#E9F2F9',
    mood: 'Luxury Escape',
    showcases: [
      {
        id: 'grand-horizon',
        name: 'Grand Horizon Resort & Spa',
        slug: 'resort',
        tagline: 'Premium Guest Experiences & Direct Booking Systems',
        shortDesc: 'A luxury Mediterranean cliffside resort demonstration showcasing direct reservation systems, interactive room galleries, and custom experience intakes.',
        status: 'active',
        path: '/sectors/hospitality/resort',
        image: '/media/sectors/hospitality.png',
        businessPains: [
          'Losing 15-20% revenue to OTA commission fees (Booking.com, Expedia).',
          'Slow, non-responsive mobile sites resulting in high reservation drop-offs.',
          'Inability to easily highlight amenities, seasonal offers, and guest packages.'
        ],
        solutionsShowcased: [
          'Commission-free direct booking request simulator.',
          'Immersive photo grids optimized for rapid mobile loads.',
          'Visual layout for room options, packages, and amenities.'
        ],
        features: [
          { title: 'Direct Booking Engine', iconName: 'Bell' },
          { title: 'Interactive Room Galleries', iconName: 'Image' },
          { title: 'Personalized Guest Experiences', iconName: 'Gem' }
        ],
        badgeText: 'Live Showcase'
      },
      {
        id: 'shahi-kitchen',
        name: 'Shahi Kitchen',
        slug: 'shahi-kitchen',
        tagline: 'Local Restaurant Growth & WhatsApp Ordering',
        shortDesc: 'A street-food hospitality showcase featuring instant category filters, real-time search, interactive cart builder, and automatic WhatsApp order templating.',
        status: 'active',
        path: '/sectors/hospitality/shahi-kitchen',
        image: '/media/industries/shahi-kitchen/hero.png',
        businessPains: [
          'Paying 25-30% commission rates to aggregator apps (Zomato/Swiggy).',
          'High dropout rate on complex multi-step mobile checkout flows.',
          'No direct connection to local customers for repeat loyalty campaigns.'
        ],
        solutionsShowcased: [
          'One-click WhatsApp order generation and checkout.',
          'Fast single-page interactive menu with local search and veg filters.',
          'Cached customer delivery details for frictionless two-tap repeat ordering.'
        ],
        features: [
          { title: 'WhatsApp Direct Order', iconName: 'Bell' },
          { title: 'Live Search & Filters', iconName: 'Image' },
          { title: 'Local Delivery Validator', iconName: 'Gem' }
        ],
        badgeText: 'Live Showcase'
      }
    ]
  },
  {
    id: 'fashion-lifestyle',
    name: 'Fashion & Lifestyle',
    slug: 'fashion-lifestyle',
    description: 'Boutiques, jewellery, cosmetics and lifestyle brands that inspire elegance and self-expression.',
    icon: 'Shirt',
    activeCount: 2,
    status: 'active',
    image: '/media/sectors/fashion.png',
    tintClass: 'bg-[#F9E9EC] text-[#5C2B34] border-[#ECC6CD]',
    accentTint: '#F9E9EC',
    mood: 'Heritage Elegance',
    showcases: [
      {
        id: 'aura-atelier',
        name: 'AURA Atelier',
        slug: 'aura-atelier',
        tagline: 'Curated Heritage Lookbooks & Personal Styling',
        shortDesc: 'A heritage-inspired fashion atelier experience featuring collection stories, craftsmanship, lookbooks, and personal styling consultations.',
        status: 'active',
        path: '/sectors/fashion-lifestyle/aura-atelier',
        image: '/media/sectors/fashion.png',
        businessPains: [
          'Difficulty standing out in a crowded, generic e-commerce market.',
          'Low customer retention and repeat visits due to lack of personalization.',
          'High bounce rates on lookbook pages due to unoptimized high-res images.'
        ],
        solutionsShowcased: [
          'Central courtyard portal and dynamic experience wing rooms.',
          'Arched layouts and subtle Mughal motifs for heritage positioning.',
          'Personal styling and made-to-measure appointment intakes.'
        ],
        features: [
          { title: 'Collection Showrooms', iconName: 'Shirt' },
          { title: 'Craftsmanship Stories', iconName: 'Scissors' },
          { title: 'Styling Consultation', iconName: 'User' }
        ],
        badgeText: 'Interactive Showcase'
      },
      {
        id: 'rajputana-heritage',
        name: 'Rajputana Heritage',
        slug: 'rajputana-heritage',
        tagline: 'Luxury Saree & Traditional Jewellery House',
        shortDesc: 'A premium Rajputana heritage digital experience representing ancestral craft, traditional bridal sarees, and royal Jadau & Meenakari jewellery.',
        status: 'active',
        path: '/sectors/fashion-lifestyle/rajputana-heritage',
        image: '/media/industries/rajputana/hero.png',
        businessPains: [
          'High-end couture brands struggling to convey heritage stories in generic layouts.',
          'High-value ticket items requiring high trust and personal connection before buying.',
          'Lack of curated design guidance causing decision fatigue for bridal custom orders.'
        ],
        solutionsShowcased: [
          'Chamber-based Gateway (Saree vs Jewellery) to reduce catalog overwhelm.',
          'Ancestral Royal Heritage Story block to build strong brand trust.',
          'Exclusive "Book a Private Viewing" and personalized trousseau selector.'
        ],
        features: [
          { title: 'Chamber Showrooms', iconName: 'Compass' },
          { title: 'Ancestral Weaves', iconName: 'History' },
          { title: 'Trousseau Consultation', iconName: 'Award' }
        ],
        badgeText: 'Interactive Showcase'
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Schools, colleges, coaching institutes and training centers empowering the leaders of tomorrow.',
    icon: 'GraduationCap',
    activeCount: 0,
    status: 'coming-soon',
    image: '/media/sectors/education.png',
    tintClass: 'bg-[#FAF5EB] text-[#4A3B2B] border-[#EDE0CC]',
    accentTint: '#FAF5EB',
    mood: 'Knowledge & Growth',
    showcases: []
  },
  {
    id: 'fitness-recreation',
    name: 'Fitness & Recreation',
    slug: 'fitness-recreation',
    description: 'Gyms, sports clubs, play zones and wellness centers promoting health, energy and active lifestyles.',
    icon: 'Dumbbell',
    activeCount: 0,
    status: 'coming-soon',
    image: '/media/sectors/fitness.png',
    tintClass: 'bg-[#EAF2EC] text-[#2B3F31] border-[#C8DFCD]',
    accentTint: '#EAF2EC',
    mood: 'Energy & Performance',
    showcases: []
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Clinics, hospitals, diagnostic centers and wellness services delivering trusted care and better lives.',
    icon: 'Activity',
    activeCount: 0,
    status: 'coming-soon',
    image: '/media/sectors/healthcare.png',
    tintClass: 'bg-[#E9ECF9] text-[#2A3E5C] border-[#CCD4F0]',
    accentTint: '#E9ECF9',
    mood: 'Trust & Care',
    showcases: []
  }
];
