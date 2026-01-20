import React from 'react';
import { Zap, Target, Eye, Heart, Award, Users, Leaf, TrendingUp, Shield } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliable Infrastructure',
      description: 'Extensive network of 5000+ charging stations ensuring you\'re never far from a charge.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Charging',
      description: 'Advanced DC fast chargers delivering quick turnaround times for your journey.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Green Energy',
      description: 'Powered by renewable energy sources for truly sustainable mobility.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support ensuring seamless charging experience.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Leader',
      description: 'India\'s most trusted EV charging network backed by Tata Power\'s legacy.'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Network Launch', description: 'Started India\'s first comprehensive EV charging network' },
    { year: '2020', title: '1000+ Stations', description: 'Crossed 1000 charging stations across India' },
    { year: '2022', title: 'Pan-India Coverage', description: 'Expanded to 500+ cities nationwide' },
    { year: '2024', title: '5000+ Stations', description: 'Became India\'s largest EV charging network' }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.3)' }}></div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
            About Tata Power EV Charging
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#e0f2fe' }}>
            Driving India's Electric Vehicle Revolution
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2 className="section-title">Our Story</h2>
              <div className={styles.textBlocks}>
                <p>
                  Tata Power EV Charging is at the forefront of India's electric vehicle revolution.
                  As part of Tata Power, India's largest integrated power company, we bring decades
                  of energy expertise to the rapidly growing EV sector.
                </p>
                <p>
                  Launched in 2018, we recognized the critical need for reliable charging infrastructure
                  to support India's transition to sustainable mobility. Today, we operate the country's
                  largest and most trusted EV charging network with over 5,000 charging points across
                  500+ cities.
                </p>
                <p>
                  Our commitment goes beyond just providing charging stations. We're building an ecosystem
                  that makes electric vehicle ownership convenient, affordable, and accessible to all Indians.
                  From home charging solutions to highway fast chargers, we're powering the future of
                  transportation.
                </p>
              </div>
            </div>
            <div className={styles.storyImage}>
              <div style={{
                background: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
                borderRadius: '1rem',
                padding: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px'
              }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <Zap style={{ width: '100px', height: '100px', margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>5000+</h3>
                  <p style={{ fontSize: '1.2rem' }}>Charging Stations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <Target className="w-12 h-12 mb-4" style={{ color: '#0891b2' }} />
              <h3>Our Mission</h3>
              <p>
                To accelerate India's transition to sustainable mobility by building the most reliable,
                accessible, and user-friendly EV charging infrastructure across the nation.
              </p>
            </div>
            <div className={styles.missionCard}>
              <Eye className="w-12 h-12 mb-4" style={{ color: '#10b981' }} />
              <h3>Our Vision</h3>
              <p>
                To be the driving force behind India's electric vehicle revolution, making EV charging
                as convenient as refueling, and contributing to a cleaner, greener future.
              </p>
            </div>
            <div className={styles.missionCard}>
              <Heart className="w-12 h-12 mb-4" style={{ color: '#0ea5e9' }} />
              <h3>Our Values</h3>
              <p>
                Sustainability, innovation, reliability, customer-centricity, and commitment to
                environmental stewardship guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section" style={{ background: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Journey</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                borderTop: '4px solid #0891b2'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0891b2', marginBottom: '0.5rem' }}>
                  {milestone.year}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {milestone.title}
                </h4>
                <p style={{ color: '#64748b' }}>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`section ${styles.strengthsSection}`}>
        <div className="container">
          <h2 className="section-title">Why Choose Tata Power EV Charging</h2>
          <p className="section-subtitle">
            India's most trusted EV charging network backed by Tata Power's legacy of excellence
          </p>
          <div className={styles.strengthsGrid}>
            {strengths.map((strength, index) => (
              <div key={index} className={styles.strengthCard}>
                <div className={styles.strengthIcon} style={{ color: '#0891b2' }}>
                  {strength.icon}
                </div>
                <h4 className={styles.strengthTitle}>{strength.title}</h4>
                <p className={styles.strengthDescription}>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%)',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <TrendingUp style={{ width: '64px', height: '64px', margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Committed to a Greener Future
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Every charge at our stations contributes to reducing carbon emissions and building
            a sustainable future for generations to come. Join us in driving the change.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;