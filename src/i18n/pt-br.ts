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
  about: { label: string; title: string };
  education: { label: string; title: string; selfTaughtBadge: string; selfTaughtTag: string; selfTaughtTitle: string; selfTaughtSubtitle: string; selfTaughtDesc: string; degreeBadge: string; degreeTag: string; degreeTitle: string; degreeSubtitle: string; degreeDesc: string };
  projects: { label: string; title: string; subtitle: string };
  projectModal: { demoFallback: string; whyCreated: string; whatItIsFor: string; whatIDeveloped: string; results: string; ecosystem: string; accessApp: string; sourceCode: string };
  stack: { label: string; title: string };
  howItWorks: { label: string; title: string; steps: Step[] };
  contact: { label: string; titleLine1: string; titleLine2: string; subtitle: string; emailBtn: string; whatsappBtn: string; whatsappMsg: string; footnote: string };
  footer: { madeBy: string; whatsappMsg: string };
  stats: { formation: string; technologies: string; mainFocus: string; projects: string };
}
