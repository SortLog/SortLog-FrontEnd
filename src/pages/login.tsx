import {
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import { styled } from '@mui/material/styles'
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useInput } from "@/util/forms";
// import { Toast } from "@/util/notifications";
import { Auth } from "aws-amplify";
  
const StyledTextField = styled(TextField)({
  borderRadius: '5px',
  background: 'transparent'
  
})
  
const SignIn: React.FC = () => {
  
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  
  const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    try {
      const res = await Auth.signIn(email, password);
      console.log(res)
    } catch (error) {
    }
  };
  
  
  return (
    <Grid container component="main" sx={{ height: "100vh", flexWrap: "wrap" }} spacing={2}>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        alignItems="center"
        display="flex"
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Image
              src="/png/favicon.png"
              width={32}
              height={32}
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </Box>
          <Typography component="h1" variant="h2" sx={{ mb: 1 }}>
              Welcome Back!
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
              Log in to your account.
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              onChange={event => bindPassword.onChange(event)}
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
              <Typography component='span' sx={{color: 'text.secondary'}}>OR</Typography>
              <hr />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, bgcolor: "background.default", color: "text.primary", display:'flex', borderColor: 'neutral.300' }}
            >
              <FcGoogle fontSize={22} style={{justifySelf: 'flex-start' }}/>
              <Typography component='p' sx={{margin: '0 auto'}}>Sign in via Google</Typography>
            </Button>
            <Box display='flex' justifyContent='center'>
              <Typography>
                  New here?&nbsp;
                <Link href="#" variant="body2" color='info.main'>
                  Create an account
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          "&>span": {
            height: "100% !important",
          },
        }}
      >
        <Image
          src="/png/logo-color.png"
          alt="logo"
          width="200"
          height="200"
          layout="responsive"
          style={{ objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
};
  
export default SignIn;