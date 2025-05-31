import getInsertionSortAnimations from "./getInsertionSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const InsertionSort = (array, animationSpeed, barRefs) => {
  disableButtons();
  const animations = getInsertionSortAnimations(array);

  for (let i = 0; i < animations.length; i += 4) {
    const comparingElement1 = animations[i];
    const comparingElement2 = animations[i + 1];
    const doSwap = animations[i + 2];
    const sortedTill = animations[i + 3];

    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        const barOne = swapBars.current[comparingElement1];
        const barTwo = swapBars.current[comparingElement2];

        changeBackgroundColor(barOne, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(barTwo, "rgba(255,165,0, 0.9)");

        if (doSwap) {
          changeBackgroundColor(barOne, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(barTwo, "rgba(144,238,144, 0.9)");
          swapBarsRef(barOne, barTwo);
        }

        resolve();
      }, i * animationSpeed);
    });

    const promise2 = new Promise((resolve) => {
      setTimeout(() => {
        for (let j = 0; j <= sortedTill; j++) {
          const bar = barRefs.current[j];
          changeBackgroundColor(bar, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(bar, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        }

        if (
          comparingElement1 === array.length - 1 &&
          comparingElement2 === array.length - 1
        ) {
          resolve();
        }
      }, (i + 4) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(playCompletedSoundEffect)
      .then(enableButtons);
  }

  setTimeout(() => {
    resetBarStyleDefault(barRefs);
  }, (animations.length + 4) * animationSpeed);
};

export default InsertionSort;
