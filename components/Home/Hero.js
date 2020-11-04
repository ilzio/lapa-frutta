import React from "react";
import { heroOverlay, lapaBlack, lapaWhite, lapaYellow } from "../../styles/colors";

const Hero = ({ image }) => (
  <div className="Hero">
    <div className="Hero__overlay" />
    <div className="Hero__centerd-section">
      <h1>Isola Bella Frutta</h1>
      <h2>Fresh fruit since 1942</h2>
    </div>
    <style jsx>{`
      .Hero {
        width: 100%;
        height: 70vh;
        background: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
      }
      .Hero__overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${heroOverlay};
      }
      .Hero__centerd-section {
        color: ${lapaWhite};
        position: relative;
      }
      .Hero h1,
      .Hero h2 {
        text-shadow: 2px 1px ${lapaBlack};
      }
      .Hero h2 {
        color: ${lapaYellow};
      }
    `}</style>
  </div>
);

export default Hero;
