"use client"
// Contact Page - Orascom Construction

import ContactForm from '@/components/forms/ContactForm'

export default function Contact() {
  return (
    <div className="contact-page">
      <style jsx>{`
        .contact-page {
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
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        
        .contact-info {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 12px;
        }
        
        .contact-info h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 30px;
        }
        
        .info-item {
          margin-bottom: 30px;
        }
        
        .info-item h3 {
          font-size: 18px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 10px;
        }
        
        .info-item p {
          font-size: 16px;
          color: #666;
          margin: 0;
        }
        
        .social-info h3 {
          font-size: 18px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 15px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          color: #666;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #f26722;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 32px;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .contact-info {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="hero-section">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any inquiries or project discussions</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          
          <div className="info-item">
            <h3>Address</h3>
            <p>2005A Nile City Towers<br />
            South Tower, Corniche El Nil<br />
            Ramlet Beaulac, Cairo 11221, Egypt</p>
          </div>
          
          <div className="info-item">
            <h3>Phone</h3>
            <p>+20 2 2461 8000</p>
          </div>
          
          <div className="info-item">
            <h3>Email</h3>
            <p>info@orascom.com</p>
          </div>
          
          <div className="social-info">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/OrascomConstructionLtd/" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/orascomconstruction/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/orascom-construction-ltd/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  )
} 