"use client"
// Services Page - Orascom Construction

import styles from './services.module.css';

export default function Services() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Petroleum Services</h1>
          <p className={styles.servicesSubtitle}>Empowering the energy sector with world-class petroleum engineering, exploration, and production solutions.</p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Comprehensive Petroleum Expertise</h2>
        <p className={styles.servicesSectionText}>
          Orascom Construction delivers end-to-end petroleum services, from upstream exploration and drilling to downstream refining and distribution. Our team leverages decades of experience and advanced technology to ensure safe, efficient, and sustainable energy solutions for our clients worldwide.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⛽</div>
            <h3 className={styles.serviceCardTitle}>Exploration & Drilling</h3>
            <p className={styles.serviceCardText}>Advanced geological surveys, seismic analysis, and precision drilling for oil and gas discovery.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🛢️</div>
            <h3 className={styles.serviceCardTitle}>Production Facilities</h3>
            <p className={styles.serviceCardText}>Design, construction, and operation of onshore and offshore production platforms and refineries.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🚢</div>
            <h3 className={styles.serviceCardTitle}>Storage & Transportation</h3>
            <p className={styles.serviceCardText}>Safe and efficient storage solutions, pipelines, and shipping for petroleum products.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔬</div>
            <h3 className={styles.serviceCardTitle}>Refining & Petrochemicals</h3>
            <p className={styles.serviceCardText}>Cutting-edge refining processes and petrochemical production for value-added products.</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Why Choose Us?</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Industry-Leading Safety</h3>
            <p className={styles.serviceCardText}>Strict adherence to international safety standards and best practices in all operations.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Innovative Technology</h3>
            <p className={styles.serviceCardText}>Utilizing the latest digital tools, automation, and analytics for optimized petroleum production.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Sustainable Solutions</h3>
            <p className={styles.serviceCardText}>Commitment to environmental stewardship and responsible resource management.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Global Experience</h3>
            <p className={styles.serviceCardText}>Proven track record in major petroleum projects across the Middle East, Africa, and beyond.</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Petroleum Solutions</a>
        </div>
      </section>
    </>
  );
} 