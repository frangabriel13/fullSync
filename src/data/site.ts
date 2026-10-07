import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

export const navLinks = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Sobre nosotros', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
]

// TODO: reemplazar por los datos reales de la empresa.
export const contactInfo = {
  phone: '+54 11 1234-5678',
  email: 'contacto@fullsync.com',
  address: 'Buenos Aires, Argentina',
  hours: 'Lunes a viernes, 9 a 18 h',
  // Formato internacional sin "+", espacios ni el 15 (ej. 5491112345678).
  whatsapp: '5491112345678',
}

// Mensajes precargados para saber desde qué botón nos escriben.
export const whatsappMessages = {
  general: 'Hola, quiero hacer una consulta.',
  faq: 'Hola, tengo una pregunta.',
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contactInfo.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF },
]
