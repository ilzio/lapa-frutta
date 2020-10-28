import React from "react";
import Card from "../common/Card";

const Why = ({ cards }) => (
  <section className="Why">
    <div className="Why__title-container">
      <h2>Why choose us</h2>
    </div>
    <div className="Why__cards-container">
      {cards &&
        cards.map((card) => (
          <Card
            image={card?.image}
            title={card?.title}
            text={card?.text}
            button={card?.button}
            bgPosition={card?.bgPosition}
          />
        ))}
    </div>
    <style jsx>{`
      .Why {
        height: auto;
        background-color: #0f52da;
        color: white;
        padding: 40px 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }
      .Why h2 {
        text-shadow: 1.3px 1.3px black;
      }
      .Why__title-container {
        text-align: center;
        margin-bottom: 32px;
      }
      .Why__cards-container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </section>
);

export default Why;
