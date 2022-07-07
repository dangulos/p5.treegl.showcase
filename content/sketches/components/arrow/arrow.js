// gui params
var detail = 16;
var radius = 20;
var height = 20;

var gui;

function setup() {
	createCanvas(450, 450, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();
	easycam.setZoomScale(false);

	gui = createGui('Double click to close');
	gui.addGlobals('detail', 'radius', 'height');
}

function draw() {
	rotateX(-0.5);
	rotateY(-0.5);

	background(255);
	stroke(0);
	strokeWeight(1);
	fill(0, 0, 255);

	push();
	arrow({detail, radius, height});
	pop();
}
