import { LuArrowRight } from 'react-icons/lu'
import AnimatedNumber from '../../components/AnimatedNumber/AnimatedNumber'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import portada from '../../assets/portada.png'
import { hero, stats } from '../../data/hero'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <img src={portada} alt={hero.imageAlt} className={styles.background} />
      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <Button href="#contacto" className={styles.action}>
              Hablemos <LuArrowRight aria-hidden="true" />
            </Button>
            <Button href="#soluciones" variant="outlineLight" className={styles.action}>
              Ver soluciones
            </Button>
          </div>
        </div>

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li
              key={stat.label}
              className={`${styles.stat} ${stat.hideOnMobile ? styles.desktopOnly : ''}`}
            >
              <strong>
                <AnimatedNumber value={stat.value} />
              </strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Hero
