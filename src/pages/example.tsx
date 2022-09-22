import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { hello, getUser1 } from "@/services/hello";

const Example: NextPage = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [helloData, setHelloData] = useState("");

  useEffect(() => {
    getUser1().then((response) => {
      setCategoriesData(response.data);
    });
  }, []);

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
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            hello().then((response) => {
              setHelloData(response.data);
            });
          }}
        >
          Get Hello Data
        </Button>
        <Typography variant="subtitle1">{JSON.stringify(helloData)}</Typography>
        <Typography variant="h5">Get getUser1:</Typography>
        <Typography variant="subtitle1">{JSON.stringify(categoriesData)}</Typography>
      </Box>
    </Container>
  );
};

export default Example;
