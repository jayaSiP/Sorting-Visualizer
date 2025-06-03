import {
  swapBars,
  changeBackgroundColor,
  changeBoxShadow,
  enableButtons,
  disableButtons,
  playCompletedSoundEffect,
} from "../../functions.js";

const BubbleSort = async (array, animationSpeed, barRefs) => {
  disableButtons();

  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          changeBackgroundColor(barRefs, j, "rgba(0,0,255, 0.9)");
          changeBackgroundColor(barRefs, j + 1, "rgba(0,0,0, 0.9)");

          if (array[j] > array[j + 1]) {
            swapBars(barRefs, j, j + 1);
            // swap the values in the array as well so logic is correct
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
          resolve();
        }, animationSpeed);
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          changeBackgroundColor(barRefs, j, "rgba(225, 0, 120, 0.6)");
          changeBackgroundColor(barRefs, j + 1, "rgba(225, 0, 120, 0.6)");
          resolve();
        }, animationSpeed);
      });
    }
    // Mark final sorted element
    changeBackgroundColor(barRefs, n - i - 1, "rgba(0, 164, 86, 0.6)");
    changeBoxShadow(barRefs, n - i - 1, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
  }

  // Mark first element as sorted too
  changeBackgroundColor(barRefs, 0, "rgba(0, 164, 86, 0.6)");
  changeBoxShadow(barRefs, 0, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");

  playCompletedSoundEffect();
  enableButtons();
};

export default BubbleSort;
