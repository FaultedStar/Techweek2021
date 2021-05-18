// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz
// and Doug Easterly - douglasasterly@vuw.ac.nz
// Trigonometry / intersect function from - https://artport.whitney.org/commissions/softwarestructures2016/map.html

circleColor = [];
let circleA = {};
let circleB = {};

let speed = 1.2;

function setup() {
  // create the drawing canvas, save the canvas element
  createCanvas(500, 500);
  background(200);
  let centerX = width / 2;
  let centerY = height / 2;

  let cAR = width / 4;
  let cBR = width / 6;

  let cB_origin = height + cBR;

  circleColor.push(color(240, 215, 123)); // light yellow
  circleColor.push(color(180, 218, 229)); // light blue
  circleColor.push(color(174, 147, 190)); //lavender
  circleColor.push(color(92, 89, 146)); // orchid
  circleColor.push(color(64, 51, 105)); // purple
  circleColor.push(color(29, 38, 69)); // navy
  circleColor.push(color(20, 25, 31)); // off black

  let tempCol = circleColor[floor(random(0, circleColor.length))];
  circleA = {
    cX: centerX,
    cY: centerY,
    cW: cAR * 2,
    cCol: tempCol
  };

  tempCol = circleColor[floor(random(0, circleColor.length))];

  circleB = {
    cX: centerX,
    cY: cB_origin,
    cW: cBR * 2,
    cCol: tempCol,
    origin: cB_origin
  };

}

function draw() {

  noStroke();
  background(200, 50);
  fill(circleA.cCol);
  circleA.cCol.setAlpha(80);
  ellipse(circleA.cX, circleA.cY, circleA.cW);

  // if circleB is partially fully off stage, reset
  if (circleB.cY < -circleB.cW / 2) {
    circleB.cY = circleB.origin;
  }
  fill(circleB.cCol);
  circleB.cCol.setAlpha(50);
  ellipse(circleB.cX, circleB.cY, circleB.cW);
  circleB.cY -= speed;
}
