import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="habilidades" className="border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="O que eu domino" title="Habilidades" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
