import { LuMail, LuMapPin } from 'react-icons/lu'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { contactHeading } from '../../data/contact'
import { contactInfo } from '../../data/site'
import ContactForm from './ContactForm/ContactForm'
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
            <SectionHeading {...contactHeading} align="left" light />

            <WhatsAppCard />

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

          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default Contact
