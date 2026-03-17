"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Sistema de Gestão de Estoque",
    description: "Sistema completo para controle e gerenciamento de estoque com dashboard analítico, relatórios e alertas de reposição. Em processo de desenvolvimento contínuo. (User: teste@teste.com  - senha: 123456)",
    url: "https://controlstock.kend.shop/",
    technologies: ["React", "Node.js", "PostgreSQL"],
    status: "Em desenvolvimento"
  },
  {
    title: "Sistema de Gestão de Contas",
    description: "Plataforma para gerenciamento financeiro pessoal e empresarial. Controle de receitas, despesas e fluxo de caixa com visualizações intuitivas.",
    url: "https://gestaoconta.kend.shop/public",
    technologies: ["React", "TypeScript", "Node.js"],
    status: "Em desenvolvimento"
  },
  {
    title: "Rádio Leão de Judá",
    description: "Rádio evangélica online desenvolvida para a Casa de Recuperação de São Sebastião da Bela Vista. Streaming de áudio em tempo real com interface moderna.",
    url: "https://radioleaodejuda.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS", "Netlify"],
    status: "Produção"
  },
  {
    title: "Calculadora de Hora Extra",
    description: "Ferramenta focada em calcular hora extra com precisão, mostrando o valor exato a receber considerando diferentes tipos de adicional.",
    url: "https://calculohoraextra.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "Produção"
  },
  {
    title: "Site Vereador Jamil",
    description: "Portal institucional apresentando os projetos de governo com escrita clara e objetiva. Design responsivo e foco em acessibilidade.",
    url: "https://10milenumerodojamil.netlify.app/",
    technologies: ["HTML", "CSS", "Netlify"],
    status: "Produção"
  }
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-muted-foreground" />
          PROJETOS EM PRODUÇÃO
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <Link 
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg bg-card/50 hover:bg-card border border-transparent hover:border-border transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
        <div className="lg:w-1/4">
          <span className={`inline-block text-xs px-2 py-1 rounded font-medium ${
            project.status === "Em desenvolvimento" 
              ? "bg-primary/20 text-primary" 
              : "bg-secondary text-muted-foreground"
          }`}>
            {project.status}
          </span>
        </div>

        <div className="lg:w-3/4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          </h3>
          
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="text-xs font-mono px-2 py-1 bg-secondary rounded text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
