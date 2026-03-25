// 2D Arrays
// Pinakin Gaur
// March 24, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// create othello
const CELL_SIZE = 20;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  grid = generateEmptyGrid(cols, rows);
}

function draw() {
  background(220);
}

function keyPressed() {
  if (keyPressed === "e") {
    grid = generateEmptyGrid(cols, rows);
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid[y][x];
    }
  }
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}
