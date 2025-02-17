"use client"; 
import React, { useState } from "react";
import styles from "./Navbars.module.css";
import { FiMenu, FiX } from "react-icons/fi"; 



export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.NavbarContainer}>
      <div className={styles.logo}>MyLogo</div>
         <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
           <a href="/signup">Sign Up</a>
           <a href="/login">Login</a>
         </div>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};
