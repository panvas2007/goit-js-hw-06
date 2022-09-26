const inputEl = document.querySelector("#font-size-control ");
inputEl.value = "0";
console.log(inputEl);
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChangeFontSize);

function onInputChangeFontSize() {
  textEl.style.fontSize = inputEl.value + "px";
}
