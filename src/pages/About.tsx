import React from 'react';
import { FaShieldAlt, FaDollarSign, FaClock, FaCogs, FaHandshake } from 'react-icons/fa';
import styles from './About.module.css';

const About: React.FC = () => {
  const strengths = [
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every product meets international standards.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Competitive Pricing',
      description: 'Cost-effective solutions without compromising on quality and craftsmanship.'
    },
    {
      icon: <FaClock />,
      title: 'Timely Delivery',
      description: 'Reliable supply chain management ensuring on-time delivery worldwide.'
    },
    {
      icon: <FaCogs />,
      title: 'Customization',
      description: 'Flexible manufacturing capabilities to meet specific client requirements.'
    },
    {
      icon: <FaHandshake />,
      title: 'Strong Network',
      description: 'Established manufacturing partnerships across India for diverse product range.'
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About Vijaya Lakshmi</h1>
          <p className="hero-subtitle">Building bridges between Indian craftsmanship and global markets</p>
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
                  Founded with a vision to showcase the finest Indian manufacturing capabilities to the world, 
                  Vijaya Lakshmi has grown from a small trading company to a trusted global partner in 
                  manufacturing and exports.
                </p>
                <p>
                  Based in the industrial hub of Noida Sector 8, Uttar Pradesh, we have established ourselves 
                  as a reliable manufacturer and exporter of premium business bags, home textiles, and garments. 
                  Our journey has been marked by continuous growth, innovation, and an unwavering commitment 
                  to quality.
                </p>
                <p>
                  Today, we serve clients across multiple continents, delivering products that combine 
                  traditional Indian craftsmanship with modern design sensibilities and international 
                  quality standards.
                </p>
              </div>
            </div>
            <div className={styles.storyImage}>
              <img 
                src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Manufacturing facility" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional quality products that exceed international standards while 
                maintaining competitive pricing and fostering long-term partnerships with our global clients.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Our Vision</h3>
              <p>
                To become the leading export house from India, recognized globally for innovation, 
                quality, and reliability in business bags, textiles, and garments manufacturing.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Our Values</h3>
              <p>
                Integrity, quality, customer satisfaction, innovation, and sustainable business 
                practices form the cornerstone of our operations and guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`section ${styles.strengthsSection}`}>
        <div className="container">
          <h2 className="section-title">Why Choose Vijaya Lakshmi</h2>
          <p className="section-subtitle">
            Our key strengths that make us the preferred partner for international businesses
          </p>
          <div className={styles.strengthsGrid}>
            {strengths.map((strength, index) => (
              <div key={index} className={styles.strengthCard}>
                <div className={styles.strengthIcon}>
                  {strength.icon}
                </div>
                <h4 className={styles.strengthTitle}>{strength.title}</h4>
                <p className={styles.strengthDescription}>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;