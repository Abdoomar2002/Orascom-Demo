"use client"
// Services Page - Orascom Construction

import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './services.module.css';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <h1 className={styles.servicesTitle}>{t('services.hero.title')}</h1>
          <p className={styles.servicesSubtitle}>{t('services.hero.subtitle')}</p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>{t('services.expertise.title')}</h2>
        <p className={styles.servicesSectionText}>
          {t('services.expertise.description')}
        </p>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⛽</div>
            <h3 className={styles.serviceCardTitle}>{t('services.features.exploration.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.features.exploration.description')}</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🛢️</div>
            <h3 className={styles.serviceCardTitle}>{t('services.features.production.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.features.production.description')}</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🚢</div>
            <h3 className={styles.serviceCardTitle}>{t('services.features.storage.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.features.storage.description')}</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔬</div>
            <h3 className={styles.serviceCardTitle}>{t('services.features.refining.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.features.refining.description')}</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesSectionTitle}>{t('services.whyChooseUs.title')}</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>{t('services.whyChooseUs.safety.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.whyChooseUs.safety.description')}</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>{t('services.whyChooseUs.technology.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.whyChooseUs.technology.description')}</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>{t('services.whyChooseUs.sustainability.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.whyChooseUs.sustainability.description')}</p>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>{t('services.whyChooseUs.experience.title')}</h3>
            <p className={styles.serviceCardText}>{t('services.whyChooseUs.experience.description')}</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
          <a href="/contact" className="cta secondary" style={{border: '2px solid #f26722', color: '#f26722', padding: '0.9rem 2.5rem', borderRadius: '0.3rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block'}}>{t('services.cta')}</a>
        </div>
      </section>
    </>
  );
} 