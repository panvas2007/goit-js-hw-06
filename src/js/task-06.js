const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputChangeBorderColor);

function onInputChangeBorderColor(event) {
  console.log(event.currentTarget.value.trim().length);
  console.log(Number(inputEl.dataset.length));
  if (
    event.currentTarget.value.trim().length === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid");
  } else inputEl.classList.add("invalid");
}
