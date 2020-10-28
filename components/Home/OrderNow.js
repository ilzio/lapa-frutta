import React from "react";
import SimpleSection from "../common/SimpleSection";

const OrderNow = () => (
  <section className="OrderNow">
    <SimpleSection
      imagePosition="right"
      image="assets/lapa-casci.jpg"
      title="Order now!"
      text="We deliver in eastern Sicily using only traditional transportation technologies. Get fresh fruit on your table now!"
      button={{
        text: "Order now",
        href: "about",
      }}
    />
  </section>
);

export default OrderNow;
