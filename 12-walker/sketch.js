// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 2;
    this.speed = 5;
    this.color = "red";
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }
}

let harjot;
let mitt;

function setup() {
  createCanvas(windowWidth, windowHeight);
  harjot = new Walker(width/2, height/2);
  mitt = new Walker(300, 500);
  mitt.color = "blue";

}

function draw() {
  harjot.move();
  mitt.move();
}
