"use client"
// Infrastructure Activity Page - Orascom Construction

import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from '../activity1/activity.module.css';

export default function InfrastructureActivity() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.activityHero}>
        <div className={styles.activityHeroContent}>
          <h1 className={styles.activityTitle}>{t('activities.infrastructure.title')}</h1>
          <p className={styles.activitySubtitle}>{t('activities.infrastructure.description')}</p>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Critical Infrastructure Development</h2>
        <p className={styles.activitySectionText}>
          We build the essential infrastructure that connects communities and drives economic growth, including roads, bridges, airports, ports, and transportation networks.
        </p>
      </section>

      <section className={styles.activitySection}>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🛣️</div>
            <h3 className={styles.activityCardTitle}>Roads & Highways</h3>
            <p className={styles.activityCardText}>Major highways, expressways, and urban road networks for efficient transportation.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🌉</div>
            <h3 className={styles.activityCardTitle}>Bridges & Tunnels</h3>
            <p className={styles.activityCardText}>Complex bridge structures and tunnel systems connecting communities and regions.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>✈️</div>
            <h3 className={styles.activityCardTitle}>Airports & Aviation</h3>
            <p className={styles.activityCardText}>Airport terminals, runways, and aviation infrastructure for global connectivity.</p>
          </div>
          <div className={styles.activityCard}>
            <div className={styles.activityIcon}>🚢</div>
            <h3 className={styles.activityCardTitle}>Ports & Maritime</h3>
            <p className={styles.activityCardText}>Port facilities, terminals, and maritime infrastructure for international trade.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <h2 className={styles.activitySectionTitle}>Why Choose Our Infrastructure Solutions?</h2>
        <div className={styles.activityGrid}>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Engineering Excellence</h3>
            <p className={styles.activityCardText}>Advanced engineering solutions for complex infrastructure challenges.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Long-term Durability</h3>
            <p className={styles.activityCardText}>Robust construction designed to withstand environmental challenges and heavy usage.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Economic Impact</h3>
            <p className={styles.activityCardText}>Infrastructure that stimulates economic growth and improves quality of life.</p>
          </div>
          <div className={styles.activityCard}>
            <h3 className={styles.activityCardTitle}>Safety Standards</h3>
            <p className={styles.activityCardText}>Rigorous safety protocols ensuring reliable and secure infrastructure.</p>
          </div>
        </div>
      </section>

      <section className={styles.activitySection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>Contact Us for Infrastructure Solutions</a>
        </div>
      </section>
    </>
  );
} 