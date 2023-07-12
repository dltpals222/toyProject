import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import "../styles/common.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
