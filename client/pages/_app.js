import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import "../styles/tailwind.css";
import { GlobalProvider } from "../context/global.context";
import React from "react";
import Head from "next/head";
import theme from "@chakra-ui/core/dist/theme";
import customTheme from "../customTheme";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Арминианская Перспектива</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}
