import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProjectCard, type Project } from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

/**
 * AvatarProjectPuller
 * ---------------------------------------------------------------------------
 * Seção "o avatar puxa o projeto pra tela".
 *
 * Como funciona (resumo — detalhes completos no README que acompanha este
 * componente):
 *
 * 1. O vídeo do avatar (public/assets/avatar/avatar-pull.mp4|webm) NUNCA
 *    dá "play" sozinho no desktop. O scroll controla `video.currentTime`
 *    diretamente (mesma técnica usada em scrollytelling tipo NYT/Apple).
 *    Isso é o que cria a sensação de "o scroll é a força que ele faz".
 *
 * 2. O card do projeto é HTML real (reaproveita o componente ProjectCard
 *    que já existe no projeto). Ele é animado por um segundo GSAP timeline,
 *    sincronizado ao MESMO ScrollTrigger (mesmo "eixo" de progresso 0→1),
 *    mas com timing PRÓPRIO — não é o vídeo em cima do card, são duas
 *    animações separadas correndo em paralelo.
 *
 * 3. As proporções de tempo abaixo (0.15 / 0.32 / 0.78 / 0.92) vieram da
 *    análise frame a frame do vídeo (24fps, 243 frames, 10.125s):
 *       0.00 – 0.75s  idle
 *       0.75 – 1.75s  braços sobem e se estendem, mãos se fecham (grip)
 *       1.75 – 3.50s  transição pro agachamento, início da tensão
 *       3.50 – 8.50s  PLATÔ de esforço mantido (quase sem mudança de pose —
 *                     é uma "segurada", não um puxão gradual)
 *       8.50 – 9.25s  o puxão real: mão volta rápido ao peito (o movimento
 *                     mais rápido do clipe inteiro)
 *       9.25 – 10.1s  volta a ficar em pé, neutro
 *    Por isso o card SÓ percorre uma fração pequena da distância durante o
 *    platô (0.32→0.78) e faz o salto grande durante o puxão real
 *    (0.78→0.92). Se o card se movesse de forma linear do início ao fim,
 *    ficaria fora de sincronia com o que o personagem está realmente
 *    fazendo no vídeo.
 */

const VIDEO_DURATION_FALLBACK = 10.125 // segundos, usado antes do metadata carregar

// Projeto exibido. Troque por outro item de siteData.js quando quiser.
const project: Project = {
  name: 'Hub Harmony',
  description:
    'PWA multi-tenant para gestão de equipes de louvor: escalas, banco de cifras com motor próprio de transposição e controle de acesso via RLS no Supabase.',
  techs: ['TanStack Start', 'Supabase', 'PostgreSQL', 'Tailwind v4'],
  status: 'em-desenvolvimento',
  statusLabel: 'Em desenvolvimento',
  githubUrl: 'https://github.com/aleffelix15',
}

export const AvatarProjectPuller: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardWrapRef = useRef<HTMLDivElement>(null)
  const cardInnerRef = useRef<HTMLDivElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => setVideoReady(true)
    if (video.readyState >= 1) {
      setVideoReady(true)
    } else {
      video.addEventListener('loadedmetadata', onLoaded)
    }
    return () => video.removeEventListener('loadedmetadata', onLoaded)
  }, [])

  useEffect(() => {
    if (!videoReady) return

    const section = sectionRef.current
    const video = videoRef.current
    const cardWrap = cardWrapRef.current
    const cardInner = cardInnerRef.current
    if (!section || !video || !cardWrap || !cardInner) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // ---------------------------------------------------------------
      // DESKTOP / TABLET LARGO — pin + scrub sincronizado (a experiência
      // completa descrita no pedido: scroll = força do puxão).
      // ---------------------------------------------------------------
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const duration = video.duration || VIDEO_DURATION_FALLBACK

        // Estado inicial do card: fora de tela à direita, levemente
        // rotacionado, oferecendo "resistência" (opacidade baixa = ainda
        // não foi "conquistado")
        gsap.set(cardWrap, { xPercent: 38, rotate: 6, opacity: 0 })
        gsap.set(cardInner, { scale: 0.94 })

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=220%',
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // Vídeo do avatar é "tocado" via scroll do início ao fim.
        tl.to(
          video,
          {
            currentTime: duration,
            ease: 'none',
          },
          0,
        )

        // --- Card: fase 1 — aparece e "resiste" (0 → 0.32) -------------
        // Acompanha braços subindo e o grip fechando (0.75s–3.5s do vídeo)
        tl.to(
          cardWrap,
          {
            opacity: 1,
            xPercent: 30,
            rotate: 3,
            duration: 0.32,
          },
          0,
        )
        // pequeno "tremor" de resistência (a força sendo feita, card
        // ainda nao cede) — 3 micro-jitters dentro do platô de esforço
        tl.to(
          cardWrap,
          {
            xPercent: '+=1.2',
            rotate: '+=1',
            duration: 0.05,
            repeat: 5,
            yoyo: true,
          },
          0.34,
        )

        // --- Card: fase 2 — platô de esforço (0.32 → 0.78) -------------
        // Corresponde ao trecho longo do vídeo (3.5s–8.5s) onde a pose
        // quase não muda. O card avança bem pouco aqui de propósito.
        tl.to(
          cardWrap,
          {
            xPercent: 22,
            rotate: 1,
            duration: 0.46,
            ease: 'sine.inOut',
          },
          0.32,
        )
        tl.to(
          cardInner,
          {
            scale: 0.97,
            duration: 0.46,
          },
          0.32,
        )

        // --- Card: fase 3 — O PUXÃO (0.78 → 0.92) ----------------------
        // Corresponde ao trecho mais rápido do vídeo inteiro (8.5s–9.25s).
        // O card "voa" para a posição final.
        tl.to(
          cardWrap,
          {
            xPercent: 0,
            rotate: 0,
            duration: 0.14,
            ease: 'power3.out',
          },
          0.78,
        )
        tl.to(
          cardInner,
          {
            scale: 1,
            duration: 0.14,
            ease: 'power3.out',
          },
          0.78,
        )

        // --- Card: fase 4 — acomodação (0.92 → 1.0) ---------------------
        // Espelha o avatar voltando à posição neutra (9.25s–10.1s).
        tl.to(
          cardWrap,
          {
            xPercent: '-=0.6',
            duration: 0.05,
            ease: 'power1.out',
          },
          0.92,
        )
        tl.to(
          cardWrap,
          {
            xPercent: '+=0.6',
            duration: 0.08,
            ease: 'power2.out',
          },
          0.97,
        )

        return () => {
          tl.scrollTrigger?.kill()
          tl.kill()
        }
      })

      // ---------------------------------------------------------------
      // MOBILE / TABLET ESTREITO — sem pin, sem scrub de vídeo (custo de
      // performance/bateria de pin em mobile não compensa). O vídeo
      // simplesmente autoplay+loop quando entra na viewport, e o card
      // faz um reveal simples ao entrar em tela.
      // ---------------------------------------------------------------
      mm.add('(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.set(cardWrap, { xPercent: 0, rotate: 0, opacity: 0, y: 24 })

        const playObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.currentTime = 0
                video.play().catch(() => {})
              } else {
                video.pause()
              }
            })
          },
          { threshold: 0.4 },
        )
        playObserver.observe(video)

        const st = ScrollTrigger.create({
          trigger: cardWrap,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(cardWrap, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
            })
          },
        })

        return () => {
          playObserver.disconnect()
          st.kill()
        }
      })

      // ---------------------------------------------------------------
      // prefers-reduced-motion: reduce — nada de scrub/pin. Poster
      // estático + card já visível, sem tremores nem "voo".
      // ---------------------------------------------------------------
      if (reduceMotion) {
        gsap.set(cardWrap, { xPercent: 0, rotate: 0, opacity: 1, y: 0 })
      }

      return () => mm.revert()
    }, section)

    return () => ctx.revert()
  }, [videoReady])

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative bg-[#050505] py-24 lg:py-0 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 lg:h-screen lg:flex lg:items-center">
        <div className="mb-12 lg:absolute lg:top-16 lg:left-6 xl:left-8">
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Projetos
            </span>
          </div>
        </div>

        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">
          {/* Avatar */}
          <div
            className="relative w-full max-w-[420px] mx-auto lg:mx-0 aspect-[900/1248]"
            style={{
              maskImage:
                'radial-gradient(ellipse 80% 85% at 50% 50%, black 55%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 85% at 50% 50%, black 55%, transparent 100%)',
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-contain mix-blend-screen"
              muted
              playsInline
              preload="auto"
              poster="/assets/avatar/avatar-pull-poster.jpg"
              aria-hidden="true"
            >
              <source src="/assets/avatar/avatar-pull.webm" type="video/webm" />
              <source src="/assets/avatar/avatar-pull.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Card puxado */}
          <div
            ref={cardWrapRef}
            className="relative w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end will-change-transform"
          >
            <div ref={cardInnerRef} className="will-change-transform">
              <ProjectCard project={project} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
