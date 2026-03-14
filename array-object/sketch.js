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
};

// Preloading all the images used in the coding
function preload() {
  poolImg = loadImage("table.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   matter = Matter.Engine.create();
  //  matter.world.gravity.y = 0;
  imageMode(CENTER);
  Matter.Runner.run(matter); 
}

function draw() {
  background(220);
  
  
  // translate the origin back to 0,0
  translate(-width / 2,-height / 2);

  // loads pool table
  image(poolImg, width/2, height/2, poolImg.width*4, poolImg.height*4);  
  
  
  }




