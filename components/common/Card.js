import React from "react";
import Button from "./Button";

const Card = ({title, text, image, button}) => {
  return (
    <div className="Card">
      <div className="imageContainer" />
      <div className="contentContainer">
        {title && (
          <div className="titleContainer">
            <h3>{title}</h3>
          </div>
        )}
        {/* {separator && ( */}
        {true && <hr className="cardSeparator" />}
        {text && (
          <div className="textContainer">
            <p>{text}</p>
          </div>
        )}
        {button && (
          <div className="textContainer">
            <Button text={button.text} href={button.href} />
          </div>
        )}
      </div>
      <style jsx>{`
        .Card {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 250px;
        }
        .contentContainer {
          text-align: center;
        }
        .titleContainer {
          text-align: center;
        }
        .imageContainer {
          height: 160px;
          width: 160px;
          background-image: url(${image});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Card;
