import React from "react";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navLink} to="/"></div>
        <div className={styles.bars} />
        <div className={styles.navMenu}>
          <div className={styles.navLink} to="/services">
            Index
          </div>
          <div className={styles.navLink} to="/contact-us">
            Solutions
          </div>
          <div className={styles.navLink} to="/sign-up">
            Pricing
          </div>
          <div className={styles.navLink} to="/sign-up">
            About
          </div>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </div>
        <div className={styles.navBtn}>
          <div className={styles.navLink} to="/sign-up">
            Login
          </div>
          <div className={styles.navBtnLink} to="/signin">
            Start a Free Trial
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
