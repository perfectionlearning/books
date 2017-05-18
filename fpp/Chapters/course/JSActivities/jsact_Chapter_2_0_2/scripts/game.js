//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	actPath: null,
	sharedPath: null,
	oDashTxtArr : [],
	initHareXPos : 90,
	initHareYPos : 296,
	initTurtleXPos : 545,
	initTurtleYPos : 320
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	var assets = [
		{id:'bg',         url:game.actPath+'track2.gif'},
		{id:'pole',       url:game.actPath+'pole.gif'},
		{id:'dashBG',     url:game.sharedPath+'dash.gif' },
		{id:'endleft',    url:game.sharedPath+'endleft.gif' },
		{id:'endright',   url:game.sharedPath+'endright.gif' },
		{id:'well100b',   url:game.sharedPath+'well100b.gif' },
		{id:'wellleft2',  url:game.sharedPath+'wellleft2.gif' },
		{id:'wellright2', url:game.sharedPath+'wellright2.gif' },
		{id:'divider',    url:game.sharedPath+'divider.gif' },
		{id:'grid',       url:game.sharedPath+'grid.gif' },
		{id:'well50b',    url:game.sharedPath+'well50b.gif' },

		//Buttons GO, RESET, PAUSE
		{id:'buttons',    url:game.sharedPath+'buttons.png' },

		//Banner Image
		{id:'banner',     url:game.sharedPath+'banner.png' },

		//hare Animation spriteImage
		{id:'hareAnim',    url:game.actPath+'hare.png' },
		{id:'turtleAnim',   url:game.actPath+'turtle.png' }
	];

	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
}

//=======================================================
//Clean up function
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	//set background image
	game.__createImageOnMain();
	//place Hare and Tortoise image on the mainpanel
	game.__turtleHareImageOnMain();
	CAAT.loop(60);
}
//======================================================
//Adding sprite images on the main scene
//======================================================
game.__createImageOnMain = function(){
	var oActorImg = game.__addImageOnScene( game._director.getImage('bg'), 1, 1 );
	oActorImg.
		setLocation(0, 0);
	game.mainPanel.addChild(oActorImg);
}
//====================================================
//Place the hare and turtel image on scene
//====================================================
game.__turtleHareImageOnMain = function(){
	//add Hare Image on the Scene
	game.oHareSpriteImg = game.__addImageOnScene( game._director.getImage('hareAnim'), 6, 12 );
	game.oHareSpriteImg.
		setLocation(game.initHareXPos, game.initHareYPos);
	game.mainPanel.addChild(game.oHareSpriteImg);



	//add Turtle Image on the scene
	game.oTurtleSpriteImg = game.__addImageOnScene( game._director.getImage('turtleAnim'), 13, 11 );
	game.oTurtleSpriteImg.setAnimationImageIndex([33]);
	game.oTurtleSpriteImg.
		setLocation(game.initTurtleXPos, game.initTurtleYPos);

    game.oPale = game.__addImageOnScene( game._director.getImage('pole'), 1 , 1 );
	game.oPale.
		setLocation(610,315);
		game.mainPanel.addChild(game.oPale);

	game.mainPanel.addChild(game.oTurtleSpriteImg);

	game.hareAnimations();
	game.turtleAnimations();
}