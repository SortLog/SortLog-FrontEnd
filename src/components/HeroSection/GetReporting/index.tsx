import React from "react";
import styles from "./GetReporting.module.scss";
import { BsPhone } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { VscNewFolder } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";
import NextLink from "next/link";
import { Button, Typography } from "@mui/material";

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
              Easily upload your existing inventory list into Sortlog.
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
              <NextLink href="#pricing" passHref>
                <Button variant="contained" sx={{ backgroundColor: "#f13514" }}>
                  See All Plan
                </Button>
              </NextLink>
              <NextLink href="#pricing" passHref>
                <Typography
                  variant="subtitle2"
                  sx={{ ml: 1, mt: 1, color: "#f13514", cursor: "pointer" }}
                >
                  Take a pricing tour
                </Typography>
              </NextLink>
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
