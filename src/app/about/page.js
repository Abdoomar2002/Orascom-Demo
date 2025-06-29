"use client"
// About Page - Orascom Construction

export default function About() {
  return (
    <div className="about-page">
      <style jsx>{`
        .about-page {
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
        
        .content-section {
          margin-bottom: 60px;
        }
        
        .content-section h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 30px;
        }
        
        .content-section p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin: 40px 0;
        }
        
        .stat-item {
          text-align: center;
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
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
        
        .value-card {
          padding: 30px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
        }
        
        .value-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 15px;
        }
        
        .value-card p {
          font-size: 14px;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 32px;
          }
          
          .content-section h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="hero-section">
        <h1>About Orascom Construction</h1>
        <p>Leading global engineering and construction contractor with over five decades of excellence</p>
      </div>

      <div className="content-section">
        <h2>Our Legacy</h2>
        <p>
          Orascom Construction PLC is a leading global engineering and construction contractor primarily focused on 
          infrastructure, industrial and high-end commercial projects in the Middle East, Africa, and the United States. 
          With a heritage spanning over 50 years, we have built a reputation for delivering complex projects with 
          excellence and innovation.
        </p>
        <p>
          The Group has consistently ranked among the world's top contractors and is dual listed on the NASDAQ Dubai 
          and the Egyptian Exchange. Our commitment to quality, safety, and sustainable development has made us a 
          trusted partner for governments, corporations, and communities worldwide.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">$8.7B</div>
          <div className="stat-label">Current Backlog</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Years of Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Countries of Operation</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">40K+</div>
          <div className="stat-label">Employees Worldwide</div>
        </div>
      </div>

      <div className="content-section">
        <h2>Our Business</h2>
        <p>
          Orascom Construction also develops and invests in concessions, owns 50% of BESIX Group, and holds a 
          building materials, facility management and equipment services portfolio. Our diversified business model 
          enables us to offer comprehensive solutions across the entire project lifecycle.
        </p>
        <p>
          We are committed to delivering projects that transform landscapes and empower the communities in which we operate. 
          Our expertise spans across various sectors including infrastructure, power, industrial, commercial, and residential projects.
        </p>
      </div>

      <div className="content-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We maintain the highest standards in project delivery, safety, and quality management across all our operations.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace cutting-edge technology and innovative construction methods to deliver superior results.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>We are committed to sustainable development and environmental responsibility in all our projects.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We operate with transparency, ethical business practices, and unwavering commitment to our stakeholders.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 