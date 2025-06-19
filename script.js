// get user input
const resizeBtn = document.querySelector("#resizeBtn");
const main = document.querySelector(".grid-container");

// 🧠 Reusable function to build the grid
function createGrid(size) {
  main.innerHTML = ""; // Clear old squares

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${squareSize - 2}px`;  // subtract for borders
    div.style.height = `${squareSize - 2}px`;
    div.style.backgroundColor = `${selectedColor}`; // for testing
    main.appendChild(div);
  }
}

// 🚀 Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
  createGrid(16); // default
  resizeBtn.textContent = "16 × 16";
});

// 🔄 Run when input value changes
resizeBtn.addEventListener("click", () => {
  // create user prompt by clicking
   let userInput = prompt("Enter a grid size from 1 to 100:");
   // convert the value to interger
  const value = parseInt(userInput);
  // validate input
  if (!isNaN(value) && value >= 1 && value <= 100) {
    createGrid(value);
    // update ui value display
    resizeBtn.textContent = `${value} × ${value}`; 
  } else {
    console.warn("Enter a number between 1 and 100.");
  }
});
// get color picker
const inputColor = document.querySelector("#color-picker");
let selectedColor = inputColor.value;








