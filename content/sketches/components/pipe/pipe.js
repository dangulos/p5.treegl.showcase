// gui params
var detail = 16;
var topRadius = 20;
var bottomRadius = 20;
var cylinderHeight = 250;
var topNormalX = 100;
var topNormalY = 100;
var bottomNormalX = 100;
var bottomNormalY = 100;

var gui;

function setup() {
	createCanvas(450, 450, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();

	gui = createGui('Double click to close');
	gui.addGlobals('detail', 'topRadius', 'bottomRadius', 'cylinderHeight', 'topNormalX', 'topNormalY', 'bottomNormalX', 'bottomNormalY');
}

function draw() {

	background(255);
	stroke(0);
	strokeWeight(1);
	fill(0, 0, 255);

	let topVector = {
		x: map(topNormalX, 0, 100, -1, 1),
		y: map(topNormalY, 0, 100, -1, 1),
	};

    let bottomVector = {
		x: map(bottomNormalX, 0, 100, -1, 1),
		y: map(bottomNormalY, 0, 100, -1, 1),
	};

	push();
	translate(cylinderHeight/4,0,0)
	pipe({
		detail,
		topRadius,
		bottomRadius,
		height: cylinderHeight,
		topNormal: new p5.Vector(topVector.x, topVector.y, 1),
		bottomNormal: new p5.Vector(bottomVector.x, bottomVector.y, -1),
	});
	pop();
}
