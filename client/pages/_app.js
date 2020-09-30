// import "semantic-ui-css/semantic.min.css";
import "../styles/tailwind.css";
import { GlobalProvider } from "../context/global.context";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
