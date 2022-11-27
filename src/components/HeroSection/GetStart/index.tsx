import React from "react";
import styles from "./GetStart.module.scss";
import NextLink from "next/link";
import { Button, Typography } from "@mui/material";

export default function GetStart() {
  return (
    <div className={styles.sectionPricing}>
      <div className={styles.container}>
        <span className={styles.planHeading}>Get Start with SortLog.</span>
        <div className={styles.planHeadingSectiondary}>
          learn more about how Sortly can transform your business through better inventory control
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.homeSwitchingTo_cta}>
            <NextLink href="#pricing" passHref>
              <Button variant="contained" sx={{ backgroundColor: "#f13514" }}>
                Take a pricing tour
              </Button>
            </NextLink>
            <NextLink href="#pricing" passHref>
              <Typography
                variant="subtitle2"
                sx={{ ml: 1, mt: 1, color: "#f13514", cursor: "pointer" }}
              >
                See Pricing
              </Typography>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
