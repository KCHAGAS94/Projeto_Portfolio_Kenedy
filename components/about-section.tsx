import { SectionHeading } from '@/components/section-heading'
import { VideoFrame } from '@/components/video-frame'

const ABOUT_VIDEO_MOBILE_SRC = '/projects/videosobre/video-sobre-vertical.mp4'
const ABOUT_VIDEO_DESKTOP_SRC = '/projects/videosobre/video-sobre-horizontal.mp4'

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Quem sou eu" title="Sobre" />

      <p className="mx-auto mb-10 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
        Desenvolvedor Full Stack | Web, Back-end & Mobile (React Native). Especialista em integrar sistemas e construir soluções digitais de ponta a ponta. Assista ao vídeo abaixo para me conhecer melhor.
      </p>

      <VideoFrame
        srcMobile={ABOUT_VIDEO_MOBILE_SRC}
        srcDesktop={ABOUT_VIDEO_DESKTOP_SRC}
        label="Adicione aqui o vídeo de apresentação"
      />
    </section>
  )
}
