// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz
// and Doug Easterly - douglasasterly@vuw.ac.nz
// Trigonometry / intersect function from - https://artport.whitney.org/commissions/softwarestructures2016/map.html

let circles = [];
let circlesSize = [];
let circleColor = [];
let randomAmount = 2;
let randomMin = 20;
let randomMax = 40;


function setup() {
  // create the drawing canvas, save the canvas element
  createCanvas(500, 500);
  background(200);
  let centerX = width / 2;
  let centerY = height / 2;


  circleColor.push(color(240, 215, 123)); // light yellow
  circleColor.push(color(180, 218, 229)); // light blue
  circleColor.push(color(174, 147, 190)); //lavender
  circleColor.push(color(92, 89, 146)); // orchid
  circleColor.push(color(64, 51, 105)); // purple
  circleColor.push(color(29, 38, 69)); // navy
  circleColor.push(color(20, 25, 31)); // off black

  for (let i = 0; i < floor(random(randomMin, randomMax)); i++) {
    let tempR = random(12, 120);
    let disp = width / tempR * 8; // larger circles tend towards center
    let tempCol = circleColor[floor(random(0, circleColor.length))];
    let tempX = random(centerX - disp, centerX + disp);
    let tempY = random(centerY - disp, centerY + disp);
    circles.push({
      cX: tempX,
      cY: tempY,
      cR: tempR,
      cCol: tempCol,
      id: i
    });
  }

}

function draw() {

  background(200, 50);
  for (let i = 0; i < circles.length; i++) {
    let tempCA = circles[i];
    tempCA.cX += random(-randomAmount, randomAmount);
    tempCA.cY += random(-randomAmount, randomAmount);

    fill(tempCA.cCol);
    noStroke();

    // cycle the alpha value of the colours
    tempCA.cCol.setAlpha(90 + 128 * sin(millis() / 2000)); // https://p5js.org/reference/#/p5.Color/setAlpha

    ellipse(circles[i].cX, circles[i].cY, circles[i].cR * 2);

    for (let j = i + 1; j < circles.length; j++) {
      let tempCB = circles[j];
      if (intersect(tempCA, tempCB)) {
      }
    }
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
}
