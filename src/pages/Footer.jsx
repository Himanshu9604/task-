import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-column"]}>
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className={styles["footer-column"]}>
        <h3>Support</h3>
        <ul>
          <li>Help Center</li>
          <li>Safety Center</li>
          <li>Community Guidelines</li>
        </ul>
      </div>
      <div className={styles["footer-column"]}>
        <h3>Legal</h3>
        <ul>
          <li>Cookies Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Law Enforcement</li>
        </ul>
      </div>
      <div className={styles["footer-column"]}>
        <h3>Install App</h3>
      </div>
    </div>
  );
}

export default Footer;
