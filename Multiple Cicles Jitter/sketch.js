// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz
let circlesX = []
let circlesY = []
let circlesSize = []
let randomAmount = 5;

function setup() {
  // create the drawing canvas, save the canvas element
  createCanvas(960, 500);
  background(200);
  for (let i = 0; i < 10; i++) {
    circlesX.push(random(200, 900));
    circlesY.push(random(50, 450));
    circlesSize.push(random(50, 250));
  }
}

function draw() {
  	background(200,100);
    fill(0);
  for (let i = 0; i < 10; i++) {
    ellipse(circlesX[i], circlesY[i], circlesSize[i]);
    circlesX[i] = circlesX[i] + random(-randomAmount, randomAmount);
    circlesY[i] = circlesY[i] + random(-randomAmount, randomAmount);

  }
}
