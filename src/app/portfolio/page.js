"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './portfolio.module.css';

const allProjects = [
  {
    id: 1,
    title: "Bahr El Baqr Wastewater Treatment Plant",
    image: "/landing1.jpg",
    href: "/projects/bahr-el-baqr",
    category: "Infrastructure",
    location: "Sinai, Egypt",
    status: "Completed",
    description: "One of the largest wastewater treatment plants in the Middle East, serving millions of people in the Sinai region.",
    value: "$1.2B",
    duration: "2018-2022"
  },
  {
    id: 2,
    title: "High-Speed Rail Network",
    image: "/landing2.jpg",
    href: "/projects/high-speed-rail",
    category: "Transportation",
    location: "Egypt",
    status: "In Progress",
    description: "Comprehensive high-speed rail network connecting major cities across Egypt with modern infrastructure.",
    value: "$4.5B",
    duration: "2021-2025"
  },
  {
    id: 3,
    title: "Grand Egyptian Museum",
    image: "/landing3.jpg",
    href: "/projects/grand-egyptian-museum",
    category: "Cultural",
    location: "Giza, Egypt",
    status: "Completed",
    description: "The world's largest archaeological museum dedicated to ancient Egyptian civilization.",
    value: "$550M",
    duration: "2012-2021"
  },
  {
    id: 4,
    title: "New Administrative Capital",
    image: "/about1.jpg",
    href: "/projects/new-capital",
    category: "Infrastructure",
    location: "Cairo, Egypt",
    status: "In Progress",
    description: "Mega infrastructure project including government buildings, residential districts, and commercial developments.",
    value: "$3.2B",
    duration: "2018-2025"
  },
  {
    id: 5,
    title: "Benban Solar Park",
    image: "/about2.jpg",
    href: "/projects/benban-solar",
    category: "Energy",
    location: "Aswan, Egypt",
    status: "Completed",
    description: "One of the world's largest solar installations, contributing significantly to Egypt's renewable energy capacity.",
    value: "$2.8B",
    duration: "2017-2020"
  },
  {
    id: 6,
    title: "Suez Canal Expansion",
    image: "/news1.jpg",
    href: "/projects/suez-canal",
    category: "Infrastructure",
    location: "Suez, Egypt",
    status: "Completed",
    description: "Major expansion project of the Suez Canal, including new waterway construction and deepening of existing channels.",
    value: "$8.2B",
    duration: "2014-2015"
  },
  {
    id: 7,
    title: "Algiers Metro System",
    image: "/news2.jpg",
    href: "/projects/algiers-metro",
    category: "Transportation",
    location: "Algiers, Algeria",
    status: "Completed",
    description: "Comprehensive metro system including tunneling, stations, and supporting infrastructure for Algeria's capital city.",
    value: "$1.8B",
    duration: "2010-2018"
  },
  {
    id: 8,
    title: "The Mosaic Hotel",
    image: "/news3.jpg",
    href: "/projects/mosaic-hotel",
    category: "Hospitality",
    location: "Laguna Beach, USA",
    status: "Completed",
    description: "Luxury boutique hotel featuring sustainable design elements and premium amenities in California's prestigious coastal destination.",
    value: "$120M",
    duration: "2019-2022"
  },
  {
    id: 9,
    title: "Red Sea Wind Farm",
    image: "/news4.jpg",
    href: "/projects/red-sea-wind",
    category: "Energy",
    location: "Red Sea, Egypt",
    status: "In Progress",
    description: "Large-scale wind farm project contributing to Egypt's renewable energy goals and sustainability initiatives.",
    value: "$1.5B",
    duration: "2022-2025"
  },
  {
    id: 10,
    title: "American University in Cairo Campus",
    image: "/news5.jpg",
    href: "/projects/auc-campus",
    category: "Education",
    location: "Cairo, Egypt",
    status: "Completed",
    description: "State-of-the-art academic facilities and research centers for the American University in Cairo.",
    value: "$400M",
    duration: "2015-2020"
  },
  {
    id: 11,
    title: "New Alamein City",
    image: "/news6.jpg",
    href: "/projects/new-alamein",
    category: "Urban Development",
    location: "Alamein, Egypt",
    status: "In Progress",
    description: "Comprehensive urban development project serving as a model for sustainable city planning in Egypt.",
    value: "$2.1B",
    duration: "2019-2026"
  },
  {
    id: 12,
    title: "Port Said Container Terminal",
    image: "/services.jpg",
    href: "/projects/port-said",
    category: "Infrastructure",
    location: "Port Said, Egypt",
    status: "Completed",
    description: "Modern container terminal with advanced logistics infrastructure and automated systems.",
    value: "$750M",
    duration: "2016-2021"
  }
];

const categories = [
  "All",
  "Infrastructure",
  "Transportation",
  "Cultural",
  "Energy",
  "Education",
  "Urban Development",
  "Hospitality"
];

const statuses = [
  "All",
  "Completed",
  "In Progress",
  "Planned"
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [sortBy, setSortBy] = useState("newest");
  const { t, language } = useLanguage();

  useEffect(() => {
    let filtered = allProjects;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    // Sort projects
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.duration.split('-')[1]) - new Date(a.duration.split('-')[1]));
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.duration.split('-')[0]) - new Date(b.duration.split('-')[0]));
        break;
      case "value":
        filtered.sort((a, b) => parseFloat(b.value.replace(/[^0-9.]/g, '')) - parseFloat(a.value.replace(/[^0-9.]/g, '')));
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedStatus, sortBy]);

  return (
    <div className={styles.portfolioPage} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{t('portfolio.hero.title')}</h1>
          <p>{t('portfolio.hero.subtitle')}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h2>{allProjects.length}</h2>
              <p>{t('portfolio.stats.projectsCompleted')}</p>
            </div>
            <div className={styles.statItem}>
              <h2>$25B+</h2>
              <p>{t('portfolio.stats.contractValue')}</p>
            </div>
            <div className={styles.statItem}>
              <h2>15+</h2>
              <p>{t('portfolio.stats.countries')}</p>
            </div>
            <div className={styles.statItem}>
              <h2>50+</h2>
              <p>{t('portfolio.stats.yearsExperience')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filtersContent}>
            <div className={styles.filterGroup}>
              <label>{t('portfolio.filters.category')}</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.filterSelect}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>{t('portfolio.filters.status')}</label>
              <select 
                value={selectedStatus} 
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={styles.filterSelect}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>{t('portfolio.filters.sortBy')}</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="newest">{t('portfolio.filters.newest')}</option>
                <option value="oldest">{t('portfolio.filters.oldest')}</option>
                <option value="value">{t('portfolio.filters.value')}</option>
                <option value="name">{t('portfolio.filters.name')}</option>
              </select>
            </div>
          </div>
          <div className={styles.resultsCount}>
            {filteredProjects.length} {t('portfolio.filters.projectsFound')}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {filteredProjects.slice(0, 6).map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={project.id <= 6}
                    loading={project.id <= 6 ? "eager" : "lazy"}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.projectCategory}>
                    {project.category}
                  </div>
                  <div className={`${styles.projectStatus} ${
                    project.status === "In Progress" ? styles.projectStatusInProgress : 
                    project.status === "Planned" ? styles.projectStatusPlanned : ""
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectMeta}>
                    <div className={styles.projectLocation}>
                      <span className={styles.metaLabel}>{t('portfolio.project.location')}:</span>
                      <span>{project.location}</span>
                    </div>
                    <div className={styles.projectValue}>
                      <span className={styles.metaLabel}>{t('portfolio.project.value')}:</span>
                      <span>{project.value}</span>
                    </div>
                    <div className={styles.projectDuration}>
                      <span className={styles.metaLabel}>{t('portfolio.project.duration')}:</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  <Link href={project.href} className={styles.viewProject}>
                    {t('portfolio.project.viewProject')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>{t('portfolio.cta.title')}</h2>
            <p>{t('portfolio.cta.description')}</p>
            <Link href="/contact" className={styles.ctaButton}>
              {t('portfolio.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 