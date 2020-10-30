import React from "react";
import { lapaBlue, lapaWhite } from "../../styles/colors";
import Card from "../common/Card";
import OrderNow from "./OrderNow";

const Why = ({ cards }) => (
  <section className="Why">
    <h2 className="Why__title">Why choose us</h2>
    <div className="Why__cards-container">
      {cards &&
        cards.map((card) => (
          <Card
            image={card?.image}
            title={card?.title}
            text={card?.text}
            button={card?.button}
            bgPosition={card?.bgPosition}
            textColor={lapaWhite}
            titleColor={lapaWhite}
            separator
            separatorColor={lapaWhite}
          />
        ))}
    </div>
    <OrderNow />
    <style jsx>{`
      .Why {
        height: auto;
        padding: 40px 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${lapaBlue};
        background-image: url("/assets/sicilia.svg");
        background-size: 100px;
        background-position: center;
        background-repeat: repeat;
      }

      .Why__title {
        text-align: center;
        margin-bottom: 32px;
        color: ${lapaWhite};
        text-shadow: 1.3px 1.3px black;
      }
      .Why__cards-container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
      }
    `}</style>
  </section>
);

export default Why;
