import numeral from "numeral";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { ExternalLink as ExternalLinkIcon } from "../../icons/external-link";
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../icons/information-circle-outlined";
import { Scrollbar } from "../../layouts/scrollbar";
import NextLink from "next/link";

const pages = [
  {
    date: "16/11/2022",
    uniqueVisits: 8584,
    activity: "Created folder Mango Syrup in store JM",
    visitors: "Junyi Men",
  },
  {
    date: "11/11/2022",
    uniqueVisits: 648,
    activity: "Removed 10 quantity of laptop from store JM",
    visitors: "Junyi Men",
  },
  {
    date: "06/11/2022",
    uniqueVisits: 568,
    activity: "Added 20 quantity of wooden spoon to store JM",
    visitors: "Junyi Men",
  },
  {
    date: "19/10/2022",
    uniqueVisits: 12322,
    activity: "Removed 50 quantity of CoffeeBean to store JM",
    visitors: "Junyi Men",
  },
  {
    date: "08/10/2022",
    uniqueVisits: 11645,
    activity: "Deleted folder plastic spoon in store JM",
    visitors: "Junyi Men",
  },
  {
    date: "22/09/2022",
    uniqueVisits: 10259,
    activity: "Added 30 quantity of straw to store JM",
    visitors: "Junyi Men",
  },
];

export const AnalyticsMostVisited = () => (
  <Card>
    <CardHeader
      title="History"
      action={
        <Tooltip title="Refresh rate is 24h">
          <InformationCircleOutlinedIcon sx={{ color: "action.active" }} />
        </Tooltip>
      }
    />
    <Scrollbar>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>Page Name</TableCell>
            <TableCell>Visitors</TableCell>
            {/* <TableCell>Unique page visits</TableCell> */}
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((page) => (
            <TableRow
              key={page.activity}
              sx={{
                "&:last-child td": {
                  border: 0,
                },
              }}
            >
              <TableCell>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <NextLink href="/dashboard/history-form" passHref>
                    <ExternalLinkIcon
                      sx={{
                        color: "action.active",
                        cursor: "pointer",
                      }}
                      // onClick={() => {
                      //   setIsDrawerOpen(true);
                      //   setDetails({});
                      //   setQrCode(false);
                      // }}
                    />
                  </NextLink>
                  <Typography sx={{ ml: 2 }} variant="body2">
                    {page.activity}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{page.visitors}</TableCell>
              {/* <TableCell>{numeral(page.uniqueVisits).format("0,0")}</TableCell> */}
              <TableCell>{page.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
);
