import { elements } from "./dom.js";

export function handleFormSubmit(e) {
  e.preventDefault();
  const { inputs, errors } = elements;

  const name = inputs.name.value;
  const email = inputs.email.value;
  const isConsented = inputs.consent.checked;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  errors.name.textContent = "";
  errors.email.textContent = "";
  errors.checked.textContent = "";

  if (name === "") {
    errors.name.textContent = "Please enter your first name";
  } else if (!isEmailValid) {
    errors.email.textContent = "Please enter a valid email";
  } else if (!isConsented) {
    errors.checked.textContent =
      "Please consent to the processing of personal data";
  } else {
    alert(`Form submitted successfully! ${name} ${email}`);
    elements.updatesForm.reset();
  }
}
