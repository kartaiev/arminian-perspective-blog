import "../styles/tailwind.css";
import { GlobalProvider } from "../context/global.context";
import Drawer from "../components/layout/Drawer";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Drawer />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
