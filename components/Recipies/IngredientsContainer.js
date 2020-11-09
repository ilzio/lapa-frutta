import React from "react";
import { lapaBlue } from "../../styles/colors";

const IngredientsContainer = ({ ingredients }) => {
  const getIngredients = () => {
    const keys = Object.keys(ingredients);
    return keys.map((key) => (
      <div className="IngredientsContainer--ingredient-row">
        <p className="IngredientsContainer--ingredient">{key}</p>
        <p className="IngredientsContainer--quantity">{ingredients[key]}</p>
        <style jsx>{`
          .IngredientsContainer--ingredient-row {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .IngredientsContainer--ingredient {
            font-weight: bold;
            margin-right: 8px;
          }
          .IngredientsContainer--quantity {
          }
        `}</style>
      </div>
    ));
  };
  return (
    <div className="IngredientsContainer">
      <h2 className="IngredientsContainer__title">Ingredients</h2>
      {getIngredients()}
      <style jsx>{`
        .IngredientsContainer {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .IngredientsContainer__title {
          color: ${lapaBlue};
          text-align: center;
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
};

export default IngredientsContainer;
