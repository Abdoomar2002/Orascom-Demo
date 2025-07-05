import styles from '../../services/services.module.css';

export default function Activity5() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Residential</h1>
          <p className={styles.servicesSubtitle}>High-quality residential developments: apartments, villas, and mixed-use communities.</p>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Our Residential Expertise</h2>
        <p className={styles.servicesSectionText}>
          We create vibrant, sustainable communities with a focus on quality of life. Our residential projects range from luxury towers to affordable housing, all designed for comfort, security, and modern living.
        </p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏠</div>
            <h3 className={styles.serviceCardTitle}>Luxury Apartments</h3>
            <p className={styles.serviceCardText}>Premium high-rise apartments with modern amenities and stunning views.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏡</div>
            <h3 className={styles.serviceCardTitle}>Villas & Townhouses</h3>
            <p className={styles.serviceCardText}>Spacious villas and townhouses in master-planned communities.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏘️</div>
            <h3 className={styles.serviceCardTitle}>Affordable Housing</h3>
            <p className={styles.serviceCardText}>Quality, affordable homes for families and individuals.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏙️</div>
            <h3 className={styles.serviceCardTitle}>Mixed-Use Communities</h3>
            <p className={styles.serviceCardText}>Integrated developments with residential, retail, and leisure spaces.</p>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Residential Solutions</a>
        </div>
      </section>
    </>
  );
} 