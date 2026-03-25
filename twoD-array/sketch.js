// 2D Arrays
// Pinakin Gaur
// March 24, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// create othello
// const CELL_SIZE = 150;
let rows;
let cols;
let grid = [[0, 0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0]];
const CELL_SIZE = grid.length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(CELL_SIZE);
  cols = Math.floor(CELL_SIZE);
  grid = generateEmptyGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  // self
  toggleCell(x, y);
}

function keyPressed() {
  if (key === "e") {
    grid = generateEmptyGrid(cols, rows);
  }
}

function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] ===1) {
      grid[y][x] = 0;
    }
  }
  
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
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
