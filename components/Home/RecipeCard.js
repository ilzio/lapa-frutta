import React from "react";

const RecipeCard = ({ difficulty, time, name, image }) => {
  return (
    <div className="RecipeCard">
      <div className="nameContainer">
        <div className="RecipeCardOverlay" />
        <p className="RecipeCardText">{name}</p>
      </div>
      <div className="infoContainer">
        <div className="RecipeCardOverlay" />
        <p className="RecipeCardText">difficulty: {difficulty}</p>
        <p className="RecipeCardText">time: {time} min.</p>
      </div>
      <style jsx>{`
        .RecipeCard {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;

          background-image: url(${image});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 100%;
          width: 100%;
          box-sizing: border-box;

          border-radius: 8px;
        }
        .RecipeCard:hover {
          border: solid transparent 2px;
          cursor: pointer;
        }
        .RecipeCardOverlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: #000000ab;
          border-radius: 8px;
        }
        .RecipeCardText {
          margin: 0px;
          color: white;
          position: relative;
          border-radius: 8px;
        }
        .nameContainer {
          text-align: center;
        }
        .infoContainer {
          display: flex;
          justify-content: space-between;
        }
        .nameContainer,
        .infoContainer {
          position: relative;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
