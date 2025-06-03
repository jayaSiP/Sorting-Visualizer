import {
  swapBars,
  changeBackgroundColor,
  changeBoxShadow,
  enableButtons,
  disableButtons,
  playCompletedSoundEffect,
} from "../../functions.js";

const InsertionSort = async (array, animationSpeed, barRefs) => {
  disableButtons();

  const n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;

    changeBackgroundColor(barRefs, i, "rgba(0,0,255, 0.9)");

    while (j >= 0 && array[j] > key) {
      await new Promise((resolve) => {
        setTimeout(() => {
          swapBars(barRefs, j + 1, j);

          array[j + 1] = array[j];
          changeBackgroundColor(barRefs, j, "rgba(255,165,0, 0.9)");
          changeBackgroundColor(barRefs, j + 1, "rgba(144,238,144, 0.9)");
          resolve();
        }, animationSpeed);
      });
      j--;
    }
    array[j + 1] = key;

    await new Promise((resolve) => {
      setTimeout(() => {
        changeBackgroundColor(barRefs, j + 1, "rgba(0, 164, 86, 0.6)");
        changeBoxShadow(barRefs, j + 1, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        resolve();
      }, animationSpeed);
    });
  }

  playCompletedSoundEffect();
  enableButtons();
};

export default InsertionSort;
