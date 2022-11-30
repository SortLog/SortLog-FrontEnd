import React from "react";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import classes from "./qrcode-scanner.module.css";

const QRCodeScanner = (props) => {
  const [data, setData] = useState("");
  props.searchData(data);

  return (
    <Zoom in={true}>
      <div className={classes.card}>
        <div className={classes.line}></div>
        <div className={classes.scanArea}>
          <div className={classes.topL}></div>
          <div className={classes.topR}></div>
          <div className={classes.btmL}></div>
          <div className={classes.btmR}></div>
        </div>
        <QrReader
          ViewFinder={function noRefCheck() {}}
          constraints={{
            facingMode: "user",
          }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              console.log(data);
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
        <p>{data}</p>
      </div>
    </Zoom>
  );
};

export default QRCodeScanner;
