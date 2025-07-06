"use client";

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from './project.module.css';

export default function BahrElBaqrProject() {
  const { t, language } = useLanguage();

  const projectData = {
    title: "Bahr El Baqr Wastewater Treatment Plant",
    location: "Sinai, Egypt",
    client: "Egyptian Ministry of Housing, Utilities and Urban Communities",
    value: "$1.2B",
    duration: "2018-2022",
    status: "Completed",
    category: "Infrastructure",
    description: "One of the largest wastewater treatment plants in the Middle East, serving millions of people in the Sinai region. This state-of-the-art facility processes wastewater from multiple cities and towns, contributing significantly to environmental protection and public health in the region.",
    challenges: [
      "Complex geological conditions in the Sinai region",
      "Large-scale infrastructure requirements",
      "Environmental protection considerations",
      "Integration with existing water systems"
    ],
    solutions: [
      "Advanced treatment technologies for optimal water quality",
      "Comprehensive environmental impact assessment and mitigation",
      "Robust infrastructure design for long-term reliability",
      "Community engagement and stakeholder management"
    ],
    features: [
      "Daily treatment capacity of 5.6 million cubic meters",
      "Advanced biological treatment processes",
      "Energy-efficient design with renewable energy integration",
      "Comprehensive monitoring and control systems",
      "Sludge treatment and disposal facilities",
      "Emergency backup systems"
    ],
    impact: [
      "Improved public health for millions of residents",
      "Enhanced environmental protection in the Sinai region",
      "Support for sustainable development and population growth",
      "Creation of local employment opportunities",
      "Technology transfer and knowledge sharing"
    ]
  };

  return (
    <div className={styles.projectPage} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image
            src="/landing1.jpg"
            alt={projectData.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.container}>
              <div className={styles.heroContent}>
                <div className={styles.projectCategory}>{projectData.category}</div>
                <h1>{projectData.title}</h1>
                <p className={styles.projectLocation}>{projectData.location}</p>
                <div className={styles.projectStatus}>
                  <span className={styles.statusBadge}>{projectData.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2>Project Overview</h2>
              <p>{projectData.description}</p>
              
              <div className={styles.projectStats}>
                <div className={styles.statItem}>
                  <h3>Project Value</h3>
                  <p>{projectData.value}</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Duration</h3>
                  <p>{projectData.duration}</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Client</h3>
                  <p>{projectData.client}</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Status</h3>
                  <p>{projectData.status}</p>
                </div>
              </div>
            </div>
            
            <div className={styles.overviewImage}>
            
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className={styles.challengesSection}>
        <div className={styles.container}>
          <div className={styles.challengesGrid}>
            <div className={styles.challengesContent}>
              <h2>Challenges</h2>
              <ul>
                {projectData.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.solutionsContent}>
              <h2>Our Solutions</h2>
              <ul>
                {projectData.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2>Project Features</h2>
          <div className={styles.featuresGrid}>
            {projectData.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <h2>Project Impact</h2>
          <div className={styles.impactGrid}>
            {projectData.impact.map((impact, index) => (
              <div key={index} className={styles.impactItem}>
                <div className={styles.impactIcon}>★</div>
                <p>{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Next Project?</h2>
            <p>Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Get In Touch
              </Link>
              <Link href="/portfolio" className={styles.secondaryButton}>
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 