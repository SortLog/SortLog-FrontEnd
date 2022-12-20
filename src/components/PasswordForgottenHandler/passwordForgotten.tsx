import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";
import { Auth } from "@aws-amplify/auth";

const styles = {
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 10,
    background: "rgba(0, 0, 0, 0.75)",
  },
  card: {
    top: "30vh",
    left: "30%",
    width: "40vw",
    zIndex: 99,
    overflow: "hidden",
    position: "fixed",
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  text: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  buttons: {
    marginBottom: 5,
    display: "flex",
    justifyContent: "space-around",
  },
};

const PasswordForgotten = (props: any) => {
  const [email, setEmail] = useState("");

  const onEmailConfirm = () => {};

  return (
    <div>
      <div style={styles.background} onClick={props.onModalDismiss}></div>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.title} color="textSecondary" gutterBottom>
            Your email address is required
          </Typography>
          <TextField
            // sx={styles.text}
            required
            id="outlined-required"
            label="Email"
            //   defaultValue={}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CardContent>
        <CardActions sx={styles.buttons}>
          <Button onClick={onEmailConfirm} size="small">
            CONFIRM
          </Button>
          <Button onClick={props.onModalDismiss} size="small">
            CANCEL
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PasswordForgotten;
