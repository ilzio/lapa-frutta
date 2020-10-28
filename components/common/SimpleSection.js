import React from "react";
import Button from "./Button";

const SimpleSection = ({ imagePosition, image, title, text, button }) => {
  return (
    <article className="SimpleSection">
      {imagePosition === "left" ? (
        <>
          <div className="SimpleSection__image-container" />
          <div className="SimpleSection__content-container">
            {title && (
              <div className="SimpleSection__title-container">
                <h3>{title}</h3>
              </div>
            )}
            {text && (
              <div className="SimpleSection__text-container">
                <p>{text}</p>
              </div>
            )}
            {button && <Button text={button?.text} href={button?.href} />}
          </div>
        </>
      ) : (
        <>
          <div className="SimpleSection__content-container">
            {title && (
              <div className="SimpleSection__title-container">
                <h3>{title}</h3>
              </div>
            )}
            {text && (
              <div className="SimpleSection__text-container">
                <p>{text}</p>
              </div>
            )}
            {button && <Button text={button?.text} href={button?.href} />}
          </div>
          <div className="SimpleSection__image-container" />
        </>
      )}
      <style jsx>{`
        .SimpleSection {
          height: 300px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .SimpleSection__content-container {
          display: flex;
          flex-direction: column;
          margin: 40px;
          max-width: 450px;
        }
        .SimpleSection__image-container {
          height: 200px;
          width: 200px;
          background: url(${image});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 50%;
        }
        .SimpleSection__text-container {
          margin-bottom: 16px;
        }
      `}</style>
    </article>
  );
};

export default SimpleSection;
