import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, breakpoint }) => {
  return (
    <div className="Layout">
      <Header breakpoint={breakpoint} />
      <div className="contentContainer">{children}</div>
      <Footer />
      <style jsx>{`
        .Layout {
          height: 100%;
          width: 100%;
          border: solid, black, 2px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
