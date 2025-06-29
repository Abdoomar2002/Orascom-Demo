import Link from 'next/link'
import { siteConfig } from '@/lib/constants/site-config'
import styles from './Footer.module.css'

// Single Responsibility: Handle footer display and contact information
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <img
                src="/wp-content/uploads/Orascom_Construction-Logo.wine_.png"
                alt={siteConfig.name}
                width={200}
                height={60}
              />
            </div>
            <p className={styles.description}>
              A leading global engineering and construction contractor primarily focused on infrastructure, 
              industrial and high-end commercial projects.
            </p>
            <div className={styles.socialLinks}>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/investors-updates">Investors</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/updates">News</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/services/construction">Construction</Link></li>
              <li><Link href="/services/concessions-investments">Concessions & Investments</Link></li>
              <li><Link href="/services/OM-and-Facilities-Management">O&M and Facilities Management</Link></li>
              <li><Link href="/services/building-materials">Building Materials</Link></li>
              <li><Link href="/services/Equipment-Services">Equipment Services</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <div className={styles.contactInfo}>
              <p>
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.suite}<br />
                {siteConfig.contact.address.city}
              </p>
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>Email: {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; 2025 {siteConfig.name}. All rights reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 