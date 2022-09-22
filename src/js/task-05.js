const inputForm = document.querySelector("#name-input");
const outputForm = document.querySelector("#name-output");

inputForm.addEventListener("input", onImputNew);
function onImputNew(event) {
  if (event.currentTarget.value === "") {
    outputForm.textContent = "Anonimus";
  } else outputForm.textContent = event.currentTarget.value;
}
