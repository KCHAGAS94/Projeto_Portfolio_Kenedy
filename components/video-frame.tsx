import { Play } from 'lucide-react'

export function VideoFrame({ src, label }: { src?: string; label?: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
      {src ? (
        <video controls playsInline preload="metadata" className="h-full w-full object-cover">
          <source src={src} />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
          <span className="flex size-16 items-center justify-center rounded-full border border-primary/50 text-primary">
            <Play className="size-6 translate-x-0.5" />
          </span>
          <p className="px-6 text-sm text-muted-foreground">
            {label ?? 'Adicione seu vídeo aqui'}
          </p>
        </div>
      )}
    </div>
  )
}
