import CompletedEffect from "./sounds/CompletedEffect.mp3";

export function getBarStyle(barRefs, index) {
  const bar = barRefs.current[index];
  if (!bar) return [];

  const right = bar.querySelector(".right-color-bar")?.style;
  const left = bar.querySelector(".left-color-bar")?.style;
  const back = bar.querySelector(".back-color-bar")?.style;
  const front = bar.querySelector(".front-color-bar")?.style;
  const bottom = bar.querySelector(".bottom")?.style;

  return [right, left, back, front, bottom].filter(Boolean);
}

export function changeBackgroundColor(barRefs, index, color) {
  const styleOfElement = getBarStyle(barRefs, index);
  for (let j = 0; j < styleOfElement.length; j++) {
    styleOfElement[j].backgroundColor = color;
  }
}

export function changeBoxShadow(barRefs, index, shadow) {
  const styleOfElement = getBarStyle(barRefs, index);
  for (let j = 0; j < styleOfElement.length; j++) {
    styleOfElement[j].boxShadow = shadow;
  }
}

export function swapBars(barRefs, index1, index2) {
  const styleOfElement1 = getBarStyle(barRefs, index1);
  const styleOfElement2 = getBarStyle(barRefs, index2);
  for (let j = 0; j < 4; j++) {
    const tempHeight = styleOfElement1[j].height;
    styleOfElement1[j].height = styleOfElement2[j].height;
    styleOfElement2[j].height = tempHeight;

    const h1 = parseInt(styleOfElement1[j].height, 10);
    const h2 = parseInt(styleOfElement2[j].height, 10);

    styleOfElement1[j].transform = `translateY(${70 - h1}vh)`;
    styleOfElement2[j].transform = `translateY(${70 - h2}vh)`;
  }
}

export function resetBarStyleDefault(barRefs, array, animationSpeed) {
  setTimeout(() => {
    for (let j = 0; j < array.length; j++) {
      changeBackgroundColor(barRefs, j, "rgba(225, 0, 120, 0.5)");
      changeBoxShadow(barRefs, j, "5px 5px 50px 5px rgba(225, 0, 120, 0.2)");
    }
  }, animationSpeed);
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function enableButtons() {
  document.getElementById("reset").disabled = false;
  document.getElementById("bubbleSortButton").disabled = false;
  document.getElementById("selectionSortButton").disabled = false;
  document.getElementById("insertionSortButton").disabled = false;
  document.getElementById("range-slider").style.opacity = 1;
  document.getElementById("range-slider").style.visibility = "visible";
}

export function disableButtons() {
  document.getElementById("reset").disabled = true;
  document.getElementById("bubbleSortButton").disabled = true;
  document.getElementById("selectionSortButton").disabled = true;
  document.getElementById("insertionSortButton").disabled = true;
  document.getElementById("range-slider").style.opacity = 0;
  document.getElementById("range-slider").style.visibility = "hidden";
}

export function playAudio(myAudio) {
  const audio = new Audio(myAudio);
  audio.preload = "auto";
  const playing = audio.play();
  playing.then(() => {}).catch(() => {});
}

export function playCompletedSoundEffect() {
  playAudio(CompletedEffect);
}
