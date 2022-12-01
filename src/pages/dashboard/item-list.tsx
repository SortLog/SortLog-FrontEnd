import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Divider, GlobalStyles, Grid, Icon, Paper, TableCell } from "@mui/material";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import QRCodeScanner from "../../components/QRcodeHandler/qrcode-scanner";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import ImgMediaCard from "@/components/ItemList/table-card";
import SplitButton from "@/components/ItemList/split-button";
import MuiDrawer from "@/components/ItemList/add-and-edit";
import * as itemApi from "@/services/api/items";
import { SeverityPill } from "@/components/severity-pill";
import Head from "next/head";

function moneyMapper(money: any) {
  return parseFloat(money)
    .toFixed(2)
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{3})/g, "$1,")
    .replace(/\,$/, "")
    .split("")
    .reverse()
    .join("");
}

function getQuantity(params: GridValueGetterParams) {
  return `${params.row.quantity.toString() + " unit"}`;
}

function getPrice(params: GridValueGetterParams) {
  return `${"$" + moneyMapper(params.row.price)}`;
}

function unitOrunits(quantity: any) {
  if (quantity > 1) {
    return "units";
  } else {
    return "unit";
  }
}

const columns = [
  { field: "name", headerName: "Name" },
  { field: "quantity", headerName: "Quantity", valueGetter: getQuantity },
  { field: "price", headerName: "Price", valueGetter: getPrice },
  { field: "sku", headerName: "SKU" },
  {
    field: "tag",
    headerName: "Tag",
    renderCell: (params: any) => {
      return (
        <TableCell>
          {params.row.tags.map((tag: any) => (
            <SeverityPill color="success" key={tag}>
              {tag}
            </SeverityPill>
          ))}
        </TableCell>
      );
    },
    flex: 1,
  },
];

const dataMapper = (rows: any, searchText: string) => {
  return rows.filter(
    (row: any) =>
      row.name.includes(searchText) ||
      row.tags.find((t: string) => t.includes(searchText)) ||
      row.sku.includes(searchText)
  );
};

const ItemList: NextPage = () => {
  const [isGrid, setIsGrid] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [isQRCodeButtonClicked, setIsQRCodeButtonClicked] = useState(false);

  const onSearchArea = (data: string) => {
    setSearchText(data);
  };

  let items = 0;
  let quantity = 0;
  let totalValue = 0;

  const [details, setDetails] = React.useState({});
  const [qrCode, setQrCode] = useState(true);

  useEffect(() => {
    if (isDrawerOpen === false) {
      setDetails({});
    }
  }, [isDrawerOpen]);

  const handleRowClick = (params: any) => {
    setIsDrawerOpen(true);
    setDetails(params.row);
    setQrCode(true);
  };

  const [itemList, setItemList] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await itemApi.listItems();

      setItemList(data);
    };
    fetchData();
  }, [isDrawerOpen]);

  return (
    <>
      <Head>
        <title> Items </title>
      </Head>
      <Container maxWidth="lg" color="background">
        <div className="App">
          <header className="App-header">
            <GlobalStyles
              styles={{
                body: { backgroundColor: "#eeecec" },
              }}
            />

            <Grid container spacing={6} paddingTop="60px" justifyContent="space-between">
              <Typography variant="h3" color="#6a6a6c" paddingLeft="76px">
                <Inventory2OutlinedIcon
                  fontSize="large"
                  sx={{ marginRight: "10px", paddingTop: 1 }}
                />
                All Items
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ backgroundColor: "#e70a3e" }}
                onClick={() => {
                  setIsDrawerOpen(true);
                  setDetails({});
                  setQrCode(false);
                }}
              >
                ADD NEW
              </Button>
            </Grid>
            <Divider sx={{ color: "#d5cfcf", margin: 3, border: 1, width: 1129 }} />
            <Grid
              container
              spacing={6}
              paddingTop="50px"
              paddingLeft="76px"
              justifyContent="space-between"
            >
              <Paper
                component="form"
                sx={{
                  maxHeight: "45px",
                  maxWidth: "262px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                }}
              >
                <Icon sx={{ paddingLeft: "6px", color: "#c2c0c0", width: 30 }}>
                  <SearchIcon />
                </Icon>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search All Items"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setSearchText((e.target as any).value);
                  }}
                  value={searchText}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  sx={{ p: "10px", color: "#2d2a2a" }}
                  aria-label="QrCodeScannerIcon"
                  onClick={() => setIsQRCodeButtonClicked(!isQRCodeButtonClicked)}
                >
                  {isQRCodeButtonClicked ? (
                    <QRCodeScanner searchData={onSearchArea} />
                  ) : (
                    <QrCodeScannerIcon />
                  )}
                </IconButton>
              </Paper>
              <Grid>
                <SplitButton setIsGrid={setIsGrid} sx={{ height: 100 }} />
              </Grid>
            </Grid>
            {dataMapper(itemList, searchText).map((value: any, i: any) => (
              <Box sx={{ mt: 3, mr: 3 }} key={i}>
                <Typography sx={{ display: "none" }}>
                  {(items = items + 1)} {(quantity = quantity + value.quantity)}{" "}
                  {(totalValue = totalValue + value.price * value.quantity)}
                </Typography>
              </Box>
            ))}

            <Grid container spacing={6} pb="10px">
              <Grid item color="#6a6a6c">
                Items:{" "}
                <Grid sx={{ display: "inline" }} color="#393939" fontWeight="bold">
                  {items}
                </Grid>
              </Grid>
              <Grid item color="#6a6a6c">
                Total Quantity:{" "}
                <Grid sx={{ display: "inline" }} color="#393939" fontWeight="bold">
                  {quantity} {unitOrunits(quantity)}
                </Grid>
              </Grid>
              <Grid item color="#6a6a6c">
                Total Value:{" "}
                <Grid sx={{ display: "inline" }} color="#393939" fontWeight="bold">
                  ${totalValue.toFixed(2)}
                </Grid>
              </Grid>
            </Grid>
            <Box>
              {isGrid ? (
                <Grid container>
                  {dataMapper(itemList, searchText).map((card: any) => (
                    <Box sx={{ mt: 3, mr: 3 }} key={card.id} id={card.id}>
                      <ImgMediaCard data={card} details={details} />
                    </Box>
                  ))}
                </Grid>
              ) : (
                <Box sx={{ height: 600, width: "100%", bgcolor: "#dadada" }}>
                  <DataGrid
                    rows={dataMapper(itemList, searchText).map((item: any) => ({
                      ...item,
                      id: item._id,
                    }))}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                  />
                </Box>
              )}
              <MuiDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                qrCode={qrCode}
                setQrCode={setQrCode}
                data={details}
              />
            </Box>
          </header>
        </div>
      </Container>
    </>
  );
};

export default ItemList;
