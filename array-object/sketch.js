// Array and Object Notation Assignment
// Pinakin Gaur
// March 5, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let poolImg;
let matter;  
let balls = [];
let cueBall; 
let aimLine; 
const ballRadius = 10;
const cueBallOrigin = 500;

// hitbox
const pocket = 4;
const rim = 40; 

let debugMode = false;

class hitBox {
  constructor(x, y, w, h) {
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h; 
   let cx = x + w / 2;
   let cy = y + h / 2;
   this.body = Matter.bodies.rectangles(cx, cy, w, h, {
    isStatic: true,
   });
   Matter.World.add(matter.world, this.body);
   }
  }

// NEED help commenting
const table = {
  left: 160 - rim,
  top: 395 - rim,
  right: 1116,
  bottom: 908,
  boundaries: [],
  pockets: [],
  tableWidth: function () {
    return this.right - this.left;
  },
  tableHeight: function () {
    return this.bottom - this.top;
  },
  centerY: function () {
    return this.top + this.tableHeight() / 2;
  },  
   boundariesLine: function () {
    this.boundaries = [
      new hitBox(this.left, this.top, this.tableWidth(), rim),
      new hitBox(this.left, this.bottom, this.tableWidth(), rim),
      new hitBox(this.left, this.top, rim, this.tableHeight()),
      new hitBox(this.right, this.top, rim, this.tableHeight() + rim),
   ];
  },
};

// Preloading all the images used in the coding
function preload() {
  poolImg = loadImage("table.png");
}

function keyPressed() {
  if (key === "d") debugMode = !debugMode;
}

function drawDebug() {
  if (!debugMode) return;

  push();
  stroke("blue");
  strokeWeight(3);
  let c = color("pink");
  c.setAlpha(100),
  fill(c);
  for (let b of table.boundaries) {
    rect(b.x, b.y, b.w, b.h);
  }
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   matter = Matter.Engine.create();
  //  matter.world.gravity.y = 0;

  table.boundariesLine();
  imageMode(CENTER);
  Matter.Runner.run(matter); 
}

function draw() {
  background(220);
  
  
  // translate the origin back to 0,0
  translate(-width / 2,-height / 2);

  // loads pool table
  image(poolImg, width/2, height/2, poolImg.width*4, poolImg.height*4);  

  drawDebug();
  
  
  }




