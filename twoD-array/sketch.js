// 2D Arrays
// Pinakin Gaur
// March 24, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// create othello
const WHITE_TILE = 0;
const BLACK_TILE = 1;
const BOARD = 5;
let rows;
let cols;
let grid = 
  [[5, 5, 5, 5, 5, 5, 5, 5], 
    [5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 0, 1, 5, 5, 5],
    [5, 5, 5, 1, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5]];
const CELL_SIZE = 80;
let toggle = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(8);
  cols = Math.floor(8);
  strokeWeight(3);
}

function draw() {
  background(220);
  displayGrid();
  console.log(Math.floor(mouseX/CELL_SIZE), Math.floor(mouseY/CELL_SIZE));
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  // self
  toggleCell(x, y);
  outFlanked();
}

function outFlanked() {
  for (let y = 0; y < rows; y++) {    
    for (let x = 0; x < cols; x++) {
      if (grid[4][3] === BLACK_TILE && grid[4][4] === WHITE_TILE && grid[4][5] === BOARD) {
        grid[4][4] = BLACK_TILE;
      }
    }
  }
}

function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === BOARD && toggle) {
      grid[y][x] = BLACK_TILE;
      toggle = !toggle;
    }
    else if (grid[y][x] === BOARD) {
      grid[y][x] = WHITE_TILE;
      toggle = !toggle;
    }
  }  
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === WHITE_TILE) {
        fill("white");
      }
      else if (grid[y][x] === BLACK_TILE) {
        fill("black");
      }
      else if (grid[y][x] === BOARD) {
        fill("green");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

