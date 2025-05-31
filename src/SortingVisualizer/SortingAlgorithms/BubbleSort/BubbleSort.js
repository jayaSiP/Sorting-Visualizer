import getBubbleSortAnimations from "./getBubbleSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBarsRef,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const BubbleSort = (array, animationSpeed, barRefs) => {
  disableButtons();
  const animations = getBubbleSortAnimations(array);

  for (let i = 0; i < animations.length; i += 5) {
    const comparingElement1 = animations[i];
    const comparingElement2 = animations[i + 1];
    const doSwap = animations[i + 2];
    const isFinalElement = animations[i + 3];
    const finalElement = animations[i + 4];

    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        const barOne = barRefs.current[comparingElement1];
        const barTwo = barRefs.current[comparingElement2];

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
        if (isFinalElement) {
          const finalBar = barRefs.current[finalElement];
          changeBackgroundColor(finalBar, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(finalBar, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        } else {
          const barOne = barRefs.current[comparingElement1];
          changeBackgroundColor(barOne, "rgba(225, 0, 120, 0.6)");
          changeBoxShadow(barOne, "rgba(225, 0, 120, 0.2)");
        }

        if (finalElement === 0) resolve();
      }, (i + 5) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(playCompletedSoundEffect)
      .then(enableButtons);
  }

  setTimeout(() => {
    resetBarStyleDefault(barRefs);
  }, (animations.length + 5) * animationSpeed);
};

export default BubbleSort;
