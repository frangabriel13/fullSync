import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react'
import { LuSend } from 'react-icons/lu'
import Button from '../../../components/Button/Button'
import FormField from '../../../components/FormField/FormField'
import { contactForm, contactLimits } from '../../../data/contact'
import {
  validateContact,
  validateField,
  type ContactErrors,
  type ContactValues,
} from '../validateContact'
import styles from './ContactForm.module.css'

type Field = keyof ContactValues
type Status = 'idle' | 'sending' | 'sent' | 'invalid'

const initialValues: ContactValues = { name: '', phone: '', message: '', company: '' }
// Orden de los campos en pantalla: se usa para enfocar el primer error.
const fieldOrder: Field[] = ['name', 'phone', 'message', 'company']
const fieldId = (field: Field) => `contact-${field}`

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  // Campo trampa para bots: las personas no lo ven, así que si llega completo es spam.
  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as Field
    const { value } = event.target

    setValues((prev) => ({ ...prev, [field]: value }))
    if (status !== 'idle') setStatus('idle')

    // Mientras escribe, solo se revalida si el campo ya fue visitado (no se muestran errores antes de tiempo).
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
    }
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as Field
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validateField(field, event.target.value) }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (honeypotRef.current?.value) {
      setStatus('sent')
      return
    }

    const formErrors = validateContact(values)
    setErrors(formErrors)
    setTouched({ name: true, phone: true, message: true, company: true })

    const firstInvalid = fieldOrder.find((field) => formErrors[field])
    if (firstInvalid) {
      setStatus('invalid')
      document.getElementById(fieldId(firstInvalid))?.focus()
      return
    }

    setStatus('sending')
    // TODO: conectar con un servicio de envío (ej. EmailJS, Formspree o una API propia)
    // y mostrar un mensaje de error si falla.
    await new Promise((resolve) => setTimeout(resolve, 600))

    setValues(initialValues)
    setErrors({})
    setTouched({})
    setStatus('sent')
  }

  const fieldProps = (field: Field) => ({
    id: fieldId(field),
    name: field,
    label: contactForm.labels[field],
    value: values[field],
    error: errors[field],
    onChange: handleChange,
    onBlur: handleBlur,
  })

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <FormField
          {...fieldProps('name')}
          autoComplete="name"
          maxLength={contactLimits.name.max}
          required
        />
        <FormField
          {...fieldProps('phone')}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={contactLimits.phone.max}
          required
        />
      </div>

      <FormField
        {...fieldProps('message')}
        multiline
        maxLength={contactLimits.message.max}
        required
        hint={`${values.message.length}/${contactLimits.message.max}`}
      />

      <FormField
        {...fieldProps('company')}
        optionalLabel={contactForm.optional}
        autoComplete="organization"
        maxLength={contactLimits.company.max}
      />

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-website">No completar</label>
        <input
          ref={honeypotRef}
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? contactForm.sending : contactForm.submit}
        <LuSend aria-hidden="true" />
      </Button>

      <div aria-live="polite">
        {status === 'sent' && <p className={styles.success}>{contactForm.success}</p>}
        {status === 'invalid' && <p className={styles.invalid}>{contactForm.invalid}</p>}
      </div>
    </form>
  )
}

export default ContactForm
