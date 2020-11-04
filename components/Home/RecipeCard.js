import React from "react";
import { useRouter } from "next/router";
import { lapaBlue } from "../../styles/colors";

const RecipeCard = ({ difficulty, time, name, image, slug }) => {
  const router = useRouter();
  const handleClick = (target) => () => {
    const newUrl = target.toLowerCase().split(" ").join("-");
    router.push(`/recipies/${newUrl}`);
  };
  return (
    <div className="RecipeCard" onClick={handleClick(name)}>
      <div className="RecipeCard__name-container">
        <div className="RecipeCard__overlay" />
        <p className="RecipeCard__text">{name}</p>
      </div>
      <div className="RecipeCard__info-container">
        <div className="RecipeCard__overlay" />
        <p className="RecipeCard__text">difficulty: {difficulty}</p>
        <p className="RecipeCard__text">time: {time} min.</p>
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
          max-width: 300px;
        }
        .RecipeCard:hover {
          border: solid transparent 2px;
          cursor: pointer;
        }
        .RecipeCard__overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: ${lapaBlue};
          border-radius: 8px;
        }
        .RecipeCard__text {
          margin: 0px;
          color: white;
          position: relative;
          border-radius: 8px;
        }
        .RecipeCard__name-container {
          text-align: center;
          font-family: "Balsamiq Sans", cursive;
          text-transform: capitalize;
        }
        .RecipeCard__info-container {
          display: flex;
          justify-content: space-between;
          font-family: "Balsamiq Sans", cursive;
        }
        .RecipeCard__name-container,
        .RecipeCard__info-container {
          position: relative;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
