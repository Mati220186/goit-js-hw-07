function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const btn = document.querySelector("body");
const color = document.querySelector(".color");
changeColor.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  console.log(newColor);
  btn.style.backgroundColor = newColor;
  color.innerHTML = `${newColor}`;
});
