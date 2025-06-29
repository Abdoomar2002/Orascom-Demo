'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants/site-config'
import styles from './Header.module.css'

const NAV = [
  { name: 'ABOUT US', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'INVESTORS', href: '/investors-updates' },
  { name: 'SUSTAINABILITY', href: '/sustainability' },
  { name: 'NEWSROOM', href: '/updates' },
  { name: 'CAREERS', href: 'https://careers.orascom.com' },
]

// Single Responsibility: Handle header/navigation display and interaction
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index)
  }

  return (
    <div className={styles.header}>
        <div className={styles.ticker}>
          <span>EGP 315.00 <span className={styles.arrow}>▲</span></span>
          <span>USD 5.99 <span className={styles.arrow}>▲</span></span>
        </div>
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoNav}>
          <div className={styles.logo}>
            <span className={styles.logoText}>ORASCOM</span>
            <span className={styles.logoSub}>CONSTRUCTION</span>
          </div>
          <nav className={styles.nav}>
            {NAV.map((item) => (
              <Link key={item.name} href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
            </div>
  )
} 