import getBubbleSortAnimations from "./getBubbleSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const BubbleSort = (array, animationSpeed) => {
  disableButtons();
  const animations = getBubbleSortAnimations(array);
  for (let i = 0; i < animations.length; i += 5) {
    const comparingElement1 = animations[i];
    const comparingElement2 = animations[i + 1];
    const doSwap = animations[i + 2];
    const isFinalElement = animations[i + 3];
    const finalElement = animations[i + 4];
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        changeBackgroundColor(comparingElement1, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");
        if (doSwap === true) {
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(comparingElement2, "rgba(144,238,144, 0.9)");
          swapBars(comparingElement1, comparingElement2);
        }
      }, i * animationSpeed);
      resolve();
    });
    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (isFinalElement === true) {
          changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px  rgba(0, 164, 86, 0.2)"
          );
        } else {
          changeBackgroundColor(comparingElement1, "rgba(225, 0, 120, 0.6)");
          changeBoxShadow(comparingElement1, "rgba(225, 0, 120, 0.2)");
        }
        if (finalElement === 0) resolve();
      }, (i + 5) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(playCompletedSoundEffect)
      .then(enableButtons);
  }
  resetBarStyleDefault(array, (animations.length + 5) * animationSpeed);
};
export default BubbleSort;
