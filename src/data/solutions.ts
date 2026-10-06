import {
  LuCloud,
  LuCode,
  LuGlobe,
  LuHeadset,
  LuLightbulb,
  LuPalette,
  LuPenTool,
  LuSearch,
  LuShieldCheck,
} from 'react-icons/lu'

export const solutionsHeading = {
  eyebrow: 'Nuestras soluciones',
  title: 'Servicios IT para tu empresa',
  description:
    'Desde tu sitio web hasta sistemas a medida, cubrimos cada aspecto tecnológico de tu negocio.',
}

export const solutions = [
  {
    icon: LuCode,
    title: 'Desarrollo de software',
    description: 'Landings, sitios web, apps móviles y sistemas a medida de tus procesos.',
  },
  {
    icon: LuPenTool,
    title: 'Diseño UX/UI',
    description: 'Interfaces claras y usables que mejoran la experiencia digital.',
  },
  {
    icon: LuPalette,
    title: 'Diseño gráfico y branding',
    description: 'Logos, identidad visual y edición de imágenes para tu marca.',
  },
  {
    icon: LuSearch,
    title: 'SEO y posicionamiento',
    description: 'Optimizamos tu web para que te encuentren en Google.',
  },
  {
    icon: LuCloud,
    title: 'Servicios cloud',
    description: 'Migración, gestión y respaldos de tus servicios y datos en la nube.',
  },
  {
    icon: LuShieldCheck,
    title: 'Seguridad',
    description:
      'Sitios y sistemas protegidos con buenas prácticas, conexiones seguras y resguardo de tus datos.',
  },
  {
    icon: LuHeadset,
    title: 'Soporte técnico',
    description: 'Mesa de ayuda y asistencia remota o presencial para tu equipo.',
  },
  {
    icon: LuLightbulb,
    title: 'Consultoría IT',
    description: 'Planificación tecnológica alineada a los objetivos del negocio.',
  },
]

export const whyUs = {
  eyebrow: 'Por qué elegirnos',
  title: 'Una solución para cada etapa de tu negocio',
  description:
    'Hablás directo con quienes desarrollan tu proyecto, con precios claros y sin sorpresas.',
  cards: [
    {
      icon: LuGlobe,
      title: 'Sitios web',
      description: 'Ideal para presentar tu negocio y empezar a recibir clientes.',
      priceLabel: 'Desde',
      price: '$120.000',
      currency: 'ARS',
      priceNote: 'Pagás una sola vez, cuando el trabajo está terminado',
      reasons: [
        'Tu web lista en hasta 24 h',
        'Diseño moderno y adaptado a celulares',
        'Optimizado para aparecer en Google',
        'Integración de redes sociales',
        'Hosting incluido los primeros 3 meses',
      ],
      cta: 'Quiero mi web',
      dark: false,
    },
    {
      icon: LuCode,
      badge: 'Para empresas',
      title: 'Software a medida',
      description: 'Para empresas que necesitan sistemas adaptados a sus procesos.',
      priceLabel: 'Presupuesto',
      price: 'A medida',
      priceNote: 'Pagás por etapas, a medida que avanza el proyecto',
      reasons: [
        'Análisis de tus procesos antes de desarrollar',
        'Sistema web, mobile y/o escritorio',
        'Entregas por etapas',
        'Integración con tus herramientas',
        'Código y datos 100% tuyos',
        'Acompañamiento después de la entrega',
      ],
      cta: 'Pedí tu presupuesto',
      dark: true,
    },
  ],
}
