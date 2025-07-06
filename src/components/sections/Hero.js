'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/constants/site-config';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './Hero.module.css';

// Single Responsibility: Handle hero section display and content
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === siteConfig.hero.slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === siteConfig.hero.slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? siteConfig.hero.slides.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {siteConfig.hero.slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.slideImage}>
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.overlay}></div>
            </div>
            
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <h1 className={styles.title}>{t('home.hero.title')}</h1>
                <p className={styles.caption}>{t('home.hero.subtitle')}</p>
                <div className={styles.cta}>
                  <button className={styles.ctaButton}>{t('home.whoWeAre.cta')}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
        <span>‹</span>
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
        <span>›</span>
      </button>

      {/* Slide indicators */}
      <div className={styles.indicators}>
        {siteConfig.hero.slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progress} 
          style={{ 
            width: `${((currentSlide + 1) / siteConfig.hero.slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
} 