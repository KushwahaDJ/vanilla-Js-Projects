// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // generate a random number between 0 - 3
  //   const randomNumber = getRandomNumber();
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
