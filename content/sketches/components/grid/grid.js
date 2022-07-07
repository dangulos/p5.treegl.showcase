// gui params
var subdivisions = 10;
var size = 250;
var style = ['Tree.DOTS', 'Tree.SOLID'];
var selectedstyle;

var gui;

function setup() {
	createCanvas(400, 400, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();
	easycam.setZoomScale(false);

	gui = createGui('Double click to close');

	gui.addGlobals('subdivisions', 'size', 'style');
}

function draw() {
	// pick a style
	switch (style) {
		case 'Tree.SOLID':
			selectedStyle = Tree.SOLID;
			break;

		default:
			selectedStyle = Tree.DOTS;
			break;
	}

	background(255);
	stroke(0);
	strokeWeight(4);

	push();
	grid({ subdivisions, size, style: selectedStyle });
	pop();
}
