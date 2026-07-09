import { Play } from 'lucide-react'

export function VideoFrame({ src, label }: { src?: string; label?: string }) {
  const hasVideo = src && src.trim().length > 0
  
  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl border border-border"
      style={{ backgroundColor: '#000' }}
    >
      {hasVideo ? (
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
          <video 
            controls 
            preload="auto"
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundColor: '#000'
            }}
          >
            <source src={src} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>
      ) : (
        <div className="flex aspect-video h-full w-full flex-col items-center justify-center gap-3 text-center">
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
