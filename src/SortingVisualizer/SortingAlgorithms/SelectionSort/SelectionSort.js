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
        barRefs.current[minIndexElement].style.backgroundColor = "rgba(0,0,255, 0.9)";
        barRefs.current[comparingElement1].style.backgroundColor = "rgba(0,0,0, 0.9)";
        barRefs.current[comparingElement2].style.backgroundColor = "rgba(255,165,0, 0.9)";

        if (doSwap) {
          barRefs.current[minIndexElement].style.backgroundColor = "rgba(144,238,144, 0.9)";
          barRefs.current[comparingElement1].style.backgroundColor = "rgba(144,238,144, 0.9)";
          const tempHeight = barRefs.current[comparingElement1].style.height;
          barRefs.current[comparingElement1].style.height = barRefs.current[minIndexElement].style.height;
          barRefs.current[minIndexElement].style.height = tempHeight;
        }

        resolve();
      }, animationSpeed);
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        if (isFinalElement) {
          barRefs.current[finalElement].style.backgroundColor = "rgba(0, 164, 86, 0.6)";
          barRefs.current[finalElement].style.boxShadow = "5px 5px 50px 5px rgba(0, 164, 86, 0.2)";
        } else {
          barRefs.current[comparingElement2].style.backgroundColor = "rgba(225, 0, 120, 0.6)";
          barRefs.current[minIndexElement].style.backgroundColor = "rgba(225, 0, 120, 0.6)";
        }
        resolve();
      }, animationSpeed);
    });
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < array.length; i++) {
        barRefs.current[i].style.backgroundColor = "";
        barRefs.current[i].style.boxShadow = "";
      }
      playCompletedSoundEffect();
      enableButtons();
      resolve();
    }, animationSpeed);
  });
};

export default SelectionSort;
