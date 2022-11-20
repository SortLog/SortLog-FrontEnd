// import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const QRCodeScanner = () => {
//   const [scanResultWebCam, setScanResultWebCam] = useState("No result");

//   const handleErrorWebCam = (error) => {
//     console.log(error);
//   };
//   const handleScanWebCam = (result) => {
//     if (result) {
//       setScanResultWebCam(result);
//       console.log(scanResultWebCam);
//     }
//   };

//   return (
//     <Card
//       sx={{ width: "500px", height: "500px", position: "absolute", padding: "10px", zIndex: "99" }}
//     >
//       <CardContent sx={{ width: "100%" }}>
//         <QrReader
//           onResult={(result, error) => {
//             if (!!result) {
//               handleScanWebCam(result);
//             }

//             if (!!error) {
//               handleErrorWebCam(error);
//             }
//           }}
//           delay={300}
//           style={{ width: "100%" }}
//         />
//       </CardContent>
//     </Card>
//   );
// };

// export default QRCodeScanner;

// ################################################################################

// import QrScanner from "qr-scanner";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const QRCodeScanner = (props) => {
//   const { isQRCodeButtonClicked } = props;
//   const qrScanner = new QrScanner(videoElem, (result) => console.log("decoded qr code:", result));

//   return (
//     <Card
//       sx={{ width: "500px", height: "500px", position: "absolute", padding: "10px", zIndex: "99" }}
//     >
//       <CardContent sx={{ width: "100%" }}>
//         {isQRCodeButtonClicked ? qrScanner.start() : qrScanner.stop()}
//       </CardContent>
//     </Card>
//   );
// };

// export default QRCodeScanner;

// import React, { Component } from "react";
// import QrReader from "react-qr-scanner";

// class QRCodeScanner extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       delay: 100,
//       result: "No result",
//     };

//     this.handleScan = this.handleScan.bind(this);
//   }
//   handleScan(data) {
//     this.setState({
//       result: data,
//     });
//   }
//   handleError(err) {
//     console.error(err);
//   }
//   render() {
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     };

//     return (
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//         />
//         <p>{this.state.result}</p>
//       </div>
//     );
//   }
// }

// export default QRCodeScanner;

import React from "react";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import classes from "./qrcode-scanner.module.css";

// const cardStyle = {
//   card: {
//     backgroundColor: "#DADADA",
//     position: "absolute",
//     width: "400px",
//     margin: "auto",
//     top: "50%",
//     left: "50%",
//     zIndex: "99",
//     borderRadius: "20px",
//     boxShadow: "0 0 15px 10px #DD2A3B",
//   },
//   line: {
//     height: "calc(100% - 2px)",
//     width: "100%",
//     background: "linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #DD2A3B 211%)",
//     borderBottom: "3px solid #DD2A3B",
//     transform: "translateY(-100%)",
//     animation: "scan-line 2s infinite",
//     animationTimingFunction: "cubic-bezier(0.53, 0, 0.43, 0.99)",
//     animationDelay: "1.4s",
//   },
// };

const QRCodeScanner = () => {
  const [data, setData] = useState("");

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
      </div>
    </Zoom>
  );
};

export default QRCodeScanner;
