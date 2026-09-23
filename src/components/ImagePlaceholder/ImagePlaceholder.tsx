import { LuImage } from 'react-icons/lu'
import styles from './ImagePlaceholder.module.css'

type ImagePlaceholderProps = {
  label: string
  className?: string
}

// Reemplazar por <img> cuando estén las imágenes reales.
function ImagePlaceholder({ label, className = '' }: ImagePlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${className}`} role="img" aria-label={label}>
      <LuImage className={styles.icon} aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export default ImagePlaceholder
