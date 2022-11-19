import * as React from "react";
import { useMounted } from "@/hooks/use-mounted";
import { useCallback, useEffect, useState } from "react";
import { Avatar, Box, Button, Container, Dialog, Divider, Grid, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Calendar as CalendarIcon } from "../../../icons/calendar";
import { ChevronDown as ChevronDownIcon } from "../../../icons/chevron-down";
import { PencilAlt as PencilAltIcon } from "../../../icons/pencil-alt";
import NextLink from "next/link";
import Head from "next/head";
import { historyApi } from "../../api/fake-api/history-api";
import { getInitials } from "@/utils/get-initials";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { HistoryPDF } from "./history-form-pdf";
import { HistoryPreview } from "./history-preview";

interface History {
  id: string;
  trackingNumber: string;
  status: string;
  Date: number;
  totalQTY: number;
  items: {
    SKU: string;
    name: string;
    Price: number;
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
        <title>Dashboard: History Form Page</title>
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
            <Box sx={{ mb: 4 }}>
              <NextLink href="/dashboard/history" passHref>
                <Link color="textPrimary" variant="subtitle2">
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <ArrowBackIcon fontSize="small" sx={{ mr: 1 }} />
                    <Typography variant="subtitle2">Histories</Typography>
                  </Box>
                </Link>
              </NextLink>
            </Box>
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
                <Button onClick={() => setViewPDF(true)} sx={{ m: 1 }} variant="outlined">
                  Preview
                </Button>
                <PDFDownloadLink
                  document={<HistoryPDF history={history} />}
                  fileName="history"
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary" sx={{ m: 1 }} variant="contained">
                    Download
                  </Button>
                </PDFDownloadLink>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3 }} />
          </Box>
          <HistoryPreview history={history} />
        </Container>
      </Box>
      <Dialog
        fullScreen
        open={viewPDF}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box
            sx={{
              backgroundColor: 'background.default',
              p: 2
            }}
          >
            <Button
              startIcon={<ArrowBackIcon fontSize="small" />}
              onClick={() => setViewPDF(false)}
              variant="contained"
            >
              Back
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <PDFViewer
              height="100%"
              style={{ border: 'none' }}
              width="100%"
            >
              <HistoryPDF history={history} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}