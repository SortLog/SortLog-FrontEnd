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
import moment from "moment";

export const AnalyticsMostVisited = ({ historyList }) => (
  <Card>
    <CardHeader
      title="History Forms"
      action={
        <Tooltip>
          <InformationCircleOutlinedIcon sx={{ color: "action.active" }} />
        </Tooltip>
      }
    />
    <Scrollbar>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>Track Number</TableCell>
            <TableCell>Create User</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        {console.log(historyList)}
        <TableBody>
          {historyList.map((history) => (
            <NextLink href={`/dashboard/historyForm/${history._id}`} key={history._id} passHref>
              <TableRow
                sx={{
                  "&:last-child td": {
                    border: 0,
                  },
                  cursor: "pointer",
                }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <ExternalLinkIcon
                      sx={{
                        color: "action.active",
                        cursor: "pointer",
                      }}
                    />
                    <Typography sx={{ ml: 2 }} variant="body2">
                      {history.trackingNumber}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{history.users.name}</TableCell>
                <TableCell>{moment(history.createdAt).fromNow()}</TableCell>
              </TableRow>
            </NextLink>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
);
