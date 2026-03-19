"use client"

import { Briefcase, Calendar, TrendingUp, Users, Database, Cog } from "lucide-react"

const experiences = [
  {
    company: "ControlArt Automação",
    position: "Coordenador de Almoxarifado Jr.",
    period: "Maio 2025 – Atual",
    achievements: [
      {
        title: "Arquitetura de Processos",
        description: "Estruturei do zero o fluxo de dados e materiais de um ambiente sem processos definidos, desenhando algoritmos operacionais que garantiram 100% de controle de entrada/saída.",
        icon: <Cog className="w-4 h-4" />
      },
      {
        title: "Business Intelligence (BI) & Analytics",
        description: "Desenvolvi dashboards avançados para monitoramento de KPIs, utilizando lógica de programação em planilhas para transformar dados brutos em decisões estratégicas.",
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        title: "Desenvolvimento de Software Interno", 
        description: "Atualmente liderando o desenvolvimento de uma aplicação própria para integração via API com o ERP da empresa, visando a automação total do inventário e eliminação de processos manuais.",
        icon: <Database className="w-4 h-4" />
      }
    ]
  },
  {
    company: "Infinity do Brasil",
    position: "Líder de Almoxarifado / Analista de Planejamento",
    period: "Novembro 2021 – Maio 2025",
    achievements: [
      {
        title: "Integridade de Dados",
        description: "Responsável pela consistência entre o banco de dados físico e o sistema ERP, atuando na limpeza de dados (data cleaning) e otimização de registros.",
        icon: <Database className="w-4 h-4" />
      },
      {
        title: "Otimização de Sistemas",
        description: "Analisei gargalos em fluxos multidisciplinares e implementei melhorias estruturais que resultaram na redução de 38% nos custos operacionais.",
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        title: "Liderança de Squads",
        description: "Atuei como ponte entre áreas distintas (Qualidade, Compras e Produção), facilitando a comunicação e o alinhamento de requisitos para processos integrados.",
        icon: <Users className="w-4 h-4" />
      }
    ]
  },
  {
    company: "Fênix",
    position: "Líder de Controle de Materiais Jr. / Auxiliar",
    period: "Junho 2015 – Outubro 2021",
    achievements: [
      {
        title: "Gestão de Lógica Kanban",
        description: "Implementei e gerenciei sistemas de controle visual (Kanban), aplicando conceitos de filas e priorização que são fundamentais na metodologia Ágil de desenvolvimento.",
        icon: <Cog className="w-4 h-4" />
      },
      {
        title: "Mapeamento de Processos",
        description: "Realizei a análise e o mapeamento de fluxos de trabalho através de indicadores de desempenho, focando em melhoria contínua e resolução de bugs operacionais.",
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        title: "Análise de Demanda",
        description: "Fui responsável pelo tratamento de divergências e análise de consumo, demonstrando forte raciocínio lógico na resolução de problemas complexos de inventário.",
        icon: <Database className="w-4 h-4" />
      }
    ]
  },
  {
    company: "Plásticos Silveira",
    position: "Assistente Geral",
    period: "Outubro 2009 – Novembro 2014",
    achievements: [
      {
        title: "Base Operacional",
        description: "Início da trajetória profissional com foco em organização logística e atendimento, desenvolvendo disciplina e atenção aos detalhes em fluxos de recebimento e expedição.",
        icon: <Briefcase className="w-4 h-4" />
      }
    ]
  }
]

export function Experience() {
  return (
    <section id="experiencia-profissional" className="py-24 px-6 lg:px-0 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-muted-foreground" />
          EXPERIÊNCIA PROFISSIONAL
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-5 top-12 w-px h-full bg-border" />
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                    <span className="inline-flex items-center gap-1 text-sm px-2 py-1 bg-primary/10 rounded-md text-primary">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-4">{exp.position}</p>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="p-4 bg-background rounded-lg border border-border">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-secondary flex items-center justify-center">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="text-foreground font-medium mb-2">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-16 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Progressão de Carreira
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-bold">16 anos de experiência</span> em otimização de processos e liderança, 
            com foco crescente em soluções tecnológicas. Transição natural de gestor operacional para desenvolvedor, 
            aplicando conhecimento de negócio na criação de sistemas eficientes.
          </p>
        </div>
      </div>
    </section>
  )
}