"use client"
// About Page - Orascom Construction

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './about.module.css';

function StatItem({ value, label, prefix = '', suffix = '' }) {
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    let end = value;
    let duration = 1200;
    let startTimestamp = null;
    let isCurrency = typeof value === 'number' && prefix === '$';
    let isK = value >= 1000 && !isCurrency;
    let displayValue = v => {
      if (isCurrency) return `$${(v / 1e9).toFixed(1)}`;
      if (isK && v >= 1000) return `${Math.round(v / 1000)}K`;
      return Math.round(v);
    };
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      if (ref.current) ref.current.innerText = displayValue(current) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        if (ref.current) ref.current.innerText = displayValue(end) + suffix;
      }
    }
    window.requestAnimationFrame(step);
  }, [value, prefix, suffix]);
  return (
    <div className={styles.aboutStat}>
      <div className={styles.aboutStatNumber} ref={ref}></div>
      <div className={styles.aboutStatLabel}>{label}</div>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroContent}>
          <h1 className={`${styles.aboutTitle} ${styles.aboutHeroTitle}`}>{t('about.hero.title')}</h1>
          <p className={styles.aboutSubtitle}>{t('about.hero.subtitle')}</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>{t('about.vision.title')}</h2>
        <p className={styles.aboutSectionText}>
          {t('about.vision.description1')}
        </p>
        <p className={styles.aboutSectionText}>
          {t('about.vision.description2')}
        </p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutStats}>
          <StatItem value={8700000000} label={t('about.stats.backlog')} prefix="$" suffix="B" />
          <StatItem value={50} label={t('about.stats.experience')} suffix="+" />
          <StatItem value={15} label={t('about.stats.countries')} suffix="+" />
          <StatItem value={40000} label={t('about.stats.employees')} suffix="+" />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>{t('about.business.title')}</h2>
        <p className={styles.aboutSectionText}>
          {t('about.business.description1')}
        </p>
        <p className={styles.aboutSectionText}>
          {t('about.business.description2')}
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>{t('about.values.title')}</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>{t('about.values.excellence.title')}</h3>
            <p className={styles.aboutCardText}>{t('about.values.excellence.description')}</p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>{t('about.values.innovation.title')}</h3>
            <p className={styles.aboutCardText}>{t('about.values.innovation.description')}</p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>{t('about.values.sustainability.title')}</h3>
            <p className={styles.aboutCardText}>{t('about.values.sustainability.description')}</p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>{t('about.values.integrity.title')}</h3>
            <p className={styles.aboutCardText}>{t('about.values.integrity.description')}</p>
          </div>
        </div>
      </section>
    </>
  );
} 