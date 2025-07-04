import Link from 'next/link'
import Image from 'next/image'
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
              <Image
                src="/p-logo.png"
                alt="Logo"
                width={60}
                height={60}
                className={styles.logoImage}
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
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/services">Infrastructure</Link></li>
              <li><Link href="/services">Power & Energy</Link></li>
              <li><Link href="/services">Industrial</Link></li>
              <li><Link href="/services">Commercial</Link></li>
              <li><Link href="/services">Residential</Link></li>
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