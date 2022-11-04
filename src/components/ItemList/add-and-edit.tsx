// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const TemporaryDrawer = () => {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {["right"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default TemporaryDrawer;

import {
  Drawer,
  Box,
  Typography,
  Divider,
  Grid,
  Paper,
  Icon,
  InputBase,
  TextField,
  CardMedia,
  FormControl,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Button,
  IconButton,
  Tooltip,
  Chip,
  Avatar,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import HelpIcon from "@mui/icons-material/Help";
import { Tag } from "@mui/icons-material";

function unitOrunits(quantity: any) {
  if (quantity > 1) {
    return "units";
  } else {
    return "unit";
  }
}

const MuiDrawer = (props: any) => {
  const { isDrawerOpen, setIsDrawerOpen, data } = props;
  console.log(data);
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <>
      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton> */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width="1000px" textAlign="center" role="presentation" sx={{ mt: 3 }}>
          <Typography variant="h3" align="left" component="div">
            {data.name}
          </Typography>
          <Divider sx={{ marginTop: 3 }} />
        </Box>
        <Grid
          container
          spacing={6}
          paddingTop="60px"
          paddingLeft="76px"
          paddingRight="166px"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" component="div">
            <text style={{ color: "#a2a2a2" }}>Sortlog ID:</text>{" "}
            <text style={{ color: "#131213" }}>{data.id}</text>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <text style={{ color: "#a2a2a2" }}>Quantity:</text>{" "}
            <text style={{ color: "#ad3c3c" }}>
              {data.quantity} {unitOrunits(data.quantity)}
            </text>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <text style={{ color: "#a2a2a2" }}>Total Value:</text>{" "}
            <text style={{ color: "#131213" }}>${parseInt(data.price).toFixed(2)}</text>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <text style={{ color: "#a2a2a2" }}>Updated at:</text>{" "}
            <text style={{ color: "#131213" }}>
              {currDate} {currTime}
            </text>
          </Typography>
        </Grid>
        <Grid container sx={{ mt: 6 }}>
          <Grid>
            <Grid
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Quantity</InputLabel>
                  <OutlinedInput
                    label="Quantity"
                    value={data.quantity}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <UnfoldMoreIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Min Level</InputLabel>
                  <OutlinedInput
                    label="Min Level"
                    value={0}
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip
                          placement="top"
                          title="Set a minimum level to easily identify low stock items. Item will be highlighted when its quantity is at or below min level."
                          arrow
                        >
                          <HelpIcon />
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    label="Amount"
                    value={"$" + parseInt(data.price).toFixed(2)}
                    endAdornment={<InputAdornment position="end">AUD</InputAdornment>}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Total value</InputLabel>
                  <OutlinedInput
                    label="Total value"
                    value={"AU$" + (data.quantity * data.price).toFixed(2)}
                    endAdornment={<InputAdornment position="end">AUD</InputAdornment>}
                  />
                </FormControl>
              </div>
            </Grid>
            <Grid
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "52ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField label="Tags" value={data.tag} />
              </div>
              <div>
                <TextField label="Notes" variant="outlined" multiline maxRows={6} />
              </div>
            </Grid>
          </Grid>
          <Grid>
            <CardMedia
              component="img"
              alt="green iguana"
              height="390"
              sx={{ ml: 6 }}
              image={data.img}
            />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default MuiDrawer;

// import { Drawer, Box, Typography, Divider, Chip } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

// const MuiDrawer = (props: any) => {
//   const { isDrawerOpen, setIsDrawerOpen, data } = props;

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia component="img" alt="green iguana" height="200" image={data.img} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {data.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//           across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Typography variant="body2" color="text.secondary">
//           {data.quantity}
//         </Typography>
//         <Divider sx={{ height: 28, ml: 2, mr: 2 }} orientation="vertical" />
//         <Typography variant="body2" color="text.secondary">
//           {data.price}
//         </Typography>
//       </CardActions>
//       <CardActions>
//         <Chip icon={<LocalOfferOutlinedIcon />} label="tag" />
//         <Chip icon={<LocalOfferOutlinedIcon />} label="Clickable" />
//       </CardActions>
//     </Card>
//   );
// };

// export default MuiDrawer;
