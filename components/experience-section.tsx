import { SectionHeading } from '@/components/section-heading'
import { experiences } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Minha trajetória" title="Experiências" />

      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp) => (
          <li key={exp.company} className="mb-12 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {exp.period}
            </p>
            <h3 className="mt-1 font-serif text-xl text-foreground sm:text-2xl">{exp.company}</h3>
            <p className="text-sm font-medium text-muted-foreground">{exp.role}</p>

            <ul className="mt-4 space-y-3">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
