import React from "react";
import { lapaBlack, lapaBlue, lapaWhite, lapaYellow } from "../styles/colors";

const Custom404 = () => {
  return (
    <div className="Custom404">
      <div className="Custom404__overlay" />
      <div className="Custom404__image-container">
        <img
          className="Custom404__image"
          src="/assets/cuncittina.jpeg"
          alt="Cuncittina"
        />
      </div>
      <div className="Custom404__centered-container">
        <h1 className="Custom404__title">This page does not exist!</h1>
      </div>
      <style jsx>{`
        .Custom404 {
          height: calc(100vh - 112px);
          background-color: ${lapaWhite};
          position: relative;
          overflow: hidden;
        }
        .Custom404__centered-container {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${lapaBlue};
        }
        .Custom404__title {
          color: ${lapaYellow};
          text-align: center;
          text-shadow: 2px 1px ${lapaBlack};
          margin-top: 24px;
          z-index: 3;
        }
        .Custom404__image {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          animation: y 3s linear infinite alternate;
          position: relative;
          z-index: 2;
        }
        .Custom404__image-container {
          animation: x 8s linear infinite alternate;
          z-index: 2;
          position: relative;
        }

        @keyframes y {
          100% {
            transform: translateY(calc((100vh - 112px) - 120px));
          }
        }

        @keyframes x {
          100% {
            transform: translateX(calc(100vw - 120px));
          }
        }
      `}</style>
    </div>
  );
};

export default Custom404;
