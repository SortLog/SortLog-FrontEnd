import React from "react";
import styles from "./Footer.module.scss";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Go Top</h4>
          </div>
          <div className={styles.footerCol}>
            <h4>Solutions</h4>
          </div>
          <div className={styles.footerCol}>
            <h4>Pricing</h4>
          </div>
          <div className={styles.footerCol}>
            <h4>About</h4>
            <div className={styles.socialLinks}>
              <a href="#">
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy;2022 Sortly Inc. All rights reserved. All other logos and trademarks are the
          property of their respective owners.
        </div>
      </div>
    </div>
  );
}

export default Footer;
