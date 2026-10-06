import Accordion from '../../components/Accordion/Accordion'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { faqCta, faqHeading, faqs } from '../../data/faq'
import styles from './Faq.module.css'

// Se dividen las preguntas en dos columnas independientes.
const half = Math.ceil(faqs.length / 2)
const columns = [faqs.slice(0, half), faqs.slice(half)]

function Faq() {
  return (
    <section id="preguntas" className={styles.faq}>
      <Container>
        <SectionHeading {...faqHeading} />

        <div className={styles.grid}>
          {columns.map((items, index) => (
            <Accordion key={index} items={items} defaultOpen={index === 0 ? 0 : null} />
          ))}
        </div>

        <div className={styles.cta}>
          <p>{faqCta.text}</p>
          <Button href="#contacto">{faqCta.button}</Button>
        </div>
      </Container>
    </section>
  )
}

export default Faq
