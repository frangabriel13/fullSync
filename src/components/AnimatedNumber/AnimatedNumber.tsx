import { useCountUp } from '../../hooks/useCountUp'
import styles from './AnimatedNumber.module.css'

type AnimatedNumberProps = {
  /** Valor como texto, tal como está en los datos (ej. "100%", "5+", "24h"). */
  value: string
  className?: string
}

/**
 * Separa un valor como "100%" en prefijo, número y sufijo.
 * Si el sufijo tiene otros dígitos (ej. "24/7") no es una cantidad: devuelve null.
 */
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/)
  if (!match) return null
  const [, prefix, number, suffix] = match
  return { prefix, number: Number(number), suffix }
}

function CountUp({ prefix, number, suffix }: { prefix: string; number: number; suffix: string }) {
  const current = useCountUp(number)
  return (
    <>
      {prefix}
      {current}
      {suffix}
    </>
  )
}

// Muestra el número contando desde 0. Los valores que no son cantidades aparecen con un fundido.
function AnimatedNumber({ value, className = '' }: AnimatedNumberProps) {
  const parsed = parseValue(value)

  return (
    <span className={`${styles.number} ${className}`}>
      {/* Los lectores de pantalla leen el valor final, no la cuenta */}
      <span className={styles.srOnly}>{value}</span>
      <span aria-hidden="true" className={parsed ? undefined : styles.fadeIn}>
        {parsed ? <CountUp {...parsed} /> : value}
      </span>
    </span>
  )
}

export default AnimatedNumber
