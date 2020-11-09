import React from "react";
import InfoContainer from "../../components/Recipies/InfoContainer";
import IngredientsContainer from "../../components/Recipies/IngredientsContainer";
import InstructionsContainer from "../../components/Recipies/InstructionsContainer";
import RecipeHero from "../../components/Recipies/RecipeHero";
import retrievedRecipies from "../../utils/recipies";

// component
const RecipieContainer = ({ selectedRecipie } = undefined) => {
  return (
    <>
      <RecipeHero image={selectedRecipie.image} name={selectedRecipie.name} />
      <InfoContainer 
      difficulty={selectedRecipie.difficulty} 
      time={selectedRecipie.time} 
      />
      <IngredientsContainer ingredients={selectedRecipie.ingredients} />
      <InstructionsContainer instructions={selectedRecipie.instructions} />
      
    </>
  );
};

export async function getStaticProps({ params }) {
  const { recipie } = params;
  const selectedRecipie = retrievedRecipies.find(
    (item) => item.name.split(" ").join("-").toLowerCase() === recipie
  );

  return {
    props: {
      selectedRecipie,
    },
  };
}

export async function getStaticPaths() {
  const paths = retrievedRecipies.map((recipe) => ({
    params: { recipie: recipe.name.split(" ").join("-").toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default RecipieContainer;
