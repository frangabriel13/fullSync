import { useRef } from 'react'
import { LuChevronLeft, LuChevronRight, LuQuote } from 'react-icons/lu'
import Container from '../../components/Container/Container'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { projects, testimonials } from '../../data/clients'
import styles from './Clients.module.css'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
}

function Clients() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="clientes" className={styles.clients}>
      <Container>
        <SectionHeading
          eyebrow="Clientes"
          title="Proyectos que hablan por nosotros"
          description="Algunos de los desafíos que resolvimos junto a nuestros clientes."
        />

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            aria-label="Proyectos anteriores"
            onClick={() => scroll(-1)}
          >
            <LuChevronLeft aria-hidden="true" />
          </button>

          <ul ref={trackRef} className={styles.track}>
            {projects.map((project) => (
              <li key={project.title} className={styles.project}>
                <ImagePlaceholder label={project.title} className={styles.projectImage} />
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="Proyectos siguientes"
            onClick={() => scroll(1)}
          >
            <LuChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className={styles.testimonials}>
          <h3 className={styles.testimonialsTitle}>Lo que dicen nuestros clientes</h3>
          <ul className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <li key={testimonial.name} className={styles.testimonial}>
                <LuQuote className={styles.quoteIcon} aria-hidden="true" />
                <blockquote>{testimonial.quote}</blockquote>
                <div className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    {getInitials(testimonial.name)}
                  </span>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Clients
