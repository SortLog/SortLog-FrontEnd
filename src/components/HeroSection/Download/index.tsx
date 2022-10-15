import React from "react";
import styles from "./Download.module.scss";

export default function Download() {
  return (
    <div className={styles.sectionHow}>
      <div className={styles.container}>
        <div className={styles.stepImgBox}>
          <img
            src="https://media.sortly.com/wp-content/uploads/2022/07/12125656/iphone-cta-noshadow.png"
            className="stepImg"
            alt="iPhone app
      preferences selection screen"
          />
        </div>
        <div className={styles.stepTextBox}>
          <div className={styles.headingTertiary}>Inventory from anywhere.</div>
          <div className={styles.stepDescription}>
            Our top-rated mobile app makes it easy to inventory anywhere—even when youre offline
          </div>
          <div className={styles.downloadButton}>
            <a href="https://www.apple.com/techscrumapp">
              <img
                src="https://www.sortly.com/wp-content/themes/sortly_2022_redesign/assets/img/app-store.svg"
                alt="Download iOS App"
                draggable="false"
                loading="lazy"
              />
            </a>
            <a href="https://www.google.com/play/techscrumapp">
              <img
                src="https://www.sortly.com/wp-content/themes/sortly_2022_redesign/assets/img/google-play.svg"
                alt="Download Android App"
                draggable="false"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
