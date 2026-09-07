export const SITE_DATA = {
  profile: {
    name: "ÁLEF FELIX",
    title: "Desenvolvedor Full Stack Freelance",
    heroDesc: "Construindo minha carreira em Engenharia de Software e desenvolvendo projetos próprios para impactar pessoas através da tecnologia.",
    aboutDesc1: "Sou o ÁLEF FELIX — desenvolvedor que encontrou na tecnologia não só uma profissão, mas uma forma de pensar. Gosto de entender como as coisas funcionam por dentro, quebrar problemas em partes menores e construir soluções que realmente fazem sentido. Programação pra mim é mais do que escrever código: é criar algo que não existia antes.",
    aboutDesc2: "Trabalho com desenvolvimento web e mobile, exploro inteligência artificial e estou sempre aprendendo algo novo. Venho me dedicando aos estudos desde 2025 e, em 2027, iniciarei minha graduação na UNIFALFA. Acredito que os melhores produtos nascem da curiosidade, e é isso que me move: transformar ideias em experiências que funcionam no mundo real.",
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
      techs: ['Java', 'Spring Boot', 'Python', 'Node.js', 'PostgreSQL', 'Supabase']
    },
    {
      name: 'Styling & UI',
      techs: ['Tailwind CSS', 'Framer Motion', 'Zustand']
    },
    {
      name: 'Tools & DevOps',
      techs: ['Git', 'GitHub', 'Vite', 'Vercel']
    },
    {
      name: 'Infra & OS',
      techs: ['Linux Mint', 'Zorin OS', 'Docker', 'AWS']
    }
  ],
  projects: [
    {
      id: "decode",
      name: "DECODE",
      subtitle: "Descriptografando a Violência",
      category: "Frontend · UX/UI",
      isHighlight: true,
      metric: "6 cenários narrativos ramificados",
      demoType: "decode",
      desc: "DECODE é um aplicativo interativo que utiliza tecnologia e narrativa ramificada para conscientizar jovens sobre relacionamentos abusivos e violência contra a mulher.",
      whyCreated: "A violência em relacionamentos muitas vezes começa de forma invisível e silenciosa. Notei que muitas campanhas são reativas. O projeto nasceu da necessidade de atuar na raiz do problema, educando jovens a identificar os primeiros sinais (red flags) antes que o abuso se concretize.",
      whatItIsFor: "Serve como uma ferramenta educativa e preventiva. Qualquer jovem ou instituição de ensino pode utilizá-lo para simular cenários cotidianos e aprender, na prática, as consequências de certos comportamentos tóxicos disfarçados de cuidado.",
      whatIDeveloped: "Fui responsável pelo desenvolvimento frontend completo e integração das animações. Utilizei React e TypeScript para estruturar a aplicação de forma tipada e escalável. O Tailwind CSS foi usado para componentização rápida do design, e o Framer Motion foi essencial para criar transições suaves que mantêm o usuário imerso na narrativa.",
      results: "O projeto consegue engajar os usuários em discussões difíceis através de um ambiente seguro e controlado, demonstrando minha capacidade de unir código limpo, boa UX e impacto social.",
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      demoUrl: "https://decode-ochre.vercel.app",
      githubUrl: "https://github.com/aleffelix15/decode",
    },
    {
      id: "banking-api",
      name: "Banking System API",
      subtitle: "Arquitetura robusta para operações financeiras",
      category: "Backend · API REST",
      isHighlight: true,
      metric: "12+ endpoints REST com autenticação",
      demoType: "banking",
      desc: "Uma API RESTful completa desenvolvida em Java e Spring Boot que simula as operações essenciais e o fluxo de dados de um banco digital moderno.",
      whyCreated: "Transações financeiras exigem um nível rigoroso de segurança, consistência de dados (ACID) e arquitetura sólida. Criei este projeto para solidificar meus conhecimentos em padrões de projeto do ecossistema Java corporativo e explorar como lidar com regras de negócio críticas.",
      whatItIsFor: "Serve como o motor de um aplicativo bancário digital. Ele processa autenticação de usuários, criação de contas e as principais movimentações financeiras (depósitos, saques e transferências), garantindo que os saldos nunca fiquem inconsistentes.",
      whatIDeveloped: "Implementei toda a API usando Java 17 e Spring Boot 3.x. Integrei o Spring Security para autenticação segura. Estruturei o banco de dados relacional com MySQL utilizando JPA/Hibernate para mapeamento objeto-relacional. Criei também a lógica de validação de saldo e registro histórico auditável das transações.",
      results: "O resultado é um backend escalável, seguro e testável, que demonstra meu domínio na stack Java e minha preocupação com a integridade dos dados em sistemas sensíveis.",
      tech: ["Java 17", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL"],
      githubUrl: "https://github.com/aleffelix15/banking-system-api",
    },
    {
      id: "geekfilme",
      name: "GEEKFILME",
      subtitle: "Vitrine Digital UX Streaming",
      category: "Frontend · UI/UX",
      isHighlight: true,
      metric: "12+ títulos em catálogo multi-categoria com busca em tempo real",
      demoType: "geekfilme",
      desc: "Protótipo de vitrine digital de alta performance com UX inspirada em plataformas de streaming, projetada para catálogos de produtos, moda ou serviços sob demanda.",
      whyCreated: "Desenvolvido para validar a viabilidade de interfaces de navegação fluida e imersiva em catálogos extensos, focando na redução de fricção entre a descoberta do item e a ação de conversão.",
      whatItIsFor: "Serve como base para sistemas de e-commerce modernos, catálogos de delivery ou vitrines de aluguel de itens, onde a experiência visual e a facilidade de busca são críticas para a retenção do usuário.",
      whatIDeveloped: "Implementei a arquitetura de navegação por categorias, motor de busca em tempo real com filtragem instantânea, e um sistema de visualização de detalhes com transições fluidas. Otimizei a performance de carregamento de imagens e a acessibilidade via teclado.",
      results: "O resultado é um modelo de interface escalável e comercialmente viável, que demonstra a aplicação de padrões de UX de entretenimento em contextos de negócios e vendas.",
      tech: ["HTML5", "CSS3", "Bootstrap 4", "jQuery", "JavaScript"],
      githubUrl: "https://github.com/aleffelix15/GEEKFILME",
    },
    {
      id: "vertice",
      name: "VÉRTICE",
      subtitle: "E-commerce",
      category: "Frontend — E-commerce",
      isHighlight: true,
      metric: "Catálogo com filtro e busca em tempo real",
      demoType: "vertice",
      desc: "Plataforma de e-commerce moderna voltada para a venda de roupas com design focado em experiência do usuário e conversão rápida.",
      whyCreated: "Projeto desenvolvido para explorar a construção de uma experiência de e-commerce contemporânea, unindo uma estética marcante e navegação fluida pelo catálogo de produtos.",
      whatItIsFor: "Permite explorar novidades e coleções, visualizar informações detalhadas e realizar interações de compra através de uma interface responsiva.",
      whatIDeveloped: "Desenvolvi toda a interface front-end utilizando React e Vite. Apliquei Tailwind CSS junto aos componentes do Radix UI (Shadcn) para estruturar a identidade visual e os componentes interativos.",
      results: "O projeto reflete minha capacidade de criar e-commerces com identidade visual forte, focados na experiência de usuário (UX) e em performance.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite"],
      githubUrl: "https://github.com/aleffelix15/VERTICE67"
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
