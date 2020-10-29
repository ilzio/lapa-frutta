import React from "react";
import Button from "./Button";

const SimpleSection = ({
  imagePosition,
  image,
  title,
  text,
  button,
  titleColor,
  textColor,
  bgPosition
}) => {
  return (
    <article className="SimpleSection">
      {imagePosition === "left" ? (
        <>
          <div className="SimpleSection__image-container" />
          <div className="SimpleSection__content-container">
            {title && <h3 className="SimpleSection__title">{title}</h3>}
            {text && <p className="SimpleSection__text">{text}</p>}
            {button && <Button text={button?.text} href={button?.href} />}
          </div>
        </>
      ) : (
        <>
          <div className="SimpleSection__content-container">
            {title && <h3 className="SimpleSection__title">{title}</h3>}
            {text && <p className="SimpleSection__text">{text}</p>}
            {button && <Button text={button?.text} href={button?.href} />}
          </div>
          <div className="SimpleSection__image-container" />
        </>
      )}
      <style jsx>{`
        .SimpleSection {
          height: auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 40px;
          align-items: center;
          max-width: 640px;
        }
        .SimpleSection__content-container {
          display: flex;
          flex-direction: column;
          max-width: 400px;
        }
        .SimpleSection__image-container {
          height: 200px;
          width: 200px;
          background: url(${image});
          background-position: ${bgPosition || "center"};
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 50%;
        }
        .SimpleSection__title {
          color: ${titleColor || "#0f52da"};
        }
        .SimpleSection__text {
          color: ${textColor || "#000000"};
          margin-bottom: 16px;
        }
      `}</style>
    </article>
  );
};

export default SimpleSection;
