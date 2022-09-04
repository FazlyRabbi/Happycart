import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

import b1 from "../../../asstes/img/b1.jpg";
import b2 from "../../../asstes/img/b2.jpg";
import b3 from "../../../asstes/img/b3.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./sliderMain.css";

function SliderMain({ children }) {
  const containerRef = useRef();

  const [current, setCurrent] = useState(1);

  const [translateX, setTranslateX] = useState(0);

  const actionHandler = (mode) => {
    containerRef.current.style.transitionDuration = "400ms";

    if (mode === "prev") {
      if (current <= 1) {
        setTranslateX(0);
        setCurrent(children.length);
      } else {
        setTranslateX(containerRef.current.clientWidth * (current - 1));
        setCurrent((prev) => --prev);
      }
    } else if (mode === "next") {
      if (current >= children.length) {
        setTranslateX(containerRef.current.clientWidth * (children.length + 1));
        setCurrent(1);
      } else {
        setTranslateX(containerRef.current.clientWidth * (current + 1));
        setCurrent((prev) => ++prev);
      }
    }
  };

  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * current);
      }
      if (current >= children?.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, children]);

  // // useMemo
  const slides = () => {
    if (children?.length > 1) {
      let items = children.map((child, index) => (
        <li key={index} className="slide">
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className="slide">
          {children[children.length - 1]}
        </li>,

        ...items,

        <li key={children.length + 2} className="slide">
          {children[0]}
        </li>,
      ];
    }
  };

  // // position first element correctly & this will render only ones
  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <section className="sliderMain min-h-[full]">
      <ul
        ref={containerRef}
        className="SliderWrapper"
        style={{
          transform: `translateX(-${translateX}px)`,
        }}
      >
       {slides()} 
      </ul>

      <IoIosArrowForward
        onClick={() => actionHandler("next")}
        className="controllerr controller-right xl:min-h-[315px] lg:min-h-[325px] md:min-h-[200px]"
      />

      <IoIosArrowBack
        onClick={() => actionHandler("prev")}
        className="  controllerr controller-left xl:min-h-[315px]  lg:min-h-[325px] md:min-h-[200px]"
      />
    </section>
  );
}

export default SliderMain;
