let counterValue = 0;
let valueEl = document.querySelector("#value");
// console.log(ValueEl);
const decrEl = document.querySelector('button[data-action = "decrement"]');
// console.log(decrEl);
const incrEl = document.querySelector('button[data-action = "increment"]');
// console.log(incrEl);
decrEl.addEventListener("click", onDecrement);
incrEl.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function onIncrement() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
