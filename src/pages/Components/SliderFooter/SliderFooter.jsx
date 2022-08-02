import React, {
  Children,
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./sliderFooter.css";

function SliderFooter({ children }) {
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

  // useMemo
  const slides = () => {
    if (children?.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className="FooterSlide">
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className="FooterSlide">
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className="FooterSlide">
          {children[0]}
        </li>,
      ];
    }
  };

  // position first element correctly & this will render only ones
  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <section className="FooterSliderMain">
      <ul
        ref={containerRef}
        className="FooterSliderWrapper"
        style={{
          transform: `translateX(-${translateX}px)`,
        }}
      >
        {slides()}
      </ul>

      <IoIosArrowForward
        onClick={() => actionHandler("next")}
        className="FooterSliderController FooterSliderController-right"
      />

      <IoIosArrowBack
        onClick={() => actionHandler("prev")}
        className="  FooterSliderController FooterSliderController-left  "
      />
    </section>
  );
}

export default SliderFooter;
