import React from "react";
import styles from "./Pricing.module.scss";
import NextLink from "next/link";
import { Button, Typography } from "@mui/material";
import { BsFillLayersFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function Pricing() {
  return (
    <div id="pricing">
      <Typography
        variant="h1"
        component="div"
        fontWeight="bold"
        color="#373b54"
        align="center"
        paddingTop="64px"
        paddingBottom="64px"
      >
        Pricing
      </Typography>
      <div className={styles.gridContainer}>
        <div className={styles.price}>
          <div className={styles.priceContent}>
            <BsFillLayersFill />
            <p className={styles.priceTitle}>$0 /mo</p>
            <p className={styles.priceSubitle}>Startup</p>
            <p className={styles.priceDescription}>to familarize yourself with our tools</p>
            <hr className={styles.line} />
            <ul className={styles.priceAttributes}>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Create contracts</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Chat support</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>email Allert</span>
              </li>
              <li className={styles.priceAttribute}></li>
              <li className={styles.priceAttribute}></li>
            </ul>
            <NextLink href="./register" passHref>
              <Button variant="contained" sx={{ backgroundColor: "#f13514", mt: 4 }}>
                Get Started
              </Button>
            </NextLink>
          </div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}>
            <FaLayerGroup />
            <p className={styles.priceTitle}>$4.99/mo</p>
            <p className={styles.priceSubitle}>Standard</p>
            <p className={styles.priceDescription}>to familarize yourself with our tools</p>
            <hr className={styles.line} />
            <ul className={styles.priceAttributes}>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>All previous</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Highlights reporting</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Data history</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Unlimited users</span>
              </li>
            </ul>
            <NextLink href="./register" passHref>
              <Button variant="contained" sx={{ backgroundColor: "#f13514", mt: 4 }}>
                Start a Free Trial
              </Button>
            </NextLink>
          </div>
        </div>

        <div className={styles.price}>
          <div className={styles.priceContent}>
            <FaLayerGroup />
            <p className={styles.priceTitle}>$5.99/mo</p>
            <p className={styles.priceSubitle}>Business</p>
            <p className={styles.priceDescription}>to familarize yourself with our tools</p>
            <hr className={styles.line} />
            <ul className={styles.priceAttributes}>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>All previous</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>unlimited contacts</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Analytics platform</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>public API access</span>
              </li>
              <li className={styles.priceAttribute}>
                <TiTick />
                <span>Send and sign unlimited contracts</span>
              </li>
            </ul>
            <NextLink href="./register" passHref>
              <Button variant="contained" sx={{ backgroundColor: "#f13514", mt: 4 }}>
                Start a Free Trial
              </Button>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
