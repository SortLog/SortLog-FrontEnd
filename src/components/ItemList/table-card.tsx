import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MuiDrawer from "@/components/ItemList/add-and-edit";

// const handleClick = () => {
//   console.info("You clicked the Chip.");
// };

function unitOrunits(quantity: any) {
  if (quantity > 1) {
    return "units";
  } else {
    return "unit";
  }
}

function getTag() {
  return {
    icon: <LocalOfferOutlinedIcon />,
  };
}

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
        </CardContent>
        <CardActions>
          <Typography variant="body2" color="text.secondary">
            {data.quantity} {unitOrunits(data.quantity)}
          </Typography>
          <Divider sx={{ height: 28, ml: 2, mr: 2 }} orientation="vertical" />
          <Typography variant="body2" color="text.secondary">
            ${parseInt(data.price).toFixed(2)}
          </Typography>
        </CardActions>
        <CardActions>
          <Chip variant="filled" label={data.tag[0]} {...getTag()} />
          <Chip variant="filled" label={data.tag[1]} {...getTag()} />
        </CardActions>
      </Card>
    </>
  );
};

export default ImgMediaCard;
