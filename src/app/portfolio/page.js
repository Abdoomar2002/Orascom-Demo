import Link from 'next/link'
import styles from '../page.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">Orasco</Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.portfolioPage}>
          <h1>Our Portfolio</h1>
          <p className={styles.portfolioIntro}>
            Explore our latest projects and see how we've helped businesses achieve their goals.
          </p>

          <div className={styles.portfolioGrid}>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder}>E-commerce Website</div>
              </div>
              <div className={styles.portfolioContent}>
                <h3>E-commerce Platform</h3>
                <p>A modern e-commerce website with advanced features including product management, 
                payment processing, and inventory tracking.</p>
                <div className={styles.portfolioTags}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioItem}>
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder}>Mobile App</div>
              </div>
              <div className={styles.portfolioContent}>
                <h3>Mobile Banking App</h3>
                <p>A secure mobile banking application with real-time transaction monitoring, 
                biometric authentication, and intuitive user interface.</p>
                <div className={styles.portfolioTags}>
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioItem}>
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder}>Corporate Website</div>
              </div>
              <div className={styles.portfolioContent}>
                <h3>Corporate Website Redesign</h3>
                <p>A complete website redesign for a Fortune 500 company, improving user experience 
                and increasing conversion rates by 40%.</p>
                <div className={styles.portfolioTags}>
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioItem}>
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder}>SaaS Platform</div>
              </div>
              <div className={styles.portfolioContent}>
                <h3>SaaS Management Platform</h3>
                <p>A comprehensive SaaS platform for project management with real-time collaboration, 
                analytics dashboard, and team communication tools.</p>
                <div className={styles.portfolioTags}>
                  <span>Vue.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioItem}>
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder}>Restaurant App</div>
              </div>
              <div className={styles.portfolioContent}>
                <h3>Restaurant Ordering System</h3>
                <p>A complete restaurant management system with online ordering, table reservations, 
                and kitchen management features.</p>
                <div className={styles.portfolioTags}>
                  <span>Angular</span>
                  <span>Java</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioItem}>
              <div className={styles.portfolioImage}>
                <div className={styles.imagePlaceholder}>Healthcare Portal</div>
              </div>
              <div className={styles.portfolioContent}>
                <h3>Healthcare Patient Portal</h3>
                <p>A secure patient portal for healthcare providers with appointment scheduling, 
                medical records access, and telemedicine capabilities.</p>
                <div className={styles.portfolioTags}>
                  <span>React</span>
                  <span>HIPAA</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>

          <section className={styles.ctaSection}>
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your vision to life.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get Started
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Orasco</h3>
            <p>Your trusted partner for digital success.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: info@orasco.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Orasco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 