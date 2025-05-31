const getBubbleSortAnimations = (array) => {
  const animations = []; 
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push(j, j + 1, false, false, -1);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animations.push(j, j + 1, true, false, -1);
      }
    }
    animations.push(
      array.length - 1 - i,
      array.length - 1 - i,
      false,
      true,
      array.length - 1 - i
    );
  }
  animations.push(0, 0, false, true, 0);

  return animations;
};

export default getBubbleSortAnimations;
