import { FaWhatsapp } from 'react-icons/fa6'
import Accordion from '../../components/Accordion/Accordion'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { faqCta, faqHeading, faqs } from '../../data/faq'
import { whatsappLink, whatsappMessages } from '../../data/site'
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
          <div className={styles.ctaButtons}>
            <Button href={whatsappLink(whatsappMessages.faq)} external>
              <FaWhatsapp aria-hidden="true" />
              {faqCta.whatsapp}
            </Button>
            <Button href="#contacto" variant="outline">
              {faqCta.button}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Faq
