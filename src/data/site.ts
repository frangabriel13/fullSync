import { FaInstagram } from 'react-icons/fa6'

export const navLinks = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Sobre nosotros', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
]

export const contactInfo = {
  phone: '+54 9 11 7896-3032',
  email: 'contacto@fullsync.site',
  address: 'Buenos Aires, Argentina',
  hours: 'Lunes a viernes, 9 a 18 h',
  // Formato internacional sin "+", espacios ni el 15 (ej. 5491112345678).
  whatsapp: '5491178963032',
}

// Mensajes precargados para saber desde qué botón nos escriben.
export const whatsappMessages = {
  general: 'Hola, quiero hacer una consulta.',
  faq: 'Hola, tengo una pregunta.',
  contact: 'Hola, vengo de la web y quiero hacer una consulta.',
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contactInfo.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/fullsync.oficial/', icon: FaInstagram },
]
