"use client"
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './Activities.module.css';



const activities = [
  {
    icon: "🏗️",
    title: "Construction",
    text: "Comprehensive construction services including buildings, infrastructure, and industrial facilities across multiple sectors.",
    slug: "activity1",
  },
  {
    icon: "⚡",
    title: "Power & Energy",
    text: "Development and construction of power plants, renewable energy projects, and electrical infrastructure.",
    slug: "activity2",
  },
  {
    icon: "🏭",
    title: "Industrial",
    text: "Specialized industrial construction including refineries, petrochemical plants, and manufacturing facilities.",
    slug: "activity3",
  },
  {
    icon: "🏢",
    title: "Commercial",
    text: "Office buildings, retail centers, hotels, and commercial developments that drive economic growth.",
    slug: "activity4",
  },
  {
    icon: "🏠",
    title: "Residential",
    text: "High-quality residential developments including apartments, villas, and mixed-use communities.",
    slug: "activity5",
  },
  {
    icon: "🌍",
    title: "Infrastructure",
    text: "Roads, bridges, airports, ports, and other critical infrastructure that connects communities.",
    slug: "activity6",
  },
];

export default function Activities() {
  const { t } = useLanguage();

  const activities = [
    {
      icon: '🏗️',
      title: t('activities.construction.title'),
      text: t('activities.construction.description'),
      slug: 'activity1'
    },
    {
      icon: '⚡',
      title: t('activities.powerEnergy.title'),
      text: t('activities.powerEnergy.description'),
      slug: 'activity2'
    },
    {
      icon: '🏭',
      title: t('activities.industrial.title'),
      text: t('activities.industrial.description'),
      slug: 'activity3'
    },
    {
      icon: '🏢',
      title: t('activities.commercial.title'),
      text: t('activities.commercial.description'),
      slug: 'activity4'
    },
    {
      icon: '🏠',
      title: t('activities.residential.title'),
      text: t('activities.residential.description'),
      slug: 'activity5'
    },
    {
      icon: '🌍',
      title: t('activities.infrastructure.title'),
      text: t('activities.infrastructure.description'),
      slug: 'activity6'
    }
  ];

  return (
    <section className={styles.activities} id="activities">
      <div className={styles.centerDiv}>

        <div className={`${styles.sectionData} section-data`} id="activities-data">
          <h1><span>{t('activities.title')}</span></h1>
          <h2>{t('activities.subtitle')}</h2>
        </div>
        <div className={styles.activitiesContent}>
          <div className={styles.activitiesGrid}>
            {activities.map((activity) => (
              <Link
                href={`/activities/${activity.slug}`}
                key={activity.title}
                className={styles.activityCard}
              >
                <div className={styles.activityIcon}>{activity.icon}</div>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
                <p className={styles.activityText}>{activity.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.centerDiv}>
          <div className="row no-gutters align-items-md-start mt-5 mb-5 pb-5">
            <div className="col-8 col-xlg-10 offset-0 offset-lg-2 offset-lg-1 d-flex justify-content-left justify-content-lg-center">
              <Link className={`${styles.cta} cta secondary`} href="/services"><span>{t('activities.cta')}</span></Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
