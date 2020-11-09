import React from "react";
import { lapaBlack, lapaBlue } from "../../styles/colors";
import Button from "./Button";
import { splitTextIntoParagraphs } from "../../utils/functions";

const SimpleSection = ({
  imagePosition,
  image,
  title,
  text,
  button,
  titleColor,
  textColor,
  size,
}) => {
  function getSizeInfo(sizeProp) {
    if (sizeProp === "s") {
      return {
        cardWidth: 400,
        imageSize: 100,
      };
    }
    if (sizeProp === "m") {
      return {
        cardWidth: 600,
        imageSize: 150,
      };
    }
    return {
      cardWidth: 800,
      imageSize: 200,
    };
  }
  const cardSize = getSizeInfo(size);
  return (
    <article className="SimpleSection">
      {imagePosition === "left" ? (
        <>
          <div className="SimpleSection__image-container">
            <img className="SimpleSection__image" src={image} alt="" />
          </div>
          <div className="SimpleSection__spacer" />
          <div className="SimpleSection__content-container">
            {title && <h3 className="SimpleSection__title">{title}</h3>}
            {text &&
              splitTextIntoParagraphs(text, "SimpleSection__text", {
                marginBottom: "8px",
              })}
            {button && (
              <div className="SimpleSection__button-container">
                <Button text={button?.text} href={button?.href} />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="SimpleSection__content-container">
            {title && <h3 className="SimpleSection__title">{title}</h3>}
            {text &&
              splitTextIntoParagraphs(text, "SimpleSection__text", {
                marginBottom: "8px",
              })}

            {button && (
              <div className="SimpleSection__button-container">
                <Button text={button?.text} href={button?.href} />
              </div>
            )}
          </div>
          <div className="SimpleSection__spacer" />
          <div className="SimpleSection__image-container">
            <img className="SimpleSection__image" src={image} alt="" />
          </div>
        </>
      )}
      <style jsx>{`
        .SimpleSection {
          max-width: ${cardSize.cardWidth}px;
          flex-direction: row;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          box-sizing: border-box;
        }
        .SimpleSection__spacer {
          flex: 0.5;
        }
        .SimpleSection__content-container {
          flex: 5.5;
        }
        .SimpleSection__image-container {
          justify-content: center;
          align-items: center;
          width: ${cardSize.imageSize}px;
          height: 100%;
        }
        .SimpleSection__image {
          width: 100%;
          height: ${cardSize.imageSize}px;
          border-radius: 50%;
          object-fit: fill;
        }
        .SimpleSection__title {
          color: ${titleColor || lapaBlue};
        }
        .SimpleSection__text {
          color: ${textColor || lapaBlack};
        }
        .SimpleSection__button-container {
          margin-top: 8px;
        }
        @media screen and (max-width: 768px) {
          .SimpleSection {
            flex-direction: ${imagePosition === "right"
              ? "column-reverse"
              : "column"};
          }
          .SimpleSection__content-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          .SimpleSection__image {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </article>
  );
};

export default SimpleSection;
