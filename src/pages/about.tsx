import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import SaveIcon from "@mui/icons-material/Save"
import DeleteIcon from "@mui/icons-material/Delete"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import TextField from "@mui/material/TextField"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { yellow, green, red } from "@mui/material/colors";
import { GlobalStyles, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     marginBottom: 15,
//     borderRadius: 15,
//     color: 'white',
//     padding: '5px 30px'
//   }
// })

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: red[400],
    },
  },
});

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#eb1111",
    },
    text: {
      primary: "#0daca1",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //     width: theme.spacing(32),
  //     height: theme.spacing(16)
  //   }
  // },
  yellowPaper: {
    backgroundColor: yellow[300],
  },
  customBorder: {
    border: `3px solid ${yellow[200]}`,
  },
  customBorderRadius: {
    borderRadius: 25,
  },
}));

const About: NextPage = () => {
  
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
>>>>>>> 2754ee4 (create a new tsx file for about us page)
      <Container maxWidth="lg" color="background">
        <div className="App">
          <header className="App-header">
            <GlobalStyles
              styles={{
                body: { backgroundColor: "#e7e6e6" },
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
              About <text style={{color: "#cd1530"}}>Us</text>.
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
            {/* <ButtonStyled /> */}
          </header>
        </div>
      </Container>

      <Container maxWidth="xl">
        <div className="App">
          <header className="App-header">
            <Typography variant="h3" component="div" color="#373b54" fontWeight="bold" paddingTop="100px">
              Sortlog <text style={{color: "#cd1530"}}>Team</text>
            </Typography>
            
            <Grid container spacing={6} paddingTop="50px">
              <Grid item>
                <Paper style={{ height:260, width:280, }} className={classes.customBorderRadius} elevation={12}>
                  <Box p={8.9}>
                    {/* <Stack direction="row" spacing={2}> */}
                    {/* <Avatar>H</Avatar> */}
                    <Avatar sx={{ bgcolor: deepOrange[500], height:139, width:139 }} >LX</Avatar>
                    {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
                    {/* </Stack> */}
                    <Typography variant="h6" paddingTop="10px" align="center">Lucas Xiao</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height:260, width:280, }} />
              </Grid>
              <Grid item>
                <Paper
                  style={{ height: 260, width: 280, borderRadius: 30}}
                  className={classes.customBorderRadius}
                  elevation={12}
                >
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar alt="III JJJ" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      III JJJ
                      <Link href="https://www.linkedin.com/in/mingen-xiao/" target="_blank" color="#949494" paddingLeft="10px">
                        <LinkedInIcon fontSize="small"/>
                      </Link>
                    </Typography>
                    <Typography fontSize="10px" color="#777676">
                      Full-Stack Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  style={{ height: 260, width: 280, borderRadius: 30}}
                  className={classes.customBorderRadius}
                  elevation={12}
                >
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar alt="KKK LLL" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      KKK LLL
                      <Link href="https://www.linkedin.com/in/mingen-xiao/" target="_blank" color="#949494" paddingLeft="10px">
                        <LinkedInIcon fontSize="small"/>
                      </Link>
                    </Typography>
                    <Typography fontSize="10px" color="#777676">
                      Full-Stack Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  style={{ height: 260, width: 280, borderRadius: 30}}
                  className={classes.customBorderRadius}
                  elevation={12}
                >
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar alt="MMM NNN" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      MMM NNN
                      <Link href="https://www.linkedin.com/in/mingen-xiao/" target="_blank" color="#949494" paddingLeft="10px">
                        <LinkedInIcon fontSize="small"/>
                      </Link>
                    </Typography>
                    <Typography fontSize="10px" color="#777676">
                      Full-Stack Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  style={{ height: 260, width: 280, borderRadius: 30}}
                  className={classes.customBorderRadius}
                  elevation={12}
                >
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar alt="OOO PPP" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      OOO PPP
                      <Link href="https://www.linkedin.com/in/mingen-xiao/" target="_blank" color="#949494" paddingLeft="10px">
                        <LinkedInIcon fontSize="small"/>
                      </Link>
                    </Typography>
                    <Typography fontSize="10px" color="#777676">
                      Full-Stack Developer
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  style={{ height: 260, width: 280, borderRadius: 30}}
                  className={classes.customBorderRadius}
                  elevation={12}
                >
                  <Box paddingTop="50px" paddingLeft="70px">
                    <Avatar alt="QQQ RRR" src="icon-test.jpg" sx={{ height: 139, width: 139 }} />
                    <Typography variant="h6" paddingTop="10px" fontWeight="bold" color="#777676">
                      QQQ RRR
                      <Link href="https://www.linkedin.com/in/mingen-xiao/" target="_blank" color="#949494" paddingLeft="10px">
                        <LinkedInIcon fontSize="small"/>
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
>>>>>>> 2754ee4 (create a new tsx file for about us page)
  );
};

export default About;
