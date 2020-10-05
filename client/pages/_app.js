import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "../styles/tailwind.css";
import { GlobalProvider } from "../context/global.context";
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {" "}
        <title>Арминианская Перспектива</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <ThemeProvider>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ThemeProvider>
    </>
  );
}
