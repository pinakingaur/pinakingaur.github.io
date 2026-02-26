// Project Title
// Pinakin Gaur
// February 25, 2026
//
// Extra for Experts:
// I have used a html element, "style". It lets me style the text inside the button.

// notes for self.
// reduce variables
let w;
let h;
let x;
let y;
let d;
let side;
let button;
let s;
let C;
let r;

function setup() { 
  homeScreen(); 
  background(200, 0, 100); 
}

function draw() {  
}

function homeScreen() {
  let cnv = createCanvas(windowWidth / 2, windowHeight);
  cnv.position(width / 2);
  cnv.mouseOver(randomColor);
  
  //   creates the start button
  button = createButton("Start");
  x = 200;
  y = 100;
  
  button.position(windowWidth / 2 - (x / 2), height / 2 - (y / 2));
  button.size(x, y);
  

  button.style('font-size', '70px');
  button.style('font-family', 'Roboto');
  button.mousePressed(mainScreen);
}

function mainScreen() {
  button.hide();
  background(0);
  x = width / 2;
  y = height / 2;
  w = 100;
  h = 50;
  keyPressed();
}

function randomColor() {
  let c = random(['red', 'yellow', 'blue', 'black', 'green', 'pink']);
  background(c);
  button.style('color', c);
}

function keyPressed() {
  let c = random(['red', 'yellow', 'blue', 'black', 'green', 'pink']);
  let starting = random(0, height/2);
  let secondStarting = random(height/2, height)
  // w = random(10, 50);
  // h = random(10, 50);
  // d = random(10, 50);
  // side = random(10, 50);
  // r = rect(x, y, w, h);
  // C = circle(x, y, d);
  // s = square(x, y, side);
  // let shapes = random([r, C, s]);  
  
  if (key === 'w') {
    for (let y = starting; y > 0; y -= h) {
      fill(c);
      rect(x, y, w, h);
    }
  }
  if (key === 'a') {
    for (let x = starting; x > 0; x -= w) {
      fill(c);
      rect(x, y, w, h);
    }
  }
  if (key === 's') {
    for (let y = secondStarting; y < height; y += h) {
      fill(c);
      rect(x, y, w, h);
    }
  }
  if (key === 'd') {
    for (let x = secondStarting; x < width; x += w) {
      fill(c);
      rect(x, y, w, h);
    }
  }
}