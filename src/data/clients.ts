import agendaImage from '../assets/projects/agenda.png'
import eternalImage from '../assets/projects/eternal.png'
import fabricanteImage from '../assets/projects/fabricante.png'
import fitnessImage from '../assets/projects/fitness.png'
import iluminadaImage from '../assets/projects/iluminada.jpeg'
import piterPhoto from '../assets/piter.jpeg'

// Capturas en 16:9 (1920×1080). Los proyectos sin `image` muestran un placeholder.
export const projects = [
  {
    client: 'Fabricante Directo',
    description: 'Web y app Android/iOS de comercio electrónico.',
    image: fabricanteImage,
  },
  {
    client: "AgendApp",
    description: 'Sistema de gestión empresarial.',
    image: agendaImage,
  },
  {
    client: "Eternal Restful",
    description: 'Sistema empresarial de servicios fúnebres',
    image: eternalImage,
  },
  {
    client: 'Iluminada Estética',
    description: 'Sistema de gestión para centro de estética: turnos, caja y clientas.',
    image: iluminadaImage,
  },
  {
    client: "Stella D'Italia",
    description: 'Web para pedidos de camisetas de básquet.',
  },
  {
    client: 'FitApp',
    description: 'Sistema de gestión de rutinas de gimnasio.',
    image: fitnessImage,
  },
]

export const testimonials = [
  {
    quote:
      'Antes pagábamos distintas aplicaciones para cada cosa que necesitábamos. FullSync nos creó un sistema a medida con todo en un solo lugar: turnos, señas, caja y clientas. Además, desde que lo usamos, las reservas aumentaron muchísimo.',
    name: 'Ayelén Alderete',
    role: 'Dueña de Iluminada Estética',
  },
  {
    quote:
      'Desarrollaron nuestra plataforma de venta mayorista completa: web y app para Android e iOS. Entendieron rápido cómo funciona el negocio y siempre estuvieron disponibles para cada cambio que necesitamos.',
    name: 'Piter Zalazar',
    role: 'Fundador de Fabricante Directo',
    photo: piterPhoto,
  },
]
