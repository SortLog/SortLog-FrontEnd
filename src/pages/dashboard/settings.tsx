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

export default function SimpleContainer() {
  const [firstName, setFirstName] = useState("");

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
              label="First Name"
              defaultValue=""
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              style={cardStyle.textField}
              required
              id="outlined-required"
              label="Last Name"
              defaultValue=""
            />
            <TextField
              style={cardStyle.textField}
              required
              id="outlined-password-input"
              label="Email"
              defaultValue=""
            />
            <TextField
              style={cardStyle.textField}
              required
              id="outlined-read-only-input"
              label="Company Name"
              defaultValue=""
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              const user = {
                id: "63343af774e468a1647f3e54",
                name: "user2",
                email: "user2@gmail.com",
                provider: "company2",
                photoUrl:
                  "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5288da3d-c702-41ee-9ddc-5ec8e031b81d%2FCopie_de_outils_(3).png?table=block&id=6010cc1c-8cee-40af-8ac5-8a54ab836ff9&spaceId=6ebdc1e4-1ee0-4f5b-bc89-25b5e1c54c81&width=250&userId=70765e0b-1374-4e1d-a7fb-bfef8fa25448&cache=v2",
                contactType: "email",
                phone: "20391230",
              };
              userApi.putUser(
                user.id,
                user.email,
                firstName,
                user.provider,
                user.photoUrl,
                user.contactType,
                user.phone
              );
            }}
          >
            SAVE CHANGES
          </Button>
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
              defaultValue=""
            />
            <TextField
              style={cardStyle.textField}
              required
              id="outlined-required"
              label="New Password"
              defaultValue=""
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
