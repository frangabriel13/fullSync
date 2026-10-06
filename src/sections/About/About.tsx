import { LuMessageCircle } from 'react-icons/lu'
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
        <div className={styles.team}>
          <ul className={styles.members}>
            {about.team.map(({ name, role }) => (
              <li key={name} className={styles.member}>
                <ImagePlaceholder label={`Foto de ${name}`} className={styles.photo} />
                <div className={styles.badge}>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.role}>{role}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            <span className={styles.noteIcon}>
              <LuMessageCircle aria-hidden="true" />
            </span>
            {about.teamNote}
          </p>
        </div>

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
