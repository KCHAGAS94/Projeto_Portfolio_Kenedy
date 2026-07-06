import { SectionHeading } from '@/components/section-heading'
import { VideoFrame } from '@/components/video-frame'
import { ImageCarousel } from '@/components/image-carousel'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projetos" className="border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="O que eu construí" title="Meus Projetos" />

        <div className="flex flex-col gap-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="font-serif text-2xl text-foreground sm:text-3xl">{project.title}</h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8 space-y-6">
                <VideoFrame src={project.videoSrc} label={`Adicione o vídeo de ${project.title}`} />
                <ImageCarousel images={project.images} title={project.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
