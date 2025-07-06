"use client"
// Residential Activity Page - Orascom Construction

import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from '../activity1/activity.module.css';

export default function ResidentialActivity() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.activityHero}>
        <div className={styles.activityHeroContent}>
          <h1 className={styles.activityTitle}>{t('activities.residential.title')}</h1>
          <p className={styles.activitySubtitle}>{t('activities.residential.description')}</p>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Quality Residential Developments</h2>
        <p className={styles.activitySectionText}>
          We create high-quality residential developments including apartments, villas, and mixed-use communities that provide modern, comfortable, and sustainable living environments.
        </p>
      </section>

      <section className={styles.activitySection}>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏢</div>
            <h3 className={styles.activityCardTitle}>Apartment Complexes</h3>
            <p className={styles.activityCardText}>Modern apartment buildings with amenities and facilities for contemporary urban living.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏠</div>
            <h3 className={styles.activityCardTitle}>Villas & Townhouses</h3>
            <p className={styles.activityCardText}>Luxury villas and townhouses designed for privacy, comfort, and family living.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏘️</div>
            <h3 className={styles.activityCardTitle}>Master-Planned Communities</h3>
            <p className={styles.activityCardText}>Integrated residential communities with parks, schools, and essential amenities.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏬</div>
            <h3 className={styles.activityCardTitle}>Mixed-Use Residential</h3>
            <p className={styles.activityCardText}>Residential developments integrated with retail, office, and recreational spaces.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Why Choose Our Residential Solutions?</h2>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Quality Living</h3>
            <p className={styles.activityCardText}>Premium construction and finishes that ensure comfortable and durable homes.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Community Focus</h3>
            <p className={styles.activityCardText}>Designs that foster community interaction and create vibrant neighborhoods.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Sustainability</h3>
            <p className={styles.activityCardText}>Green building practices and energy-efficient designs for environmental responsibility.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Modern Amenities</h3>
            <p className={styles.activityCardText}>Contemporary facilities and services that enhance the living experience.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Residential Solutions</a>
        </div>
      </section>
    </>
  );
} 