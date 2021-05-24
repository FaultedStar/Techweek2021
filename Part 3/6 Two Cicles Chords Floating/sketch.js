// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz
// and Doug Easterly - douglasasterly@vuw.ac.nz
// Trigonometry / intersect function from - https://artport.whitney.org/commissions/softwarestructures2016/map.html

circleColor = [];
circles = [];
let randomMin = 15;
let randomMax = 30;

function setup() {
  // create the drawing canvas, save the canvas element
  createCanvas(500, 500);
  background(200);
  let centerX = width / 2;
  let centerY = height / 2;

  let cB_origin = height + 8;

  circleColor.push(color(240, 215, 123)); // light yellow
  circleColor.push(color(180, 218, 229)); // light blue
  circleColor.push(color(174, 147, 190)); //lavender
  circleColor.push(color(92, 89, 146)); // orchid
  circleColor.push(color(64, 51, 105)); // purple
  circleColor.push(color(29, 38, 69)); // navy
  circleColor.push(color(20, 25, 31)); // off black

  for (let i = 0; i < floor(random(randomMin, randomMax)); i++) {

    let tempR = random(12, 120);
    let disp = width / tempR * 8;
    let tempX = random(0, width);
    let tempY = height + tempR*2;

    let tempCol = circleColor[floor(random(0, circleColor.length))];
    let div = random(60, 360);
    let vSpeed = 1.1;


    let thisCircle = new Circle(tempX, tempY, tempR, tempCol, TAU / div, lerp(.4, 2.5, tempR / width));
    circles.push(thisCircle);
  }
}



function draw() {

  noStroke();
  background(200, 50);
  for (let i = 0; i < circles.length; i++) {
    let tempCA = circles[i];
    tempCA.show();
    tempCA.move();
    // cycle the alpha value of the colours

    for (let j = i + 1; j < circles.length; j++) {
      let tempCB = circles[j];
      intersect(tempCA, tempCB);
    }
  }


}

// useful links to understand the Trigonometry principles
// https://geometryhelp.net/finding-length-common-chord/
// and https://www.youtube.com/watch?v=wbwIb69utaw&list=LL&index=2
function intersect(cA, cB) {

  var cAr2 = cA.r * cA.r;
  var cBr2 = cB.r * cB.r;

  var dx = cA.x - cB.x;
  var dy = cA.y - cB.y;
  var d2 = dx * dx + dy * dy;
  var d = sqrt(d2); // distance between circles

  // if the circles are not overlapping, return from this function
  if ((d > cA.r + cB.r) || (d < abs(cA.r - cB.r))) {
    return; // no solution
  }

  // constructing the common chord
  var a = (cAr2 - cBr2 + d2) / (2 * d);
  var h = sqrt(cAr2 - a * a);
  var x2 = cA.x + a * (cB.x - cA.x) / d;
  var y2 = cA.y + a * (cB.y - cA.y) / d;

  var paX = x2 + h * (cB.y - cA.y) / d;
  var paY = y2 - h * (cB.x - cA.x) / d;
  var pbX = x2 - h * (cB.y - cA.y) / d;
  var pbY = y2 + h * (cB.x - cA.x) / d;

  // draw the common chord
  stroke(0);
  line(paX, paY, pbX, pbY);
  noStroke();

}
