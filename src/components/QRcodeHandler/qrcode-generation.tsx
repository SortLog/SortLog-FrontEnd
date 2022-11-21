import QRCode from "qrcode";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const QRCodeGenerator = (props: any) => {
  const { data } = props;
  console.log(data.id);
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(`${data.id}`);
      console.log(response);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  generateQrCode();

  return (
    <Card sx={{ width: "200px", height: "200px", position: "relative", padding: "10px" }}>
      <CardContent sx={{ width: "100%" }}>
        <a href={imageUrl} download>
          <img src={imageUrl} alt="QRCode" />
        </a>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
