import React from "react";

const Slider = ({ slides }) => (
  <div className="Slider">
    <div className="sliderContainer">
      {slides.map((slide) => (
        <img className="slide sliderImage" src={slide} alt="" srcSet="" />
      ))}
    </div>
    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      .Slider {
        height: 300px;
        width: 100%;
        margin-bottom: 40px;
        padding: 0px 8px;
      }
      .sliderContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
      }
      .slide {
        padding: 0px 8px;
        scroll-snap-align: start;
      }
      .sliderImage {
        max-width: 100%;
        height: auto;
      }
    `}</style>
  </div>
);

export default Slider;
