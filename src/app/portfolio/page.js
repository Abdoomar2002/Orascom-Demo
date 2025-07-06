"use client"
// Portfolio Page - Orascom Construction
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="portfolio-page">
      <style jsx>{`
        .portfolio-page {
          font-family: "Inter", "Open Sans", "Roboto", "Helvetica Neue", Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        
        .hero-section {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .hero-section h1 {
          font-size: 48px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 20px;
        }
        
        .hero-section p {
          font-size: 20px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .portfolio-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin: 60px 0;
          text-align: center;
        }
        
        .stat-item {
          padding: 20px;
        }
        
        .stat-number {
          font-size: 48px;
          font-weight: 700;
          color: #f26722;
        }
        
        .stat-label {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }
        
        .project-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 62, 126, 0.15);
        }
        
        .project-image {
          height: 250px;
          background: linear-gradient(135deg, #003E7E, #0056b3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0, 62, 126, 0.8), rgba(242, 103, 34, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .project-content {
          padding: 30px;
        }
        
        .project-title {
          font-size: 24px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 10px;
        }
        
        .project-location {
          font-size: 14px;
          color: #f26722;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .project-description {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }
        
        .project-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .project-detail {
          font-size: 14px;
        }
        
        .project-detail strong {
          color: #003E7E;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .project-tag {
          background: #f8f9fa;
          color: #666;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .sectors-section {
          background: #f8f9fa;
          padding: 60px 40px;
          border-radius: 12px;
          margin-bottom: 60px;
        }
        
        .sectors-section h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          text-align: center;
          margin-bottom: 40px;
        }
        
        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
        
        .sector-item {
          background: white;
          padding: 30px 20px;
          border-radius: 8px;
          text-align: center;
          border-top: 4px solid #f26722;
        }
        
        .sector-item h4 {
          font-size: 18px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 10px;
        }
        
        .sector-item p {
          font-size: 14px;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 32px;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .sectors-section {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="hero-section">
        <h1>{t('portfolio.hero.title')}</h1>
        <p>{t('portfolio.hero.subtitle')}</p>
      </div>

      <div className="portfolio-stats">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">{t('portfolio.stats.projectsCompleted')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">$50B+</div>
          <div className="stat-label">{t('portfolio.stats.contractValue')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15</div>
          <div className="stat-label">{t('portfolio.stats.countries')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">{t('portfolio.stats.yearsExperience')}</div>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>{t('portfolio.projects.newCapital.title')}</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t('portfolio.projects.newCapital.title')}</h3>
            <div className="project-location">{t('portfolio.projects.newCapital.location')}</div>
            <p className="project-description">
              {t('portfolio.projects.newCapital.description')}
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> {t('portfolio.projects.newCapital.sector')}
              </div>
              <div className="project-detail">
                <strong>Value:</strong> {t('portfolio.projects.newCapital.value')}
              </div>
              <div className="project-detail">
                <strong>Status:</strong> {t('portfolio.projects.newCapital.status')}
              </div>
              <div className="project-detail">
                <strong>Duration:</strong> {t('portfolio.projects.newCapital.duration')}
              </div>
            </div>
            <div className="project-tags">
              {t('portfolio.projects.newCapital.tags').map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>{t('portfolio.projects.grandMuseum.title')}</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t('portfolio.projects.grandMuseum.title')}</h3>
            <div className="project-location">{t('portfolio.projects.grandMuseum.location')}</div>
            <p className="project-description">
              {t('portfolio.projects.grandMuseum.description')}
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> {t('portfolio.projects.grandMuseum.sector')}
              </div>
              <div className="project-detail">
                <strong>Value:</strong> {t('portfolio.projects.grandMuseum.value')}
              </div>
              <div className="project-detail">
                <strong>Status:</strong> {t('portfolio.projects.grandMuseum.status')}
              </div>
              <div className="project-detail">
                <strong>Area:</strong> {t('portfolio.projects.grandMuseum.area')}
              </div>
            </div>
            <div className="project-tags">
              {t('portfolio.projects.grandMuseum.tags').map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>{t('portfolio.projects.benbanSolar.title')}</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t('portfolio.projects.benbanSolar.title')}</h3>
            <div className="project-location">{t('portfolio.projects.benbanSolar.location')}</div>
            <p className="project-description">
              {t('portfolio.projects.benbanSolar.description')}
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> {t('portfolio.projects.benbanSolar.sector')}
              </div>
              <div className="project-detail">
                <strong>Capacity:</strong> {t('portfolio.projects.benbanSolar.capacity')}
              </div>
              <div className="project-detail">
                <strong>Status:</strong> {t('portfolio.projects.benbanSolar.status')}
              </div>
              <div className="project-detail">
                <strong>Area:</strong> {t('portfolio.projects.benbanSolar.area')}
              </div>
            </div>
            <div className="project-tags">
              {t('portfolio.projects.benbanSolar.tags').map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>{t('portfolio.projects.suezCanal.title')}</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t('portfolio.projects.suezCanal.title')}</h3>
            <div className="project-location">{t('portfolio.projects.suezCanal.location')}</div>
            <p className="project-description">
              {t('portfolio.projects.suezCanal.description')}
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> {t('portfolio.projects.suezCanal.sector')}
              </div>
              <div className="project-detail">
                <strong>Length:</strong> {t('portfolio.projects.suezCanal.length')}
              </div>
              <div className="project-detail">
                <strong>Status:</strong> {t('portfolio.projects.suezCanal.status')}
              </div>
              <div className="project-detail">
                <strong>Duration:</strong> {t('portfolio.projects.suezCanal.duration')}
              </div>
            </div>
            <div className="project-tags">
              {t('portfolio.projects.suezCanal.tags').map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>{t('portfolio.projects.algiersMetro.title')}</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t('portfolio.projects.algiersMetro.title')}</h3>
            <div className="project-location">{t('portfolio.projects.algiersMetro.location')}</div>
            <p className="project-description">
              {t('portfolio.projects.algiersMetro.description')}
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> {t('portfolio.projects.algiersMetro.sector')}
              </div>
              <div className="project-detail">
                <strong>Length:</strong> {t('portfolio.projects.algiersMetro.length')}
              </div>
              <div className="project-detail">
                <strong>Status:</strong> {t('portfolio.projects.algiersMetro.status')}
              </div>
              <div className="project-detail">
                <strong>Stations:</strong> {t('portfolio.projects.algiersMetro.stations')}
              </div>
            </div>
            <div className="project-tags">
              {t('portfolio.projects.algiersMetro.tags').map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>{t('portfolio.projects.mosaicHotel.title')}</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{t('portfolio.projects.mosaicHotel.title')}</h3>
            <div className="project-location">{t('portfolio.projects.mosaicHotel.location')}</div>
            <p className="project-description">
              {t('portfolio.projects.mosaicHotel.description')}
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> {t('portfolio.projects.mosaicHotel.sector')}
              </div>
              <div className="project-detail">
                <strong>Rooms:</strong> {t('portfolio.projects.mosaicHotel.rooms')}
              </div>
              <div className="project-detail">
                <strong>Status:</strong> {t('portfolio.projects.mosaicHotel.status')}
              </div>
              <div className="project-detail">
                <strong>Rating:</strong> {t('portfolio.projects.mosaicHotel.rating')}
              </div>
            </div>
            <div className="project-tags">
              {t('portfolio.projects.mosaicHotel.tags').map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sectors-section">
        <h2>{t('portfolio.sectors.title')}</h2>
        <div className="sectors-grid">
          <div className="sector-item">
            <h4>{t('portfolio.sectors.infrastructure.title')}</h4>
            <p>{t('portfolio.sectors.infrastructure.description')}</p>
          </div>
          <div className="sector-item">
            <h4>{t('portfolio.sectors.powerEnergy.title')}</h4>
            <p>{t('portfolio.sectors.powerEnergy.description')}</p>
          </div>
          <div className="sector-item">
            <h4>{t('portfolio.sectors.industrial.title')}</h4>
            <p>{t('portfolio.sectors.industrial.description')}</p>
          </div>
          <div className="sector-item">
            <h4>{t('portfolio.sectors.commercial.title')}</h4>
            <p>{t('portfolio.sectors.commercial.description')}</p>
          </div>
          <div className="sector-item">
            <h4>{t('portfolio.sectors.hospitality.title')}</h4>
            <p>{t('portfolio.sectors.hospitality.description')}</p>
          </div>
          <div className="sector-item">
            <h4>{t('portfolio.sectors.healthcare.title')}</h4>
            <p>{t('portfolio.sectors.healthcare.description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 