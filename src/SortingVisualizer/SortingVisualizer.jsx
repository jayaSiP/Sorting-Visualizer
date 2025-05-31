import React, { useState, useEffect, useRef } from "react";
import Header from "./Components/Header/Header.jsx";
import ButtonsBar from "./Components/ButtonsBar/ButtonsBar.jsx";
import ArrayBar from "./Components/ArrayBar/ArrayBar.jsx";
import RangeSlider from "./Components/RangeSliders/RangeSlider.jsx";
import { randomIntFromInterval, playAudio } from "./HelperFunctions.js";
import BubbleSort from "./SortingAlgorithms/BubbleSort/BubbleSort.js";
import SelectionSort from "./SortingAlgorithms/SelectionSort/SelectionSort.js";
import InsertionSort from "./SortingAlgorithms/InsertionSort/InsertionSort.js";
import "./SortingVisualizer.css";
import ResetEffect from "./sounds/ResetEffect.mp3";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState(10);

  // Create refs for each bar (array length changes dynamically)
  const barRefs = useRef([]);

  // Generate new array when component mounts or numberOfArrayBars changes
  useEffect(() => {
    generateNewArray();
  }, [numberOfArrayBars]);

  const generateNewArray = () => {
    const newArray = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      newArray.push(randomIntFromInterval(5, 70));
    }
    playAudio(ResetEffect);
    setArray(newArray);
  };

  const onChangeArrayBarRangeSlider = (event, value) => {
    setNumberOfArrayBars(value);
  };

  const onChangeAnimationSpeedRangeSlider = (event, value) => {
    setAnimationSpeed(value);
  };

  const bubbleSort = () => {
    BubbleSort(array, animationSpeed, barRefs);
  };

  const selectionSort = () => {
    SelectionSort(array, animationSpeed, barRefs);
  };

  const insertionSort = () => {
    InsertionSort(array, animationSpeed, barRefs);
  };

  return (
    <div className="main-container">
      <Header />
      <ButtonsBar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
      />
      <ArrayBar array={array} barRefs={barRefs} />
      <RangeSlider
        numberOfArrayBars={numberOfArrayBars}
        animationSpeed={animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
    </div>
  );
};

export default SortingVisualizer;
