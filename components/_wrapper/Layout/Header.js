import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import links from '../../../utils/headerLinks'



function Header() {
  return (
    <div className="Header">
      <Logo image="/assets/image.png" />
      <Nav links={links} />
      <style jsx>{`
        .Header {
          width: 100%;
          height: 56px;
          padding: 16px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Header;
