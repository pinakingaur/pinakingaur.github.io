// Array and Object Notation Assignment
// Pinakin Gaur
// March 5, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let homeImg;

function preload() {
  homeImg = loadImage("image.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(homeImg, 100, 100);
}

function victim() {
  let theVictim = {
    name: "Joshua",
    age: 26,
    hairColor: "blonde",
    generalDescription: "multiple parking violations, has a gun license, fond of antique stuff, he is a stock broker, was accused of giving false tips to his clients",
  };
}

function evidence() {
  let evidence1 = {
    object: random("antique watch", "blonde hair strands", "a broken gold chain"),
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

