import React from "react";

// component
const RecipieContainer = ({selectedRecipie}=undefined) => {
  return (
    <div>
      <h1>this page is about {selectedRecipie.name} </h1>
      <img src={selectedRecipie.image} alt=""/>
    </div>
  );
};

export async function getStaticProps({ params }) {
  //   get parameter
  const { recipie } = params;
  // search in file
  const retrievedRecipies = await require("../../utils/recipies.js").default;
  // return object
  const selectedRecipie = retrievedRecipies.find(item =>
    item.name.split(" ").join("-").toLowerCase() === recipie
  );

  return {
    props: {
      selectedRecipie,
    },
  };
}

export async function getStaticPaths() {
  const retrievedRecipies = await require("../../utils/recipies.js").default;
  const paths = retrievedRecipies.map((recipe) => ({
    params: { recipie: recipe.name.split(" ").join("-").toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default RecipieContainer;
