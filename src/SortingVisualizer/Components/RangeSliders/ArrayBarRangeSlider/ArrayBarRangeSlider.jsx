import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./ArrayBarRangeSlider.css";

const ArrayBarSlider = styled(Slider)({
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

const ArrayBarRangeSlider = ({ numberOfArrayBars, onChangeArrayBarRangeSlider }) => {
  const [bars, setBars] = useState(numberOfArrayBars);

  return (
    <div className="range-slider-container">
      <p id="text-array-size">Number of Arrays</p>
      <ArrayBarSlider
        id="arrayBarSlider"
        min={2}
        max={14}
        step={1}
        defaultValue={bars}
        valueLabelDisplay="auto"
        marks
        onChangeCommitted={onChangeArrayBarRangeSlider}
        onChange={(e, val) => setBars(val)}
      />
    </div>
  );
};

export default ArrayBarRangeSlider;
