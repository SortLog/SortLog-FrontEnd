import * as React from "react";
import { useMounted } from "@/hooks/use-mounted";
import { useCallback, useEffect, useState } from "react";
import { Avatar, Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { historyApi } from "@/pages/api/history-api";
import { getInitials } from "@/utils/get-initials";
import HistoryPreview from "@/components/History/history-preview";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface History {
  id: string;
  trackingNumber: string;
  status: string;
  Date: number;
  totalQTY: number;
  items: {
    SKU: string;
    name: string;
    price: number;
    QTY: number;
  }[];
  user: {
    companyName: string;
    email: string;
    name: string;
  };
}

export default function historyForm() {
  const isMounted = useMounted();
  const [history, setHistory] = useState<History>();
  const [viewPDF, setViewPDF] = useState(false);

  const getHistory = useCallback(async () => {
    try {
      const history = await historyApi.getHistory();

      if (isMounted()) {
        setHistory(history);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getHistory();
  }, []);

  if (!history) {
    return null;
  }
  return (
    <>
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
                  {getInitials(history.user.name)}
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
                      {history.user.name}
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
          <HistoryPreview history={history} />
          <Grid container sx={{ mt: 1 }} justifyContent="flex-end">
            <Button variant="outlined" startIcon={<CancelIcon />} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>
              Process
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
