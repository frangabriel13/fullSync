import { useState, type FormEvent } from 'react'
import { LuClock, LuMail, LuMapPin, LuPhone, LuSend } from 'react-icons/lu'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { contactInfo } from '../../data/site'
import styles from './Contact.module.css'

const details = [
  { icon: LuPhone, label: 'Teléfono', value: contactInfo.phone },
  { icon: LuMail, label: 'Email', value: contactInfo.email },
  { icon: LuMapPin, label: 'Ubicación', value: contactInfo.address },
  { icon: LuClock, label: 'Horario', value: contactInfo.hours },
]

function Contact() {
  const [isSent, setIsSent] = useState(false)

  // TODO: conectar con un servicio de envío (ej. EmailJS, Formspree o una API propia).
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    setIsSent(true)
  }

  return (
    <section id="contacto" className={styles.contact}>
      <Container>
        <div className={styles.card}>
          <div className={styles.info}>
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos de tu proyecto"
              description="Contanos qué necesitás y te respondemos en menos de 24 horas hábiles."
              align="left"
              light
            />

            <ul className={styles.details}>
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label}>
                  <span className={styles.detailIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <span className={styles.detailLabel}>{label}</span>
                    <span>{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                Nombre
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className={styles.field}>
                Email
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label className={styles.field}>
              Empresa <span className={styles.optional}>(opcional)</span>
              <input type="text" name="company" autoComplete="organization" />
            </label>
            <label className={styles.field}>
              Mensaje
              <textarea name="message" rows={5} required />
            </label>

            <Button type="submit" className={styles.submit}>
              Enviar mensaje <LuSend aria-hidden="true" />
            </Button>

            {isSent && (
              <p className={styles.success} role="status">
                ¡Gracias por escribirnos! Te vamos a contactar a la brevedad.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Contact
