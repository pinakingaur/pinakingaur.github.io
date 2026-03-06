// Array and Object Notation Assignment
// Pinakin Gaur
// March 5, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let homeImg;

function preload() {
  homeImg = loadImage("board.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(homeImg, 0, 0, homeImg.width * 0.5, homeImg.height * 0.5);
}
