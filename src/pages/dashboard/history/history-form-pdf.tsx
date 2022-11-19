import PropTypes from "prop-types";
import { format } from "date-fns";
import numeral from "numeral";
import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Avatar } from "@mui/material";

const COL1_WIDTH = 60;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 24,
  },
  h4: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.235,
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.57,
  },
  body2: {
    fontSize: 10,
    lineHeight: 1.43,
  },
  gutterBottom: {
    marginBottom: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brand: {
    height: 32,
    width: 32,
  },
  company: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  references: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  billing: {
    marginTop: 32,
  },
  items: {
    marginTop: 32,
  },
  notes: {
    marginTop: 32,
  },
  table: {
    display: "flex",
    width: "auto",
  },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
    borderStyle: "solid",
    flexDirection: "row",
  },
  tableCell1: {
    padding: 6,
    width: `${COL1_WIDTH}%`,
  },
  tableCellN: {
    padding: 6,
    width: `${COLN_WIDTH}%`,
  },
  alignRight: {
    textAlign: "right",
  },
});

export const HistoryPDF = (props: any) => {
  const { history } = props;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View >
          <Text style={styles.h6}>COMPANY</Text>
            <Text style={styles.h4}>{history.user.companyName}</Text>
          </View>
          <View>
            <Text style={styles.h4}>{history.status}</Text>
          </View>
        </View>
        <View style={styles.references}>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>Date</Text>
            <Text style={styles.body2}>{history.Date && format(history.Date, "dd MMM yyyy")}</Text>
          </View>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>Tracking Number</Text>
            <Text style={styles.body2}>{history.trackingNumber}</Text>
          </View>
        </View>
        <View style={styles.billing}>
          <Text style={[styles.subtitle2, styles.gutterBottom]}>Inbound/Outbound Operator</Text>
          <Text style={styles.body2}></Text>
          <Text style={styles.body2}>{history.user.name}</Text>
        </View>
        <View style={styles.items}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
              <View style={styles.tableCell1}>
                  <Text style={styles.h6}>SKU</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>ITEM NAME</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>UNIT PRICE</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>QTY</Text>
                </View>
                <View style={styles.tableCell1}>
                  <Text style={[styles.h6, styles.alignRight]}>TOTAL PRICE</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              {(history.items || []).map((items: any) => (
                <View style={styles.tableRow} key={items.SKU}>
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>{items.SKU}</Text>
                  </View>
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>{items.name}</Text>
                  </View>
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>
                      {numeral(items.price).format(`${items.price}0,0.00`)}
                    </Text>
                  </View>
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>{items.QTY}</Text>
                  </View>
                  <View style={styles.tableCell1}>
                    <Text style={[styles.body2, styles.alignRight]}>
                      {numeral(items.price * items.QTY).format(`$0,0.00`)}
                    </Text>
                  </View>
                </View>
              ))}

              <View style={[styles.tableRow, { borderTop: "1" }]}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>Total QTY</Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    x {history.items.reduce((sum: any, item: any) => sum + item.QTY, 0)}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>Total Price</Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(
                      history.items.reduce((sum: any, item: any) => sum + item.price * item.QTY, 0)
                    ).format(`$ 0,0.00`)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text style={[styles.h6, styles.gutterBottom]}>Notes</Text>
          <Text style={styles.body2}>
            Please make sure you double check the quantity and unit price of each item and
            inbound/outbound method.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

HistoryPDF.propTypes = {
  history: PropTypes.object.isRequired,
};
