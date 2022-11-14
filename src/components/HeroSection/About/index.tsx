import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { GlobalStyles, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About: NextPage = () => {
  return (
    <div id="about">
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
              Sortlog <text style={{ color: "#ce132f" }}>Team</text>
            </Typography>

            <Grid container spacing={6} paddingTop="50px">
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Jenny Men"
                      src="./png/jenny-men.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Jenny Men
                      <Link
                        href="https://www.linkedin.com/in/junyi-men/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      Developer, Team Leader
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Mingen Xiao"
                      src="./png/mingen-xiao.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Mingen Xiao
                      <Link
                        href="https://www.linkedin.com/in/mingen-xiao/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Tony Liu"
                      src="./png/tony-liu.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Tony Liu
                      <Link
                        href="https://www.linkedin.com/in/tony-dong-liu/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Roy Qin"
                      src="./png/roy-qin.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Roy Qin
                      <Link
                        href="https://www.linkedin.com/in/roy-qin/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Shikai Lu"
                      src="./png/shikai-lu.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Shikai Lu
                      {/* <Link href="" target="_blank" color="#1913ce" paddingLeft="10px">
                        <LinkedInIcon fontSize="small" />
                      </Link> */}
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Lina Zhao"
                      src="./png/lina-zhao.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Lina Zhao
                      <Link
                        href="http://www.linkedin.com/in/lina-zhao-010b3124b/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      DevOps Leader
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Yuchen Diao"
                      src="./png/yuchen-diao.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Yuchen Diao
                      <Link
                        href="https://www.linkedin.com/in/yuchen-diao/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      DevOps
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Shawn Wang"
                      src="./png/shawn-wang.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Shawn Wang
                      <Link
                        href="https://www.linkedin.com/in/tremendous-shawn-wang/"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      DevOps
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height: 260, width: 280, borderRadius: 30 }} elevation={12}>
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar
                      alt="Sally Song"
                      src="./png/sally-song.png"
                      sx={{ height: 139, width: 139 }}
                    />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      Sally Song
                      <Link
                        href="https://www.linkedin.com/in/sallysong30"
                        target="_blank"
                        color="#1913ce"
                        paddingLeft="10px"
                      >
                        <LinkedInIcon fontSize="small" />
                      </Link>
                    </Typography>
                    <Typography fontSize="13px" color="#777676">
                      Devops
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </header>
        </div>
      </Container>
    </div>
  );
};

export default About;
