import React from "react";

const Hero = ({ image }) => (
  <div className="Hero">
    <div className="centeredSection">
      <h1 className="centeredText">Isola Bella Frutta</h1>
      <h2 className="centeredText">Fresh fruit since 1942</h2>
    </div>
    <style jsx>{`
      .Hero {
        width: 100%;
        height: 50vh;
        background: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .centeredSection {
        color: white;
      }
    `}</style>
  </div>
);

export default Hero;
