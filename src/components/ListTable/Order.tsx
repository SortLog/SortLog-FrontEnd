import * as React from "react";
import { Avatar, Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import Head from "next/head";
import OrderTable from "./OrderTable";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import * as historyApi from "@/services/api/history";
import NextClientOnly from "../NextClientOnly";

export default function Order(props: any) {
  const { order: history, setOrder } = props;
  if (!history) {
    return null;
  }
  return (
    <NextClientOnly>
      <Head>
        <title>Dashboard: Processing</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mx: 1,
          width: "95%",
          backgroundColor: "background.default",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 3 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid
                item
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Avatar
                  sx={{
                    height: 42,
                    mr: 2,
                    width: 42,
                  }}
                >
                  history.user.name
                </Avatar>
                <div>
                  <Typography variant="h4">{history.trackingNumber}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="textSecondary" variant="body2">
                      history.user.name
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item sx={{ m: 0 }}>
                <Typography>{"<Preview>"}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3 }} />
          </Box>
          <OrderTable history={history} />
          <Grid container sx={{ mt: 1 }} justifyContent="flex-end">
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              sx={{ mr: 2 }}
              onClick={() => setOrder(undefined)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              onClick={async () => {
                const { data: list } = await historyApi.listHistorys();
                const trackingNumber = `000${list.length + 1}`.slice(-3);
                await historyApi.postHistory({
                  ...history,
                  trackingNumber: history.trackingNumber + trackingNumber,
                });
                window.location.reload();
              }}
            >
              Process
            </Button>
          </Grid>
        </Container>
      </Box>
    </NextClientOnly>
  );
}
