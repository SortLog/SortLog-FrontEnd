import React from "react";
import styles from "./SortlogTeam.module.scss";

export default function SortlogTeam() {
  return (
    <div className={styles.team}>
      <p className={styles.teamTitle}>Sortlog Team</p>
      <div className={styles.gridContainer}>
        <div className={styles.price}>
          <div className={styles.priceContent}>Dabush</div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}></div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}></div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}></div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}></div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}></div>
        </div>
      </div>
    </div>
  );
}
