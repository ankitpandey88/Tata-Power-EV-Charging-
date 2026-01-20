import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Zap, MessageSquare, Headphones } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Tata Power EV Charging! We will get back to you soon.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Headquarters',
      info: 'Mumbai, Maharashtra, India',
      subInfo: 'Pan-India presence in 500+ cities'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Customer Support',
      info: '1800-209-8282',
      subInfo: 'Available 24/7'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      info: 'evcharging@tatapower.com',
      subInfo: 'We respond within 24 hours'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Technical Support',
      info: 'support@tatapower-ev.com',
      subInfo: 'Round-the-clock assistance'
    }
  ];

  const supportOptions = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Find Charging Station',
      description: 'Locate the nearest charging station using our mobile app or website',
      action: 'Find Station'
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Installation Inquiry',
      description: 'Get a quote for installing charging infrastructure at your location',
      action: 'Get Quote'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Technical Support',
      description: '24/7 support for charging issues and technical assistance',
      action: 'Get Help'
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.2)' }}></div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#e0f2fe' }}>
            We're here to power your EV journey
          </p>
        </div>
      </section>

      {/* Quick Support Options */}
      <section style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>How Can We Help?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {supportOptions.map((option, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ color: '#0891b2', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {option.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{option.title}</h3>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>{option.description}</p>
                <button style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={`section ${styles.contactInfoSection}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className={styles.contactGrid}>
            {contactInfo.map((item, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.contactIcon} style={{ color: '#0891b2' }}>
                  {item.icon}
                </div>
                <h3 className={styles.contactTitle}>{item.title}</h3>
                <p className={styles.contactInfo}>{item.info}</p>
                <p className={styles.contactSubInfo}>{item.subInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className={`section ${styles.formMapSection}`}>
        <div className="container">
          <div className={styles.formMapGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Send Us a Message</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Have a question or need assistance? Fill out the form and our team will get back to you shortly.
              </p>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your EV charging needs, installation requirements, or any questions..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Box */}
            <div className={styles.mapContainer}>
              <h3 className={styles.mapTitle}>Our Network</h3>
              <div style={{
                background: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
                borderRadius: '1rem',
                padding: '2rem',
                color: 'white',
                marginBottom: '2rem'
              }}>
                <Zap style={{ width: '48px', height: '48px', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Pan-India Presence
                </h4>
                <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                  With over 5,000 charging stations across 500+ cities, we're India's largest EV charging network.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>5000+</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Charging Stations</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '0.5rem' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>500+</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Cities Covered</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Business Inquiries
                </h4>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  For partnership opportunities, fleet solutions, or commercial installations, reach out to our business team.
                </p>
                <a href="mailto:business@tatapower-ev.com" style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: '#0891b2',
                  color: 'white',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>
                  Contact Business Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;