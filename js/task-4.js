const form = document.querySelector("form");

form.addEventListener("submit", submit);
function submit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const newForm = {
    email: email,
    password: password,
  };
  console.log(newForm);
  form.reset();
}
