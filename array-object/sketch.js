// Array and Object Notation Assignment
// Pinakin Gaur
// March 5, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mouseprevX = 0;
let mouseprevY = 0;
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
  // background(0, 0, 40);
  // image(poolImg, width/2, height/2, poolImg.width*4, poolImg.height*4);  
  background(220);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, mouseDragged, mouseDragged);
  
  }
}

function mouseClicked() {
  // line(mouseprevX, mouseprevY, mouseX, mouseY);
  
  // Update previous positions for next click
  mouseprevX = mouseX;
  mouseprevY = mouseY;
}





// function spawnBall(_x, _y) {
//   let theBall = {
//     x: _x,
//     y: _y,
//     // dx: random(-5, 5),
//     // dy: random(-5, 5),
//     radius: 20,
//   };
// }

// function mouseDragged() {
// }





