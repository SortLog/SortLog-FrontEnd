import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

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
    tagArr[index] = <Chip variant="filled" label={tags[index]} {...getTag()} />;
  }
  return tagArr;
}

const ItemCard = (props: any) => {
  const { data, onRemove } = props;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="green iguana" height="200" image={data.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2" color="text.secondary">
            {data.change} {unitOrunits(data.change)}
          </Typography>
          <Divider sx={{ height: 28, ml: 2, mr: 2 }} orientation="vertical" />
          <Typography variant="body2" color="text.secondary">
            $ {data.price}
          </Typography>
        </CardActions>
        <CardActions>{printTag(data.tags)}</CardActions>
      </Card>
      <Grid container sx={{ mt: 1 }} justifyContent="flex-end">
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={onRemove}>
          Delete
        </Button>
      </Grid>
    </>
  );
};

export default ItemCard;
