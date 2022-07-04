// gui params
var x = 200;
var y = 200;
var size = 150;
var shape = ['Tree.CIRCLE', 'Tree.SQUARE'];
var selectedShape;

var gui;

function setup() {
	createCanvas(400, 400, WEBGL);
	gui = createGui('Bullseye');

	gui.addGlobals('x', 'y', 'size', 'shape');
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
