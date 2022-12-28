import React from "react";
import { useState, useCallback } from "react";
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
    textAlign: "center",
    fontSize: 24,
    marginBottom: 5,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    width: "50%",
    left: "25%",
    marginBottom: 5,
  },
  buttons: {
    marginBottom: 5,
    display: "flex",
    justifyContent: "space-around",
  },
};

const PasswordForgotten = (props: any) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  // const [isSaveClicked, setIsSaveClicked] = useState(false);

  const onEmailConfirm = () => {
    Auth.forgotPassword(email)
      .then(() => {
        setIsConfirmClicked(true);

        toast.success("A verification code has been sent to your email");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const onNewInfoSaved = () => {
    Auth.forgotPasswordSubmit(email, code, newPassword)
      .then(() => {
        setIsConfirmClicked(false);
        toast.success("New password updated");
        props.onModalDismiss;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div style={styles.background} onClick={props.onModalDismiss}></div>
      {isConfirmClicked ? (
        <Card sx={styles.card}>
        <CardContent sx={styles.content}>
          <Typography sx={styles.title} color="textSecondary" gutterBottom>
            Your verification code and new password are required
          </Typography>
          <TextField
              disabled
              sx={styles.text}
              required
              id="outlined-required"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                readOnly: true,
              }}
            />
          <TextField
            sx={styles.text}
            required
            id="outlined-required"
            label="verification code"
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            sx={styles.text}
            required
            id="outlined-required"
            label="new password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </CardContent>
        <CardActions sx={styles.buttons}>
          <Button onClick={onNewInfoSaved} size="small">
            SAVE
          </Button>
          <Button onClick={props.onModalDismiss} size="small">
            CANCEL
          </Button>
        </CardActions>
      </Card>
      ) : (
        <Card sx={styles.card}>
          <CardContent sx={styles.content}>
            <Typography sx={styles.title} color="textSecondary" gutterBottom>
              Your email address is required
            </Typography>
            <TextField
              sx={styles.text}
              required
              id="outlined-required"
              label="Email"
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
      )}
    </>
  );
};

export default PasswordForgotten;
