import React from "react";
import { TextField , Button, CircularProgress} from "@mui/material";
import {styled} from "@mui/material/styles";
import { useInput } from "@/util/forms";
// import { Toast } from "@/util/notifications";
import { Auth } from "aws-amplify";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Field = styled(TextField)({
  margin: "10px 0",
});

const Link = styled(NextLink)({
  margin: "15px 0",
  textAlign: "right",
});


const SignIn: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter()

  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(email, password);
      console.log()
      // Toast("Success!!", "Login Successfully", "success");
      // history.push("/");
    } catch (error) {
      // Toast("Error!!", error.message, "danger");
    }
    setLoading(false);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onSubmit={handleSubmit}
    >
      <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
        {" "}
                Sign in to an existing account
      </h1>
      <Field label="Email" {...bindEmail} type="email" />
      <Field label="Password" type="password" {...bindPassword} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={loading}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
                Login to Your Account
      </Button>
      <Link href={`${router.basePath}/signup`}>Make a new account &rarr;</Link>
    </form>
  );
};

export default SignIn;
