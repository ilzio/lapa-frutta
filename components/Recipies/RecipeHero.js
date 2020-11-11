import React from "react";
import {
  heroOverlay,
  lapaBlack,
  lapaWhite,
  lapaYellow,
} from "../../styles/colors";

const RecipeHero = ({ image, name }) => (
  <div className="RecipeHero">
    <div className="RecipeHero__overlay" />
    <div className="RecipeHero__lower-section">
      <h1 className="RecipeHero__title">{name}</h1>
    </div>
    <style jsx>{`
      .RecipeHero {
        width: 100%;
        height: 60vh;
        background: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: relative;
        text-align: center;
      }
      .RecipeHero__overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${heroOverlay};
      }
      .RecipeHero__lower-section {
        color: ${lapaWhite};
        position: relative;
      }
      .RecipeHero__title {
        text-shadow: 2px 1px ${lapaBlack};
        color: ${lapaYellow};
        text-transform: capitalize;
      }
    `}</style>
  </div>
);

export default RecipeHero;
