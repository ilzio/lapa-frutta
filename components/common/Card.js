import React from "react";
import Button from "./Button";

const Card = ({ title, text, image, button, bgPosition }) => {
  return (
    <div className="Card">
      <div className="Card__image-container" />
      <div className="Card__content-container">
        {title && (
          <div>
            <h3>{title}</h3>
          </div>
        )}
        {/* {separator && ( */}
        {true && <hr className="Card__separator" />}
        {text && (
          <div className="Card__text-container">
            <p>{text}</p>
          </div>
        )}
        {button && (
          <div className="Card__text-container">
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
        .Card h3 {
          text-shadow: 0.5px 0.5px black;
        }
        .Card__content-container {
          text-align: center;
        }
        .Card__text-container {
          text-align: center;
          font-size: 1.2em;
        }
        .Card__separator {
          height: 2px;
          background-color: #ff0;
          border: none;
        }
        .Card__image-container {
          height: 160px;
          width: 160px;
          background-image: url(${image});
          background-size: cover;
          background-position: ${bgPosition || 'center'};
          background-repeat: no-repeat;
          border-radius: 50%;
          margin-bottom: 16px;
          box-shadow: 0.5px 0.5px #00000063;
        }
      `}</style>
    </div>
  );
};

export default Card;
