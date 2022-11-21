import React from "react";
import styles from "./SyncInventory.module.scss";
import { BsPhone } from "react-icons/bs";

export default function AccessInventory() {
  return (
    <div className={styles.inventorySection}>
      <div className={styles.InventoryContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.col}>
            <img
              src="https://media.sortly.com/wp-content/uploads/2022/04/12125817/overflow-screens.png"
              width="768"
              height="500"
              alt="img"
            />
          </div>
          <div className={styles.homeCol}>
            <p className={styles.inventoryLabel}>
              <i className={styles.marginRight}>
                <BsPhone />
              </i>
              Synchronization
            </p>
            <h1 className={styles.inventoryTitle}>
              Automatically sync your inventory across all devices, all teams.
            </h1>
            <p className={styles.inventoryParagraph}>
              Use Sortly on mobile, desktop, or tablet, thanks to automatic, cloud-based syncing.
              You and your team can update inventory in real time from any location.
            </p>
            <div className={styles.homeJobDone}>
              <div className={styles.quoteWrap}></div>
            </div>
            <div className={styles.homeSwitchingTo_cta}>
              <button type="button" className={styles.btn}>
                See All Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
