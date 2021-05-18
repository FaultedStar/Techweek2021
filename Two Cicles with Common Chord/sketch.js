// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz
// and Doug Easterly - douglasasterly@vuw.ac.nz
// Trigonometry / intersect function from - https://artport.whitney.org/commissions/softwarestructures2016/map.html

circleColor = [];
let circleA = {};
let circleB = {};
let circleC = {};

let speed = 1.1;

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
    cR: cAR,
    cW: cAR * 2,
    cCol: tempCol
  };

  tempCol = circleColor[floor(random(0, circleColor.length))];

  circleB = {
    cX: centerX,
    cY: cB_origin,
    cR: cBR,
    cW: cBR * 2,
    cCol: tempCol,
    origin: cB_origin
  };

  circleC = {
    cX: centerX,
    cY: cB_origin,
    cR: cBR,
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


  // if circleB is partially off stage, draw 2 circles
  if (circleB.cY - circleB.cW / 2 < 0) {
    fill(circleC.cCol);
    circleC.cCol.setAlpha(50);
    ellipse(circleC.cX, circleC.cY, circleC.cW);
    circleC.cY -= speed;

    fill(circleB.cCol);
    circleB.cCol.setAlpha(50);
    ellipse(circleB.cX, circleB.cY, circleB.cW);
    circleB.cY -= speed;
  } else {
    fill(circleB.cCol);
    circleB.cCol.setAlpha(50);
    ellipse(circleB.cX, circleB.cY, circleB.cW);
    circleB.cY -= speed;
  }
  //if circleB has moved fully off stage, transfer circleC y value and reset
  if (circleB.cY < -circleB.cW / 2) {
    circleB.cY = circleC.cY;
    circleC.cY = circleC.origin;
  }

      intersect(circleA, circleB);
        intersect(circleA, circleC);

}

// useful links to understand the Trigonometry principles
//https://geometryhelp.net/finding-length-common-chord/
// and https://www.youtube.com/watch?v=wbwIb69utaw&list=LL&index=2
function intersect(cA, cB) {

  var cAr2 = cA.cR * cA.cR;
  var cBr2 = cB.cR * cB.cR;

  var dx = cA.cX - cB.cX;
  var dy = cA.cY - cB.cY;
  var d2 = dx * dx + dy * dy;
  var d = sqrt(d2); // distance between circles

// if the circles are not overlapping, return from this function
  if ((d > cA.cR + cB.cR) || (d < abs(cA.cR - cB.cR))) {
    return; // no solution
  }

// constructing the common chord
  var a = (cAr2 - cBr2 + d2) / (2 * d);
  var h = sqrt(cAr2 - a * a);
  var x2 = cA.cX + a * (cB.cX - cA.cX) / d;
  var y2 = cA.cY + a * (cB.cY - cA.cY) / d;

  var paX = x2 + h * (cB.cY - cA.cY) / d;
  var paY = y2 - h * (cB.cX - cA.cX) / d;
  var pbX = x2 - h * (cB.cY - cA.cY) / d;
  var pbY = y2 + h * (cB.cX - cA.cX) / d;

// draw the common chord
  stroke(0);
  line(paX, paY, pbX, pbY);

}
