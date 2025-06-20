// 🎨 Etch-a-Sketch Project

// ========== DOM Elements ==========
const resizeBtn = document.querySelector("#resizeBtn");
const colorPicker = document.querySelector("#color-picker");
const darkenBtn = document.querySelector("#darken-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const eraseBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridContainer = document.querySelector(".grid-container");

// ========== State Flags ==========
let selectedColor = colorPicker.value;
let isRainbow = false;
let isEraser = false;
let isDarken = false;
let currentSize = 16;

// ========== Event Listeners ==========
document.addEventListener("DOMContentLoaded", () => {
  createGrid(currentSize);
  resizeBtn.textContent = `${currentSize} × ${currentSize}`;
});

resizeBtn.addEventListener("click", () => {
  const userInput = prompt("Enter a grid size from 1 to 100:");
  const value = parseInt(userInput);

  if (!isNaN(value) && value >= 1 && value <= 100) {
    currentSize = value;
    createGrid(currentSize);
    resizeBtn.textContent = `${value} × ${value}`;
  } else {
    console.warn("Enter a number between 1 and 100.");
  }
});

colorPicker.addEventListener("input", () => {
  selectedColor = colorPicker.value;
});

darkenBtn.addEventListener("click", () => {
  isDarken = !isDarken;
  isEraser = false;
  isRainbow = false;
});

rainbowBtn.addEventListener("click", () => {
  isRainbow = !isRainbow;
  isDarken = false;
  isEraser = false;
});

eraseBtn.addEventListener("click", () => {
  isEraser = !isEraser;
  isDarken = false;
  isRainbow = false;
});

clearBtn.addEventListener("click", () => {
  isDarken = false;
  isEraser = false;
  isRainbow = false;
  createGrid(currentSize);
});

// ========== Core Functions ==========
function createGrid(size) {
  gridContainer.innerHTML = "";
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize - 2}px`;
    square.style.height = `${squareSize - 2}px`;
    square.dataset.darkness = 0;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getCurrentColor(square);
    });

    gridContainer.appendChild(square);
  }
}

function getCurrentColor(square) {
  if (isDarken) {
    return getDarkenedColor(square);
  }
  if (isRainbow) {
    return getRandomColor();
  }
  if (isEraser) {
    square.dataset.darkness = 0;
    return "#ffffff";
  }
  square.dataset.darkness = 0;
  return selectedColor;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getDarkenedColor(square) {
  let currentDarkness = parseFloat(square.dataset.darkness);
  currentDarkness = Math.min(currentDarkness + 0.1, 1);
  square.dataset.darkness = currentDarkness;
  return `rgba(0, 0, 0, ${currentDarkness})`;
}
