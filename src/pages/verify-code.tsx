import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Card, Divider, Link, Typography } from "@mui/material";
import { AmplifyVerifyCode } from "@/components/authentation/amplify-verify-code";
import { Logo } from "@/components/logo";
import { useAuth } from "@/hooks/use-auth";

const VerifyCode = () => {
  const router = useRouter();
  const { platform } = useAuth();
  const { disableGuard } = router.query;

  return (
    <>
      <Head>
        <title>Verify Code | Creatalog</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Card elevation={16} sx={{ p: 4 }}>
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
            <Typography variant="h4">Verify Code</Typography>
            <Typography color="textSecondary" sx={{ mt: 2 }} variant="body2">
              Confirm registration using your verification code
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              mt: 3,
            }}
          >
            {platform === "Amplify" && <AmplifyVerifyCode />}
          </Box>
          <Divider sx={{ my: 3 }} />
          {platform === "Amplify" && (
            <div>
              <NextLink
                href={
                  disableGuard
                    ? `/login?disableGuard=${disableGuard}`
                    : "/login"
                }
                passHref
              >
                <Link color="textSecondary" variant="body2">
                  Did you not receive the code?
                </Link>
              </NextLink>
            </div>
          )}
        </Card>
      </Box>
    </>
  );
};

export default VerifyCode;
