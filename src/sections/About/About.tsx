import Accordion from '../../components/Accordion/Accordion'
import Container from '../../components/Container/Container'
import ImagePlaceholder from '../../components/ImagePlaceholder/ImagePlaceholder'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { about } from '../../data/about'
import styles from './About.module.css'

function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <Container className={styles.grid}>
        <ImagePlaceholder label="Imagen del equipo" className={styles.image} />

        <div className={styles.content}>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
            align="left"
          />
          <Accordion items={about.items} defaultOpen={0} />
        </div>
      </Container>
    </section>
  )
}

export default About
