import React from "react";
import Hero from "./Hero";
import Melo from "./Melo";
import OrderNow from "./OrderNow";
import Recipies from "./Recipies";
import Why from "./Why";

const cards = [
  {
    title: "Fresh products",
    text: "Our tomatos are as redder than yours",
    image: "/assets/ciliegino.jpg",
  },
  {
    title: "Locally sourced",
    text: "This is my cousin, working in the vineyard",
    image: "/assets/zappa-vigna.jpg",
  },
  {
    title: "We delivery!",
    text: "It might get a bit slow, though...",
    image: "/assets/lapa-front.jpeg",
  },
];

const slides = [
  "/assets/Recipies/cannolo.jpg",
  "/assets/Recipies/norma.jpg",
  "/assets/Recipies/parmigiana.jpg",
  "/assets/Recipies/puppetta.jpg",
];

const Home = () => (
  <div>
    <Hero image="/assets/image.jpeg" />
    <Melo />
    {/* test only */}
    <div style={{ height: "100px" }} />
    {/* test only */}
    <Why cards={cards} />
    {/* test only */}
    <div style={{ height: "100px" }} />
    {/* test only */}
    <OrderNow />
    {/* test only */}
    <div style={{ height: "100px" }} />
    {/* test only */}
    <Recipies slides={slides} />
  </div>
);

export default Home;
