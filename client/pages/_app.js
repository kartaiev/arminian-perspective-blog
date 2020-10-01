import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "../styles/tailwind.css";
import { GlobalProvider } from "../context/global.context";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <CSSReset />
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
}
