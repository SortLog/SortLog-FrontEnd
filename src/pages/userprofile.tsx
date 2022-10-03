import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const cardStyle = {
  card: {
    margin: "40px",
  },
  cardInput: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "flex-start",
    gap: "10%",
    width: "100%"
  },
  textField: {
    width: "40%",
    margin: "20px 0"
  }
};

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
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
              <TextField style={cardStyle.textField}
                required
                id="outlined-required"
                label="First Name"
                defaultValue=""
              />
              <TextField style={cardStyle.textField}
                required
                id="outlined-required"
                label="Last Name"
                defaultValue=""
              />
              <TextField style={cardStyle.textField}
                required
                id="outlined-password-input"
                label="Email"
                defaultValue=""
              />
              <TextField style={cardStyle.textField}
                required
                id="outlined-read-only-input"
                label="Company Name"
                defaultValue=""
              />
            </div>
          </CardContent>
          <CardActions>
            <Button>SAVE CHANGES</Button>
          </CardActions>
        </Card>
        <Card style={cardStyle.card} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Change Password
            </Typography>
            <div style={cardStyle.cardInput}>
              <TextField style={cardStyle.textField}
                required
                id="outlined-required"
                label="Current Password"
                defaultValue=""
              />
              <TextField style={cardStyle.textField}
                required
                id="outlined-required"
                label="New Password"
                defaultValue=""
              />
            </div>
          </CardContent>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <CardActions>
              <Button>SAVE CHANGES</Button>
            </CardActions>
            <a style={{margin: "0 30px", textDecoration: "none"}} href="#">Forgot password?</a>
          </div>
        </Card>
      </Container>
    </React.Fragment>
  );
}
