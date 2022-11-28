import { useEffect, useState } from "react";
import numeral from "numeral";
import { SeverityPill } from "../severity-pill";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  LinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "../../layouts/scrollbar";

export const CustomerListTable = (props) => {
  const {
    customers,
    customersCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    selectedItems,
    setSelectedItems,
    ...other
  } = props;

  const handleSelectAllCustomers = (event) => {
    setSelectedItems(event.target.checked ? customers.map((customer) => customer._id) : []);
  };

  const handleSelectOneCustomer = (event, customerId) => {
    if (!selectedItems.includes(customerId)) {
      setSelectedItems((prevSelected) => [...prevSelected, customerId]);
      console.log(customerId);
    } else {
      setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== customerId));
    }
  };

  const selectedSomeCustomers = selectedItems.length > 0 && selectedItems.length < customers.length;
  const selectedAllCustomers = selectedItems.length === customers.length;

  return (
    <div {...other}>
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAllCustomers}
                  indeterminate={selectedSomeCustomers}
                  onChange={handleSelectAllCustomers}
                />
              </TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Tag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => {
              const isCustomerSelected = selectedItems.includes(customer._id);
              return (
                <TableRow hover key={customer._id} selected={isCustomerSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isCustomerSelected}
                      onChange={(event) => handleSelectOneCustomer(event, customer._id)}
                      value={isCustomerSelected}
                    />
                  </TableCell>
                  <TableCell>{customer.sku}</TableCell>

                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar
                        variant="square"
                        src={customer.image}
                        sx={{
                          height: 64,
                          width: 64,
                        }}
                      />
                      <Box sx={{ ml: 1 }}>
                        <Link color="inherit" variant="subtitle2">
                          {customer.name}
                        </Link>
                        <Typography color="textSecondary" variant="body2">
                          {customer.category}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell width="20%">
                    <LinearProgress
                      value={customer.quantity}
                      variant="determinate"
                      color={customer.quantity >= 10 ? "success" : "error"}
                      sx={{
                        height: 8,
                        width: 36,
                      }}
                    />
                    <Typography color="textSecondary" variant="body2">
                      {customer.quantity} in stock
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography color="success.main" variant="subtitle2">
                      {numeral(customer.price).format(`${customer.price},0.00`)}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {customer.tags.map((tag) => (
                      <SeverityPill color="info" sx={{ ml: 1 }} key={tag}>
                        {tag}
                      </SeverityPill>
                    ))}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={customersCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};
