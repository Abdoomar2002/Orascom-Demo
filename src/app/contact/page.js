import Layout from '@/components/layout/Layout'
import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/lib/constants/site-config'
import styles from './contact.module.css'

// Single Responsibility: Handle contact page content and layout
export default function ContactPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1>Contact Us</h1>
            <p>Get in touch with us for any inquiries or business opportunities.</p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h3>Address</h3>
                <p>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.suite}<br />
                  {siteConfig.contact.address.city}
                </p>
              </div>
              
              <div className={styles.contactItem}>
                <h3>Phone</h3>
                <p>{siteConfig.contact.phone}</p>
              </div>
              
              <div className={styles.contactItem}>
                <h3>Email</h3>
                <p>{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
          
          <div className={styles.form}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
} 