// get user input
const inputSize = document.querySelector("#grid-size");


const main = document.querySelector(".grid-container ");

inputSize.addEventListener("change", () => {
  const input = parseInt(inputSize.value);

  if (isNaN(input) || input < 1 || input > 100) {
    console.warn("Please enter a valid number between 1 and 100.");
    return;
  }
  // clear old squares
  main.innerHTML = "";

   const size = (960 / input);
   
    for(let i=1; i <= input * input; i++ ) {
      const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${size - 2}px`;
        div.style.height = `${size - 2}px`;
  div.style.backgroundColor = "blue";
        main.appendChild(div);
      

    } 
});






