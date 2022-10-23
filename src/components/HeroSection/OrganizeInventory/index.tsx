import React from "react";
import styles from "./OrganizeInventory.module.scss";
export default function OrganizeInventory() {
  return (
    <div className={styles.inventorySection}>
      <div className={styles.InventoryContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.homeCol}>
            <div className={styles.inventoryTitle}>Simple Inventory Management Software.</div>
            <p className={styles.inventoryParagraph}>
              The best inventory software for small businesses to manage inventory, supplies, and
              everything else.
            </p>
            <div className={styles.homeJobDone}>
              <div className={styles.quoteWrap}></div>
            </div>
            <div className={styles.homeSwitchingTo_cta}>
              <button type="button" className={styles.btn}>
                See All Plan
              </button>
              <p className={styles.productTour}>Take a product tour</p>
            </div>
          </div>
          <div className={styles.col}>
            <img
              src="https://media.sortly.com/wp-content/uploads/2022/09/14023935/hero_construction_2.png"
              width="768"
              height="500"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
