import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import kenedyFoto from './img/kenedy.jpg'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const hookText = 'Eu codifico o futuro da indústria.'
  const [typedText, setTypedText] = useState('')
  const videoRefs = useRef({})

  const bentoProjects = [
    {
      id: 'oee-bento',
      nome: 'OEE Control Room',
      overlay: 'Reduziu 20% do atraso',
      video: '/videos/oee-bento.webm',
      className: 'col-span-12 md:col-span-8',
    },
    {
      id: 'stock-bento',
      nome: 'Stock Flow Live',
      overlay: 'Dashboard em Tempo Real',
      video: '/videos/stock-bento.webm',
      className: 'col-span-12 md:col-span-4',
    },
    {
      id: 'planner-bento',
      nome: 'Factory Planner AI',
      overlay: 'Responsividade no celular',
      video: '/videos/planner-bento.webm',
      className: 'col-span-12 md:col-span-6',
    },
    {
      id: 'quality-bento',
      nome: 'Qualidade em Linha',
      overlay: 'Operador acionando decisão crítica',
      video: '/videos/deep-dive.webm',
      className: 'col-span-12 md:col-span-6',
    },
  ]

  const galeriaProjetos = [
    {
      titulo: 'OEE Master Dashboard',
      impacto: 'Vídeo mostrando filtros em tempo real sem reload.',
      tech: 'React Query',
      video: '/videos/oee-gallery.webm',
    },
    {
      titulo: 'Stock Flow Mobile',
      impacto: 'Vídeo de um celular lendo QR Code e atualizando a lista.',
      tech: 'Tailwind / PWA',
      video: '/videos/stock-gallery.webm',
    },
    {
      titulo: 'Factory Planner AIV',
      impacto: 'Vídeo de um drag-and-drop de tarefas na linha de produção.',
      tech: 'Dnd-kit / Framer Motion',
      video: '/videos/planner-gallery.webm',
    },
  ]

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      index += 1
      setTypedText(hookText.slice(0, index))
      if (index >= hookText.length) {
        clearInterval(timer)
      }
    }, 60)

    return () => clearInterval(timer)
  }, [])

  const handlePlay = (id) => {
    const video = videoRefs.current[id]
    if (!video) return
    video.play().catch(() => {})
  }

  const handlePause = (id) => {
    const video = videoRefs.current[id]
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:28px_28px] md:[background-size:42px_42px]">
      <section id="home" className="relative overflow-hidden border-b border-slate-800">
        <video className="absolute inset-0 h-full w-full object-cover opacity-25" autoPlay muted loop playsInline>
          <source src="/videos/entrada-loop.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex min-h-[72svh] max-w-6xl flex-col justify-center px-5 py-16 md:min-h-[76vh] md:px-6 md:py-24"
        >
          <p className="mb-4 inline-flex w-fit rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-300">
            Operação React
          </p>
          <h1 className="min-h-[64px] text-4xl font-bold leading-tight sm:text-5xl md:min-h-[92px] md:text-6xl">
            {typedText}
            <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-sky-400 align-middle" />
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-200 sm:text-xl md:mt-7 md:text-3xl">
            Desenvolvedor Frontend que entende de processos. Consultor que entende de código.
          </p>
        </motion.div>
      </section>

      <motion.section
        id="sobre"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 md:p-8">
          <div className="grid items-start gap-8 md:grid-cols-[220px_1fr] md:gap-10">
            <div className="mx-auto w-fit md:mx-0">
              <img
                src={kenedyFoto}
                alt="Foto de Kenedy"
                className="h-44 w-44 rounded-full border-4 border-blue-500 object-cover sm:h-52 sm:w-52"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">Sobre Kenedy</h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                Tenho 31 anos, mas uma trajetória que começou cedo e forjou uma mentalidade de
                veterano. Aos 15 anos, movido pela responsabilidade familiar, iniciei minha jornada no
                mercado de trabalho. O que começou como uma necessidade de "virar homem cedo" se
                transformou em uma carreira de 16 anos marcada pela dedicação e pelo crescimento
                constante.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Sou um homem de fé, católico, casado e pai, valores que guiam minha ética de
                trabalho: humildade, paciência e gratidão a Deus por cada etapa vencida.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Minha mentalidade atual está voltada para a inovação tecnológica: utilizo meu domínio
                avançado em Excel e meu desenvolvimento em software (com integrações via API) para
                automatizar o que antes era manual.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Sou um profissional que entende o chão de fábrica, respeita as pessoas e domina a
                tecnologia para entregar resultados seguros e estratégicos.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projetos"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20"
      >
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">Bento Grid de Projetos</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
          Passe o mouse nos cards para reproduzir o vídeo do projeto automaticamente.
        </p>
        <div className="mt-8 grid grid-cols-12 gap-4 md:mt-10 md:gap-5">
          {bentoProjects.map((project) => (
            <article
              key={project.id}
              onMouseEnter={() => handlePlay(project.id)}
              onMouseLeave={() => handlePause(project.id)}
              className={`${project.className} group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900`}
            >
              <video
                ref={(element) => {
                  if (element) videoRefs.current[project.id] = element
                }}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-64 md:h-80"
              >
                <source src={project.video} type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 p-4 md:p-6">
                <p className="inline-flex rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-300 sm:text-sm">
                  {project.overlay}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl md:mt-3 md:text-2xl">{project.nome}</h3>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="deep-dive"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2 md:gap-8 md:px-6 md:py-20"
      >
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <video className="h-60 w-full object-cover sm:h-72 md:h-full" autoPlay muted loop playsInline>
            <source src="/videos/deep-dive.webm" type="video/webm" />
          </video>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Deep Dive</h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base md:mt-6">
            Performance acima de tudo: aplicações leves para o chão de fábrica.
          </p>
          <p className="mt-4 text-slate-300">Clean Code: React Hooks e Context API para estados complexos.</p>
          <p className="mt-4 text-slate-300">
            Design System: componentes reutilizáveis que aceleram a entrega.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="galeria"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20"
      >
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">Galeria de Projetos</h2>
        <div className="mt-8 grid gap-4 md:mt-10 md:gap-6 md:grid-cols-3">
          {galeriaProjetos.map((item) => (
            <article key={item.titulo} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <video className="h-44 w-full object-cover sm:h-48" autoPlay muted loop playsInline>
                <source src={item.video} type="video/webm" />
              </video>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold sm:text-xl">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{item.impacto}</p>
                <p className="mt-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-sm text-sky-300">
                  {item.tech}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="consultoria-codigo"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20"
      >
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 md:grid-cols-[1.1fr_1fr] md:p-8">
          <div className="overflow-hidden rounded-xl border border-slate-800">
            <video className="h-56 w-full object-cover sm:h-72 md:h-full" autoPlay muted loop playsInline>
              <source src="/videos/consultoria.webm" type="video/webm" />
            </video>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Consultoria + Código</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:mt-6 md:text-lg">
              Eu não apenas digito código. Eu entro na fábrica, vejo a dor do operador e
              transformo isso em interface. Meu código resolve o gargalo que o consultor
              identificou.
            </p>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-slate-800 px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-2xl border border-sky-500/40 bg-slate-900/80 p-5 md:gap-8 md:p-8">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full animate-pulse rounded-2xl border border-sky-400 bg-sky-500/20 px-5 py-4 text-center text-xl font-bold text-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.35)] transition hover:bg-sky-500/30 sm:w-auto sm:px-8 sm:py-5 sm:text-2xl"
          >
            Vamos digitalizar sua operação?
          </a>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 sm:gap-5 sm:text-base">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub (READMEs impecáveis)
            </a>
            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
