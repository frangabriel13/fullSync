import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { solutions, solutionsHeading } from '../../data/solutions'
import styles from './Solutions.module.css'

function Solutions() {
  return (
    <section id="soluciones" className={styles.solutions}>
      <Container>
        <SectionHeading {...solutionsHeading} />

        <ul className={styles.grid}>
          {solutions.map(({ icon: Icon, title, description }) => (
            <li key={title} className={styles.card}>
              <span className={styles.icon}>
                <Icon aria-hidden="true" />
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Solutions
