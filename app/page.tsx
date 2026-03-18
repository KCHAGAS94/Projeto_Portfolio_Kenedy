import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 lg:px-0">
      <Hero />
      <div className="max-w-4xl mx-auto">
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
