import { SERVICES } from '@/lib/constants/site-config'
import Card from '@/components/ui/Card'
import styles from './ServicesSection.module.css'

// Single Responsibility: Handle services section display
export default function ServicesSection({ 
  title = "Our Services",
  subtitle = "We offer comprehensive digital solutions to help your business thrive in the modern world.",
  className = ''
}) {
  return (
    <section className={`${styles.servicesSection} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      
      <div className={styles.servicesGrid}>
        {SERVICES.map((service) => (
          <Card 
            key={service.id}
            variant="elevated"
            padding="large"
            shadow="medium"
            hover={true}
            className={styles.serviceCard}
          >
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <ul className={styles.serviceFeatures}>
              {service.features.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
} 