import type { RealProjectConfig } from '../types';

export const projects: RealProjectConfig[] = [
  {
    id: 'letsgo-nexus',
    slug: 'letsgo-nexus',
    name: 'LETSGO Nexus',
    tagline: 'Interactive 3D Portfolio Experience & Creative Showroom',
    overview: 'An immersive, high-performance 3D portfolio and creative technical showcase designed to present projects in a web-native interactive spatial environment. Visitors can navigate an interactive digital canvas, explore layouts, and interact with dynamic 3D elements in real time.',
    technologies: ['React', 'Three.js', 'React Three Fiber', 'GLSL', 'Tailwind CSS', 'Vite'],
    features: [
      {
        title: 'Interactive 3D Grid Canvas',
        description: 'Navigate through a responsive spatial digital grid where projects float and respond dynamically to mouse and touch interactions.'
      },
      {
        title: 'Immersive Project Detail Overlays',
        description: 'Visual cards and specs expand fluidly upon selection, providing an engaging and emotional project storytelling experience.'
      },
      {
        title: 'High-Performance WebGL Engine',
        description: 'Engineered with optimized shaders and geometry buffers to guarantee fluid 60fps animations even on mobile devices.'
      }
    ],
    screenshots: [
      '/media/projects/letsgo-nexus/screenshots/1.png',
      '/media/projects/letsgo-nexus/screenshots/2.png',
      '/media/projects/letsgo-nexus/screenshots/3.png',
      '/media/projects/letsgo-nexus/screenshots/4.png',
      '/media/projects/letsgo-nexus/screenshots/5.png',
      '/media/projects/letsgo-nexus/screenshots/6.png'
    ],
    screenRecordings: [
      '/media/projects/letsgo-nexus/recordings/demo.mp4'
    ],
    liveDemoUrl: 'https://main.d1xqkirom218y5.amplifyapp.com/',
    gitHubUrl: 'https://github.com/letsgo-solutions/letsgo-nexus',
    qrCodePath: '/media/projects/letsgo-nexus/qr-code.png'
  }
];
