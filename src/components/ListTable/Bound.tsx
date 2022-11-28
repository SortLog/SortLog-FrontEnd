import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
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
import ImgMediaCard from "@/components/ItemList/table-card";
import Dialog from "@/components/ListTable/Dialog";

const sortOptions = [
  {
    label: "Last update (newest)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest)",
    value: "updatedAt|asc",
  },
  {
    label: "Total orders (highest)",
    value: "totalOrders|desc",
  },
  {
    label: "Total orders (lowest)",
    value: "totalOrders|asc",
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
  // When compared to something undefined, always returns false.
  // This means that if a field does not exist from either element ('a' or 'b') the return will be 0.

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
  const [customers, setCustomers] = useState([]);
  const [currentTab, setCurrentTab] = useState(type);
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
      const { data } = await itemApi.listItems();
      // add state as a
      data.forEach((item: any) => {
        item.changeNumber = 0;
      });
      setCustomers(data);
      if (isMounted()) {
        // @ts-ignore
        setCustomers(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getOrders();
  }, []);

//   const handleTabsChange = (event: any, value: any) => {
//     if (cart.length > 0) {
//       const dialogComfirm = () => {
//         const updatedFilters: any = {
//           ...filters,
//           hasAcceptedMarketing: undefined,
//           isProspect: undefined,
//           isReturning: undefined,
//         };

//         updatedFilters[value] = true;

//         setFilters(updatedFilters);
//         setCurrentTab(value);
//       };
//       setDialogComfirmFunc(dialogComfirm);
//       setOpenDialog(true);
//     }
//   };

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
  const insertOrder = () => {
    const selected = customers.filter((customer: any) => {
      // @ts-ignore
      return selectedItems.includes(customer._id);
    });
    console.log(selected);
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
                placeholder="Search orders"
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
            tab={currentTab}
            customers={paginatedCustomers}
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
              onClick={insertOrder}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
      <SpeedDial
        ariaLabel="cart"
        sx={{ position: "absolute", bottom: 24, right: 24 }}
        icon={<ShoppingCartIcon />}
        onClick={() => setOpenCart(true)}
      />
      <SwipeableDrawer
        anchor="right"
        open={openCart}
        onClose={() => setOpenCart(false)}
        onOpen={() => setOpenCart(true)}
      >
        <Box sx={{ mx: 3, my: 3 }}>
          {cart.map((item: any) => (
            <Box sx={{ mt: 3, mr: 3 }} key={item.id} id={item.id}>
              <ImgMediaCard data={item} details={item} />
            </Box>
          ))}
        </Box>
      </SwipeableDrawer>
      <Dialog open={openDialog} setOpen={setOpenDialog} func={dialogComfirmFunc} />
    </>
  );
};

export default Bound;
