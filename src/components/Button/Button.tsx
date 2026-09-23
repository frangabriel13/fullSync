import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'light'
  href?: string
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
