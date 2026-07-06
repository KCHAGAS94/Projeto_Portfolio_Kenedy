import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="mb-6 flex items-center gap-4 text-primary">
          <span className="h-px w-10 bg-primary/60" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Portfólio
          </span>
          <span className="h-px w-10 bg-primary/60" />
        </div>

        <h1 className="font-serif text-5xl leading-tight text-balance text-foreground sm:text-6xl md:text-7xl">
          Kenedy Chagas
        </h1>

        <p className="mt-6 text-base font-light uppercase tracking-[0.3em] text-primary sm:text-lg">
          Desenvolvedor Full Stack
        </p>

        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Construindo aplicações web modernas com React, Next.js, TypeScript e PostgreSQL.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projetos"
            className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver Projetos
          </a>
          <a
            href="#sobre"
            className="rounded-lg border border-border px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Sobre Mim
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}
