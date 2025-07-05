import styles from '../../services/services.module.css';

export default function Activity1() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Construction</h1>
          <p className={styles.servicesSubtitle}>Comprehensive construction services for buildings, infrastructure, and industrial facilities across multiple sectors.</p>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Our Construction Expertise</h2>
        <p className={styles.servicesSectionText}>
          We deliver end-to-end construction solutions, from design and engineering to project management and execution. Our team is experienced in delivering complex projects on time and within budget, ensuring the highest standards of quality and safety.
        </p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏢</div>
            <h3 className={styles.serviceCardTitle}>Commercial Buildings</h3>
            <p className={styles.serviceCardText}>Office towers, retail centers, hotels, and mixed-use developments.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏠</div>
            <h3 className={styles.serviceCardTitle}>Residential Projects</h3>
            <p className={styles.serviceCardText}>Apartments, villas, and master-planned communities.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏭</div>
            <h3 className={styles.serviceCardTitle}>Industrial Facilities</h3>
            <p className={styles.serviceCardText}>Factories, warehouses, and manufacturing plants.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🌉</div>
            <h3 className={styles.serviceCardTitle}>Infrastructure</h3>
            <p className={styles.serviceCardText}>Bridges, tunnels, and transportation networks.</p>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Construction Solutions</a>
        </div>
      </section>
    </>
  );
} 