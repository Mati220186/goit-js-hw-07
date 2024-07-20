const textinput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textinput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim() || "Anonymous";
});
