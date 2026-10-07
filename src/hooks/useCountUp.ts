import { useEffect, useState } from 'react'

type CountUpOptions = {
  /** Duración de la animación en milisegundos. */
  duration?: number
  /** Espera antes de arrancar, en milisegundos. */
  delay?: number
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Arranca rápido y frena al final.
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3

/**
 * Cuenta de 0 a `target` una sola vez, al montarse el componente.
 * Si el usuario pidió reducir el movimiento, devuelve directamente el valor final.
 */
export function useCountUp(target: number, { duration = 1400, delay = 200 }: CountUpOptions = {}) {
  const [skipAnimation] = useState(prefersReducedMotion)
  const [current, setCurrent] = useState(skipAnimation ? target : 0)

  useEffect(() => {
    if (skipAnimation) return

    let frame = 0
    let start: number | null = null

    const step = (now: number) => {
      start ??= now
      const progress = Math.min((now - start) / duration, 1)
      setCurrent(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    const timer = setTimeout(() => {
      frame = requestAnimationFrame(step)
    }, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [target, duration, delay, skipAnimation])

  return skipAnimation ? target : current
}
