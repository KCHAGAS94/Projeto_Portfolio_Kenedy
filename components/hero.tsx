"use client"

import { Github, Linkedin, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left side - Name and Navigation */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
              Desenvolvedor Full Stack
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              De Operações para Tecnologia
            </p>

            {/* Navigation */}
            <nav className="hidden lg:flex flex-col gap-4 mb-12">
              <NavLink href="#sobre" label="SOBRE" />
              <NavLink href="#experiencia" label="HABILIDADES" />
              <NavLink href="#formacao" label="FORMAÇÃO" />
              <NavLink href="#experiencia-profissional" label="EXPERIÊNCIA" />
              <NavLink href="#projetos" label="PROJETOS" />
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              <SocialLink href="https://github.com/KCHAGAS94" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/kenedychagas" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="https://wa.me/5535997615634" icon={<Phone className="w-5 h-5" />} label="WhatsApp" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-2/3">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Sou um desenvolvedor apaixonado por criar soluções que transformam processos e 
                geram resultados tangíveis. Aos <span className="text-foreground font-medium">31 anos</span>, 
                carrego uma trajetória de <span className="text-foreground font-medium">16 anos</span> marcada 
                pela responsabilidade precoce e pelo crescimento constante.
              </p>
              
              <p>
                Atualmente em transição de <span className="text-primary font-medium">Coordenador de Operações</span> para{" "}
                <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas</span>, 
                utilizo minha experiência em gestão para traduzir dores de negócio em soluções tecnológicas.
              </p>

              <p>
                Especialista em identificar gargalos e otimizar processos, alcancei resultados como a{" "}
                <span className="text-foreground font-medium">redução de 38% em custos operacionais</span>{" "}
                através da reestruturação de dados e automação.
              </p>

              <p>
                Possuo mentalidade analítica e criativa voltada para a arquitetura de soluções{" "}
                <span className="text-primary font-medium">Full Stack</span> com{" "}
                <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">React</span>,{" "}
                <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">Node.js</span> e{" "}
                <span className="font-mono text-sm bg-secondary px-2 py-1 rounded">PostgreSQL</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-4 text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
      {label}
    </Link>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
