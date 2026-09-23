import type { Translations } from './pt-br';

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    trajectory: 'Trajectory',
    projects: 'Projects',
    ecosystem: 'Ecosystem',
    contact: 'Contact',
  },
  hero: {
    available: 'Available for new challenges',
    line1: 'BACKEND',
    line2: 'DEVELOPER',
    line3: 'FOCUSED ON',
    line4: 'ARCHITECTURE',
    subtitle: 'Building robust systems, secure APIs, and ensuring data scalability and integrity.',
    cta1: 'View projects',
    cta2: 'Get in touch',
    codeRole: 'Backend Developer',
    codeFocus: "['Java', 'Spring Boot', 'PostgreSQL']",
    codeLearning: 'Cloud & Scalability',
    codeFnName: 'architectSystem',
    codeFnParam: 'requirements',
    codeFnReturn: '/* -> robustness -> scalability -> security */',
    codeConsoleArg: 'Your project',
    codeComment: '// Ready to build solid architectures 🚀',
  },
  marquee: {
    text: 'SOFTWARE ENGINEERING • CREATIVE TECHNOLOGY • UI/UX DESIGN • BACKEND DEVELOPMENT • ',
  },
  about: {
    label: 'About me',
    title: 'Who is behind the code',
    desc1: 'I am ÁLEF FELIX — a backend-focused developer who found in technology a way to solve complex problems. I like to understand how things work under the hood, design efficient databases, and build secure APIs that deliver value from day one. Programming, to me, is translating critical business rules into scalable and reliable systems.',
    desc2: 'My practical experience is reflected in the projects I build: APIs structured with financial rigor, well-modeled relational databases, and clean architectures. I have the frontend as a complementary skill, which allows me to understand the application from end to end. Currently, I study Software Engineering at UNIALFA to deepen the theoretical foundations of what I already apply in practice.',
  },
  education: {
    label: 'Education',
    title: 'Education & Trajectory',
    selfTaughtBadge: '2025 — IN PROGRESS',
    selfTaughtTag: 'Self-Taught',
    selfTaughtTitle: 'Self-Taught Backend Development',
    selfTaughtSubtitle: 'Intensive study and real projects',
    selfTaughtDesc: 'Since 2025, I have been deeply exploring backend development autonomously, applying knowledge directly into real-world projects (Banking System API, DECODE, personal portfolio) instead of waiting for a formal academic environment.',
    degreeBadge: '2027 — FUTURE',
    degreeTag: 'Upcoming',
    degreeTitle: `Bachelor's in Software Engineering`,
    degreeSubtitle: 'UniAlfa',
    degreeDesc: 'Studying the fundamentals of computer science, software engineering, and system development practices. Actively applying academic knowledge in building real projects, with a strong focus on scalable software architecture, data security, and user experience (UX/UI).',
  },
  projects: {
    label: 'Projects',
    title: 'Projects & Builds',
    subtitle: 'Real applications, scalable architectures, and interactive experiences. Click the cards to test the demos.',
  },
  projectsData: {
    "banking-api": {
      subtitle: "Robust architecture for financial operations",
      category: "Backend · REST API",
      metric: "12+ REST endpoints with authentication",
      desc: "A complete RESTful API developed in Java and Spring Boot that simulates the core operations and data flow of a modern digital bank.",
      whyCreated: "Financial systems do not forgive errors: a rounding bug or an authentication failure can cost real money and customer trust.",
      whatItIsFor: "An API that supports the central operations of a digital bank — registration, authentication, deposit, withdrawal, and transfer — with rules that prevent inconsistent balances even under concurrent use.",
      whatIDeveloped: "Architecture in Java 17 + Spring Boot with Spring Security for authentication, JPA/Hibernate on MySQL for reliable persistence, and an auditable history of each transaction — the same foundation that any system with real money requires.",
      results: "12+ tested and documented endpoints, ready to integrate into an app or internal system without exposing the business to the risk of data inconsistency.",
      status: ""
    },
    "decode": {
      subtitle: "Decrypting Violence",
      category: "Frontend · UX/UI",
      metric: "6 branching narrative scenarios",
      desc: "DECODE is an interactive application that uses technology and branching narrative to raise young people's awareness of abusive relationships and violence against women.",
      whyCreated: "Abusive relationships rarely start with a slap — they begin with behavior disguised as care that the victim cannot name. Most prevention campaigns arrive late, when the pattern is already established.",
      whatItIsFor: "DECODE simulates, in 6 branching scenarios, everyday situations where the user chooses how to react and sees the consequence of each choice — without lecturing, without guilt, with safe repetition until the pattern is clear. Designed for schools and social projects to apply in minutes, without technical preparation.",
      whatIDeveloped: "The entire interactive experience — branching narrative engine, transitions that keep the user immersed, complete typing in TypeScript to avoid bugs in production — was built and delivered by me, from scratch to deploy.",
      results: "Tool ready for real use, testable in a class or workshop, combining social impact with a quality standard that withstands use by several people at the same time.",
      status: ""
    },
    "geekfilme": {
      subtitle: "Digital Streaming UX Showcase",
      category: "Frontend · UI/UX",
      metric: "12+ titles in a multi-category catalog with real-time search",
      desc: "High-performance digital showcase prototype with UX inspired by streaming platforms, designed for product catalogs, fashion, or on-demand services.",
      whyCreated: "Large catalogs (product, delivery, streaming) lose customers halfway through when the search is slow or navigation is tiring. I wanted to prove that it's possible to have the fluidity of a streaming platform in a standard catalog.",
      whatItIsFor: "A showcase with instant search and category navigation designed for any business with an extensive catalog — fashion, delivery, rental — to reduce the time between 'found it' and 'bought it'.",
      whatIDeveloped: "Real-time search engine, details system with fluid transition, and image loading optimization — all designed to work well even with dozens of items and a weak internet connection.",
      results: "Replicable model for any business that needs to turn catalog navigation into sales, with tested performance even on smaller screens.",
      status: ""
    },
    "vertice": {
      subtitle: "E-commerce",
      category: "Frontend — E-commerce",
      metric: "Catalog with filter and real-time search",
      desc: "Modern e-commerce platform aimed at selling clothes with a design focused on user experience and quick conversion.",
      whyCreated: "Fashion e-commerce relies on two things: visual identity that sells and navigation that doesn't block impulse buying.",
      whatItIsFor: "Complete online store — from the catalog to the product page — with a strong visual identity, designed for brands that need to look bigger than they are.",
      whatIDeveloped: "Interface built in React + Vite, with Tailwind and Radix/Shadcn components to maintain visual consistency and loading speed across all pages.",
      results: "Ready base for any fashion brand or product to launch a professional-looking store without relying on generic platforms.",
      status: ""
    },
    "fitsync": {
      category: "Mobile App · Fitness",
      desc: "Mobile fitness app with an exercise and food library, guided workouts, a rest timer, and AI integration for safe guidance.",
      status: "Coming soon"
    },
    "techjob-ai": {
      category: "Web · Job Board",
      desc: "IT job platform in Brazil, with automatic job aggregation and an AI resume analyzer.",
      status: "Coming soon"
    },
    "menteviva": {
      category: "Web · Wellness",
      desc: "Self-help application for logging mood, goals, and personal achievements.",
      status: "Coming soon"
    }
  },
  projectModal: {
    demoFallback: 'Interactive Demo Area',
    whyCreated: 'Why was it created?',
    whatItIsFor: 'What is it for?',
    whatIDeveloped: 'What did I develop?',
    results: 'Results',
    ecosystem: 'Ecosystem',
    accessApp: 'Access Application',
    sourceCode: 'Source Code',
  },
  stackCategories: {
    'Backend & APIs': 'Backend & APIs',
    'Infra & OS': 'Infra & OS',
    'Tools & DevOps': 'Tools & DevOps',
    'Frontend (Complementar)': 'Frontend (Complementary)',
    'Styling & UI': 'Styling & UI',
  },
  stack: {
    label: 'Technologies & Tools',
    title: 'My Ecosystem',
  },
  howItWorks: {
    label: 'Working Process',
    title: 'How we can collaborate',
    steps: [
      { title: 'Initial alignment', description: 'We discuss the technical challenges and I seek to deeply understand your product and business context.' },
      { title: 'Technical proposal', description: 'I outline a clear technical approach: architecture, expected timeline, and scope.' },
      { title: 'Development cycle', description: 'I build the solution with regular updates, ensuring transparency and alignment with your team.' },
      { title: 'Delivery & Handoff', description: 'I deliver robust, documented code along with a smooth transition and necessary adjustments.' },
    ],
  },
  contact: {
    label: 'Contact',
    titleLine1: 'Looking for a developer',
    titleLine2: 'for your team?',
    subtitle: 'I am open to new opportunities (full-time or contractor) to help build scalable products.',
    emailBtn: 'Send email',
    whatsappBtn: 'WhatsApp',
    whatsappMsg: 'Hi Alef! I saw your portfolio and would like to talk about an opportunity.',
    footnote: 'I reply personally — no intermediaries, no long forms.',
  },
  footer: {
    madeBy: 'Made with dedication by',
    whatsappMsg: 'Hi Alef! I saw your portfolio and would like to talk about an opportunity.',
  },
  statsData: [
    { value: 'Engineering', label: 'Education', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Technologies', isNumber: true },
    { value: 'Backend', label: 'Main focus', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Projects', isNumber: true }
  ],
  stats: {
    formation: 'Education',
    technologies: 'Technologies',
    mainFocus: 'Main focus',
    projects: 'Projects',
  },
};
