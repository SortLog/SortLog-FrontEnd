import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const Header: any = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="./store" variant="body2">
          To Store Page
        </Link>
      </Grid>
      <Grid item>
        <Link href="./example" variant="body2">
          To Example Page
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
