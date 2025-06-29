"use client"
// Contact Page - Orascom Construction

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
          margin-bottom: 80px;
        }
        
        .contact-info {
          padding: 40px;
          background: #f8f9fa;
          border-radius: 12px;
        }
        
        .contact-info h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 30px;
        }
        
        .contact-item {
          margin-bottom: 30px;
          padding: 25px;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #f26722;
        }
        
        .contact-item h3 {
          font-size: 18px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 10px;
        }
        
        .contact-item p {
          font-size: 16px;
          color: #666;
          margin: 5px 0;
        }
        
        .contact-form {
          padding: 40px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .contact-form h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #f26722;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #f26722, #ff8c42);
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(242, 103, 34, 0.3);
        }
        
        .offices-section {
          background: #f8f9fa;
          padding: 60px 40px;
          border-radius: 12px;
          margin-bottom: 60px;
        }
        
        .offices-section h2 {
          font-size: 32px;
          font-weight: 700;
          color: #003E7E;
          text-align: center;
          margin-bottom: 40px;
        }
        
        .offices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .office-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          border-top: 4px solid #f26722;
        }
        
        .office-card h4 {
          font-size: 20px;
          font-weight: 700;
          color: #003E7E;
          margin-bottom: 15px;
        }
        
        .office-card p {
          font-size: 14px;
          color: #666;
          margin: 5px 0;
        }
        
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 32px;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .offices-section {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="hero-section">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for inquiries, partnerships, or project consultations</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          
          <div className="contact-item">
            <h3>Headquarters</h3>
            <p>Orascom Construction PLC</p>
            <p>Cairo Festival City</p>
            <p>New Cairo, Egypt</p>
          </div>
          
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+20 2 2617 0000</p>
            <p>+20 2 2617 0001</p>
          </div>
          
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@orascom.com</p>
            <p>investors@orascom.com</p>
          </div>
          
          <div className="contact-item">
            <h3>Business Hours</h3>
            <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
            <p>Friday - Saturday: Closed</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us A Message</h2>
          
          <form>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" id="company" name="company" />
            </div>
            
            <div className="form-group">
              <label htmlFor="inquiry">Inquiry Type</label>
              <select id="inquiry" name="inquiry">
                <option value="">Select inquiry type</option>
                <option value="general">General Information</option>
                <option value="project">Project Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="careers">Career Opportunities</option>
                <option value="investor">Investor Relations</option>
                <option value="media">Media Inquiry</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required placeholder="Please provide details about your inquiry..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="offices-section">
        <h2>Our Global Offices</h2>
        <div className="offices-grid">
          <div className="office-card">
            <h4>Egypt - Cairo</h4>
            <p>Orascom Construction PLC</p>
            <p>Cairo Festival City</p>
            <p>New Cairo, 11835</p>
            <p>Phone: +20 2 2617 0000</p>
          </div>
          
          <div className="office-card">
            <h4>United States - Florida</h4>
            <p>Orascom Construction USA</p>
            <p>Coral Gables, FL</p>
            <p>United States</p>
            <p>Phone: +1 305 459 7800</p>
          </div>
          
          <div className="office-card">
            <h4>United Arab Emirates</h4>
            <p>Orascom Construction</p>
            <p>Dubai, UAE</p>
            <p>Middle East Operations</p>
            <p>Phone: +971 4 123 4567</p>
          </div>
          
          <div className="office-card">
            <h4>Algeria - Algiers</h4>
            <p>Orascom Construction</p>
            <p>Algiers, Algeria</p>
            <p>North Africa Operations</p>
            <p>Phone: +213 21 123 456</p>
          </div>
        </div>
      </div>
    </div>
  )
} 