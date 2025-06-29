import Link from 'next/link'
import styles from '../page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      {/* Header/Navigation */}

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.aboutPage}>
          <h1>About Orasco</h1>
          
          <section className={styles.aboutSection}>
            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform businesses through innovative digital solutions, 
              Orasco has been at the forefront of technological advancement for over a decade. 
              We believe in the power of technology to solve complex business challenges and 
              create meaningful impact in the digital landscape.
            </p>
          </section>

          <section className={styles.aboutSection}>
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance efficiency, and create lasting value for our clients and their customers.
            </p>
          </section>

          <section className={styles.aboutSection}>
            <h2>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Innovation</h3>
                <p>We constantly explore new technologies and approaches to deliver the best solutions.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Excellence</h3>
                <p>We maintain the highest standards in everything we do, from code quality to client service.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Integrity</h3>
                <p>We build trust through honest communication and reliable delivery.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Collaboration</h3>
                <p>We work closely with our clients to ensure their vision becomes reality.</p>
              </div>
            </div>
          </section>

          <section className={styles.aboutSection}>
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced professionals with diverse backgrounds in 
              software development, design, marketing, and business strategy. Together, 
              we bring a comprehensive approach to solving complex digital challenges.
            </p>
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