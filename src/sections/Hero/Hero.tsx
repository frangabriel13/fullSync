import { LuArrowRight } from 'react-icons/lu'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import { hero, stats } from '../../data/hero'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>{hero.eyebrow}</span>
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.description}>{hero.description}</p>
            <div className={styles.actions}>
              <Button href="#contacto">
                Hablemos <LuArrowRight aria-hidden="true" />
              </Button>
              <Button href="#soluciones" variant="outline">
                Ver soluciones
              </Button>
            </div>
          </div>

          <div className={styles.media}>
            <ImagePlaceholder label="Imagen principal" className={styles.image} />
          </div>
        </div>

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Hero
