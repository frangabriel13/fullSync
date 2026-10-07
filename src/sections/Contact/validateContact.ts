import { contactForm, contactLimits } from '../../data/contact'

export type ContactValues = {
  name: string
  phone: string
  company: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

// Letras de cualquier idioma (incluye tildes y ñ), espacios, apóstrofes y guiones.
const NAME_PATTERN = /^[\p{L}][\p{L}\s'’-]*$/u
// Dígitos con separadores habituales: +54 9 11 2345-6789, (011) 4567-8901, etc.
const PHONE_PATTERN = /^\+?[\d\s()-]+$/

const { errors } = contactForm

function validateName(value: string) {
  if (!value) return errors.nameRequired
  if (value.length < contactLimits.name.min) return errors.nameShort
  if (!NAME_PATTERN.test(value)) return errors.nameInvalid
}

function validatePhone(value: string) {
  if (!value) return errors.phoneRequired

  const digits = value.replace(/\D/g, '').length
  const { minDigits, maxDigits } = contactLimits.phone
  if (!PHONE_PATTERN.test(value) || digits < minDigits || digits > maxDigits) {
    return errors.phoneInvalid
  }
}

function validateMessage(value: string) {
  if (!value) return errors.messageRequired
  if (value.length < contactLimits.message.min) return errors.messageShort
}

const validators: Partial<Record<keyof ContactValues, (value: string) => string | undefined>> = {
  name: validateName,
  phone: validatePhone,
  message: validateMessage,
}

/** Valida un solo campo. Devuelve el mensaje de error o undefined si es válido. */
export function validateField(field: keyof ContactValues, value: string) {
  return validators[field]?.(value.trim())
}

/** Valida todo el formulario y devuelve solo los campos con error. */
export function validateContact(values: ContactValues): ContactErrors {
  const result: ContactErrors = {}

  for (const field of Object.keys(values) as (keyof ContactValues)[]) {
    const error = validateField(field, values[field])
    if (error) result[field] = error
  }

  return result
}
