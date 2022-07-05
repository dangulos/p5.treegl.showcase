// gui params
var x = 300;
var y = 150;
var size = 100;
var shape = ['Tree.CIRCLE', 'Tree.SQUARE'];
var selectedShape;

var gui;

function setup() {
	createCanvas(400, 400, WEBGL);
	gui = createGui('Double click to close');

	gui.addGlobals('x', 'y', 'size', 'shape');
	y = 150;
	noLoop();
}

function draw() {
	// pick a shape
	switch (shape) {
		case 'Tree.SQUARE':
			selectedShape = Tree.SQUARE;
			break;

		default:
			selectedShape = Tree.CIRCLE;
			break;
	}

	background(255);
	stroke(0, 255, 255);
	strokeWeight(4);

	push();
	bullsEye({ x, y, size, shape: selectedShape });
	pop();
}
