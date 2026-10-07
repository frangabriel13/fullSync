import logo from '../../assets/logo.png'
import styles from './Logo.module.css'

// El logo tiene "FULL" en blanco: está pensado para fondos oscuros.
function Logo() {
  return (
    <a href="#inicio" className={styles.logo} aria-label="FullSync, ir al inicio">
      <img src={logo} alt="" className={styles.image} />
    </a>
  )
}

export default Logo
