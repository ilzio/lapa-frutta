import React from "react";
import Hero from "./Hero";
import Melo from "./Melo";
import Recipies from "./Recipies";
import Why from "./Why";
import recipies from "../../utils/recipies";
import whyCards from "../../utils/whyCards";

const Home = ({ breakpoint }) => (
  <main>
    <Hero image="/assets/image.jpeg" />
    <Melo />
    <Why cards={whyCards} breakpoint={breakpoint} />

    <Recipies breakpoint={breakpoint} recipies={recipies} />
  </main>
);

export default Home;
