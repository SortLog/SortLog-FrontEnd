import React from "react";
import styles from "./AccessInventory.module.scss";
import { AiOutlineScan } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BsPhone } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import NextLink from "next/link";
import { Button, Typography } from "@mui/material";

export default function SyncInventory() {
  return (
    <div className={styles.inventorySection}>
      <div className={styles.inventoryContainer}>
        <div className={styles.homeSwitchingTo}>
          <div className={styles.col}>
            <img
              src="https://media.sortly.com/wp-content/uploads/2022/09/15172605/item_details_construction.png"
              width="768"
              height="500"
              alt="img"
            />
          </div>
          <div className={styles.homeCol}>
            <p className={styles.inventoryLabel}>
              <i className={styles.marginRight}>
                <BsPlusSquare />
              </i>
              Managing
            </p>
            <h1 className={styles.inventoryTitle}>
              Access and update your entire visual inventory with one easy app.
            </h1>
            <p className={styles.inventoryParagraph}>
              <i className={styles.marginRight}>
                <BsPhone />
              </i>
              Speed up inventory counts with build-in barcode and QR code scaning
            </p>
            <p className={styles.inventoryParagraph}>
              <i className={styles.marginRight}>
                <TiTick />
              </i>
              Upload high-resolution photos to visually track each item.
            </p>
            <p className={styles.inventoryParagraph}>
              <i className={styles.marginRight}>
                <AiOutlineScan />
              </i>
              Get alerted when you running low on stock
            </p>
            <div className={styles.homeJobDone}>
              <div className={styles.quoteWrap}></div>
            </div>
            <div className={styles.homeSwitchingTo_cta}>
              <NextLink href="./register" passHref>
                <Button variant="contained" sx={{ backgroundColor: "#f13514" }}>
                  Try shortly free
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
        </div>
      </div>
    </div>
  );
}
