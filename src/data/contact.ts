import { contactInfo } from './site'

export const contactHeading = {
  eyebrow: 'Contacto',
  title: 'Hablemos de tu proyecto',
  description: 'Contanos qué necesitás y te respondemos en menos de 24 horas hábiles.',
}

// Tarjeta destacada para escribir directo por WhatsApp
export const contactWhatsapp = {
  eyebrow: 'La forma más rápida',
  title: 'Escribinos por WhatsApp',
  description: `Contanos tu idea y te respondemos en el chat (${contactInfo.hours.toLowerCase()}).`,
  cta: 'Abrir chat',
}

// Límites de cada campo: se usan en la validación y en el atributo maxLength.
export const contactLimits = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  phone: { minDigits: 8, maxDigits: 15, max: 20 },
  company: { max: 100 },
  message: { min: 10, max: 1000 },
}

export const contactForm = {
  title: 'O dejanos un mensaje',
  labels: {
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    company: 'Empresa',
    message: 'Mensaje',
  },
  optional: '(opcional)',
  submit: 'Enviar mensaje',
  sending: 'Enviando…',
  success: '¡Gracias por escribirnos! Te vamos a contactar a la brevedad.',
  invalid: 'Revisá los campos marcados para poder enviar el mensaje.',
  errors: {
    nameRequired: 'Ingresá tu nombre.',
    nameShort: `El nombre tiene que tener al menos ${contactLimits.name.min} caracteres.`,
    nameInvalid: 'Usá solo letras, espacios, apóstrofes o guiones.',
    emailRequired: 'Ingresá tu email.',
    emailInvalid: 'Revisá el email, parece que no es válido (ej. nombre@empresa.com).',
    phoneInvalid: 'Revisá el teléfono, incluí el código de área (ej. 11 2345-6789).',
    messageRequired: 'Contanos qué necesitás.',
    messageShort: `Escribí al menos ${contactLimits.message.min} caracteres para que podamos entenderte mejor.`,
  },
}
