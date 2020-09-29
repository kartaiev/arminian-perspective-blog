import "../styles/tailwind.css";
import React from "react";
import { GlobalProvider } from "../context/global.context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
