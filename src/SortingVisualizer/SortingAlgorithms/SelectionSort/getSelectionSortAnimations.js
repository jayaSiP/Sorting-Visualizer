const getSelectionSortAnimations = (array) => {
  const animations = [];
  let min_idx;

  for (let i = 0; i < array.length; i++) {
    min_idx = i;
    animations.push(i, i, min_idx, false, false, -1);

    for (let j = i + 1; j < array.length; j++) {
      animations.push(i, j, min_idx, false, false, -1);
      if (array[j] < array[min_idx]) {
        min_idx = j;
        animations.push(i, j, min_idx, false, false, -1);
      }
    }

    if (min_idx !== i) {
      [array[i], array[min_idx]] = [array[min_idx], array[i]];
      animations.push(i, i, min_idx, true, false, -1);
    }

    animations.push(i, i, i, false, true, i);
  }

  return animations;
};

export default getSelectionSortAnimations;
