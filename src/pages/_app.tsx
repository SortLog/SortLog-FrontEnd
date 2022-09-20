import React, { useState } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "@/components/Loading";
import store from "../store/store";
import Layout from "@/layouts";
import NextClientOnly from "@/components/NextClientOnly";
import createTheme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { Client as ApolloClient } from "@/utils/apollo";
import NextNProgress from "nextjs-progressbar";

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <ApolloProvider client={ApolloClient}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={createTheme()}>
          <NextClientOnly>
            <NextNProgress />
            <CssBaseline />
            <Layout>{isLoading ? <Loading /> : <Component {...pageProps} />}</Layout>
          </NextClientOnly>
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
