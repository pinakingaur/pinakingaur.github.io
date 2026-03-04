// Interactive Scene
// Pinakin Gaur
// February 25, 2026
// Extra for Experts:
// I have used a html element, "style". It lets me style the text inside the button.

let w = 100;
let h = 50;
let x = 200;
let y = 100;
let button;

function setup() { 
  homeScreen();  
}

function draw() { 
}

function homeScreen() {
  let cnv = createCanvas(windowWidth / 2, windowHeight);
  cnv.position(width / 2);

  //   creates the start buttom
  button = createButton("Start");
  button.position(windowWidth / 2 - (x / 2), height / 2 - (y / 2));
  button.size(x, y);
  button.style('font-size', '70px');
  button.style('font-family', 'Roboto');
  button.mousePressed(mainScreen); 
  
  // creates the text 
  background(200, 0, 100); 
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Rectangle Madness', 0, 200);
}

function mainScreen() {
  text('use WASD', 0, 100);
  // Makes another button to let you clear the background
  colorbutton = createButton("clear background");
  colorbutton.position(width/2, height/2 + y);
  colorbutton.mousePressed(randomColor);
  button.hide();
  x = width / 2 - (w/2);
  y = height / 2 - (h/2);
  keyPressed();
}

function randomColor() {
  let c = random(['red', 'yellow', 'blue', 'green', 'pink']);
  background(c);

  // creates the text again after clearing the background
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Rectangle Madness', 0, 200);
  text('use WASD', 0, 100);
}

function keyPressed() {
  stroke(255);
  let starting = random(0, height/2);
  let secondStarting = random(height/2, height);

  // makes the rectangles with WASD
  if (key === 'w') {
    for (let y = starting; y > 0; y -= h + w) {
      fill('orange');
      rect(x, y, w, h);
    }
  }
  if (key === 'a') {
    for (let x = starting; x > 0; x -= w + h) {
      fill('black');
      rect(x, y, w, h);
    }
  }
  if (key === 's') {
    for (let y = secondStarting; y < height; y += h + w) {
      fill('purple');
      rect(x, y, w, h);
    }
  }
  if (key === 'd') {
    for (let x = secondStarting; x < width; x += w + h) {
      fill('grey');
      rect(x, y, w, h);
    }
  }
}