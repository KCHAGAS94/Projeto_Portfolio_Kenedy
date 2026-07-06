export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
        {eyebrow}
      </span>
      <h2 className="font-serif text-4xl text-balance text-foreground sm:text-5xl">{title}</h2>
      <span className="mt-6 h-px w-16 bg-primary/60" />
    </div>
  )
}
