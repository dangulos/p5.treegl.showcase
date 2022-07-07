// gui params
var detail = 16;
var topRadius = 20;
var bottomRadius = 20;
var cylinderHeight = 250;
var topNormal = 100;
var topNormalY = 100;
var bottomNormal = 100;
var bottomNormalY = 100;
var caps = ['Both', 'Tree.TOPCAP', 'Tree.BOTTOMCAP'];

var gui;

function setup() {
	createCanvas(450, 450, WEBGL);
	setAttributes('antialias', true);

	easycam = createEasyCam();
	easycam.setZoomScale(false);

	gui = createGui('Double click to close');
	gui.addGlobals('detail', 'topRadius', 'bottomRadius', 'cylinderHeight', 'topNormal', 'bottomNormal', 'caps');
}

function draw() {

	background(255);
	stroke(0);
	strokeWeight(1);
	fill(0, 0, 255);

	let topVector = {
		x: Math.sin(map(topNormal,0,100,0,TWO_PI)),
		y: Math.cos(map(topNormal,0,100,0,TWO_PI)),
	};

    let bottomVector = {
		x: Math.sin(map(bottomNormal,0,100,0,TWO_PI)),
		y: Math.cos(map(bottomNormal,0,100,0,TWO_PI)),
	};

	let selectedCaps;

	switch (caps) {
		case 'Tree.TOPCAP':
			selectedCaps = Tree.TOPCAP;
			break;

		case 'Tree.BOTTOMCAP':
			selectedCaps = Tree.BOTTOMCAP;
			break;

		default:
			selectedCaps = Tree.TOPCAP | Tree.BOTTOMCAP;
			break;
	}

	push();
	translate(cylinderHeight/4,0,0)
	pipe({
		detail,
		topRadius,
		bottomRadius,
		height: cylinderHeight,
		topNormal: new p5.Vector(topVector.x, topVector.y, 1),
		bottomNormal: new p5.Vector(bottomVector.x, bottomVector.y, -1),
		caps: selectedCaps,
	});
	pop();
}
