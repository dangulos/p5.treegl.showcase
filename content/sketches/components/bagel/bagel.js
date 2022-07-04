// gui params
var mayorRadius = 16;
var minorRadius = 20;
var mayorDetail = 16;
var minorDetail = 16;

var gui;

function setup() {
	createCanvas(450, 450, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();

	gui = createGui('Axes');
	gui.addGlobals('mayorRadius', 'minorRadius', 'mayorDetail', 'minorDetail');
}

function draw() {
	rotateX(-0.5);
	rotateY(-0.5);

	background(255);
	stroke(0);
	strokeWeight(1);
	fill(0, 0, 255);

	push();
	bagel({mayorRadius, minorRadius, mayorDetail, minorDetail});
	pop();
}
