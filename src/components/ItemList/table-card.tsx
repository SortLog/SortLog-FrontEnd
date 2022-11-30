import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MuiDrawer from "@/components/ItemList/add-and-edit";

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

function printTag(tags: any) {
  const tagArr = new Array(tags.length);
  for (let index = 0; index < tags.length; index++) {
    tagArr[index] = <Chip variant="filled" key={index} label={tags[index]} {...getTag()} />;
  }
  return tagArr;
}

const ImgMediaCard = (props: any) => {
  const { data } = props;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [qrCode, setQrCode] = React.useState(true);
  return (
    <>
      <MuiDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        qrCode={qrCode}
        setQrCode={setQrCode}
        data={data}
      />
      <Card sx={{ maxWidth: 345 }} onClick={() => setIsDrawerOpen(true)}>
        <CardMedia component="img" alt="green iguana" height="200" image={data.image} />
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
        <CardActions>{printTag(data.tags)}</CardActions>
      </Card>
    </>
  );
};

export default ImgMediaCard;
