"use client"
// Construction Activity Page - Orascom Construction

import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './activity.module.css';

export default function ConstructionActivity() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.activityHero}>
        <div className={styles.activityHeroContent}>
          <h1 className={styles.activityTitle}>{t('activities.construction.title')}</h1>
          <p className={styles.activitySubtitle}>{t('activities.construction.description')}</p>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Comprehensive Construction Services</h2>
        <p className={styles.activitySectionText}>
          Our construction expertise spans across multiple sectors, delivering high-quality projects that meet international standards. From concept to completion, we ensure excellence in every phase of construction.
        </p>
      </section>

      <section className={styles.activitySection}>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏢</div>
            <h3 className={styles.activityCardTitle}>Commercial Buildings</h3>
            <p className={styles.activityCardText}>Office complexes, retail centers, and commercial developments designed for modern business needs.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏭</div>
            <h3 className={styles.activityCardTitle}>Industrial Facilities</h3>
            <p className={styles.activityCardText}>Manufacturing plants, warehouses, and industrial complexes built for efficiency and productivity.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏗️</div>
            <h3 className={styles.activityCardTitle}>Infrastructure Projects</h3>
            <p className={styles.activityCardText}>Bridges, tunnels, and transportation facilities that connect communities and drive economic growth.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🏠</div>
            <h3 className={styles.activityCardTitle}>Residential Developments</h3>
            <p className={styles.activityCardText}>Housing projects, apartment complexes, and mixed-use communities for modern living.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Why Choose Our Construction Services?</h2>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Quality Assurance</h3>
            <p className={styles.activityCardText}>Rigorous quality control processes ensure every project meets the highest standards.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Safety First</h3>
            <p className={styles.activityCardText}>Comprehensive safety protocols protect our workers and ensure project success.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Innovation</h3>
            <p className={styles.activityCardText}>Advanced construction methods and technology for efficient project delivery.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Sustainability</h3>
            <p className={styles.activityCardText}>Green building practices and sustainable materials for environmentally responsible construction.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Construction Services</a>
        </div>
      </section>
    </>
  );
} 