"use client"
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants/site-config'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './Footer.module.css'

// Single Responsibility: Handle footer display and contact information
export default function Footer() {
  const { t } = useLanguage();

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
              {t('footer.description')}
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
            <h3>{t('footer.quickLinks')}</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">{t('footer.aboutUs')}</Link></li>
              <li><Link href="/services">{t('footer.services')}</Link></li>
              <li><Link href="/portfolio">{t('footer.portfolio')}</Link></li>
              <li><Link href="/contact">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>{t('footer.services')}</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/services">{t('footer.infrastructure')}</Link></li>
              <li><Link href="/services">{t('footer.powerEnergy')}</Link></li>
              <li><Link href="/services">{t('footer.industrial')}</Link></li>
              <li><Link href="/services">{t('footer.commercial')}</Link></li>
              <li><Link href="/services">{t('footer.residential')}</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>{t('footer.contact')}</h3>
            <div className={styles.contactInfo}>
              <p>
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.suite}<br />
                {siteConfig.contact.address.city}
              </p>
              <p>{t('footer.phone')}: {siteConfig.contact.phone}</p>
              <p>{t('footer.email')}: {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>{t('footer.copyright')}</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">{t('footer.privacyPolicy')}</Link>
            <Link href="/terms">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 