import { useEffect, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'
import { navLinks } from '../../data/site'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.inner}>
        <Logo />

        <nav
          id="main-nav"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Navegación principal"
        >
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contacto" className={styles.mobileCta} onClick={closeMenu}>
            Pedí tu presupuesto
          </Button>
        </nav>

        <Button href="#contacto" className={styles.cta}>
          Pedí tu presupuesto
        </Button>

        <button
          type="button"
          className={styles.toggle}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </Container>
    </header>
  )
}

export default Header
