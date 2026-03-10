// Array and Object Notation Assignment
// Pinakin Gaur
// March 5, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




// NOTES
// make a for loop to make it appear as if the circle is hopping around at the same x axis

let mallImg;
let homeImg;
let button;
let d = 200;
let x = 600;
let y = 600;


function preload() {
  homeImg = loadImage("image.png");
  mallImg = loadImage("mall.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // button = createButton("Start");
  // button.position(windowWidth / 2 - x / 2, height / 2 - y / 2);
  // button.size(x, y);
  // button.style('font-size', '70px');
  // button.style('font-family', 'Roboto');
  // button.mousePressed(victim);
  button = createButton('Start'); 
  IntroButton = createButton('Learn what happended');
  IntroButton.hide();
}

function draw() {
  homeScreen(); 
}

function homeScreen() {
  image(homeImg, 0, 0, windowWidth, windowHeight);
  button.position(windowWidth/2, windowHeight/2);
  button.mousePressed(mainScreen);
  homeScreen.hide();  
}

function mainScreen() {
  button.hide();
  image(mallImg, 0, 0, windowWidth, windowHeight);
  IntroButton.show();
  IntroButton.position(windowWidth/2, windowHeight/2);
  IntroButton.mousePressed(victim);
}

function victim() {
  IntroButton.hide();
  for ( y = 600; y < 605; y++) {
    for (y = 605; y > 600; y--) {
      circle(x, y, d);
    }
  }
  
  let theVictim = {
    name: "Joshua",
    age: 26,
    hairColor: "blonde",
    generalDescription: "multiple parking violations, has a gun license, fond of antique stuff, he is a stock broker, was accused of giving false tips to his clients",
  };
}

function evidence() {
  let evidence1 = {
    object: random("antique watch", "blonde hairs", "a broken gold chain"),
    theLocation: "First floor, near the elevator",
  };
  let evidence2 = {
    object: random("a bullet", "a broken knife piece"),
    theLocation: "The elevator",
  };
}

function suspects() {
  let suspect1 = {
    name: "Bob",
    age: 25,
    hairColor: "blonde",
    generalDescription: "clean record, Fond of jewelry",
  };
  let suspect2 = {
    name: "John",
    age: 31,
    hairColor: "black",
    generalDescription: "multiple miscellaneous driving violations, Has a watch collection",
  };
  let suspect3 = {
    name: "Sam",
    age: 30,
    hairColor: "blonde",
    generalDescription: "clean record, gun license, ex-cop",
  };
}

