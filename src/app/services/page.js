"use client"
// Services Page - Orascom Construction

export default function Services() {
  return (
    <div className="services-page">
      <style jsx>{`
        .services-page {
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
        
        .services-intro {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .services-intro h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 20px;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }
        
        .service-card {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 62, 126, 0.1);
        }
        
        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f26722, #ff8c42);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 32px;
          color: white;
        }
        
        .service-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 15px;
        }
        
        .service-card p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .service-features li {
          font-size: 14px;
          color: #666;
          padding: 5px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .service-features li:last-child {
          border-bottom: none;
        }
        
        .capabilities-section {
          background: #f8f9fa;
          padding: 60px 40px;
          border-radius: 12px;
          margin-bottom: 60px;
        }
        
        .capabilities-section h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          text-align: center;
          margin-bottom: 40px;
        }
        
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .capability-item {
          background: white;
          padding: 25px;
          border-radius: 8px;
          border-left: 4px solid #f26722;
        }
        
        .capability-item h4 {
          font-size: 18px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 10px;
        }
        
        .capability-item p {
          font-size: 14px;
          color: #666;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 32px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .capabilities-section {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="hero-section">
        <h1>Our Services</h1>
        <p>Comprehensive engineering and construction solutions across diverse sectors</p>
      </div>

      <div className="services-intro">
        <h2>Building Excellence Across Multiple Sectors</h2>
        <p>With over 50 years of experience, Orascom Construction delivers world-class engineering and construction services across infrastructure, industrial, and commercial sectors worldwide.</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🏗️</div>
          <h3>Infrastructure</h3>
          <p>Large-scale infrastructure projects including roads, bridges, tunnels, and urban development initiatives.</p>
          <ul className="service-features">
            <li>Highway & Road Construction</li>
            <li>Bridge & Tunnel Engineering</li>
            <li>Airport & Port Development</li>
            <li>Urban Infrastructure</li>
            <li>Water & Wastewater Systems</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">⚡</div>
          <h3>Power & Energy</h3>
          <p>Comprehensive power generation and energy infrastructure solutions for sustainable development.</p>
          <ul className="service-features">
            <li>Power Plant Construction</li>
            <li>Renewable Energy Projects</li>
            <li>Transmission Networks</li>
            <li>Energy Storage Systems</li>
            <li>Grid Infrastructure</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🏭</div>
          <h3>Industrial</h3>
          <p>Complex industrial facilities and manufacturing plants designed for optimal efficiency and safety.</p>
          <ul className="service-features">
            <li>Manufacturing Facilities</li>
            <li>Petrochemical Plants</li>
            <li>Mining Infrastructure</li>
            <li>Steel & Cement Plants</li>
            <li>Process Engineering</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🏢</div>
          <h3>Commercial</h3>
          <p>High-end commercial developments including office buildings, retail centers, and mixed-use projects.</p>
          <ul className="service-features">
            <li>Office Buildings</li>
            <li>Shopping Centers</li>
            <li>Mixed-Use Developments</li>
            <li>Hospitality Projects</li>
            <li>Educational Facilities</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🏠</div>
          <h3>Residential</h3>
          <p>Premium residential developments and community projects that enhance quality of life.</p>
          <ul className="service-features">
            <li>Luxury Residential Towers</li>
            <li>Gated Communities</li>
            <li>Affordable Housing</li>
            <li>Master-Planned Communities</li>
            <li>Social Housing Projects</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>Engineering Services</h3>
          <p>Comprehensive engineering solutions from concept to completion with cutting-edge technology.</p>
          <ul className="service-features">
            <li>Project Management</li>
            <li>Design Engineering</li>
            <li>Construction Management</li>
            <li>Quality Assurance</li>
            <li>Technical Consulting</li>
          </ul>
        </div>
      </div>

      <div className="capabilities-section">
        <h2>Our Core Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <h4>Project Management Excellence</h4>
            <p>Proven track record in delivering complex projects on time and within budget using advanced project management methodologies.</p>
          </div>
          <div className="capability-item">
            <h4>Safety Leadership</h4>
            <p>Industry-leading safety standards with comprehensive training programs and zero-harm culture across all operations.</p>
          </div>
          <div className="capability-item">
            <h4>Quality Assurance</h4>
            <p>Rigorous quality control processes and international certifications ensuring the highest standards of construction quality.</p>
          </div>
          <div className="capability-item">
            <h4>Innovation & Technology</h4>
            <p>Adoption of cutting-edge construction technologies, BIM modeling, and sustainable building practices.</p>
          </div>
          <div className="capability-item">
            <h4>Local Expertise</h4>
            <p>Deep understanding of local markets, regulations, and cultural nuances in our operational regions.</p>
          </div>
          <div className="capability-item">
            <h4>Financial Strength</h4>
            <p>Strong financial position enabling us to undertake large-scale projects and provide financial guarantees.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 