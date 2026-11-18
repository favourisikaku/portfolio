// Central content file — edit text, links and lists here without touching the layout.
import netflix from "./assets/netflix.jpg";
import tesla from "./assets/tesla.mp4";
import movies from "./assets/movies.png";
import trippy from "./assets/trippy.png";
import amazon from "./assets/amazon.png";
import gym from "./assets/gym.png";

export const profile = {
  name: "Favour Isikaku",
  monogram: "FI",
  role: "Frontend Developer",
  roles: ["React & Next.js", "TypeScript", "Responsive UI", "Web Performance"],
  location: "Nigeria · Remote",
  email: "Isikakufavour@yahoo.com",
  phone: "+234 814 089 2026",
  phoneHref: "tel:+2348140892026",
  whatsapp: "https://wa.me/2348140892026",
  linkedin: "https://linkedin.com/in/favourisikaku",
  github: "https://github.com/favourisikaku",
  // Put your CV in the /public folder (e.g. public/Favour-Isikaku-CV.pdf) and set the path here.
  // While this is empty, the nav button says "Hire me" and links to the contact page.
  resume: "",
};

// Small rotating status line under the hero buttons
export const heroMeta = [
  { label: "Now", value: "Open to freelance, contract and full-time roles" },
  { label: "Experience", value: "4+ years building for the web" },
  { label: "Stack", value: "React · Next.js · TypeScript · Tailwind" },
  { label: "Focus", value: "Fast, accessible, mobile-friendly UI" },
];

// The tools you use — shown in the Toolkit section
export const toolkit = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI/UX Implementation",
    items: ["Responsive Design", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Performance Optimization",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "SEO Optimization",
      "Web Performance Tuning",
    ],
  },
  {
    title: "Version Control & Deployment",
    items: ["Git", "GitHub", "Vercel", "Netlify"],
  },
  {
    title: "State, APIs & Services",
    items: ["REST APIs", "Redux", "Firebase", "Stripe"],
  },
];

// Services: numbered disciplines, each opening to show what it covers.
// `text` is optional — leave it out to show just the list.
export const services = [
  {
    title: "Frontend engineering",
    items: [
      "React.js applications",
      "Next.js sites and apps",
      "TypeScript codebases",
      "Modern JavaScript (ES6+)",
      "Reusable UI component libraries",
      "Responsive, mobile-first interfaces",
    ],
  },
  {
    title: "Product and strategy",
    items: [
      "Turning product requirements into interfaces",
      "User flows and page structure",
      "Scoping a clear first version",
      "Working with designers and backend developers",
    ],
  },
  {
    title: "Web engineering",
    items: [
      "REST API integration",
      "Application state management (Redux)",
      "Forms and validation",
      "Dashboards and data views",
      "Authentication with Firebase",
      "Payments with Stripe",
    ],
  },
  {
    title: "UI/UX implementation",
    items: [
      "Figma to production",
      "Tailwind CSS builds",
      "Bootstrap builds",
      "Pixel-close, polished layouts",
      "Smooth animations and interactions",
    ],
  },
  {
    title: "Performance optimization",
    items: [
      "Code splitting",
      "Lazy loading",
      "Web performance tuning",
      "Image and asset optimization",
    ],
  },
  {
    title: "SEO optimization",
    items: [
      "SEO-friendly page structure",
      "Page titles and meta descriptions",
      "Social previews (Open Graph)",
      "Semantic, crawlable markup",
    ],
  },
  {
    title: "Quality and accessibility",
    items: [
      "Accessible, keyboard-friendly UI",
      "Cross-browser and cross-device testing",
      "Usability improvements",
      "Code review and debugging",
    ],
  },
  {
    title: "Rescue and improvement",
    items: [
      "Improving existing websites and apps",
      "Bug fixing",
      "Refactors and clean-up",
      "Finishing half-built features",
    ],
  },
  {
    title: "Delivery and handover",
    items: [
      "Deployment on Vercel and Netlify",
      "Git and GitHub workflows",
      "Environment setup",
      "Documentation and handover",
    ],
  },
];

// Big outlined scrolling band = service names; small band = everything you do and use
export const ticker = services.map((s) => s.title);
export const tickerSmall = [
  ...toolkit.flatMap((g) => g.items),
  ...services.flatMap((s) => s.items.slice(0, 2)),
];

export const process = [
  {
    title: "Discover",
    text: "We talk through your goals, audience and what success looks like.",
  },
  {
    title: "Plan",
    text: "I map out pages, features and a clear timeline before writing code.",
  },
  {
    title: "Build",
    text: "I develop in small steps and share progress links you can click through.",
  },
  {
    title: "Refine",
    text: "We test on real devices, polish the details and fix every rough edge.",
  },
  {
    title: "Launch",
    text: "Your site goes live on fast hosting, and I stay around for support.",
  },
];

export const projects = [
  {
    title: "Gym Website",
    category: "Business website",
    description:
      "A premium fitness brand site where visitors explore workouts tailored to their goals and discover services and facilities.",
    media: gym,
    url: "https://favourisikaku-gym.vercel.app",
    tags: ["React", "Bootstrap"],
  },
  {
    title: "Amazon Clone",
    category: "E-commerce",
    description:
      "A full e-commerce experience with product browsing, a working cart and Stripe-powered checkout.",
    media: amazon,
    url: "https://amazon-clone-seven-sand.vercel.app",
    tags: ["React", "Bootstrap"],
  },
  {
    title: "Netflix Clone",
    category: "Streaming interface",
    description:
      "A faithful streaming-platform interface with a browsable movie library and trailer playback.",
    media: netflix,
    url: "https://favourisikaku-netflix-clone.vercel.app",
    tags: ["React", "Bootstrap", "REST API"],
  },
  {
    title: "Tesla Clone",
    category: "Product showcase",
    description:
      "A product showcase presenting vehicle models with performance metrics and range details.",
    media: tesla,
    video: true,
    url: "https://favourisikaku-tesla-clone.vercel.app",
    tags: ["React", "Bootstrap"],
  },
  {
    title: "Movie Discovery",
    category: "Web app",
    description:
      "Search and explore films and actors with detail pages powered by a live movie database API.",
    media: movies,
    url: "https://favourisikaku-movies-app.vercel.app",
    tags: ["React", "Bootstrap", "REST API"],
  },
  {
    title: "Travel & Tour",
    category: "Travel platform",
    description:
      "An immersive travel platform showcasing destinations in Indonesia, Malaysia and France.",
    media: trippy,
    url: "https://favourisikaku-travel-tour.vercel.app",
    tags: ["React", "Bootstrap"],
  },
];
