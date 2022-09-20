import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  clear,
  incrementByAmount,
  changeCounter,
} from "@/store/reducer/counterSlice";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Store: NextPage = () => {
  const count = useSelector(changeCounter);
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {count}
        </Typography>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(100))}>Plus 100</Button>
        <Button onClick={() => dispatch(clear())}>Clear</Button>
      </Box>
    </Container>
  );
};

export default Store;
