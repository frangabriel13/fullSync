import { LuCheck } from 'react-icons/lu'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { reasons } from '../../data/solutions'
import styles from './WhyUs.module.css'

function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <Container>
        <div className={styles.card}>
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title="Tu aliado tecnológico de confianza"
            description="Cada empresa, sin importar su tamaño, necesita sistemas eficientes y seguros para ser más productiva."
            align="left"
            light
          />

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

          <Button href="#contacto" variant="light">
            Quiero asesoramiento
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default WhyUs
