import React from "react";

const Hero = ({ image }) => (
  <div className="Hero">
    <h1 className="centeredText">Isola Bella Frutta</h1>
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
      .centeredText {
        color: white;
      }
    `}</style>
  </div>
);

export default Hero;
