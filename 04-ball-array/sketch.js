// Ball Object Notation Array

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
<<<<<<< HEAD
=======

  for (let ball of ballArray) {
    //move
    ball.x += ball.dx;
    ball.y += ball.dy;

    //display
    circle(ball.x, ball.y, ball.radius * 2);
  }
>>>>>>> 72a31635faeae520541cd287039deabcc77b9c81
}

function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let theBall = {
    x: random(width),
    y: random(height),
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 40),
  };
  ballArray.push(theBall);
}