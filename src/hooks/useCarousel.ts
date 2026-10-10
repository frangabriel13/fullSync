import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

type CarouselState = {
  /** Página actual (cada página = las tarjetas que entran a la vez). */
  activePage: number
  pageCount: number
  /** Cuántas tarjetas entran a la vez en el ancho actual. */
  perPage: number
  canPrev: boolean
  canNext: boolean
}

const initialState: CarouselState = {
  activePage: 0,
  pageCount: 1,
  perPage: 1,
  canPrev: false,
  canNext: false,
}

// Distancia mínima (px) para considerar que el mouse arrastró y no hizo un clic.
const DRAG_THRESHOLD = 5

/** Distancia entre el comienzo de una tarjeta y la siguiente (ancho + separación). */
function getStep(track: HTMLElement) {
  const [first, second] = track.children as HTMLCollectionOf<HTMLElement>
  if (!first) return 0
  return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
}

function getPerPage(track: HTMLElement, step: number) {
  return Math.max(1, Math.round(track.clientWidth / step))
}

/**
 * Estado y navegación de un carrusel con scroll horizontal nativo.
 * - Avanza de a una página (las tarjetas visibles a la vez).
 * - Se actualiza con el scroll (flechas, puntos, dedo o mouse) y al cambiar el tamaño.
 * - Permite arrastrar con el mouse; en pantallas táctiles queda el deslizamiento nativo.
 */
export function useCarousel(trackRef: RefObject<HTMLElement | null>) {
  const [state, setState] = useState(initialState)
  const [isDragging, setIsDragging] = useState(false)
  const draggedRef = useRef(false)

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const track = trackRef.current
      if (!track) return
      const step = getStep(track)
      const lastIndex = track.children.length - getPerPage(track, step)
      const target = Math.max(0, Math.min(index, lastIndex))
      track.scrollTo({ left: target * step, behavior })
    },
    [trackRef],
  )

  // Estado: página actual y si se puede avanzar o retroceder
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0

    const update = () => {
      const step = getStep(track)
      if (!step) return

      const total = track.children.length
      const perPage = getPerPage(track, step)
      const pageCount = Math.max(1, Math.ceil(total / perPage))
      const maxScroll = track.scrollWidth - track.clientWidth
      const atEnd = track.scrollLeft >= maxScroll - 2
      const activePage = atEnd
        ? pageCount - 1
        : Math.min(pageCount - 1, Math.round(track.scrollLeft / step / perPage))

      setState({
        activePage,
        pageCount,
        perPage,
        canPrev: track.scrollLeft > 2,
        canNext: !atEnd,
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    track.addEventListener('scroll', onScroll, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(track)

    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [trackRef])

  // Arrastre con el mouse
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let startX = 0
    let startScroll = 0
    let pointerId: number | null = null

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      pointerId = event.pointerId
      startX = event.clientX
      startScroll = track.scrollLeft
      draggedRef.current = false
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return
      const deltaX = event.clientX - startX

      if (!draggedRef.current) {
        if (Math.abs(deltaX) < DRAG_THRESHOLD) return
        draggedRef.current = true
        track.setPointerCapture(event.pointerId)
        // Se desactiva el "imán" de las tarjetas en el momento (no espera al re-render)
        track.style.scrollSnapType = 'none'
        setIsDragging(true)
      }

      track.scrollLeft = startScroll - deltaX
    }

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return
      pointerId = null
      if (!draggedRef.current) return

      setIsDragging(false)
      // Se acomoda en la tarjeta más cercana, según para dónde se arrastró
      const step = getStep(track)
      const moved = track.scrollLeft - startScroll
      const position = track.scrollLeft / step
      const index = moved > 0 ? Math.ceil(position - 0.2) : Math.floor(position + 0.2)
      scrollToIndex(index)
      // Vuelve el "imán" cuando termina de acomodarse
      setTimeout(() => {
        track.style.scrollSnapType = ''
      }, 500)
    }

    // Evita que un arrastre termine "haciendo clic" en algo de la tarjeta
    const onClick = (event: MouseEvent) => {
      if (draggedRef.current) {
        event.preventDefault()
        event.stopPropagation()
        draggedRef.current = false
      }
    }

    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', onPointerUp)
    track.addEventListener('pointercancel', onPointerUp)
    track.addEventListener('click', onClick, true)

    return () => {
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', onPointerUp)
      track.removeEventListener('pointercancel', onPointerUp)
      track.removeEventListener('click', onClick, true)
    }
  }, [trackRef, scrollToIndex])

  const goToPage = useCallback(
    (page: number) => scrollToIndex(page * state.perPage),
    [scrollToIndex, state.perPage],
  )

  const prev = useCallback(
    () => goToPage(state.activePage - 1),
    [goToPage, state.activePage],
  )
  const next = useCallback(
    () => goToPage(state.activePage + 1),
    [goToPage, state.activePage],
  )

  return { ...state, isDragging, goToPage, prev, next }
}
