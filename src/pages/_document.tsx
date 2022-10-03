import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:300,400,500,700&display=optional"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Sortlog" />
          <link rel="icon" href="./favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="./android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="./android-chrome-512x512.png" />
          <link rel="manifest" href="./site.webmanifest" />
          <title>Sortlog</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
