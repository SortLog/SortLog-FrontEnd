import { Fragment, useCallback, useEffect, useState } from "react";
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
<<<<<<< HEAD:src/pages/dashboard/history.tsx
import { historyApi } from "../api/history-api";
import { useMounted } from "@/hooks/use-mounted";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
interface histories {
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
[];
||||||| parent of 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
import { addDays, subHours } from "date-fns";
=======
import { addDays, subHours } from "date-fns";
import { historyApi } from "../../api/fake-api/history-api";
import { useMounted } from "@/hooks/use-mounted";

interface histories {
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
[];
>>>>>>> 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx

const now = new Date();

// const groupHistories = (histories: any[]) =>
//   histories.reduce(
//     (acc, history) => {
//       const { status } = history;

//       return {
//         ...acc,
//         [status]: [...acc[status], history],
//       };
//     },
//     {
//       Pending: [],
//       Done: [],
//       Canceled: [],
//     }
//   );

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
              <Typography color="textPrimary" variant="subtitle1">
                {history.trackingNumber}
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
<<<<<<< HEAD:src/pages/dashboard/history.tsx
          <Typography variant="subtitle2">Items</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.items[0].name + ", " + history.items[1].name + "..."}
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
||||||| parent of 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
=======
          <Typography variant="subtitle2">Items</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.items[0].name +", "+ history.items[1].name + "..."}
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
>>>>>>> 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
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
          <Typography variant="subtitle2">Date</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.Date && format(history.Date, "dd/MM/yyyy")}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
<<<<<<< HEAD:src/pages/dashboard/history.tsx
        ></Box>
||||||| parent of 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
        >
          <Typography variant="subtitle2">Finish Date</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.finishDate && format(history.finishDate, "dd/MM/yyyy")}
          </Typography>
        </Box>
=======
        >
        </Box>
>>>>>>> 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
      </TableCell>
      <TableCell align="right">
        <NextLink href="/dashboard/history-form" passHref>
          <IconButton component="a">
            <ArrowRightIcon fontSize="small" />
          </IconButton>
        </NextLink>
      </TableCell>
    </TableRow>
  );
};

export default function history() {
  const isMounted = useMounted();
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [histories, setHistories] = useState<histories[]>([]);

  const getHistories = useCallback(async () => {
    try {
      const data = await historyApi.getHistories();

      if (isMounted()) {
        setHistories(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getHistories();
  }, []);

  const handlePageChange = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };
  const handleRowsPerPageChange = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const applyPagination = (histories: any[], page: number, rowsPerPage: number) =>
    histories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const paginatedHistories = applyPagination(histories, page, rowsPerPage);

  // const groupedHistories = groupHistories(paginatedHistories);

  return (
    <Container maxWidth="lg" color="background">
      <Box
        sx={{
          flexGrow: 1,
          mx: 1,
          pl: 10,
          width: "95%",
          backgroundColor: "background.default",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={6} paddingTop="60px" justifyContent="space-between">
          <Typography variant="h3" component="h3" marginLeft={1}>
            History
          </Typography>
<<<<<<< HEAD:src/pages/dashboard/history.tsx
          <NextLink href={"/dashboard/inbound"} passHref>
            <Button variant="contained" startIcon={<Add />} sx={{ backgroundColor: "#e70a3e" }}>
              ADD NEW
            </Button>
          </NextLink>
        </Grid>

        <Grid container spacing={2} sx={{ pl: 1, minWidth: 600, mb: 5 }} className={"searchBox"}>
||||||| parent of 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
        </Box>
        <Grid container spacing={2} sx={{ pl: 1, minWidth: 600 }} className={"searchBox"}>
=======
        </Box>
        <Grid container spacing={2} sx={{ pl: 1, minWidth: 600 , mb: 5}} className={"searchBox"}>
>>>>>>> 518a095 (update history page without states, change history data source from fakeAPI file):src/pages/dashboard/history/index.tsx
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
            {paginatedHistories.map((history: { id: React.Key | null | undefined }) => (
              <HistoryRow history={history} key={history.id} />
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
