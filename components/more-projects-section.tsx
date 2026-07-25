'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { moreProjects } from '@/lib/portfolio-data'

export function MoreProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  if (moreProjects.length === 0) return null

  return (
    <section id="mais-projetos" className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Outros trabalhos" title="Mais Projetos" />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {moreProjects.map((project) => (
                <div key={project.title} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%]">
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
                    <h3 className="font-serif text-xl text-foreground sm:text-2xl">{project.title}</h3>
                    <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                        >
                          <ExternalLink className="size-4" />
                          Ver em produção
                        </a>
                      ) : null}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                      >
                        Ver no GitHub
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {moreProjects.length > 1 && (
            <>
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Projeto anterior"
                className="absolute left-0 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:text-primary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Próximo projeto"
                className="absolute right-0 top-1/2 flex size-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:text-primary"
              >
                <ChevronRight className="size-5" />
              </button>

              <div className="mt-8 flex justify-center gap-2">
                {moreProjects.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Ir para o projeto ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      selected === i ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
