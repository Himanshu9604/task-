import React from "react";
import styles from "./Navbar.module.css"; 

function Navbar() {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-container"]}>
        <img src="logo.png" alt="Company Logo" className={styles["logo"]} />
      </div>
      <div className={styles["content"]}>
        <h1 className={styles["header-text"]}>WELCOME TO ANANT NIDHI PRIVATE LIMITED</h1>
        <div className={styles["address-container"]}>
          <p>235, 2nd Floor Opposite Sector - 13 Entrance, Modal Town Hisar Haryana - 125001</p>
        </div>
        <div className={styles["contact-info"]}>
          <p>Contact: 9015702702</p>
          <span>&nbsp;&nbsp;</span>
          <p>Email: infopb77@gmail.com</p>
        </div>
        <div>
          <p>CIN NO.: U65999HR2018PLC077024</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
