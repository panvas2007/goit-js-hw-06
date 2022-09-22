function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColorClick);
function onChangeColorClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyEl.style.backgroundColor;
}
