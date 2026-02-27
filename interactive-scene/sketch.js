// Project Title
// Pinakin Gaur
// February 25, 2026
//
// Extra for Experts:
// I have used a html element, "style". It lets me style the text inside the button.


// Notes for self
// fix the code so the keyboard only works after pressing the button.
// Add a game name and its purpose.
// add a code so when the opposite color rectangle is over the other, the game ends.




let w = 100;
let h = 50;
let x;
let y;
let button;
let c;


function setup() { 
  homeScreen(); 
  background(200, 0, 100); 
  stroke(255);
}

function draw() {  
}

function homeScreen() {
  let cnv = createCanvas(windowWidth / 2, windowHeight);
  cnv.position(width / 2);
  
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
  colorbutton = createButton("clear background");
  colorbutton.position(width/2, height/2 + y);
  colorbutton.mousePressed(randomColor);
  button.hide();
  x = width / 2 - (w/2);
  y = height / 2 - (h/2);
  keyPressed();
}

function randomColor() {
  c = random(['red', 'yellow', 'blue', 'green', 'pink']);
  background(c);
  button.style('color', 'black');
}

function keyPressed() {
  // c = random(['orange', 'purple', 'brown', 'black']);
  let starting = random(0, height/2);
  let secondStarting = random(height/2, height);
  
  if (key === 'w') {
    for (let y = starting; y > 0; y -= h + w) {
      fill('orange');
      rect(x, y, w, h);
    }
  }
  if (key === 'a') {
    for (let x = starting; x > 0; x -= w + h) {
      fill('orange');
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
      fill('purple');
      rect(x, y, w, h);
    }
  }
}