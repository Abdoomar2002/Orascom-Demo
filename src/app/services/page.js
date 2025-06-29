import Link from 'next/link'
import styles from '../page.module.css'

export default function Services() {
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
        <div className={styles.servicesPage}>
          <h1>Our Services</h1>
          <p className={styles.servicesIntro}>
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>

          <section className={styles.serviceSection}>
            <div className={styles.serviceItem}>
              <h2>Web Development</h2>
              <p>
                We create custom websites and web applications using the latest technologies 
                and best practices. Our solutions are scalable, secure, and optimized for 
                performance.
              </p>
              <ul>
                <li>Custom Website Development</li>
                <li>E-commerce Solutions</li>
                <li>Web Application Development</li>
                <li>API Development & Integration</li>
                <li>Website Maintenance & Support</li>
              </ul>
            </div>
          </section>

          <section className={styles.serviceSection}>
            <div className={styles.serviceItem}>
              <h2>Digital Marketing</h2>
              <p>
                Our digital marketing strategies help businesses increase their online 
                presence, generate leads, and drive conversions through targeted campaigns.
              </p>
              <ul>
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click Advertising (PPC)</li>
                <li>Social Media Marketing</li>
                <li>Content Marketing</li>
                <li>Email Marketing Campaigns</li>
              </ul>
            </div>
          </section>

          <section className={styles.serviceSection}>
            <div className={styles.serviceItem}>
              <h2>UI/UX Design</h2>
              <p>
                We design intuitive and engaging user experiences that delight users 
                and drive business results through thoughtful design and user research.
              </p>
              <ul>
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Wireframing & Prototyping</li>
                <li>User Research & Testing</li>
                <li>Design System Creation</li>
              </ul>
            </div>
          </section>

          <section className={styles.serviceSection}>
            <div className={styles.serviceItem}>
              <h2>Consulting</h2>
              <p>
                Our expert consultants provide strategic guidance to help you make 
                informed decisions about your digital transformation and technology investments.
              </p>
              <ul>
                <li>Digital Strategy Consulting</li>
                <li>Technology Assessment</li>
                <li>Process Optimization</li>
                <li>Team Training & Workshops</li>
                <li>Project Management</li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business with our services.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
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