export const contactHeading = {
  eyebrow: 'Contacto',
  title: 'Hablemos de tu proyecto',
  description: 'Contanos qué necesitás y te respondemos en menos de 24 horas hábiles.',
}

// Límites de cada campo: se usan en la validación y en el atributo maxLength.
export const contactLimits = {
  name: { min: 2, max: 80 },
  phone: { minDigits: 8, maxDigits: 15, max: 20 },
  company: { max: 100 },
  message: { min: 10, max: 1000 },
}

export const contactForm = {
  labels: {
    name: 'Nombre',
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
    phoneRequired: 'Ingresá tu teléfono.',
    phoneInvalid: 'Revisá el teléfono, incluí el código de área (ej. 11 2345-6789).',
    messageRequired: 'Contanos qué necesitás.',
    messageShort: `Escribí al menos ${contactLimits.message.min} caracteres para que podamos entenderte mejor.`,
  },
}
