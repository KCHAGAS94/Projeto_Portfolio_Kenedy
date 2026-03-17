"use client"

import { Github, Linkedin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-0 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-foreground font-semibold mb-2">Vamos conversar?</h3>
            <p className="text-muted-foreground text-sm">
              Estou sempre aberto a discutir novos projetos e oportunidades.
            </p>
          </div>

          <div className="flex gap-4">
            <SocialLink 
              href="https://github.com/KCHAGAS94" 
              icon={<Github className="w-5 h-5" />} 
              label="GitHub" 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/kenedychagas" 
              icon={<Linkedin className="w-5 h-5" />} 
              label="LinkedIn" 
            />
            <SocialLink 
              href="https://wa.me/5535997615634" 
              icon={<Phone className="w-5 h-5" />} 
              label="WhatsApp" 
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Desenvolvido com Next.js e Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Todos os direitos reservados © {new Date().getFullYear()} Kenedy Chagas
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
