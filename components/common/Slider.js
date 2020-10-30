import React, { useRef, useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const slider = useRef(null);
  const slideWidth = 300;

  const handleArrowsVisibility = () => {
    if (slider.current.scrollWidth > slider.current.clientWidth) {
      scrolled === 0 ? setShowLeftArrow(false) : setShowLeftArrow(true);
      scrolled >= slider.current.scrollLeftMax
        ? setShowRightArrow(false)
        : setShowRightArrow(true);
    } else {
      setShowLeftArrow(false);
      setShowRightArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleArrowsVisibility);
    handleArrowsVisibility();
  });

  const onClick = (direction) => () => {
    if (direction === "right") {
      slider.current.scrollBy({ left: +slideWidth });
      setScrolled((prevState) => prevState + slideWidth);
    } else {
      slider.current.scrollBy({ left: -slideWidth });
      setScrolled((prevState) => prevState - slideWidth);
    }
  };

  return (
    <div className="Slider">
      <div ref={slider} className="Slider__container">
        {slides.map((slide) => (
          <div className="Slider__slide">{slide}</div>
        ))}
      </div>
      <div
        className="Slider__arrow-container Slider__arrow-container--left"
        onClick={onClick("left")}
        role="button"
        style={{ display: `${showLeftArrow ? "flex" : "none"}` }}
      >
        <div className="Slider__arrow Slider__arrow--left" />
      </div>
      <div
        className="Slider__arrow-container Slider__arrow-container--right"
        onClick={onClick("right")}
        role="button"
        style={{ display: `${showRightArrow ? "flex" : "none"}` }}
      >
        <div className="Slider__arrow Slider__arrow--right" />
      </div>
      <style jsx>{`
        .Slider {
          height: 300px;
          width: 100%;
          margin-bottom: 40px;
          padding: 0px 8px;
          position: relative;
          margin: 24px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
        .Slider__container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          max-width: 1280px;
          scroll-snap-type: x mandatory;
          box-sizing: border-box;
        }
        .Slider__arrow-container {
          position: absolute;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .Slider__arrow {
          height: 40px;
          width: 40px;
          background-image: url(${"/assets/arrow-right-transparency.svg"});
          background-size: cover;
          background-position: center;
        }
        .Slider__arrow--left {
          transform: rotate(180deg);
        }
        .Slider__arrow-container--right {
          right: 16px;
          top: 0;
        }
        .Slider__arrow-container--left {
          left: 16px;
          top: 0;
        }
        .Slider__slide {
          padding: 0px 8px;
          height: 100%;
          min-width: ${slideWidth}px;
          scroll-snap-align: start;
          box-sizing: border-box;
        }
        .Slider::-webkit-scrollbar{
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Slider;
