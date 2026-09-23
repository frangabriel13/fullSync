import Accordion from '../../components/Accordion/Accordion'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { faqs } from '../../data/faq'
import styles from './Faq.module.css'

// Se dividen las preguntas en dos columnas independientes.
const half = Math.ceil(faqs.length / 2)
const columns = [faqs.slice(0, half), faqs.slice(half)]

function Faq() {
  return (
    <section id="preguntas" className={styles.faq}>
      <Container>
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Si no encontrás la respuesta que buscás, escribinos y te respondemos a la brevedad."
        />

        <div className={styles.grid}>
          {columns.map((items, index) => (
            <Accordion key={index} items={items} defaultOpen={index === 0 ? 0 : null} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Faq
