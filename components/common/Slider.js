import React, { useRef, useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleArrowsVisibility);
    handleArrowsVisibility
  });

  

  const slider = useRef(null);
  
  const handleArrowsVisibility = () => {
    console.log("called")
    if (slider.current.scrollWidth > slider.current.clientWidth) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  };

  const onClick = (direction) => () => {
    if (direction === "right") {
      console.log("direction: right");
      slider.current.scrollLeft += 350;
      console.log();
    } else {
      slider.current.scrollLeft -= 350;
    }
  };

  return (
    <div className="Slider">
      <div ref={slider} className="sliderContainer">
        {slides.map((slide) => {
          return <div className="slide">{slide}</div>;
        })}
      </div>

      <div
        className="arrowContainer left"
        onClick={onClick("left")}
        role="button"
        style={{ display: `${showArrows ? "flex" : "none"}` }}
      >
        <div className="leftArrow" />
      </div>
      <div
        className="arrowContainer right"
        onClick={onClick("right")}
        role="button"
        style={{ display: `${showArrows ? "flex" : "none"}` }}
      >
        <div className="rightArrow" />
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
          border: solid red 1px;
          position: relative;
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
        .arrowContainer {
          position: absolute;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .arrowContainer.right {
          right: 0;
          top: 0;
        }
        .arrowContainer.left {
          left: 0;
          top: 0;
        }

        .rightArrow {
          height: 40px;
          width: 40px;
          background-image: url(${"/assets/right-arrow.svg"});
        }
        .leftArrow {
          height: 40px;
          width: 40px;
          background-image: url(${"/assets/right-arrow.svg"});
          transform: rotate(180deg);
        }
        .slide {
          padding: 0px 8px;
          height: 100%;
          min-width: 350px;
          scroll-snap-align: start;
        }
        .sliderImage {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Slider;
