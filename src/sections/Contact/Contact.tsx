import { LuMail, LuMapPin } from 'react-icons/lu'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { contactHeading } from '../../data/contact'
import { contactInfo } from '../../data/site'
import ContactForm from './ContactForm/ContactForm'
import WhatsAppBanner from './WhatsAppBanner/WhatsAppBanner'
import WhatsAppCard from './WhatsAppCard/WhatsAppCard'
import styles from './Contact.module.css'

// WhatsApp y horario se muestran en la tarjeta destacada (WhatsAppCard).
const details = [
  { icon: LuMail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: LuMapPin, label: 'Ubicación', value: contactInfo.address },
]

function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <Container>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.heading}>
              <SectionHeading {...contactHeading} align="left" />
            </div>

            {/* Solo en celular: separa la opción de WhatsApp del formulario */}
            <p className={styles.separator} aria-hidden="true">
              o
            </p>

            {/* Celular: franja compacta. Escritorio: tarjeta completa. */}
            <div className={styles.whatsappMobile}>
              <WhatsAppBanner />
            </div>
            <div className={styles.whatsapp}>
              <WhatsAppCard />
            </div>

            <ul className={styles.details}>
              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className={styles.detailIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <span className={styles.detailLabel}>{label}</span>
                      <span>{value}</span>
                    </div>
                  </>
                )

                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className={styles.detailLink}>
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={styles.form}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
