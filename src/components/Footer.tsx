import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Tata Power EV Charging</h3>
            <p className={styles.footerDescription}>
              India's leading electric vehicle charging network. Powering sustainable mobility
              with fast, reliable, and eco-friendly charging solutions across the nation.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone />
                <span>1800-209-8282</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>evcharging@tatapower.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2026 Tata Power EV Charging. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;