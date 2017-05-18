//===============================================================
// This is the main entry point of the game
//===============================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	rabbitsXYPos: [],
	blackRabbit: null,
	blackRabbitSpriteImgAnim: null,
	brownRabbit: null,
	brownRabbitSpriteImgAnim: null,
	tanRabbit: null,
	tanRabbitSpriteImgAnim: null,
	grayRabbit: null,
	grayRabbitSpriteImgAnim: null,
	whiteRabbbit: null,
	whiteRabbitSpriteImgAnim: null,
	tag_1: null,
	tag_2: null,
	dragX: null,
	dragY: null,
	mainPanel: null,
	oActorContainer_1: null,
	oActorContainer_2: null,
	oDashTxtArr: []
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){

	game.mainContainerEle = [];
		game.mainContainerEle[game.mainContainerEle.length] = ['tanRabbit',   350, 195];
		game.mainContainerEle[game.mainContainerEle.length] = ['blackRabbit', 280, 410];
		game.mainContainerEle[game.mainContainerEle.length] = ['brownRabbit', 258, 268];
		game.mainContainerEle[game.mainContainerEle.length] = ['grayRabbit',  380, 410];
		game.mainContainerEle[game.mainContainerEle.length] = ['whiteRabbit', 420, 280];
		game.mainContainerEle[game.mainContainerEle.length] = ['Tag1', 		600, 450];
		game.mainContainerEle[game.mainContainerEle.length] = ['Tag2', 		670, 450];

	var assets = [
		{id:'bg',          	url:game.actPath+'RabbitBackground.gif'},
		{id:'dashBG',     	url:game.sharedPath+'dash.gif' },

		{id:'divider',		url:game.sharedPath+'divider.gif' },
		{id:'wellleft2',	url:game.sharedPath+'wellleft2.gif' },
		{id:'well100b',		url:game.sharedPath+'well100b.gif' },
		{id:'wellright2',	url:game.sharedPath+'wellright2.gif' },

		//Buttons GO, RESET, PAUSE
		{id:'buttons',		url:game.sharedPath+'buttons.png' },

		//Banner Image
		{id:'banner',      url:game.actPath+'banner.png' },

		{id:'tanRabbit',   	url:game.actPath+'tanRabbit.png'},
		{id:'blackRabbit', 	url:game.actPath+'blackRabbit.png'},
		{id:'brownRabbit', 	url:game.actPath+'brownRabbit.png'},
		{id:'grayRabbit',  	url:game.actPath+'grayRabbit.png'},
		{id:'whiteRabbit',  url:game.actPath+'whiteRabbit.png'},

		//tag Image
		{id:'Tag1', url:game.actPath+'Tag1.gif'},
		{id:'Tag2', url:game.actPath+'Tag2.gif'}
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
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){
	CAAT.DEBUG = 0;
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	game.__addRabbitsImgOnScene();
	CAAT.loop(60);
}

game.__addRabbitsImgOnScene = function(){
	//add TanRabbit on image scene
	game.tanRabbit = game.__addImageOnScene( game._director.getImage(game.mainContainerEle[0][0]), 1, 1);
	game.tanRabbit.
		setLocation(game.mainContainerEle[0][1], game.mainContainerEle[0][2]);
	game.mainPanel.addChild(game.tanRabbit);

	game.rabbitsXYPos[game.rabbitsXYPos.length] = [game.tanRabbit.x, game.tanRabbit.y];

	//add black rabbit image on scene
	game.blackRabbitSpriteImgAnim = new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('blackRabbit'), 1, 24).
									addAnimation('black_fwd_stand', [0, 1, 2, 3, 4, 7],   500).
									addAnimation('black_fwd_run',   [8, 9, 10, 8],        75).
									addAnimation('black_bwd_stand', [12, 13, 14, 15, 16], 500).
									addAnimation('black_bwd_run',   [19, 20, 21, 22],     75);

	game.blackRabbit = game.__addImageOnScene( game._director.getImage(game.mainContainerEle[1][0]), 1, 24);
	game.blackRabbit.
			setLocation(game.mainContainerEle[1][1], game.mainContainerEle[1][2]).
			setBackgroundImage(game.blackRabbitSpriteImgAnim).playAnimation('black_bwd_stand');
	game.mainPanel.addChild(game.blackRabbit);
	game.rabbitsXYPos[game.rabbitsXYPos.length] = [game.blackRabbit.x, game.blackRabbit.y];

	//add brown image on scene
	game.brownRabbitSpriteImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('brownRabbit'), 1, 20 ).
									addAnimation('brown_stand', [0, 1, 2, 3], 500).
									addAnimation('brown_run', [10, 11, 12], 75);
	game.brownRabbit = game.__addImageOnScene( game._director.getImage(game.mainContainerEle[2][0]), 1, 20);
	game.brownRabbit.
			setLocation(game.mainContainerEle[2][1], game.mainContainerEle[2][2]).
			setBackgroundImage(game.brownRabbitSpriteImgAnim).playAnimation('brown_stand');
	game.mainPanel.addChild(game.brownRabbit);
	game.rabbitsXYPos[game.rabbitsXYPos.length] = [game.brownRabbit.x, game.brownRabbit.y];

	//add Gray rabbit image on scene
	game.grayRabbitSpriteImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('grayRabbit'), 1, 20 ).
									addAnimation('gray_fwd_stand', [0, 1, 2, 3], 500).
									addAnimation('gray_fwd_run', [6, 7, 8], 100).
									addAnimation('gray_bwd_stand', [10, 11, 12, 13], 500).
									addAnimation('gray_bwd_run', [16, 17, 18], 100);
	game.grayRabbit = game.__addImageOnScene( game._director.getImage(game.mainContainerEle[3][0]), 1, 20);
	game.grayRabbit.
			setLocation(game.mainContainerEle[3][1], game.mainContainerEle[3][2]).
			setBackgroundImage(game.grayRabbitSpriteImgAnim).playAnimation('gray_fwd_stand');
	game.mainPanel.addChild(game.grayRabbit);
	game.rabbitsXYPos[game.rabbitsXYPos.length] = [game.grayRabbit.x, game.grayRabbit.y];

	//add white rabbit image on scene
	game.whiteRabbitSpriteImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('whiteRabbit'), 1, 18 ).
									addAnimation('white_stand', [0, 1, 2, 3, 4], 500).
									addAnimation('white_run', [9, 10, 11, 12], 100);
	game.whiteRabbit = game.__addImageOnScene( game._director.getImage(game.mainContainerEle[4][0]), 1, 18 );
	game.whiteRabbit.
			setLocation(game.mainContainerEle[4][1], game.mainContainerEle[4][2]).
			setBackgroundImage(game.whiteRabbitSpriteImgAnim).playAnimation('white_stand');
	game.mainPanel.addChild(game.whiteRabbit);
	game.rabbitsXYPos[game.rabbitsXYPos.length] = [game.whiteRabbit.x, game.whiteRabbit.y];

	//add Tag Image on the scene
	game.tag_1 = new CAAT.exemplarr()
					.setBounds(0, 0, 51, 44)
					.setBackgroundImage(
						new CAAT.Foundation.SpriteImage().initialize(game.mainContainerEle[5][0], 1, 1)
					)
					.setId('tag_1')
					.setLocation(game.mainContainerEle[5][1], game.mainContainerEle[5][2])
					.userDrag(game.__calculateSnap, game._mouseUp);

	game.mainPanel.addChild(game.tag_1);

	game.tag_2 = new CAAT.exemplarr()
					.setBounds(0, 0, 51, 44)
					.setBackgroundImage(
						new CAAT.Foundation.SpriteImage().initialize(game.mainContainerEle[6][0], 1, 1)
					)
					.setId('tag_2')
					.setLocation(game.mainContainerEle[6][1], game.mainContainerEle[6][2])
					//.userDrag();
					.userDrag(game.__calculateSnap, game._mouseUp);

	game.mainPanel.addChild(game.tag_2);

	/*
	game.tag_1.mouseUp = game.tagMouseHandler;
	game.tag_2.mouseUp = game.tagMouseHandler;
	*/
	game.resetTags();
}