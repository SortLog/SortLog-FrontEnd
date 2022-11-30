import { useCallback, useEffect, useState } from "react";
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
import NextLink from "next/link";
import { getInitials } from "@/utils/get-initials";
import { ArrowRight as ArrowRightIcon } from "@/icons/arrow-right";
import * as historyApi from "@/services/api/history";
import { useMounted } from "@/hooks/use-mounted";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import moment from "moment";

// row component showing each history
const HistoryRow = (props: { history: any }) => {
  const { history } = props;

  return (
    <TableRow
      key={history._id}
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
        <NextLink href={`/dashboard/historyForm/${history._id}`} passHref>
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
              {getInitials(history.users.name)}
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
          <Typography variant="subtitle2">Items</Typography>
          <Typography color="textSecondary" variant="body2">
            {history.items[0].name + "..."}
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
          <Typography variant="subtitle2">Total QTY</Typography>
          <Typography variant="body2">
            {"x "}
            {history.changeQuantities.reduce(
              (sum: any, changeQuantities: any) => sum + changeQuantities,
              0
            )}
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
            {moment(history.createdAt).fromNow()}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        ></Box>
      </TableCell>
      <TableCell align="right">
        <NextLink href={`/dashboard/historyForm/${history._id}`} passHref>
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
  const [histories, setHistories] = useState<any>([]);

  const getHistories = useCallback(async () => {
    try {
      const { data } = await historyApi.getHistories();

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

  return (
    <Container maxWidth="lg" color="background">
      <Box
        sx={{
          flexGrow: 1,
          mx: 1,
          pl: 10,
          width: "100%",
          backgroundColor: "background.default",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={4} marginTop="20px" justifyContent="space-between">
          <Typography variant="h3" component="h3" marginBottom={3}>
            History
          </Typography>
          <NextLink href={"/dashboard/inbound"} passHref>
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{ backgroundColor: "#e70a3e", height: 40 }}
            >
              INBOUND / OUTBOUND
            </Button>
          </NextLink>
        </Grid>

        <Grid container spacing={2} sx={{ pl: 1, minWidth: 600, mb: 5 }} className={"searchBox"}>
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
            {paginatedHistories.map((history: { _id: React.Key | null | undefined }) => (
              <HistoryRow history={history} key={history._id} />
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
