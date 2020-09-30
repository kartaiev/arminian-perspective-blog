// import "semantic-ui-css/semantic.min.css";
import "../styles/tailwind.css";
import { GlobalProvider } from "../context/global.context";
import React from "react";
import { FetchProvider } from "../context/fetch.context";

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <FetchProvider>
        <Component {...pageProps} />
      </FetchProvider>
    </GlobalProvider>
  );
}
