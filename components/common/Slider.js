import React, { useState, useEffect, useRef } from "react";
import breakpoints from "../../styles/breakpoints";

const Slider = ({ slides, breakpoint, autoplay = false }) => {
  const slideWidth = 300;
  const slider = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [shouldAutoplay, setAutoplay] = useState(autoplay);
  const [intervalID, setintervalID] = useState(null);
  const noArrows = false;
  function handleArrowsVisibility() {
    
    const biggerThanContent =
      slider.current.scrollWidth > slider.current.clientWidth;
    if (noArrows || !biggerThanContent) {
      setShowLeftArrow(false);
      setShowRightArrow(false);
      return;
    }
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
  function handleScroll() {
    handleArrowsVisibility();
  }

  const handleClick = (direction) => () => {
    console.log("clicked should set autoplay to false");
    setAutoplay(false);
    if (direction === "right") {
      slider.current.scrollLeft += slideWidth;
    } else {
      slider.current.scrollLeft -= slideWidth;
    }
  };

  const autoScroll = () => {
    if (slider.current !== null && slider.current.scrollWidth > slider.current.clientWidth ) {
      const sliderCurrent = slider.current;
      const scrollMax = sliderCurrent.scrollWidth - sliderCurrent.clientWidth;
      const atLastSlide = sliderCurrent.scrollLeft >= scrollMax;

      if (atLastSlide) {
        sliderCurrent.scrollLeft = 0;
      } else {
        sliderCurrent.scrollLeft += slideWidth;
      }
    } 
  };

  function autoplayInit() {
    if (shouldAutoplay) {
      const id = setInterval(() => {
        autoScroll();
      }, 2000);
      setintervalID(id);
    }
  }

  function stopAutoPlay() {
    clearInterval(intervalID);
  }

  useEffect(() => {
    if (shouldAutoplay === false) {
      stopAutoPlay();
    }
  }, [shouldAutoplay]);

  // component mount + unmount
  useEffect(() => {
    // sliderCurrent: when component unmonts slider.current will have changed, causing error "slider.current is null"
    const sliderCurrent = slider.current;
    handleArrowsVisibility();
    autoplayInit();
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
          <div
            className={`Slider__slide ${
              breakpoint === breakpoints.mobile && "Slider__slide--mobile"
            }`}
          >
            {slide}
          </div>
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
          background-image: url(${"/assets/arrow-right-yellow.svg"});
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
        .Slider__slide--mobile {
          min-width: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .Slider__container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Slider;
