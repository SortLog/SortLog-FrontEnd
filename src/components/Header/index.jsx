import NextLink from "next/link";
import Link from "@mui/material/Link";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <NextLink href="/" passHref>
          <Link className={styles.navLink} sx={{ color: "#000" }}>
            <img alt="logo" src="./android-chrome-192x192.png" width="40" />
          </Link>
        </NextLink>
        <div className={styles.bars} />
        <div className={styles.navMenu}>
          <NextLink href="/" passHref>
            <Link className={styles.navLink} sx={{ color: "#000" }}>
              Index
            </Link>
          </NextLink>
          <NextLink href="#solutions" passHref>
            <Link className={styles.navLink} sx={{ color: "#000" }}>
              Solutions
            </Link>
          </NextLink>
          <NextLink href="#pricing" passHref>
            <Link className={styles.navLink} sx={{ color: "#000" }}>
              Pricing
            </Link>
          </NextLink>
          <NextLink href="#about" passHref>
            <Link className={styles.navLink} sx={{ color: "#000" }}>
              About
            </Link>
          </NextLink>
        </div>
        <div className={styles.navBtn}>
          <NextLink href="./login" passHref>
            <Link className={styles.navLink} sx={{ color: "#000" }}>
              Login
            </Link>
          </NextLink>
          <NextLink href="./signup" passHref>
            <Link className={styles.navBtnLink} sx={{ color: "#fff" }}>
              Start a Free Trial
            </Link>
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
