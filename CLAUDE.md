# FullSync — Landing page

Sitio web de **FullSync**, empresa de soluciones IT. Solo frontend, una única página (landing) en **español**.

## Stack

- Vite + React + TypeScript
- CSS Modules (sin frameworks de CSS)
- `react-icons` para íconos (set Lucide: `react-icons/lu`; redes sociales: `react-icons/fa6`)
- Sin router: la navegación es por anclas (`#id`) con scroll suave

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — chequeo de tipos + build de producción
- `npm run lint` — ESLint

## Secciones (en orden)

| Sección         | id           | Componente                  |
|-----------------|--------------|-----------------------------|
| Inicio          | `inicio`     | `sections/Hero` (+ estadísticas) |
| Soluciones      | `soluciones` | `sections/Solutions`, `sections/WhyUs` |
| Sobre nosotros  | `nosotros`   | `sections/About`            |
| Clientes        | `clientes`   | `sections/Clients` (proyectos + testimonios) |
| Preguntas       | `preguntas`  | `sections/Faq`              |
| Contacto        | `contacto`   | `sections/Contact`          |

"Inicio" no aparece en el menú: el logo lleva arriba de todo.

## Estructura

```
src/
  components/  piezas reutilizables (Button, Container, SectionHeading, Accordion, Logo, ImagePlaceholder)
  layout/      Header y Footer
  sections/    una carpeta por sección de la landing
  data/        todo el contenido (textos, listas, datos de contacto) en archivos .ts
  styles/      variables globales (colores, tipografía, espaciados) y estilos base
  assets/      imágenes y logo
```

## Convenciones

- Un componente por carpeta: `Nombre/Nombre.tsx` + `Nombre/Nombre.module.css`.
- El contenido va en `src/data`, no hardcodeado en los componentes.
- Usar siempre las variables de `styles/variables.css` (colores, radios, sombras), nunca valores sueltos.
- Código simple: componentes funcionales, hooks nativos, sin librerías innecesarias.
- Mobile first y accesible (HTML semántico, `aria-*` en menú y acordeones).
- Textos en español con voseo (ej. "Contactanos", "Escribinos").
- Las imágenes son placeholders (`ImagePlaceholder`) hasta tener las reales.
- Diseño de referencia: estilo template IT moderno (azul/violeta + azul marino, tarjetas blancas, bordes redondeados).
