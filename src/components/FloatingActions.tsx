import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import styles from './FloatingActions.module.css';

const FloatingActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918285016625', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918285016625';
  };

  return (
    <div className={styles.floatingActions}>
      <button 
        className={`${styles.floatingBtn} ${styles.whatsappBtn}`}
        onClick={handleWhatsAppClick}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
      <button 
        className={`${styles.floatingBtn} ${styles.phoneBtn}`}
        onClick={handlePhoneClick}
        title="Call Us"
      >
        <FaPhone size={20} />
      </button>
    </div>
  );
};

export default FloatingActions;