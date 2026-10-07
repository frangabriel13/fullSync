import { FaWhatsapp } from 'react-icons/fa6'
import { LuArrowUpRight } from 'react-icons/lu'
import Button from '../../../components/Button/Button'
import { contactWhatsapp } from '../../../data/contact'
import { whatsappLink, whatsappMessages } from '../../../data/site'
import styles from './WhatsAppCard.module.css'

// Acceso directo a WhatsApp, destacado como la vía más rápida de contacto.
function WhatsAppCard() {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>
          <FaWhatsapp aria-hidden="true" />
        </span>
        <div>
          <span className={styles.eyebrow}>{contactWhatsapp.eyebrow}</span>
          <h3 className={styles.title}>{contactWhatsapp.title}</h3>
        </div>
      </div>

      <p className={styles.description}>{contactWhatsapp.description}</p>

      <Button href={whatsappLink(whatsappMessages.contact)} external className={styles.button}>
        {contactWhatsapp.cta}
        <LuArrowUpRight aria-hidden="true" />
      </Button>
    </article>
  )
}

export default WhatsAppCard
