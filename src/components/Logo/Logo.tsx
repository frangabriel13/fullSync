import { LuRefreshCw } from 'react-icons/lu'
import styles from './Logo.module.css'

type LogoProps = {
  light?: boolean
}

function Logo({ light = false }: LogoProps) {
  return (
    <a href="#inicio" className={`${styles.logo} ${light ? styles.light : ''}`} aria-label="FullSync, ir al inicio">
      <span className={styles.mark}>
        <LuRefreshCw aria-hidden="true" />
      </span>
      FullSync
    </a>
  )
}

export default Logo
