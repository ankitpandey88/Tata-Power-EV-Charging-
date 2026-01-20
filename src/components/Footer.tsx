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
            <h3 className={styles.footerTitle}>Vijaya Lakshmi</h3>
            <p className={styles.footerDescription}>
              Premium manufacturer and exporter of business bags, home textiles, and garments. 
              Delivering quality from India to the world.
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
                <span>Noida Sector 8, Uttar Pradesh, India</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone />
                <span>+91 8285016625</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <span>kumarhari2@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Vijaya Lakshmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;