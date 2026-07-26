export type Project = {
  title: string
  technologies: string[]
  description: string
  liveUrl?: string
  githubUrl?: string
  // Coloque aqui o caminho do vídeo (ex: "/videos/projeto-1.mp4") ou deixe vazio para mostrar o placeholder
  videoSrc?: string
  // Coloque aqui os caminhos das imagens do projeto (ex: "/projetos/projeto-1-1.png")
  images?: string[]
}

export type MoreProject = {
  title: string
  description: string
  githubUrl: string
  liveUrl?: string
}

export type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'WebTech Premium App',
    technologies: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT', 'Tailwind CSS', 'Git', 'GitHub','Play Store','VPS', 'PuTTY', 'UI e UX', 'API'],
    description:
      'Mono repositório com aplicativo mobile em React Native (Expo) e painel administrativo em Next.js para gerenciamento de apps instalados via leitura de listas M3U. A identificação dos dispositivos é feita por endereço MAC, com sincronização entre o app e o painel, autenticação JWT, API integrada e persistência em PostgreSQL com Prisma.',
    githubUrl: 'https://github.com/KCHAGAS94/webtechpremium-app',
    videoSrc: '/projects/webtechpremium-app/gravacao-final.mp4',
    images: [
      '/projects/webtechpremium-app/1-home.jpeg',
      '/projects/webtechpremium-app/2-tvaovivo.jpeg',
      '/projects/webtechpremium-app/3-filmes.jpeg',
      '/projects/webtechpremium-app/4-series.jpeg',
      '/projects/webtechpremium-app/5-configuração.jpeg',
      '/projects/webtechpremium-app/6-minhaslistas.jpeg',
      '/projects/webtechpremium-app/7-painelusuarios.png',
      '/projects/webtechpremium-app/8-painelservidor.png',
    ],
  },
  {
    title: 'Site: Aniversário de 15 anos',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'API PAGAMENTOS', 'Tailwind CSS', 'Git', 'GitHub', 'VPS', 'PuTTY', 'UI e UX'],
    description:
      'Desenvolvi uma plataforma web para convite de festa de 15 anos, com foco em experiência visual, confirmação de presença e gestão do evento. O projeto foi construído com Next.js, React e Tailwind CSS, incluindo RSVP com persistência em PostgreSQL e integração com Mercado Pago para pagamentos via PIX e cartão, além de páginas administrativas para acompanhamento de confirmados e status de pagamentos.',
    liveUrl: 'https://15anosvitoriaemanuelly.kchagas.com.br',
    githubUrl: 'https://github.com/KCHAGAS94/site-niver-15-anos',
    videoSrc: '/projects/site-niver-15-anos/gravacao-final.mp4',
    images: [
      '/projects/site-niver-15-anos/capa.png',
      '/projects/site-niver-15-anos/sobre.png',
      '/projects/site-niver-15-anos/momentos.png',
      '/projects/site-niver-15-anos/lista-presente-1.png',
      '/projects/site-niver-15-anos/lista-presente-2.png',
      '/projects/site-niver-15-anos/lista-presente-3.png',
      '/projects/site-niver-15-anos/lista-presente-4.png',
      '/projects/site-niver-15-anos/checkout-1-pix.png',
      '/projects/site-niver-15-anos/checkout-2-pix.png',
      '/projects/site-niver-15-anos/checkout-1-credito.png',
      '/projects/site-niver-15-anos/site-confirmacao.png',
      '/projects/site-niver-15-anos/site-confirmados.png',
      '/projects/site-niver-15-anos/relatorio-pagamentos.png',

    ],
  },
  {
    title: 'OpenFest',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Git', 'GitHub'],
    description:
      'Sistema de gerenciamento de eventos com frente de caixa (PDV), suporte a pagamentos em dinheiro, PIX e crédito, gestão de produtos, impressão de recibos e painéis administrativos de dashboard, financeiro e funcionários.',
    githubUrl: 'https://github.com/KCHAGAS94/OpenFest',
    videoSrc: '/projects/OpenFest/gravacao-final.mp4',
    images: [
      '/projects/OpenFest/2-caixa.png',
      '/projects/OpenFest/3-formadepagamento.png',
      '/projects/OpenFest/4-pagamentodinheiro.png',
      '/projects/OpenFest/5-pagamentopix.png',
      '/projects/OpenFest/6-pagamentocredito.png',
      '/projects/OpenFest/7-gestaoprodutos.png',
      '/projects/OpenFest/8-novoproduto.png',
      '/projects/OpenFest/9-reciboimpressao1.png',
      '/projects/OpenFest/10-reciboimpressao2.jpeg',
      '/projects/OpenFest/11-painel-dashboard.png',
      '/projects/OpenFest/12-painel-financeiro.png',
      '/projects/OpenFest/13-painel-funcionarios.png',
      '/projects/OpenFest/14-painel-produtos1.png',
      '/projects/OpenFest/15-painel-produtos2.png',
    ],
  },
  {
    title: 'Sistema Integrado Omie - Almoxarifado',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'API Omie', 'Git', 'GitHub'],
    description:
      'Suíte de programas integrados à API do Omie para gestão de almoxarifado, composta por Menu principal, Separador, Recebimento, Separador de OP, Separador de Remessa, Inventário, Requisição de Material, Estoque, Relatórios e programas auxiliares, cada um com frontend e backend próprios em arquitetura de monorepo.',
    githubUrl: 'https://github.com/KCHAGAS94/ProgramasOmieAlmox',
    videoSrc: '/projects/ProgramasOmieAlmox/gravacao-final.mp4',
    images: [],
  },
]

// Projetos exibidos no carrossel "Mais Projetos": apenas título, descrição e link do repositório
export const moreProjects: MoreProject[] = [
  {
    title: 'Gestão de Contas',
    description:
      'Aplicação web para controle financeiro pessoal, com cadastro de transações e limites de gastos. Desenvolvida com Next.js, TypeScript e Tailwind CSS, utilizando Prisma e PostgreSQL para persistência dos dados e autenticação via JWT.',
    githubUrl: 'https://github.com/KCHAGAS94/gestaocontas3',
    liveUrl: 'https://gestaocontas.vercel.app/public',
  },
  {
    title: 'Consultoria Kenedy Chagas',
    description:
      'Site institucional para proposta profissional de consultoria voltada à melhoria de processos no chão de fábrica, almoxarifado, produção, compras e planejamento. Desenvolvido com Next.js, TypeScript, Tailwind CSS e componentes Radix UI.',
    githubUrl: 'https://github.com/KCHAGAS94/mentoria-gestao',
    liveUrl: 'https://kchagasconsultoria.vercel.app/',
  },
  {
    title: 'Cálculo de Hora Extra',
    description:
      'Ferramenta web que calcula, de forma simples e rápida, o valor das horas extras trabalhadas. O usuário informa o mês, o salário, as horas trabalhadas e as horas extras (50%, 70% e 100%), e o site retorna o valor devido, incluindo o adicional de Descanso Semanal Remunerado (DSR).',
    githubUrl: 'https://github.com/KCHAGAS94/over_time',
    liveUrl: 'https://calculohoraextra.netlify.app/',
  },
  {
    title: 'Rádio Leão de Judá',
    description:
      'Site institucional para uma rádio online, com apresentação da rádio, grade de programação e horários, área de doações e seção de apoiadores.',
    githubUrl: 'https://github.com/KCHAGAS94/radioleaodejuda',
    liveUrl: 'https://radioleaodejuda.netlify.app/',
  },
  {
    title: '10 Mil - Número do Jamil',
    description:
      'Site institucional de campanha para candidato a vereador, apresentando biografia, trabalhos voluntários, apoiadores, indicações e propostas de governo como capacitação profissional, educação financeira e transparência escolar.',
    githubUrl: 'https://github.com/KCHAGAS94/Vereador_Jamil',
    liveUrl: 'https://10milenumerodojamil.netlify.app/',
  },
  {
    title: 'Swing Samba',
    description:
      'Painel de gestão para eventos de samba, com agenda, lista de convidados e controle de arquivos, facilitando a organização e o acompanhamento das confirmações de presença.',
    githubUrl: 'https://github.com/KCHAGAS94/swing-samba',
    liveUrl: 'https://swingsamba.netlify.app/',
  },
  {
    title: 'Lista de Compras',
    description:
      'Aplicação para criação e gerenciamento de listas de compras, permitindo adicionar, marcar e organizar produtos. Desenvolvida com Next.js e React Context para gerenciamento de estado.',
    githubUrl: 'https://github.com/KCHAGAS94/lista-compras',
    liveUrl: 'https://listacomprar.netlify.app/',
  },
  {
    title: 'Controle de Compras',
    description:
      'Sistema para controle pessoal de compras e gastos, com cadastro de compras e geração de relatórios. Utiliza Firebase para autenticação e persistência dos dados.',
    githubUrl: 'https://github.com/KCHAGAS94/controle-finaceiro',
  },
  {
    title: 'WebTechFlix',
    description:
      'Assistente pessoal para descobrir filmes com base no humor ou preferência do usuário: basta descrever como está se sentindo ou o tipo de filme desejado que a aplicação sugere os títulos mais adequados.',
    githubUrl: 'https://github.com/KCHAGAS94/botflixv1',
  },
  {
    title: 'BaixaTube',
    description:
      'Aplicação para download de vídeos do YouTube, com interface moderna e responsiva construída em React, Vite e Tailwind CSS, incluindo validação de URLs e feedback visual durante o processamento.',
    githubUrl: 'https://github.com/KCHAGAS94/baixatube',
  },
  {
    title: 'Sistema de Gestão de Projetos',
    description:
      'Protótipo de sistema para gestão de projetos com quadro kanban, cadastro de usuários, cards e atividades. Estrutura profissional em React, Vite e TypeScript no frontend, com json-server simulando a API no backend.',
    githubUrl: 'https://github.com/KCHAGAS94/sistema-criar-prototipo',
  },
  {
    title: 'ValueBet Tracker',
    description:
      'Dashboard para acompanhamento de partidas e oportunidades de apostas de valor (value bets) no Brasileirão Série A. Monorepo com backend em Express servindo uma API de partidas e frontend em Vite, React e Tailwind CSS.',
    githubUrl: 'https://github.com/KCHAGAS94/ValueBetTracker',
  },
  {
    title: 'PNK Automação',
    description:
      'Site institucional para empresa de automação e soluções elétricas, apresentando a marca e os serviços oferecidos. Desenvolvido com Next.js e TypeScript.',
    githubUrl: 'https://github.com/KCHAGAS94/pnkautomacao',
  },
  {
    title: 'Gestão de Tarefas Diárias',
    description:
      'Aplicação web para organização de tarefas do dia a dia, com tela de login e página para acompanhamento das tarefas cadastradas pelo usuário.',
    githubUrl: 'https://github.com/KCHAGAS94/Gestao_tarefas_diaria',
  },
  {
    title: 'ERP Império Niltanielle',
    description:
      'Sistema ERP full-stack sob medida, com módulos de cadastro de clientes e fornecedores, contas a receber e pagamentos, fluxo de caixa e DRE, PCP, ordens de produção, estrutura de produtos e controle de estoque. Frontend em React, Vite e Tailwind CSS, backend em Node.js e Express.',
    githubUrl: 'https://github.com/KCHAGAS94/erp-imperioniltan',
  },
  {
    title: 'Painel de Estudos',
    description:
      'Painel para organização de rotina de estudos, com login, cadastro de usuário, plano de estudos e anotações de tarefas.',
    githubUrl: 'https://github.com/KCHAGAS94/agenda-de-estudo',
  },
]

export const experiences: Experience[] = [
  {
    company: 'ControlArt Automação',
    role: 'Coordenador de Almoxarifado Jr.',
    period: 'Maio 2025 – Atual',
    highlights: [
      'Arquitetura de Processos: estruturei do zero o fluxo de dados e materiais de um ambiente sem processos definidos, desenhando algoritmos operacionais que garantiram 100% de controle de entrada/saída.',
      'Business Intelligence (BI) & Analytics: desenvolvi dashboards avançados para monitoramento de KPIs, usando lógica de programação em planilhas para transformar dados brutos em decisões estratégicas.',
      'Desenvolvimento de Software Interno: liderando o desenvolvimento de uma aplicação própria para integração via API com o ERP da empresa, visando a automação total do inventário.',
    ],
  },
  {
    company: 'Infinity do Brasil',
    role: 'Líder de Almoxarifado / Analista de Planejamento',
    period: 'Julho 2023 – Maio 2025',
    highlights: [
      'Integridade de Dados: responsável pela consistência entre o banco de dados físico e o sistema ERP, atuando na limpeza de dados (data cleaning) e otimização de registros.',
      'Otimização de Sistemas: analisei gargalos em fluxos multidisciplinares e implementei melhorias estruturais que resultaram na redução de 38% nos custos operacionais.',
      'Liderança de Squads: atuei como ponte entre áreas distintas (Qualidade, Compras e Produção), alinhando requisitos para processos integrados.',
    ],
  },
  {
    company: 'Fênix',
    role: 'Líder de Controle de Materiais Jr. / Auxiliar',
    period: 'Junho 2015 – Outubro 2021',
    highlights: [
      'Gestão de Lógica Kanban: implementei e gerenciei sistemas de controle visual (Kanban), aplicando conceitos de filas e priorização fundamentais na metodologia Ágil.',
      'Mapeamento de Processos: realizei a análise e o mapeamento de fluxos de trabalho através de indicadores de desempenho, focando em melhoria contínua.',
      'Análise de Demanda: responsável pelo tratamento de divergências e análise de consumo, aplicando raciocínio lógico na resolução de problemas complexos de inventário.',
    ],
  },
]

export const skills: { category: string; items: string[] }[] = [
  { category: 'Linguagens', items: ['JavaScript', 'TypeScript'] },
  { category: 'Frameworks & Bibliotecas', items: ['React', 'Next.js'] },
  { category: 'Banco de Dados', items: ['PostgreSQL', 'Firebase'] },
  { category: 'Controle de Versão', items: ['Git', 'GitHub'] },
  { category: 'Infraestrutura', items: ['Play Store','VPS', 'PuTTY'] },
  { category: 'Outras Competências', items: ['Sistemas ERP', 'UI e UX', 'Desenvolvimento Web'] },
  { category: 'Idiomas', items: ['Inglês (leitura intermediária)'] },
]
