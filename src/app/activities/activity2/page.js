import styles from '../../services/services.module.css';

export default function Activity2() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Power & Energy</h1>
          <p className={styles.servicesSubtitle}>Innovative solutions for power generation, renewable energy, and electrical infrastructure.</p>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Our Power & Energy Expertise</h2>
        <p className={styles.servicesSectionText}>
          We deliver turnkey power and energy projects, from conventional power plants to cutting-edge renewable energy facilities. Our team ensures reliable, efficient, and sustainable energy solutions for communities and industries.
        </p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⚡</div>
            <h3 className={styles.serviceCardTitle}>Power Plants</h3>
            <p className={styles.serviceCardText}>Design, construction, and operation of thermal, hydro, and gas power plants.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🌞</div>
            <h3 className={styles.serviceCardTitle}>Renewable Energy</h3>
            <p className={styles.serviceCardText}>Solar, wind, and hybrid energy projects for a sustainable future.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔌</div>
            <h3 className={styles.serviceCardTitle}>Transmission & Distribution</h3>
            <p className={styles.serviceCardText}>Electrical grid infrastructure, substations, and transmission lines.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔋</div>
            <h3 className={styles.serviceCardTitle}>Energy Storage</h3>
            <p className={styles.serviceCardText}>Advanced battery and energy storage solutions for grid stability.</p>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Power & Energy Solutions</a>
        </div>
      </section>
    </>
  );
} 