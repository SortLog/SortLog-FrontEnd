import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Chip, Divider, GlobalStyles, Grid, Icon, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import ImgMediaCard from "@/components/ItemList/table-card";
import SplitButton from "@/components/ItemList/split-button";
import MuiDrawer from "@/components/ItemList/add-and-edit";
import QRCodeScanner from "../../components/QRcodeHandler/qrcode-scanner";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import * as itemApi from "@/services/api/items";

// const mockDataItemList = [
//   {
//     id: 1,
//     img: "https://source.unsplash.com/random",
//     name: "Item 1",
//     quantity: 1,
//     price: 100,
//     tag: ["tools", "ryobi"],
//   },
//   {
//     id: 2,
//     img: "https://source.unsplash.com/random",
//     name: "Item 2",
//     quantity: 123,
//     price: 200,
//     tag: ["tools", "ryobi"],
//   },
//   {
//     id: 3,
//     img: "https://source.unsplash.com/random",
//     name: "Item 3",
//     quantity: 2,
//     price: 300,
//     tag: ["ryobi"],
//   },
// ];

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

function getTag(params: GridValueGetterParams) {
  return {
    icon: <LocalOfferOutlinedIcon />,
  };
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
  {
    field: "tag",
    headerName: "Tag",
    renderCell: (params: any) => {
      // console.log(params.row.tags);
      return <Chip variant="filled" label={params.row.tags.join(" ")} {...getTag(params)} />;
    },
  },
];

// Tutor的数据编辑的方法：
// const dataMapper = (rows: any, searchText: string) => {
//   return rows
//     .filter(
//       (row: any) =>
//         row.name.includes(searchText) || row.tag.find((t: string) => t.includes(searchText))
//     )
//     .map((row: any) => {
//       return {
//         ...row,
//         quantity: row.quantity.toString() + " unit",
//         price: "$" + moneyMapper(row.price),
//         // tag: row.tag.map((tag:any, index: number) => <Chip key={'chip${index}'} label={tag} />),
//       };
//     });
// };

const dataCal = (rows: any) => {
  return rows.map((row: any) => {
    return {
      ...row,
    };
  });
};

const ItemList: NextPage = () => {
  const [isGrid, setIsGrid] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isQRCodeButtonClicked, setIsQRCodeButtonClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const onSearchArea = (data: string) => {
    setSearchInput(data);
  };

  // let x = 0;
  // let y = 0;
  // let z = 0;

  let items = 0;
  let quantity = 0;
  let totalValue = 0;

  const [details, setDetails] = React.useState({});
  const handleRowClick = (params: any) => {
    setIsDrawerOpen(true);
    setDetails(params.row);
  };

  const [mockDataItemList, setItems] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await itemApi.listItems();
      console.log(data);
      setItems(data);
      // console.log(mockDataItemList);
    };
    fetchData();
  }, []);

  // const getItemrListByItemName = async (companyName: string) => {
  //   let i;
  //   for (i = 0; i < mockDataItemList.length; i++) {
  //     if (mockDataItemList[i].companyName === companyName) {
  //       setCompanyId(mockDataItemList[i]._id);
  //       console.log(companyId);
  //       return mockDataItemList[i].teamMember;
  //     }
  //   }
  //   if (i === mockDataItemList.length) {
  //     const mockDataItemList = {
  //       companyName: `${companyName}`,
  //       teamMember: [],
  //     };
  //     const newCompany = await itemApi.addCompany(mockDataItemList);
  //     setCompanyId(newCompany.data._id);
  //     return mockDataItemList.teamMember;
  //   }
  // };

  // const mockDataItemList = await itemApi.listItems();
  // const mockDataItemList = mockDataItemListAAA.data;
  return (
    <>
      <Container maxWidth="lg" color="background">
        <div className="App">
          <header className="App-header">
            <GlobalStyles
              styles={{
                body: { backgroundColor: "#eeecec" },
              }}
            />
            {/* {dataMapper(mockDataItemList, searchText).map((detail: any) => (
              <MuiDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                data={detail}
                key={detail.id}
              />
            ))} */}
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
                  inputProps={{ "aria-label": "search google maps" }}
                  onChange={(e) => {
                    setSearchText((e.target as any).value);
                    setSearchInput((e.target as any).value);
                  }}
                  value={searchInput ? searchInput : searchText}
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
                {/* <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    marginBottom: "13px",
                    marginRight: "13px",
                    ":hover": { backgroundColor: "#3a3939", color: "#ffffff" },
                  }}
                >
                  Updated At
                  <SouthIcon />
                </Button> */}
                <SplitButton setIsGrid={setIsGrid} sx={{ height: 100 }} />
              </Grid>
            </Grid>
            {dataCal(mockDataItemList).map((value: any) => (
              <Box sx={{ mt: 3, mr: 3 }} key={value}>
                <Typography sx={{ display: "none" }}>
                  {(items = items + 1)} {(quantity = quantity + value.quantity)}{" "}
                  {(totalValue = totalValue + value.price)}
                </Typography>
              </Box>
            ))}
            {/* {dataCal(mockDataItemList).map((detail: any) => (
              <Box sx={{ mt: 3, mr: 3 }} key={detail.id}>
                aaa
                <MuiDrawer
                  isDrawerOpen={isDrawerOpen}
                  setIsDrawerOpen={setIsDrawerOpen}
                  data={mockDataItemList.name}
                />
                <Typography>{detail.item}</Typography>
              </Box>
            ))} */}
            <Grid container spacing={6} pb="10px">
              <Grid item color="#6a6a6c">
                Folders:{" "}
                <Grid sx={{ display: "inline" }} color="#393939" fontWeight="bold">
                  0
                </Grid>
              </Grid>
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
                  {dataCal(mockDataItemList).map((card: any) => (
                    <Box sx={{ mt: 3, mr: 3 }} key={card.id} id={card.id}>
                      {/* <Box sx={{ mt: 3, mr: 3 }} key={card.id} onClick={() => setIsDrawerOpen(true)}> */}
                      <ImgMediaCard data={card} details={details} />
                      {/* <Divider sx={{ color: "#d5cfcf", margin: 3, border: 1, width: 1129 }}/> */}
                      {/* <MuiDrawer
                        isDrawerOpen={isDrawerOpen}
                        setIsDrawerOpen={setIsDrawerOpen}
                        data={card}
                      /> */}
                    </Box>
                  ))}
                </Grid>
              ) : (
                <Box sx={{ height: 600, width: "100%", bgcolor: "#dadada" }}>
                  {/* {(`Movie "${params.row.title}" clicked`)} */}
                  {/* {dataMapper(mockDataItemList, searchText).map((detail: any) => (
                    <MuiDrawer
                      isDrawerOpen={isDrawerOpen}
                      setIsDrawerOpen={setIsDrawerOpen}
                      data={detail}
                      key={detail.id}
                    />
                  ))} */}
                  <DataGrid
                    // rows={mockDataItemList.map((item: any, index: number) => {
                    //   return({...item, id: index})
                    // })}
                    rows={mockDataItemList.map((item: any) => ({
                      ...item,
                      id: item._id,
                    }))}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                    // onRowClick={() => setIsDrawerOpen(true)}
                    // components={{ Toolbar: GridToolbar }}
                    // experimentalFeatures={{ aggregation: true }}
                  />
                  {/* {dataMapper(mockDataItemList, searchText).map((detail: any) => ( */}
                  {/* ))} */}
                  {/* {message && <Alert severity="info">{message}</Alert>} */}
                </Box>
              )}
              <MuiDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
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
