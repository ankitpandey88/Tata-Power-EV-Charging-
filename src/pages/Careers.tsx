import React from 'react';
import { Zap, Users, Code, Wrench, TrendingUp, Award, Globe, Heart } from 'lucide-react';
import styles from './Careers.module.css';

const Careers: React.FC = () => {
  const opportunities = [
    {
      department: 'Engineering & Technology',
      roles: ['EV Charging Engineer', 'Software Developer', 'IoT Solutions Architect', 'Electrical Engineer'],
      description: 'Build cutting-edge charging infrastructure and smart energy solutions for India\'s EV revolution.',
      icon: Code
    },
    {
      department: 'Operations & Maintenance',
      roles: ['Field Service Technician', 'Network Operations Manager', 'Installation Specialist'],
      description: 'Ensure our charging network operates at peak performance with 24/7 reliability.',
      icon: Wrench
    },
    {
      department: 'Sales & Business Development',
      roles: ['Business Development Manager', 'Key Account Manager', 'Channel Sales Executive'],
      description: 'Drive growth by bringing sustainable charging solutions to businesses and communities.',
      icon: TrendingUp
    },
    {
      department: 'Customer Success',
      roles: ['Customer Support Executive', 'Technical Support Engineer', 'Customer Success Manager'],
      description: 'Deliver exceptional service and support to our growing community of EV users.',
      icon: Users
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation Culture',
      description: 'Work on cutting-edge technology shaping India\'s sustainable future.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Accelerate your career in the fast-growing EV and clean energy sector.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Tata Legacy',
      description: 'Be part of India\'s most trusted business group with 150+ years of excellence.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Impact Work',
      description: 'Contribute to reducing carbon emissions and building a greener India.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Pan-India Presence',
      description: 'Work across 500+ cities with opportunities for travel and exposure.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Inclusive Culture',
      description: 'Diverse, collaborative environment that values every team member.'
    }
  ];

  return (
    <div className={styles.careersPage}>
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
            Power Your Career
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#e0f2fe' }}>
            Join India's leading EV charging network
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className="section-title">Shape the Future of Mobility</h2>
            <p className={styles.introText}>
              At Tata Power EV Charging, we're not just building charging stations – we're building India's
              sustainable future. Join our dynamic team and be part of the electric vehicle revolution.
              Whether you're an engineer, technician, sales professional, or customer success expert,
              there's a place for you in our mission to make EV charging accessible to every Indian.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className={`section ${styles.opportunitiesSection}`}>
        <div className="container">
          <h2 className="section-title">Current Opportunities</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', color: '#64748b' }}>
            Explore exciting career opportunities across various departments
          </p>
          <div className={styles.opportunitiesGrid}>
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div key={index} className={styles.opportunityCard}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Icon className="w-12 h-12" style={{ color: '#0891b2' }} />
                  </div>
                  <h3 className={styles.departmentTitle}>{opportunity.department}</h3>
                  <div className={styles.rolesList}>
                    {opportunity.roles.map((role, idx) => (
                      <span key={idx} className={styles.roleTag}>{role}</span>
                    ))}
                  </div>
                  <p className={styles.departmentDescription}>{opportunity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', color: '#64748b' }}>
            Experience the benefits of working with India's most trusted power company
          </p>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon} style={{ color: '#0891b2' }}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        padding: '4rem 2rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Integrity', desc: 'Upholding the highest ethical standards' },
              { title: 'Excellence', desc: 'Striving for excellence in everything we do' },
              { title: 'Innovation', desc: 'Embracing new ideas and technologies' },
              { title: 'Sustainability', desc: 'Committed to environmental responsibility' }
            ].map((value, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0891b2', marginBottom: '0.5rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#64748b' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className={`section ${styles.applySection}`}>
        <div className="container">
          <div className={styles.applyContent}>
            <Zap style={{ width: '64px', height: '64px', margin: '0 auto 1rem', color: '#0891b2' }} />
            <h2 className={styles.applyTitle}>Ready to Power the Future?</h2>
            <p className={styles.applyText}>
              Join Tata Power EV Charging and be part of India's electric vehicle revolution.
              Send us your CV and let's build a sustainable future together.
            </p>
            <a
              href="mailto:evcharging@tatapower.com?subject=Career Opportunity - [Your Name]&body=Hello,%0D%0A%0D%0AI am interested in joining Tata Power EV Charging. Please find my CV attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,"
              className="btn btn-primary"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'transform 0.3s',
                marginTop: '1rem'
              }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;