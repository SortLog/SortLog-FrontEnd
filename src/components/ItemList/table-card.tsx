import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MuiDrawer from "@/components/ItemList/add-and-edit";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const ImgMediaCard = (props: any) => {
  const { data } = props;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <MuiDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} data={data} />
      <Card sx={{ maxWidth: 345 }} onClick={() => setIsDrawerOpen(true)}>
        <CardMedia component="img" alt="green iguana" height="200" image={data.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2" color="text.secondary">
            {data.quantity}
          </Typography>
          <Divider sx={{ height: 28, ml: 2, mr: 2 }} orientation="vertical" />
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
        </CardActions>
        <CardActions>
          <Chip icon={<LocalOfferOutlinedIcon />} label="tag" onClick={handleClick} />
          <Chip icon={<LocalOfferOutlinedIcon />} label="Clickable" onClick={handleClick} />
        </CardActions>
      </Card>
    </>
  );
};

export default ImgMediaCard;
