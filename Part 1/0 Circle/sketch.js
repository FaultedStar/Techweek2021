// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Doug Easterly - douglas.easterly@vuw.ac.nz

// ///We can draw a circle by setting
// ///x(t) = r cos(t) and y(t) = r sin(t)
// //where r is the radius of the circle and t goes from 0 to 2PI


let t = 0;
let r = 80;

let cX = 960/2;
let cY = 500/2;

function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);
	background(200);

}

function draw(){
	fill(0);  // sets the circle colour to black
	let x = r * cos(t);
	let y = r * sin(t);
	push();
	translate(cX,cY);
	point(x,y);
	pop();

	t+=.05;
}
