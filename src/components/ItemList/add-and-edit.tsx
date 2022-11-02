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

import { Drawer, Box, Typography, Divider } from "@mui/material";

const MuiDrawer = (props: any) => {
  const { isDrawerOpen, setIsDrawerOpen, data } = props;

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
        <Box p={2} width="600px" textAlign="center" role="presentation">
          <Typography variant="h3" align="left" component="div">
            {data.name},{data.quantity}
          </Typography>
          <Divider />
        </Box>
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
