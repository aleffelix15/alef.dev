export const SITE_DATA = {
  profile: {
    name: "ÁLEF FELIX",
    title: "Desenvolvedor Full Stack Freelance",
    heroDesc: "Construindo minha carreira em Engenharia de Software e desenvolvendo projetos próprios para impactar pessoas através da tecnologia.",
    aboutDesc1: "Sou o ÁLEF FELIX — desenvolvedor que encontrou na tecnologia não só uma profissão, mas uma forma de resolver problemas reais. Gosto de entender como as coisas funcionam por dentro, quebrar desafios complexos em partes menores e construir soluções que entregam valor desde o primeiro dia. Programação, pra mim, é traduzir a necessidade de um negócio em produtos escaláveis e confiáveis.",
    aboutDesc2: "Minha experiência prática se reflete nos projetos que construo: desde vitrines de e-commerce otimizadas e motores de busca instantâneos, até APIs estruturadas com rigor financeiro e plataformas interativas de impacto social. Trabalho com desenvolvimento web e mobile, e em 2027 iniciarei minha graduação na UNIFALFA para aprofundar as bases teóricas daquilo que já construo e testo todos os dias no mundo real.",
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
      whyCreated: "Relacionamentos abusivos raramente começam com um tapa — começam com um comportamento disfarçado de cuidado que a vítima não sabe nomear. A maioria das campanhas de prevenção chega tarde, quando o padrão já está instalado.",
      whatItIsFor: "DECODE simula, em 6 cenários ramificados, situações do dia a dia onde o usuário escolhe como reagir e vê a consequência de cada escolha — sem palestra, sem culpa, com repetição segura até o padrão ficar claro. Pensado para escolas e projetos sociais aplicarem em minutos, sem preparo técnico.",
      whatIDeveloped: "Toda a experiência interativa — motor de narrativa ramificada, transições que mantêm o usuário imerso, tipagem completa em TypeScript para evitar bugs em produção — foi construída e entregue por mim, do zero ao deploy.",
      results: "Ferramenta pronta para uso real, testável em uma aula ou oficina, unindo impacto social a um padrão de qualidade que aguenta uso por várias pessoas ao mesmo tempo.",
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
      whyCreated: "Sistemas financeiros não perdoam erro: um bug de arredondamento ou uma falha de autenticação pode custar dinheiro real e confiança do cliente.",
      whatItIsFor: "Uma API que sustenta as operações centrais de um banco digital — cadastro, autenticação, depósito, saque e transferência — com regras que impedem saldo inconsistente mesmo sob uso simultâneo.",
      whatIDeveloped: "Arquitetura em Java 17 + Spring Boot com Spring Security para autenticação, JPA/Hibernate sobre MySQL para persistência confiável, e um histórico auditável de cada transação — a mesma base que qualquer sistema com dinheiro real exige.",
      results: "12+ endpoints testados e documentados, prontos para integrar num app ou sistema interno sem expor o negócio a risco de inconsistência de dados.",
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
      whyCreated: "Catálogos grandes (produto, delivery, streaming) perdem cliente no meio do caminho quando a busca é lenta ou a navegação cansa. Quis provar que dá para ter a fluidez de uma plataforma de streaming num catálogo comum.",
      whatItIsFor: "Uma vitrine com busca instantânea e navegação por categoria pensada para qualquer negócio com catálogo extenso — moda, delivery, aluguel — reduzir o tempo entre 'encontrei' e 'comprei'.",
      whatIDeveloped: "Motor de busca em tempo real, sistema de detalhes com transição fluida e otimização de carregamento de imagem — tudo pensado para funcionar bem mesmo com dezenas de itens e conexão de internet fraca.",
      results: "Modelo replicável para qualquer negócio que precise transformar navegação de catálogo em venda, com performance testada mesmo em telas menores.",
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
      whyCreated: "E-commerce de moda vive de duas coisas: identidade visual que vende e uma navegação que não trava a compra por impulso.",
      whatItIsFor: "Loja virtual completa — do catálogo à ficha de produto — com identidade visual forte, pensada para marcas que precisam parecer maiores do que são.",
      whatIDeveloped: "Interface construída em React + Vite, com Tailwind e componentes Radix/Shadcn para manter consistência visual e velocidade de carregamento em todas as páginas.",
      results: "Base pronta para qualquer marca de moda ou produto lançar uma loja com cara profissional sem depender de plataformas genéricas.",
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
