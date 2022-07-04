var easycam;

var size = 100;
var X = true;
var Y = true;
var Z = true;
var _X = false;
var _Y = false;
var _Z = false;
var LABELS = false;

var gui;

function setup() {
	createCanvas(400, 400, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();

	gui = createGui('Axes');
	gui.addGlobals('size', 'X', 'Y', 'Z', '_X', '_Y', '_Z', 'LABELS');
}

function draw() {
	rotateX(-0.5);
	rotateY(-0.5);

	background(255);

	push();
	axes({ size: size, bits: parseSelection() });
	pop();
}

function parseSelection() {
	let result = 0;
	if (X) result = result | Tree.X;
	if (Y) result = result | Tree.Y;
	if (Z) result = result | Tree.Z;
	if (_X) result = result | Tree._X;
	if (_Y) result = result | Tree._Y;
	if (_Z) result = result | Tree._Z;
	if (LABELS) result = result | Tree.LABELS;
	return result;
}
