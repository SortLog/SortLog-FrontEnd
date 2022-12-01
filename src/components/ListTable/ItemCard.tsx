import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Box, CardHeader, Grid, Button } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { SeverityPill } from "../severity-pill";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number; text: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 100 }}>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </Box>
    </Box>
  );
}

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

const ItemCard = (props: any) => {
  const { data, onRemove } = props;
  return (
    <>
      <Card elevation={7} sx={{ maxWidth: 800 }}>
        <CardMedia component="img" alt="green iguana" height="200" image={data.image} />
        <CardHeader
          sx={{ mt: -3 }}
          title={data.name}
          subheader={
            <LinearProgressWithLabel
              variant="determinate"
              color={data.quantity >= 20 ? "success" : "error"}
              value={data.quantity}
              text={`${data.quantity} IN STOCK`}
            />
          }
        />
        <CardContent sx={{ mt: -7 }}>
          <Typography variant="subtitle2" color="black">
            {data.change} {unitOrunits(data.change).toUpperCase()}
          </Typography>
          <Typography variant="subtitle2" color="red">
            $ {data.price * data.change}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {data.tags.map((tag: any) => (
              <SeverityPill color="info" key={tag}>
                {tag}
              </SeverityPill>
            ))}
          </Box>
          <Grid container sx={{ mt: 2, mb: -2 }} justifyContent="center">
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={onRemove}
              sx={{ height: 30 }}
              fullWidth
            >
              Delete
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemCard;
