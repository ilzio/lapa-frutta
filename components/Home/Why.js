import React from "react";
import Card from "../common/Card";

const Why = ({ cards }) => (
  <div className="Why">
    <div className="sectionTitleContainer">
      <h2>Why choose us</h2>
    </div>
    <div className="cardsContainer">
      {cards &&
        cards.map((card) => (
          <Card
            image={card?.image}
            title={card?.title}
            text={card?.text}
            button={card?.button}
          />
        ))}
    </div>
    <style jsx>
      {`
            .Why{
                height: 300px;
            }
            .sectionTitleContainer{
                text-align: center;s
            }
            .cardsContainer{
                height: 100%;
                display: flex;
                justify-content: space-around;
            }
        `}
    </style>
  </div>
);

export default Why;
