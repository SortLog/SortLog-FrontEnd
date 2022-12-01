import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Card,
  Divider,
  Link,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "@/hooks/use-auth";
import { useMounted } from "@/hooks/use-mounted";
import Head from "next/head";
import NextLink from "next/link";
import { Logo } from "@/components/logo";
import toast from "react-hot-toast";

export const AmplifyRegister = (props: any) => {
  const isMounted = useMounted();
  const router = useRouter();
  const { register } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      policy: true,
      name: "",
      provider: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().min(7).max(255).required("Password is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: async (values: any, helpers: any) => {
      try {
        // register by Cognito
        await register(values.email, values.password);
        // store current user info to localstorage
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            email: values.email,
            password: values.password,
            name: values.name,
            provider: values.provider,
          })
        );
        console.log("localstorage save userinfo", localStorage.getItem("userInfo"));
        if (isMounted()) {
          router.push("/verify-code").catch(console.error);
        }
      } catch (err: any) {
        console.error(err);
        toast.error(err.message);
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    },
  });
  /* eslint-disable indent */
  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        // helperText={`${formik.touched.email && formik.errors.email}`}
        label="Email Address"
        margin="normal"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
      />
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        // helperText={`${formik.touched.password && formik.errors.password}`}
        label="Password"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
      />
      <TextField
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        label="Name"
        margin="normal"
        name="name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        // helperText={`${formik.touched.email && formik.errors.email}`}
        label="Company Name"
        margin="normal"
        name="provider"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.provider}
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          ml: -1,
          mt: 2,
        }}
      >
        <Checkbox checked={formik.values.policy} name="policy" onChange={formik.handleChange} />
        <Typography color="textSecondary" variant="body2">
          I have read the{" "}
          <Link component="a" href="#">
            Terms and Conditions
          </Link>
        </Typography>
      </Box>
      {Boolean(formik.touched.policy && formik.errors.policy) && (
        <FormHelperText error>
          <>{formik.errors.policy}</>
        </FormHelperText>
      )}
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>
            <>{formik.errors.submit}</>
          </FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

const Register = () => {
  const router = useRouter();
  const { disableGuard } = router.query;

  // @ts-ignore
  return (
    <>
      <Head>
        <title>Register | SortLog </title>
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
          <Card square sx={{ p: 4 }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
              <Typography variant="h4">Register</Typography>
              <Typography color="textSecondary" component="p" sx={{ mb: 2 }}>
                Register on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <AmplifyRegister />
            </Box>
            <Divider sx={{ my: 3 }} />
            <div>
              <NextLink
                href={disableGuard ? `/login?disableGuard=${disableGuard}` : "/login"}
                passHref
              >
                <Link color="textSecondary" variant="body2">
                  Having an account
                </Link>
              </NextLink>
            </div>
          </Card>
          <Card square sx={{ display: "flex", backgroundColor: "#f6f8f9" }}>
            <Box
              sx={{
                my: 4,
                mx: 4,
                Height: "100%",
                display: "flex",
              }}
            >
              <img
                src="./png/logo-no-background.png"
                alt="logo"
                style={{ width: "100%", minWidth: "200px", objectFit: "contain" }}
              />
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Register;
