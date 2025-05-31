import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./AnimationSpeedRangeSlider.css";

const AnimationSpeedSlider = styled(Slider)({
  color: "rgba(100, 180, 255, 1)",
  inlineSize: "60%",
  padding: 10,
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  '& .MuiSlider-track': {
    height: 4,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 4,
    borderRadius: 4,
  },
});

const AnimationSpeedRangeSlider = ({ animationSpeed, onChangeAnimationSpeedRangeSlider }) => {
  const [speed, setSpeed] = useState(animationSpeed);

  return (
    <div className="range-slider-container">
      <p id="text-animation-speed">Animation Speed (ms)</p>
      <AnimationSpeedSlider
        id="animationSpeedSlider"
        min={10}
        max={500}
        defaultValue={speed}
        valueLabelDisplay="auto"
        onChangeCommitted={onChangeAnimationSpeedRangeSlider}
        onChange={(e, val) => setSpeed(val)}
      />
    </div>
  );
};

export default AnimationSpeedRangeSlider;
