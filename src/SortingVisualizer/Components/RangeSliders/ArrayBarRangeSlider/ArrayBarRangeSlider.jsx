import React, { useState } from "react";
import { Slider, withStyles } from "@material-ui/core";
import "./ArrayBarRangeSlider.css";

const ArrayBarSlider = withStyles({
  root: {
    color: "rgba(100, 180, 255, 1)",
    inlineSize: "60%",
    padding: 10,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginTop: -4,
    marginLeft: 0,
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

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
