import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import "../styles/tailwind.css";
import { GlobalProvider } from "../context/globalContext";
import React from "react";
import Head from "next/head";
import theme from "@chakra-ui/core/dist/theme";
import customTheme from "../customTheme";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Арминианская Перспектива</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
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
