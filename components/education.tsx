"use client"

import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    institution: "Cruzeiro do Sul",
    degree: "Graduação em Análise e Desenvolvimento de Sistemas",
    period: "Previsão de término: 2028",
    status: "Em andamento"
  },
  {
    institution: "UNICESUMAR",
    degree: "Curso Profissionalizante em Desenvolvimento de Sistemas",
    period: "2023 – 2024",
    status: "Concluído em 2024"
  }
]

export function Education() {
  return (
    <section id="formacao" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-muted-foreground" />
          FORMAÇÃO ACADÊMICA
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-foreground font-semibold">{edu.institution}</h3>
                  <span className="inline-flex items-center gap-1 text-sm px-2 py-1 bg-secondary rounded-md text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-1">{edu.degree}</p>
                <p className="text-sm text-primary font-medium">{edu.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlight */}
        <div className="mt-12 p-6 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-foreground font-semibold mb-2">Foco Acadêmico</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Formação direcionada para desenvolvimento de sistemas com foco prático em soluções 
                empresariais, combinando conhecimento teórico com experiência real de mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}