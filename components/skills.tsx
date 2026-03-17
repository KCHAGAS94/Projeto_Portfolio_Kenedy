"use client"

const skills = {
  linguagens: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["React", "Next.js", "Tailwind CSS"],
  bancosDados: ["PostgreSQL", "SQL"],
  ferramentas: ["Git", "GitHub", "VPS + PuTTY", "VS Code"],
  competencias: ["UI e UX", "Desenvolvimento Web", "Business Intelligence", "Sistemas ERP"],
  gestao: ["Liderança de Equipes", "Otimização de Processos", "Análise de Dados", "Gestão de Projetos"],
  idiomas: ["Português (Nativo)", "Inglês (Leitura Intermediária)"]
}

export function Skills() {
  return (
    <section id="experiencia" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-muted-foreground" />
          HABILIDADES E COMPETÊNCIAS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Linguagens" skills={skills.linguagens} />
          <SkillCategory title="Frameworks" skills={skills.frameworks} />
          <SkillCategory title="Bancos de Dados" skills={skills.bancosDados} />
          <SkillCategory title="Ferramentas" skills={skills.ferramentas} />
          <SkillCategory title="Competências" skills={skills.competencias} />
          <SkillCategory title="Gestão" skills={skills.gestao} />
          <SkillCategory title="Idiomas" skills={skills.idiomas} />
        </div>

        {/* Highlight */}
        <div className="mt-16 p-6 rounded-lg bg-primary/10 border border-primary/20">
          <h3 className="text-primary font-semibold mb-2">Destaque de Carreira</h3>
          <p className="text-muted-foreground leading-relaxed">
            Redução de <span className="text-foreground font-bold">38%</span> em custos operacionais 
            através da reestruturação de dados e automação de processos. Experiência única que une 
            o domínio do &quot;chão de fábrica&quot; à inovação do código.
          </p>
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-foreground font-medium mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i}
            className="text-sm px-3 py-1.5 bg-secondary rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
