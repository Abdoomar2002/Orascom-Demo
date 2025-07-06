"use client"
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

// Template Method Pattern: Defines the skeleton of page layout
// Single Responsibility: Handle page structure and layout
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
} 