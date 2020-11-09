import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, breakpoint }) => {
  return (
    <div className="Layout">
      <Header breakpoint={breakpoint} />
      <div className="Layout-content-container">{children}</div>
      <Footer />
      <style jsx>{`
        .Layout {
          height: 100%;
          width: 100%;
          max-width: 100vw;
          border: solid, black, 2px;
        }
        .Layout-content-container{
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
