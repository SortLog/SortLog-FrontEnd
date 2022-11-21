import React from "react";
import styles from "./BusinessPartner.module.scss";

export default function BusinessPartner() {
  return (
    <div className={styles.sectionFeatured}>
      <div className={styles.container}>
        <div className={styles.headingFeaturedIn}>
          Over 10,000 businesses trust Sortly to track their inventory.
        </div>
        <div className={styles.logos}>
          <img
            src="https://media.sortly.com/wp-content/uploads/2022/09/13200122/it_schneider.png"
            alt="Techcrunch logo"
          />
          <img
            src="https://media.sortly.com/wp-content/uploads/2022/09/13200126/retail_sephora.png"
            alt="Business Insider logo"
          />
          <img
            src="https://media.sortly.com/wp-content/uploads/2022/09/12125637/chewy.png"
            alt="The New York Times logo"
          />
          <img
            src="https://media.sortly.com/wp-content/uploads/2022/09/13200117/construction_kiewet.png"
            alt="Forbes logo"
          />
          <img
            src="https://media.sortly.com/wp-content/uploads/2022/09/13200127/retail_terminix.png"
            alt="USA Today logo"
          />
        </div>
      </div>
    </div>
  );
}
