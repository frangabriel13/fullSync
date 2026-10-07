import { FaWhatsapp } from 'react-icons/fa6'
import { LuClock, LuMail, LuMapPin } from 'react-icons/lu'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { contactHeading } from '../../data/contact'
import { contactInfo, whatsappLink, whatsappMessages } from '../../data/site'
import ContactForm from './ContactForm/ContactForm'
import styles from './Contact.module.css'

const details = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: contactInfo.phone,
    href: whatsappLink(whatsappMessages.general),
  },
  { icon: LuMail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: LuMapPin, label: 'Ubicación', value: contactInfo.address },
  { icon: LuClock, label: 'Horario', value: contactInfo.hours },
]

function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <Container>
        <div className={styles.card}>
          <div className={styles.info}>
            <SectionHeading {...contactHeading} align="left" light />

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
                      <a
                        href={href}
                        className={styles.detailLink}
                        {...(href.startsWith('http') && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
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
