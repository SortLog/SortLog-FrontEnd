import React from "react";
import styles from "./Footer.module.scss";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import NextLink from "next/link";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <NextLink href="/" passHref>
              <Typography
                variant="h6"
                sx={{ ml: 1, mt: 1, color: "#fff", cursor: "pointer", textAlign: "center" }}
              >
                Go Top
              </Typography>
            </NextLink>
          </div>
          <div className={styles.footerCol}>
            <NextLink href="#solutions" passHref>
              <Typography
                variant="h6"
                sx={{ ml: 1, mt: 1, color: "#fff", cursor: "pointer", textAlign: "center" }}
              >
                Solutions
              </Typography>
            </NextLink>
          </div>
          <div className={styles.footerCol}>
            <NextLink href="#pricing" passHref>
              <Typography
                variant="h6"
                sx={{ ml: 1, mt: 1, color: "#fff", cursor: "pointer", textAlign: "center" }}
              >
                Pricing
              </Typography>
            </NextLink>
          </div>
          <div className={styles.footerCol}>
            <NextLink href="#about" passHref>
              <Typography
                variant="h6"
                sx={{ ml: 1, mt: 1, color: "#fff", cursor: "pointer", textAlign: "center" }}
              >
                About
              </Typography>
            </NextLink>
          </div>
        </div>
        <div className={styles.copyright}>
          <AiFillFacebook />
          <AiOutlineTwitter style={{ marginLeft: "8px" }} />
          <Typography variant="span" sx={{ ml: 3, color: "#fff" }}>
            &copy;2022 Sortlog
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
