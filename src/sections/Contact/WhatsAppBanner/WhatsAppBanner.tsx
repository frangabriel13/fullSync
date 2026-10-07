import { FaWhatsapp } from 'react-icons/fa6'
import { LuArrowUpRight } from 'react-icons/lu'
import { contactWhatsapp } from '../../../data/contact'
import { whatsappLink, whatsappMessages } from '../../../data/site'
import styles from './WhatsAppBanner.module.css'

// Acceso compacto a WhatsApp para celular: toda la franja es el link.
function WhatsAppBanner() {
  return (
    <a
      href={whatsappLink(whatsappMessages.contact)}
      className={styles.banner}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>
        <FaWhatsapp aria-hidden="true" />
      </span>
      <span className={styles.text}>
        <strong>{contactWhatsapp.bannerTitle}</strong>
        <span>{contactWhatsapp.bannerDescription}</span>
      </span>
      <LuArrowUpRight className={styles.arrow} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppBanner
