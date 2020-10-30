import React from "react";
import Button from "./Button";
import {
  lapaBlue,
  lapaWhite,
  lapaYellow
} from "../../styles/colors";
import { cardImageShadow, cardTextShadow, cardTitleShadow } from "../../styles/shadows";

const Card = ({
  title,
  text,
  image,
  button,
  bgPosition,
  separator,
  separatorColor,
  titleShadow,
  textShadow,
  titleColor,
  textColor,
}) => {
  return (
    <div className="Card">
      <div className="Card__image-container" />
      <div className="Card__content-container">
        {title && <h3 className="Card__title">{title}</h3>}
        {separator && <hr className="Card__separator" />}
        {text && <p className="Card__text">{text}</p>}
        {button && <Button text={button.text} href={button.href} />}
      </div>
      <style jsx>{`
        .Card {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 250px;
        }
        .Card__image-container {
          height: 140px;
          width: 140px;
          background-image: url(${image});
          background-size: cover;
          background-position: ${bgPosition || "center"};
          background-repeat: no-repeat;
          border-radius: 50%;
          margin-bottom: 16px;
          box-shadow: ${cardImageShadow};
        }
        .Card__content-container {
          text-align: center;
        }
        .Card__title {
          color: ${titleColor || lapaBlue};
          text-shadow: ${titleShadow || cardTitleShadow}
        }
        .Card__separator {
          height: 2px;
          border: none;
          background-color: ${separatorColor || lapaYellow};
          width: 100%;
        }
        .Card__text {
          text-align: center;
          font-size: 1.2em;
          color: ${textColor || lapaWhite};
          font-family: "Balsamiq Sans", cursive;
          text-shadow: ${textShadow || cardTextShadow};
        }
      `}</style>
    </div>
  );
};

export default Card;
