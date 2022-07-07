var easycam;

var size = 200;
var LABELS = true;
var bits = ['default', 'X Y Z', '-X -Y -Z', 'everything'];

var gui;

function setup() {
	createCanvas(400, 400, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();
	easycam.setZoomScale(false);

	gui = createGui('Double click to close');
	gui.addGlobals('size', 'bits');
}

function draw() {
	rotateX(-0.5);
	rotateY(-0.5);

	background(255);

	let selectedBits = 0;

	switch (bits) {
		case 'X Y Z':
			selectedBits = Tree.X | Tree.Y | Tree.Z;
			break;

		case '-X -Y -Z':
			selectedBits = Tree._X | Tree._Y | Tree._Z;
			break;

		case 'everything':
			selectedBits = Tree.X | Tree.Y | Tree.Z | Tree.LABELS | Tree._X | Tree._Y | Tree._Z;
			break;

		default:
			selectedBits = Tree.X | Tree.Y | Tree.Z | Tree.LABELS;
			break;
	}

	push();
	axes({ size: size, bits: selectedBits });
	pop();
}
