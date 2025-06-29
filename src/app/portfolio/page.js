"use client"
// Portfolio Page - Orascom Construction

export default function Portfolio() {
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
        <h1>Our Portfolio</h1>
        <p>Transforming landscapes across the Middle East, Africa, and the United States</p>
      </div>

      <div className="portfolio-stats">
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">$50B+</div>
          <div className="stat-label">Contract Value</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15</div>
          <div className="stat-label">Countries</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>New Administrative Capital</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">New Administrative Capital</h3>
            <div className="project-location">Cairo, Egypt</div>
            <p className="project-description">
              Mega infrastructure project including government buildings, residential districts, and commercial developments in Egypt's new capital city.
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> Infrastructure
              </div>
              <div className="project-detail">
                <strong>Value:</strong> $3.2B
              </div>
              <div className="project-detail">
                <strong>Status:</strong> In Progress
              </div>
              <div className="project-detail">
                <strong>Duration:</strong> 2018-2025
              </div>
            </div>
            <div className="project-tags">
              <span className="project-tag">Infrastructure</span>
              <span className="project-tag">Government</span>
              <span className="project-tag">Mixed-Use</span>
                </div>
              </div>
            </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>Grand Egyptian Museum</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Grand Egyptian Museum</h3>
            <div className="project-location">Giza, Egypt</div>
            <p className="project-description">
              World's largest archaeological museum dedicated to ancient Egyptian civilization, located near the Great Pyramids of Giza.
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> Cultural
              </div>
              <div className="project-detail">
                <strong>Value:</strong> $550M
              </div>
              <div className="project-detail">
                <strong>Status:</strong> Completed
              </div>
              <div className="project-detail">
                <strong>Area:</strong> 120,000 m²
              </div>
            </div>
            <div className="project-tags">
              <span className="project-tag">Cultural</span>
              <span className="project-tag">Heritage</span>
              <span className="project-tag">Tourism</span>
                </div>
              </div>
            </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>Benban Solar Park</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Benban Solar Park</h3>
            <div className="project-location">Aswan, Egypt</div>
            <p className="project-description">
              One of the world's largest solar installations, contributing significantly to Egypt's renewable energy capacity and sustainability goals.
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> Energy
              </div>
              <div className="project-detail">
                <strong>Capacity:</strong> 1.65 GW
              </div>
              <div className="project-detail">
                <strong>Status:</strong> Operational
              </div>
              <div className="project-detail">
                <strong>Area:</strong> 37 km²
              </div>
            </div>
            <div className="project-tags">
              <span className="project-tag">Solar</span>
              <span className="project-tag">Renewable</span>
              <span className="project-tag">Sustainability</span>
                </div>
              </div>
            </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>Suez Canal Expansion</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Suez Canal Expansion</h3>
            <div className="project-location">Suez, Egypt</div>
            <p className="project-description">
              Major expansion project of the Suez Canal, including new waterway construction and deepening of existing channels.
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> Infrastructure
              </div>
              <div className="project-detail">
                <strong>Length:</strong> 72 km
              </div>
              <div className="project-detail">
                <strong>Status:</strong> Completed
              </div>
              <div className="project-detail">
                <strong>Duration:</strong> 2014-2015
              </div>
            </div>
            <div className="project-tags">
              <span className="project-tag">Marine</span>
              <span className="project-tag">Logistics</span>
              <span className="project-tag">Infrastructure</span>
                </div>
              </div>
            </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>Algiers Metro</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Algiers Metro System</h3>
            <div className="project-location">Algiers, Algeria</div>
            <p className="project-description">
              Comprehensive metro system including tunneling, stations, and supporting infrastructure for Algeria's capital city.
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> Transportation
              </div>
              <div className="project-detail">
                <strong>Length:</strong> 13.5 km
              </div>
              <div className="project-detail">
                <strong>Status:</strong> Operational
              </div>
              <div className="project-detail">
                <strong>Stations:</strong> 14
              </div>
            </div>
            <div className="project-tags">
              <span className="project-tag">Metro</span>
              <span className="project-tag">Transportation</span>
              <span className="project-tag">Urban</span>
                </div>
              </div>
            </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <span>Mosaic Hotel</span>
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">The Mosaic Hotel</h3>
            <div className="project-location">Laguna Beach, USA</div>
            <p className="project-description">
              Luxury boutique hotel featuring sustainable design elements and premium amenities in one of California's most prestigious coastal destinations.
            </p>
            <div className="project-details">
              <div className="project-detail">
                <strong>Sector:</strong> Hospitality
              </div>
              <div className="project-detail">
                <strong>Rooms:</strong> 85
              </div>
              <div className="project-detail">
                <strong>Status:</strong> Operational
                </div>
              <div className="project-detail">
                <strong>Rating:</strong> 5 Star
              </div>
            </div>
            <div className="project-tags">
              <span className="project-tag">Hospitality</span>
              <span className="project-tag">Luxury</span>
              <span className="project-tag">Sustainable</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sectors-section">
        <h2>Sectors We Serve</h2>
        <div className="sectors-grid">
          <div className="sector-item">
            <h4>Infrastructure</h4>
            <p>Roads, bridges, airports, and urban development projects</p>
          </div>
          <div className="sector-item">
            <h4>Power & Energy</h4>
            <p>Power plants, renewable energy, and transmission networks</p>
          </div>
          <div className="sector-item">
            <h4>Industrial</h4>
            <p>Manufacturing facilities, petrochemical plants, and mining</p>
          </div>
          <div className="sector-item">
            <h4>Commercial</h4>
            <p>Office buildings, retail centers, and mixed-use developments</p>
          </div>
          <div className="sector-item">
            <h4>Hospitality</h4>
            <p>Hotels, resorts, and entertainment complexes</p>
            </div>
          <div className="sector-item">
            <h4>Healthcare</h4>
            <p>Hospitals, medical centers, and research facilities</p>
          </div>
        </div>
        </div>
    </div>
  )
} 