import type { AutomationConfig } from '../types';

export const automations: AutomationConfig[] = [
  {
    id: 'cyber-spice-cafe',
    slug: 'cyber-spice-cafe',
    name: 'Cyber Spice Cafe Bot',
    tagline: 'Digital Restaurant Assistant: Tables, Menus & Ordering',
    overview: 'An intelligent business chatbot solution designed to manage guest engagement for Cyber Spice Cafe. The assistant handles digital menu requests, table reservation booking, restaurant timings, and direct customer assistance within standard messaging channels to create a smooth dining experience.',
    technologies: ['Node.js', 'Meta Cloud API', 'Dialogflow NLP', 'Express', 'PostgreSQL'],
    features: [
      {
        title: 'Automated Table Reservations',
        description: 'Collects preferred dates, party sizes, and reservation times, confirming table availability instantly.'
      },
      {
        title: 'Digital Menu & Specials Showcase',
        description: 'Enables customers to filter items by dietary preference (veg, vegan, gluten-free) and search dishes using keywords.'
      },
      {
        title: '24/7 Customer Assistance',
        description: 'Answers FAQs regarding location, active hours, parking, and promotional coupons, saving staff time.'
      },
      {
        title: 'Intelligent Support Handover',
        description: 'Collects specific guest issues and routes complex inquiries directly to restaurant managers via instant notifications.'
      }
    ],
    screenshots: [
      '/media/automation/cyber-spice-cafe/screenshots/1.jpg',
      '/media/automation/cyber-spice-cafe/screenshots/2.jpg',
      '/media/automation/cyber-spice-cafe/screenshots/3.jpg',
      '/media/automation/cyber-spice-cafe/screenshots/4.jpg',
      '/media/automation/cyber-spice-cafe/screenshots/5.jpg',
      '/media/automation/cyber-spice-cafe/screenshots/6.jpg'
    ],
    screenRecordings: [
      '/media/automation/cyber-spice-cafe/recordings/demo.mp4'
    ],
    liveDemoUrl: 'https://cyber-spice-cafe.vercel.app/',
    capabilities: [
      'Interactive Digital Menu Cards',
      'Table Availability Automation',
      'Location & Maps Sharing',
      'Multi-Language Support'
    ],
    qrCodePath: '/media/automation/cyber-spice-cafe/barcode.png'
  },
  {
    id: 'multi-business-bot',
    slug: 'multi-business-bot',
    name: 'LETSGO Multi-Business Bot',
    tagline: 'Intelligent AI Assistant for Gyms, Cafes & Academies',
    overview: 'A flexible business AI assistant designed to automate client intake, coordinate booking details, and resolve inquiries. This solution dynamically changes modes between restaurant orders, educational course previews, and gym trial memberships, demonstrating how a custom bot resolves operational bottlenecks.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'Meta Cloud API', 'Redis'],
    features: [
      {
        title: 'Gym & Fitness Assistant Mode',
        description: 'Qualifies free trial pass requests, reviews class schedules, and books trainer sessions.'
      },
      {
        title: 'Education Admission Assistant Mode',
        description: 'Guides prospective students through course preview details, details enrollment fees, and registers trial bookings.'
      },
      {
        title: 'Restaurant Assistant Mode',
        description: 'Browses food categories, manages customized meal orders, and processes table requests.'
      }
    ],
    screenshots: [
      '/media/automation/multi-business-bot/screenshots/1.png',
      '/media/automation/multi-business-bot/screenshots/2.jpg',
      '/media/automation/multi-business-bot/screenshots/3.jpg'
    ],
    screenRecordings: [
      '/media/automation/multi-business-bot/recordings/demo.mp4'
    ],
    liveDemoUrl: '',
    capabilities: [
      'Multi-Industry Mode Swapping',
      'Generative AI Context Response',
      'Dynamic Lead Score Evaluation',
      'Integration-Ready Webhooks'
    ],
    isConcept: true
  }
];
