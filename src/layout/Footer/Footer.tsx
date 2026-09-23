import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import Container from '../../components/Container/Container'
import Logo from '../../components/Logo/Logo'
import { contactInfo, navLinks, socialLinks } from '../../data/site'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo light />
            <p>
              Soluciones IT integrales para que tu empresa funcione sin interrupciones y
              crezca con tecnología confiable.
            </p>
            <ul className={styles.social}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Navegación</h3>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Contacto</h3>
            <ul className={styles.list}>
              <li>
                <LuPhone aria-hidden="true" />
                <a href={`tel:${contactInfo.phone.replace(/\s|-/g, '')}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <LuMail aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <LuMapPin aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>© {year} FullSync. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}

export default Footer
