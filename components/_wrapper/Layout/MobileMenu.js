import React from "react";
import { lapaBlue, lapaWhite } from "../../../styles/colors";
import MobileNav from "./MobileNav";

const MobileMenu = ({elements}) => {
  return (
      <div className="MobileMenu">
      <MobileNav links={elements} />
      <style jsx>{`
        .MobileMenu {
          z-index: 2;
          height: 100vh;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: ${lapaBlue};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
      `}</style>
    </div>
  );
};

export default MobileMenu;
