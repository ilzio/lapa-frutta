import React, { useState } from "react";
import Layout from "../components/_wrapper/Layout";
import '../styles/main.scss'

const CustomApp = ({ Component, pageProps }) => {
  const [breakpoint, setBreakpoint] = useState(undefined);
  return (
    <Layout breakpoint={breakpoint}>
      <Component {...pageProps} breakpoint={breakpoint} />
    </Layout>
  );
};

export default CustomApp;
