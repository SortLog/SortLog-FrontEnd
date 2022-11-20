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
  TextField,
  CardMedia,
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import HelpIcon from "@mui/icons-material/Help";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import QRCodeGenerator from "../QRcodeHandler/qrcode-generation";

function unitOrunits(quantity: any) {
  if (quantity > 1) {
    return "units";
  } else {
    return "unit";
  }
}

function changeBackground(e: any) {
  e.target.style.background = "red";
}

function showCode(qrCode: any) {
  {console.log(qrCode)}
  if (qrCode) {
    return (<Grid m="20px" onChange={qrCode}>
    <Typography sx={{ color: "#939393", mt: 3 }}>QR / BARCODES</Typography>
    <Grid container>
      {/* <Grid
        container
        sx={{
          mt: 3,
          border: "1px solid #c3c0c0",
          borderRadius: "3px",
          width: "auto",
          borderBlockColor: "#c3c0c0",
        }}
      >
        <Typography m="6px">
          {data.name}
          <Typography fontSize={6} sx={{ color: "#757575", mt: 1 }}>
            Create via <text style={{ color: "#ff0000", fontStyle: "italic" }}>SortLog</text>
          </Typography>
        </Typography>
      </Grid> */}
      <Button variant="outlined" color="inherit" sx={{ mt: 3, color: "#c3c0c0" }}>
        <QrCode2Icon sx={{ color: "#000000" }}></QrCode2Icon>
        <Typography ml="10px" sx={{ color: "#000000" }}>
          LINK QR / BARCODE
        </Typography>
      </Button>
    </Grid>
  </Grid>);
  } else {
    return "";
  }
}


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "rgb(255, 255, 255)",
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: "rgb(145, 145, 145)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "rgb(13, 126, 239)",
      },
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "rgb(255, 255, 255)",
    },
  },
}));

const MuiDrawer = (props: any) => {
  const { isDrawerOpen, setIsDrawerOpen, qrCode, setQrCode, data } = props;
  // console.log(data);
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();
  const [isQRCodeShowed, setIsQRCodeShowed] = useState(false);

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
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        PaperProps={{
          sx: {
            // height: 1000,
            width: 1260,
            padding: 2,
            // mt: 20,
          },
        }}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} sx={{ mt: 3 }}>
          <TextField
            id="standard-password-input"
            label="Name"
            autoComplete="current-password"
            variant="standard"
            value={data.name}
            InputProps={{ disableUnderline: true }}
            className={classes.root}
            onChange={(e) => props.onChange(e.target.value)}
            inputProps={{ style: { fontSize: 36 } }}
            sx={{ width: 300 }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          {isShown && <EditIcon sx={{ m: 3 }} />}
        </Box>
        <Divider />
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
            <text style={{ color: "#131213" }}>{data.sku}</text>
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
                <TextField label="Tags" value={data.tags} />
                {/* {console.log(data.image)}; */}
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
              image={data.image}
            />
          </Grid>
        </Grid>
        <Grid m="20px">
          <Typography sx={{ color: "#939393", mt: 3 }}>QR / BARCODES</Typography>
          <Grid container>
            <Grid
              container
              sx={{
                mt: 3,
                border: "1px solid #c3c0c0",
                borderRadius: "3px",
                width: "auto",
                borderBlockColor: "#c3c0c0",
              }}
            >
              <Typography m="6px">
                {data.name}
                <Typography fontSize={6} sx={{ color: "#757575", mt: 1 }}>
                  Create via <text style={{ color: "#ff0000", fontStyle: "italic" }}>SortLog</text>
                </Typography>
              </Typography>
            </Grid>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ mt: 3, ml: 3, color: "#c3c0c0" }}
              onClick={() => setIsQRCodeShowed(!isQRCodeShowed)}
            >
              {isQRCodeShowed ? (
                <QRCodeGenerator data={{ id: data.id }} />
              ) : (
                <>
                  <QrCode2Icon sx={{ color: "#000000" }}></QrCode2Icon>
                  <Typography ml="10px" sx={{ color: "#000000" }}>
                    LINK QR / BARCODE
                  </Typography>
                </>
              )}
            </Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container paddingLeft={2} paddingTop={3}>
          <Button variant="contained" color="secondary" sx={{ bgcolor: "#2329d3" }}>
            Save
          </Button>
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
