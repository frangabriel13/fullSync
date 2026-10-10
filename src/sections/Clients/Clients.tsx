import { useRef, type CSSProperties } from 'react'
import { LuChevronLeft, LuChevronRight, LuQuote } from 'react-icons/lu'
import Container from '../../components/Container/Container'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { useCarousel } from '../../hooks/useCarousel'
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
  const { activePage, pageCount, canPrev, canNext, isDragging, goToPage, prev, next } =
    useCarousel(trackRef)

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
            onClick={prev}
            disabled={!canPrev}
          >
            <LuChevronLeft aria-hidden="true" />
          </button>

          <ul ref={trackRef} className={`${styles.track} ${isDragging ? styles.dragging : ''}`}>
            {projects.map((project) => (
              <li key={project.client} className={styles.project}>
                <div className={styles.browser}>
                  <div className={styles.browserBar} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span className={styles.address} />
                  </div>
                  {'image' in project ? (
                    <img
                      src={project.image}
                      alt={`Captura del proyecto de ${project.client}`}
                      className={`${styles.projectImage} ${styles.projectPhoto}`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  ) : (
                    <ImagePlaceholder label={project.client} className={styles.projectImage} />
                  )}
                </div>

                <div className={styles.projectInfo}>
                  <h3>{project.client}</h3>
                  <p>{project.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="Proyectos siguientes"
            onClick={next}
            disabled={!canNext}
          >
            <LuChevronRight aria-hidden="true" />
          </button>
        </div>

        {pageCount > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={styles.dot}
                aria-label={`Ir a la página ${index + 1} de proyectos`}
                aria-current={index === activePage ? 'true' : undefined}
                onClick={() => goToPage(index)}
              />
            ))}
          </div>
        )}

        <div className={styles.testimonials}>
          <h3 className={styles.testimonialsTitle}>Lo que dicen nuestros clientes</h3>
          <ul className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <li key={testimonial.name} className={styles.testimonial}>
                <LuQuote className={styles.quoteIcon} aria-hidden="true" />
                <blockquote>{testimonial.quote}</blockquote>
                <div className={styles.author}>
                  {testimonial.photo ? (
                    <span className={styles.avatar} aria-hidden="true">
                      <img
                        src={testimonial.photo}
                        alt=""
                        className={styles.avatarPhoto}
                        style={
                          {
                            '--focus-x': `${testimonial.photoFocus.x}%`,
                            '--focus-y': `${testimonial.photoFocus.y}%`,
                            '--zoom': testimonial.photoFocus.zoom,
                            '--rotate': `${testimonial.photoFocus.rotate}deg`,
                          } as CSSProperties
                        }
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ) : (
                    <span className={styles.avatar} aria-hidden="true">
                      {getInitials(testimonial.name)}
                    </span>
                  )}
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
