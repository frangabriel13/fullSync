import { LuCheck } from 'react-icons/lu'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { whyUs } from '../../data/solutions'
import styles from './WhyUs.module.css'

function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <Container>
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
          description={whyUs.description}
          light
        />

        <div className={styles.cards}>
          {whyUs.cards.map(({ title, description, reasons, cta, dark }) => (
            <article key={title} className={`${styles.card} ${dark ? styles.dark : ''}`}>
              <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
              </div>

              <ul className={styles.list}>
                {reasons.map((reason) => (
                  <li key={reason}>
                    <span className={styles.check}>
                      <LuCheck aria-hidden="true" />
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>

              <Button href="#contacto" variant={dark ? 'light' : 'primary'} className={styles.button}>
                {cta}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyUs
