export const GITHUB_URL = 'https://github.com/shrunvi2008';
export const EMAIL = 'shrunvi@example.com'; // placeholder — update with real email

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const TECH_STRIP = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
  'MongoDB',
  'Git',
  'GitHub',
];

export const ABOUT_CARDS = [
  {
    num: '01',
    title: 'Software Development',
    desc: 'Building practical applications and exploring modern development technologies.',
  },
  {
    num: '02',
    title: 'AI & Innovation',
    desc: 'Exploring AI-powered solutions and applying technology to real-world problems.',
  },
  {
    num: '03',
    title: 'Continuous Learning',
    desc: 'Improving programming, DSA and development skills through projects and experimentation.',
  },
];

export const SKILL_GROUPS = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
  {
    category: 'Core',
    items: ['DSA', 'DBMS'],
  },
];

export type Project = {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  visual: 'ecommerce' | 'contacts' | 'todo';
  images?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'todo',
    num: '01',
    title: 'React To-Do List',
    subtitle: 'Task Management App',
    description:
      'A responsive task management application built with React that allows users to create, edit, delete and complete tasks while organizing them using priorities, due dates, search and filters.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    github: GITHUB_URL,
    demo: '#',
    featured: true,
    visual: 'todo',
    images: ['/assets/images/Screenshot%202026-09-16%20145653.png'],
  },
  {
    id: 'ecommerce',
    num: '02',
    title: 'React E-Commerce',
    description:
      'A modern e-commerce web application with product browsing, routing and shopping cart functionality.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    github: GITHUB_URL,
    demo: '#',
    visual: 'ecommerce',
    images: [
      '/assets/images/Screenshot%202026-09-16%20150532.png',
      '/assets/images/Screenshot%202026-09-16%20150558.png',
    ],
  },
  {
    id: 'contacts',
    num: '03',
    title: 'Contact Management System',
    description:
      'A contact management application supporting adding, searching, updating, deleting and restoring contacts.',
    tags: ['Python', 'Streamlit', 'SQLite'],
    github: GITHUB_URL,
    visual: 'contacts',
    images: [
      '/assets/images/Screenshot%202026-09-16%20153916.png',
      '/assets/images/Screenshot%202026-09-16%20153958.png',
      '/assets/images/Screenshot%202026-09-16%20154127.png',
      '/assets/images/Screenshot%202026-09-16%20154153.png',
    ],
  },
];

export const EXPERIENCE = [
  {
    title: 'Cloud Computing & DevOps Internship',
    description:
      'Completed a structured internship focused on cloud computing and DevOps concepts, gaining exposure to modern development and deployment practices.',
    tag: 'Internship',
  },
  {
    title: 'Hackathons',
    description:
      'Participated in competitive hackathons, building rapid prototypes and solving time-bound problem statements.',
    tag: 'Event',
  },
  {
    title: 'Project Expo',
    description:
      'Showcased technical projects at academic project expositions, presenting working solutions to peers and faculty.',
    tag: 'Event',
  },
];

export const CERTIFICATIONS = [
  'Cloud Computing & DevOps Internship',
  'Hackathon Certificate',
  'Project Expo / Project Certificate',
];
