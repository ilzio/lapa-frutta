import React from "react";
import { heroOverlay, lapaBlack, lapaWhite, lapaYellow } from "../../styles/colors";

const Hero = ({ image }) => (
  <div className="Hero">
    <div className="Hero__overlay" />
    <div className="Hero__centerd-section">
      <h1 className="Hero__title">Isola Bella Frutta</h1>
      <h2 className="Hero__subtitle">Fresh fruit since 1942</h2>
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
      .Hero__title,
      .Hero__subtitle {
        text-shadow: 2px 1px ${lapaBlack};
      }
      .Hero__subtitle {
        color: ${lapaYellow};
      }
    `}</style>
  </div>
);

export default Hero;
