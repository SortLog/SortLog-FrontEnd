import Container from "@mui/material/Container";
import OrganizeInventory from "@/components/HeroSection/OrganizeInventory";
import AccessInventory from "@/components/HeroSection/AccessInventory";
import GetReporting from "@/components/HeroSection/GetReporting";
import SyncInventory from "@/components/HeroSection/SyncInventory";
import BusinessPartner from "@/components/HeroSection/BussinessPartner";
import Download from "@/components/HeroSection/Download";
import Pricing from "@/components/HeroSection/Pricing";
import GetStart from "@/components/HeroSection/GetStart";
import About from "@/components/HeroSection/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function index() {
  return (
<<<<<<< HEAD
    <>
      <Header />
      <Container>
        <OrganizeInventory />
        <BusinessPartner />
        <AccessInventory />
        <GetReporting />
        <SyncInventory />
        <Download />
        <Pricing />
        <About />
        <GetStart />
      </Container>
      <Footer />
    </>
=======
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
>>>>>>> e52efb0 (complete the structure of the issue About page)
  );
}

export default index;
