import { SectionHeading } from '@/components/section-heading'
import { VideoFrame } from '@/components/video-frame'

// Quando gravar seu vídeo de apresentação, coloque o caminho aqui (ex: "/videos/sobre.mp4")
const ABOUT_VIDEO_SRC = ''

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Quem sou eu" title="Sobre" />

      <p className="mx-auto mb-10 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
        Desenvolvedor Full Stack com foco em aplicações web modernas e integrações de sistemas.
        Assista ao vídeo abaixo para me conhecer melhor.
      </p>

      <VideoFrame src={ABOUT_VIDEO_SRC} label="Adicione aqui o vídeo de apresentação" />
    </section>
  )
}
