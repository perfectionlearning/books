//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = game || {};
game = {
		dialHand : null, car : null, oImg : null, _arrow : null, _x_velo : null, _y_velo : null,
		arrowDistFromOrigin : 137, /*carDistFromOrigin : 137*/carDistFromOrigin : 137, /*trackOrginFromTop : 241*/trackOrginFromTop : 239, /*trackOrginFromLeft : 381*/trackOrginFromLeft : 379,
		car_init_x : 0,	car_init_y : 0, arrow_init_x : 0, arrow_init_y : 0, canvasOriginX : 0, canvasOriginY : 0,
		imgW_onLoad : 0, imgH_onLoad : 0, currentCarSpeed : 0.0, thresholdVelocity : 12.5, isGameOver : false,
		isGamePaused : false
	};
game.actPath = '';
game.sharedPath = '';
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================

game.StartGame = function() {
	// Enable debug mode
	CAAT.DEBUG = 0;
	// List of all assets used by this game
	// Includes a path to the asset and an ID that is used throughout the code to reference it.
	var assets = [
		{id:'18mR', url:game.actPath+'18mradius.gif'},
		{id:'blueCar', url:game.actPath+'blueRace.gif'},
		{id:'ele_0', url:game.sharedPath+'gry50.gif'},
		{id:'ele_1', url:game.sharedPath+'dial_cen.gif'},
		{id:'ele_2', url:game.sharedPath+'gauge_x.gif'},
		{id:'ele_3', url:game.sharedPath+'gauge_y.gif'},
		{id:'ele_4', url:game.sharedPath+'gry100.gif'},
		{id:'ele_5', url:game.sharedPath+'wellleft.gif'},
		{id:'ele_6', url:game.sharedPath+'well50.gif'},
		{id:'ele_7', url:game.sharedPath+'well100.gif'},
		{id:'ele_8', url:game.sharedPath+'wellright.gif'},
		{id:'ele_9', url:game.sharedPath+'endleft.gif'},
		{id:'ele_10', url:game.sharedPath+'endright.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'ele_17', url:game.sharedPath+'incrBgMed.gif'},
		{id:'ele_18', url:game.sharedPath+'incre_decre_btn.png'},
		{id:'bannerImg', url:game.sharedPath+'banner.png'}
	];

	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 600,	// Height and width of the canvas that will be created
		'activity',		// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
}

//=======================================================
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}

//=======================================================
// create car, arrow, tangent line and add them to scene
//=======================================================
game.__addCar = function (parent, rotationTime, pos, radius, img, startAngle, _container) {
	var dialOriginX = 106, dialOriginY = 560;
	var _scene = game.getScene();
	game.car = game.createActor(img);
	var x = pos * Math.cos(startAngle);
	var y = pos * Math.sin(startAngle);

	game.car_init_x = x;
	game.car_init_y = y;

	var pos1 = game.arrowDistFromOrigin;
	var x1 = pos1 * Math.cos(startAngle) + 30;
	var y1 = pos1 * Math.sin(startAngle);

	game.arrow_init_x = x1;
	game.arrow_init_y = y1;

	game.imgW_onLoad = img.width;
	game.imgH_onLoad = img.height;

	game.car.
		setScale(radius/100, radius/100).
		setLocation(x + game.trackOrginFromLeft - parseInt(game.imgW_onLoad / 2), y + game.trackOrginFromTop - parseInt(game.imgH_onLoad / 2));

	var tempPoint =  new CAAT.ShapeActor().
					setLocation(x + game.trackOrginFromLeft - parseInt(game.imgW_onLoad / 2), y + game.trackOrginFromTop - parseInt(game.imgH_onLoad / 2)).
					//setFillStyle('#FF0000').
					setSize(5, 5);
	game.tempPoint = tempPoint;

	game._arrow = game.createArrow();
	game._arrow.setLocation(x1 + (game.trackOrginFromLeft) , y1 + (game.trackOrginFromTop));
	_scene.addChild(game._arrow);

	var tangentLine = game.createTangentLine();
	tangentLine.setLocation(x1 + (game.trackOrginFromLeft) , y1 + (game.trackOrginFromTop));
	//add if required to show reference line
	//_scene.addChild(tangentLine);

	_scene.addChild(game.car);
	_scene.addChild(game.tempPoint);
	_scene.addChild(game.panel, "bottom");

	game.dialHand = game.createDialHand();
	game.dialHand.setLocation(dialOriginX , dialOriginY);
	_scene.addChild(game.dialHand);

	var refPoint = {x:game.trackOrginFromLeft, y:game.trackOrginFromTop};

	return game.car;
}

//=======================================================
// create main image on the scene
//=======================================================
game.__createMainImgScene = function( cont ) {
	var scene = game.getScene();
	var director = game.getDirector();
	var midPoint =  new CAAT.ShapeActor().
					setLocation(game.trackOrginFromLeft, game.trackOrginFromTop).
					//setFillStyle('#FF0000').
					setSize(5, 5);
	scene.addChild(midPoint);
	game.canvasOriginX = game.trackOrginFromLeft;
	game.canvasOriginY = game.trackOrginFromTop;

	game.oImg = director.getImage('blueCar');
	var car_1 = game.__addCar(midPoint, 16000, game.carDistFromOrigin, 100, game.oImg, Math.PI / 2, cont);
}
//=======================================================
// initialize game
//=======================================================
game.__gameInitialize = function( director ){
	var _scene = director.createScene();
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };
	var cont = game.createPanels( director, _scene );
	game.__createMainImgScene( cont );
	CAAT.loop(60);
}