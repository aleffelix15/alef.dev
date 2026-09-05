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
      subtitle: "Descriptografando a Violência",
      category: "Frontend · UX/UI",
      isHighlight: true,
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
