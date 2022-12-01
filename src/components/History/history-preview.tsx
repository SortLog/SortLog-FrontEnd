import numeral from "numeral";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import moment from "moment";

const HistoryPreview = (props: any) => {
  const { history, ...other } = props;
  return (
    <Paper {...other}>
      <Box
        sx={{
          minWidth: 800,
          p: 6,
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Company</Typography>
            <Typography variant="subtitle2">{history.users.provider}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ my: 4 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom variant="subtitle2">
                Date
              </Typography>
              <Typography variant="body2">
                {moment(history.createdAt).format("MMM Do YY")}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="subtitle2">
                Tracking Number
              </Typography>
              <Typography variant="body2">{history.trackingNumber}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell />
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(history.items || []).map((items: any, i: any) => (
              <TableRow key={items.sku}>
                <TableCell>{items.sku}</TableCell>
                <TableCell>{items.name}</TableCell>
                <TableCell>{numeral(items.price).format(`${items.price}0,0.00`)}</TableCell>
                <TableCell>{history.changeQuantities[i]}</TableCell>
                <TableCell />
                <TableCell align="right">
                  {numeral(items.price * history.changeQuantities[i]).format(`$0,0.00`)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ borderTop: 1 }} />
            <TableRow sx={{ borderTop: 1 }}>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="right">
                <Typography gutterBottom variant="subtitle1">
                  Total QTY
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography gutterBottom variant="subtitle1">
                  x{" "}
                  {history.changeQuantities.reduce(
                    (sum: any, changeQuantities: any) => sum + changeQuantities,
                    0
                  )}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="right">
                <Typography gutterBottom variant="subtitle1">
                  Total Price
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography gutterBottom variant="subtitle1">
                  {numeral(
                    history.items.reduce(
                      (sum: any, item: any, i: any) =>
                        sum + item.price * history.changeQuantities[i],
                      0
                    )
                  ).format(`$ 0,0.00`)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom variant="h6">
            Notes
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Please make sure you double check the quantity and unit price of each item and
            inbound/outbound method.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
export default HistoryPreview;
