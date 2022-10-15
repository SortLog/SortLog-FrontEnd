import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { GlobalStyles, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About: NextPage = () => {
  return (
    <div id="about">
      <div>
        <GlobalStyles
          styles={{
            body: { backgroundColor: "#eeecec" },
          }}
        />
        <Typography
          variant="h1"
          component="div"
          fontWeight="bold"
          color="#373b54"
          align="center"
          paddingTop="66px"
        >
          About <text style={{ color: "#cd1530" }}>Us</text>.
        </Typography>
        <Typography
          fontSize="17.5px"
          paddingLeft="390px"
          paddingRight="390px"
          paddingTop="33px"
          color="#8c8989"
          align="center"
        >
          Sortly is a software solution designed for businesses to streamline and modernize every
          aspect of managing inventory.
        </Typography>
      </div>

      <div>
        <Typography
          variant="h3"
          component="div"
          color="#373b54"
          fontWeight="bold"
          paddingTop="100px"
        >
          Sortlog <text style={{ color: "#cd1530" }}>Team</text>
        </Typography>

        <Grid container spacing={6} paddingTop="50px">
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="Lucas Alan"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  Lucas Alan
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="AAA BBB"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  AAA BBB
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="CCC DDD"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  CCC DDD
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="EEE FFF"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  EEE FFF
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="GGG HHH"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  GGG HHH
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="III JJJ"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  III JJJ
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="KKK LLL"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  KKK LLL
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="MMM NNN"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  MMM NNN
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="OOO PPP"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  OOO PPP
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
              <Box paddingTop="50px" paddingLeft="70px">
                <Avatar
                  alt="QQQ RRR"
                  src="./android-chrome-192x192.png"
                  sx={{ height: 139, width: 139 }}
                />
                <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                  QQQ RRR
                  <Link
                    href="https://www.linkedin.com/in/mingen-xiao/"
                    target="_blank"
                    color="#949494"
                    paddingLeft="10px"
                  >
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography fontSize="10px" color="#777676">
                  Full-Stack Developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
