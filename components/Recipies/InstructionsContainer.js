import React from "react";
import { lapaBlue } from "../../styles/colors";
import { splitTextIntoParagraphs } from "../../utils/functions";

const InstructionsContainer = ({ instructions }) => {
  return (
    <div className="InstructionsContainer">
      <h2 className="InstructionsContainer__title">Preparation</h2>
      {splitTextIntoParagraphs(instructions, "InstructionsContainer__text", {
        marginBottom: "8px",
      })}
      <style jsx>{`
          .InstructionsContainer{
              padding: 16px;
          }
          .InstructionsContainer__title{
              color: ${lapaBlue};
              text-align: center;
          }
          `}</style>
    </div>
  );
};

export default InstructionsContainer;
