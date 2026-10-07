import type { AccordionItem } from '../components/Accordion/Accordion'

export const faqHeading = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Resolvemos tus dudas',
  description: 'Si no encontrás la respuesta que buscás, escribinos y te respondemos a la brevedad.',
}

export const faqCta = {
  text: '¿Tenés otra pregunta?',
  whatsapp: 'Escribinos por WhatsApp',
  button: 'Contactanos',
}

export const faqs: AccordionItem[] = [
  {
    title: '¿Qué tipo de empresas pueden contratar sus servicios?',
    content:
      'Trabajamos con todo tipo de clientes: emprendedores, profesionales independientes, pymes y grandes empresas. Adaptamos cada solución al tamaño y las necesidades de tu negocio.',
  },
  {
    title: '¿Cuánto tarda en estar lista mi web?',
    content:
      'Si es una web básica, la tenés lista en 24 horas desde que nos enviás el contenido. Si necesitás más funcionalidades, el plazo depende de lo que incluya y te lo pasamos junto con el presupuesto.',
  },
  {
    title: '¿Cuánto cuesta y cómo se paga?',
    content:
      'Los sitios web arrancan desde $120.000 y el precio final depende de lo que necesites. En los sitios web básicos, el desarrollo lo pagás una sola vez, cuando el trabajo está terminado; a partir del cuarto mes se suma el mantenimiento mensual, que incluye el hosting. En proyectos más grandes, por lo general el pago se divide en etapas. Trabajamos con transferencia bancaria.',
  },
  {
    title: '¿Cómo es el proceso para empezar?',
    content:
      'Nos contás qué necesitás, te pasamos una propuesta con plazos y precio, y una vez aprobada arrancamos. Para empezar vamos a necesitar tus textos, tu logo e imágenes; si no los tenés, te ayudamos a armarlos.',
  },
  {
    title: '¿El dominio y el hosting están incluidos?',
    content:
      'El hosting está incluido durante los primeros 3 meses. Después sigue incluido dentro del mantenimiento mensual, que además se ocupa de que tu web funcione siempre bien. El dominio (por ejemplo, tunegocio.com.ar) lo comprás vos para que quede a tu nombre, y te ayudamos a elegirlo y configurarlo.',
  },
  {
    title: '¿Puedo pedir cambios?',
    content:
      'Sí. Antes de publicar revisamos el trabajo con vos y hacemos los ajustes necesarios. La cantidad de revisiones depende del tamaño del proyecto y queda aclarada en la propuesta.',
  },
  {
    title: '¿El código y los datos son míos?',
    content:
      'En el software a medida, sí: el código y los datos son 100% tuyos. En los sitios web básicos, nuestra opción más económica, el código queda de nuestro lado: nosotros lo alojamos y lo mantenemos, así no tenés que preocuparte por nada técnico.',
  },
  {
    title: '¿Qué pasa después de la entrega?',
    content:
      'Seguimos acompañándote. En un sitio web básico el mantenimiento es mínimo: nos ocupamos del hosting y de que siga funcionando. En los sistemas a medida acordamos un plan de soporte y mejoras según lo que necesites.',
  },
]
