'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

export function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  if (!images.length) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card text-center">
        <ImageIcon className="size-7 text-muted-foreground" />
        <p className="px-6 text-sm text-muted-foreground">
          Adicione as imagens do projeto para exibir o carrossel
        </p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-border" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <img
                src={src || '/placeholder.svg'}
                alt={`${title} — imagem ${i + 1}`}
                className="aspect-video w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:text-primary"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:text-primary"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir para a imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
