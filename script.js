// get user input
const resizeBtn = document.querySelector("#resizeBtn");
const main = document.querySelector(".grid-container");
// get flags to switch button on/off when clicks
let isRainbow = false

let isEraser = false

let isDarken = false

// 🧠 Reusable function to build the grid
function createGrid(size) {
  main.innerHTML = ""; // Clear old squares

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${squareSize - 2}px`;  // subtract for borders
    div.style.height = `${squareSize - 2}px`;
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = getCurrentColor(div);
}); // for testing
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
inputColor.addEventListener("input", () => {
  selectedColor = inputColor.value;
});

// function to chose user choice of color buttons on
function getCurrentColor(div) {
  if(isDarken)
    return getDarken(div);
  if(isRainbow)
    return getRandomColor();
  if(isEraser)
    return "#ffffff";
  else 
    return selectedColor;

} 
// create rainbow or random color
 function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// get darken button , rainbow button and erase button
const darkenBtn = document.querySelector("#darken-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const eraseBtn = document.querySelector("#eraser-btn");

// add click function to buttons
darkenBtn.addEventListener("click", ()=>{
  isDarken = !isDarken;
  isEraser = isEraser;
  isRainbow = isRainbow;
});

rainbowBtn.addEventListener("click", ()=>{
  isDarken = isDarken;
  isEraser = isEraser;
  isRainbow = !isRainbow;
});

eraseBtn.addEventListener("click", ()=>{
  isDarken = isDarken;
  isEraser = !isEraser;
  isRainbow = isRainbow;
})
// get current color when hover

function getDarken(div){
 const currentColor = getComputedStyle(div).backgroundColor;

 // Check if it's already RGBA (darkened)
  let darkness = parseFloat(div.dataset.darkness || 0);
  darkness = Math.min(darkness + 0.1, 1); // cap at 1

  div.dataset.darkness = darkness;
  return `rgba(0, 0, 0, ${darkness})`;

}


// get clear button
const clearBtn = document.querySelector("#clear-btn");


clearBtn.addEventListener("click", ()=> {
  isDarken = false;
  isEraser = false;
  isRainbow = false;
  createGrid(16);

})







