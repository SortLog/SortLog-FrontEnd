import { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as userApi from "@/services/api/users";
import toast from "react-hot-toast";
import { Auth } from "@aws-amplify/auth";
import PasswordForgotten from "../../components/PasswordForgottenHandler/passwordForgotten";

const cardStyle = {
  card: {
    margin: "40px",
  },
  cardInput: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "flex-start",
    gap: "10%",
    width: "100%",
  },
  textField: {
    width: "40%",
    margin: "20px 0",
  },
};

export default function setting() {
  // @ts-ignore
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const user = async () => await Auth.currentUserInfo();

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        console.log(user);
        setCognitoUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  // const getCognitoUser = ()=>{
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  //   })
  //     .then((user) => {console.log(user);
  //     setCognitoUser(user)})
  //     .catch((err) => console.log(err));
  // }

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [companyName, setCompanyName] = useState(currentUser.provider);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cognitoUser, setCognitoUser] = useState("");

  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);

  const onPersonalInfoSaveChangesButton = () => {
    console.log("change user info" + currentUser);
    currentUser.name = name;
    currentUser.provider = companyName;
    try {
      userApi.putUser(currentUser._id, currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      toast.success("Personal info updated successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onPasswordSaveChangesButton = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        if (currentPassword === newPassword) {
          toast.error("New password should not be same as current password");
        } else {
          return Auth.changePassword(cognitoUser, currentPassword, newPassword);
        }
      })
      .then((data) => {
        console.log(data);
        toast.success("Password changed");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      {isForgotPasswordClicked && (
        <PasswordForgotten
          onModalDismiss={() => {
            setIsForgotPasswordClicked(false);
          }}
        />
      )}
      <Container maxWidth="md">
        <Box sx={{ width: "100%", maxWidth: 500 }} />
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          User Profile
        </Typography>
        <Divider variant="middle" />
        <Card style={cardStyle.card} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Personal Information
            </Typography>
            <div style={cardStyle.cardInput}>
              <TextField
                style={cardStyle.textField}
                required
                id="outlined-required"
                label="Name"
                defaultValue={currentUser.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                style={cardStyle.textField}
                required
                inputProps={{ readOnly: true }}
                id="outlined-password-input"
                label="Email"
                defaultValue={currentUser.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                style={cardStyle.textField}
                required
                id="outlined-read-only-input"
                label="Company Name"
                defaultValue={currentUser.provider}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={onPersonalInfoSaveChangesButton}>SAVE CHANGES</Button>
          </CardActions>
        </Card>
        <Card style={cardStyle.card} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Change Password
            </Typography>
            <div style={cardStyle.cardInput}>
              <TextField
                style={cardStyle.textField}
                required
                id="outlined-required"
                label="Current Password"
                type="password"
                defaultValue=""
                onChange={(e) => setCurrentPassword(e.target.value)}
                value={currentPassword}
              />
              <TextField
                style={cardStyle.textField}
                required
                id="outlined-required"
                label="New Password"
                type="password"
                defaultValue=""
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>
          </CardContent>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <CardActions>
              <Button onClick={onPasswordSaveChangesButton}>SAVE CHANGES</Button>
            </CardActions>
            <Button
              sx={{ margin: "0 30px", textDecoration: "none" }}
              onClick={() => {
                setIsForgotPasswordClicked(true);
              }}
            >
              Forgot password?
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
