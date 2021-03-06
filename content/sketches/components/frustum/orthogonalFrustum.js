'use strict';

let fbo1, fbo2;
let cam1, cam2;
let height = 600;
let boxes;
let persp = true;

var left = 300;
var right = 300;
var frustum_width = 200;
var bottom = 300;
var topa = 300;
var frustum_height = 200;
var far = 500;
var viewer = ['axes', 'arrow'];

var gui;

function setup() {
    
	createCanvas(400, 700);
    
	fbo1 = createGraphics(400, 350, WEBGL);
	fbo2 = createGraphics(400, 350, WEBGL);
	fbo1.ortho(-fbo1.width / 2, fbo1.width / 2, -fbo1.height / 2, fbo1.height / 2, 1, 500);
	// FBOs cams
	cam1 = new Dw.EasyCam(fbo1._renderer, { distance: 200 });
	cam1.setZoomScale(false);
	let state1 = cam1.getState();
	cam1.attachMouseListeners(this._renderer);
	cam1.state_reset = state1; // state to use on reset (double-click/tap)
	cam1.setViewport([0, 0, width / 2, height]);
	cam2 = new Dw.EasyCam(fbo2._renderer, { rotation: [0.94, 0.33, 0, 0] });
	cam2.setZoomScale(false);
	cam2.attachMouseListeners(this._renderer);
	let state2 = cam2.getState();
	cam2.state_reset = state2; // state to use on reset (double-click/tap)
	cam2.setViewport([width / 2, 0, width / 2, height]);
	document.oncontextmenu = function () {
		return false;
	};
	// scene
	colorMode(RGB, 1);
	boxes = [];
	for (let i = 0; i < 5; i++){
		for (let j = 0; j < 5; j++) {
			boxes.push({
				position: createVector(i * 40 - 70, 0, j * 40 - 70),
				size: 20,
				color: color(random(), random(), random()),
			});
		}
	}
	print(fbo1.bounds());
    gui = createGui('Double click to close').setPosition(30, 350);

	gui.addGlobals('frustum_width', 'frustum_height', 'far', 'viewer');
}

function draw() {
    fbo1.ortho(-frustum_width/2, frustum_width/2, -frustum_height/2, frustum_height/2, 1, far);
	fbo1.background(175, 125, 115);
	fbo1.reset();
	fbo1.axes({ size: 100, bits: Tree.X | Tree.YNEG });
	fbo1.grid();
	scene(fbo1);
	beginHUD();
	image(fbo1, 0, 0);
	endHUD();
	fbo2.background(130);
	fbo2.reset();
	fbo2.axes();
	fbo2.grid();
	scene(fbo2);
	fbo2.push();
	fbo2.strokeWeight(3);
	fbo2.stroke('magenta');
	fbo2.fill(color(1, 0, 1, 0.3));

	let selectedViewer;
	if(viewer === 'arrow'){
		selectedViewer = () => {
			fbo2.push();
			fbo2.stroke('#0803FF');
			fbo2.arrow({height: 50});
			fbo2.pop();
		};
	} else {
		selectedViewer = () => fbo2.axes({ size: 50, bits: Tree.X | Tree._X | Tree.Y | Tree._Y | Tree.Z | Tree._Z });
	}

	fbo2.viewFrustum({ fbo: fbo1, bits: Tree.NEAR | Tree.FAR, viewer: selectedViewer });
	fbo2.pop();
	beginHUD();
	image(fbo2, 0, 350);
	endHUD();
}

function scene(graphics) {
	boxes.forEach(box => {
		graphics.push();
		graphics.fill(box.color);
		graphics.translate(box.position);
		graphics.box(box.size);
		graphics.pop();
	});
}
