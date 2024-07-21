function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const input = document.querySelector("#controls input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}
createButton.addEventListener("click", (event) => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ``;
  } else {
    alert("Podaj liczbę z zakresu od 1 do 100");
  }
});
function destroyBoxes() {
  boxesContainer.innerHTML = "";
  input.value = "";
}
destroyButton.addEventListener("click", destroyBoxes);
