// code created for the introduction to creative coding workshop (produced for techweek 2021)
// Author Phoebe Zeller - phoebe.zeller@vuw.ac.nz
let circlesX = []
let circlesY = []
let circlesSize = [] // [] // this symbol means we are making a space to store things
function setup(){
	// create the drawing canvas, save the canvas element
	createCanvas(960, 500);
	background(200);
	for(let i = 0; i < 10; i++){
		circlesX.push(random(200,900)); // storing things in our [] space
		circlesY.push(random(50,450));
		circlesSize.push(random(50,250));
	}

}

function draw(){
	fill(0);
	for(let i = 0; i < 10; i++){ // this is a loop that you can keep track of!
	ellipse(circlesX[i],circlesY[i],circlesSize[i]); // accessing things from our []
	}
}
