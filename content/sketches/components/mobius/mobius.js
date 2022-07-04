// gui params
var detail = 16;
var radius = 20;

var gui;

function setup() {
	createCanvas(450, 450, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();

	gui = createGui('Axes');
	gui.addGlobals('detail', 'radius');
}

function draw() {
	rotateX(-0.5);
	rotateY(-0.5);

	background(255);
	stroke(0);
	strokeWeight(1);
	fill(0, 0, 255);

	push();
	mobius({detail, radius});
	pop();
}
