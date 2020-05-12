const container = document.querySelector(".container");
const btnBlack = document.querySelector(".black");
const btnRainbow = document.querySelector(".rainbow");
const btnReset = document.querySelector(".reset");
const numInput = document.querySelector("input");
const gridItem = document.getElementsByClassName("grid-item")

let rows = 16; // Default value
let cols = 16; // Default value

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = "grid-item";
  };
};
makeGrid(rows, cols);

// The hover color effect
for(let i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener('mouseover', addColor);
}

function addColor() {
  if (btnBlack.classList.contains("active")) {
    this.style.background = "black";
  } 
  if (btnRainbow.classList.contains("active")) {
    let redValue = Math.floor(Math.random()*255+1);
    let greenValue = Math.floor(Math.random()*255+1);
    let blueValue = Math.floor(Math.random()*255+1);
    this.style.background = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
  } 
}

// Changes between Black and Rainbow
function btnActiveBlack() {
  reset();
  btnRainbow.classList.remove('active');
  btnBlack.classList.add('active');
}

function btnActiveRainbow() {
  reset();
  btnBlack.classList.remove('active');
  btnRainbow.classList.add('active');
}

btnBlack.addEventListener('click', btnActiveBlack);
btnRainbow.addEventListener('click', btnActiveRainbow);

// Changes all grid items back to white
function reset() {
  for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].style.background = "";
  }
}

btnReset.addEventListener('click', reset);

// Changes number of rows and columns in the container
let min = 1;
let max = 20;

numInput.addEventListener('change', function(){
  if (numInput.value < min || numInput.value > max) {
    return;
  }
  container.innerHTML = "";
  rows = numInput.value;
  cols = numInput.value;
  makeGrid(rows, cols);
  for(let i = 0; i < (rows * cols); i++) {
    gridItem[i].addEventListener('mouseover', addColor);
  }
});

