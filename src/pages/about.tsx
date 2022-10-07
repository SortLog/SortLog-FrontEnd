import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { GlobalStyles, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" color="background">
        <div className="App">
          <header className="App-header">
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
              Sortly is a software solution designed for businesses to streamline and modernize
              every aspect of managing inventory.
            </Typography>
          </header>
        </div>
      </Container>

      <Container maxWidth="xl">
        <div className="App">
          <header className="App-header">
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
                    <Avatar alt="Lucas Alan" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="AAA BBB" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="CCC DDD" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="EEE FFF" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="GGG HHH" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="III JJJ" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="KKK LLL" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="MMM NNN" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="OOO PPP" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
                    <Avatar alt="QQQ RRR" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
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
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default About;
