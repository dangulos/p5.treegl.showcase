// gui params
var subdivisions = 10;
var size = 200;
var style = ['Tree.DOTS', 'Tree.SOLID'];
var selectedstyle;

var gui;

function setup() {
	createCanvas(400, 400, WEBGL);
	gui = createGui('Grid');

	gui.addGlobals('subdivisions', 'size', 'style');
	noLoop();
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
