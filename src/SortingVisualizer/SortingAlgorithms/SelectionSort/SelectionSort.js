import {
  swapBars,
  changeBackgroundColor,
  changeBoxShadow,
  enableButtons,
  disableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const SelectionSort = async (array, animationSpeed, barRefs) => {
  disableButtons();
  const animations = getSelectionSortAnimations(array);

  for (let i = 0; i < animations.length; i += 6) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      minIndexElement = animations[i + 2],
      doSwap = animations[i + 3],
      isFinalElement = animations[i + 4],
      finalElement = animations[i + 5];

    await new Promise((resolve) => {
      setTimeout(() => {
        changeBackgroundColor(barRefs, minIndexElement, "rgba(0,0,255, 0.9)");
        changeBackgroundColor(barRefs, comparingElement1, "rgba(0,0,0, 0.9)");
        changeBackgroundColor(barRefs, comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap) {
          changeBackgroundColor(barRefs, minIndexElement, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(barRefs, comparingElement1, "rgba(144,238,144, 0.9)");
          swapBars(barRefs, comparingElement1, minIndexElement);
        }

        resolve();
      }, animationSpeed);
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        if (isFinalElement) {
          changeBackgroundColor(barRefs, finalElement, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(barRefs, finalElement, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        } else {
          changeBackgroundColor(barRefs, comparingElement2, "rgba(225, 0, 120, 0.6)");
          changeBackgroundColor(barRefs, minIndexElement, "rgba(225, 0, 120, 0.6)");
        }
        resolve();
      }, animationSpeed);
    });
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < array.length; i++) {
        changeBackgroundColor(barRefs, i, "");
        changeBoxShadow(barRefs, i, "");
      }
      playCompletedSoundEffect();
      enableButtons();
      resolve();
    }, animationSpeed);
  });
};

export default SelectionSort;
