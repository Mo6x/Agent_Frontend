import React from "react";
import styles from "./landingPages.module.css"; 



export const LandingPages: React.FC = () => {
  return (
    <div className={styles.containerLandingPages}>
      <h1 className={styles.heading}>Welcome to Our Landing Page</h1>
      <p className={styles.paragraph}>Your journey starts here.</p>
      <button className={styles.ctaButton}>Get Started</button>
    </div>
  );
};

export default LandingPages