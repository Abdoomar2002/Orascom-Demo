'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants/site-config'
import styles from './Header.module.css'

const NAV = [
  { name: 'ABOUT US', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'ACTIVITIES', href: '/activities' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'CONTACT', href: '/contact' },
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

    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoNav}>
          <div className={styles.logo}>
            <Image
              src="/p-logo.png"
              alt="Logo"
              width={60}
              height={60}
              className={styles.logoImage}
            />
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
           
  )
} 