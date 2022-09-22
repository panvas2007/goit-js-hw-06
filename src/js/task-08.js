const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    const inputObj = {
      email: email.value,
      password: password.value,
    };
    console.log(inputObj);
    event.currentTarget.reset();
  } else alert("Всі поля повинні бути заповнені!");
}
