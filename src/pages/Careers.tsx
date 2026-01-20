import React from 'react';
import { FaUsers, FaLightbulb, FaTrophy, FaGlobe } from 'react-icons/fa';
import styles from './Careers.module.css';

const Careers: React.FC = () => {
  const opportunities = [
    {
      department: 'Sales & Marketing',
      roles: ['Export Sales Executive', 'Business Development Manager', 'Digital Marketing Specialist'],
      description: 'Drive our global expansion and build relationships with international clients.'
    },
    {
      department: 'Design & Development',
      roles: ['Product Designer', 'Textile Designer', 'Quality Assurance Specialist'],
      description: 'Create innovative products that meet international standards and market trends.'
    },
    {
      department: 'Operations & Logistics',
      roles: ['Supply Chain Manager', 'Quality Control Inspector', 'Export Documentation Specialist'],
      description: 'Ensure smooth operations from manufacturing to delivery across global markets.'
    },
    {
      department: 'Administration',
      roles: ['HR Executive', 'Finance Manager', 'Customer Service Representative'],
      description: 'Support our growing team and maintain excellent client relationships.'
    }
  ];

  const benefits = [
    {
      icon: <FaUsers />,
      title: 'Collaborative Environment',
      description: 'Work with a diverse, talented team in a supportive and inclusive workplace.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and skill development programs.'
    },
    {
      icon: <FaTrophy />,
      title: 'Recognition & Growth',
      description: 'Merit-based promotions and recognition for outstanding contributions.'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Exposure',
      description: 'Work with international clients and gain global market experience.'
    }
  ];

  return (
    <div className={styles.careersPage}>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Join Our Team</h1>
          <p className="hero-subtitle">Build your career with India's leading export company</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className="section-title">Grow With Us</h2>
            <p className={styles.introText}>
              Join our growing team at Vijaya Lakshmi and be part of India's expanding export industry. 
              We are always looking for passionate individuals who want to make a difference in areas like 
              Sales, Design, Quality Control, and Logistics. Together, we're building bridges between 
              Indian craftsmanship and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className={`section ${styles.opportunitiesSection}`}>
        <div className="container">
          <h2 className="section-title">Current Opportunities</h2>
          <div className={styles.opportunitiesGrid}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles.opportunityCard}>
                <h3 className={styles.departmentTitle}>{opportunity.department}</h3>
                <div className={styles.rolesList}>
                  {opportunity.roles.map((role, idx) => (
                    <span key={idx} className={styles.roleTag}>{role}</span>
                  ))}
                </div>
                <p className={styles.departmentDescription}>{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className={`section ${styles.applySection}`}>
        <div className="container">
          <div className={styles.applyContent}>
            <h2 className={styles.applyTitle}>Ready to Join Us?</h2>
            <p className={styles.applyText}>
              Send us your CV and let us know how you can contribute to our growing success story.
            </p>
            <a 
              href="mailto:kumarhari2@gmail.com?subject=Job Application - [Your Name]&body=Hello,%0D%0A%0D%0AI am interested in joining Vijaya Lakshmi. Please find my CV attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,"
              className="btn btn-primary"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;