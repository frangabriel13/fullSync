import { useId, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import styles from './Accordion.module.css'

export type AccordionItem = {
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
  defaultOpen?: number | null
}

function Accordion({ items, defaultOpen = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)
  const baseId = useId()

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`

        return (
          <div key={item.title} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <LuChevronDown className={styles.icon} aria-hidden="true" />
            </button>
            <div id={panelId} className={styles.panel} role="region">
              <div className={styles.panelInner}>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
