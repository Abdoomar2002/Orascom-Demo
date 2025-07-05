import styles from '../../services/services.module.css';

export default function Activity4() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Commercial</h1>
          <p className={styles.servicesSubtitle}>Expertise in commercial developments: office buildings, retail centers, hotels, and mixed-use projects.</p>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Our Commercial Expertise</h2>
        <p className={styles.servicesSectionText}>
          We deliver high-end commercial projects that drive economic growth and urban development. Our team manages every aspect, from design and construction to fit-out and facility management.
        </p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏢</div>
            <h3 className={styles.serviceCardTitle}>Office Buildings</h3>
            <p className={styles.serviceCardText}>Modern office towers and business parks for leading organizations.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏬</div>
            <h3 className={styles.serviceCardTitle}>Retail Centers</h3>
            <p className={styles.serviceCardText}>Shopping malls, retail parks, and lifestyle destinations.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏨</div>
            <h3 className={styles.serviceCardTitle}>Hotels & Hospitality</h3>
            <p className={styles.serviceCardText}>Luxury hotels, resorts, and hospitality projects.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏙️</div>
            <h3 className={styles.serviceCardTitle}>Mixed-Use Developments</h3>
            <p className={styles.serviceCardText}>Integrated developments combining commercial, residential, and leisure spaces.</p>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Commercial Solutions</a>
        </div>
      </section>
    </>
  );
} 