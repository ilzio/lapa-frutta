import React, { useState, useEffect, useRef } from "react";

const Slider = ({ slides }) => {
  const slideWidth = 300;
  const slider = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [scrolled, setScrolled] = useState(null);

  function handleArrowsVisibility() {
    const atFirstSlide = slider.current.scrollLeft === 0;
    const scrollMax = slider.current.scrollWidth - slider.current.clientWidth;
    const atLastSlide = slider.current.scrollLeft >= scrollMax;

    if (atFirstSlide) {
      setShowLeftArrow(false);
      setShowRightArrow(true);
    } else if (atLastSlide) {
      setShowLeftArrow(true);
      setShowRightArrow(false);
    } else {
      setShowLeftArrow(true);
      setShowRightArrow(true);
    }
  }

  // this is a trick!! change state in order to tell react something has changed and use "useEffect" to handle arrows visibility
  const handleScroll = (e) => {
    setScrolled(e.timeStamp);
  };

  useEffect(() => {
    handleArrowsVisibility();
  }, [scrolled]);

  const handleClick = (direction) => () => {
    if (direction === "right") {
      slider.current.scrollLeft += slideWidth;
    } else {
      slider.current.scrollLeft -= slideWidth;
    }
  };

  // component mount + unmount -> initial arrow visibility + add /remove event listeners
  useEffect(() => {
    // assigning slider.current to a variable because at the moment of unmont it will have changed, therefore throwing error: slider.current is null
    const sliderCurrent = slider.current;
    handleArrowsVisibility();
    window.addEventListener("resize", handleArrowsVisibility);
    sliderCurrent.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleArrowsVisibility);
      sliderCurrent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Slider">
      <div ref={slider} className="Slider__container">
        {slides.map((slide) => (
          <div className="Slider__slide">{slide}</div>
        ))}
      </div>
      <div
        className="Slider__arrow-container Slider__arrow-container--left"
        onClick={handleClick("left")}
        role="button"
        style={{ display: `${showLeftArrow ? "flex" : "none"}` }}
      >
        <div className="Slider__arrow Slider__arrow--left" />
      </div>
      <div
        className="Slider__arrow-container Slider__arrow-container--right"
        onClick={handleClick("right")}
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
          max-width: 1280px;
          scroll-snap-type: x mandatory;
          box-sizing: border-box;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
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
        .Slider__container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Slider;
