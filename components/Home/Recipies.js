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
    <section className="Recipies">
      <div className="Recipies-card-container">
        <Card
          image="/assets/cuncittina.jpeg"
          title="Cuncittina's Recipies"
          textColor="black"
          textShadow="none"
          titleShadow="none"
          separator
          separatorColor="#0f52da"
        />
      </div>
      <Slider slides={getRecipies()} />
      <style jsx>{`
        .Recipies-card-container {
          display: flex;
          justify-content: center;
        }
        .Recipies {
          background-image: url("/assets/ficurinia.svg");
          background-size: 70px;
          background-repeat: repeat;
          padding: 80px 0
        }
      `}</style>
    </section>
  );
};

export default Recipies;
