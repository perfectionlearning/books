//==========================================================================
// This is the main entry point of the game
//==========================================================================

// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	spaceshipImg: null,
	verticalVelocity: 0,
	verticalAccel: 0,
	BForce: 0,
	oDashTxtArr: [],
	actPath: null,
	sharedPath: null,
	mainPanel: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	var assets = [
		{id:'spaceship',      		url:game.actPath+'spaceship.png' },
		{id:'background',      		url:game.actPath+'background.gif' },
		{id:'dashBG',      			url:game.sharedPath+'dash.gif' },

		//dashboard Image
		{id:'wellleft',    			url:game.sharedPath+'wellleft2.gif' },
		{id:'well100',     			url:game.sharedPath+'well100b.gif' },
		{id:'well50b',     			url:game.sharedPath+'well50b.gif' },
		{id:'wellright',   			url:game.sharedPath+'wellright2.gif' },
		{id:'incre_decre_btn',   	url:game.sharedPath+'incre_decre_btn.png' },
		{id:'exponentbox',   		url:game.sharedPath+'exponentbox.gif' },
		{id:'incrBgMed',   			url:game.sharedPath+'incrBgMed.gif'},

		//Buttons GO, RESET, PAUSE
		{id:'buttons',     			url:game.sharedPath+'buttons.png' },

		//Banner Image
		{id:'banner',      			url:game.actPath+'banner.png' }
	];
						// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
};

//=======================================================
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}

game.__gameInitialize = function( director ){
		CAAT.DEBUG = 0;

		game._director = director;

		game._scene = director.createScene();
		game.mainPanel = game.createPanels( game._director, game._scene );
		//add image to the main
		game.__createMainImgScene();

		CAAT.loop(60);
	}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	var oActorImg = game.__addImageOnScene( game._director.getImage('background'), 1, 1 );
		oActorImg.
			setLocation(0, 0);
	game.mainPanel.addChild(oActorImg);

	game.spaceshipImg = new CAAT.Foundation.Actor().setBackgroundImage(
		new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('spaceship'), 5, 8)
	);

	game.spaceshipImg
		.setAnimationImageIndex([0])
		.setLocation(369, 81.5);
	game.mainPanel.addChild( game.spaceshipImg );
}
