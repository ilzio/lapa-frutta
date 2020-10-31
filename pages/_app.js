import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/_wrapper/Layout";
import "../styles/main.scss";

const CustomApp = ({ Component, pageProps }) => {
  const [breakpoint, setBreakpoint] = useState(undefined);

  function hasLayout() {
    const router = useRouter();
    const { pathname } = router;
    return pathname !== "/test";
  }

  const showLayout = hasLayout();

  return showLayout ? (
    <Layout breakpoint={breakpoint}>
      <Component {...pageProps} breakpoint={breakpoint} />
    </Layout>
  ) : (
    <Component {...pageProps} breakpoint={breakpoint} />
  );
};

export default CustomApp;
