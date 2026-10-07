import type { ChangeEvent, FocusEvent, ReactNode } from 'react'
import styles from './FormField.module.css'

type FieldElement = HTMLInputElement | HTMLTextAreaElement

type FormFieldProps = {
  id: string
  name: string
  label: string
  value: string
  onChange: (event: ChangeEvent<FieldElement>) => void
  onBlur?: (event: FocusEvent<FieldElement>) => void
  error?: string
  optionalLabel?: string
  multiline?: boolean
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  inputMode?: 'text' | 'tel' | 'email' | 'numeric'
  maxLength?: number
  rows?: number
  required?: boolean
  hint?: ReactNode
}

// Campo de formulario accesible: label asociado, error vinculado con aria-describedby
// y aria-invalid para lectores de pantalla.
function FormField({
  id,
  label,
  error,
  optionalLabel,
  multiline = false,
  type = 'text',
  rows = 5,
  required = false,
  hint,
  ...inputProps
}: FormFieldProps) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined

  const sharedProps = {
    id,
    className: `${styles.control} ${error ? styles.invalid : ''}`,
    'aria-invalid': Boolean(error),
    'aria-describedby': describedBy,
    'aria-required': required,
    ...inputProps,
  }

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optionalLabel && <span className={styles.optional}> {optionalLabel}</span>}
      </label>

      {multiline ? <textarea rows={rows} {...sharedProps} /> : <input type={type} {...sharedProps} />}

      {(error || hint) && (
        <div className={styles.footer}>
          {error && (
            <p id={errorId} className={styles.error}>
              {error}
            </p>
          )}
          {hint && (
            <span id={hintId} className={styles.hint}>
              {hint}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default FormField
