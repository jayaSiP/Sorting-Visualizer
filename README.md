# Sorting Visualizer

This is a simple web application built with ReactJS to help understand classic sorting algorithms through animation.

The tool provides a visual representation of how different sorting algorithms work, allowing users to interactively observe how arrays are sorted.

## ✨ Features

- Animated visualization of sorting algorithms
- Interactive UI with adjustable speed and array size
- Built using ReactJS and modern web design

## 🔢 Included Sorting Algorithms

- Bubble Sort
- Selection Sort
- Insertion Sort

## 🧩 Components Overview

1. **Header**  
   Displays an animated title for the visualizer.

2. **Control Panel**  
   Includes buttons to generate new arrays and start sorting animations.

3. **Array Bars**  
   The core visualization area with vertical bars representing array elements.

4. **Settings Slider**  
   Sliders to change the animation speed and number of array bars in real time.

## ⚙️ How the Animation Works

The application simulates sorting by:

- Recording the comparisons and swaps into an animation queue
- Using `setTimeout()` to animate each step in order
- Dynamically changing the size and color of bars to indicate comparisons and final positions

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/sorting-visualizer
cd sorting-visualizer
npm install
npm start
```
