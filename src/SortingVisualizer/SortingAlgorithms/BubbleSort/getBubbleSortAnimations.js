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

const BubbleSort = (array, animationSpeed, barRefs) => {
  disableButtons();
  const animations = getBubbleSortAnimations(array);

  for (let i = 0; i < animations.length; i += 5) {
    const [idx1, idx2, doSwap, isFinal, finalIdx] = [
      animations[i],
      animations[i + 1],
      animations[i + 2],
      animations[i + 3],
      animations[i + 4],
    ];

    setTimeout(() => {
      const barOne = barRefs.current[idx1];
      const barTwo = barRefs.current[idx2];

      changeBackgroundColor(barOne, "rgba(255,165,0,0.9)");
      changeBackgroundColor(barTwo, "rgba(255,165,0,0.9)");

      if (doSwap) {
        changeBackgroundColor(barOne, "rgba(144,238,144,0.9)");
        changeBackgroundColor(barTwo, "rgba(144,238,144,0.9)");
        swapBarsRef(barOne, barTwo);
      }
    }, i * animationSpeed);

    setTimeout(() => {
      if (isFinal) {
        const finalBar = swapBars.current[finalIdx];
        changeBackgroundColor(finalBar, "rgba(0,164,86,0.6)");
        changeBoxShadow(finalBar, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
      } else {
        const barOne = swapBars.current[idx1];
        changeBackgroundColor(barOne, "rgba(225, 0, 120, 0.6)");
        changeBoxShadow(barOne, "rgba(225, 0, 120, 0.2)");
      }

      // If it's the last step
      if (finalIdx === 0 && i === animations.length - 5) {
        resetBarStyleDefault(barRefs, animationSpeed);
        playCompletedSoundEffect();
        enableButtons();
      }
    }, (i + 5) * animationSpeed);
  }
};

export default BubbleSort;
