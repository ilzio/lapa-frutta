import React from "react";
import Card from "../common/Card";
import Slider from "../common/Slider";
import OrderNow from "./OrderNow";
import { lapaBlue, lapaWhite } from "../../styles/colors";
import themeBreakpoints from "../../styles/breakpoints";

function getCards(cardsFromProps) {
  return cardsFromProps.map((card) => (
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
  ));
}

const Why = ({ cards, breakpoint }) => {
  const cardsToDisplay = getCards(cards);
  return (
    <section className="Why">
      <h2 className="Why__title">Why choose us</h2>
      {breakpoint !== themeBreakpoints.desktop ? (
        <Slider breakpoint={breakpoint} slides={cardsToDisplay} />
      ) : (
        <div className="Why__cards-container">{cardsToDisplay}</div>
      )}

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
          overflow: hidden;
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
};

export default Why;
