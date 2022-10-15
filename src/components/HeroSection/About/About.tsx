import React from "react";
import styles from "./About.module.scss";
export default function GetStart() {
  return (
    <div className={styles.sectionPricing} id="about">
      <div className={styles.container}>
        <span className={styles.planHeading}>About Us.</span>
        <div className={styles.planHeadingSectiondary}>
          Sortly is a software solution designed for businesses to streamline and modernize every
          aspect of managing inventory
        </div>
      </div>
    </div>
  );
}
