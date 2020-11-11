import React from "react";
import { lapaBlue, lapaWhite, lapaYellow } from "../../styles/colors";

const InfoContainer = ({ difficulty, time }) => {
  return (
    <div className="InfoContainer">
      <p>
        Time: <span className="InfoContainer__text-span">{time} min.</span>
      </p>
      <p>
        Difficulty:{" "}
        <span className="InfoContainer__text-span">{difficulty}</span>
      </p>
      <style jsx>{`
        .InfoContainer {
          width: 100%;
          padding: 8px 0px;
          display: flex;
          justify-content: space-evenly;
          background: ${lapaBlue};
          color: ${lapaWhite};
        }
        .InfoContainer__text-span {
          color: ${lapaYellow};
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default InfoContainer;
