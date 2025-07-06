"use client"
// Commercial Activity Page - Orascom Construction

import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from '../activity1/activity.module.css';

export default function CommercialActivity() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.activityHero}>
        <div className={styles.activityHeroContent}>
          <h1 className={styles.activityTitle}>{t('activities.commercial.title')}</h1>
          <p className={styles.activitySubtitle}>{t('activities.commercial.description')}</p>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Commercial Development Excellence</h2>
        <p className={styles.activitySectionText}>
          We create iconic commercial developments including office buildings, retail centers, hotels, and mixed-use projects that drive economic growth and enhance urban landscapes.
        </p>
      </section>

      <section className={styles.activitySection}>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏢</div>
            <h3 className={styles.activityCardTitle}>Office Buildings</h3>
            <p className={styles.activityCardText}>Modern office towers and corporate headquarters designed for productivity and innovation.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🛍️</div>
            <h3 className={styles.activityCardTitle}>Retail Centers</h3>
            <p className={styles.activityCardText}>Shopping malls, retail complexes, and commercial districts that attract businesses and consumers.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏨</div>
            <h3 className={styles.activityCardTitle}>Hotels & Hospitality</h3>
            <p className={styles.activityCardText}>Luxury hotels, resorts, and hospitality facilities that provide exceptional guest experiences.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏬</div>
            <h3 className={styles.activityCardTitle}>Mixed-Use Developments</h3>
            <p className={styles.activityCardText}>Integrated projects combining retail, office, residential, and entertainment spaces.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Why Choose Our Commercial Solutions?</h2>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Prime Locations</h3>
            <p className={styles.activityCardText}>Strategic site selection and development in high-value commercial districts.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Modern Design</h3>
            <p className={styles.activityCardText}>Contemporary architecture and innovative design solutions for maximum appeal.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Economic Impact</h3>
            <p className={styles.activityCardText}>Projects that generate jobs, attract investment, and boost local economies.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Quality Construction</h3>
            <p className={styles.activityCardText}>Premium materials and craftsmanship ensuring long-term value and durability.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Commercial Solutions</a>
        </div>
      </section>
    </>
  );
} 