/* eslint-disable react/prefer-stateless-function */
 /* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        
        <div className="contentContainer">{this.props.children}</div>
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
  }
}

export default Layout;
