import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappLink, whatsappMessages } from '../../data/site'
import styles from './WhatsAppButton.module.css'

// Botón flotante, visible en toda la página.
function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
