import React from "react";

import Card from "../common/Card";
import Slider from "../common/Slider";
import RecipeCard from "./RecipeCard";

const Recipies = ({ recipies }) => {
 
  const getRecipies = () =>
    recipies.map((recipie) => (
      <RecipeCard
        difficulty={recipie.difficulty}
        name={recipie.name}
        image={recipie.image}
        time={recipie.time}
      />
    ));

  return (
    <div className="Recipies">
      <div className="headerCard">
        <Card
          image="/assets/cuncittina.jpeg"
          title="Cuncittina's Recipies"
          text="Learn to cook with my wife, Cuncittina"
        />
      </div>
      <Slider slides={getRecipies()} />
      <style jsx>{`
        .headerCard {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Recipies;
