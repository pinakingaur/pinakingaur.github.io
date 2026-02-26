// Image Demo

let monsterImg;

function preload() {
  monsterImg = loadImage("monster.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(monsterImg, mouseX, mouseY, monsterImg.width * 0.5, monsterImg.height * 0.5);
}
