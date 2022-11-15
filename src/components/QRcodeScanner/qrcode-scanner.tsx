import { QrScanner } from "@yudiel/react-qr-scanner";

const Scanner = () => {
  console.log("scanner on");
  return (
    <QrScanner
      onDecode={(result) => console.log(result)}
      onError={(error) => console.log(error?.message)}
    />
  );
};

export default Scanner;
