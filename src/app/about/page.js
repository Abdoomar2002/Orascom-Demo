"use client"
// About Page - Orascom Construction

import { useEffect, useRef } from 'react';
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
  return (
    <>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroContent}>
          <h1 className={`${styles.aboutTitle} ${styles.aboutHeroTitle}`}>About Us</h1>
          <p className={styles.aboutSubtitle}>Leading global engineering and construction contractor with over five decades of excellence</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>Our Vision & Mission</h2>
        <p className={styles.aboutSectionText}>
          Construction PLC is a leading global engineering and construction contractor primarily focused on 
          infrastructure, industrial and high-end commercial projects in the Middle East, Africa, and the United States. 
          With a heritage spanning over 50 years, we have built a reputation for delivering complex projects with 
          excellence and innovation.
        </p>
        <p className={styles.aboutSectionText}>
          The Group has consistently ranked among the world's top contractors and is dual listed on the NASDAQ Dubai 
          and the Egyptian Exchange. Our commitment to quality, safety, and sustainable development has made us a 
          trusted partner for governments, corporations, and communities worldwide.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutStats}>
          <StatItem value={8700000000} label="Current Backlog" prefix="$" suffix="B" />
          <StatItem value={50} label="Years of Experience" suffix="+" />
          <StatItem value={15} label="Countries of Operation" suffix="+" />
          <StatItem value={40000} label="Employees Worldwide" suffix="+" />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>Our Business</h2>
        <p className={styles.aboutSectionText}>
          Orascom Construction also develops and invests in concessions, owns 50% of BESIX Group, and holds a 
          building materials, facility management and equipment services portfolio. Our diversified business model 
          enables us to offer comprehensive solutions across the entire project lifecycle.
        </p>
        <p className={styles.aboutSectionText}>
          We are committed to delivering projects that transform landscapes and empower the communities in which we operate. 
          Our expertise spans across various sectors including infrastructure, power, industrial, commercial, and residential projects.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutSectionTitle}>Our Values</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>Excellence</h3>
            <p className={styles.aboutCardText}>We maintain the highest standards in project delivery, safety, and quality management across all our operations.</p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>Innovation</h3>
            <p className={styles.aboutCardText}>We embrace cutting-edge technology and innovative construction methods to deliver superior results.</p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>Sustainability</h3>
            <p className={styles.aboutCardText}>We are committed to sustainable development and environmental responsibility in all our projects.</p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>Integrity</h3>
            <p className={styles.aboutCardText}>We operate with transparency, ethical business practices, and unwavering commitment to our stakeholders.</p>
          </div>
        </div>
      </section>
    </>
  );
} 