import React from "react";
import Button from "./Button";

const SimpleSection = ({ imagePosition, image, title, text, button }) => {
  return (
    <div className="SimpleSection">
      {imagePosition === "left" ? (
        <>
          <div className="image-Container" />
          <div className="content-Container">
            {title && (
              <div className="title-Container">
                <h3>{title}</h3>
              </div>
            )}
            {text && <div className="text-Container">{text}</div>}
            {button && <Button text={button?.text} href={button?.href} />}
          </div>
        </>
      ) : (
        <>
          <div className="content-Container">
            {title && (
              <div className="title-Container">
                <h3>{title}</h3>
              </div>
            )}
            {text && <div className="text-Container">{text}</div>}
            {button && <Button text={button?.text} href={button?.href} />}
          </div>
          <div className="image-Container" />
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
        .content-Container {
          display: flex;
          flex-direction: column;
          margin: 40px;
          max-width: 450px;
        }
        .image-Container {
          height: 200px;
          width: 200px;
          background: url(${image});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default SimpleSection;
