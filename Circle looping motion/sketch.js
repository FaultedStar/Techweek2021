// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz

let circleX = 400;
let circleY = 250;
let circleSide = 100;

let randomAmount = 10;


function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);

}

function draw(){

	background(200,100);
	fill(0);

	circleX = circleX+5;

	ellipse(circleX,circleY,circleSide);

	if(circleX > (width+circleSide/2)){
		circleX = 0 - circleSide/2
	}
}
