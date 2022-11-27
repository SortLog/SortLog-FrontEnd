import { Fragment, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Avatar,
  IconButton,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TablePagination,
  Container,
} from "@mui/material";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import { format } from "date-fns";
import NextLink from "next/link";
import { getInitials } from "@/utils/get-initials";
import { ArrowRight as ArrowRightIcon } from "@/icons/arrow-right";
import { addDays, subHours } from "date-fns";

const now = new Date();

const groupHistories = (histories: any[]) =>
  histories.reduce(
    (acc, history) => {
      const { status } = history;

      return {
        ...acc,
        [status]: [...acc[status], history],
      };
    },
    {
      Pending: [],
      Done: [],
      Canceled: [],
    }
  );
// row component showing each history
const HistoryRow = (props: { history: any }) => {
  const { history } = props;

  return (
    <TableRow
      key={history.id}
      sx={{
        boxShadow: 1,
        transition: (theme) =>
          theme.transitions.create("box-shadow", {
            easing: theme.transitions.easing.easeOut,
          }),
        "&:hover": {
          boxShadow: 100,
        },
        "& > td": {
          backgroundColor: "primary",
          borderBottom: 0,
        },
      }}
    >
      <TableCell width="25%">
        <NextLink href="/dashboard/history-form" passHref>
          <Box
            component="a"
            sx={{
              alignItems: "center",
              display: "inline-flex",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <Avatar
              sx={{
                height: 42,
                width: 42,
              }}
            >
              {getInitials(history.user.name)}
            </Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                {history.trackingNumber}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {history.itemName}
              </Typography>
            </Box>
          </Box>
        </NextLink>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle2">Total QTY</Typography>
          <Typography variant="body2">
            {"x "}
            {history.totalQTY}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle2">Creat Date</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.createDate && format(history.createDate, "dd/MM/yyyy")}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle2">Finish Date</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.finishDate && format(history.finishDate, "dd/MM/yyyy")}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <NextLink href="/dashboard/history/history-form" passHref>
          <IconButton component="a">
            <ArrowRightIcon fontSize="small" />
          </IconButton>
        </NextLink>
      </TableCell>
    </TableRow>
  );
};

export default function history() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  /* fake data */
  const histories = [
    {
      id: "5ecb868d0f437390ef3ac62c",
      itemName: "Apple",
      SKU: "a00001",
      user: {
        email: "11111@sortlog.com",
        name: "TOM JACKY",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Inbound-001",
      status: "Done",
      totalQTY: 55,
    },
    {
      id: "59d78b0b0e15394130c373ff",
      itemName: "Pear",
      SKU: "a00002",
      user: {
        email: "22222@sortlog.com",
        name: "Sunny Copper",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Inbound-002",
      status: "Done",
      totalQTY: 555,
    },
    ,
    {
      id: "2a05e7f757c35fe823da3c5a",
      itemName: "Ball",
      SKU: "a00003",
      user: {
        email: "33333@sortlog.com",
        name: "Zac Lee",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Outbound-001",
      status: "Done",
      totalQTY: 5555,
    },
    {
      id: "5ecb868ada8deedee0638502",
      itemName: "Milk",
      SKU: "b00001",
      user: {
        email: "44444@sortlog.com",
        name: "Ayden Chuck",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Inbound-003",
      status: "Pending",
      totalQTY: 99,
    },
    {
      id: "750f519b8bc4d21af9528437",
      itemName: "Ham",
      SKU: "a00006",
      user: {
        email: "66666@sortlog.com",
        name: "Any How",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Inbound-006",
      status: "Pending",
      totalQTY: 100,
    },
    {
      id: "5ecb868700aba84d0f1c0e48",
      itemName: "Can",
      SKU: "a00008",
      user: {
        email: "88888@sortlog.com",
        name: "Harry Tommy",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Outbound-001",
      status: "Canceled",
      totalQTY: 55,
    },
    {
      id: "5ecb8682038e1rl239438dks1",
      itemName: "Meat",
      SKU: "a00012",
      user: {
        email: "121212@sortlog.com",
        name: "Ian Hank",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Inbound-011",
      status: "Canceled",
      totalQTY: 100,
    },
    {
      id: "5ecb8682038e1ddf4e868764",
      itemName: "Toy",
      SKU: "c00001",
      user: {
        email: "99999@sortlog.com",
        name: "Hello World",
      },
      finishDate: addDays(now, 5).getTime(),
      createDate: subHours(now, 1).getTime(),
      trackingNumber: "Outbound-002",
      status: "Canceled",
      totalQTY: 1,
    },
  ];

  const handlePageChange = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };
  const handleRowsPerPageChange = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const applyPagination = (histories: any[], page: number, rowsPerPage: number) =>
    histories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const paginatedHistories = applyPagination(histories, page, rowsPerPage);

  const groupedHistories = groupHistories(paginatedHistories);

  return (
    <Container maxWidth="lg" color="background">
      <Box
        sx={{
          flexGrow: 1,
          mx: 1,
          backgroundColor: "background.default",
          overflow: "hidden",
        }}
      >
        <Box className={"Header"}>
          <Typography variant="h3" component="h3" marginLeft={1}>
            History
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ pl: 1, minWidth: 600 }} className={"searchBox"}>
          <Grid item xs>
            <TextField
              fullWidth
              id="standard-basic"
              label="search history..."
              variant="standard"
              color="primary"
            />
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="flex-end" pr={1} minWidth={160}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="flex-end" pr={1} minWidth={160}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Finish Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: (theme) => `0 ${theme.spacing(3)}`,
            minWidth: 600,
            marginTop: (theme) => `-${theme.spacing(3)}`,
            p: "1px",
          }}
        >
          <TableBody>
            {Object.keys(groupedHistories).map((status) => (
              <Fragment key={status}>
                <TableRow>
                  <TableCell colSpan={5} sx={{ px: 0 }}>
                    <Typography color="textSecondary" variant="h6">
                      {status.charAt(0).toUpperCase() + status.slice(1)} (
                      {groupedHistories[status].length})
                    </Typography>
                  </TableCell>
                </TableRow>
                {groupedHistories[status].map((history: { id: React.Key | null | undefined }) => (
                  <HistoryRow history={history} key={history.id} />
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={histories.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Box>
    </Container>
  );
}
