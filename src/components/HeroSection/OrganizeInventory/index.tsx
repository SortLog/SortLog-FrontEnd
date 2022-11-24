import React from "react";
import styles from "./OrganizeInventory.module.scss";
import NextLink from "next/link";
import { Button, Typography } from "@mui/material";

export default function OrganizeInventory() {
  return (
    <div className={styles.inventorySection} id="solutions">
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
