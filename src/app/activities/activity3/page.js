import styles from '../../services/services.module.css';

export default function Activity3() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Industrial</h1>
          <p className={styles.servicesSubtitle}>Specialized construction and engineering for refineries, petrochemical plants, and manufacturing facilities.</p>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Our Industrial Expertise</h2>
        <p className={styles.servicesSectionText}>
          We provide turnkey solutions for industrial projects, from design and engineering to construction and commissioning. Our experience covers a wide range of industrial sectors, ensuring operational efficiency and safety.
        </p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏭</div>
            <h3 className={styles.serviceCardTitle}>Refineries</h3>
            <p className={styles.serviceCardText}>Construction and upgrade of oil and gas refineries for efficient processing.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🧪</div>
            <h3 className={styles.serviceCardTitle}>Petrochemical Plants</h3>
            <p className={styles.serviceCardText}>Design and build of advanced petrochemical and chemical production facilities.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏢</div>
            <h3 className={styles.serviceCardTitle}>Manufacturing Facilities</h3>
            <p className={styles.serviceCardText}>Factories, warehouses, and logistics centers for various industries.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⚙️</div>
            <h3 className={styles.serviceCardTitle}>Process Engineering</h3>
            <p className={styles.serviceCardText}>Integrated process engineering for optimized industrial operations.</p>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Industrial Solutions</a>
        </div>
      </section>
    </>
  );
} 