// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz

let circleX = 400;
let circleY = 200;
let circleSide = 100;

let randomAmount = 10;


function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);

}

function draw(){

	background(200,100); // wipes the stage clear, every frame loop of the draw
	fill(0); // fill circle black

	circleX = circleX+random(-randomAmount,randomAmount); // adds a random number between -10 and 10 to the location of the circle
	circleY = circleY+random(-randomAmount,randomAmount);

	ellipse(circleX,circleY,circleSide); //draw circle
}
