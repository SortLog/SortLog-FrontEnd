import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Badge,
  Card,
  Grid,
  Fab,
  InputAdornment,
  TextField,
  Typography,
  SwipeableDrawer,
  SpeedDial,
} from "@mui/material";
import { PlaylistAdd, Search } from "@mui/icons-material";
import { CustomerListTable } from "@/components/ListTable";
import { useMounted } from "../../hooks/use-mounted";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as itemApi from "../../services/api/items";
import ItemCard from "./ItemCard";
import Dialog from "@/components/ListTable/Dialog";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";

const sortOptions = [
  {
    label: "Last update (newest)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest)",
    value: "updatedAt|asc",
  },
];

const applyFilters = (customers: any, filters: any) =>
  customers.filter((customer: any) => {
    if (filters.query) {
      let queryMatched = false;
      const properties = ["email", "name"];

      properties.forEach((property) => {
        if (customer[property].toLowerCase().includes(filters.query.toLowerCase())) {
          queryMatched = true;
        }
      });

      if (!queryMatched) {
        return false;
      }
    }

    if (filters.hasAcceptedMarketing && !customer.hasAcceptedMarketing) {
      return false;
    }

    if (filters.isProspect && !customer.isProspect) {
      return false;
    }

    if (filters.isReturning && !customer.isReturning) {
      return false;
    }

    return true;
  });

const descendingComparator = (a: any, b: any, sortBy: any) => {
  if (b[sortBy] < a[sortBy]) {
    return -1;
  }

  if (b[sortBy] > a[sortBy]) {
    return 1;
  }

  return 0;
};

const getComparator = (sortDir: any, sortBy: any) =>
  sortDir === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, sortBy)
    : (a: any, b: any) => -descendingComparator(a, b, sortBy);

const applySort = (customers: any, sort: any) => {
  const [sortBy, sortDir] = sort.split("|");
  const comparator = getComparator(sortDir, sortBy);
  const stabilizedThis = customers.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const newOrder = comparator(a[0], b[0]);
    if (newOrder !== 0) {
      return newOrder;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
};

const applyPagination = (customers: any, page: any, rowsPerPage: any) =>
  customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

const Bound = (props: any) => {
  const { type } = props;
  const isMounted = useMounted();
  const queryRef = useRef(null);
  const [customers, setCustomers] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [selectedItems, setSelectedItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogComfirmFunc, setDialogComfirmFunc] = useState(() => {});
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);

  const [filters, setFilters] = useState({
    query: "",
    hasAcceptedMarketing: undefined,
    isProspect: undefined,
    isReturning: undefined,
  });

  function up1stLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getOrders = useCallback(async () => {
    try {
      const { data }: any = await itemApi.listItems();
      const mappedData = data.map((item: any) => ({
        ...item,
        change: 1,
      }));
      setCustomers(mappedData);
      if (isMounted()) {
        setCustomers(mappedData);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getOrders();
  }, []);

  const handleQueryChange = (event: any) => {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      query: "",
    }));
  };

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  const addButton = () => {
    // @ts-ignore
    let selected = customers.filter((customer: any) => selectedItems.includes(customer._id));
    // add to cart, no duplicate
    let newCart: any = [...cart];
    newCart = newCart.map((item: any) => {
      const found = selected.find((s: any) => s._id === item._id);
      if (found) {
        selected = selected.filter((s: any) => s._id !== item._id);
        return {
          ...item,
          change: item.change,
        };
      }
      return item;
    });
    newCart = [...newCart, ...selected];
    setCart(newCart);
  };

  // Usually query is done on backend with indexing solutions
  const filteredCustomers = applyFilters(customers, filters);
  const sortedCustomers = applySort(filteredCustomers, sort);
  const paginatedCustomers = applyPagination(sortedCustomers, page, rowsPerPage);

  // @ts-ignore
  return (
    <>
      <Head>
        <title>{up1stLetter(type)}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          mx: 4,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography variant="h4">{up1stLetter(type)}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              m: -1.5,
              p: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleQueryChange}
              sx={{
                flexGrow: 1,
                m: 1.5,
              }}
            >
              <TextField
                defaultValue=""
                fullWidth
                inputProps={{ ref: queryRef }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Items"
              />
            </Box>
            <TextField
              label="Sort By"
              name="sort"
              onChange={handleSortChange}
              select
              SelectProps={{ native: true }}
              sx={{ m: 1.5 }}
              value={sort}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <CustomerListTable
            tab={type}
            customers={paginatedCustomers}
            setCustomers={setCustomers}
            customersCount={filteredCustomers.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            rowsPerPage={rowsPerPage}
            page={page}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </Card>
        <Grid container justifyContent="space-between" spacing={3} sx={{ mt: 0 }}>
          <Grid item />
          <Grid item>
            <Button
              startIcon={<PlaylistAdd fontSize="small" />}
              variant="contained"
              onClick={addButton}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
      <SpeedDial
        ariaLabel="cart"
        sx={{ position: "absolute", bottom: 24, right: 24 }}
        icon={
          <Badge badgeContent={cart.length}>
            <ShoppingCartIcon sx={{ color: "#fff" }} />
          </Badge>
        }
        onClick={() => setOpenCart(true)}
      />
      <SwipeableDrawer
        anchor="right"
        open={openCart}
        onClose={() => setOpenCart(false)}
        onOpen={() => setOpenCart(true)}
        sx={{}}
      >
        <Box sx={{ mx: 3, my: 3 }}>
          {cart.length > 0 ? (
            <>
              {cart.map((item: any) => (
                <Box sx={{ mt: 3, width: 300 }} key={item.id} id={item.id}>
                  <ItemCard
                    data={item}
                    // @ts-ignore
                    onRemove={() => setCart(cart.filter((c) => c._id !== item._id))}
                  />
                </Box>
              ))}
              <Fab
                color="error"
                sx={{ position: "absolute", bottom: 24, right: 96 }}
                onClick={() => setCart([])}
              >
                <CleaningServicesIcon sx={{ color: "#fff" }} />
              </Fab>
              <Fab
                color="success"
                sx={{ position: "absolute", bottom: 24, right: 24 }}
                onClick={() => setOpenCart(true)}
              >
                <CallMissedOutgoingIcon sx={{ color: "#fff" }} />
              </Fab>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ mt: 3, mr: 3, width: 300 }}>
                Cart is empty
              </Typography>
            </>
          )}
        </Box>
      </SwipeableDrawer>
      {/* <Dialog open={openDialog} setOpen={setOpenDialog} func={dialogComfirmFunc} /> */}
    </>
  );
};

export default Bound;
