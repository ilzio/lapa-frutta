import React from "react";
import retrievedRecipies from "../../utils/recipies";

// component
const RecipieContainer = ({ selectedRecipie } = undefined) => {
  return (
    <div>
      <h1>this page is about {selectedRecipie.name} </h1>
      <img src={selectedRecipie.image} alt="" />
    </div>
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
