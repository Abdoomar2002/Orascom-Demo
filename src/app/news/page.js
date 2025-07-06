"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './news.module.css';

const newsArticles = [
  {
    id: 1,
    title: "Orascom Construction Reports Backlog of USD 8.7 Billion",
    date: "January 15, 2024",
    image: "/news1.jpg",
    excerpt: "Orascom Construction PLC announced its financial results for the fourth quarter of 2023, reporting a backlog of USD 8.7 billion across its diverse portfolio of infrastructure, industrial, and commercial projects.",
    category: "Financial Results",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Red Sea Wind Farm Project Reaches Major Milestone",
    date: "January 10, 2024",
    image: "/news2.jpg",
    excerpt: "The Red Sea Wind Farm project, one of the largest renewable energy initiatives in the region, has successfully completed its foundation phase and is now entering the turbine installation stage.",
    category: "Renewable Energy",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "FY 2024 Results: Strong Performance Across All Sectors",
    date: "January 5, 2024",
    image: "/news3.jpg",
    excerpt: "Orascom Construction's fiscal year 2024 results demonstrate exceptional performance across all business sectors, with significant growth in infrastructure and industrial projects.",
    category: "Financial Results",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Orascom Construction and Técnicas Reunidas Partnership",
    date: "December 28, 2023",
    image: "/news4.jpg",
    excerpt: "Strategic partnership announced between Orascom Construction and Técnicas Reunidas to develop major infrastructure projects across the Middle East and North Africa region.",
    category: "Partnerships",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "American University in Cairo Campus Expansion",
    date: "December 20, 2023",
    image: "/news5.jpg",
    excerpt: "Orascom Construction awarded the contract for the new AUC campus expansion project, which will include state-of-the-art academic facilities and research centers.",
    category: "Education",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "New Alamein City Development Project",
    date: "December 15, 2023",
    image: "/news6.jpg",
    excerpt: "Orascom Construction leads the development of New Alamein City, a comprehensive urban development project that will serve as a model for sustainable city planning.",
    category: "Urban Development",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "High-Speed Rail Network Expansion",
    date: "December 10, 2023",
    image: "/landing2.jpg",
    excerpt: "Major expansion of the high-speed rail network connecting major cities across Egypt, with Orascom Construction playing a key role in the infrastructure development.",
    category: "Transportation",
    readTime: "4 min read"
  },
  {
    id: 8,
    title: "Grand Egyptian Museum Project Update",
    date: "December 5, 2023",
    image: "/landing3.jpg",
    excerpt: "Latest updates on the Grand Egyptian Museum project, showcasing the integration of modern construction techniques with ancient Egyptian architectural elements.",
    category: "Cultural Projects",
    readTime: "5 min read"
  },
  {
    id: 9,
    title: "Bahr El Baqr Wastewater Treatment Plant",
    date: "November 30, 2023",
    image: "/landing1.jpg",
    excerpt: "Completion of the Bahr El Baqr wastewater treatment plant, one of the largest environmental infrastructure projects in the region.",
    category: "Environmental",
    readTime: "4 min read"
  }
];

const getCategories = (t) => [
  { key: "All", label: t('news.categories.all') },
  { key: "Financial Results", label: t('news.categories.financialResults') },
  { key: "Renewable Energy", label: t('news.categories.renewableEnergy') },
  { key: "Partnerships", label: t('news.categories.partnerships') },
  { key: "Education", label: t('news.categories.education') },
  { key: "Urban Development", label: t('news.categories.urbanDevelopment') },
  { key: "Transportation", label: t('news.categories.transportation') },
  { key: "Cultural Projects", label: t('news.categories.culturalProjects') },
  { key: "Environmental", label: t('news.categories.environmental') }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState(newsArticles);
  const { t, language } = useLanguage();
  const categories = getCategories(t);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(newsArticles);
    } else {
      setFilteredArticles(newsArticles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className={styles.newsPage} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{t('news.pageTitle')}</h1>
          <p>{t('news.pageDescription')}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.categoryFilter}>
            {categories.map((category) => (
              <button
                key={category.key}
                className={`${styles.categoryButton} ${selectedCategory === category.key ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div className={styles.newsGrid}>
            {filteredArticles.map((article) => (
              <article key={article.id} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority={article.id <= 3}
                    loading={article.id <= 3 ? "eager" : "lazy"}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={(e) => {
                      e.target.style.animation = 'none';
                      e.target.style.opacity = '1';
                    }}
                  />
                  <div className={styles.categoryTag}>
                    {article.category}
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <div className={styles.newsMeta}>
                    <span className={styles.newsDate}>{article.date}</span>
                    <span className={styles.readTime}>{article.readTime}</span>
                  </div>
                  <h2 className={styles.newsTitle}>{article.title}</h2>
                  <p className={styles.newsExcerpt}>{article.excerpt}</p>
                  <Link href={`/news/${article.id}`} className={styles.readMore}>
                    {t('common.readMore')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2>{t('news.newsletterTitle')}</h2>
            <p>{t('news.newsletterDescription')}</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder={t('news.emailPlaceholder')}
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                {t('news.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 