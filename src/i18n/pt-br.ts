export const ptBR = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    trajectory: 'Trajetória',
    projects: 'Projetos',
    ecosystem: 'Ecossistema',
    contact: 'Contato',
  },
  hero: {
    available: 'Disponível para novos desafios',
    line1: 'DESENVOLVEDOR',
    line2: 'BACKEND',
    line3: 'FOCADO EM',
    line4: 'ARQUITETURA',
    subtitle: 'Construindo sistemas robustos, APIs seguras e garantindo escalabilidade e integridade dos dados.',
    cta1: 'Ver projetos',
    cta2: 'Entrar em contato',
    codeRole: 'Backend Developer',
    codeFocus: "['Java', 'Spring Boot', 'PostgreSQL']",
    codeLearning: 'Cloud & Scalability',
    codeFnName: 'architectSystem',
    codeFnParam: 'requirements',
    codeFnReturn: '/* -> robustez -> escalabilidade -> segurança */',
    codeConsoleArg: 'Seu projeto',
    codeComment: '// Pronto para construir arquiteturas sólidas 🚀',
  },
  marquee: {
    text: 'SOFTWARE ENGINEERING • CREATIVE TECHNOLOGY • UI/UX DESIGN • BACKEND DEVELOPMENT • ',
  },
  about: {
    label: 'Sobre mim',
    title: 'Quem está por trás do código',
    desc1: 'Sou o ÁLEF FELIX — desenvolvedor focado no backend que encontrou na tecnologia uma forma de resolver problemas complexos. Gosto de entender como as coisas funcionam por baixo dos panos, projetar bancos de dados eficientes e construir APIs seguras que entregam valor desde o primeiro dia. Programação, pra mim, é traduzir regras de negócio críticas em sistemas escaláveis e confiáveis.',
    desc2: 'Minha experiência prática se reflete nos projetos que construo: APIs estruturadas com rigor financeiro, bancos de dados relacionais bem modelados e arquiteturas limpas. Tenho o frontend como habilidade complementar, o que me permite entender a aplicação de ponta a ponta. Atualmente, estudo Engenharia de Software na UNIALFA para aprofundar as bases teóricas daquilo que já aplico na prática.',
  },
  education: {
    label: 'Educação',
    title: 'Formação & Trajetória',
    selfTaughtBadge: '2025 — EM ANDAMENTO',
    selfTaughtTag: 'Autodidata',
    selfTaughtTitle: 'Formação Autodidata em Desenvolvimento Backend',
    selfTaughtSubtitle: 'Estudo intensivo e projetos reais',
    selfTaughtDesc: 'Desde 2025, venho me aprofundando de forma autodidata em desenvolvimento backend, aplicando o conhecimento diretamente em projetos reais (Banking System API, DECODE, portfólio próprio) em vez de esperar o ambiente acadêmico formal.',
    degreeBadge: '2027 — FUTURO',
    degreeTag: 'A iniciar',
    degreeTitle: 'Bacharelado em Engenharia de Software',
    degreeSubtitle: 'UniAlfa',
    degreeDesc: 'Estudando os fundamentos da ciência da computação, engenharia de software e práticas de desenvolvimento de sistemas. Aplicando ativamente os conhecimentos acadêmicos na construção de projetos reais, com forte foco em arquitetura de software escalável, segurança de dados e experiência do usuário (UX/UI).',
  },
  projects: {
    label: 'Projetos',
    title: 'Projetos & Construções',
    subtitle: 'Aplicações reais, arquiteturas escaláveis e experiências interativas. Clique nos cards para testar as demonstrações.',
  },
  projectsData: {
    "banking-api": {
      subtitle: "Arquitetura robusta para operações financeiras",
      category: "Backend · API REST",
      metric: "12+ endpoints REST com autenticação",
      desc: "Uma API RESTful completa desenvolvida em Java e Spring Boot que simula as operações essenciais e o fluxo de dados de um banco digital moderno.",
      whyCreated: "Sistemas financeiros não perdoam erro: um bug de arredondamento ou uma falha de autenticação pode custar dinheiro real e confiança do cliente.",
      whatItIsFor: "Uma API que sustenta as operações centrais de um banco digital — cadastro, autenticação, depósito, saque e transferência — com regras que impedem saldo inconsistente mesmo sob uso simultâneo.",
      whatIDeveloped: "Arquitetura em Java 17 + Spring Boot com Spring Security para autenticação, JPA/Hibernate sobre MySQL para persistência confiável, e um histórico auditável de cada transação — a mesma base que qualquer sistema com dinheiro real exige.",
      results: "12+ endpoints testados e documentados, prontos para integrar num app ou sistema interno sem expor o negócio a risco de inconsistência de dados.",
      status: ""
    },
    "decode": {
      subtitle: "Descriptografando a Violência",
      category: "Frontend · UX/UI",
      metric: "6 cenários narrativos ramificados",
      desc: "DECODE é um aplicativo interativo que utiliza tecnologia e narrativa ramificada para conscientizar jovens sobre relacionamentos abusivos e violência contra a mulher.",
      whyCreated: "Relacionamentos abusivos raramente começam com um tapa — começam com um comportamento disfarçado de cuidado que a vítima não sabe nomear. A maioria das campanhas de prevenção chega tarde, quando o padrão já está instalado.",
      whatItIsFor: "DECODE simula, em 6 cenários ramificados, situações do dia a dia onde o usuário escolhe como reagir e vê a consequência de cada escolha — sem palestra, sem culpa, com repetição segura até o padrão ficar claro. Pensado para escolas e projetos sociais aplicarem em minutos, sem preparo técnico.",
      whatIDeveloped: "Toda a experiência interativa — motor de narrativa ramificada, transições que mantêm o usuário imerso, tipagem completa em TypeScript para evitar bugs em produção — foi construída e entregue por mim, do zero ao deploy.",
      results: "Ferramenta pronta para uso real, testável em uma aula ou oficina, unindo impacto social a um padrão de qualidade que aguenta uso por várias pessoas ao mesmo tempo.",
      status: ""
    },
    "geekfilme": {
      subtitle: "Vitrine Digital UX Streaming",
      category: "Frontend · UI/UX",
      metric: "12+ títulos em catálogo multi-categoria com busca em tempo real",
      desc: "Protótipo de vitrine digital de alta performance com UX inspirada em plataformas de streaming, projetada para catálogos de produtos, moda ou serviços sob demanda.",
      whyCreated: "Catálogos grandes (produto, delivery, streaming) perdem cliente no meio do caminho quando a busca é lenta ou a navegação cansa. Quis provar que dá para ter a fluidez de uma plataforma de streaming num catálogo comum.",
      whatItIsFor: "Uma vitrine com busca instantânea e navegação por categoria pensada para qualquer negócio com catálogo extenso — moda, delivery, aluguel — reduzir o tempo entre 'encontrei' e 'comprei'.",
      whatIDeveloped: "Motor de busca em tempo real, sistema de detalhes com transição fluida e otimização de carregamento de imagem — tudo pensado para funcionar bem mesmo com dezenas de itens e conexão de internet fraca.",
      results: "Modelo replicável para qualquer negócio que precise transformar navegação de catálogo em venda, com performance testada mesmo em telas menores.",
      status: ""
    },
    "vertice": {
      subtitle: "E-commerce",
      category: "Frontend — E-commerce",
      metric: "Catálogo com filtro e busca em tempo real",
      desc: "Plataforma de e-commerce moderna voltada para a venda de roupas com design focado em experiência do usuário e conversão rápida.",
      whyCreated: "E-commerce de moda vive de duas coisas: identidade visual que vende e uma navegação que não trava a compra por impulso.",
      whatItIsFor: "Loja virtual completa — do catálogo à ficha de produto — com identidade visual forte, pensada para marcas que precisam parecer maiores do que são.",
      whatIDeveloped: "Interface construída em React + Vite, com Tailwind e componentes Radix/Shadcn para manter consistência visual e velocidade de carregamento em todas as páginas.",
      results: "Base pronta para qualquer marca de moda ou produto lançar uma loja com cara profissional sem depender de plataformas genéricas.",
      status: ""
    },
    "fitsync": {
      category: "App Mobile · Fitness",
      desc: "App de fitness mobile com biblioteca de exercícios e alimentos, treinos guiados, timer de descanso e integração de IA para orientação segura.",
      status: "Em breve"
    },
    "techjob-ai": {
      category: "Web · Job Board",
      desc: "Plataforma de vagas de TI no Brasil, com agregação automática de vagas e analisador de currículo por IA.",
      status: "Em breve"
    },
    "menteviva": {
      category: "Web · Bem-estar",
      desc: "Aplicativo de autoajuda para registro de humor, metas e conquistas pessoais.",
      status: "Em breve"
    }
  },
  projectModal: {
    demoFallback: 'Área de Demonstração Interativa',
    whyCreated: 'Por que foi criado?',
    whatItIsFor: 'Para que serve?',
    whatIDeveloped: 'O que desenvolvi?',
    results: 'Resultados',
    ecosystem: 'Ecossistema',
    accessApp: 'Acessar Aplicação',
    sourceCode: 'Código Fonte',
  },
  stackCategories: {
    'Backend & APIs': 'Backend & APIs',
    'Infra & OS': 'Infra & OS',
    'Tools & DevOps': 'Ferramentas & DevOps',
    'Frontend (Complementar)': 'Frontend (Complementar)',
    'Styling & UI': 'Estilização & UI',
  },
  stack: {
    label: 'Tecnologias & Ferramentas',
    title: 'Meu Ecossistema',
  },
  howItWorks: {
    label: 'Processo de Trabalho',
    title: 'Como funciona a parceria',
    steps: [
      { title: 'Conversa inicial', description: 'Você me conta o problema, eu entendo o contexto do seu negócio antes de falar em solução.' },
      { title: 'Proposta', description: 'Envio um escopo claro: o que será feito, prazo estimado e valor — sem letras miúdas.' },
      { title: 'Desenvolvimento', description: 'Construo o projeto com atualizações periódicas, para você acompanhar o progresso.' },
      { title: 'Entrega', description: 'Entrego funcionando, com um período de ajustes incluído.' },
    ],
  },
  contact: {
    label: 'Contato',
    titleLine1: 'Buscando desenvolvedor',
    titleLine2: 'para o seu time?',
    subtitle: 'Estou aberto a oportunidades (CLT ou PJ) para atuar na construção de produtos escaláveis.',
    emailBtn: 'Enviar e-mail',
    whatsappBtn: 'WhatsApp',
    whatsappMsg: 'Olá Alef! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
    footnote: 'Respondo pessoalmente — sem intermediários, sem formulário longo.',
  },
  footer: {
    madeBy: 'Feito com dedicação por',
    whatsappMsg: 'Olá Alef! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
  },
  statsData: [
    { value: 'Engenharia', label: 'Formação', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Tecnologias', isNumber: true },
    { value: 'Backend', label: 'Foco principal', isNumber: false, prefix: '' },
    { value: 10, prefix: '+', label: 'Projetos', isNumber: true }
  ],
  stats: {
    formation: 'Formação',
    technologies: 'Tecnologias',
    mainFocus: 'Foco principal',
    projects: 'Projetos',
  },
};

interface Step {
  title: string;
  description: string;
}

export interface Translations {
  nav: { home: string; about: string; trajectory: string; projects: string; ecosystem: string; contact: string };
  hero: { available: string; line1: string; line2: string; line3: string; line4: string; subtitle: string; cta1: string; cta2: string; codeRole: string; codeFocus: string; codeLearning: string; codeFnName: string; codeFnParam: string; codeFnReturn: string; codeConsoleArg: string; codeComment: string };
  marquee: { text: string };
  about: { label: string; title: string; desc1: string; desc2: string };
  education: { label: string; title: string; selfTaughtBadge: string; selfTaughtTag: string; selfTaughtTitle: string; selfTaughtSubtitle: string; selfTaughtDesc: string; degreeBadge: string; degreeTag: string; degreeTitle: string; degreeSubtitle: string; degreeDesc: string };
  projects: { label: string; title: string; subtitle: string };
  projectsData: Record<string, any>;
  projectModal: { demoFallback: string; whyCreated: string; whatItIsFor: string; whatIDeveloped: string; results: string; ecosystem: string; accessApp: string; sourceCode: string };
  stackCategories: Record<string, string>;
  stack: { label: string; title: string };
  howItWorks: { label: string; title: string; steps: Step[] };
  contact: { label: string; titleLine1: string; titleLine2: string; subtitle: string; emailBtn: string; whatsappBtn: string; whatsappMsg: string; footnote: string };
  footer: { madeBy: string; whatsappMsg: string };
  statsData: any[];
  stats: { formation: string; technologies: string; mainFocus: string; projects: string };
}
