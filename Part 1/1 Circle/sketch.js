// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz

let variable = 1 ; // this is an example of a variable. A variable is a number, but we give it a name. 
function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);
	background(200);
}

function draw(){
	fill(0);  // sets the circle colour to black
	ellipse(200,200,200); // draws the circle at the location 200,200 and at size 200 
}
