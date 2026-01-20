import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
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
    alert('Thank you for your message! We will get back to you soon.');
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
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      info: 'Noida Sector 8, Uttar Pradesh, India',
      subInfo: 'PIN: 201301'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+91 8285016625',
      subInfo: 'Available 9 AM - 6 PM IST'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'kumarhari2@gmail.com',
      subInfo: 'We respond within 24 hours'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      info: 'Monday - Saturday',
      subInfo: '9:00 AM - 6:00 PM IST'
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">Get in touch for business inquiries and partnerships</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={`section ${styles.contactInfoSection}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className={styles.contactGrid}>
            {contactInfo.map((item, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.contactIcon}>
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
                    placeholder="Tell us about your requirements, quantities, or any questions you have..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className={styles.mapContainer}>
              <h3 className={styles.mapTitle}>Our Location</h3>
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4942839139426!2d77.31540441508154!3d28.594068582429774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%208%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vijaya Lakshmi Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;