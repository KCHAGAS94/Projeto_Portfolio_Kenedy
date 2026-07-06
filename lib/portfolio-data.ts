export type Project = {
  title: string
  technologies: string[]
  description: string
  // Coloque aqui o caminho do vídeo (ex: "/videos/projeto-1.mp4") ou deixe vazio para mostrar o placeholder
  videoSrc?: string
  // Coloque aqui os caminhos das imagens do projeto (ex: "/projetos/projeto-1-1.png")
  images: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'Projeto 1',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    description:
      'Descrição breve do projeto. Substitua por um resumo do que ele faz, o problema que resolve e seu papel no desenvolvimento.',
    videoSrc: '',
    images: [],
  },
  {
    title: 'Projeto 2',
    technologies: ['JavaScript', 'Next.js', 'PostgreSQL', 'Git'],
    description:
      'Descrição breve do projeto. Substitua por um resumo do que ele faz, o problema que resolve e seu papel no desenvolvimento.',
    videoSrc: '',
    images: [],
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
  { category: 'Banco de Dados', items: ['PostgreSQL'] },
  { category: 'Controle de Versão', items: ['Git', 'GitHub'] },
  { category: 'Infraestrutura', items: ['VPS', 'PuTTY'] },
  { category: 'Outras Competências', items: ['Sistemas ERP', 'UI e UX', 'Desenvolvimento Web'] },
  { category: 'Idiomas', items: ['Inglês (leitura intermediária)'] },
]
