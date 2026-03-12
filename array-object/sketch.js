// Array and Object Notation Assignment
// Pinakin Gaur
// March 5, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let poolImg;

// Preloading all the images used in the coding
function preload() {
  poolImg = loadImage("table.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0, 0, 128);
  image(poolImg, width/2, height/2, poolImg.width*4, poolImg.height*4);  
}

function spawnBall(_x, _y) {
  let theBall = {
    x: _x,
    y: _y,
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 40),
    r: random(255),
    g: random(255),
    b: random(255),
  };
}





