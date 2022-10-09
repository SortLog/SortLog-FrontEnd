import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Grid container>
      <Grid item xs>
        <Link href={`${router.basePath}/store`} variant="body2">
          To Store Page
        </Link>
      </Grid>
      <Grid item>
        <Link href={`${router.basePath}/example`} variant="body2">
          To Example Page
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
