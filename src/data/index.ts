export const SITE_DATA = {
  profile: {
    name: "Alef Felix",
    title: "Desenvolvedor & Estudante de Engenharia de Software",
    heroDesc: "Construindo minha carreira em Engenharia de Software e desenvolvendo projetos prÃ³prios para impactar pessoas atravÃ©s da tecnologia.",
    aboutDesc1: "Sou o Alef â€” desenvolvedor que encontrou na tecnologia nÃ£o sÃ³ uma profissÃ£o, mas uma forma de pensar. Gosto de entender como as coisas funcionam por dentro, quebrar problemas em partes menores e construir soluÃ§Ãµes que realmente fazem sentido. ProgramaÃ§Ã£o pra mim Ã© mais do que escrever cÃ³digo: Ã© criar algo que nÃ£o existia antes.",
    aboutDesc2: "Trabalho com desenvolvimento web e mobile, exploro inteligÃªncia artificial e estou sempre aprendendo algo novo â€” seja uma tecnologia, um framework ou uma forma diferente de resolver um problema. Acredito que os melhores produtos nascem da curiosidade, e Ã© isso que me move: transformar ideias em experiÃªncias que funcionam no mundo real.",
    email: "aleffelix81@gmail.com",
    github: "https://github.com/aleffelix15",
    linkedin: "https://www.linkedin.com/in/alef-felix-teixeira-a5030b236" 
  },
  stats: [
    { value: 'Engenharia', label: 'FormaÃ§Ã£o', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Tecnologias', isNumber: true },
    { value: 'Em evoluÃ§Ã£o', label: 'Carreira', isNumber: false, prefix: '' },
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
      subtitle: "Descriptografando a ViolÃªncia",
      category: "Frontend Â· UX/UI",
      isHighlight: true,
      demoType: "decode",
      desc: "DECODE Ã© um aplicativo interativo que utiliza tecnologia e narrativa ramificada para conscientizar jovens sobre relacionamentos abusivos e violÃªncia contra a mulher.",
      whyCreated: "A violÃªncia em relacionamentos muitas vezes comeÃ§a de forma invisÃ­vel e silenciosa. Notei que muitas campanhas sÃ£o reativas. O projeto nasceu da necessidade de atuar na raiz do problema, educando jovens a identificar os primeiros sinais (red flags) antes que o abuso se concretize.",
      whatItIsFor: "Serve como uma ferramenta educativa e preventiva. Qualquer jovem ou instituiÃ§Ã£o de ensino pode utilizÃ¡-lo para simular cenÃ¡rios cotidianos e aprender, na prÃ¡tica, as consequÃªncias de certos comportamentos tÃ³xicos disfarÃ§ados de cuidado.",
      whatIDeveloped: "Fui responsÃ¡vel pelo desenvolvimento frontend completo e integraÃ§Ã£o das animaÃ§Ãµes. Utilizei React e TypeScript para estruturar a aplicaÃ§Ã£o de forma tipada e escalÃ¡vel. O Tailwind CSS foi usado para componentizaÃ§Ã£o rÃ¡pida do design, e o Framer Motion foi essencial para criar transiÃ§Ãµes suaves que mantÃªm o usuÃ¡rio imerso na narrativa.",
      results: "O projeto consegue engajar os usuÃ¡rios em discussÃµes difÃ­ceis atravÃ©s de um ambiente seguro e controlado, demonstrando minha capacidade de unir cÃ³digo limpo, boa UX e impacto social.",
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      demoUrl: "https://decode-ochre.vercel.app",
      githubUrl: "https://github.com/aleffelix15/decode",
    },
    {
      id: "banking-api",
      name: "Banking System API",
      subtitle: "Arquitetura robusta para operaÃ§Ãµes financeiras",
      category: "Backend Â· API REST",
      isHighlight: true,
      demoType: "banking",
      desc: "Uma API RESTful completa desenvolvida em Java e Spring Boot que simula as operaÃ§Ãµes essenciais e o fluxo de dados de um banco digital moderno.",
      whyCreated: "TransaÃ§Ãµes financeiras exigem um nÃ­vel rigoroso de seguranÃ§a, consistÃªncia de dados (ACID) e arquitetura sÃ³lida. Criei este projeto para solidificar meus conhecimentos em padrÃµes de projeto do ecossistema Java corporativo e explorar como lidar com regras de negÃ³cio crÃ­ticas.",
      whatItIsFor: "Serve como o motor de um aplicativo bancÃ¡rio digital. Ele processa autenticaÃ§Ã£o de usuÃ¡rios, criaÃ§Ã£o de contas e as principais movimentaÃ§Ãµes financeiras (depÃ³sitos, saques e transferÃªncias), garantindo que os saldos nunca fiquem inconsistentes.",
      whatIDeveloped: "Implementei toda a API usando Java 17 e Spring Boot 3.x. Integrei o Spring Security para autenticaÃ§Ã£o segura. Estruturei o banco de dados relacional com MySQL utilizando JPA/Hibernate para mapeamento objeto-relacional. Criei tambÃ©m a lÃ³gica de validaÃ§Ã£o de saldo e registro histÃ³rico auditÃ¡vel das transaÃ§Ãµes.",
      results: "O resultado Ã© um backend escalÃ¡vel, seguro e testÃ¡vel, que demonstra meu domÃ­nio na stack Java e minha preocupaÃ§Ã£o com a integridade dos dados em sistemas sensÃ­veis.",
      tech: ["Java 17", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL"],
      githubUrl: "https://github.com/aleffelix15/banking-system-api",
    },
    {
      id: "geekfilme",
      name: "GEEKFILME",
      subtitle: "CatÃ¡logo Streaming Geek",
      category: "Frontend Â· UI/UX",
      isHighlight: true,
      demoType: "geekfilme",
      desc: "Uma interface web focada na experiÃªncia do usuÃ¡rio para um catÃ¡logo de filmes e sÃ©ries de cultura geek, inspirada em plataformas de streaming como Netflix e Disney+.",
      whyCreated: "Para praticar e aprofundar meus conhecimentos em desenvolvimento responsivo, estruturaÃ§Ã£o de grids, manipulaÃ§Ã£o de componentes de interface visual e consumo de layouts modernos no front-end.",
      whatItIsFor: "Serve como um modelo de apresentaÃ§Ã£o e navegaÃ§Ã£o de mÃ­dia (filmes, sÃ©ries, clÃ¡ssicos, lanÃ§amentos), permitindo buscar, listar e visualizar o catÃ¡logo em diferentes tamanhos de tela com fluidez.",
      whatIDeveloped: "ConstruÃ­ todo o front-end, aplicando HTML5 para a semÃ¢ntica, CSS3 para a identidade visual (tema dark e cores de destaque) e o framework Bootstrap 4 para garantir o sistema de grid responsivo. Implementei tambÃ©m um carrossel de destaques dinÃ¢mico usando jQuery e componentes interativos (Navbar, Dropdowns e modais de login).",
      results: "O projeto demonstra minha capacidade de criar interfaces ricas, fiÃ©is a requisitos de design, focadas na experiÃªncia do usuÃ¡rio e prontas para integraÃ§Ã£o com APIs de back-end.",
      tech: ["HTML5", "CSS3", "Bootstrap 4", "jQuery", "JavaScript"],
      githubUrl: "https://github.com/aleffelix15/GEEKFILME",
    },
    {
      id: "vertice",
      name: "VÉRTICE",
      subtitle: "E-commerce",
      category: "Frontend • E-commerce",
      isHighlight: true,
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
      category: "PWA Â· Multi-tenant",
      status: "Em desenvolvimento",
      desc: "Plataforma multi-tenant para gestÃ£o de equipes de louvor e tÃ©cnicas: escalas, banco de cifras com motor prÃ³prio de transposiÃ§Ã£o e controle de acesso.",
      tech: ["TanStack Start", "Supabase", "PostgreSQL", "Tailwind v4"]
    },
    {
      id: "fitsync",
      name: "FitSync",
      category: "App Mobile Â· Fitness",
      status: "Em desenvolvimento",
      desc: "App de fitness mobile com biblioteca de exercÃ­cios e alimentos, treinos guiados, timer de descanso e integraÃ§Ã£o de IA para orientaÃ§Ã£o segura.",
      tech: ["React Native", "Expo", "Supabase", "Zustand"]
    },
    {
      id: "techjob-ai",
      name: "TechJob AI",
      category: "Web Â· Job Board",
      status: "Em desenvolvimento",
      desc: "Plataforma de vagas de TI no Brasil, com agregaÃ§Ã£o automÃ¡tica de vagas e analisador de currÃ­culo por IA.",
      tech: ["React", "TypeScript", "Supabase", "Claude API"]
    },
    {
      id: "menteviva",
      name: "MenteViva",
      category: "Web Â· Bem-estar",
      status: "Em desenvolvimento",
      desc: "Aplicativo de autoajuda para registro de humor, metas e conquistas pessoais.",
      tech: ["React", "TypeScript", "Supabase"]
    }
  ]
};

