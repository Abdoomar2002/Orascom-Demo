'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants/site-config'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import styles from './Header.module.css'

// Single Responsibility: Handle header/navigation display and interaction
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const { t, isRTL } = useLanguage()

  const NAV = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.activities'), href: '/#activities' },
    { name: t('nav.projects'), href: '/#featured-projects' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoNav}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/p-logo.png"
                alt="Logo"
                width={60}
                height={60}
                className={styles.logoImage}
              />
            </Link>
          </div>
          <nav className={styles.nav}>
            {NAV.map((item) => (
              <Link key={item.name} href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className={styles.languageContainer}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
} 