import { Project, Skill, Service, TimelineItem, Testimonial, ProcessStep } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDescription: "Blazing-fast, pixel-perfect websites built with Next.js and modern frameworks.",
    longDescription: "Blazing-fast, pixel-perfect websites built with Next.js and modern frameworks. Engineered for conversion.",
    iconName: "Code2",
    bullets: [
      "Next.js and React Excellence",
      "Pixel-Perfect Engineering",
      "Engineered for Conversion",
      "Blazing Fast Performance"
    ]
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    shortDescription: "Custom AI assistants trained on your brand voice. Automate support, qualify leads, close deals 24/7.",
    longDescription: "Custom AI assistants trained on your brand voice. Automate support, qualify leads, close deals 24/7.",
    iconName: "Cpu",
    bullets: [
      "Custom Brand Voice Training",
      "24/7 Support Automation",
      "Lead Qualification Systems",
      "Frictionless CRM Integration"
    ]
  },
  {
    id: "personalised-ads",
    title: "Personalized Ads",
    shortDescription: "Hyper-targeted campaigns using behavioral data. Your message, to the right person, at the right moment.",
    longDescription: "Hyper-targeted campaigns using behavioral data. Your message, to the right person, at the right moment.",
    iconName: "Compass",
    bullets: [
      "Behavioral Data Integration",
      "Hyper-Targeted Campaigning",
      "Perfect Moment Optimization",
      "Visual Performance Tracking"
    ]
  },
  {
    id: "custom-apps",
    title: "Custom Apps",
    shortDescription: "Bespoke web and mobile applications built for your exact workflow. No templates, no compromises.",
    longDescription: "Bespoke web and mobile applications built for your exact workflow. No templates, no compromises.",
    iconName: "Zap",
    bullets: [
      "Bespoke Framework Operations",
      "No Templates & No Compromises",
      "Exact Workflow Adaptability",
      "Spectacular Operational Speeds"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "neoshield",
    title: "AETHERIS_DASHBOARD",
    category: "AI & UI/UX Design",
    description: "An elite AI intelligence control deck using frosted glass visual partitions, custom dark charts, and glowing red warning alerts.",
    techStack: ["React 19", "Tailwind v4", "motion", "lucide-react"],
    image: "/src/assets/images/project_render_one_1779613515453.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "vessel",
    title: "MONOLITH_IDENTITY",
    category: "Luxury Branding",
    description: "A dark cyberpunk brand system featuring futuristic custom titanium frames, glowing steel letters, and deep-red light structures.",
    techStack: ["Blender", "Figma", "Tailwind v4", "Brand Strategy"],
    image: "/src/assets/images/project_render_two_1779613536536.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "kinetic",
    title: "CHRONOS_INTERFACE",
    category: "Creative Development",
    description: "An online luxury watch simulator relying on fluid CSS rotate transformations, ticking sounds, and radial background luminescence.",
    techStack: ["React 19", "Vite", "Tailwind v4", "Lucide React"],
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop",
    liveUrl: "#",
    featured: false
  },
  {
    id: "apex-v8",
    title: "APEX_HYBRID_SYSTEMS",
    category: "Full Stack AI App",
    description: "An interactive automotive landing page integrating live engine telemetries and reactive glowing status grids.",
    techStack: ["React 19", "Express", "Tailwind v4", "Gemini API"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
    liveUrl: "#",
    featured: false
  }
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: "React 19 / Next.js", category: "frontend", iconName: "Component", level: "Elite", percentage: 95 },
  { name: "WordPress Websites", category: "frontend", iconName: "Laptop", level: "Elite", percentage: 92 },
  { name: "Shopify & Hostinger", category: "frontend", iconName: "Server", level: "Elite", percentage: 94 },

  // Backend
  { name: "Custom Apps", category: "backend", iconName: "Component", level: "Master", percentage: 90 },
  { name: "Ai ChatBots", category: "backend", iconName: "Sparkles", level: "General", percentage: 80 },

  // Design
  { name: "Meta Ads", category: "design", iconName: "Figma", level: "Elite", percentage: 96 },
  { name: "Outreaching Agents", category: "design", iconName: "Megaphone", level: "Advanced", percentage: 75 },
  { name: "Custom WhatsApp Payments Stores", category: "design", iconName: "MessageCircle", level: "Master", percentage: 88 },

  // Tools
  { name: "Customer management automation", category: "tools", iconName: "Users", level: "Elite", percentage: 95 },
  { name: "Web Re-Designing & Re-Modelling", category: "tools", iconName: "Layers", level: "Elite", percentage: 90 }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "t1",
    company: "AIVÉRA_STUDIOS",
    role: "Lead Creative Designer & Technologist",
    duration: "2024 - Present",
    achievements: [
      "Pioneered cinematic web applications for elite luxury tech clients and AI startups, securing multiple Awwwards nominations.",
      "Engineered tailored React-Tailwind custom web environments boasting fluid particle layers, reducing image payloads while maintaining visual depth.",
      "Launched full-stack micro-AI generators that boost premium sales conversion by 40% using secure server API key protection grids."
    ],
    skillsAssociated: ["React 19", "Tailwind v4", "Framer Motion", "Gemini Integrations"]
  },
  {
    id: "t2",
    company: "AETHER_DIGITAL",
    role: "Senior Frontend Interactive Developer",
    duration: "2022 - 2024",
    achievements: [
      "Rebuilt modular UI system for global design clients, transitioning to strict TypeScript type safety.",
      "Designed immersive WebGL layouts featuring smooth scrolling mechanics and asymmetrical grid displays.",
      "Optimized load times to 98% Lighthouse performance without sacrificing rich video backdrop assets."
    ],
    skillsAssociated: ["TypeScript", "WebGL", "Vite", "UX Storytelling"]
  },
  {
    id: "t3",
    company: "SYNAPSE_LABS",
    role: "UX UI Prototyper",
    duration: "2020 - 2022",
    achievements: [
      "Crafted full-scale Figma wireframes and high-fidelity clickable models representing smart dashboard interfaces.",
      "Co-developed custom CSS grids and standard micro-interactions used across major SaaS networks globally."
    ],
    skillsAssociated: ["Figma Design", "Creative Typography", "HTML/CSS3"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "c1",
    name: "Sarah Jenkins",
    company: "VORTEX MEDIA",
    role: "Co-Founder",
    rating: 5,
    statement: "aivéra transformed our entire digital presence. The website they built tripled our conversion rate in the first month. Priyam's attention to detail is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=facearea&facepad=2"
  },
  {
    id: "c2",
    name: "Marcus Thorne",
    company: "CHRONOS INC",
    role: "Chief Operations Officer",
    rating: 5,
    statement: "The AI chatbot aivéra built for us handles 80% of our customer queries automatically. Our support costs dropped by ₹2.4L per month. Incredible ROI.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=facearea&facepad=2"
  },
  {
    id: "c3",
    name: "Akihiro Sato",
    company: "NEURAL APPS",
    role: "Marketing Director",
    rating: 5,
    statement: "We went from zero to 50,000 monthly visitors in 90 days after aivéra rebuilt our brand. The UGC campaigns they designed felt completely authentic.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=facearea&facepad=2"
  }
];

export const PROCESS_DATA: ProcessStep[] = [];
