// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz

let circleX = 400;
let circleY = 200;
let randomAmount = 10;

function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);

}

function draw(){
	let circleSide = 100;
	background(200,100);
	fill(0);

	circleX = circleX+random(-randomAmount,randomAmount);
	circleY = circleY+random(-randomAmount,randomAmount);
	
	ellipse(circleX,circleY,circleSide);
}