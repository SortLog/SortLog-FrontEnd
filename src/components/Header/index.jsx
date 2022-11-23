import NextLink from "next/link";
import { Button, Link } from "@mui/material";
import styles from "./Header.module.scss";
import { Logo } from "@/components/logo";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.navLink} sx={{ color: "#000" }}>
          <NextLink href="/" passHref>
            <a>
              <Logo
                sx={{
                  height: 40,
                  width: 40,
                }}
              />
            </a>
          </NextLink>
        </Link>
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
              <Button>Login</Button>
            </Link>
          </NextLink>
          <NextLink href="./register" passHref>
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
