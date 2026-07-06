import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center">
          <p className="font-serif text-lg text-foreground">Kenedy Chagas</p>
          <p className="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Feito com Next.js
          </p>
        </div>
      </footer>
    </>
  )
}
