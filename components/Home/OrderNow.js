import React from "react";
import { lapaBlack, lapaBlue, lapaWhite } from "../../styles/colors";
import SimpleSection from "../common/SimpleSection";


const OrderNow = () => (
  <section className="OrderNow">
    <SimpleSection
      imagePosition="right"
      image="assets/lapa-casci.jpg"
      bgPosition="left"
      title="Order now!"
      text="We deliver in eastern Sicily using only traditional transportation technologies. Get fresh fruit on your table now!"
      textColor={lapaBlack}
      titleColor={lapaBlue}
      button={{
        text: "Order now",
        href: "about",
      }}
    />
    <style jsx>{`
      .OrderNow {
        width: 800px;
        background-color: ${lapaWhite};
        background-size: 100px;
        background-position: center;
        background-repeat: repeat;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
      }
    `}</style>
  </section>
);

export default OrderNow;
