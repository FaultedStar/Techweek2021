// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz

let circleX = 400;
let circleY = 250;
let circleSide = 100;

function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);
}

function draw(){

	background(200,100); // wipes the stage clean
	fill(0); // makes the circle black



	ellipse(circleX,circleY,circleSide); // draws the circle

	circleX = circleX+5; // this updates the circle position

	if(circleX > (width+circleSide/2)){ // asks if the circle is off screen to the right
		circleX = 0 - circleSide/2 // moves the circles X position to off screen to the left
	}


}
