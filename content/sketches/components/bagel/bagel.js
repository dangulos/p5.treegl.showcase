// gui params
var mayorRadius = 140;
var minorRadius = 100;
var mayorDetail = 16;
var minorDetail = 16;

var gui;

function setup() {
	createCanvas(450, 450, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();

	gui = createGui('Double click to close');
	gui.addGlobals('mayorRadius', 'minorRadius', 'mayorDetail', 'minorDetail');
}

function draw() {
	background(255);
	stroke(0);
	strokeWeight(1);
	fill(0, 0, 255);

	push();
	bagel({mayorRadius, minorRadius, mayorDetail, minorDetail});
	pop();
}
