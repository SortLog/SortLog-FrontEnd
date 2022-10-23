import React from "react";
import styles from "./GetReporting.module.scss";
import { BsPhone } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { VscNewFolder } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";

export default function GetReporting() {
  return (
    <div className={styles.inventorySection}>
      <div className={styles.InventoryContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.homeCol}>
            <p className={styles.inventoryLabel}>
              <i className={styles.marginRight}>
                <BsBoxSeam />
              </i>
              Organizing
            </p>
            <h1 className={styles.inventoryTitle}>
              Organize and automate your inventory at the touch of a button.
            </h1>
            <p className={styles.inventoryParagraph}>
              <i className={styles.marginRight}>
                <BsPhone />
              </i>
              Easily upload your existing inventory list into Sortly.
            </p>
            <p className={styles.inventoryParagraph}>
              <i className={styles.marginRight}>
                <VscNewFolder />
              </i>
              Organize inventory folders by location, type, and more.
            </p>
            <p className={styles.inventoryParagraph}>
              <i className={styles.marginRight}>
                <TiTick />
              </i>
              Add critical item details with custom fields.
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
              src="https://media.sortly.com/wp-content/uploads/2022/04/12125817/overflow-screens.png"
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
