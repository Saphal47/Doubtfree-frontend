import React, { useEffect, useState } from "react";
import classNames from "classnames";

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const texts = ["certified.", "skilled.", "trained."];
  const delay = 2000; // Delay between text changes in milliseconds (adjusted)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-20 overflow-hidden mr-6 mt-0">
      <div
        className={classNames("text-center font-bold relative transition-all", {
          "text-4xl lg:text-5xl xl:text-5xl": index === 0,
          "text-4xl lg:text-5xl xl:text-6xl": index === 1,
          "text-4xl lg:text-6xl xl:text-6xl": index === 2,
        })}
      >
        {texts.map((text, i) => (
          <div
            key={i}
            className={classNames("text-blue-500 absolute top-0 opacity-0 transition-opacity", {
              "opacity-100": index === i,
            })}
            style={{ top: `${i * 100}%` }}
          >
            <span className="text-black">Get</span> {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
