// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz

let circlesX = [] // these are arrays! They store variables
let circlesY = [] // [] // this symbol means we are making a space to store things
let circlesSize = []
let circleColor = []
let numberOfCircles = 7;
function setup() {
  // create the drawing canvas, save the canvas element
  createCanvas(960, 500);
  background(200);

  for (let i = 0; i < numberOfCircles; i++) {
    circlesX.push(random(200, 900)); // add random numbers to the x location array
    circlesY.push(random(50, 450)); // add random numbers to the y location array
    circlesSize.push(random(50, 250)); // add random sizes to the size array
  }

  circleColor.push(color(240, 215, 123)); // light yellow
  circleColor.push(color(180, 218, 229)); // light blue
  circleColor.push(color(174, 147, 190)); //lavender
  circleColor.push(color(92, 89, 146)); // orchid
  circleColor.push(color(64, 51, 105)); // purple
  circleColor.push(color(29, 38, 69)); // navy
  circleColor.push(color(20, 25, 31)); // off black

  // try out your own colour pallets https://color.adobe.com/create/color-wheel
  // you can use hex like this: color("#6B6EF2")

}

function draw() {

  stroke(225);

  for (let i = 0; i < numberOfCircles; i++) { // don't worry about this too much. It is a peice of logic that we use to make a bit of code loop, in this case 7 times
    fill(circleColor[i]);
    ellipse(circlesX[i], circlesY[i], circlesSize[i]);
  }
}
