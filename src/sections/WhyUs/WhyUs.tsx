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
          {whyUs.cards.map((card) => {
            const { icon: Icon, title, description, reasons, cta, dark } = card
            const currency = 'currency' in card ? card.currency : null
            const badge = 'badge' in card ? card.badge : null

            return (
              <article key={title} className={`${styles.card} ${dark ? styles.dark : ''}`}>
                {badge && <span className={styles.badge}>{badge}</span>}

                <div className={styles.header}>
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.price}>
                  <span className={styles.priceLabel}>{card.priceLabel}</span>
                  <p className={styles.priceValue}>
                    {card.price}
                    {currency && <span className={styles.currency}> {currency}</span>}
                  </p>
                  <span className={styles.priceNote}>{card.priceNote}</span>
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

                <Button
                  href="#contacto"
                  variant={dark ? 'light' : 'primary'}
                  className={styles.button}
                >
                  {cta}
                </Button>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default WhyUs
