import React, { useState } from "react";
import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider.jsx";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider.jsx";
import "./RangeSlider.css";

const RangeSlider = ({
  numberOfArrayBars,
  animationSpeed,
  onChangeArrayBarRangeSlider,
  onChangeAnimationSpeedRangeSlider,
}) => {
  const [bars, setBars] = useState(numberOfArrayBars);
  const [speed, setSpeed] = useState(animationSpeed);

  return (
    <div id="range-slider">
      <div className="column">
        <ArrayBarRangeSlider
          numberOfArrayBars={bars}
          onChangeArrayBarRangeSlider={(e, val) => {
            setBars(val);
            onChangeArrayBarRangeSlider(e, val);
          }}
        />
      </div>
      <div className="column">
        <AnimationSpeedRangeSlider
          animationSpeed={speed}
          onChangeAnimationSpeedRangeSlider={(e, val) => {
            setSpeed(val);
            onChangeAnimationSpeedRangeSlider(e, val);
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
