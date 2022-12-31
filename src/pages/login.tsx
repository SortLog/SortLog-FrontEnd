import { TextField, Button, Card, Box, Paper, Typography, Link, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FcGoogle } from "react-icons/fc";
import { useInput } from "@/util/forms";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/use-auth";
import toast from "react-hot-toast";
import { getUserByEmail } from "@/services/api/users";
import NextLink from "next/link";
import { Logo } from "@/components/logo";
import Head from "next/head";

const StyledTextField = styled(TextField)({
  borderRadius: "5px",
  background: "transparent",
});

const LgIn: React.FC = () => {
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const router = useRouter();
  const { login } = useAuth();
  const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      // get user from mongodb
      // @ts-ignore
      console.log(user);
      const userFromMongo = await getUserByEmail(user.username);
      // @ts-ignore
      console.log("mong" + userFromMongo);
      // set user in localstorage
      localStorage.setItem("userInfo", JSON.stringify(userFromMongo.data));
      localStorage.setItem("currentUser", JSON.stringify(userFromMongo.data));
      // set token to localstorage
      localStorage.setItem("token", user.signInUserSession.idToken.jwtToken);
      localStorage.setItem("cognitoUser", user);
      // redirect to dashboard
      router.push("/dashboard");
      toast.success(user.username + " logged in successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  ``;

  return (
    <>
      <Head>
        <title>Login | SortLog </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
        }}
      >
        <Container sx={{ py: { xs: "60px", md: "120px" }, display: "flex", flexDirection: "row" }}>
          <Card square sx={{ p: 8 }}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <NextLink href="/" passHref>
                <a>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                  />
                </a>
              </NextLink>
              <Typography variant="h4">Welcome Back!</Typography>
              <Typography color="textSecondary" component="p" sx={{ mb: 2 }}>
                Log in to your account.
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <StyledTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="text"
                  autoFocus
                  onChange={(event) => bindEmail.onChange(event)}
                />
                <StyledTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(event) => bindPassword.onChange(event)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "neutral.200", color: "text.primary" }}
                >
                  Continue
                </Button>
                <Box
                  display="flex"
                  sx={{
                    alignItems: "center",
                    "& hr": {
                      flexBasis: "45%",
                      height: 1,
                      bgcolor: "divider",
                    },
                  }}
                >
                  <hr />
                  <Typography component="span" sx={{ color: "text.secondary" }}>
                    OR
                  </Typography>
                  <hr />
                </Box>
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "background.default",
                color: "text.primary",
                display: "flex",
                borderColor: "neutral.300",
              }}
            >
              <FcGoogle fontSize={22} style={{ justifySelf: "flex-start" }} />
              <Typography component="p" sx={{ margin: "0 auto" }}>
                Sign in via Google
              </Typography>
            </Button>
            <Box display="flex" justifyContent="center">
              <Typography>
                New here?&nbsp;
                <Link href="./register" variant="body2" color="info.main">
                  Create an account
                </Link>
              </Typography>
            </Box>
          </Card>
          <Card square sx={{ display: "flex", backgroundColor: "#f6f8f9" }}>
            <Box
              sx={{
                my: 4,
                ml: 12,
                Height: "100%",
                display: "flex",
              }}
            >
              <img
                src="./png/logo-no-background.png"
                alt="logo"
                style={{ width: "80%", minWidth: "200px", objectFit: "contain" }}
              />
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default LgIn;
