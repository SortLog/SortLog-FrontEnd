import { useState } from "react";
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

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [companyName, setCompanyName] = useState(currentUser.provider);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  return (
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
              label="Old Password"
              // label="Current Password"
              defaultValue=""
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              style={cardStyle.textField}
              required
              id="outlined-required"
              label="New Password"
              defaultValue=""
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CardActions>
            <Button>SAVE CHANGES</Button>
          </CardActions>
          <a style={{ margin: "0 30px", textDecoration: "none" }} href="#">
            Forgot password?
          </a>
        </div>
      </Card>
    </Container>
  );
}
