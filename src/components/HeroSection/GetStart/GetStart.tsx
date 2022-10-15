import React from "react";
import styles from "./GetStart.module.scss";
export default function GetStart() {
  return (
    <div className={styles.sectionPricing} id="about">
      <div className={styles.container}>
        <span className={styles.planHeading}>Get Start with SortLog.</span>
        <div className={styles.planHeadingSectiondary}>
          learn more about how Sortly can transform your business through better inventory control
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.homeSwitchingTo_cta}>
            <button type="button" className={styles.btn}>
              Take a pricing tour
            </button>
            <p className={styles.productTour}>See Pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
