import styles from '../../services/services.module.css';

export default function Activity6() {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>Infrastructure</h1>
          <p className={styles.servicesSubtitle}>Connecting communities with world-class infrastructure: roads, bridges, airports, ports, and more.</p>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>Our Infrastructure Expertise</h2>
        <p className={styles.servicesSectionText}>
          We deliver large-scale infrastructure projects that drive economic growth and improve quality of life. Our expertise covers every aspect of infrastructure development, from planning and design to construction and maintenance.
        </p>
      </section>
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🛣️</div>
            <h3 className={styles.serviceCardTitle}>Roads & Highways</h3>
            <p className={styles.serviceCardText}>Design and construction of modern road networks for efficient transportation.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🌉</div>
            <h3 className={styles.serviceCardTitle}>Bridges & Tunnels</h3>
            <p className={styles.serviceCardText}>Engineering and building landmark bridges and tunnels.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>✈️</div>
            <h3 className={styles.serviceCardTitle}>Airports</h3>
            <p className={styles.serviceCardText}>Development of world-class airports for global connectivity.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🚢</div>
            <h3 className={styles.serviceCardTitle}>Ports</h3>
            <p className={styles.serviceCardText}>Construction and expansion of seaports to facilitate trade and logistics.</p>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Infrastructure Solutions</a>
        </div>
      </section>
    </>
  );
} 