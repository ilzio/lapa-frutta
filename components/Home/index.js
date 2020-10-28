import React from "react";
import Hero from "./Hero";
import Melo from "./Melo";
import OrderNow from "./OrderNow";
import Recipies from "./Recipies";
import Why from "./Why";
import recipies from '../../utils/recipies';
import whyCards from '../../utils/whyCards';




const Home = () => (
  <main>
    <Hero image="/assets/image.jpeg" />
    <Melo />
    {/* test only */}
    <div style={{ height: "100px" }} />
    {/* test only */}
    <Why cards={whyCards} />
    {/* test only */}
    <div style={{ height: "100px" }} />
    {/* test only */}
    <OrderNow />
    {/* test only */}
    <div style={{ height: "100px" }} />
    {/* test only */}
    <Recipies recipies={recipies} />
  </main>
);

export default Home;
