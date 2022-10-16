import * as React from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Calendar as CalendarIcon } from "../icons/calendar";
import { ChevronDown as ChevronDownIcon } from "../icons/chevron-down";
import { PencilAlt as PencilAltIcon } from "../icons/pencil-alt";
import NextLink from "next/link";
export default function trackingForm() {
  return (
    <>
      <Box sx={{ flexGrow: 1, mx: 1, width: "95%" }}>
        <Box sx={{ mb: 4 }}>
          <NextLink href="/history" passHref>
            <Link
              color="textPrimary"
              component="a"
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <ArrowBackIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="subtitle2">history</Typography>
            </Link>
          </NextLink>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography variant="h4">Tracking Form in development</Typography>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  ml: -1,
                  mt: 1,
                }}
              >
                <CalendarIcon color="action" fontSize="small" sx={{ ml: 1 }} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  08/10/2022 14:11
                  {/* {format(order.createdAt, 'dd/MM/yyyy HH:mm')} */}
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ ml: -2 }}>
              <Button
                endIcon={<PencilAltIcon fontSize="small" />}
                variant="outlined"
                sx={{ ml: 2 }}
              >
                Edit
              </Button>
              <Button
                endIcon={<ChevronDownIcon fontSize="small" />}
                variant="contained"
                sx={{ ml: 2 }}
              >
                Action
              </Button>
            </Grid>
          </Grid>
        </Box>
        {/* <Box>
          <OrderCheckIn />
        </Box>
        <Box>
          <OrderCheckOut />
        </Box> */}
      </Box>
    </>
  );
}
