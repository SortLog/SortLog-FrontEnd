import React, { useState, useEffect } from "react";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import { FolderOpen as FolderOpenIcon } from "../../icons/folder-open";
import { Cash as CashIcon } from "../../icons/cash";
import { Archive as ArchiveIcon } from "../../icons/archive";
import { Collection as CollectionIcon } from "../../icons/collection";
import * as itemApi from "@/services/api/items";
import * as companyApi from "@/services/api/companies";

const itemMapper = (rows: any) => {
  if (Array.isArray(rows)) {
    return rows.map((row: any) => {
      return {
        ...row,
      };
    });
  } else {
    return [];
  }
};

const companyMapper = (rows: any) => {
  return rows.teamMember;
};

const AnalyticsGeneralOverview = (props: any) => {
  const { historyList } = props;
  // @ts-ignore
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(userInfo);
  const [itemList, setItemList] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await itemApi.listItems();

      setItemList(data);
    };
    fetchData();
  }, []);

  const [companyList, setCompanyList] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await companyApi.getAllCompanies();

      setCompanyList(data);
    };
    fetchData();
  }, []);
  
  // @ts-ignore
  // console.log(Array.from(companyList).find((c)=>c.teamMember.includes("aaa"))===undefined ? 1 : Array.from(companyList).find((c)=>c.teamMember.includes("aaa")).teamMember.length);
  // console.log(Array.from(companyList).find((c)=>c.teamMember.includes("aaa")) && Array.from(companyList).find((c)=>c.teamMember.includes("aaa")).teamMember.length);
  // console.log([companyList].find((c)=>c.teamMember.include(userInfo.email)));
  
  let items = 0;
  let quantity = 0;
  let totalValue = 0;
  {
    itemMapper(itemList).map((value: any) => (
      <Box sx={{ mt: 3, mr: 3 }} key={value}>
        <Typography sx={{ display: "none" }}>
          {(items = items + 1)} {(quantity = quantity + value.quantity)}{" "}
          {(totalValue = totalValue + value.price)}
        </Typography>
      </Box>
    ));
  }
  
  return (
    <Grid container spacing={4}>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              px: 3,
              py: 2,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <FolderOpenIcon />
              <Typography color="textSecondary" variant="body2">
                Item Count
              </Typography>
              <Typography sx={{ mt: 1 }} variant="h5">
                {quantity}
              </Typography>
            </div>
            {/* <LineChart /> */}
          </Box>
          <Divider />
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              px: 3,
              py: 2,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <CashIcon />
              <Typography color="textSecondary" variant="body2">
                Item Price Sum
              </Typography>
              <Typography sx={{ mt: 1 }} variant="h5">
                {totalValue.toFixed(2)}
              </Typography>
            </div>
          </Box>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              px: 3,
              py: 2,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <ArchiveIcon />
              <Typography color="textSecondary" variant="body2">
                User Count
              </Typography>
              <Typography sx={{ mt: 1 }} variant="h5">
                {/* @ts-ignore */}
                {Array.from(companyList).find((c)=>c.teamMember.includes(userInfo.email))===undefined ? 1 : Array.from(companyList).find((c)=>c.teamMember.includes(userInfo.email)).teamMember.length}
              </Typography>
            </div>
          </Box>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              px: 3,
              py: 2,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <CollectionIcon />
              <Typography color="textSecondary" variant="body2">
                Hitory Form Count
              </Typography>
              <Typography sx={{ mt: 1 }} variant="h5">
                {historyList.length}
              </Typography>
            </div>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AnalyticsGeneralOverview;
