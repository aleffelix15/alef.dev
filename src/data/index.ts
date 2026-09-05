export const SITE_DATA = {
  profile: {
    name: "Alef Felix",
    title: "Desenvolvedor & Estudante de Engenharia de Software",
    heroDesc: "Construindo minha carreira em Engenharia de Software e desenvolvendo projetos próprios para impactar pessoas através da tecnologia.",
    aboutDesc1: "Sou o Alef — desenvolvedor que encontrou na tecnologia não só uma profissão, mas uma forma de pensar. Gosto de entender como as coisas funcionam por dentro, quebrar problemas em partes menores e construir soluções que realmente fazem sentido. Programação pra mim é mais do que escrever código: é criar algo que não existia antes.",
    aboutDesc2: "Trabalho com desenvolvimento web e mobile, exploro inteligência artificial e estou sempre aprendendo algo novo — seja uma tecnologia, um framework ou uma forma diferente de resolver um problema. Acredito que os melhores produtos nascem da curiosidade, e é isso que me move: transformar ideias em experiências que funcionam no mundo real.",
    email: "aleffelix81@gmail.com",
    github: "https://github.com/aleffelix15",
    linkedin: "https://www.linkedin.com/in/alef-felix-teixeira-a5030b236" 
  },
  stats: [
    { value: 'Engenharia', label: 'Formação', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Tecnologias', isNumber: true },
    { value: 'Em evolução', label: 'Carreira', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Projetos', isNumber: true }
  ],
  stackCategories: [
    {
      name: 'Frontend',
      techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native']
    },
    {
      name: 'Backend & APIs',
      techs: ['Node.js', 'Express', 'Python', 'Supabase', 'PostgreSQL']
    },
    {
      name: 'Styling & UI',
      techs: ['Tailwind CSS', 'Framer Motion', 'Zustand']
    },
    {
      name: 'Tools & DevOps',
      techs: ['Git', 'GitHub', 'Vite', 'Vercel']
    }
  ],
  projects: [
    {
      id: "decode",
      name: "DECODE",
      subtitle: '"Descriptografando a Violência"',
      isHighlight: true,
      desc: "DECODE é um projeto interativo que usa tecnologia e narrativa para conscientizar jovens sobre a violência contra a mulher. Através de um ambiente simulado, o usuário navega por cenários que desmistificam comportamentos tóxicos disfarçados de situações cotidianas.",
      problem: "A violência muitas vezes começa de forma invisível e silenciosa. O objetivo do sistema é atuar na raiz do problema, educando jovens a identificar os primeiros sinais antes que eles se transformem em abuso.",
      solution: "Uma experiência com cenários interativos onde escolhas demonstram consequências e alertam para red flags no relacionamento.",
      results: "O projeto ajudou a trazer à tona discussões difíceis em um ambiente seguro, promovendo educação e conscientização.",
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      demoUrl: "https://decode-ochre.vercel.app",
      githubUrl: "https://github.com/aleffelix15/decode",
      images: [
        "/assets/decode_dashboard.png",
        "/assets/decode_landing.png"
      ]
    },
    {
      id: "hub-harmony",
      name: "Hub Harmony",
      category: "PWA · Multi-tenant",
      status: "Em desenvolvimento",
      desc: "Plataforma multi-tenant para gestão de equipes de louvor e técnicas: escalas, banco de cifras com motor próprio de transposição e controle de acesso.",
      tech: ["TanStack Start", "Supabase", "PostgreSQL", "Tailwind v4"]
    },
    {
      id: "fitsync",
      name: "FitSync",
      category: "App Mobile · Fitness",
      status: "Em desenvolvimento",
      desc: "App de fitness mobile com biblioteca de exercícios e alimentos, treinos guiados, timer de descanso e integração de IA para orientação segura.",
      tech: ["React Native", "Expo", "Supabase", "Zustand"]
    },
    {
      id: "techjob-ai",
      name: "TechJob AI",
      category: "Web · Job Board",
      status: "Em desenvolvimento",
      desc: "Plataforma de vagas de TI no Brasil, com agregação automática de vagas e analisador de currículo por IA.",
      tech: ["React", "TypeScript", "Supabase", "Claude API"]
    },
    {
      id: "menteviva",
      name: "MenteViva",
      category: "Web · Bem-estar",
      status: "Em desenvolvimento",
      desc: "Aplicativo de autoajuda para registro de humor, metas e conquistas pessoais.",
      tech: ["React", "TypeScript", "Supabase"]
    }
  ]
};
