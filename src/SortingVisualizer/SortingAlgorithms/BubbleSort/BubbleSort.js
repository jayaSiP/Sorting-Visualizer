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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const BubbleSort = async (array, animationSpeed, barRefs) => {
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

    const barOne = barRefs.current[idx1];
    const barTwo = barRefs.current[idx2];

    changeBackgroundColor(barOne, "rgba(255,165,0, 0.9)");
    changeBackgroundColor(barTwo, "rgba(255,165,0, 0.9)");

    await sleep(animationSpeed);

    if (doSwap) {
      changeBackgroundColor(barOne, "rgba(144,238,144, 0.9)");
      changeBackgroundColor(barTwo, "rgba(144,238,144, 0.9)");
      swapBars(barOne, barTwo);
    }

    await sleep(animationSpeed);

    if (isFinal) {
      const finalBar = barRefs.current[finalIdx];
      changeBackgroundColor(finalBar, "rgba(0, 164, 86, 0.6)");
      changeBoxShadow(finalBar, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
    } else {
      changeBackgroundColor(barOne, "rgba(225, 0, 120, 0.6)");
      changeBoxShadow(barOne, "rgba(225, 0, 120, 0.2)");
    }
  }

  await sleep(animationSpeed);
  resetBarStyleDefault(barRefs);
  playCompletedSoundEffect();
  enableButtons();
};

export default BubbleSort;
